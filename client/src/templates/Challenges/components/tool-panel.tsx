import { Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import './tool-panel.css';
import { openModal, executeChallenge } from '../redux';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      executeChallenge,
      openHelpModal: () => openModal('help'),
      openVideoModal: () => openModal('video'),
      openResetModal: () => openModal('reset')
    },
    dispatch
  );

interface ToolPanelProps {
  executeChallenge: (options?: { showCompletionModal: boolean }) => void;
  isMobile?: boolean;
  openHelpModal: () => void;
  openVideoModal: () => void;
  openResetModal: () => void;
  guideUrl: string;
  videoUrl: string;
}

function ToolPanel({
  executeChallenge,
  isMobile,
  openResetModal
}: ToolPanelProps) {
  const handleRunTests = () => {
    executeChallenge({ showCompletionModal: true });
  };
  return (
    <div
      className={`tool-panel-group button-group ${
        isMobile ? 'tool-panel-group-mobile' : ''
      }`}
    >
      <Button
        aria-label='Run the tests use shortcut Ctrl+enter'
        block={true}
        bsStyle='primary'
        className='btn-primary'
        onClick={handleRunTests}
      >
        {isMobile ? 'Exécuter' : 'Exécuter les tests'}
      </Button>

      <Button
        block={true}
        bsStyle='primary'
        className='btn-secondary'
        onClick={openResetModal}
      >
        {isMobile ? 'Réinitialiser' : 'Réinitialiser tout le code'}
      </Button>
    </div>
  );
}

ToolPanel.displayName = 'ToolPanel';

export default connect(mapStateToProps, mapDispatchToProps)(ToolPanel);
