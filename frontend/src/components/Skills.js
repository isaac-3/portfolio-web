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
        <div style={{textAlign: 'center'}} id="skills">
            <div className='skills-header'>
                <h1>My Skills:</h1>
            </div>
            <div className='skill-box' >
                <i class="devicon-javascript-plain colored" data-speed='-5' style={{fontSize: '100px'}}></i>
                <i class="devicon-react-original-wordmark colored" data-speed='5' style={{fontSize: '100px'}}></i>
                <i class="devicon-html5-plain-wordmark colored" data-speed='2' style={{fontSize: '100px'}}></i>
                <i class="devicon-css3-plain-wordmark colored" data-speed='6' style={{fontSize: '100px'}}></i>
                <i class="devicon-ruby-plain-wordmark colored" data-speed='8' style={{fontSize: '100px'}}></i>
                <i class="devicon-rails-plain-wordmark colored" data-speed='-2' style={{fontSize: '100px'}}></i>
                <i class="devicon-bootstrap-plain-wordmark colored" data-speed='4' style={{fontSize: '100px'}}></i>
                <i class="devicon-github-plain-wordmark colored" data-speed='-9' style={{fontSize: '100px'}}></i>
                <i class="devicon-python-plain-wordmark colored" data-speed='6' style={{fontSize: '100px'}}></i>
                {/* <div style={{width: '100px', height: '100px'}}> */}
                    <svg viewBox="0 0 128 128" data-speed='-7' style={{width: '100px', height: '100px'}} className="svg-redux">
                        <path fill="none" d="M0 0h128v128H0z"></path><path className="redux-icon" d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.12 9.12 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z" fill="#764abc"></path>
                    </svg>
                {/* </div> */}
                {/* <div style={{width: '100px', height: '100px'}}> */}
                {/* <svg data-speed='-5' id="_x31__x2C_5" height="120" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" className="svg-sql">
                    <path className="sql-icon" d="m12 5c-.717 0-7-.07-7-2.5s6.283-2.5 7-2.5 7 .07 7 2.5-6.283 2.5-7 2.5zm-5.436-2.5c.471.401 2.447 1 5.436 1s4.965-.599 5.436-1c-.471-.401-2.447-1-5.436-1s-4.965.599-5.436 1zm10.957.094h.01z"/><path className="sql-icon" d="m12 9c-.717 0-7-.07-7-2.5 0-.414.336-.75.75-.75s.75.336.75.75c.219.299 2.268 1 5.5 1s5.281-.701 5.521-1.094c0-.415.325-.703.739-.703.415 0 .74.383.74.797 0 2.43-6.283 2.5-7 2.5z"/><path className="sql-icon" d="m12 13c-.717 0-7-.07-7-2.5 0-.414.336-.75.75-.75s.75.336.75.75c.219.299 2.268 1 5.5 1s5.281-.701 5.521-1.094c0-.415.325-.703.739-.703.415 0 .74.383.74.797 0 2.43-6.283 2.5-7 2.5z"/><path className="sql-icon" d="m17.08 16.27c-.414 0-.755-.336-.755-.75 0-.342.226-.631.538-.721.549-.223.656-.391.657-.393l-.02-11.906c0-.414.336-.75.75-.75s.75.336.75.75v12c0 .712-.554 1.291-1.646 1.718-.087.034-.18.052-.274.052z"/><path className="sql-icon" d="m6.88 16.25c-.092 0-.185-.017-.275-.052-1.327-.523-1.605-1.212-1.605-1.698v-12c0-.414.336-.75.75-.75s.75.336.75.75v12c.009-.051.189.12.655.302.385.152.574.587.423.973-.117.295-.399.475-.698.475z"/><path className="sql-icon" d="m12.25 24h-.5c-.965 0-1.75-.785-1.75-1.75v-2.5c0-.965.785-1.75 1.75-1.75h.5c.965 0 1.75.785 1.75 1.75v2.5c0 .965-.785 1.75-1.75 1.75zm-.5-4.5c-.138 0-.25.112-.25.25v2.5c0 .138.112.25.25.25h.5c.138 0 .25-.112.25-.25v-2.5c0-.138-.112-.25-.25-.25z"/><path className="sql-icon" d="m13.25 24c-.192 0-.384-.073-.53-.22l-1-1c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l1 1c.293.293.293.768 0 1.061-.147.147-.339.22-.531.22z"/><path className="sql-icon" d="m6.208 24h-1.458c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.458c.158 0 .292-.172.292-.375s-.134-.375-.292-.375h-.416c-.988 0-1.792-.841-1.792-1.875s.804-1.875 1.792-1.875h1.458c.414 0 .75.336.75.75s-.336.75-.75.75h-1.458c-.158 0-.292.172-.292.375s.134.375.292.375h.416c.988 0 1.792.841 1.792 1.875s-.804 1.875-1.792 1.875z"/><path className="sql-icon" d="m19.25 24h-2.5c-.414 0-.75-.336-.75-.75v-4.5c0-.414.336-.75.75-.75s.75.336.75.75v3.75h1.75c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
                </svg> */}
                <img src='/sql.svg' style={{height: '100px'}} className="svg-sql"/>
                {/* <img src='/sql.svg' style={{height: '100px'}} className="svg-sql"/> */}
                {/* </div> */}
            </div>
        </div>
    );
}
 
export default Skills;