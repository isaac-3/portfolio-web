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
import Avatar from '@material-ui/core/Avatar';

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
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
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

  const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullTxt = this.words[current];

  // Check if deleting
  if(this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial Type Speed
  let typeSpeed = 300;

  if(this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if(!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
}

document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor: '#314455'}}>
        <Toolbar className="navbar">
        <Avatar alt="Remy Sharp" src="/profile.jpg" className={classes.large}/>
          <Typography variant="h6" className={classes.title} className='name-title'>
            {/* <span className='txt-type' data-wait="3000" data-words='["Isaac Chavez"]'></span> */}
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
                <Button disableRipple='true' className='nav-btns' style={{color: '#babecc'}}>
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
                <Button disableRipple='true' className='nav-btns' style={{color: '#babecc'}}>
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
                <Button disableRipple='true' className='nav-btns' style={{color: '#babecc'}}>
                Blogs
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
                <Button disableRipple='true' className='nav-btns' style={{color: '#babecc'}}>
                Skills
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
                <Button disableRipple='true' className='nav-btns' style={{color: '#babecc'}}>
                Contact
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
