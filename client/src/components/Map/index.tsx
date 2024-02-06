import { graphql, useStaticQuery } from 'gatsby';
import i18next from 'i18next';
import React, { ReactElement } from 'react';
import { SuperBlocks } from '../../../../config/certification-settings';
import envData from '../../../../config/env.json';
import { isAuditedCert } from '../../../../utils/is-audited';
import { generateIconComponent } from '../../assets/icons';
import LinkButton from '../../assets/icons/link-button';
import { ChallengeNode } from '../../redux/prop-types';
import { Link, Spacer } from '../helpers';

import './map.css';

const { curriculumLocale } = envData;

interface MapProps {
  currentSuperBlock?: SuperBlocks | null;
  forLanding?: boolean;
  single?: boolean;
  className?: string;
  text?: string;
  keyPrefix?: string;
  children?: ReactElement | undefined;
}

interface MapData {
  allChallengeNode: {
    nodes: ChallengeNode[];
  };
}

function createSuperBlockTitle(superBlock: SuperBlocks) {
  const superBlockTitle = i18next.t(`intro:${superBlock}.title`);
  return superBlock === 'coding-interview-prep'
    ? i18next.t('learn.cert-map-estimates.coding-prep', {
        title: superBlockTitle
      })
    : i18next.t('learn.cert-map-estimates.certs', { title: superBlockTitle });
}

const linkSpacingStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

function renderLandingMap(nodes: ChallengeNode[]) {
  nodes = nodes.filter(
    ({ challenge }) => challenge.superBlock !== SuperBlocks.CodingInterviewPrep
  );
  return (
    <ul data-test-label='certifications'>
      {nodes.map(({ challenge }, i) => (
        <li key={i}>
          <Link
            className='btn link-btn btn-lg'
            to={`/learn/${challenge.superBlock}/`}
          >
            <div style={linkSpacingStyle}>
              {generateIconComponent(challenge.superBlock, 'map-icon')}
              {i18next.t(`intro:${challenge.superBlock}.title`)}
            </div>
            <LinkButton />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function renderFirstLandingMap(
  nodes: ChallengeNode[],
  className?: string,
  mapKeyAndText?: { text?: string; keyPrefix?: string },
  children?: ReactElement
) {
  nodes = nodes.filter(
    ({ challenge }) => challenge.superBlock !== SuperBlocks.CodingInterviewPrep
  );
  if (!mapKeyAndText) {
    mapKeyAndText = { text: '', keyPrefix: '' };
  }
  return (
    <>
      {nodes.map(({ challenge }, i) => (
        <span
          key={`${
            mapKeyAndText && mapKeyAndText.keyPrefix
              ? mapKeyAndText.keyPrefix
              : ''
          }${i}`}
        >
          {i === 0 && (
            <Link to={`/learn/${challenge.superBlock}/`} className={className}>
              {children
                ? children
                : mapKeyAndText && mapKeyAndText.text
                ? mapKeyAndText.text
                : 'ok'}
            </Link>
          )}
        </span>
      ))}
    </>
  );
}

function renderLearnMap(
  nodes: ChallengeNode[],
  currentSuperBlock: MapProps['currentSuperBlock']
) {
  nodes = nodes.filter(
    ({ challenge }) => challenge.superBlock !== currentSuperBlock
  );
  return curriculumLocale === 'english' ? (
    <ul data-test-label='learn-curriculum-map'>
      {nodes.map(({ challenge }, i) => (
        <li key={i}>
          <Link
            className='btn link-btn btn-lg'
            to={`/learn/${challenge.superBlock}/`}
          >
            <div style={linkSpacingStyle}>
              {generateIconComponent(challenge.superBlock, 'map-icon')}
              {createSuperBlockTitle(challenge.superBlock)}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <ul data-test-label='learn-curriculum-map'>
      {nodes
        .filter(({ challenge }) =>
          isAuditedCert(curriculumLocale, challenge.superBlock)
        )
        .map(({ challenge }, i) => (
          <li key={i}>
            <Link
              className='btn link-btn btn-lg'
              to={`/learn/${challenge.superBlock}/`}
            >
              <div style={linkSpacingStyle}>
                {generateIconComponent(challenge.superBlock, 'map-icon')}
                {createSuperBlockTitle(challenge.superBlock)}
              </div>
            </Link>
          </li>
        ))}
      <hr />
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: 0 }}>{i18next.t('learn.help-translate')} </p>
        <Link
          external={true}
          sameTab={false}
          to={i18next.t('links:help-translate-link-url')}
        >
          {i18next.t('learn.help-translate-link')}
        </Link>
        <Spacer />
      </div>
      {nodes
        .filter(
          ({ challenge }) =>
            !isAuditedCert(curriculumLocale, challenge.superBlock)
        )
        .map(({ challenge }, i) => (
          <li key={i}>
            <Link
              className='btn link-btn btn-lg'
              to={`/learn/${challenge.superBlock}/`}
            >
              <div style={linkSpacingStyle}>
                {generateIconComponent(challenge.superBlock, 'map-icon')}
                {createSuperBlockTitle(challenge.superBlock)}
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export function Map({
  forLanding = false,
  single = false,
  className = '',
  text = '',
  keyPrefix = '',
  currentSuperBlock = null,
  children = undefined
}: MapProps): React.ReactElement {
  /*
   * this query gets the first challenge from each block and the first block
   * from each superblock, leaving you with one challenge from each
   * superblock
   */
  const data: MapData = useStaticQuery(graphql`
    query SuperBlockNodes {
      allChallengeNode(
        sort: { fields: [challenge___superOrder] }
        filter: { challenge: { order: { eq: 0 }, challengeOrder: { eq: 0 } } }
      ) {
        nodes {
          challenge {
            superBlock
            dashedName
          }
        }
      }
    }
  `);

  const nodes = data.allChallengeNode.nodes;

  return (
    <div className='map-ui' data-test-label='learn-curriculum-map'>
      {forLanding
        ? single
          ? renderFirstLandingMap(
              nodes,
              className,
              {
                text: text,
                keyPrefix: keyPrefix
              },
              children
            )
          : renderLandingMap(nodes)
        : renderLearnMap(nodes, currentSuperBlock)}
    </div>
  );
}

Map.displayName = 'Map';

export default Map;
