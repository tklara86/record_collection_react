import {Link, Outlet} from "react-router-dom";
import React from "react";

function CategoryPage({categories}) {
    return (
        <div>
            <h1>Categories:</h1>
            <ul>
                {categories.map((cat) => (
                  <li key={cat.id}>
                      <Link to={cat.name}>{cat.name}</Link>
                  </li>
                ))}
            </ul>
            <Outlet/>
        </div>
    )

}


export default CategoryPage