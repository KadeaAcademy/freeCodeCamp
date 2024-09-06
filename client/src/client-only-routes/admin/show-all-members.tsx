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
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
// import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faUsers,
  faSearch,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { mkConfig, generateCsv, download } from 'export-to-csv';
import validator from 'validator';
import {
  addUserInGRoup,
  addUserInRole,
  getDatabaseResource,
  getExternalResource,
  remoevUserInGRoup
} from '../../utils/ajax';
import envData from '../../../../config/env.json';
import { createFlashMessage } from '../../components/Flash/redux';
import { Loader, Spacer } from '../../components/helpers';
import { CourseProgressBar } from '../../components/AdminComponents/course-progress-bar';

import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../../redux';

import { CurrentSuperBlock, User } from '../../redux/prop-types';
import './admin-global.css';
const { apiLocation, homeLocation, moodleApiBaseUrl, moodleApiToken } = envData;

// TODO: update types for actions
interface ShowAllMembersProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
  path?: string;
}

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading: boolean, user: User, isSignedIn) => ({
    showLoading,
    user,
    isSignedIn
  })
);

const mapDispatchToProps = {
  createFlashMessage,
  navigate
};

type Member = {
  id: string;
  email: string;
  name: string;
  gender: string;
  currentsSuperBlock: CurrentSuperBlock[];
  groups: string[];
  createAt: string;
  phone: string;
  whatsapp: string;
  location: string;
  role: string;
};

type UserList = {
  userList: Member[];
  totalPages: number;
  currentPage: number;
  countUsers: number;
};
type Group = {
  id: string;
  userGroupName: string;
};
type GroupList = {
  userGroupList: Group[];
  totalPages: number;
  currentPage: number;
  countUsers: number;
};

