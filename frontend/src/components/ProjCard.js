import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ReactTinyLink } from 'react-tiny-link'

export default function ProjCard(props) {

  let projimg = props.project.name === 'Take A Trip' ? '/takeatrip.png' : props.project.name === 'Shoptastic' ? '/shoptastic.png' : props.project.name === 'Chrello' ? '/chrello.png' : null

  const projSlide = (e) => {
    const proj = e.currentTarget
    proj.classList.toggle('expanded')
  }
  
  return (
    <div className='proj-card' onClick={(e) => projSlide(e)}>
      <img className='proj-img' src={projimg} height='200px' width='200px'/>
      <div className='text1'>
        <div className='proj-content'>
        <strong><small className='proj-title'>{props.project.name}</small></strong>
          <div className='proj-text'>
            {props.project.description}
            <div className='proj-btns'>
            <button className='demo-link' onClick={()=>window.open(props.project.project_url)}><i className='fa fa-youtube-play'></i>Demo</button>
            <button className='code-link' onClick={()=>window.open(props.project.code_url)}><i class="fa fa-github"></i>Code</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{display: 'flex'}}>
      <svg className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5"/></svg>
      </div>
 
    </div>
    
  );
}


