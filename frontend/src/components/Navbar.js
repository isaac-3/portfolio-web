import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { red } from '@material-ui/core/colors';
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor: 'rgb(44, 48, 54)'}}>
        <Toolbar className="navbar">
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Isaac Chavez
          </Typography>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>
                <Button style={{color: 'white'}}>
                About
                </Button>
            </Link>
            <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>
                <Button style={{color: 'white'}}>
                Projects
                </Button>
            </Link>
            <Link
            activeClass="active"
            to="blogs"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>
                <Button style={{color: 'white'}}>
                Blogs
                </Button>
            </Link>
            <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>
                <Button style={{color: 'white'}}>
                Contact
                </Button>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
