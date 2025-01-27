import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  FormGroup,
  FormControl,
  Button,
  HelpBlock
} from '@freecodecamp/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Spacer } from '../../components/helpers';
import { CourseProgressBar } from '../../components/AdminComponents/course-progress-bar';
import {
  MemberProps,
  MoodleUser,
  MoodleCourse,
  UserRole,
  RoleList
} from '../../redux/prop-types';
import {
  getDatabaseResource,
  getExternalResource,
  addUserInRole
} from '../../utils/ajax';
import envData from '../../../../config/env.json';
const { moodleApiBaseUrl, moodleApiToken } = envData;

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
