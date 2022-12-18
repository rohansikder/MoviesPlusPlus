import React from "react";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class AddMovie extends React.Component {

    //Constructor
    constructor() {
        super();
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeRuntime = this.onChangeRuntime.bind(this);
        this.onChangeCast = this.onChangeCast.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            title: '',
            cover:'',
            description: '',
            runtime: '',
            cast: ''
        }
    }

    //When submit button is pressed
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.title}, ${this.state.cover} , ${this.state.description}, ${this.state.runtime}, ${this.state.cast}`);

        //Takes title,cover,description, runtime, cast from json and puts into state
        const movies = {
            title: this.state.title,
            cover: this.state.cover,
            description: this.state.description,
            runtime: this.state.runtime,
            cast: this.state.cast
        }

        // Takes response and puts it into movies.
        axios.post('http://localhost:4000/api/movies', movies)
            .then(
                console.log('SENT')
            )
            .catch(console.log('ERROR')
            );

        this.setState({
            title: '',
            cover:'',
            description: '',
            runtime: '',
            cast: ''
        })

    }

    //Setting values 
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeCover(e) {
        this.setState({
            cover: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeRuntime(e) {
        this.setState({
            runtime: e.target.value
        })
    }

    onChangeCast(e) {
        this.setState({
            cast: e.target.value
        })
    }

    render() {
        return (
            <div className="App" style={{display: 'flex',  justifyContent:'center', alignItems:'center', margin:'20px'}}>
                {/*React Card*/}
                <Card style={{ width: '99%',  backgroundColor:'#6F7378' }} >
                    <Card.Body>
                        <Card.Title>Add your movie here</Card.Title>
                        <Card.Text>
                            Please enter title, Cover Image, description and runtime below:
                        </Card.Text>
                        {/*React Forms*/}
                        <form onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <label>Add Movie Title: </label>
                                <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle} />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label>Add Movie Cover: </label>
                                <input type="text" className="form-control" value={this.state.cover} onChange={this.onChangeCover} />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label>Add Description: </label>
                                <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label>Add Movie Runtime: </label>
                                <input type="text" className="form-control" value={this.state.runtime} onChange={this.onChangeRuntime} />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label>Add Movie Cast: </label>
                                <input type="text" className="form-control" value={this.state.cast} onChange={this.onChangeCast} />
                            </div>
                            <br></br>
                            <Button variant="danger" type="submit" value="Submit">Add Movie</Button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}