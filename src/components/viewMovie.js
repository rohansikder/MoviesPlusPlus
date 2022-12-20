import React from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//Importing font awesome icons 
import { FaTrash } from "react-icons/fa";


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

    render() {
        return (
            <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
                <Card style={{ width: '80%', backgroundColor: '#6F7378' }} >
                    {/* <Card.Img variant="top" src={this.props.movies.cover} /> */}
                    <Card.Body>
                        <div style={{ display: "flex" }} >
                            <Button variant="danger" style={{ marginLeft: "auto" }} onClick={this.DeleteMovie}>
                                <FaTrash/>
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