import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Table,
  FormGroup,
  ControlLabel,
  FormControl
  // InputGroup
} from '@freecodecamp/react-bootstrap';

// Types
interface Member {
  id: number;
  name: string;
  role: string;
  gender: string;
  createAt: string;
}

interface EnrollmentStat {
  period: string;
  count: number;
}

interface Props {
  members: Member[] | undefined;
}

export function AllUserStates({ members }: Props) {
  const [sortBy, setSortBy] = useState<string>('name');
  const [enrollmentStats, setEnrollmentStats] = useState<EnrollmentStat[]>([]);
  const [bestPeriod, setBestPeriod] = useState<EnrollmentStat | null>(null);
  const [worstPeriod, setWorstPeriod] = useState<EnrollmentStat | null>(null);
  const [dateRange, setDateRange] = useState<number>(3); // Plage de dates en mois

  // Fonction pour calculer les statistiques d'inscription par période de date
  const calculateEnrollmentStats = () => {
    const stats: { [key: string]: number } = {};
    const now = new Date();
    const rangeStart = new Date();
    rangeStart.setMonth(now.getMonth() - dateRange);

    members?.forEach(member => {
      const createDate = new Date(member.createAt);
      if (createDate >= rangeStart) {
        const period = `${createDate.getFullYear()}-${createDate.getMonth()}`;
        stats[period] = (stats[period] || 0) + 1;
      }
    });

    // Convertir en tableau pour le tri
    const statsArray: EnrollmentStat[] = Object.entries(stats).map(
      ([period, count]) => ({
        period,
        count
      })
    );

    // Trier par nombre d'inscriptions
    statsArray.sort((a, b) => b.count - a.count);

    setBestPeriod(statsArray[0]);
    setWorstPeriod(statsArray[statsArray.length - 1]);
    setEnrollmentStats(statsArray);
  };

  // Fonction de tri des membres
  const sortMembers = (members: Member[]) => {
    return [...members].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'role':
          return a.role.localeCompare(b.role);
        case 'gender':
          return a.gender.localeCompare(b.gender);
        case 'date':
          return (
            new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
          );
        default:
          return 0;
      }
    });
  };

  useEffect(() => {
    calculateEnrollmentStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [members, dateRange]);

  // Ajout des statistiques d'inscription en haut du composant
  const renderEnrollmentStats = () => (
    <Row className='mb-4'>
      <Col md={4}>
        <div className='p-3 rounded shadow-sm bg-white'>
          <h5>Statistiques inscription</h5>
          {bestPeriod && (
            <div className='p-2 rounded bg-success text-white mb-2'>
              Meilleure période:{' '}
              {new Date(bestPeriod.period).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long'
              })}
              <br />({bestPeriod.count} inscriptions)
            </div>
          )}
          {worstPeriod && (
            <div className='p-2 rounded bg-danger text-white'>
              Période la plus faible:{' '}
              {new Date(worstPeriod.period).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long'
              })}
              <br />({worstPeriod.count} inscriptions)
            </div>
          )}
        </div>
      </Col>
    </Row>
  );

  // Ajout des options de tri
  const renderSortingOptions = () => (
    <FormGroup className='mb-3'>
      <ControlLabel>Trier par</ControlLabel>
      <FormControl
        componentClass='select'
        value={sortBy}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSortBy(e.target.value)
        }
        className='standard-radius-5'
      >
        <option value='name'>Nom</option>
        <option value='role'>Rôle</option>
        <option value='gender'>Genre</option>
        <option value='date'>Date inscription</option>
      </FormControl>
    </FormGroup>
  );

  // Ajout des options de plage de dates
  const renderDateRangeOptions = () => (
    <FormGroup className='mb-3'>
      <ControlLabel>Plage inscriptions</ControlLabel>
      <FormControl
        componentClass='select'
        value={dateRange}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setDateRange(Number(e.target.value))
        }
        className='standard-radius-5'
      >
        <option value={3}>3 mois</option>
        <option value={6}>6 mois</option>
        <option value={12}>12 mois</option>
        <option value={24}>24 mois</option>
      </FormControl>
    </FormGroup>
  );

  // Calcul de la couleur selon le nombre d'inscriptions
  const getEnrollmentColor = (count: number) => {
    if (count === 0) return 'bg-danger text-white';
    if (count <= 5) return 'bg-warning text-dark';
    return 'bg-success text-white';
  };

  return (
    <>
      {renderEnrollmentStats()}
      <Row>
        <Col md={6} sm={12} xs={12}>
          {renderSortingOptions()}
          {renderDateRangeOptions()}
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Rôle</th>
                <th>Genre</th>
                <th>Date inscription</th>
                <th>Statut</th> {/* Nouvelle colonne pour la statistique */}
              </tr>
            </thead>
            <tbody>
              {sortMembers(members ? members : []).map(member => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                  <td>{member.gender}</td>
                  <td>
                    {new Date(member.createAt).toLocaleDateString('fr-FR')}
                  </td>
                  <td>
                    {enrollmentStats.some(
                      stat =>
                        stat.period ===
                        `${new Date(member.createAt).getFullYear()}-${new Date(
                          member.createAt
                        ).getMonth()}`
                    ) ? (
                      <span
                        className={`badge ${getEnrollmentColor(
                          enrollmentStats.find(
                            stat =>
                              stat.period ===
                              `${new Date(
                                member.createAt
                              ).getFullYear()}-${new Date(
                                member.createAt
                              ).getMonth()}`
                          )?.count || 0
                        )}`}
                      >
                        {enrollmentStats.find(
                          stat =>
                            stat.period ===
                            `${new Date(
                              member.createAt
                            ).getFullYear()}-${new Date(
                              member.createAt
                            ).getMonth()}`
                        )?.count || 0}{' '}
                        inscriptions
                      </span>
                    ) : (
                      <span className='badge bg-secondary'>Aucune donnée</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
