import './App.css';
//Importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
//Import React component
import React from 'react';
//Importing Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Importing font awesome icons 
import { FaHome,FaPlusCircle,FaUndo } from "react-icons/fa";
//Importing Components
import { AddMovie } from './components/addMovie';
import { ViewMovie } from './components/viewMovie';
import { UpdateMovie } from './components/updateMovie';
import { ReadMovie } from './components/readMovie';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/*Navbar from bootstrap*/}
          <Navbar bg="danger" variant="dark">
            <Container>
              <Navbar.Brand href="/">Movies++</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/viewMovie"> <FaHome/> Home</Nav.Link>
                <Nav.Link href="/addMovie"> <FaPlusCircle/> Add Movie</Nav.Link>
                <Nav.Link href="/updateMovie"> <FaUndo/> Update Movie</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          {/*Routes to component using path and href*/}
          <Routes>
            <Route path="/" element={<ReadMovie />} />
            <Route path="/viewMovie" element={<ReadMovie />} />
            <Route path="/addMovie" element={<AddMovie />} />
            <Route path="/updateMovie" element={<UpdateMovie />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
