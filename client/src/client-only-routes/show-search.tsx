import React from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import { Spacer } from '../components/helpers';

function Searches({ path }: { path: string }): JSX.Element {
  return (
    <Grid>
      <div>
        <Spacer size={1} />
        <h1 className='big-subheading'>Search courses : {path}</h1>
      </div>
    </Grid>
  );
}

export default Searches;
