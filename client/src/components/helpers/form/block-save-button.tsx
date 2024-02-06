import { Button } from '@freecodecamp/react-bootstrap';
import React from 'react';

function BlockSaveButton({
  children,
  ...restProps
}: {
  children?: React.ReactNode;
  disabled?: boolean;
}): JSX.Element {
  return (
    <Button
      className='btn-secondary standard-radius-5'
      block={true}
      bsSize='lg'
      bsStyle='primary'
      type='submit'
      {...restProps}
    >
      {children || 'Sauvegarder'}
    </Button>
  );
}

BlockSaveButton.displayName = 'BlockSaveButton';

export default BlockSaveButton;
