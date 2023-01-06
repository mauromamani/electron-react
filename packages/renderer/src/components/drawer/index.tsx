import MuiDrawer from '@mui/material/Drawer';
import { useNavigate } from 'react-router-dom';
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Divider from '@mui/material/Divider';
import { DrawerHeader } from './DrawerHeader';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { closeDrawer } from '../../store/uiSlice';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

interface Props {}

export const AppDrawer = ({}: Props) => {
  const isDrawerOpen = useAppSelector(({ ui }) => ui.isDrawerOpen);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    dispatch(closeDrawer());
  };

  return (
    <Drawer variant='permanent' open={isDrawerOpen}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <List>
        <Tooltip title={`${isDrawerOpen ? '' : 'Productos'}`} placement='right'>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => navigate('/products')}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isDrawerOpen ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isDrawerOpen ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <ShoppingCartRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary={'Productos'}
                sx={{ opacity: isDrawerOpen ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </Tooltip>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Drawer>
  );
};
