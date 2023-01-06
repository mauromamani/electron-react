import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import { AppBarComponent as AppBar } from '../appbar';
import { AppDrawer } from '../drawer';

interface Props {
  children?: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar />

      <AppDrawer />

      <Box component={'main'} sx={{ flexGrow: 1, px: 5, py: 3 }} maxWidth='lg'>
        {children}
      </Box>
    </Box>
  );
};
