import React from 'react';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {
    return (
        <div className="contact-sec" style={{height: '100vh', textAlign: 'center', backgroundColor: '#ebecf0'}} id="contact">
            {/* <div style={{paddingTop: '72px'}}>
            </div> */}
            <div style={{textAlign: 'left'}}>
                <h1>Contact Me</h1>
                <div className="contact-icon">
                    <i class="fa fa-envelope-o" id='email-icon' onClick={()=>window.open("mailto:isaacgc0596@gmail.com?subject=Hello!")} style={{fontSize:"36px"}}></i>
                    <span style={{marginLeft: "8px"}}>isaacgc0596@gmail.com</span><br/>
                </div>
                <div className="contact-icon">
                    <i class="fa fa-phone" id="phone-icon" style={{fontSize:"36px"}}></i>
                    <span style={{marginLeft: "8px"}}>(281) 935-5556</span>
                </div>
                <div className="contact-icon">
                    <i class="fa fa-linkedin-square" id='linkedin-icon' onClick={()=>window.open("https://www.linkedin.com/in/isaac-c0/")} style={{fontSize:"36px"}}></i>
                    <span style={{marginLeft: "8px"}}>Connect With Me</span><br/>
                </div>
                <div className="contact-icon">
                    <i class="fa fa-github" id='github-icon' onClick={()=>window.open("https://github.com/isaac-3")} style={{fontSize:"36px"}}></i>
                    <span style={{marginLeft: "8px"}}>GitHub Profile</span>
                </div>
            </div>
            <div className="contact-form">
                <div className="form-title">
                    <h1>Get In Touch</h1>
                </div>
                <label className='label'>Name</label><input className='input' type='text' placeholder="First Last" name="name"/><br/><br/>
                <label className='label'>Email</label><input className='input' type='text' placeholder="ex@example.com" name="email"/><br/><br/>
                <label className='label'>Message</label><textarea className='input' id='message-box' type='text' placeholder="Enter Message" name="message"/><br/><br/>
                <button className="red" type="button">Send</button>
            </div>
        </div>
    );
}
 
export default Contact;