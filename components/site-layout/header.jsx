import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';


const Containers = styled.div`
  .root {
    flex-grow: 1;
  }

  .app-bar-custom-color {
    background: #2b2b2b;
  }

  .menu-button {
    marginRigth: 8px;
  }

  .title {
    flex: 1;
  }

`

const Header = (props) => {
  return (
    <Containers className = "root">
      <AppBar position="static" className={"app-bar-custom-color"}>
        <Toolbar>
          <IconButton
            edge="start"
            className={"menu-button"}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={"title"}>
            nani-style
          </Typography>
        </Toolbar>
      </AppBar>
    </Containers>
  );
};
export default Header;
