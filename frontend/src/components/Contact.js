import React from 'react';

const openPDF = () => {
    const pdfWindow = window.open("test");
    const title = "Isaac Resume";
    const URI = "";
    const html = `
      <html>
        <head>
          <title>${title}</title>
        </head>
        <body style="margin:0px">
          <embed width="100%" height="100%" src="/resume.pdf" type="application/pdf">
        </body>
      </html>
    `;

    pdfWindow.document.write(html);
    pdfWindow.document.close();
    pdfWindow.history.pushState(null, null, URI);
  };

const Contact = () => {
    return (
        <div className="contact-sec" id='contact'>
            <div className='contact-links'>
                <h1>CONTACT</h1>
                <div className="contact-icon-email">
                    <i className="fa fa-envelope-o" id='email-icon' onClick={()=>window.open("mailto:isaacgc0596@gmail.com?subject=Hello!")}></i>
                    <span >isaacgc0596@gmail.com </span><br/>
                </div>
                <div className="contact-icon-phone">
                    <i className="fa fa-phone" id="phone-icon" onClick={()=> window.open('tel:2819355556')}></i>
                    <span >(281) 935-5556</span>
                </div>
                <div className="contact-icon-linkedin">
                    <i className="fa fa-linkedin-square" id='linkedin-icon' onClick={()=>window.open("https://www.linkedin.com/in/isaac-c0/")}></i>
                    <span >Connect With Me</span><br/>
                </div>
                <h1>RESUME</h1>
                <div className="resume-section">
                    <i className="fa fa-file-o" id='resume' onClick={() => openPDF()}></i>
                    <span>View My Resume</span>
                </div>
            </div>
            <div className="contact-form">
                <div className="form-title">
                    <h1>Get In Touch</h1>
                </div>
                <form name="contact" method="post" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <label className='label'>Name</label><input required className='input' type='text' placeholder="First Last" name="name"/><br/><br/>
                    <label className='label'>Email</label><input required className='input' type='email' placeholder="ex@example.com" name="email"/><br/><br/>
                    <label className='label'>Message</label><textarea required className='input' id='message-box' placeholder="Enter Message" name="message"/><br/><br/>
                    <button className="red" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;