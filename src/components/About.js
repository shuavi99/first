import React from 'react';
import profile from '../assets/images/profile.jpg';

const About = () => {
    return (
        <div className="about">
            <h1>About Me</h1>
            <img src={profile} alt="Profile" />
            <p>
                Hello! I'm a full-stack developer with a passion for creating interactive and user-friendly applications. 
                I have experience in React, Node.js, and other modern technologies. 
                I'm always eager to learn and improve my skills. 
                Let's connect!
            </p>
        </div>
    );
}

export default About;