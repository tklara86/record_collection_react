import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route, Link, Switch, Router} from "react-router-dom";
import Layout from "./Layout"
import Home from "./Home";
import Contact from "./Contact";

export default function App()  {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}



ReactDOM.render(<App />, document.querySelector("#root"))