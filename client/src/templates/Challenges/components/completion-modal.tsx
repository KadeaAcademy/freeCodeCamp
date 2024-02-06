/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import { noop } from 'lodash-es';
import React, { Component } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';

import { dasherize } from '../../../../../utils/slugs';
import { isProject } from '../../../../utils/challenge-types';
import Login from '../../../components/Header/components/Login';
import {
  isSignedInSelector,
  executeGA,
  allowBlockDonationRequests
  // eslint-disable-next-line import/no-duplicates
} from '../../../redux';

import {
  AllChallengeNode,
  ChallengeFiles,
  User,
  CurrentSuperBlock,
  CurrentsSuperBlockList
} from '../../../redux/prop-types';

import {
  closeModal,
  submitChallenge,
  completedChallengesIds,
  isCompletionModalOpenSelector,
  successMessageSelector,
  challengeFilesSelector,
  challengeMetaSelector
} from '../redux';
import { submitNewCurrentsSuperBlock } from '../../../redux/settings';
// eslint-disable-next-line import/no-duplicates
import { userSelector } from '../../../redux';
import { Link } from '../../../components/helpers';
import CompletionModalBody from './completion-modal-body';

import './completion-modal.css';

const mapStateToProps = createSelector(
  challengeFilesSelector,
  challengeMetaSelector,
  completedChallengesIds,
  isCompletionModalOpenSelector,
  isSignedInSelector,
  successMessageSelector,
  userSelector,
  (
    challengeFiles: ChallengeFiles,
    {
      title,
      id,
      challengeType
    }: { title: string; id: string; challengeType: number },
    completedChallengesIds: string[],
    isOpen: boolean,
    isSignedIn: boolean,
    message: string,
    user: User
  ) => ({
    challengeFiles,
    title,
    id,
    challengeType,
    completedChallengesIds,
    isOpen,
    isSignedIn,
    message,
    user
  })
);

const mapDispatchToProps = function (dispatch: Dispatch) {
  const dispatchers = {
    close: () => dispatch(closeModal('completion')),
    submitChallenge: () => {
      dispatch(submitChallenge());
    },
    allowBlockDonationRequests: (block: string) => {
      dispatch(allowBlockDonationRequests(block));
    },
    executeGA,
    submitNewCurrentsSuperBlock: (
      currentsSuperBlockValue: CurrentsSuperBlockList
    ) => dispatch(submitNewCurrentsSuperBlock(currentsSuperBlockValue))
  };
  return () => dispatchers;
};

export function getCompletedPercent(
  completedChallengesIds: string[] = [],
  currentBlockIds: string[] = [],
  currentChallengeId: string
): number {
  completedChallengesIds = completedChallengesIds.includes(currentChallengeId)
    ? completedChallengesIds
    : [...completedChallengesIds, currentChallengeId];

  const completedChallengesInBlock = completedChallengesIds.filter(id => {
    return currentBlockIds.includes(id);
  });

  const completedPercent = Math.round(
    (completedChallengesInBlock.length / currentBlockIds.length) * 100
  );

  return completedPercent > 100 ? 100 : completedPercent;
}

// Count the total number of challenges and the number of solved challenges
export function countCompletedAndUncompletedChallenges(
  superBlockChallengeIds?: string[],
  completedChallengeIds?: string[]
): { challengeCount: number; completedChallengeCount: number } {
  let completedChallengeCount = 0;
  const challengeCount = superBlockChallengeIds
    ? superBlockChallengeIds.length
    : 100;
  if (
    superBlockChallengeIds &&
    completedChallengeIds &&
    completedChallengeIds.length > 0
  ) {
    for (const ChallengeId of superBlockChallengeIds) {
      if (completedChallengeIds.includes(ChallengeId)) {
        completedChallengeCount++;
      }
    }
  }
  return {
    challengeCount: challengeCount,
    completedChallengeCount: completedChallengeCount
  };
}

interface CompletionModalsProps {
  allowBlockDonationRequests: (arg0: string) => void;
  user: User;
  block: string;
  blockName: string;
  certification: string;
  challengeType: number;
  close: () => void;
  completedChallengesIds: string[];
  currentBlockIds?: string[];
  superBlockChallengeIds?: string[];
  currentSuperBlock?: MarkdownRemark;
  executeGA: () => void;
  challengeFiles: ChallengeFiles;
  id: string;
  isOpen: boolean;
  isSignedIn: boolean;
  message: string;
  submitChallenge: () => void;
  superBlock: string;
  t: TFunction;
  title: string;
  submitNewCurrentsSuperBlock: (
    currentsSuperBlockValue: CurrentsSuperBlockList
  ) => void;
}

interface CompletionModalInnerState {
  downloadURL: null | string;
  completedPercent: number;
}

export class CompletionModalInner extends Component<
  CompletionModalsProps,
  CompletionModalInnerState
