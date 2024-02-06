import { Grid, Row, Col, HelpBlock } from '@freecodecamp/react-bootstrap';
import React, { useEffect, useState } from 'react';

import Helmet from 'react-helmet';
// import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import envData from '../../../config/env.json';
import { createFlashMessage } from '../components/Flash/redux';
import { Loader, Spacer } from '../components/helpers';
import About from '../components/settings/about';
import Modal from '../components/settings/modal';
import Education from '../components/settings/education';
import WorkExperience from '../components/settings/work-experience';
import DangerZone from '../components/settings/danger-zone';
// import Email from '../components/settings/email';
import Internet from '../components/settings/internet';
import { Themes } from '../components/settings/theme';

import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../redux';

import { User } from '../redux/prop-types';

import {
  submitNewAbout,
  updateUserFlag,
  verifyCert,
  submitNewEducation,
  submitNewWorkExperience
} from '../redux/settings';

const { apiLocation } = envData;

// TODO: update types for actions
interface ShowSettingsProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  submitNewAbout: () => void;
  submitNewEducation: () => void;
  submitNewWorkExperience: () => void;
  toggleNightMode: (theme: Themes) => void;
  toggleSoundMode: (sound: boolean) => void;
  updateInternetSettings: () => void;
  updateIsHonest: () => void;
  updatePortfolio: () => void;
  updateQuincyEmail: (isSendQuincyEmail: boolean) => void;
  user: User;
  verifyCert: () => void;
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
  navigate,
  submitNewAbout,
  submitNewEducation,
  submitNewWorkExperience,
  toggleNightMode: (theme: Themes) => updateUserFlag({ theme }),
  toggleSoundMode: (sound: boolean) => updateUserFlag({ sound }),
  updateInternetSettings: updateUserFlag,
  updateIsHonest: updateUserFlag,
  updatePortfolio: updateUserFlag,
  updateQuincyEmail: (sendQuincyEmail: boolean) =>
    updateUserFlag({ sendQuincyEmail }),
  verifyCert
};

