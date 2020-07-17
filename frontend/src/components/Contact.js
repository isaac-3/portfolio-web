import React from 'react';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {
    return (
        <div style={{height: '100vh', backgroundColor: 'rgb(105, 105, 105)', textAlign: 'center'}} id="contact">
            <div style={{paddingTop: '72px'}}>
                <h1>Contact Me</h1>
            </div>
            <div style={{textAlign: 'center', paddingLeft: '40%'}}>
                <div style={{float: 'left'}} onClick={()=>window.open("mailto:isaacgc0596@gmail.com?subject=Hello!")}>
                <MailOutlineOutlinedIcon style={{fontSize: '72px', paddingRight: '8px', paddingLeft: '8px'}}/>
                </div>
                <div style={{float: 'left'}} onClick={()=>window.open("https://www.linkedin.com/in/isaac-c0/")}>
                <LinkedInIcon style={{fontSize: '72px', paddingRight: '8px', paddingLeft: '8px'}}/>
                </div>
                <div style={{float: 'left'}} onClick={()=>window.open("https://github.com/isaac-3")}>
                <GitHubIcon style={{fontSize: '56px', paddingBottom: "11px", paddingRight: '8px', paddingLeft: '8px'}}/>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;