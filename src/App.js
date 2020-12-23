
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

 const [projects] = useState([
    {id: 1, title: 'Put a Ring on It', "emoji": "💍", url: "https://github.com/bdrawe/put-a-ring-on-it", deployed:"https://put-a-ring-on-it.herokuapp.com" },

    {id: 2, title: 'Recipe Finder', "emoji": "🍲", url: "https://github.com/bdrawe/recipe-finder", deployed:"https://bdrawe.github.io/recipe-finder/" },

    {id: 3, title: 'Note Taker', "emoji":"🗒️", url: "https://github.com/bdrawe/note-taker", deployed:"https://tranquil-sierra-97362.herokuapp.com" },

    {id: 4, title: 'Weather Dashboard', "emoji":"🌧️", url: "https://github.com/bdrawe/weather-dashboard", deployed:"https://bdrawe.github.io/weather-dashboard/" },
    {id: 5, title: 'PWA Budget Tracker', "emoji":"💸", url: "https://github.com/bdrawe/budget-tracker", deployed:"https://frozen-mesa-37887.herokuapp.com/" },

    {id: 6, title: 'Zoo Keeper', "emoji":"🦍", url: "https://github.com/bdrawe/zookeepr", deployed:"https://protected-forest-60443.herokuapp.com/" },

 ])

 const loadSection = () => {
     switch(currentNavItem) {
        case "My Work":
            return <Projects projects={projects} />
        case "Resume":
            return <Resume />
        case "Contact Me":
            return <Contact />
        default: 
            return <About / >
                     
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
