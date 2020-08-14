import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch} from 'react-router-dom'
import { Route } from 'react-router'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() {
  return (
    <div >
      <Navbar/>
      <About/>
      <Projects/>
      <Blogs/>
      <Contact/>
      <Skills/>
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