import React, {useState} from "react";
// import { useNavigate, Link } from "react-router-dom";
import About from "./About";
import Context from "../Context";
import Skills from "./Skills";
import Projects from "./Projects";
import Sidebar from "./Sidebar";
import Certificate from "./Certificate";

function Home(){
    // const navigate = useNavigate();
    const date = new Date();
    const [about, setAbout] = useState(false);
    const [skills, setSkills] = useState(false);
    const [projects, setProjects] = useState(false);
    const [close, setClose] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    
    function handleClick(){
        setAbout(false)
        setSkills(false)
        setProjects(false)
    }
    function sidebarClose(){
        setSidebar(false)
    }

    return(
        <div className="container">
            <div className="sideBar" onClick={()=>setSidebar(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            </div>
            {
                <Context.Provider value={{handleClick:handleClick, setAbout:setAbout, setSkills:setSkills, setProjects:setProjects, sidebar:sidebar, sidebarClose:sidebarClose, close:close, setClose:setClose}}>
                    {about && <About />}
                    {skills && <Skills />}
                    {projects && <Projects />}
                    {close && <Certificate />}
                    {/* {sidebar && <Sidebar />} */}
                    <Sidebar />
                </Context.Provider>
            }
            <h1 className="reddit-mono-h1">Kier Anthony Dalit</h1>
            <h3 className="reddit-mono-h1 typewriter">Full Stack Web Developer</h3>
            <p className="reddit-mono-h1">In order to pursue my 
            passion and strengthen my skills, knowledge, and experience in the web 
            development field. I decided to conduct some self study and attended 
            online courses to acquire the knowledge and skills needed to start my 
            career as a Full Stack Web Developer. </p>
            <div className="container-btn">
                <button onClick={()=>setAbout(true)}><h5 className="reddit-mono-h1 col-4">About</h5></button>
                <button onClick={()=>setSkills(true)}><h5 type="button" className="reddit-mono-h1 col-4">Relevant Skills</h5></button>
                <button onClick={()=>setProjects(true)}><h5 type="button" className="reddit-mono-h1 col-4">Projects</h5></button>
            </div>
            <footer className="prevent-select reddit-mono-h1">{`©${date.getFullYear()} Kier Dalit. All rights reserved.`}</footer>
        </div>
    );
}

export default Home;