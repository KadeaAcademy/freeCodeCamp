import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import { WindowLocation } from '@reach/router';
import { graphql } from 'gatsby';
import { uniq } from 'lodash-es';
import React, { Fragment, useEffect, memo } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { configureAnchors } from 'react-scrollable-anchor';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';

import { SuperBlocks } from '../../../../config/certification-settings';
import DonateModal from '../../components/Donation/donation-modal';
import { Spacer } from '../../components/helpers';
import {
  currentChallengeIdSelector,
  userFetchStateSelector,
  signInLoadingSelector,
  isSignedInSelector,
  tryToShowDonationModal,
  userSelector
} from '../../redux';
import {
  MarkdownRemark,
  AllChallengeNode,
  User,
  CurrentSuperBlock,
  ChallengeNode
} from '../../redux/prop-types';
import Block from './components/block';
import BlockProgressBar from './components/block-progress-bar';
import BlockLastVisited from './components/block-last-visited';
import SuperBlockIntro from './components/super-block-intro';
import { resetExpansion, toggleBlock } from './redux';

import './intro.css';

type FetchState = {
  pending: boolean;
  complete: boolean;
  errored: boolean;
};

type SuperBlockProp = {
  currentChallengeId: string;
  data: {
    markdownRemark: MarkdownRemark;
    allChallengeNode: AllChallengeNode;
  };
  expandedState: {
    [key: string]: boolean;
  };
  fetchState: FetchState;
  isSignedIn: boolean;
  signInLoading: boolean;
  location: WindowLocation<{ breadcrumbBlockClick: string }>;
  resetExpansion: () => void;
  t: TFunction;
  toggleBlock: (arg0: string) => void;
  tryToShowDonationModal: () => void;
  user: User;
};

configureAnchors({ offset: -40, scrollDuration: 0 });

const mapStateToProps = (state: Record<string, unknown>) => {
  return createSelector(
    currentChallengeIdSelector,
    isSignedInSelector,
    signInLoadingSelector,
    userFetchStateSelector,
    userSelector,
    (
      currentChallengeId: string,
      isSignedIn,
      signInLoading: boolean,
      fetchState: FetchState,
      user: User
    ) => ({
      currentChallengeId,
      isSignedIn,
      signInLoading,
      fetchState,
      user
    })
  )(state);
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      tryToShowDonationModal,
      resetExpansion,
      toggleBlock: b => toggleBlock(b)
    },
    dispatch
  );

