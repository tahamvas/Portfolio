import React from 'react';
import "./App.css";
import projs from './Projs'

function Projects() {
  return (
    <section className='projectSection'>
       <h1 className='projectMain'>Check Out My Projects</h1>
       <h4 className='contactSubTitle'>You can visit the source code, or view hosted projects in action</h4>
       <div className='projectlist'>
      {projs.map((proj) => {
        return <Project proj={proj}></Project>;
      })}
      </div>
    </section>
  );
}
const Project = (props) => { 
  const { img, btn1, btn2, title, script, tags, isHosted } = props.proj;
  
function MouseOn(event){
  event.target.style.opacity= '1';
}
function MouseOut(event){
  event.target.style.opacity= '0';
}
if (isHosted === 'true') {
  return (
  <article className='project'>
      <div className='project-inner'>
             <div className='prjBody'>
                <div className='imgFlip'>
                  <img className='prjImg2' src={tags} alt='' onMouseOver={MouseOn} onMouseOut={MouseOut}/>
                  <img className='prjImg' src={img} alt='' onMouseOver={MouseOut} onMouseOut={MouseOn}/>
                </div>
                <h2 className='prjTitle '>{title}</h2>
                <p className='prjScript'>{script}</p>
                <footer>
                <button className='prjCode'><a href={btn1}>Source Code</a></button>
                <button className="prjLink"><a href={btn2}>View Project</a></button>
                </footer>
             </div>
      </div>
   </article>
);
}
return (
  <article className='project'>
      <div className='project-inner'>
             <div className='prjBody'>
                <div className='imgFlip'>
                  <img className='prjImg2' src={tags} alt='' onMouseOver={MouseOn} onMouseOut={MouseOut}/>
                  <img className='prjImg' src={img} alt='' onMouseOver={MouseOut} onMouseOut={MouseOn}/>
                </div>
                <h2 className='prjTitle '>{title}</h2>
                <p className='prjScript'>{script}</p>
                <footer>
                <button className='prjCode'><a href={btn1}>Source Code</a></button>
                </footer>
             </div>
      </div>
   </article>
);
}

export default Projects;