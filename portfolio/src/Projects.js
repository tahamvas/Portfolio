import React from 'react';
import "./App.css";

const projs = [
  {
    img: 'https://i.imgur.com/CzTSTl3.png',
    btn1: 'https://github.com/TylerHamvas/Portfolio',
    btn2: 'https://thamvas.netlify.app',
    title: 'Portfolio Website',
    script: 'Personal website created to showcase my skills, experience and any projects I have completed. This project was completed using ReactJS and CSS.',
    tags: 'https://i.imgur.com/VdwZ8bJ.png',
  }
  ,
  {
    img: 'https://i.imgur.com/XDHpyMH.jpg',
    btn1: 'https://github.com/TylerHamvas/Portfolio',
    btn2: 'https://thamvas.netlify.app',
    title: 'Database Program',
    script: 'A program written in C++ which connects the user to an Oracle database using SQL. Functionality to add, remove, modify or view employees was implemented.',
    tags: 'https://i.imgur.com/t36jYST.png',
  }
  ,
  {
    img: 'https://www.coolmathgames.com/sites/default/files/snake.png',
    btn1: 'https://github.com/TylerHamvas/Portfolio',
    btn2: 'https://thamvas.netlify.app',
    title: 'Snake Game',
    script: 'A simple game created using Python. It includes user input to direct the snake, as well as interactable objects which the snake can eat. Eating an object maniupulates the size of the snake',
    tags: 'https://i.imgur.com/n8QFdmu.png',
  }
  ,
  {
    img: 'https://unity.com/sites/default/files/styles/810_scale_width/public/2020-01/unity-asset-store-sunny-land-by-ansimuz-810x456.jpg?itok=Qw-2YSaT',
    btn1: 'https://github.com/TylerHamvas/Portfolio',
    btn2: 'https://thamvas.netlify.app',
    title: '2D Video Game',
    script: 'A 2D side scroller game created using Unity and C#. The character can input commands to move the character left or right as well as jumping. The character can also interact with enemies, items and differnet levels of terrain.',
    tags: 'https://i.imgur.com/y1IY1IF.png',
  }
  ,
  {
    img: 'https://i.stack.imgur.com/EPgUV.png',
    btn1: 'https://github.com/TylerHamvas/Portfolio',
    btn2: 'https://thamvas.netlify.app',
    title: 'C# HCM Tool',
    script: 'This project was created using C# and .Net and allows users to manage employee databases. Utilizing MongoDB the user can create, modify or remove employees at will. ',
    tags: 'https://i.imgur.com/g8Fokza.png',
  }
  ,
  {
    img: 'https://i.imgur.com/ffUYuyd.png',
    btn1: 'https://github.com/TylerHamvas/Portfolio',
    btn2: 'https://thamvas.netlify.app',
    title: 'Calculator',
    script: 'A calculator created using C#. Functionality is implemented beyond simple addition and subtraction and all calculations have been tested and were found to be working properly.',
    tags: 'https://i.imgur.com/lKjPq7n.png',
  }
]

function Projects() {
  return (
    <section>
       <h1 className='projectMain'>Check Out My Projects</h1>
       <h4 className='contactSubTitle'>You can visit the source code to learn more, or view the project in action</h4>
       <div className='projectlist'>
      {projs.map((proj) => {
        const { img, btn1, btn2, script, tags } = proj;
        return <Project proj={proj}></Project>;
      })}
      </div>
    </section>
  );
}
const Project = (props) => { 
  const { img, btn1, btn2, title, script, tags } = props.proj;
  
function MouseOn(event){
  event.target.style.opacity= '1';
}
function MouseOut(event){
  event.target.style.opacity= '0';
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
                <button className="prjLink"><a href={btn2}>View Project</a></button>
                </footer>
             </div>
      </div>
   </article>
);
}

export default Projects;