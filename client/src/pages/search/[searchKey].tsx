import React from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import { Spacer } from '../../components/helpers';

function Searches({ params }: { params: { searchKey: string } }): JSX.Element {
  const { searchKey } = params;
  return (
    <Grid>
      <div>
        <Spacer size={1} />
        <h1 className='big-subheading'>Search courses : {searchKey}</h1>
      </div>
    </Grid>
  );
}

export default Searches;
