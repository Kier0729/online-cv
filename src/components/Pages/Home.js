import React, {useState} from "react";
// import { useNavigate, Link } from "react-router-dom";
import About from "./About";
import Context from "../Context";
import Skills from "./Skills";
import Projects from "./Projects";

function Home(){
    // const navigate = useNavigate();
    const [about, setAbout] = useState(false);
    const [skills, setSkills] = useState(false);
    const [projects, setProjects] = useState(false);
    
    function handleClick(){
        setAbout(false)
        setSkills(false)
        setProjects(false)
    }

    return(
        <div className="container">
            {
                <Context.Provider value={{handleClick:handleClick}}>
                    {about && <About />}
                    {skills && <Skills />}
                    {projects && <Projects />}
                </Context.Provider>
            }
            <h1 className="reddit-mono-h1">Kier Anthony Dalit</h1>
            <h3 className="reddit-mono-h1">Full Stack Web Developer</h3>
            <p className="reddit-mono-h1">As a career shifter, In order to pursue my 
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