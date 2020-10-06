import { Card, Container } from '@material-ui/core';
import React from 'react';
import volunteerActivities from '../../fakeData/fakeDataB';
import NavigationBar from '../NavigationBar/NavigationBar';

const PeopleEvent = () => {


    const handleAddWorks = () => {
        const work = {}
        fetch('http://localhost:5000/addWorks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(work)
        })
    }

    const handleAddSector = () => {
        fetch('http://localhost:5000/addSector', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerActivities[0])
        })
    }

    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container>
                <div className="row m-5">
                    <div className="col-md-4">
                        <form action="">
                            <p><span>Name</span><input type="text" /></p>
                            <p><span>organization</span><input type="text" /></p>
                            <p><span>Product Image</span><input type="file" /></p>
                            <button className="m-4" onClick={handleAddWorks}>Add Event</button>
                        </form>
                    </div>
                    <div className="col-md-6 ml-auto mt-5">
                        <Card style={{ width: "18rem" }}>
                            <button className="m-4" onClick={handleAddSector}>Add Sector</button>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PeopleEvent;