import React, {useContext} from "react"
import Context from "../Context";

function Projects(){
    const myContext = useContext(Context);

    return(
        <div className="container-outer">
            <div className="container-inner">
            <button className="reddit-mono-h1 btn" onClick={()=>myContext.handleClick()}>Close</button>
                Projects
            </div>
        </div>
    );
}

export default Projects;