import React from 'react';
import {useState, useEffect} from 'react'
import ProjCard from './ProjCard'
import CircularProgress from '@material-ui/core/CircularProgress';

const Projects = () => {

    let [projects, setProjects] = useState()

    useEffect(()=>{
        fetch("http://localhost:3000/projects")
        .then(res=>res.json())
        .then(projects=>(
            setProjects({projects: projects})
        ))
    },[])

    if (projects === undefined){
        return <CircularProgress />
    }

    return (
        <div className='all-projects' id="projects">
            <div className='proj-header'>
                <h1>PROJECTS</h1>
            </div>
            <div className='proj-cont'>
            {projects.projects.map(project=>(
                <ProjCard project={project}/>
            ))} 
            </div>
        </div>
    );
}
 
export default Projects;