export function ShowSettings(props: ShowSettingsProps): JSX.Element {
  const [courseLink, setCourseLink] = useState<string>('');
  // const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  let queryString = '';
  if (typeof window !== 'undefined') {
    queryString = window.location.search;
  }

  function removeEqualSignAtEnd(string: string) {
    if (string.endsWith('=')) {
      string = string.slice(0, string.length - 1);
    }
    return string;
  }

  useEffect(() => {
    const urlparams: string = new URLSearchParams(queryString).toString();
    const decodelink = decodeURIComponent(`${urlparams}`);
    const link = removeEqualSignAtEnd(decodelink);

    setCourseLink(`${link}`);
    handleOpenModal();
  }, [queryString]);
  const {
    isSignedIn,
    submitNewAbout,
    submitNewEducation,
    submitNewWorkExperience,
    user: {
      email,
      // isEmailVerified,
      // sendQuincyEmail,
      username,
      about,
      points,
      location,
      name,
      phone,
      whatsapp,
      gender,
      codeTime,
      fieldOfStudy,
      levelOfStudy,
      employedWhere,
      sinceWhen,
      position,
      githubProfile,
      linkedin,
      twitter,
      website
    },
    navigate,
    showLoading,
    // updateQuincyEmail,
    updateInternetSettings
  } = props;

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }
  if (courseLink) {
    if (name && phone) {
      setTimeout(() => {
        navigate(courseLink);
      }, 3000);
      return <Loader fullScreen={true} />;
    }
  }

  return (
    <>
      {/* <Helmet title={`${t('buttons.settings')} | Code Learning Plateform`} /> */}
      <Helmet title={`Profil | Kadea Online`} />
      <Grid fluid={false} className='bg-light'>
        <main>
          <div className=''>
            <Spacer size={1} />
            <Row className='super-block-intro-page'>
              <Col md={12} sm={12} xs={12}>
                <div className=''>
                  <h1
                    className='big-subheading'
                    style={{ overflowWrap: 'break-word' }}
                  >
                    {'Informations personnelles'}
                  </h1>
                  {!courseLink ? (
                    <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
                  ) : (
                    <>
                      <Modal
                        isOpen={isOpen}
                        onClose={handleCloseModal}
                        title='Vueillez compléter vos informations personnelles avant de commencer le cours'
                      ></Modal>

                      <HelpBlock className='text-danger'>
                        {`Vueillez compléter vos informations personnelles avant de commencer le cours `}
                      </HelpBlock>
                    </>
                  )}
                </div>
              </Col>
              <Col className='' md={12} sm={12} xs={12}>
                <Spacer size={1} />
                <div className='block-ui bg-secondary standard-radius-5'>
                  <About
                    about={about}
                    location={location}
                    name={name}
                    gender={gender}
                    codeTime={codeTime}
                    points={points}
                    phone={phone}
                    whatsapp={whatsapp}
                    submitNewAbout={submitNewAbout}
                    username={username}
                    email={email}
                  />
                </div>
                <Spacer size={1} />
              </Col>
            </Row>
            <Spacer size={1} />
          </div>
          <Spacer size={2} />
          <div className=''>
            <Spacer size={1} />
            <Row className='super-block-intro-page'>
              <Col md={12} sm={12} xs={12}>
                <div className=''>
                  <h1
                    className='big-subheading'
                    style={{ overflowWrap: 'break-word' }}
                  >
                    {'Éducation'}
                  </h1>
                </div>
              </Col>
              <Col className='' md={12} sm={12} xs={12}>
                <Spacer size={1} />
                <div className='block-ui bg-secondary standard-radius-5'>
                  <Education
                    fieldOfStudy={fieldOfStudy}
                    levelOfStudy={levelOfStudy}
                    submitNewEducation={submitNewEducation}
                  />
                </div>
                <Spacer size={1} />
              </Col>
            </Row>
            <Spacer size={1} />
          </div>
          <Spacer size={2} />
          <div className=''>
            <Spacer size={1} />
            <Row className='super-block-intro-page'>
              <Col md={12} sm={12} xs={12}>
                <div className=''>
                  <h1
                    className='big-subheading'
                    style={{ overflowWrap: 'break-word' }}
                  >
                    {'Expérience professionnelle'}
                  </h1>
                </div>
              </Col>
              <Col className='' md={12} sm={12} xs={12}>
                <Spacer size={1} />
                <div className='block-ui bg-secondary standard-radius-5'>
                  <WorkExperience
                    employedWhere={employedWhere}
                    sinceWhen={sinceWhen}
                    position={position}
                    submitNewWorkExperience={submitNewWorkExperience}
                  />
                </div>
                <Spacer size={1} />
              </Col>
            </Row>
            <Spacer size={1} />
          </div>
          {/* <Spacer size={2} />
          <div className=''>
            <Spacer size={1} />
            <Row className='super-block-intro-page'>
              <Col md={12} sm={12} xs={12}>
                <div className=''>
                  <h2
                    className='big-subheading'
                    style={{ overflowWrap: 'break-word' }}
                  >
                    {"Paramètres d'email"}
                  </h2>
                </div>
              </Col>
              <Col className='' md={12} sm={12} xs={12}>
                <Spacer size={1} />
                <div className='block-ui bg-secondary standard-radius-5'>
                  <Email
                    email={email}
                    isEmailVerified={isEmailVerified}
                    sendQuincyEmail={sendQuincyEmail}
                    updateQuincyEmail={updateQuincyEmail}
                  />
                </div>
                <Spacer size={1} />
              </Col>
            </Row>
            <Spacer size={1} />
          </div> */}
          <Spacer size={2} />
          <div className=''>
            <Spacer size={1} />
            <Row className='super-block-intro-page'>
              <Col md={12} sm={12} xs={12}>
                <div className=''>
                  <h2
                    className='big-subheading'
                    style={{ overflowWrap: 'break-word' }}
                  >
                    {'Votre présence sur internet'}
                  </h2>
                </div>
              </Col>
              <Col className='' md={12} sm={12} xs={12}>
                <Spacer size={1} />
                <div className='block-ui bg-secondary standard-radius-5'>
                  <Internet
                    githubProfile={githubProfile}
                    linkedin={linkedin}
                    twitter={twitter}
                    updateInternetSettings={updateInternetSettings}
                    website={website}
                  />
                </div>
                <Spacer size={1} />
              </Col>
            </Row>
            <Spacer size={1} />
          </div>

          <div>
            <Spacer />
            <Row>
              <Col className='' md={12} sm={12} xs={12}>
                <DangerZone />
              </Col>
            </Row>
          </div>
        </main>
      </Grid>
    </>
  );
}

ShowSettings.displayName = 'ShowSettings';

export default connect(mapStateToProps, mapDispatchToProps)(ShowSettings);
