import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { NavLink } from "react-router-dom";
import resume from './assets/resume.pdf'

function Home(){
    return(
        
<div className='home'>
  <h1 className='projectMain'>Hey, my name is Tyler and I'm a software developer from Toronto, Ontario.</h1>
  <h4 className="subTitle">Take a look at my <span className='prjRoute'><a href={resume} target="_blank ">
                          Resume</a></span> or the <span className='prjRoute'><NavLink to='/projects'>Projects</NavLink></span> page to learn more 
                          about me or scroll down to view my timeline</h4>
<Timeline lineColor={'#ddd'} className='timeline'>
  <TimelineItem
    key="000"
    dateText="Present - Future"
    dateInnerStyle={{color: '#305568', background: '#dbe9f9'}}
    style={{ color: '#5085a5' }}
    bodyContainerStyle={{
      color: '#305568',
      background: '#dbe9f9',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3>Your Company Here</h3>
    <h4>Software Developer</h4>
    <p>
      Hopefully the time you spend exploring my website will give you enough information to decide whether we'd be a good fit together.
      If not, please visit my <span className='contactRoute'><NavLink to='/contact'>Contact</NavLink></span> page so we can get in touch and I can answer any questions you might have for me.
      Thanks for visiting!
    </p>
  </TimelineItem>
  <TimelineItem
    key="001"
    dateText="10/2019 – Present"
    dateInnerStyle={{color: '#dbe9f9', background: '#254758'}}
    style={{ color: '#5085a5' }}
    bodyContainerStyle={{
      color: '#dbe9f9',
      background: '#254758',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3>Desjardins Insurance</h3>
    <h4>Security Guard</h4>
    <p>
      Close to home and within the field I had originally aimed at, working security seemed like a no brainer.
    </p>
    <p>
      Some common duties included:
      <ul>
        <li>Troubleshooting software errors related to access cards</li>
        <li>Efficiently managed access control for more than 2,000 employees</li>
        <li>Attentively monitored more than 1,000 cameras through CCTV system</li>
      </ul>
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="01/2019 – 03/2019"
    dateInnerStyle={{color: '#305568', background: '#dbe9f9'}}
    style={{ color: '#5085a5' }}
    bodyContainerStyle={{
      color: '#305568',
      background: '#dbe9f9',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3>ELC Dispatch Solutions</h3>
    <h4>Logistics Coordinator</h4>
    <p>
      Utilizing my bilingual certificate, I took a postion at ELC to assist with Quebec related incidents.
    </p>
    <p>
      Some common duties included:
      <ul>
        <li>Effectively multitask telecommunication and e-mail simultaneously</li>
        <li>Demonstrated extensive knowledge of road systems and by-laws in multiple provinces</li>
        <li>Utilized ReadyTow software to organize dispatch orders</li>
      </ul>
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="10/2017 – 02/2019"
    dateInnerStyle={{color: '#dbe9f9', background: '#254758'}}
    style={{ color: '#5085a5' }}
    bodyContainerStyle={{
      color: '#dbe9f9',
      background: '#254758',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3>Toronto Pearson International Airport</h3>
    <h4>Screening Officer</h4>
    <p>
      In 2017 I took on a position that I believe makes a real difference in regards to national safety.
    </p>
    <p>
      Some common duties included:
      <ul>
        <li>Demonstrated regard for safety of members of the public through seeking aviation
            threats and reporting and responding to threats in a timely manner</li>
        <li>Ability to initiate emergency response protocols through collaborating with Peel Regional
            Police and Public Safety Officers to respond to emergency incidents</li>
        <li>Ability to multi-task, prioritize and complete screening tasks in a fast-paced environment</li>
      </ul>
    </p>
  </TimelineItem>
</Timeline>
</div>
    )}
export default Home;