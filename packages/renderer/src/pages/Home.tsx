import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Link to={'/about'}>About</Link>
      <Button variant='contained'>Home</Button>;
    </>
  );
}

export default HomePage;
