import { Modal, Button, Col, Row } from '@freecodecamp/react-bootstrap';
import { WindowLocation } from '@reach/router';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { goToAnchor } from 'react-scrollable-anchor';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { createSelector } from 'reselect';
import Cup from '../../assets/icons/cup';
import Heart from '../../assets/icons/heart';

import {
  closeDonationModal,
  isDonationModalOpenSelector,
  recentlyClaimedBlockSelector,
  executeGA,
  isAVariantSelector
} from '../../redux';
import { isLocationSuperBlock } from '../../utils/path-parsers';
import { playTone } from '../../utils/tone';
import { Spacer } from '../helpers';

const mapStateToProps = createSelector(
  isDonationModalOpenSelector,
  recentlyClaimedBlockSelector,
  isAVariantSelector,
  (show: boolean, recentlyClaimedBlock: string, isAVariant: boolean) => ({
    show,
    recentlyClaimedBlock,
    isAVariant
  })
);

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      closeDonationModal,
      executeGA
    },
    dispatch
  );

type DonateModalProps = {
  activeDonors?: number;
  closeDonationModal: typeof closeDonationModal;
  executeGA: typeof executeGA;
  location: WindowLocation | undefined;
  recentlyClaimedBlock: string;
  show: boolean;
  isAVariant: boolean;
};

function DonateModal({
  show,
  closeDonationModal,
  executeGA,
  location,
  recentlyClaimedBlock
}: DonateModalProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [closeLabel, setCloseLabel] = React.useState(false);

  useEffect(() => {
    if (show) {
      void playTone('donation');
      executeGA({ type: 'modal', data: '/donation-modal' });
      executeGA({
        type: 'event',
        data: {
          category: 'Donation View',
          action: `Displayed ${
            recentlyClaimedBlock ? 'block' : 'progress'
          } donation modal`,
          nonInteraction: true
        }
      });
    }
  }, [show, recentlyClaimedBlock, executeGA]);

  const handleModalHide = () => {
    // If modal is open on a SuperBlock page
    if (isLocationSuperBlock(location)) {
      goToAnchor('claim-cert-block');
    }
  };

  const blockDonationText = (
    <div className=' text-center block-modal-text'>
      <div className='donation-icon-container'>
        <Cup className='donation-icon' />
      </div>
      <Row>
        {!closeLabel && (
          <Col sm={10} smOffset={1} xs={12}>
            <b>{'Bien joué. Vous venez de terminer!'}</b>
          </Col>
        )}
      </Row>
    </div>
  );

  const progressDonationText = (
    <div className='text-center progress-modal-text'>
      <div className='donation-icon-container'>
        <Heart className='donation-icon' />
      </div>
      <Row>
        {!closeLabel && (
          <Col sm={10} smOffset={1} xs={12}>
            {'Bien joué!'}
          </Col>
        )}
      </Row>
    </div>
  );

  return (
    <Modal
      bsSize='lg'
      className='donation-modal'
      onExited={handleModalHide}
      show={show}
    >
      <Modal.Body>
        {recentlyClaimedBlock ? blockDonationText : progressDonationText}
        <Spacer />
        <Row>
          <Col sm={4} smOffset={4} xs={8} xsOffset={2}>
            <Button
              block={true}
              bsSize='sm'
              bsStyle='primary'
              className='action-btn btn-primary'
              onClick={closeDonationModal}
              tabIndex='0'
            >
              {'Passez au défi suivant'}
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

DonateModal.displayName = 'DonateModal';

export default connect(mapStateToProps, mapDispatchToProps)(DonateModal);
