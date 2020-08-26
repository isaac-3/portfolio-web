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
        <div style={{textAlign: 'center', backgroundColor: 'inherit'}} id="about">
            <div className='about-me-cont'>
                <div className='about-me-name'>
                    <h1>hi my name is isaac chavez and i am a . . .</h1>
                    <span className='txt-type' data-wait="3000" data-words='["software engineer", "Life Long Learner", "Developer"]'></span>
                </div>
                <div class="vl"></div>
                <div className='about-me-read'>
                    <h3>I have always had an interest in programming and everything that comes with it, having worked and experimented with a couple of languages, I have been captivated by it, in terms of what you may do with it in both front/back end, and how it can evolve in the future. Being able to see what goes on behind the scenes of different technologies intrigues me and makes me want to examine how it all works together. Working and trying out different methods on how things interact with each other is something I enjoy, it pushes me to broaden my mind and find different answers. In my previous experience, working with others, I have appreciated the strength of teamwork and have been able to gain the ability to see the whole picture in regards to people, places, and needs without compromising details. Knowing that software development is a never-ending road of learning, I am excited and motivated not only to continue but to embrace the journey ahead.
                    </h3>
                </div>
            </div>
        </div>
    );
}
 
export default About;