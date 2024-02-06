import { Button, Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';

import { ButtonSpacer } from '../helpers';

type ResetModalProps = {
  onHide: () => void;
  reset: () => void;
  show: boolean;
};

function ResetModal(props: ResetModalProps): JSX.Element {
  const { show, onHide } = props;

  return (
    <Modal
      aria-labelledby='modal-title'
      backdrop={true}
      bsSize='lg'
      className='text-center'
      keyboard={true}
      onHide={onHide}
      show={show}
    >
      <Modal.Header closeButton={true}>
        <Modal.Title id='modal-title'>
          {'Réinitialiser ma progression'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {
            'Cela supprimera vraiment tous vos progrès, vos points, les défis terminés, tout.'
          }
        </p>
        <p>
          {
            "Nous ne pourrons plus rien récupérer pour vous par la suite, même si vous changez d'avis."
          }
        </p>
        <hr />
        <Button
          className='action-btn btn-secondary standard-radius-5'
          block={true}
          bsSize='lg'
          bsStyle='primary'
          onClick={props.onHide}
          type='button'
        >
          {"C'est pas grave, je ne veux pas effacer toute ma progression."}
        </Button>
        <ButtonSpacer />
        <Button
          className='action-btn btn-primary standard-radius-5'
          block={true}
          bsSize='lg'
          bsStyle='danger'
          onClick={props.reset}
          type='button'
        >
          {'Remettez tout à zéro. Je veux recommencer depuis le début'}
        </Button>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

ResetModal.displayName = 'ResetModal';

export default ResetModal;
