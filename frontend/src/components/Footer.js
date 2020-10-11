import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-sec'>
                <i class="fa fa-github" id='footer-github'onClick={()=>window.open("https://github.com/isaac-3")}></i>
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='footer-medium' onClick={()=>window.open("https://medium.com/@isaacgc0596")}><path d="M 3 6 L 7 11.091797 L 7 35.285156 L 1 43 L 15 43 L 9 35.285156 L 9 13.75 L 22 43 L 21.998047 43.013672 L 34 13.544922 L 34 39 L 30 43 L 47 43 L 43 39 L 42.972656 10.503906 L 46.863281 6.0136719 L 34.845703 6.0136719 L 25.605469 28.744141 L 15.496094 6 L 3 6 z"/></svg>
                <i class="fa fa-linkedin-square" id='footer-linkedin' onClick={()=>window.open("https://www.linkedin.com/in/isaac-c0/")}></i>
                <i className='fa fa-youtube-play' id='footer-yt' onClick={()=>window.open("https://www.youtube.com/channel/UCRGTXv0C5Dn_u7QFid-PYqg?view_as=subscriber")}></i>
            </div>
            <div className='footer-name'>
                <h4>Isaac Chavez © 2020</h4>
            </div>
            
        </div>
    );
}
 
export default Footer;