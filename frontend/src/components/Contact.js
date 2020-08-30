import React from 'react';

const Contact = () => {
    return (
        <div className="contact-sec" id='contact'>
            <div className='contact-links'>
                <h1>CONTACT</h1>
                <div className="contact-icon-email">
                    <i class="fa fa-envelope-o" id='email-icon' onClick={()=>window.open("mailto:isaacgc0596@gmail.com?subject=Hello!")}></i>
                    <span >isaacgc0596@gmail.com</span><br/>
                </div>
                <div className="contact-icon-phone">
                    <i class="fa fa-phone" id="phone-icon" onClick={()=> window.open('tel:2819355556')}></i>
                    <span >(281) 935-5556</span>
                </div>
                <div className="contact-icon-linkedin">
                    <i class="fa fa-linkedin-square" id='linkedin-icon' onClick={()=>window.open("https://www.linkedin.com/in/isaac-c0/")}></i>
                    <span >Connect With Me</span><br/>
                </div>
                <h1>RESUME</h1>
                <div className="resume-section">
                    <i class="fa fa-file-o" id='resume' onClick={()=>window.open("/resume.pdf")}></i>
                    <a href='/resume.pdf' target="_blank">View My Resume</a>
                </div>
            </div>
            <div className="contact-form">
                <div className="form-title">
                    <h1>Get In Touch</h1>
                </div>
                <form method="POST" data-netlify="true">
                    <label className='label'>Name</label><input className='input' type='text' placeholder="First Last" name="name"/><br/><br/>
                    <label className='label'>Email</label><input className='input' type='text' placeholder="ex@example.com" name="email"/><br/><br/>
                    <label className='label'>Message</label><textarea className='input' id='message-box' type='text' placeholder="Enter Message" name="message"/><br/><br/>
                    <button className="red" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;