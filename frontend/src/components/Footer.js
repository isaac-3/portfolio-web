import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-sec'>
                <i class="fa fa-github" onClick={()=>window.open("https://github.com/isaac-3")} style={{fontSize:"36px"}}></i>
                <img src='/medd.svg'style={{height:"36px"}}/>
            </div>
            <div>
                <h4>Isaac Chavez © 2020</h4>
            </div>
            
        </div>
    );
}
 
export default Footer;