import React from 'react';
import "./App.css";
import snakeimg from './assets/snake.png'

const projs = [
  {
    img: 'https://i.imgur.com/CzTSTl3.png',
    btn1: 'https://github.com/tahamvas/Portfolio/tree/master/portfolio',
    btn2: 'https://tylerhamvas.ca ',
    title: 'Portfolio Website',
    script: 'Personal website created to showcase my skills, experience and any projects I have completed. This project was completed using ReactJS and CSS.',
    tags: 'https://i.imgur.com/VdwZ8bJ.png',
    isHosted: 'true',
  }
  ,
  {
    img: 'https://i.imgur.com/XDHpyMH.jpg',
    btn1: 'https://github.com/tahamvas/Portfolio/tree/master/Projects/Employee%20Database',
    btn2: '',
    title: 'Employee Database',
    script: 'A program written in C++ which connects the user to an Oracle database using SQL. Functionality to add, remove, modify or view employees was implemented.',
    tags: 'https://i.imgur.com/t36jYST.png',
    isHosted: 'false',
  }
  ,
  {
    img: snakeimg, 
    btn1: 'https://github.com/tahamvas/Portfolio/tree/master/Projects/Snake',
    btn2: '',
    title: 'Snake Game',
    script: 'A simple game created using Python. It includes user input to direct the snake, as well as interactable objects which the snake can eat. Eating an object maniupulates the size of the snake',
    tags: 'https://i.imgur.com/n8QFdmu.png',
    isHosted: 'false',
  }
]

function Projects() {
  return (
    <section className='projectSection'>
       <h1 className='projectMain'>Check Out My Projects</h1>
       <h4 className='contactSubTitle'>You can visit the source code to learn more, or view the project in action</h4>
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