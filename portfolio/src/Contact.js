import React, { useState } from 'react';
import {SocialIcon} from 'react-social-icons';

function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
return (
    <div>
        <h1 className='contactTitle'>Visit one of my socials</h1>
        <h4 className='contactSubTitle'>or send me a message</h4>
        <div className='contact'>
            <div className='leftSide'>
                <ul><a href="https://www.linkedin.com/in/tyler-hamvas-2739bb231/">
                    <div className='social' ><li>
                        <SocialIcon url="https://www.linkedin.com/in/tyler-hamvas-2739bb231/" /></li>
                    </div>
                    </a>
                    <a href="mailto:tyler.hamvas@gmail.com">
                    <div className='social' ><li>
                        <SocialIcon className='subTitle' url="mailto:tyler.hamvas@gmail.com" /> <span className='socialText' ></span></li>
                    </div>
                    </a>
                    <a href="https://github.com/TylerHamvas">
                    <div className='social' ><li>
                        <SocialIcon className='subTitle' url="https://github.com/tahamvas/Portfolio" /></li>
                    </div>
                    </a>
                </ul>
            </div>
        <div className='line'></div>
        <div className='rightSide'>
            <form>
                <div className='form-group'>
                <label htmlFor="name">Your Name
                    <input type="text" placeholder="First and Last Name" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label htmlFor="email">Your E-mail
                    <input type="text" placeholder="E-mail Address" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label htmlFor="message">Your Message
                    <textarea type="text" placeholder="What would you like to say?" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                </label>
                </div>
                <button className="submitButton" type="submit">Send Message</button> 
            </form>
        </div>
        </div>
    </div>
);
}

export default Contact;