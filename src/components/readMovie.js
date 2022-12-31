//Rohan Sikder - G00389052
import React from "react";
import { Movies } from "./movies";
import axios from "axios";

export class ReadMovie extends React.Component {

    constructor() {
        super();
        //Binds reload method
        this.Reload = this.Reload.bind(this);
    }

    Reload() {
        //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
        this.componentDidMount();
    }

    //Lifecycle Method
    componentDidMount() {
        //Gets json
        axios.get("http://localhost:4000/api/movies")
            .then((response) => {
                //Sends data to Movies
                this.setState({ movies: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //State array which stores all movies
    state = {
        movies: []
    }


    render() {
        return (
            <div className="App">
                {/*Displays to page*/}
                <Movies movies={this.state.movies} Reload={this.Reload}></Movies>
            </div>
        );
    }
}