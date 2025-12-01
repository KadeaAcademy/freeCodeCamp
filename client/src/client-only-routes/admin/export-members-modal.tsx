import React, { useState, useMemo } from 'react';
import { Modal, Button } from '@freecodecamp/react-bootstrap';
import { Member, Group } from '../../redux/prop-types';
import './export-members-modal.css';

interface ExportMembersModalProps {
  show: boolean;
  onHide: () => void;
  members: Member[];
  groups: Group[];
  onExport: (exportConfig: ExportConfig) => Promise<void>;
  exportHistory: ExportHistoryItem[];
}

export interface ExportConfig {
  // Filtres de sélection
  filters: {
    status: 'all' | 'active' | 'inactive' | 'new';
    groups: string[]; // IDs des groupes sélectionnés
    roles: string[]; // Rôles sélectionnés
    progress: 'all' | '<25' | '25-50' | '50-75' | '>75';
    registrationPeriod:
      | 'all'
      | '30days'
      | '2months'
      | '3months'
      | '6months'
      | '1year'
      | 'custom';
    customStartDate?: string;
    customEndDate?: string;
  };
  // Champs à exporter
  fields: {
    personal: {
      name: boolean;
      email: boolean;
      phone: boolean;
      whatsapp: boolean;
      location: boolean;
      registrationDate: boolean;
    };
    account: {
      role: boolean;
      groups: boolean;
      status: boolean;
    };
    progress: {
      globalProgress: boolean;
      kadeaProgress: boolean;
      moodleProgress: boolean;
      awsProgress: boolean;
      totalCompleted: boolean;
      totalInProgress: boolean;
    };
    activity: {
      lastConnection: boolean;
      lastActivity: boolean;
      connectionsCount: boolean;
    };
  };
  // Options de format
  format: {
    type: 'csv' | 'excel' | 'json';
    includeHeaders: boolean;
    csvSeparator: ',' | ';' | '\t';
    encoding: 'utf-8' | 'iso-8859-1';
  };
}

export interface ExportHistoryItem {
  id: string;
  date: Date;
  memberCount: number;
  filters: ExportConfig['filters'];
  format: ExportConfig['format']['type'];
  fileName: string;
}

const EXPORT_LIMIT = 10000;

