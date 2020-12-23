import React from 'react'
import File from '../../assets/files/resume.pdf'

function Resume() {
    return(
        <>
        <h2>Click <a className="download" href={File}>here</a> to download my resume!</h2>
        <h4>For those that want a quick glance...</h4>
        <h5>Proficiencies</h5>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>SQL</li>
            <li>Node.js</li>
            <li>React</li>
        </ul>
        </>
    )
}
export default Resume;