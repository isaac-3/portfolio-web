import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch} from 'react-router-dom'
import { Route } from 'react-router'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Nav from './components/Nav'
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer';

function App() {

  let top = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div style={{backgroundColor: '#ebecf0'}}>
      <Navbar/>
      <div className='paralax'>
                <div className='wavy' style={{position: 'absolute', top: '20%', left: '29%'}}>
                    <span style={{'--co': 1, fontSize: '100px'}}>i</span>
                    <span style={{'--co': 2, fontSize: '100px'}}>s</span>
                    <span style={{'--co': 3, fontSize: '100px'}}>a</span>
                    <span style={{'--co': 4, fontSize: '100px'}}>a</span>
                    <span style={{'--co': 5, fontSize: '100px'}}>c</span>
                    <span style={{'--co': 6, fontSize: '100px'}}>&nbsp;</span>
                    <span style={{'--co': 7, fontSize: '100px'}}>c</span>
                    <span style={{'--co': 8, fontSize: '100px'}}>h</span>
                    <span style={{'--co': 9, fontSize: '100px'}}>a</span>
                    <span style={{'--co': 10, fontSize: '100px'}}>v</span>
                    <span style={{'--co': 11, fontSize: '100px'}}>e</span>
                    <span style={{'--co': 12, fontSize: '100px'}}>z</span>
                    <span style={{'--co': 13, fontSize: '100px'}}>&nbsp;</span>
                    <span style={{'--co': 14, fontSize: '100px'}}>©</span>
                </div>
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
      {/* <a href='/' style={{position: 'fixed', left: '90%', top: '90%'}}>Up!!</a> */}
      <button class="back-to-top__button button" onClick={()=>top()} style={{position: 'fixed', left: '90%', top: '90%'}}>Back to top</button>
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


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}