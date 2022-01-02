import React, {Component, Fragment} from 'react';
import {useParams} from "react-router-dom";



function Record() {

    let { id } = useParams();
    return (
        <Fragment>
            <h1>Record id of {id}</h1>

        </Fragment>
    )
}

export default Record;

