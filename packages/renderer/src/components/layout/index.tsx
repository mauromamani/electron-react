import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { AppBarComponent as AppBar } from '../appbar';
import { AppDrawer } from '../drawer';

interface Props {
  children?: JSX.Element;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar />

        <AppDrawer />

        <Box
          component={'main'}
          sx={{ flexGrow: 1, px: 5, py: 3 }}
          maxWidth='lg'
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
