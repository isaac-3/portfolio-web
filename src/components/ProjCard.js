import React from 'react';

export default function ProjCard(props) {

  let projimg = props.project.name === 'Take A Trip' ? '/takeatrip.png' : props.project.name === 'Shoptastic' ? '/shoptastic.png' : props.project.name === 'Chrello' ? '/chrello.png' : null

  const projSlide = (e) => {
    const proj = e.currentTarget
    proj.classList.toggle('expanded')
  }

  return (
    <div className='proj-card' onClick={(e) => projSlide(e)}>
      <img className='proj-img' alt='project-cover' src={projimg} height='200px' width='200px'/>
      <div className='text1'>
        <div className='proj-content'>
        <strong><small className='proj-title'>{props.project.name}</small></strong>
          <div className='proj-text'>
            {props.project.description}
            <div className='proj-btns'>
            <button className='demo-link' onClick={()=>window.open(props.project.project_url)}><i className='fa fa-youtube-play'></i>  Demo</button>
            <button className='code-link' onClick={()=>window.open(props.project.code_url)}><i class="fa fa-github"></i>  Code</button>
            </div>
          </div>
        </div>
      </div>
      <div className='chevron-cont'>
        <svg className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5"/></svg>
      </div>
 
    </div>
    
  );
}


