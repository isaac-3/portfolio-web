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
  return (
    <div style={{backgroundColor: '#ebecf0'}}>
      <Navbar/>
      <About/>
      <Projects/>
      {/* <Blogs/> */}
      <Skills/>
      <Contact/>
      <Footer/>
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