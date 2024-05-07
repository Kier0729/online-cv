import React, {useState} from "react";
// import { useNavigate, Link } from "react-router-dom";
import About from "./About";
import Context from "../Context";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificate from "./Certificate";

function Home(){
    // const navigate = useNavigate();
    const [about, setAbout] = useState(false);
    const [skills, setSkills] = useState(false);
    const [projects, setProjects] = useState(false);
    const [close, setClose] = useState(false)
    
    function handleClick(){
        setAbout(false)
        setSkills(false)
        setProjects(false)
    }

    return(
        <div className="container">
            {/* <div className="sideBar">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            </div> */}
            {
                <Context.Provider value={{handleClick:handleClick, close:close, setClose:setClose}}>
                    {about && <About />}
                    {skills && <Skills />}
                    {projects && <Projects />}
                    {close && <Certificate />}
                </Context.Provider>
            }
            {console.log(close)}
            <h1 className="reddit-mono-h1">Kier Anthony Dalit</h1>
            <h3 className="reddit-mono-h1">Full Stack Web Developer</h3>
            <p className="reddit-mono-h1">In order to pursue my 
            passion and strengthen my skills, knowledge, and experience in the web 
            development field. I decided to conduct some self study and attended 
            online courses to acquire the knowledge and skills needed to start my 
            career as a Full Stack Web Developer. </p>
            <div className="container-btn">
                <button onClick={()=>setAbout(true)}><h4 className="reddit-mono-h1">About</h4></button>
                <button onClick={()=>setSkills(true)}><h4 type="button" className="reddit-mono-h1">Relevant Skills</h4></button>
                <button onClick={()=>setProjects(true)}><h4 type="button" className="reddit-mono-h1">Projects</h4></button>
            </div>
        </div>
    );
}

export default Home;