import React from "react";
import "./SideNav.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from 'clsx';
import {Drawer,AppBar,Toolbar,List,CssBaseline,Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width:500,
    marginLeft:100
  },
  gutters:{
    adjust:theme.mixins.gutters(),
  },
  logo:{
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
  } 
  
}));

const drawerWidth = 240;

export default function SideNav(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  function setRoute(currentNavItem,history){
    history.push(currentNavItem.text.linkurl)
   
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="sticky"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color={props.appbar.bgcolor}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <img src={props.logo.image} width={props.logo.width} height={props.logo.height} alt={props.logo.alt} className={classes.logo} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {props.menulinks.map((text, index) => (
            <ListItem button key={text.linkurl} onClick={(e) => setRoute({text},props.history)}>
                <span><ListItemIcon><Icon className={text.icon} /></ListItemIcon></span>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>

    </div>
  );
}


SideNav.propTypes = {
  menulinks:PropTypes.array.isRequired,
  history:PropTypes.object.isRequired,
  title:PropTypes.string
}

SideNav.defaultProps={
  logo:{width:"0px",height:"0px",image:"",all:''},
  appbar:{bgcolor:"primary"},
  title:'',
  menulinks:[{"name":"Default","icon":"fa fa-plus-circle fa-4","linkurl":"/"}],
  history:{}
}