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
    marginLeft: '25%'
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    nav.classList.toggle('nav-active')
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = ''
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`
      }
    })
    burger.classList.toggle('toggle')
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor: 'rgb(44, 48, 54)'}}>
        <Toolbar className="navbar">
          <Typography variant="h6" className={classes.title} className='name-title'>
            Isaac Chavez
          </Typography>
            <div className='nav-links'>
              <li>
            <Link
            activeClass="active"
            // className='nav-links'
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>
                <Button style={{color: 'white'}}>
                About
                </Button>
            </Link>
            </li>
            <li>
            <Link
            activeClass="active"
            // className='nav-links'
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>
                <Button style={{color: 'white'}}>
                Projects
                </Button>
            </Link>
            </li>
            <li>
            <Link
            activeClass="active"
            // className='nav-links'
            to="blogs"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>
                <Button style={{color: 'rgb(36, 153, 191)'}}>
                Blogs
                </Button>
            </Link>
            </li>
            <li>
            <Link
            activeClass="active"
            // className='nav-links'
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>
                <Button style={{color: 'white'}}>
                Contact
                </Button>
            </Link>
            </li>
            <li>
            <Link
            // className='nav-links'
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>
                <Button style={{color: 'white'}}>
                Skills
                </Button>
            </Link>
            </li>
            </div>
            {/* <IconButton edge="start" className='burger' color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        <div className='burger' onClick={() => navSlide()}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
