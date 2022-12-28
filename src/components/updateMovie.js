import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
//useNavigate return a function that we can use to navigate
import { useNavigate } from "react-router-dom";
//Importing Button and Card bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function UpdateMovie(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array object's push() method
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const [description, setDescription] = useState("");
    const [cast, setCast] = useState("");
    const [runtime, setRuntime] = useState("");
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/movies/' + id).then((response) => {
            // Assign Response data to the arrays using useState.
            setTitle(response.data.title);
            setCover(response.data.cover);
            setDescription(response.data.description);
            setCast(response.data.cast);
            setRuntime(response.data.runtime);
        })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    //handleSubmit method to update the movie
    const handleSubmit = (event) => {
        event.preventDefault();
        const newMovie = {
            id: id,
            title: title,
            cover: cover,
            description: description,
            cast: cast,
            runtime: runtime
        };
        //axios is a promised based web client
        axios.put('http://localhost:4000/api/movies/' + id, newMovie)
            .then((res) => {
                console.log(res.data);
                navigate('/viewMovie');
            });
    }
    return (
        <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
            {/*React Card*/}
            <Card style={{ width: '99%', backgroundColor: '#6F7378' }} >
                <Card.Body>
                    <Card.Title>Update movie details here</Card.Title>
                    <Card.Text>
                        Please enter new title, Cover Image, description and runtime below:
                    </Card.Text>
                    {/*React Forms*/}
                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label>Add Movie Title: </label>
                            <input type="text" className="form-control" value={title}
                                onChange={(e) => setTitle(e.target.value)} required />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Add Description: </label>
                            <input type="text" className="form-control" value={description}
                                onChange={(e) => setDescription(e.target.value)} required />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Add Movie Runtime: </label>
                            <input type="text" className="form-control" value={runtime}
                                onChange={(e) => setRuntime(e.target.value)} required />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Add Movie Cast: </label>
                            <input type="text" className="form-control" value={cast}
                                onChange={(e) => setCast(e.target.value)} required />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Add Movie Cover: </label>
                            <input type="text" className="form-control" value={cover}
                                onChange={(e) => setCover(e.target.value)} required />
                            {/*accept="image/png, image/jpeg" */}
                        </div>
                        <br></br>
                        <Button variant="danger" type="submit" value="Submit">Update Movie</Button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
}