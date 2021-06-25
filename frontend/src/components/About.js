import React from 'react';

const About = () => {
    const TypeWriter = function(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
      }
      
      // Type Method
      TypeWriter.prototype.type = function() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];
      
        // Check if deleting
        if(this.isDeleting) {
          // Remove char
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          // Add char
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
      
        // Initial Type Speed
        let typeSpeed = 300;
      
        if(this.isDeleting) {
          typeSpeed /= 2;
        }
      
        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
          // Make pause at end
          typeSpeed = this.wait;
          // Set delete to true
          this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          // Move to next word
          this.wordIndex++;
          // Pause before start typing
          typeSpeed = 500;
        }
      
        setTimeout(() => this.type(), typeSpeed);
      }
      
      document.addEventListener('DOMContentLoaded', init);
      
      function init() {
        const txtElement = document.querySelector('.txt-type');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        new TypeWriter(txtElement, words, wait);
      }
    return (
        <div className='all-about' id="about">
              <div className='about-me-cont'>
                  <div className='about-me-name'>
                      <img alt='profile-pic' src='/croppro.jpg' />
                      <h1>hi my name is isaac chavez and i am a . . .</h1>
                      <span className='txt-type' data-wait="3000" data-words='["Software Developer", "Lifelong Learner", "Problem Solver"]'></span>
                  </div>
                  <div className="vl"></div>
                  <div className='about-me-read'>
                      <h3>
                      Since I began my journey as a software engineer, 
                      I have been captivated by everything about it. 
                      Working with and learning new technologies Intrigues me 
                      and gives me new ideas and perspectives to various solutions. 
                      As a developer, you learn that there is more to programming than just coding, 
                      it's an opportunity to help and improve the world around us. 
                      Knowing that software development is a never-ending road of learning, I am excited to 
                      see what it may and will evolve to.
                      </h3>
                  </div>
              </div>
            
        </div>
    );
}
 
export default About;