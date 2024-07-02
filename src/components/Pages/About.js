import React, {useContext} from "react"
import Context from "../Context";

function About(){
    const myContext = useContext(Context);
    return(
        <div className="container-outer">
            <div className="container-inner-about">
                <div className="contact-education">
                    <h3 className="reddit-mono-h1">Contact</h3>
                    <div>
                    <label className="reddit-mono-h1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>+639208273544</label>
                    <label className="reddit-mono-h1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>kier0729@gmail.com</label>
                    </div>
                    <h3 className="reddit-mono-h1">Education</h3>
                    <p className="reddit-mono-h1">AMA Computer College (2010)</p>
                    <p className="reddit-mono-h1">Bachelor of Science in <br></br>Information Technology <br></br>GWA(1.74/5.00)</p>
                    <h3 className="reddit-mono-h1">Training & Certification</h3>
                    <p className="reddit-mono-h1"><span className="title" onClick={()=> window.open("https://www.udemy.com/certificate/UC-c91e4579-403e-407d-8b02-5d027875b297/")}>The Complete 2024 <br></br>Web Development Bootcamp</span><br></br> Issued by Udemy<br></br>March 2024 <span className="link" onClick={()=>/*{myContext.setClose(true)}*/ window.open("https://www.udemy.com/certificate/UC-c91e4579-403e-407d-8b02-5d027875b297/")}>View</span></p>
                    <p className="reddit-mono-h1"><span className="title" onClick={() => window.open("https://www.credly.com/badges/f7688577-b2d5-431f-8a65-de7c6339a194/public_url")}>Web Development Fundamentals</span><br></br>Issued by IBM SkillsBuild<br></br>July 2024 <span className="link" onClick={() => window.open("https://www.credly.com/badges/f7688577-b2d5-431f-8a65-de7c6339a194/public_url")}>View</span></p>
                    <p className="reddit-mono-h1"><span className="title" onClick={() => window.open("https://www.credly.com/badges/b1630094-0679-4694-9eb5-b68b13dad6e5/public_url")}>Understanding of Cisco Network Devices</span><br></br>Issued by Cisco<br></br>Feb 2020 <span className="link" onClick={() => window.open("https://www.credly.com/badges/b1630094-0679-4694-9eb5-b68b13dad6e5/public_url")}>View</span></p>
                    <p className="reddit-mono-h1"><span className="title" onClick={() => window.open("https://www.credly.com/badges/bb671d82-30a4-4dc1-af66-264812d8a6d8/public_url")}>Cisco Certified Network Associate</span><br></br>Issued by Cisco<br></br>Aug 2017-Feb 2021 <span className="link" onClick={() => window.open("https://www.credly.com/badges/bb671d82-30a4-4dc1-af66-264812d8a6d8/public_url")}>View</span></p>
                </div>
                <div className="career-objective">
                    <h3 className="reddit-mono-h1">Career Objective</h3>
                    <p className="reddit-mono-h1">Looking forward to apply my programming and technical skills/knowledge in a 
                        challenging role as a Full Stack Developer. In addition to obtaining new 
                        skill and knowledge in the field of programming along with web and application development.</p>
                    <h3 className="reddit-mono-h1">Capstone Projects</h3>
                    <div>
                        <li className="reddit-mono-h1">Created a web app called <span className="web-name">Public API</span> using (HTML, CSS, Bootstrap, EJS and Node.js). 
                        It was made for submitting a straightforward API request to a public API and display the response data from the API.</li>
                        <li className="reddit-mono-h1">Using (HTML, CSS, EJS, Node.js and PostgreSQL). I developed a web app <span className="web-name">Book Notes</span>.  
                         For sending an API request to a public API and saving book cover reviews in a database.</li>
                        <li className="reddit-mono-h1">Developed <span className="web-name">Tracker App</span>. A web application designed for tracking credit card expenses.</li>
                    </div>
                </div>
                <button className="reddit-mono-h1 btn" onClick={()=>myContext.handleClick()}>Close</button>
            </div>
        </div>
    );
}

export default About;