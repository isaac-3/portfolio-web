import React from 'react';

const Contact = () => {
    return (
        <div className="contact-sec" style={{textAlign: 'center'}} id='contact'>
            <div className='contact-links'>
                <h1>Contact Me</h1>
                <div className="contact-icon-email">
                    <i class="fa fa-envelope-o" id='email-icon' onClick={()=>window.open("mailto:isaacgc0596@gmail.com?subject=Hello!")} style={{fontSize:"36px"}}></i>
                    <span className='email-span' style={{marginLeft: "8px"}}>isaacgc0596@gmail.com</span><br/>
                </div>
                <div className="contact-icon-phone">
                    <i class="fa fa-phone" id="phone-icon" onClick={()=> window.open('tel:2819355556')} style={{fontSize:"36px"}}></i>
                    <span style={{marginLeft: "8px"}}>(281) 935-5556</span>
                </div>
                <div className="contact-icon-linkedin">
                    <i class="fa fa-linkedin-square" id='linkedin-icon' onClick={()=>window.open("https://www.linkedin.com/in/isaac-c0/")} style={{fontSize:"36px"}}></i>
                    <span style={{marginLeft: "8px"}}>Connect With Me</span><br/>
                </div>
                <h1>My Resume</h1>
                <div className="resume-section">
                    <i class="fa fa-file-o" id='resume'onClick={()=>window.open("/resume.pdf")} style={{fontSize: '30px'}}></i>
                    <a style={{marginLeft:'8px'}} href='/resume.pdf' target="_blank">View My Resume</a>
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