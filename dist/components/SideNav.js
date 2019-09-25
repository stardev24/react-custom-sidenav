import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from "react";
import "./SideNav.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from 'clsx';
import { Drawer, AppBar, Toolbar, List, CssBaseline, Typography } from '@material-ui/core';
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
var useStyles = makeStyles(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: _defineProperty({
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing(9) + 1
    }),
    toolbar: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar),
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      width: 500,
      marginLeft: 100
    },
    gutters: {
      adjust: theme.mixins.gutters()
    },
    logo: {
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block'
    }
  };
});
var drawerWidth = 240;
export default function SideNav(props) {
  var _clsx3, _clsx4;

  var classes = useStyles();
  var theme = useTheme();

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  React.useEffect(function () {
    loadCSS('https://use.fontawesome.com/releases/v5.1.0/css/all.css', document.querySelector('#font-awesome-css'));
  }, []);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function setRoute(currentNavItem, history) {
    history.push(currentNavItem.text.linkurl);
  }

  return React.createElement("div", {
    className: classes.root
  }, React.createElement(CssBaseline, null), React.createElement(AppBar, {
    position: "sticky",
    className: clsx(classes.appBar, _defineProperty({}, classes.appBarShift, open)),
    color: props.appbar.bgcolor
  }, React.createElement(Toolbar, null, React.createElement(IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    edge: "start",
    className: clsx(classes.menuButton, _defineProperty({}, classes.hide, open))
  }, React.createElement(MenuIcon, null)), React.createElement(Typography, {
    variant: "h6",
    noWrap: true
  }, props.title))), React.createElement(Drawer, {
    variant: "permanent",
    className: clsx(classes.drawer, (_clsx3 = {}, _defineProperty(_clsx3, classes.drawerOpen, open), _defineProperty(_clsx3, classes.drawerClose, !open), _clsx3)),
    classes: {
      paper: clsx((_clsx4 = {}, _defineProperty(_clsx4, classes.drawerOpen, open), _defineProperty(_clsx4, classes.drawerClose, !open), _clsx4))
    },
    open: open
  }, React.createElement("div", {
    className: classes.toolbar
  }, React.createElement("img", {
    src: props.logo.image,
    width: props.logo.width,
    height: props.logo.height,
    alt: props.logo.alt,
    className: classes.logo
  }), React.createElement(IconButton, {
    onClick: handleDrawerClose
  }, theme.direction === 'rtl' ? React.createElement(ChevronRightIcon, null) : React.createElement(ChevronLeftIcon, null))), React.createElement(Divider, null), React.createElement(List, null, props.menulinks.map(function (text, index) {
    return React.createElement(ListItem, {
      button: true,
      key: text.linkurl,
      onClick: function onClick(e) {
        return setRoute({
          text: text
        }, props.history);
      }
    }, React.createElement("span", null, React.createElement(ListItemIcon, null, React.createElement(Icon, {
      className: text.icon
    }))), React.createElement(ListItemText, {
      primary: text.name
    }));
  }))));
}
SideNav.defaultProps = {
  logo: {
    width: "0px",
    height: "0px",
    image: "",
    all: ''
  },
  appbar: {
    bgcolor: "primary"
  },
  title: '',
  menulinks: [{
    "name": "Default",
    "icon": "fa fa-plus-circle fa-4",
    "linkurl": "/"
  }],
  history: {}
};