/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Row,
  Col,
  Table,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  HelpBlock
} from '@freecodecamp/react-bootstrap';
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import validator from 'validator';
import {
  createUserRole,
  updateMemberRole,
  getDatabaseResource,
  deleteMemberRole
} from '../../utils/ajax';

import envData from '../../../../config/env.json';
import { createFlashMessage } from '../../components/Flash/redux';
import { Loader, Spacer } from '../../components/helpers';

import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../../redux';

import { User } from '../../redux/prop-types';
import './admin-global.css';

const { apiLocation, homeLocation } = envData;

// TODO: update types for actions
interface ShowAllRolesProps {
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

type MemberRole = {
  id: string;
  userRoleName: string;
  createAt: string;
  memberCount: number;
};

type MemberRoleList = {
  userRoleList: MemberRole[];
  totalPages: number;
  currentPage: number;
  countUsersRole: number;
};

interface UserRoleResponse {
  userRole: MemberRole | null;
  error: string | undefined;
}

export function ShowAllRoles(props: ShowAllRolesProps): JSX.Element {
  const { isSignedIn, user, navigate, showLoading } = props;
  const [RoleName, setRoleName] = useState<string>('');
  const [RoleId, setRoleId] = useState<string>('');
  const [membersRole, setMembersRole] = useState<MemberRole[]>();
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [countUsersRole, setCountUsersRole] = useState<number>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [memberRoleNameToSearch, setMemberRoleNameToSearch] =
    useState<string>('');
  const [RoleRecentlyTreated, setRoleRecentlyTreated] = useState<string>('');
  const [inputHelpBlock, setInputHelpBlock] =
    useState<{ isError: boolean; message: string }>();
  const [isUpdateAction, setIsUpdateAction] = useState<boolean>(false);

  const getMembersRole = async () => {
    const RoleList = await getDatabaseResource<MemberRoleList>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `/all-users-roles?page=${currentPage}&limit=4&memberRoleName=${memberRoleNameToSearch}`
    );
    if (RoleList != null && !('error' in RoleList)) {
      setMembersRole(RoleList.userRoleList);
      setCountUsersRole(RoleList.countUsersRole);
      if (totalPages == 1) {
        setTotalPages(Number(RoleList.totalPages));
        setCurrentPage(Number(RoleList.currentPage));
      }
      if (totalPages > 1) {
        setTotalPages(Number(RoleList.totalPages));
      }
    } else {
      setMembersRole([]);
      setCountUsersRole(0);
    }
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

  const handleChangeRoleNameInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const currentRoleName = (
      event.target as HTMLInputElement
    ).value.trimStart();
    setRoleName(currentRoleName);
  };

