import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Table,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
  // InputGroup
} from '@freecodecamp/react-bootstrap';

import {
  faChevronLeft,
  faChevronRight,
  faUsers,
  faSearch,
  faXmark,
  faAngleDoubleRight,
  faAngleDoubleLeft
} from '@fortawesome/free-solid-svg-icons';

import { mkConfig, generateCsv, download } from 'export-to-csv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Member, Group, UserList } from '../../redux/prop-types';
import { getDatabaseResource } from '../../utils/ajax';
import { Spacer } from '../../components/helpers';
import { AllUserStates } from './show-users-stats';

interface TableMembersProps {
  members?: Member[];
  groups: Group[];
  allListMembers?: Member[];
  countUsers?: number;
  currentPage: number;
  totalPages: number;
  currentGroupMembers: string;
  showMemberDetails: (member: Member) => void;
  navigateToPage: (forwardOrBackward: boolean | number) => void;
  handleChangeGroup: (event: React.ChangeEvent<HTMLInputElement>) => void;

  searchMember: (memberName: string) => void;
  addUsers: (
    event: React.ChangeEvent<HTMLInputElement>,
    groupName: string,
    userId: string[]
  ) => void;
  removeUsers: (
    event: React.ChangeEvent<HTMLInputElement>,
    userIds: string[],
    groupName: string
  ) => void;
  updatingMembersGroup?: { isAddedStatus: boolean; message: string };

  isLoadingMemberState: boolean;
}

