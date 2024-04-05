import React from "react";
import Router from "./Router"

function App(){
    const date = new Date();
    return(
    <div>
        <div className="container">
            <Router />
        </div>
     <footer className="prevent-select reddit-mono-h1">{`©${date.getFullYear()} Kier Dalit. All rights reserved.`}</footer>       
    </div>
    );
}

export default App;