  const handeleCreateRole = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    if (RoleName.length != 0) {
      const RoleToCreate = RoleName;
      const response = (await createUserRole({
        userRoleName: RoleToCreate.trim()
      })) as UserRoleResponse;
      if (response.userRole) {
        setRoleRecentlyTreated(response.userRole.id);
        setCurrentPage(1);
        setRoleName('');
        setInputHelpBlock({
          isError: false,
          message: 'Role successfully create'
        });
        setTimeout(() => {
          setInputHelpBlock({
            isError: false,
            message: ''
          });
        }, 3000);
      } else {
        setInputHelpBlock({
          isError: true,
          message: typeof response.error === 'string' ? response.error : ''
        });
        setTimeout(() => {
          setInputHelpBlock({
            isError: true,
            message: ''
          });
        }, 3000);
      }
    } else {
      setInputHelpBlock({
        isError: true,
        message: 'This field should not be empty.'
      });
      setTimeout(() => {
        setInputHelpBlock({
          isError: true,
          message: ''
        });
      }, 3000);
    }
  };

  const handleUpdateRolee = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    setIsUpdateAction(false);
    setRoleName('');
    const response = await updateMemberRole({
      id: RoleId,
      userRoleName: RoleName
    });
    if (response && response.isUpdated) {
      setRoleRecentlyTreated(RoleRecentlyTreated != RoleId ? RoleId : '');
      setInputHelpBlock({
        isError: false,
        message: 'Update sucessfuly'
      });
      setTimeout(() => {
        setInputHelpBlock({
          isError: false,
          message: ''
        });
      }, 3000);
    } else {
      setRoleRecentlyTreated('');
      setInputHelpBlock({
        isError: true,
        message:
          response && typeof response.error === 'string' ? response.error : ''
      });
      setTimeout(() => {
        setInputHelpBlock({
          isError: true,
          message: ''
        });
      }, 3000);
    }
  };

  const handleSelectMemberRoleToUpdate = (memberRole: MemberRole) => {
    setRoleId(memberRole.id);
    setRoleName(memberRole.userRoleName);
    setIsUpdateAction(true);
  };

  const handleDeleteMemberRole = async (memberRole: MemberRole) => {
    const isMemberRoleDeleted = await deleteMemberRole(memberRole);
    if (isMemberRoleDeleted?.isDeleted) {
      setRoleRecentlyTreated(
        RoleRecentlyTreated != memberRole.id ? memberRole.id : ''
      );
    } else {
      setRoleRecentlyTreated('');
    }
  };

  useEffect(() => {
    void getMembersRole();
    return () => {
      setMembersRole([]); // cleanup useEffect to perform a React state update
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, RoleRecentlyTreated]);

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
      <Helmet title={`Tableau de bord | Kadea Online`} />

      <div className=''>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className=''>
              <h1
                className='big-subheading'
                style={{ overflowWrap: 'break-word' }}
              >
                {'Rôles'}
              </h1>
            </div>
          </Col>
        </Row>
        <Spacer size={1} />
        <Row>
          <Col md={6} sm={12} xs={12}>
            <div className='section-block-padding bg-secondary'>
              <p className=''>Créer un rôle</p>
              <div className=''>
                <div>
                  <form>
                    <FormGroup controlId='class-room-filter'>
                      <ControlLabel>
                        <strong>{'Nom du rôle'}</strong>
                      </ControlLabel>
                      <div className=''>
                        <FormControl
                          type='text'
                          placeholder='Nom du rôle'
                          className='standard-radius-5'
                          name='RoleName'
                          value={RoleName}
                          onChange={handleChangeRoleNameInput}
                        />
                        {!inputHelpBlock?.isError ? (
                          <>
                            {!inputHelpBlock ||
                            inputHelpBlock?.message.length == 0 ? (
                              <HelpBlock className='none-help-block'>
                                {`none`}
                              </HelpBlock>
                            ) : (
                              <HelpBlock className='text-success'>
                                {`${inputHelpBlock.message}`}
                              </HelpBlock>
                            )}
                          </>
                        ) : (
                          <>
                            {!inputHelpBlock ||
                            inputHelpBlock?.message.length == 0 ? (
                              <HelpBlock className='none-help-block'>
                                {`none`}
                              </HelpBlock>
                            ) : (
                              <HelpBlock className='text-error'>
                                {`${inputHelpBlock?.message}`}
                              </HelpBlock>
                            )}
                          </>
                        )}
                        {validator.equals(user.role, 'Super-admin') ? (
                          <>
                            <Button
                              type='submit'
                              className='standard-radius-5 btn-black'
                              id='button-create'
                              onClick={handeleCreateRole}
                            >
                              Créer un nouveau rôle
                            </Button>
                            &nbsp; &nbsp; &nbsp;
                            {isUpdateAction && (
                              <Button
                                type='submit'
                                className='standard-radius-5 btn-green'
                                id='button-update'
                                onClick={handleUpdateRolee}
                              >
                                Mettre à jour le rôle
                              </Button>
                            )}
                          </>
                        ) : (
                          <>
                            <Button
                              type='submit'
                              className='standard-radius-5 btn-black'
                              id='button-create'
                              onClick={handeleCreateRole}
                              disabled
                            >
                              Créer un nouveau rôle
                            </Button>
                            <HelpBlock className='text-error'>
                              {'Création de rôle réservée aux Super Admins'}
                            </HelpBlock>
                            &nbsp; &nbsp; &nbsp;
                          </>
                        )}
                      </div>
                    </FormGroup>
                  </form>
                </div>
              </div>
            </div>
            <Spacer size={1} />
          </Col>
        </Row>
        <TableMembers
          membersRole={membersRole}
          currentPage={currentPage}
          totalPages={totalPages}
          currentUserRole={user.role}
          navigateToPage={navigateToPage}
          deleteMemberRole={handleDeleteMemberRole}
          handleSelectMemberRoleToUpdate={handleSelectMemberRoleToUpdate}
        />
        <Spacer size={1} />
      </div>
    </>
  );
}

interface TableMembersRoleProps {
  membersRole?: MemberRole[];
  currentPage: number;
  totalPages: number;
  currentUserRole: string;
  deleteMemberRole: (memberRole: MemberRole) => void;
  handleSelectMemberRoleToUpdate: (memberRole: MemberRole) => void;
  navigateToPage: (forwardOrBackward: boolean) => void;
}

export function TableMembers(props: TableMembersRoleProps): JSX.Element {
  const {
    membersRole,
    navigateToPage,
    currentPage,
    totalPages,
    currentUserRole,
    deleteMemberRole,
    handleSelectMemberRoleToUpdate
  } = props;

  const dateFormat = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className=''>
            {membersRole && membersRole.length > 0 ? (
              <Table responsive hover>
                <thead className='bg-dark-gray'>
                  <tr>
                    <th className='text-light'>Rôle</th>
                    <th className='text-light'>Créé le</th>
                    {validator.equals(currentUserRole, 'Super-admin') && (
                      <th className='text-light'>Action</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {membersRole.map((role, index) => {
                    return (
                      <tr key={index}>
                        <td style={{ verticalAlign: 'middle' }}>
                          {role.userRoleName}
                        </td>

                        <td style={{ verticalAlign: 'middle' }}>
                          {dateFormat(`${role.createAt}`)}
                        </td>
                        <td style={{ verticalAlign: 'middle' }}>
                          {validator.equals(currentUserRole, 'Super-admin') && (
                            <>
                              <button
                                className='action-btn-update'
                                onClick={() => {
                                  handleSelectMemberRoleToUpdate(role);
                                }}
                              >
                                Mettre à jour
                              </button>
                              &nbsp; | &nbsp;
                              <button
                                className='action-btn-delete'
                                onClick={() => {
                                  deleteMemberRole(role);
                                }}
                              >
                                Supprimer
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            ) : (
              <Table striped responsive hover>
                <thead className='bg-dark-gray'>
                  <tr>
                    <th className='text-light'></th>
                    <th className='text-light'></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
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

ShowAllRoles.displayName = 'ShowAllRoles';

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllRoles);
