import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { NavLink } from "react-router-dom";

function Home(){
    return(
        
<div className='home'>
  <h1 className='title'>Hey, my name is Tyler and I'm a software developer from Toronto, Ontario.</h1>
  <h4 className="subTitle">Take a look at my <span className='prjRoute'><a href='https://github.com/tahamvas/PersonalPortfolio/blob/master/README.md'>
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
        <li>Access Control for more than 2000 employees</li>
        <li>Conducting interior patrols</li>
      </ul>
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="04/2009 – 10/2019"
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
    <h3>Toronto Pearson International Airport</h3>
    <h4>Screening Officer</h4>
    <p>
      Despite being over 100km away from where I lived, I took an opporunity to work as a Screening Officer at YYZ aiport.
    </p>
    <p>
      Some common duties included:
      <ul>
        <li>Utilizing X-Ray technology to search passenger baggage</li>
        <li>Access Control for thousands of passengers daily</li>
        <li>Assisting passengers in both English and French</li>
      </ul>
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="02/2003 – 04/2009"
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
    <h3>DTS</h3>
    <h4>Technician</h4>
    <p>
      Although this job was out of the ordinary for me at the time, I was recommended the position by a friend.
      I learned very valuable skills working with Rogers Communications.
    </p>
    <p>
      Some common duties included:
      <ul>
        <li>Completely reinstalling Rogers' backup power system</li>
        <li>Orginizing cable management throughout the building</li>
        <li>Assisting Rogers staff with various technical issues</li>
      </ul>
    </p>
  </TimelineItem>
</Timeline>
</div>
    )}
export default Home;