> {
  constructor(props: CompletionModalsProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);

    this.state = {
      downloadURL: null,
      completedPercent: 0
    };
  }

  static getDerivedStateFromProps(
    props: CompletionModalsProps,
    state: CompletionModalInnerState
  ): CompletionModalInnerState {
    const { challengeFiles, isOpen } = props;
    if (!isOpen) {
      return { downloadURL: null, completedPercent: 0 };
    }
    const { downloadURL } = state;
    if (downloadURL) {
      URL.revokeObjectURL(downloadURL);
    }
    let newURL = null;
    if (challengeFiles?.length) {
      const filesForDownload = challengeFiles
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .reduce<string>((allFiles, currentFile: any) => {
          const beforeText = `** start of ${currentFile.path} **\n\n`;
          const afterText = `\n\n** end of ${currentFile.path} **\n\n`;
          allFiles +=
            challengeFiles.length > 1
              ? `${beforeText}${currentFile.contents}${afterText}`
              : currentFile.contents;
          return allFiles;
        }, '');
      const blob = new Blob([filesForDownload], {
        type: 'text/json'
      });
      newURL = URL.createObjectURL(blob);
    }

    const { completedChallengesIds, currentBlockIds, id, isSignedIn } = props;
    const completedPercent = isSignedIn
      ? getCompletedPercent(completedChallengesIds, currentBlockIds, id)
      : 0;
    return { downloadURL: newURL, completedPercent: completedPercent };
  }

  handleKeypress(e: React.KeyboardEvent): void {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      // Since Hotkeys also listens to Ctrl + Enter we have to stop this event
      // getting to it.
      e.stopPropagation();
      this.handleSubmit();
    }
  }

  handleUpdateSuperBlockProgress(currentSuperBlock: CurrentSuperBlock) {
    const { user, submitNewCurrentsSuperBlock } = this.props;

    const currentsSuperBlockList: CurrentsSuperBlockList = {
      currentsSuperBlock: []
    };

    if (user.currentsSuperBlock && user.currentsSuperBlock.length == 0) {
      submitNewCurrentsSuperBlock({
        currentsSuperBlock: [currentSuperBlock]
      });
      return;
    }

    if (user.currentsSuperBlock) {
      const currentSuperBlockIndex = user.currentsSuperBlock.findIndex(
        currentsSuperBlockItem => {
          return (
            currentsSuperBlockItem.superBlockName ===
            currentSuperBlock.superBlockName
          );
        }
      );

      currentsSuperBlockList.currentsSuperBlock = [...user.currentsSuperBlock];

      if (currentSuperBlockIndex != -1) {
        currentsSuperBlockList.currentsSuperBlock[currentSuperBlockIndex] =
          currentSuperBlock;
        submitNewCurrentsSuperBlock(currentsSuperBlockList);
        return;
      }
      currentsSuperBlockList.currentsSuperBlock = [
        ...currentsSuperBlockList.currentsSuperBlock,
        currentSuperBlock
      ];
      submitNewCurrentsSuperBlock(currentsSuperBlockList);
      return;
    }
  }

  handleSubmit(): void {
    const {
      superBlockChallengeIds,
      completedChallengesIds,
      currentSuperBlock,
      blockName,
      block,
      superBlock,
      id,
      t
    } = this.props;

    const { completedPercent } = this.state;

    const { challengeCount, completedChallengeCount } =
      countCompletedAndUncompletedChallenges(
        superBlockChallengeIds,
        completedChallengesIds
      );

    const currentSuperBlockValue: CurrentSuperBlock = {
      superBlockName: currentSuperBlock?.frontmatter.title,
      superBlockTranslatedName: t(`intro:${superBlock}.title`),
      superBlockDashedName: superBlock,
      blockName: blockName,
      blockDashedName: block,
      isCurrentBlockCompleted: completedPercent === 100 ? true : false,
      superBlockPath: currentSuperBlock?.fields.slug,
      currentChallengeId: id,
      totalChallenges: challengeCount,
      totalCompletedChallenges: completedChallengeCount + 1
    };
    console.log(t(`intro:${superBlock}.title`));
    this.props.submitChallenge();
    this.checkBlockCompletion();
    this.handleUpdateSuperBlockProgress(currentSuperBlockValue);
  }

  // check block completion for donation
  checkBlockCompletion(): void {
    if (
      this.state.completedPercent === 100 &&
      !this.props.completedChallengesIds.includes(this.props.id)
    ) {
      this.props.allowBlockDonationRequests(this.props.blockName);
    }
  }

  componentWillUnmount(): void {
    if (this.state.downloadURL) {
      URL.revokeObjectURL(this.state.downloadURL);
    }
    this.props.close();
  }

  render(): JSX.Element {
    const {
      block,
      close,
      isOpen,
      // title,
      isSignedIn,
      superBlock = ''
    } = this.props;

    const { completedPercent } = this.state;

    if (isOpen) {
      executeGA({ type: 'modal', data: '/completion-modal' });
    }
    // normally dashedName should be graphQL queried and then passed around,
    // but it's only used to make a nice filename for downloading, so dasherize
    // is fine here.
    // const dashedName = dasherize(title);
    return (
      <Modal
        animation={false}
        bsSize='lg'
        dialogClassName='challenge-success-modal modal-dialog-centered'
        keyboard={true}
        onHide={close}
        // eslint-disable-next-line @typescript-eslint/unbound-method
        onKeyDown={isOpen ? this.handleKeypress : noop}
        show={isOpen}
        centered
      >
        <Modal.Header
          className='challenge-list-header fcc-modal completion-header'
          closeButton={true}
        >
          <Modal.Title className='completion-message'>
            {'Félicitations !'}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className='completion-modal-body bg-light'>
          <CompletionModalBody
            block={block}
            completedPercent={completedPercent}
            superBlock={superBlock}
          />
        </Modal.Body>

        <Modal.Footer className='bg-light'>
          {isSignedIn ? null : (
            <Login block={true}>
              {'Connectez-vous pour enregistrer votre progression'}
            </Login>
          )}
          <Button
            className='action-btn btn-primary mb-1 standard-radius-5'
            block={true}
            bsSize='large'
            bsStyle='primary'
            onClick={() => this.handleSubmit()}
          >
            {isSignedIn
              ? 'Soumettre et passer au défi suivant'
              : 'Passez au défi suivant'}
            <span className='hidden-xs'> (Ctrl + Enter)</span>
          </Button>
          {/* {this.state.downloadURL ? (
            <Button
              className='action-btn btn-secondary'
              block={true}
              bsSize='lg'
              bsStyle='primary'
              download={`${dashedName}.txt`}
              href={this.state.downloadURL}
            >
              {'Télécharger ma solution'}
            </Button>
          ) : null} */}
          <Link
            to='https://www.kinshasadigital.academy/inscription'
            external={true}
            sameTab={false}
            className='link-resset-style standard-radius-5'
          >
            <Button
              className='action-btn btn-secondary standard-radius-5'
              block={true}
              bsSize='lg'
              bsStyle='primary'
            >
              {'Rejoins notre académie'}
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
}

interface Options {
  isCertificationBlock: boolean;
}

interface CertificateNode {
  challenge: {
    // TODO: use enum
    certification: string;
    tests: { id: string }[];
  };
}

interface MarkdownRemark {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    superBlock: string;
  };
}

