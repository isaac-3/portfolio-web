import React from 'react';
import './App.css';
import { BrowserRouter, Switch} from 'react-router-dom'
import { Route } from 'react-router'
import Navbar from './components/Navbar'
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer';
import Fab from '@material-ui/core/Fab';

function App() {

  let top = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className='app-cont'>
      <Navbar/>
      <div className='paralax top-para'>
      </div>
      <About/>
      <div className='paralax'></div>
      <Projects/>
      {/* <Blogs/> */}
      <div className='paralax'></div>
      <Skills/>
      <div className='paralax'></div>
      <Contact/>
      <Footer/>
      <Fab id="back-to-top" disableRipple size='small' onClick={()=>top()}><i className="fa fa-caret-up"></i></Fab>
      {/* <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;