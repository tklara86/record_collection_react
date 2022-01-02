import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route, useParams, useLocation, Link} from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./components/Home";
import Records from "./components/Records";
import Admin from "./components/Admin";
import Record from "./components/Record";
import CategoryPage from "./components/CategoryPage";
import Category from "./components/Category";

export default function App()  {

    const categories = [
        {id:1, name: "drama"},
        {id:2, name: "comedy"}
    ]
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="records" element={<Records />} />
                    <Route path="records/:id" element={<Record />} />
                    <Route path="admin" element={<Admin />} />
                    <Route  path="categories" element={<CategoryPage categories={categories} />} />
                    <Route path="categories/:name" element={<Category />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


ReactDOM.render(<App />, document.querySelector("#root"))