export function TableMembers(props: TableMembersProps): JSX.Element {
  const {
    members,
    countUsers,
    groups,
    navigateToPage,
    currentPage,
    totalPages,
    currentGroupMembers,
    showMemberDetails,
    handleChangeGroup,
    searchMember,
    addUsers,
    removeUsers,
    updatingMembersGroup,

    isLoadingMemberState
  } = props;

  const [memberName, setMemberName] = useState<string>('');
  const [selectedGroupMembers, setSelectedGroupMembers] = useState<string[]>(
    []
  );

  const [selectedGroupName, setSelectedGroupName] = useState<string>('');

  const handleSearchMember = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchMember(memberName);
  };

  const [membersForExpot, setMembersForExpot] = useState<Member[]>();
  const [allUsersData, setAllUsersData] = useState<Member[]>();

  const handleClearSearchMemberInput = () => {
    setMemberName('');
    searchMember('');
  };

  const handleChangeSearchMemberInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const memberNameInputValue = event.target.value;
    setMemberName(memberNameInputValue);
  };

  const handleChangeGroupName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const groupMembersInput = event.target.value.slice();
    setSelectedGroupName(groupMembersInput);
  };
  const handleSelectedGroupMembers = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const isMemberCheked = selectedGroupMembers.find(
      selectedGroupMemberId =>
        selectedGroupMemberId == event.target.value.slice()
    );
    if (isMemberCheked) {
      const selectedGroupMembersFiltered = selectedGroupMembers.filter(
        selectedGroupMember => {
          return selectedGroupMember != event.target.value.slice();
        }
      );
      setSelectedGroupMembers([...selectedGroupMembersFiltered]);
    } else {
      setSelectedGroupMembers([
        ...selectedGroupMembers,
        event.target.value.slice()
      ]);
    }
  };

  const isMemberCheked = (memberId: string): boolean => {
    const isMemberCheked = selectedGroupMembers.find(
      selectedGroupMemberId => selectedGroupMemberId == memberId
    );
    return isMemberCheked ? true : false;
  };

  const getAllMembersForExport = async () => {
    const memberList = await getDatabaseResource<UserList>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `/all-users?limit=100`
    );
    if (memberList != null && !('error' in memberList)) {
      const inverseMemberList = memberList.userList.reverse();

      setMembersForExpot([...inverseMemberList]);
    } else {
      setMembersForExpot([]);
    }
  };

  const getAllUsersData = async () => {
    const users = await getDatabaseResource<Member>('/get-all-users-data');
    setAllUsersData(users as unknown as Member[]);
  };
  const dateFormat = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const exportUsers = (members: Member[]) => {
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const mockData = members.map(member => {
      return {
        Email: member.email,
        Nom: member.name,
        Telephone: member.phone,
        Whatsapp: member.whatsapp,
        Genre: member.gender,
        Ville: member.location,
        DateInscription:
          new Date(member.createAt) > new Date(new Date().getTime() - 120000)
            ? ''
            : dateFormat(member.createAt),
        coursSuivis:
          member.currentsSuperBlock.length > 0
            ? member.currentsSuperBlock
                .map(currentSuperBlock => {
                  return currentSuperBlock.superBlockName;
                })
                .join(',')
            : 'Aucun'
      };
    });

    const csv = generateCsv(csvConfig)(mockData);
    download(csvConfig)(csv);
  };

  useEffect(() => {
    void getAllMembersForExport();
    void getAllUsersData();
  }, []);

  useEffect(() => {
    return;
  }, [selectedGroupMembers]);

  useEffect(() => {
    setSelectedGroupMembers([]);
    setSelectedGroupName('');
  }, [currentGroupMembers, updatingMembersGroup]);

  return (
    <>
      <>
        <div className='p-6'>
          <AllUserStates members={allUsersData} />
        </div>
      </>
      <Row>
        <Col md={4} sm={12} xs={12}>
          <div className='section-block-padding bg-secondary stat-card'>
            <p>
              <span className='fw-bold'>{`Nombre total d'utilisateurs`}</span>
              <br />
              <span className='h1 fw-bold'>{countUsers}</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faUsers} className='icon-big' />
            </p>
          </div>
          <Spacer size={1} />
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12} xs={12}>
          <div className=''>
            <div>
              <form>
                <FormGroup controlId='class-room-filter'>
                  <ControlLabel>
                    <strong>{'Groupe'}</strong>
                  </ControlLabel>
                  <FormControl
                    componentClass='select'
                    onChange={handleChangeGroup}
                    value={currentGroupMembers}
                    className='standard-radius-5'
                  >
                    {' '}
                    {/* <option value='all'>Tout les membres</option> */}
                    {groups.length !== 0 &&
                      groups.map(group => {
                        return (
                          <option
                            key={group.userGroupName}
                            value={group.userGroupName}
                          >
                            {group.userGroupName == 'all'
                              ? 'Tout les membres'
                              : group.userGroupName}
                          </option>
                        );
                      })}
                    {/* <option value='dev-web-c1'>Dev web c1</option>
                    <option value='dev-web-c2'>Dev web c2</option>
                    <option value='smd-classe-a-matin'>
                      Smd classe a matin
                    </option>
                    <option value='smd-classe-a-midi'>Smd classe a midi</option> */}
                  </FormControl>
                  <HelpBlock className='none-help-block'>{'none'}</HelpBlock>

                  <div className='add-group-section'>
                    {selectedGroupMembers.length == 0 ? (
                      <FormControl
                        componentClass='select'
                        className='standard-radius-5'
                        disabled
                      >
                        <option value=''>Selecltionnez un groupe</option>
                      </FormControl>
                    ) : (
                      <FormControl
                        componentClass='select'
                        className='standard-radius-5'
                        onChange={handleChangeGroupName}
                      >
                        <option value=''>Selecltionnez un groupe</option>

                        {groups.length !== 0 &&
                          groups.map(group => {
                            return (
                              <>
                                {group.userGroupName !== 'all' && (
                                  <option
                                    key={group.userGroupName}
                                    value={group.userGroupName}
                                  >
                                    {group.userGroupName}
                                  </option>
                                )}
                              </>
                            );
                          })}
                      </FormControl>
                    )}

                    <div className='btn-group'>
                      {selectedGroupMembers.length == 0 ||
                      selectedGroupName == '' ||
                      currentGroupMembers == selectedGroupName ? (
                        <Button
                          disabled
                          type='submit'
                          className='standard-radius-5 btn-black'
                        >
                          {' '}
                          Ajouter
                        </Button>
                      ) : (
                        <Button
                          type='submit'
                          className='standard-radius-5 btn-black'
                          onClick={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            addUsers(
                              event,
                              selectedGroupName,
                              selectedGroupMembers
                            );
                          }}
                        >
                          Ajouter
                        </Button>
                      )}
                      &nbsp;&nbsp;&nbsp;
                      {selectedGroupMembers.length == 0 ||
                      // selectedGroupName !== '' ||
                      groups.length <= 1 ||
                      currentGroupMembers == 'all' ? (
                        <Button
                          disabled
                          type='submit'
                          className='standard-radius-5 btn-red'
                        >
                          Retirer
                        </Button>
                      ) : currentGroupMembers == selectedGroupName ? (
                        <Button
                          type='submit'
                          className='standard-radius-5 btn-red'
                          onClick={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) =>
                            removeUsers(
                              event,
                              selectedGroupMembers,
                              currentGroupMembers
                            )
                          }
                        >
                          Retirer
                        </Button>
                      ) : (
                        <Button
                          type='submit'
                          className='standard-radius-5 btn-red'
                          onClick={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) =>
                            removeUsers(
                              event,
                              selectedGroupMembers,
                              currentGroupMembers
                            )
                          }
                        >
                          Retirer
                        </Button>
                      )}
                    </div>
                  </div>
                  {updatingMembersGroup?.isAddedStatus ? (
                    <>
                      {' '}
                      {!updatingMembersGroup ||
                      updatingMembersGroup.message.length == 0 ? (
                        <HelpBlock className='none-help-block'>
                          {`none`}
                        </HelpBlock>
                      ) : (
                        <HelpBlock className='text-success'>
                          {`${updatingMembersGroup.message}`}
                        </HelpBlock>
                      )}
                    </>
                  ) : (
                    <>
                      {' '}
                      {!updatingMembersGroup ||
                      updatingMembersGroup.message.length == 0 ? (
                        <HelpBlock className='none-help-block'>
                          {`none`}
                        </HelpBlock>
                      ) : (
                        <HelpBlock className='text-error'>
                          {`${updatingMembersGroup.message}`}
                        </HelpBlock>
                      )}
                    </>
                  )}
                </FormGroup>
              </form>
            </div>
          </div>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <div className=''>
            <div>
              <form onSubmit={handleSearchMember}>
                <FormGroup controlId='class-room-filter'>
                  <ControlLabel>
                    <strong>{'Membre'}</strong>
                  </ControlLabel>
                  <div className='d-flex search-bar'>
                    <FormControl
                      type='search'
                      placeholder='Rechercher un membre'
                      className='standard-radius-5'
                      name='memberName'
                      value={memberName}
                      onChange={handleChangeSearchMemberInput}
                    />
                    <Button
                      type='submit'
                      className='standard-radius-5 btn-black'
                      id='button-addon2'
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    <Button
                      className='standard-radius-5 btn-red'
                      id='button-addon2'
                      onClick={handleClearSearchMemberInput}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </Button>
                  </div>
                </FormGroup>
              </form>
            </div>

            <div className='Export-section'>
              {membersForExpot?.length !== 0 ? (
                <Button
                  type='submit'
                  className='standard-radius-5 btn-black'
                  onClick={() => {
                    exportUsers(membersForExpot as Member[]);
                  }}
                >
                  Exporter les utilisateurs
                </Button>
              ) : (
                <Button
                  type='submit'
                  className='standard-radius-5 btn-black'
                  disabled
                >
                  Exporter les utilisateurs
                </Button>
              )}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className=''>
            {members && members.length > 0 ? (
              <Table responsive hover>
                <thead className='bg-dark-gray'>
                  <tr>
                    <th className='text-light'></th>
                    <th className='text-light'>Email</th>
                    <th className='text-light'>Nom</th>
                    <th className='text-light'>
                      Responsive Web Design Progrès
                    </th>
                    <th className='text-light'>{`Date d'inscription`}</th>
                    <th className='text-light'>Groupe(s)</th>
                    <th className='text-light'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member, index) => {
                    const responsiveWebDesignBlock =
                      member.currentsSuperBlock.find(superBlock => {
                        return (
                          superBlock.superBlockDashedName ==
                          'responsive-web-design'
                        );
                      });

                    const percentageCompleted: number =
                      responsiveWebDesignBlock &&
                      responsiveWebDesignBlock.totalCompletedChallenges &&
                      responsiveWebDesignBlock.totalChallenges
                        ? Math.floor(
                            (responsiveWebDesignBlock.totalCompletedChallenges /
                              responsiveWebDesignBlock.totalChallenges) *
                              100
                          )
                        : 0;

                    return (
                      <tr key={index}>
                        <td style={{ verticalAlign: 'middle' }}>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              checked={isMemberCheked(member.id)}
                              value={`${member.id}`}
                              id={`${index}`}
                              name={`${index}`}
                              onChange={handleSelectedGroupMembers}
                            />
                          </div>
                        </td>
                        <td style={{ verticalAlign: 'middle' }}>
                          {member.email}
                        </td>
                        <td style={{ verticalAlign: 'middle' }}>
                          {member.name}
                        </td>
                        <td style={{ verticalAlign: 'middle' }}>
                          {responsiveWebDesignBlock ? (
                            <div
                              className='progress-bar-wrap custom-progress-bloc standard-radius-5'
                              aria-label={`${percentageCompleted}`}
                            >
                              <div
                                className='progress-bar-background custom-progress-bloc standard-radius-5'
                                aria-hidden='true'
                              >
                                {`${percentageCompleted}%`}
                              </div>
                              <div
                                aria-hidden='true'
                                className='progress-bar-percent custom-progress-bloc standard-radius-5'
                                data-testid='fcc-progress-bar-percent'
                                style={{ width: `${percentageCompleted}%` }}
                              >
                                <div className='progress-bar-foreground custom-progress-bloc'>
                                  {`${percentageCompleted}%`}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div
                              className='progress-bar-wrap custom-progress-bloc standard-radius-5'
                              aria-label={`${percentageCompleted}`}
                            >
                              <div
                                className='progress-bar-background custom-progress-bloc standard-radius-5'
                                aria-hidden='true'
                              >
                                {`${percentageCompleted}%`}
                              </div>
                              <div
                                aria-hidden='true'
                                className='progress-bar-percent custom-progress-bloc standard-radius-5'
                                data-testid='fcc-progress-bar-percent'
                                style={{ width: `${percentageCompleted}%` }}
                              >
                                <div className='progress-bar-foreground custom-progress-bloc'>
                                  {`${percentageCompleted}%`}
                                </div>
                              </div>
                            </div>
                          )}
                        </td>
                        <td style={{ verticalAlign: 'middle' }}>
                          {member.createAt
                            ? dateFormat(`${member.createAt}`)
                            : ''}
                        </td>
                        {member.groups ? (
                          <td style={{ verticalAlign: 'middle' }}>
                            {member.groups.map(group => group).join(', ')}
                          </td>
                        ) : (
                          <td style={{ verticalAlign: 'middle' }}>{'Aucun'}</td>
                        )}

                        <td style={{ verticalAlign: 'middle' }}>
                          <button
                            className='action-btn-detail'
                            onClick={() => {
                              showMemberDetails(member);
                            }}
                          >
                            Voir plus
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            ) : isLoadingMemberState ? (
              <Table striped responsive hover>
                <thead className='bg-dark-gray'>
                  <tr>
                    <th className='text-light'></th>
                    <th className='text-light'></th>
                    <th className='text-light'></th>
                    <th className='text-light'></th>
                    {/* <th className='text-light'></th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>{`Chargement d'utilisateurs en cours ...`}</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            ) : (
              <Table striped responsive hover>
                <thead className='bg-dark-gray'>
                  <tr>
                    <th className='text-light'></th>
                    <th className='text-light'></th>
                    <th className='text-light'></th>
                    <th className='text-light'></th>
                    {/* <th className='text-light'></th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>{"Pas d'utilisateurs"}</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            )}
          </div>
        </Col>
        <Col md={12} sm={12} xs={12}>
          {/* Aller à la première page */}
          {currentPage > 1 && (
            <>
              <FontAwesomeIcon
                icon={faAngleDoubleLeft}
                className='pagination-chevron'
                onClick={() => navigateToPage(1)} // Naviguer vers la première page
              />
              &nbsp;
            </>
          )}
          {/* Page précédente */}
          {currentPage > 1 && (
            <FontAwesomeIcon
              icon={faChevronLeft}
              className='pagination-chevron'
              onClick={() => {
                navigateToPage(currentPage - 1); // Aller à la page précédente
              }}
            />
          )}
          &nbsp;
          {`  ${currentPage} sur ${totalPages}  `}
          &nbsp;
          {/* Page suivante */}
          {currentPage < totalPages && (
            <FontAwesomeIcon
              icon={faChevronRight}
              className='pagination-chevron'
              onClick={() => {
                navigateToPage(currentPage + 1); // Aller à la page suivante
              }}
            />
          )}
          &nbsp;
          {/* Aller à la dernière page */}
          {currentPage < totalPages && (
            <>
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className='pagination-chevron'
                onClick={() => navigateToPage(totalPages)} // Naviguer vers la dernière page
              />
            </>
          )}
        </Col>
      </Row>
    </>
  );
}