const SuperBlockIntroductionPage = (props: SuperBlockProp) => {
  useEffect(() => {
    initializeExpandedState();
    props.tryToShowDonationModal();

    setTimeout(() => {
      configureAnchors({ offset: -40, scrollDuration: 400 });
    }, 0);

    return () => {
      configureAnchors({ offset: -40, scrollDuration: 0 });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { user } = props;

  const getChosenBlock = (): string => {
    const {
      data: {
        allChallengeNode: { edges }
      },
      isSignedIn,
      currentChallengeId,
      location
    }: SuperBlockProp = props;

    // if coming from breadcrumb click
    if (
      location.state &&
      typeof location.state === 'object' &&
      Object.prototype.hasOwnProperty.call(
        location.state,
        'breadcrumbBlockClick'
      )
    ) {
      return location.state.breadcrumbBlockClick;
    }

    // if the URL includes a hash
    if (location.hash) {
      const dashedBlock = location.hash.replace('#', '').replace('/', '');
      return dashedBlock;
    }

    const edge = edges[0];

    if (isSignedIn) {
      // see if currentChallenge is in this superBlock
      const currentChallengeEdge = edges.find(
        edge => edge.node.challenge.id === currentChallengeId
      );

      return currentChallengeEdge
        ? currentChallengeEdge.node.challenge.block
        : edge.node.challenge.block;
    }

    return edge.node.challenge.block;
  };

  const initializeExpandedState = () => {
    const { resetExpansion, toggleBlock } = props;

    resetExpansion();
    return toggleBlock(getChosenBlock());
  };

  const {
    data: {
      markdownRemark: {
        frontmatter: { superBlock }
      },
      allChallengeNode: { edges }
    },
    t
  } = props;

  const nodesForSuperBlock = edges.map(({ node }) => node);
  const blockDashedNames = uniq(
    nodesForSuperBlock.map(({ challenge: { block } }) => block)
  );

  // Translates the title and content of the course
  const i18nSuperBlock = t(`intro:${superBlock}.title`);
  const i18nTitle =
    superBlock === SuperBlocks.CodingInterviewPrep
      ? i18nSuperBlock
      : t(`intro:misc-text.certification`, {
          cert: i18nSuperBlock
        });
  const originalSuperBlockTitle = t(`intro:${superBlock}.OriginalTitle`);

  const defaultCurriculumNames = blockDashedNames;

  const { currentsSuperBlock } = user;
  // Checks if there is progress on the course
  const isCurrentSuperBlockProgressExist: CurrentSuperBlock | undefined =
    currentsSuperBlock &&
    currentsSuperBlock.find(
      currentsSuperBlockItem =>
        currentsSuperBlockItem.superBlockName === originalSuperBlockTitle
    );

  // delete the project module which is always at the end of the table
  // blocs.pop();

  const lasteVisitedBlock = nodesForSuperBlock.filter(
    (challengeNode: ChallengeNode) => {
      const { blockName } = challengeNode.challenge.fields;
      return blockName === isCurrentSuperBlockProgressExist?.blockName;
    }
  );

  const lasteVisitedBlockIndex =
    defaultCurriculumNames.findIndex(curriculumName => {
      return (
        curriculumName === isCurrentSuperBlockProgressExist?.blockDashedName
      );
    }) + 1;

  return (
    <>
      <Helmet>
        <title>{i18nTitle} | Kadea Online</title>
      </Helmet>
      <Grid fluid={false} className='bg-light'>
        <Spacer size={1} />
        <SuperBlockIntro superBlock={superBlock} />
        <Spacer size={1} />
        <div className=''>
          <Spacer size={1} />
          <Row className='super-block-intro-page'>
            <Col md={12} sm={12} xs={12}>
              <h2 className='big-subheading'>{'Progression globale'}</h2>
            </Col>
            <Col className='' md={12} sm={12} xs={12}>
              <Spacer size={1} />
              <div className='block-ui bg-secondary standard-radius-5'>
                <div className='card-challenge standard-radius-5'>
                  <div>
                    <BlockProgressBar
                      challengeCount={
                        isCurrentSuperBlockProgressExist
                          ? isCurrentSuperBlockProgressExist.totalChallenges
                          : 100
                      }
                      completedChallengeCount={
                        isCurrentSuperBlockProgressExist
                          ? isCurrentSuperBlockProgressExist.totalCompletedChallenges
                          : 0
                      }
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Spacer size={1} />
        </div>
        {isCurrentSuperBlockProgressExist &&
          !isCurrentSuperBlockProgressExist.isCurrentBlockCompleted && (
            <div className=''>
              <Spacer size={1} />
              <Row className='super-block-intro-page'>
                <Col md={12} sm={12} xs={12}>
                  <h2 className='big-subheading'>{'Module en cours'}</h2>
                </Col>
                <Col className='' md={12} sm={12} xs={12}>
                  <Spacer size={1} />
                  <div className='block-ui bg-secondary standard-radius-5'>
                    <BlockLastVisited
                      blockDashedName={
                        isCurrentSuperBlockProgressExist.blockDashedName
                          ? isCurrentSuperBlockProgressExist.blockDashedName
                          : ''
                      }
                      challenges={lasteVisitedBlock}
                      superBlock={
                        isCurrentSuperBlockProgressExist.superBlockDashedName
                          ? isCurrentSuperBlockProgressExist.superBlockDashedName
                          : ''
                      }
                      blockIndex={lasteVisitedBlockIndex}
                    />
                  </div>
                  <Spacer size={1} />
                </Col>
              </Row>
            </div>
          )}
        <div className=''>
          <Spacer size={1} />
          <Row className='super-block-intro-page'>
            <Col md={12} sm={12} xs={12}>
              <h2 className='big-subheading'>{'Syllabus'}</h2>
            </Col>
            <Col className='' md={12} sm={12} xs={12}>
              <Spacer size={1} />
              <div className='block-ui bg-secondary standard-radius-5'>
                {defaultCurriculumNames.map((blockDashedName, index) => {
                  // if (index < defaultCurriculumNames.length - 1) {
                  //   // delete the project module which is always at the end of the table with the condition if
                  //   return (
                  //     <Fragment key={blockDashedName}>
                  //       <Block
                  //         blockDashedName={blockDashedName}
                  //         challenges={nodesForSuperBlock.filter(
                  //           node => node.challenge.block === blockDashedName
                  //         )}
                  //         superBlock={superBlock}
                  //         blockIndex={1 + index}
                  //       />
                  //     </Fragment>
                  //   );
                  // }
                  return (
                    <Fragment key={blockDashedName}>
                      <Block
                        blockDashedName={blockDashedName}
                        challenges={nodesForSuperBlock.filter(
                          node => node.challenge.block === blockDashedName
                        )}
                        superBlock={superBlock}
                        blockIndex={1 + index}
                      />
                    </Fragment>
                  );
                })}
              </div>
              <Spacer size={1} />
            </Col>
          </Row>
          <Spacer size={1} />
        </div>
      </Grid>
      <DonateModal location={props.location} />
    </>
  );
};

SuperBlockIntroductionPage.displayName = 'SuperBlockIntroductionPage';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(memo(SuperBlockIntroductionPage)));

export const query = graphql`
  query SuperBlockIntroPageBySlug($slug: String!, $superBlock: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        certification
        superBlock
        title
      }
    }
    allChallengeNode(
      sort: {
        fields: [
          challenge___superOrder
          challenge___order
          challenge___challengeOrder
        ]
      }
      filter: { challenge: { superBlock: { eq: $superBlock } } }
    ) {
      edges {
        node {
          challenge {
            fields {
              slug
              blockName
            }
            id
            block
            challengeType
            title
            order
            superBlock
            dashedName
          }
        }
      }
    }
  }
`;
