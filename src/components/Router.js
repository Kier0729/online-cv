import React from "react";
import {HashRouter, Routes, Route, Outlet, Navigate} from "react-router-dom";
import Home from "./Pages/Home"
// import About from "./Pages/About";
// import Skills from "./Pages/Skills";
// import Projects from "./Pages/Projects";

function Router(){

    function Layout(){
        return(
            <><Outlet /></>
        );
    }
    return(
        <HashRouter>
            <Routes>
                <Route path={`/`} element={<Layout />}>
                    <Route path={`/`} element={<Home />}/>
                    {/* <Route path={`/about`} element={<About />}/>
                    <Route path={`/skills`} element={<Skills />}/>
                    <Route path={`/projects`} element={<Projects />}/> */}
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default Router;