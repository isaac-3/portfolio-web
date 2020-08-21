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
      
      // Init App
      function init() {
        const txtElement = document.querySelector('.txt-type');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        // Init TypeWriter
        new TypeWriter(txtElement, words, wait);
      }
    return (
        <div style={{height: '100vh', textAlign: 'center'}} id="about">
            <div style={{paddingTop: '72px'}}>
                <div className='wavy'>
                    <span style={{isolation: 1}}>I</span>
                    <span style={{isolation: 2}}>S</span>
                    <span style={{isolation: 3}}>A</span>
                    <span style={{isolation: 4}}>A</span>
                    <span style={{isolation: 5}}>C</span>

                    <span style={{isolation: 6}}>C</span>
                    <span style={{isolation: 7}}>H</span>
                    <span style={{isolation: 8}}>A</span>
                    <span style={{isolation: 9}}>V</span>
                    <span style={{isolation: 10}}>E</span>
                    <span style={{isolation: 11}}>Z</span>
                </div>
                <span className='txt-type' data-wait="3000" data-words='["Isaac Chavez"]'></span>

                <h1>About Me</h1>
                <h3>My Names Isaac and I have passion for software development</h3>
            </div>
        </div>
    );
}
 
export default About;