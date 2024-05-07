import React, {useContext} from "react"
import Context from "../Context";

function Sidebar(){
    const myContext = useContext(Context);
    return(
        <div className="container-outer-sidebar" onClick={()=>myContext.sidebarClose()}>
            <div className="container-inner-sidebar">
            <div className="sidebar-btn">
                <button onClick={()=>{myContext.setAbout(true); myContext.sidebarClose()}}><h4 className="reddit-mono-h1">About</h4></button>
                <button onClick={()=>{myContext.setSkills(true); myContext.sidebarClose()}}><h4 type="button" className="reddit-mono-h1">Relevant Skills</h4></button>
                <button onClick={()=>{myContext.setProjects(true); myContext.sidebarClose()}}><h4 type="button" className="reddit-mono-h1">Projects</h4></button>
            </div>
            </div>
        </div>
    );
}

export default Sidebar;