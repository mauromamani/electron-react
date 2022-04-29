import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <>
      <Link to={'/'}>Home</Link>
      <Button variant='contained'>About</Button>;
    </>
  );
}

export default AboutPage;
