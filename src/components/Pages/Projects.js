import React, {useContext} from "react"
import Context from "../Context";
import { Link } from "react-router-dom";
// https://project-tracker-8zss.onrender.com/
// https://project-book-notes.onrender.com
// https://public-api-project.onrender.com


function Projects(){
    const myContext = useContext(Context);

    return(
        <div className="container-outer">
            <div className="container-inner-projects">
            <button className="reddit-mono-h1 btn" onClick={()=>myContext.handleClick()}>Close</button>
                <div>
                    <label className="reddit-mono-h1" onClick={()=>window.open("https://project-tracker-8zss.onrender.com/")}>Tracker App</label>
                    <img src={process.env.PUBLIC_URL + "/assets/images/Tracker-App-Login.jpg"} alt="Login Page" onClick={()=>window.open("https://project-tracker-8zss.onrender.com/")}/>
                    <p className="reddit-mono-h1">
                        A Web Application developed using (HTML, CSS, React, Node.js and PostgreSQL). I 
                        created this app with the purpose of tracking credit card 
                        expenses. It has a user login to separate data from different 
                        users and an admin login, for the purpose of account management 
                        (password reset, account deletion etc.). 
                        Click the project Title/Image or this <Link target="_blank" to={"https://project-tracker-8zss.onrender.com/"}><span>link</span></Link> to redirect/check the 
                        actual project.
                    </p>
                    </div>
                <div>
                    <label className="reddit-mono-h1" onClick={()=>window.open("https://project-book-notes.onrender.com")}>Book Notes</label>
                    <img src={process.env.PUBLIC_URL + "/assets/images/Book-Review.jpg"} alt="Book Review page" onClick={()=>window.open("https://project-book-notes.onrender.com")}/>
                    <p className="reddit-mono-h1">
                        Designed to access a public API (https://openlibrary.org/search.json) in searching 
                        for a book titles. Then use the response to search for a book cover and use it in the 
                        book review. User can save edit and delete reviews of the selected book cover. 
                        Click the project Title/Image or this <Link target="_blank" to={"https://project-book-notes.onrender.com"}><span>link</span></Link> to redirect/check the 
                        actual project.
                    </p>
                    </div>
                <div>
                    <label className="reddit-mono-h1" onClick={()=>window.open("https://public-api-project.onrender.com")}>Public API</label>
                    <img src={process.env.PUBLIC_URL + "/assets/images/Public-API.jpg"} alt="Public API Page" onClick={()=>window.open("https://public-api-project.onrender.com")}/>
                    <p className="reddit-mono-h1">
                        A simple website for demonstration of request to a Public API (https://api.opendota.com/api) asking for a list of Dota 2 PRO 
                        players for the Home page and user can also search for a Dota 2 players,
                        base on their In-game Name(IGN). 
                        Click the project Title/Image or this <Link target="_blank" to={"https://public-api-project.onrender.com"}><span>link</span></Link> to redirect/check the 
                        actual project.
                    </p>
                    </div>
            {/* <div class="container-sample">
                <div class="inner-sample">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum quos molestiae ab a mollitia hic ea, provident odio beatae necessitatibus accusantium voluptate et aliquam exercitationem recusandae non deleniti officiis architecto eveniet, consectetur
                veniam dignissimos accusamus quaerat! Reiciendis tenetur similique necessitatibus odit eveniet, reprehenderit quibusdam eaque est, quidem facere nostrum autem totam porro deleniti? Porro laborum earum itaque, fuga rerum eum dolores facilis dolorum
                velit vero illum eveniet, perferendis excepturi officiis error officia modi libero voluptatum autem quod eos ipsum. Quod accusantium possimus nesciunt expedita, eos ducimus perferendis delectus dicta similique voluptas modi, ullam enim repellendus
                consequuntur incidunt atque natus reprehenderit odio, id quia vero. Obcaecati, nulla. Perferendis, dolores. Voluptatibus praesentium porro non blanditiis odit doloribus labore inventore voluptas facere!</p>
                </div>
            </div> */}

            </div>
        </div>
    );
}

export default Projects;