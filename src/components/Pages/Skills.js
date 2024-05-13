import React, {useContext} from "react"
import Context from "../Context";

function Skills(){
    const myContext = useContext(Context)

    return(
        <div className="container-outer">
            <div className="container-inner-skills">
                <button className="reddit-mono-h1 btn" onClick={()=>myContext.handleClick()}>Close</button>
                
                <div className="reddit-mono-h1">
                    <label >Relevant Skills</label>
                    <li >HTML, CSS</li>
                    <li >Bootstrap</li>
                    <li >Javascript</li>
                    <li >jQuery</li>
                    <li >API</li>
                    <li >React</li>
                    <li >Node.js</li>
                    <li >EJS</li>
                    <li >Git</li>
                    <li >MySQL</li>
                    <li >PostgreSQL</li>
                    <li >Authentication and Security</li>
                    <li >Problem-solving</li>
                    <li >Creative thinking</li>
                    <li >Web App Development</li>   
                </div>
            </div>
        </div>
    );
}

export default Skills;