//Rohan Sikder - G00389052
import React from "react";
//Importing Axios
import axios from "axios";
//Importing Card and Button bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//Importing font awesome icons 
import { FaTrash, FaUndo } from "react-icons/fa";
import { Link } from "react-router-dom";


export class ViewMovie extends React.Component {

    constructor() {
        super();
        //Binds for the deleteMovie method
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //Calls the delete with the movies id
    DeleteMovie(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/movies/' + this.props.movies._id)
            .then((res) => { this.props.Reload(); })
            .catch();
    }

    //Displays the movies in a card format
    render() {
        return (
            <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
                {/*Displays Info in a card Format */}
                <Card style={{ width: '80%', backgroundColor: '#6F7378' }} >
                    {/* <Card.Img variant="top" src={this.props.movies.cover} /> */}
                    <Card.Body>
                        <div style={{ display: "flex" }} >
                            {/* Buttons to delete and Update movies /> */}
                            <Link to={'/updateMovie/' + this.props.movies._id} style={{ marginRight: "auto" }} className="btn btn-danger"><FaUndo /></Link>
                            <Button variant="danger" style={{ marginLeft: "auto" }} onClick={this.DeleteMovie}>
                                <FaTrash />
                            </Button>
                        </div>
                        <Card.Title>{this.props.movies.title}</Card.Title>
                        <Card.Text>{this.props.movies.cover}</Card.Text>
                        <Card.Text>{this.props.movies.description}</Card.Text>
                        <Card.Text>Movie Cast: {this.props.movies.cast}</Card.Text>
                        <Card.Text>Runtime: {this.props.movies.runtime}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}