export function ShowAllMembers(props: ShowAllMembersProps): JSX.Element {
  const { isSignedIn, navigate, showLoading, user } = props;

  const [members, setMembers] = useState<Member[]>();
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [countUsers, setCountUsers] = useState<number>();
  const [memberNameToSearch, setMemberNameToSearch] = useState<string>('');
  const [groupMembers, setGroupMembers] = useState<string>('all');
  const [groups, setGroups] = useState<Group[]>([]);
  const [updating, setupdating] =
    useState<{ isAddedStatus: boolean; message: string }>();
  const [countMemberGroupUpdate, setCountMemberGroupUpdate] =
    useState<number>(1);
  const [isLoadingMember, setIsLoadingMember] = useState<boolean>(false);
  // const data={
  //   id:"64d39b958b1fd17adc0e8f28",
  //   userGroup:"C3"
  // }

  const getMembers = async () => {
    setIsLoadingMember(true);
    const memberList = await getDatabaseResource<UserList>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `/all-users?page=${currentPage}&limit=10&classRoom=${groupMembers}&memberName=${memberNameToSearch}`
    );
    if (memberList != null && !('error' in memberList)) {
      setMembers(memberList.userList);
      setCountUsers(memberList.countUsers);
      setIsLoadingMember(false);

      if (totalPages == 1) {
        setTotalPages(Number(memberList.totalPages));
        setCurrentPage(Number(memberList.currentPage));
      }
    } else {
      setMembers([]);
      setCountUsers(0);
      setIsLoadingMember(false);
    }
  };

  const getAllGroups = async () => {
    const allGroups = await getDatabaseResource<GroupList>(
      `/all-users-group?page=${currentPage}`
    );
    if (allGroups?.userGroupList != null) {
      setGroups([
        { id: '0', userGroupName: 'all' },
        ...allGroups.userGroupList
      ]);
    } else {
      setGroups([{ id: '0', userGroupName: 'all' }]);
    }
  };

  const showMemberDetails = (member: Member | null) => {
    setSelectedMember(member);
  };

  const returnToTable = () => {
    setSelectedMember(null);
  };

  const navigateToPage = (forwardOrBackward: boolean) => {
    if (forwardOrBackward) {
      if (currentPage < totalPages) {
        setCurrentPage(Number(currentPage + 1));
      }
    } else {
      if (currentPage > 1) {
        setCurrentPage(Number(currentPage - 1));
      }
    }
  };

  const handleChangeGroupMembers = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const groupMembersInput = event.target.value.slice();
    setGroupMembers(groupMembersInput);
    setCurrentPage(1);
    setTotalPages(1);
  };

  const searchMember = (memberNameInput = '') => {
    const memberName = memberNameInput;
    setMemberNameToSearch(memberName);
  };
  // const handleChangeGroupName = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ): void => {
  //   event.preventDefault();
  //   const groupMembersInput = event.target.value.slice();
  //   setSelectedGroupName(groupMembersInput);

  // };

  const addUser = (
    event: React.ChangeEvent<HTMLInputElement>,
    groupName: string,
    userId: string[]
  ) => {
    event.preventDefault();
    const data = {
      ids: userId,
      userGroup: groupName
    };

    if (userId.length !== 0) {
      let res;
      void (async () => {
        res = await addUserInGRoup(data);

        if (res && res.isAdded) {
          setCountMemberGroupUpdate(countMemberGroupUpdate + 1);

          setupdating({
            isAddedStatus: res.isAdded,
            message: res.message
          });
          setTimeout(() => {
            setupdating({
              isAddedStatus: false,
              message: ''
            });
          }, 5000);
        }
      })();
    }
  };

  const removeUser = (
    event: React.ChangeEvent<HTMLInputElement>,
    userIds: string[],
    groupName: string
  ) => {
    event.preventDefault();
    const data = {
      ids: userIds,
      userGroup: groupName
    };

    let res;
    void (async () => {
      res = await remoevUserInGRoup(data);
      setCountMemberGroupUpdate(countMemberGroupUpdate + 1);

      if (res && res.isRemoved) {
        setupdating({
          isAddedStatus: res.isRemoved,
          message: res.message
        });
        setTimeout(() => {
          setupdating({
            isAddedStatus: false,
            message: ''
          });
        }, 5000);
      }
    })();
  };

  useEffect(() => {
    void getAllGroups();

    void getMembers();
    return () => {
      setMembers([]); // cleanup useEffect to perform a React state update
      // setGroupMembers('all');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, groupMembers, memberNameToSearch, countMemberGroupUpdate]);

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  if (!validator.equals(user.role, 'Super-admin')) {
    if (!validator.equals(user.role, 'Admin')) {
      navigate(`${homeLocation}`);
      return <Loader fullScreen={true} />;
    }
  }

  return (
    <>
      <Helmet title={`Tableau de bord - Membres | Kadea Online`} />

      <div className=''>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className=''>
              <h1
                className='big-subheading'
                style={{ overflowWrap: 'break-word' }}
              >
                {!selectedMember ? 'Membres' : 'Détail membre'}
              </h1>
            </div>
          </Col>
        </Row>
        <Spacer size={1} />
        {!selectedMember ? (
          <TableMembers
            members={members}
            groups={groups}
            countUsers={countUsers}
            currentPage={currentPage}
            totalPages={totalPages}
            navigateToPage={navigateToPage}
            showMemberDetails={showMemberDetails}
            handleChangeGroup={handleChangeGroupMembers}
            searchMember={searchMember}
            addUsers={addUser}
            removeUsers={removeUser}
            currentGroupMembers={groupMembers}
            updatingMembersGroup={updating}
            isLoadingMemberState={isLoadingMember}
          />
        ) : (
          <DetailMember member={selectedMember} returnToTable={returnToTable} />
        )}
        <Spacer size={1} />
      </div>
    </>
  );
}

interface TableMembersProps {
  members?: Member[];
  groups: Group[];
  countUsers?: number;
  currentPage: number;
  totalPages: number;
  currentGroupMembers: string;
  showMemberDetails: (member: Member) => void;
  navigateToPage: (forwardOrBackward: boolean) => void;
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
      `/all-users?limit=100000`
    );
    if (memberList != null && !('error' in memberList)) {
      setMembersForExpot(memberList.userList);
    } else {
      setMembersForExpot([]);
    }
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
                          {new Date(member.createAt) <
                          new Date(new Date().getTime() - 120000)
                            ? dateFormat(`${member.createAt}`)
                            : 'Pas de date'}
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
          {currentPage > 1 && (
            <FontAwesomeIcon
              icon={faChevronLeft}
              className='pagination-chevron'
              onClick={() => {
                navigateToPage(false);
              }}
            />
          )}
          &nbsp;
          {`  ${currentPage} sur ${totalPages}  `}
          &nbsp;
          {currentPage < totalPages && (
            <FontAwesomeIcon
              icon={faChevronRight}
              className='pagination-chevron'
              onClick={() => {
                navigateToPage(true);
              }}
            />
          )}
        </Col>
      </Row>
    </>
  );
}