export function ExportMembersModal({
  show,
  onHide,
  members,
  groups,
  onExport,
  exportHistory
}: ExportMembersModalProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<'config' | 'history'>('config');

  // Configuration par défaut
  const [config, setConfig] = useState<ExportConfig>({
    filters: {
      status: 'all',
      groups: [],
      roles: [],
      progress: 'all',
      registrationPeriod: 'all'
    },
    fields: {
      personal: {
        name: true,
        email: true,
        phone: true,
        whatsapp: false,
        location: false,
        registrationDate: true
      },
      account: {
        role: true,
        groups: true,
        status: true
      },
      progress: {
        globalProgress: true,
        kadeaProgress: false,
        moodleProgress: false,
        awsProgress: false,
        totalCompleted: false,
        totalInProgress: false
      },
      activity: {
        lastConnection: false,
        lastActivity: false,
        connectionsCount: false
      }
    },
    format: {
      type: 'csv',
      includeHeaders: true,
      csvSeparator: ',',
      encoding: 'utf-8'
    }
  });

  // Calculer le nombre de membres qui seront exportés
  const filteredMembersCount = useMemo(() => {
    let filtered = [...members];

    // Filtrer par statut
    if (config.filters.status !== 'all') {
      const now = new Date();
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      filtered = filtered.filter(m => {
        if (config.filters.status === 'active') {
          return m.currentsSuperBlock && m.currentsSuperBlock.length > 0;
        }
        if (config.filters.status === 'inactive') {
          return !m.currentsSuperBlock || m.currentsSuperBlock.length === 0;
        }
        if (config.filters.status === 'new') {
          const createDate = m.createAt ? new Date(m.createAt) : null;
          return createDate && createDate >= thirtyDaysAgo;
        }
        return true;
      });
    }

    // Filtrer par groupes
    if (config.filters.groups.length > 0) {
      filtered = filtered.filter(m => {
        return config.filters.groups.some(
          groupId => m.groups && m.groups.includes(groupId)
        );
      });
    }

    // Filtrer par rôles
    if (config.filters.roles.length > 0) {
      filtered = filtered.filter(m => config.filters.roles.includes(m.role));
    }

    // Filtrer par progression
    if (config.filters.progress !== 'all') {
      filtered = filtered.filter(m => {
        const hasProgress =
          m.currentsSuperBlock && m.currentsSuperBlock.length > 0;
        if (!hasProgress) return config.filters.progress === '<25';

        const maxProgress = Math.max(
          ...m.currentsSuperBlock.map(sb => {
            if (sb.totalChallenges && sb.totalCompletedChallenges) {
              return (sb.totalCompletedChallenges / sb.totalChallenges) * 100;
            }
            return 0;
          })
        );

        switch (config.filters.progress) {
          case '<25':
            return maxProgress < 25;
          case '25-50':
            return maxProgress >= 25 && maxProgress < 50;
          case '50-75':
            return maxProgress >= 50 && maxProgress < 75;
          case '>75':
            return maxProgress >= 75;
          default:
            return true;
        }
      });
    }

    // Filtrer par période d'inscription
    if (config.filters.registrationPeriod !== 'all') {
      const now = new Date();
      let startDate: Date;

      if (config.filters.registrationPeriod === 'custom') {
        startDate = config.filters.customStartDate
          ? new Date(config.filters.customStartDate)
          : new Date(0);
      } else {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const periods: Record<string, number> = {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          '30days': 30,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          '2months': 60,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          '3months': 90,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          '6months': 180,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          '1year': 365
        };
        const days = periods[config.filters.registrationPeriod] || 30;
        startDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
      }

      filtered = filtered.filter(m => {
        const createDate = m.createAt ? new Date(m.createAt) : null;
        if (!createDate) return false;

        if (
          config.filters.registrationPeriod === 'custom' &&
          config.filters.customEndDate
        ) {
          const endDate = new Date(config.filters.customEndDate);
          return createDate >= startDate && createDate <= endDate;
        }

        return createDate >= startDate;
      });
    }

    return filtered.length;
  }, [members, config.filters]);

  const isOverLimit = filteredMembersCount > EXPORT_LIMIT;
  const canExport = filteredMembersCount > 0 && !isOverLimit;

  const handleExport = async () => {
    if (!canExport) return;

    try {
      await onExport(config);
      onHide();
    } catch (error) {
      console.error('Export error:', error);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      bsSize='lg'
      aria-labelledby='export-members-modal-title'
    >
      <Modal.Header closeButton>
        <Modal.Title id='export-members-modal-title'>
          Exporter les membres
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Tabs */}
        <div className='export-modal-tabs'>
          <button
            className={`export-tab ${activeTab === 'config' ? 'active' : ''}`}
            onClick={() => setActiveTab('config')}
          >
            Configuration
          </button>
          <button
            className={`export-tab ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            Historique ({exportHistory.length})
          </button>
        </div>

        {activeTab === 'config' ? (
          <div className='export-config'>
            {/* Section 1: Filtres */}
            <div className='export-section'>
              <h3 className='export-section-title'>1. Filtres de sélection</h3>

              <div className='export-filter-group'>
                <label htmlFor='export-status-filter'>Statut:</label>
                <select
                  id='export-status-filter'
                  value={config.filters.status}
                  onChange={e =>
                    setConfig({
                      ...config,
                      filters: {
                        ...config.filters,
                        status: e.target
                          .value as ExportConfig['filters']['status']
                      }
                    })
                  }
                >
                  <option value='all'>Tous les membres</option>
                  <option value='active'>Membres actifs uniquement</option>
                  <option value='inactive'>Membres inactifs uniquement</option>
                  <option value='new'>Nouveaux membres (30 jours)</option>
                </select>
              </div>

              <div className='export-filter-group'>
                <label htmlFor='export-groups-filter'>Groupes:</label>
                <select
                  id='export-groups-filter'
                  multiple
                  value={config.filters.groups}
                  onChange={e => {
                    const selected = Array.from(
                      e.target.selectedOptions,
                      option => option.value
                    );
                    setConfig({
                      ...config,
                      filters: {
                        ...config.filters,
                        groups: selected
                      }
                    });
                  }}
                  size={5}
                >
                  <option value='all'>Tous les groupes</option>
                  {groups.map(group => (
                    <option key={group.id} value={group.id}>
                      {group.userGroupName}
                    </option>
                  ))}
                </select>
                <small>
                  Maintenez Ctrl/Cmd pour sélectionner plusieurs groupes
                </small>
              </div>

              <div className='export-filter-group'>
                <div>Rôles:</div>
                <div className='export-checkboxes'>
                  <label>
                    <input
                      type='checkbox'
                      checked={config.filters.roles.includes('Super-admin')}
                      onChange={e => {
                        const roles = e.target.checked
                          ? [...config.filters.roles, 'Super-admin']
                          : config.filters.roles.filter(
                              r => r !== 'Super-admin'
                            );
                        setConfig({
                          ...config,
                          filters: { ...config.filters, roles }
                        });
                      }}
                    />
                    Super-admin
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      checked={config.filters.roles.includes('Admin')}
                      onChange={e => {
                        const roles = e.target.checked
                          ? [...config.filters.roles, 'Admin']
                          : config.filters.roles.filter(r => r !== 'Admin');
                        setConfig({
                          ...config,
                          filters: { ...config.filters, roles }
                        });
                      }}
                    />
                    Admin
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      checked={config.filters.roles.includes('User')}
                      onChange={e => {
                        const roles = e.target.checked
                          ? [...config.filters.roles, 'User']
                          : config.filters.roles.filter(r => r !== 'User');
                        setConfig({
                          ...config,
                          filters: { ...config.filters, roles }
                        });
                      }}
                    />
                    User
                  </label>
                </div>
              </div>

              <div className='export-filter-group'>
                <label htmlFor='export-progress-filter'>Progression:</label>
                <select
                  id='export-progress-filter'
                  value={config.filters.progress}
                  onChange={e =>
                    setConfig({
                      ...config,
                      filters: {
                        ...config.filters,
                        progress: e.target
                          .value as ExportConfig['filters']['progress']
                      }
                    })
                  }
                >
                  <option value='all'>Tous</option>
                  <option value='<25'>&lt; 25%</option>
                  <option value='25-50'>25-50%</option>
                  <option value='50-75'>50-75%</option>
                  <option value='>75'>&gt; 75%</option>
                </select>
              </div>

              <div className='export-filter-group'>
                <label htmlFor='export-registration-period-filter'>
                  Période d&apos;inscription:
                </label>
                <select
                  id='export-registration-period-filter'
                  value={config.filters.registrationPeriod}
                  onChange={e =>
                    setConfig({
                      ...config,
                      filters: {
                        ...config.filters,
                        registrationPeriod: e.target
                          .value as ExportConfig['filters']['registrationPeriod']
                      }
                    })
                  }
                >
                  <option value='all'>Tous</option>
                  <option value='30days'>30 derniers jours</option>
                  <option value='2months'>2 derniers mois</option>
                  <option value='3months'>3 derniers mois</option>
                  <option value='6months'>6 derniers mois</option>
                  <option value='1year'>1 an</option>
                  <option value='custom'>Période personnalisée</option>
                </select>

                {config.filters.registrationPeriod === 'custom' && (
                  <div className='custom-date-range'>
                    <input
                      type='date'
                      value={config.filters.customStartDate || ''}
                      onChange={e =>
                        setConfig({
                          ...config,
                          filters: {
                            ...config.filters,
                            customStartDate: e.target.value
                          }
                        })
                      }
                      placeholder='Date début'
                    />
                    <input
                      type='date'
                      value={config.filters.customEndDate || ''}
                      onChange={e =>
                        setConfig({
                          ...config,
                          filters: {
                            ...config.filters,
                            customEndDate: e.target.value
                          }
                        })
                      }
                      placeholder='Date fin'
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Section 2: Champs à exporter */}
            <div className='export-section'>
              <h3 className='export-section-title'>2. Champs à exporter</h3>

              <div className='export-fields-group'>
                <h4>Informations personnelles</h4>
                {Object.entries(config.fields.personal).map(([key, value]) => (
                  <label key={key}>
                    <input
                      type='checkbox'
                      checked={value}
                      onChange={e =>
                        setConfig({
                          ...config,
                          fields: {
                            ...config.fields,
                            personal: {
                              ...config.fields.personal,
                              [key]: e.target.checked
                            }
                          }
                        })
                      }
                    />
                    {key === 'name' && 'Nom complet'}
                    {key === 'email' && 'Email'}
                    {key === 'phone' && 'Téléphone'}
                    {key === 'whatsapp' && 'WhatsApp'}
                    {key === 'location' && 'Localisation'}
                    {key === 'registrationDate' && 'Date d&apos;inscription'}
                  </label>
                ))}
              </div>

              <div className='export-fields-group'>
                <h4>Informations de compte</h4>
                {Object.entries(config.fields.account).map(([key, value]) => (
                  <label key={key}>
                    <input
                      type='checkbox'
                      checked={value}
                      onChange={e =>
                        setConfig({
                          ...config,
                          fields: {
                            ...config.fields,
                            account: {
                              ...config.fields.account,
                              [key]: e.target.checked
                            }
                          }
                        })
                      }
                    />
                    {key === 'role' && 'Rôle'}
                    {key === 'groups' && 'Groupes'}
                    {key === 'status' && 'Statut'}
                  </label>
                ))}
              </div>

              <div className='export-fields-group'>
                <h4>Progression</h4>
                {Object.entries(config.fields.progress).map(([key, value]) => (
                  <label key={key}>
                    <input
                      type='checkbox'
                      checked={value}
                      onChange={e =>
                        setConfig({
                          ...config,
                          fields: {
                            ...config.fields,
                            progress: {
                              ...config.fields.progress,
                              [key]: e.target.checked
                            }
                          }
                        })
                      }
                    />
                    {key === 'globalProgress' && 'Progression globale (%)'}
                    {key === 'kadeaProgress' && 'Progression Kadea'}
                    {key === 'moodleProgress' && 'Progression Moodle'}
                    {key === 'awsProgress' && 'Progression AWS'}
                    {key === 'totalCompleted' && 'Total défis complétés'}
                    {key === 'totalInProgress' && 'Total défis en cours'}
                  </label>
                ))}
              </div>

              <div className='export-fields-group'>
                <h4>Activité</h4>
                {Object.entries(config.fields.activity).map(([key, value]) => (
                  <label key={key}>
                    <input
                      type='checkbox'
                      checked={value}
                      onChange={e =>
                        setConfig({
                          ...config,
                          fields: {
                            ...config.fields,
                            activity: {
                              ...config.fields.activity,
                              [key]: e.target.checked
                            }
                          }
                        })
                      }
                    />
                    {key === 'lastConnection' && 'Dernière connexion'}
                    {key === 'lastActivity' && 'Dernière activité'}
                    {key === 'connectionsCount' && 'Nombre de connexions (30j)'}
                  </label>
                ))}
              </div>
            </div>

            {/* Section 3: Options de format */}
            <div className='export-section'>
              <h3 className='export-section-title'>3. Options de format</h3>

              <div className='export-filter-group'>
                <div>Format:</div>
                <div className='export-radio-group'>
                  <label>
                    <input
                      type='radio'
                      name='format'
                      value='csv'
                      checked={config.format.type === 'csv'}
                      onChange={() =>
                        setConfig({
                          ...config,
                          format: { ...config.format, type: 'csv' as const }
                        })
                      }
                    />
                    CSV
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='format'
                      value='excel'
                      checked={config.format.type === 'excel'}
                      onChange={() =>
                        setConfig({
                          ...config,
                          format: { ...config.format, type: 'excel' as const }
                        })
                      }
                    />
                    Excel (.xlsx)
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='format'
                      value='json'
                      checked={config.format.type === 'json'}
                      onChange={() =>
                        setConfig({
                          ...config,
                          format: { ...config.format, type: 'json' as const }
                        })
                      }
                    />
                    JSON
                  </label>
                </div>
              </div>

              {config.format.type === 'csv' && (
                <>
                  <div className='export-filter-group'>
                    <label>
                      <input
                        type='checkbox'
                        checked={config.format.includeHeaders}
                        onChange={e =>
                          setConfig({
                            ...config,
                            format: {
                              ...config.format,
                              includeHeaders: e.target.checked
                            }
                          })
                        }
                      />
                      Inclure les en-têtes de colonnes
                    </label>
                  </div>

                  <div className='export-filter-group'>
                    <label htmlFor='export-csv-separator'>
                      Séparateur CSV:
                    </label>
                    <select
                      id='export-csv-separator'
                      value={config.format.csvSeparator}
                      onChange={e =>
                        setConfig({
                          ...config,
                          format: {
                            ...config.format,
                            csvSeparator: e.target.value as ',' | ';' | '\t'
                          }
                        })
                      }
                    >
                      <option value=','>Virgule (,)</option>
                      <option value=';'>Point-virgule (;)</option>
                      <option value='\t'>Tabulation</option>
                    </select>
                  </div>

                  <div className='export-filter-group'>
                    <label htmlFor='export-encoding'>Encodage:</label>
                    <select
                      id='export-encoding'
                      value={config.format.encoding}
                      onChange={e =>
                        setConfig({
                          ...config,
                          format: {
                            ...config.format,
                            encoding: e.target.value as 'utf-8' | 'iso-8859-1'
                          }
                        })
                      }
                    >
                      <option value='utf-8'>UTF-8</option>
                      <option value='iso-8859-1'>ISO-8859-1</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            {/* Aperçu */}
            <div className='export-preview'>
              <div
                className={`export-preview-info ${isOverLimit ? 'error' : ''}`}
              >
                <strong>
                  {filteredMembersCount} membre
                  {filteredMembersCount > 1 ? 's' : ''} seront exporté
                  {filteredMembersCount > 1 ? 's' : ''}
                </strong>
                {isOverLimit && (
                  <div className='export-limit-warning'>
                    ⚠️ Limite dépassée ! Maximum {EXPORT_LIMIT.toLocaleString()}{' '}
                    membres autorisés. Veuillez affiner vos filtres.
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className='export-history'>
            {exportHistory.length === 0 ? (
              <p>Aucun export enregistré</p>
            ) : (
              <table className='export-history-table'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Membres</th>
                    <th>Format</th>
                    <th>Filtres</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {exportHistory.map(item => (
                    <tr key={item.id}>
                      <td>{item.date.toLocaleString()}</td>
                      <td>{item.memberCount}</td>
                      <td>{item.format.toUpperCase()}</td>
                      <td>
                        <small>
                          {item.filters.status !== 'all' &&
                            `Statut: ${item.filters.status}, `}
                          {item.filters.groups.length > 0 &&
                            `${item.filters.groups.length} groupe(s), `}
                          {item.filters.roles.length > 0 &&
                            `${item.filters.roles.length} rôle(s)`}
                        </small>
                      </td>
                      <td>
                        <button
                          className='export-history-download'
                          onClick={() => {
                            // TODO: Implémenter le re-téléchargement
                            console.log('Re-download:', item.id);
                          }}
                        >
                          Télécharger
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Annuler</Button>
        {activeTab === 'config' && (
          <Button
            bsStyle='primary'
            onClick={handleExport}
            disabled={!canExport}
          >
            Exporter ({filteredMembersCount})
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
