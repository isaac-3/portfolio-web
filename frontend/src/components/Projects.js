import React from 'react';
import {useState, useEffect} from 'react'
import ProjCard from './ProjCard'

const Projects = () => {

    let [projects, setProjects] = useState()

    useEffect(()=>{
        fetch("http://localhost:3000/projects")
        .then(res=>res.json())
        .then(projects=>(
            setProjects({projects: projects})
        ))
    },[])

    if (projects == undefined){
        return <h1>loading</h1>
    }
    // console.log(projects.projects)

    return (
        <div style={{height: '100vh', textAlign: 'center'}} id="projects">
            <div style={{paddingTop: '72px'}}>
                <h1>My Projects</h1>
            </div>
            <div style={{width: 'fit-content', marginLeft:'auto',marginRight:'auto',}}>
            {projects.projects.map(project=>(
                <ProjCard project={project}/>
            ))}
            </div>
        </div>
    );
}
 
export default Projects;