interface MemberProps {
  member?: Member;
  returnToTable: () => void;
}

type MoodleUser = {
  id: number;
  email: string;
};

type MoodleCourse = {
  id: number;
  displayname: string;
  progress: number;
};

type UserRole = {
  id: string;
  userRoleName: string;
};
type RoleList = {
  userRoleList: UserRole[];
  totalPages: number;
  currentPage: number;
  countUsers: number;
};

export function DetailMember(props: MemberProps): JSX.Element {
  const { member, returnToTable } = props;

  const [moodleCourses, setMoodleCourses] = useState<MoodleCourse[] | null>();
  const [userRoles, setUserRoles] = useState<UserRole[]>([]);

  const [selectedRoleName, setSelectedRoleName] = useState<string | undefined>(
    member?.role ? member?.role : ''
  );
  const [updating, setupdating] =
    useState<{ isAddedStatus: boolean; message: string }>();
  const dateFormat = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const getAllRoles = async () => {
    const allRoles = await getDatabaseResource<RoleList>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `/all-users-roles?page=1&limit=10`
    );
    if (allRoles?.userRoleList != null && !('error' in allRoles)) {
      setUserRoles([...allRoles.userRoleList]);
    } else {
      setUserRoles([]);
    }
  };

  const getMoodleProgressCourses = async () => {
    const moodleUser = await getExternalResource<MoodleUser[]>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_user_get_users_by_field&moodlewsrestformat=json&field=email&values[0]=${member?.email}`
    );
    if (moodleUser != null && moodleUser.length > 0) {
      const moodleUserCoursesProgress = await getExternalResource<
        MoodleCourse[]
      >(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_enrol_get_users_courses&moodlewsrestformat=json&userid=${moodleUser[0].id}`
      );
      if (
        moodleUserCoursesProgress != null &&
        moodleUserCoursesProgress.length > 0
      ) {
        setMoodleCourses(moodleUserCoursesProgress);
      } else {
        setMoodleCourses(null);
      }
    } else {
      setMoodleCourses(null);
    }
  };

  const addUserRole = (
    event: React.ChangeEvent<HTMLInputElement>,
    userRoleName: string | undefined,
    userId: string[]
  ) => {
    event.preventDefault();
    const data = {
      ids: userId,
      userRole: userRoleName
    };

    if (userId.length !== 0) {
      let res;
      void (async () => {
        res = await addUserInRole(data);

        if (res && res.isAdded) {
          setupdating({
            isAddedStatus: res.isAdded,
            message: res.message
          });
          setTimeout(() => {
            setupdating({
              isAddedStatus: false,
              message: ''
            });
          }, 5000);
        }
      })();
    }
  };
  const handleChangeRoleName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const roleMembersInput = event.target.value.slice();
    setSelectedRoleName(roleMembersInput);
  };

  useEffect(() => {
    void getMoodleProgressCourses();

    return () => {
      setMoodleCourses([]); // cleanup useEffect to perform a React state update
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    void getAllRoles();
  }, []);

  return (
    <Row>
      <Col md={12} sm={12} xs={12}>
        <div>
          <button
            className='action-btn-detail'
            onClick={() => {
              returnToTable();
            }}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className='pagination-chevron'
            />
            &nbsp; Retour sur la liste
          </button>
        </div>
        <Spacer size={1} />
        <p>
          <span className='fw-bold'>{'Informations personnelles'}</span>
        </p>
        <div className='section-block-padding bg-secondary'>
          <p>
            <span className='fw-bold'>{'Email'}</span>
            <br />
            {member?.email}
          </p>
          {member?.name && member?.name.length > 0 && (
            <p>
              <span className='fw-bold'>{'Nom'}</span>
              <br />
              {member?.name}
            </p>
          )}
          {member?.email && (
            <p>
              <span className='fw-bold'>{'Rôle'}</span>
              <br />
              <FormGroup controlId='select-role' className='select-role'>
                <FormControl
                  componentClass='select'
                  onChange={handleChangeRoleName}
                  value={selectedRoleName}
                  className='standard-radius-5 role-input'
                >
                  {' '}
                  {/* <option value='all'>Tout les membres</option> */}
                  <option key={''} value={selectedRoleName}>
                    {selectedRoleName}
                  </option>
                  {userRoles.length !== 0 &&
                    userRoles.map(userRole => {
                      return (
                        <>
                          {userRole.userRoleName == selectedRoleName ? (
                            ''
                          ) : (
                            <option key={''} value={userRole.userRoleName}>
                              {userRole.userRoleName}
                            </option>
                          )}
                        </>
                      );
                    })}
                </FormControl>
                <Button
                  type='submit'
                  className='standard-radius-5 btn-black'
                  id='button-addon2'
                  onClick={(event: React.ChangeEvent<HTMLInputElement>) => {
                    addUserRole(event, selectedRoleName, [member?.id]);
                  }}
                >
                  {'Modifier'}
                </Button>
                {updating?.isAddedStatus ? (
                  <>
                    {' '}
                    {!updating || updating.message.length == 0 ? (
                      <HelpBlock className='none-help-block'>
                        {`none`}
                      </HelpBlock>
                    ) : (
                      <HelpBlock className='text-success'>
                        {`${updating.message}`}
                      </HelpBlock>
                    )}
                  </>
                ) : (
                  <>
                    {' '}
                    {!updating || updating.message.length == 0 ? (
                      <HelpBlock className='none-help-block'>
                        {`none`}
                      </HelpBlock>
                    ) : (
                      <HelpBlock className='text-error'>
                        {`${updating.message}`}
                      </HelpBlock>
                    )}
                  </>
                )}
              </FormGroup>
            </p>
          )}

          {member?.gender && member?.gender.length > 0 && (
            <p>
              <span className='fw-bold'>{'Genre'}</span>
              <br />
              {member?.gender}
            </p>
          )}
          <p>
            <span className='fw-bold'>{'Numéro de telephone'}</span>
            <br />
            {member?.phone}
          </p>
          <p>
            <span className='fw-bold'>{'Numéro whatsapp'}</span>
            <br />
            {member?.whatsapp}
          </p>
          <p>
            <span className='fw-bold'>{'Groupe'}</span>
            <br />
            {member?.groups
              ? member?.groups.map(group => group).join(', ')
              : 'Aucun'}
          </p>
          <p>
            <span className='fw-bold'>{'Membre depuis '}</span>
            <br />
            {member?.createAt ? dateFormat(`${member?.createAt}`) : ''}
          </p>
        </div>
        <Spacer size={1} />
      </Col>

      {(moodleCourses != null && moodleCourses?.length > 0) ||
      (member?.currentsSuperBlock != undefined &&
        member?.currentsSuperBlock.length > 0) ? (
        <Col md={12} sm={12} xs={12}>
          <p>
            <span className='fw-bold'>{'Cours suivis'}</span>
          </p>
        </Col>
      ) : null}

      {member?.currentsSuperBlock != undefined &&
        member?.currentsSuperBlock.length > 0 && (
          <>
            {member.currentsSuperBlock.map((currentSuperBlock, index) => {
              return (
                <Col md={6} sm={12} xs={12} key={index}>
                  <div className=''>
                    <CourseProgressBar
                      challengeCount={currentSuperBlock.totalChallenges}
                      completedChallengeCount={
                        currentSuperBlock.totalCompletedChallenges
                      }
                      coursName={currentSuperBlock.superBlockName}
                    />
                  </div>
                </Col>
              );
            })}
          </>
        )}

      {moodleCourses != null && moodleCourses?.length > 0 && (
        <>
          {moodleCourses.map((moodleCourse, index) => {
            return (
              <Col md={6} sm={12} xs={12} key={index}>
                <div className=''>
                  <CourseProgressBar
                    challengeCount={100}
                    completedChallengeCount={moodleCourse.progress}
                    coursName={moodleCourse.displayname}
                  />
                </div>
              </Col>
            );
          })}
        </>
      )}
    </Row>
  );
}

ShowAllMembers.displayName = 'ShowAllMembers';

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllMembers);
