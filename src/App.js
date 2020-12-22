
import React, { useState } from 'react';
import "./assets/style.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
 const [navItems] = useState([
     {name: "About Me"},
     {name: "My Work"},
     {name: "Resume"},
     {name: "Contact Me"},
 ]);
 const [currentNavItem, setCurrentNavItem] = useState(navItems[0]);

 const loadSection = () => {
     switch(currentNavItem) {
        case "My Work":
            return <Projects />
        case "Resume":
            return <Resume />
        case "Contact Me":
            return <Contact />
        default: 
            return <About />
                     
     }
 };



 return(
     <>
    <div>
        <Header 
        navItems={navItems}
        setCurrentNavItem={setCurrentNavItem}
        currentNavItem={currentNavItem}
        />
        {loadSection(currentNavItem)}
        <Footer />
    </div>
    </>
 )
}

export default App;
