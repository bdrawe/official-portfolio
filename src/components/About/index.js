import React from 'react'
import ProfilePic from '../../assets/img/portrait.JPG'

function About() {
    return(
        <>
        <h2>Just a little About myself</h2>
        <img src={ProfilePic} alt="Bryce Drawe" className="profilePic"/>
        </>
    )

}
export default About;