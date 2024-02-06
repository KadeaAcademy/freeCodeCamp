// Package Utilities
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';

// Local Utilities
import { executeGA } from '../../../redux';
import { isResetModalOpenSelector, closeModal, resetChallenge } from '../redux';

// Styles
import './reset-modal.css';

// Types
interface ResetModalProps {
  close: () => void;
  executeGA: () => void;
  isOpen: boolean;
  reset: () => void;
}

// Redux Setup
const mapStateToProps = createSelector(
  isResetModalOpenSelector,
  (isOpen: boolean) => ({
    isOpen
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      close: () => closeModal('reset'),
      executeGA,
      reset: () => resetChallenge()
    },
    dispatch
  );

function withActions(...fns: Array<() => void>) {
  return () => fns.forEach(fn => fn());
}

// Component
function ResetModal({ reset, close, isOpen }: ResetModalProps): JSX.Element {
  if (isOpen) {
    executeGA({ type: 'modal', data: '/reset-modal' });
  }
  return (
    <Modal
      animation={false}
      dialogClassName='reset-modal'
      keyboard={true}
      onHide={close}
      show={isOpen}
    >
      <Modal.Header className='reset-modal-header' closeButton={true}>
        <Modal.Title className='text-center'>
          {'Réinitialiser cette leçon'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='reset-modal-body'>
        <div className='text-center'>
          <p>
            {
              'Êtes-vous sûr de vouloir réinitialiser cette leçon ? Les éditeurs et les tests seront réinitialisés.'
            }
          </p>
          <p>
            <em>{'Cela ne peut être défait'}</em>.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className='reset-modal-footer'>
        <Button
          className='action-btn btn-secondary standard-radius-5'
          block={true}
          bsSize='large'
          bsStyle='danger'
          onClick={withActions(reset, close)}
        >
          {'Réinitialiser cette leçon'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ResetModal.displayName = 'ResetModal';

export default connect(mapStateToProps, mapDispatchToProps)(ResetModal);
