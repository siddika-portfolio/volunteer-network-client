import React, { useEffect, useState } from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import VolunteerWorks from '../VolunteerWorks/VolunteerWorks';
import './Home.css'

const Home = () => {
    const [works, setWorks] = useState([]);
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/works')
        .then(res => res.json())
        .then(data => setWorks(data))
    } ,[])

    const handleAddPost = (work) => {
        console.log('post added', work);
        const newPost = [...post, work];
        setPost(newPost);
    }

    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className="text-center">
                <h1 >I GROW BY HELPING PEOPLE NEED</h1>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <InputGroup.Append>
                        <Button variant="primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                <div className="row">
                    {
                        works.map(work => <VolunteerWorks 
                            handleAddPost = {handleAddPost}
                            key={work.key} work={work}></VolunteerWorks>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;