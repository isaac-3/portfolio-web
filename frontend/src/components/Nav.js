import React from 'react';

const Nav = () => {
    return (
        <nav>
            <div>
                <h4>isaac chavez</h4>
            </div>
            <ul className='navbar'>
                <li
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {500}><button
                >ABOUT</button></li>

            </ul>
        </nav>
    );
}
 
export default Nav;