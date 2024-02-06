import { Button, Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';

import { ButtonSpacer } from '../helpers';

import './danger-zone.css';

type DeleteModalProps = {
  delete: () => void;
  onHide: () => void;
  show: boolean;
};

function DeleteModal(props: DeleteModalProps): JSX.Element {
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
        <Modal.Title id='modal-title'>{'Supprimer mon compte'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {
            'Cela supprimera réellement toutes vos données, y compris toutes vos informations de progression et de compte.'
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
          {"C'est pas grave, je ne veux pas supprimer mon compte."}
        </Button>
        <ButtonSpacer />
        <Button
          className='action-btn btn-primary standard-radius-5'
          block={true}
          bsSize='lg'
          bsStyle='danger'
          onClick={props.delete}
          type='button'
        >
          {'Je suis sûr à 100%. Supprimez tout ce qui est lié à ce compte'}
        </Button>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

DeleteModal.displayName = 'DeleteModal';

export default DeleteModal;
