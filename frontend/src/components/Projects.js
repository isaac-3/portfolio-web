import React from 'react';
import {useState, useEffect} from 'react'

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
        <div style={{height: '100vh', backgroundColor: 'rgb(105, 105, 105)', textAlign: 'center'}} id="projects">
            <div style={{paddingTop: '72px'}}>
                <h1>My Projects</h1>
            </div>
            {projects.projects.map(project=>(
                <h1>Project Name: {project.name}</h1>
            ))}
        </div>
    );
}
 
export default Projects;