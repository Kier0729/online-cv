import React, {useContext} from "react"
import Context from "../Context";

function Skills(){
    const myContext = useContext(Context)

    return(
        <div className="container-outer">
            <div className="container-inner">
            <button className="reddit-mono-h1 btn" onClick={()=>myContext.handleClick()}>Close</button>
                Skills
            </div>
        </div>
    );
}

export default Skills;