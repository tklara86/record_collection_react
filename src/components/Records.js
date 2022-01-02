import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Records extends Component {

    state = {
        records: [],
        health: [],
    }



    getStatus = () => {
        fetch("http://localhost:9000/v1/healthcheck")
            .then((result) => result.json())
            .then((data) => {
                this.setState({
                    health: data
                })

            })
            .catch((err) => console.log(err))
    }

    componentDidMount() {
        this.setState({
            records: [
                {id: 1, title: "some title"},
                {id: 2, title: "ssss"}
            ],
        })
        this.getStatus()
    }

    render() {
        const {status, version} = this.state.health;


        return (
           <Fragment>
               <h1>Records</h1>
                <p>{status}</p>
               <p>{version}</p>

               <ul>
                   {this.state.records.map((r) => (
                       <li key={r.id}>
                           <Link to={`${r.id}`}>{r.title} </Link>
                       </li>
                   ))}
               </ul>
           </Fragment>
        );
    }
}

export default Records;