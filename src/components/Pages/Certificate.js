import React, {useContext} from "react"
import Context from "../Context";

function Certificate(){
    const myContext = useContext(Context)
    return(
        <div className="container-outer">
            <div className="container-inner-certificate">
                <button className="reddit-mono-h1 btn" onClick={()=>myContext.setClose(false)}>Close</button>
                <img src={process.env.PUBLIC_URL + "/assets/images/Udemy Certifcate.jpg"} alt="Udemy Certifcate"/>
            </div>
        </div>
    );
}

export default Certificate;