import React from 'react';

const Skills = () => {

    let paralax = (e) => {
        document.querySelectorAll('.skill-box i,svg').forEach(icon => {
            let speed = icon.getAttribute('data-speed')
            const x = (window.innerWidth - e.pageX * speed)/100
            const y = (window.innerHeight - e.pageY * speed)/100

            icon.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    }
    // onMouseMove={(e) => paralax(e)}
    return (
        <div className='all-skills' id="skills">
            <div className='skills-header'>
                <h1>TECHNOLOGIES</h1>
            </div>
            <div className='skill-box' >
                <i class="devicon-javascript-plain colored" data-speed='-5'></i>
                <i class="devicon-typescript-plain colored"></i>
                <i class="devicon-react-original-wordmark colored" data-speed='5'></i>
                <i class="devicon-nextjs-original-wordmark colored"></i>
                <i class="devicon-nodejs-plain-wordmark colored"></i>
                <i class="devicon-html5-plain-wordmark colored" data-speed='2'></i>
                <i class="devicon-css3-plain-wordmark colored" data-speed='6'></i>
                <i class="devicon-sass-original colored"></i>
                <i class="devicon-ruby-plain-wordmark colored" data-speed='8'></i>
                <i class="devicon-rails-plain-wordmark colored" data-speed='-2'></i>
                <i class="devicon-mongodb-plain-wordmark colored"></i>
                <i class="devicon-postgresql-plain-wordmark colored"></i>
                <i class="devicon-redux-original colored" data-speed='-7'></i>
                <i class="devicon-express-original-wordmark colored"></i>
                <i class="devicon-github-original-wordmark colored" data-speed='-9'></i>
                <i class="devicon-python-plain-wordmark colored" data-speed='6'></i>
            </div>
        </div>
    );
}
 
export default Skills;