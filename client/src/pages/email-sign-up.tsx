import { Row, Col, Grid } from '@freecodecamp/react-bootstrap';
import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import IntroDescription from '../components/Intro/components/IntroDescription';
import createRedirect from '../components/create-redirect';
import { Spacer } from '../components/helpers';

import { acceptTerms, userSelector } from '../redux';

import './email-sign-up.css';

interface AcceptPrivacyTermsProps {
  acceptTerms: (accept: boolean | null) => void;
  acceptedPrivacyTerms: boolean;
  t: TFunction;
}

const mapStateToProps = createSelector(
  userSelector,
  ({ acceptedPrivacyTerms }: { acceptedPrivacyTerms: boolean }) => ({
    acceptedPrivacyTerms
  })
);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ acceptTerms }, dispatch);
const RedirectToLearn = createRedirect('/learn');

function AcceptPrivacyTerms({
  acceptTerms,
  acceptedPrivacyTerms
}: // t
AcceptPrivacyTermsProps) {
  const acceptedPrivacyRef = useRef(acceptedPrivacyTerms);
  const acceptTermsRef = useRef(acceptTerms);
  useEffect(() => {
    acceptedPrivacyRef.current = acceptedPrivacyTerms;
    acceptTermsRef.current = acceptTerms;
  });

  useEffect(() => {
    return () => {
      // if a user navigates away from here we should set acceptedPrivacyTerms
      // to true (so they do not get pulled back) without changing their email
      // preferences (hence the null payload)
      // This makes sure that the user has to opt in to Quincy's emails and that
      // they are only asked twice
      if (!acceptedPrivacyRef.current) {
        acceptTermsRef.current(null);
      }
    };
  }, []);

  return acceptedPrivacyTerms ? (
    <RedirectToLearn />
  ) : (
    <>
      <Helmet>
        {/* <title>{t('misc.email-signup')} | Code Learning Plateform</title> */}
        <title>{`Inscription réussie`} | Kadea Online</title>
      </Helmet>
      <Grid>
        <Row>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Spacer />
            <div className='p-3-2 bg-secondary'>
              <IntroDescription />
            </div>
            <Spacer />
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(AcceptPrivacyTerms));
