import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'

const NavigationBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img style={{height:"60px",marginLeft:"50px"}} src={logo} alt=""/>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Link className="px-5" to="/home">Home</Link>
                    <Link className="px-5" to="/donation">Donation</Link>
                    <Link className="px-5" to="/event">Event</Link>
                    <Link className="px-5" to="/blog">Blog</Link>
                </Nav>
                {
                    loggedInUser.name? <h4 style={{color:"#3F90FC"}}> {loggedInUser.name} </h4>
                    :<button > <Link to="/login" className="linkButton" > Login </Link>  </button>
                }
                <Button className="mx-5" variant="primary">Admin</Button>
            </Navbar>
        </div>
    );
};

export default NavigationBar;