import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <>
      <Button variant='outlined'>
        <Link to={'/'}>Home</Link>
      </Button>
      <Button variant='contained'>About</Button>
    </>
  );
}

export default AboutPage;
