import React, { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Info from "../pages/Info";
import NotFound from "../pages/NotFound";

export default function RouteList(): ReactElement {

    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/info" element={<Info />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>

    );
}