const useCurrentBlockIds = (
  block: string,
  certification: string,
  superBlock: string,
  options?: Options
) => {
  const {
    allChallengeNode: { edges: challengeEdges },
    allCertificateNode: { nodes: certificateNodes },
    allMarkdownRemark: { nodes: markdownRemarks }
  }: {
    allChallengeNode: AllChallengeNode;
    allCertificateNode: { nodes: CertificateNode[] };
    allMarkdownRemark: { nodes: MarkdownRemark[] };
  } = useStaticQuery(graphql`
    query getCurrentBlockNodes {
      allChallengeNode(
        sort: {
          fields: [
            challenge___superOrder
            challenge___order
            challenge___challengeOrder
          ]
        }
      ) {
        edges {
          node {
            challenge {
              id
              block
              challengeType
              title
              order
              superBlock
              dashedName
              fields {
                slug
                blockName
              }
            }
          }
        }
      }
      allCertificateNode {
        nodes {
          challenge {
            certification
            tests {
              id
            }
          }
        }
      }
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            superBlock
          }
        }
      }
    }
  `);

  const currentCertificateIds = certificateNodes
    .filter(
      node => dasherize(node.challenge.certification) === certification
    )[0]
    ?.challenge.tests.map(test => test.id);

  const currentBlockIds = challengeEdges
    .filter(edge => edge.node.challenge.block === block)
    .map(edge => edge.node.challenge.id);

  const currentSuperBlockChallenge = challengeEdges
    .filter(edge => edge.node.challenge.superBlock === superBlock)
    .map(edge => edge.node.challenge.id);

  const currentSuperBlock = markdownRemarks.find(
    node => node.frontmatter.superBlock === superBlock
  );

  return options?.isCertificationBlock
    ? {
        currentBlockIds: currentCertificateIds,
        superBlockChallenges: currentCertificateIds,
        currentSuperBlock: currentSuperBlock
      }
    : {
        currentBlockIds: currentBlockIds,
        superBlockChallenges: currentSuperBlockChallenge,
        currentSuperBlock: currentSuperBlock
      };
};

const CompletionModal = (props: CompletionModalsProps) => {
  const currentBlockData = useCurrentBlockIds(
    props.block || '',
    props.certification || '',
    props.superBlock || '',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    { isCertificationBlock: isProject(props.challengeType) }
  );

  return (
    <CompletionModalInner
      currentBlockIds={currentBlockData.currentBlockIds}
      superBlockChallengeIds={currentBlockData.superBlockChallenges}
      currentSuperBlock={currentBlockData.currentSuperBlock}
      {...props}
    />
  );
};

CompletionModal.displayName = 'CompletionModal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(CompletionModal));
