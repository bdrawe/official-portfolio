import React from 'react'
import ProfilePic from '../../assets/img/portrait.JPG'

function About() {
    return(
        <>
        <h2>Just a little About myself</h2>
        <img src={ProfilePic} alt="Bryce Drawe" className="profilePic"/>
        <p className="container">
        I am a guy based out of Southern Utah who loves development 🧑🏽‍💻, hiking 🥾 and Diet Coke 🥤. I enjoy finding solutions to real-world problems with development and design. Currently, I work for State Bank of Southern Utah as their Digital Marketer/Web Designer. I like hiking around So. Utah and exploring all of the National Parks. 
        </p>
        </>
    )

}
export default About;