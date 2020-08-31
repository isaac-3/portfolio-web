import React from 'react';
import {useState, useEffect} from 'react'
import ProjCard from './ProjCard'
import CircularProgress from '@material-ui/core/CircularProgress';

const Projects = () => {

    const projSlide = (e) => {
        const proj = e.currentTarget
        proj.classList.toggle('expanded')
      }

    return (
        <div className='all-projects' id="projects">
            <div className='proj-header'>
                <h1>PROJECTS</h1>
            </div>
            <div className='proj-cont'>
            {/* {projects.projects.map(project=>(
                <ProjCard project={project}/>
            ))}  */}
                <div className='proj-card' onClick={(e) => projSlide(e)}>
                    <img className='proj-img' alt='project-cover' src='/takeatrip.png' height='200px' width='200px'/>
                    <div className='text1'>
                        <div className='proj-content'>
                        <strong><small className='proj-title'>Take A Trip</small></strong>
                        <div className='proj-text'>
                        Users are able to plan trips out by searching for various things to do around their location, and may also add other users to join in on the trip to plan out more ideas
                            <div className='proj-btns'>
                            <button className='demo-link' onClick={()=>window.open('https://www.youtube.com/watch?v=adlCActjmRc&feature=youtu.be')}><i className='fa fa-youtube-play'></i>  Demo</button>
                            <button className='code-link' onClick={()=>window.open('https://github.com/isaac-3/final-project')}><i class="fa fa-github"></i>  Code</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='chevron-cont'>
                        <svg className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5"/></svg>
                    </div>
                </div>
                <div className='proj-card' onClick={(e) => projSlide(e)}>
                    <img className='proj-img' alt='project-cover' src='/shoptastic.png' height='200px' width='200px'/>
                    <div className='text1'>
                        <div className='proj-content'>
                        <strong><small className='proj-title'>Shoptastic</small></strong>
                        <div className='proj-text'>
                        E-commerce website where users can search by categories for various items and be able to purchase them, edit their cart and view store locations
                            <div className='proj-btns'>
                            <button className='demo-link' onClick={()=>window.open('https://www.youtube.com/watch?v=QG8HfCflFWM&feature=youtu.be')}><i className='fa fa-youtube-play'></i>  Demo</button>
                            <button className='code-link' onClick={()=>window.open('https://github.com/isaac-3/Shop-Mod4-React-Project')}><i class="fa fa-github"></i>  Code</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='chevron-cont'>
                        <svg className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5"/></svg>
                    </div>
                </div>
                <div className='proj-card' onClick={(e) => projSlide(e)}>
                    <img className='proj-img' alt='project-cover' src='/chrello.png' height='200px' width='200px'/>
                    <div className='text1'>
                        <div className='proj-content'>
                        <strong><small className='proj-title'>Chrello</small></strong>
                        <div className='proj-text'>
                            A To-Do app where users can make an agenda and be able to plan out their days by creating and/or finishing tasks
                            <div className='proj-btns'>
                            <button className='demo-link' onClick={()=>window.open('https://www.youtube.com/watch?v=jqrZRoTbMS8')}><i className='fa fa-youtube-play'></i>  Demo</button>
                            <button className='code-link' onClick={()=>window.open('https://github.com/bryantomoregie/Project-3-')}><i class="fa fa-github"></i>  Code</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='chevron-cont'>
                        <svg className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5"/></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;