import React, { useEffect, useState } from 'react';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import NavigationBar from '../NavigationBar/NavigationBar';

const Activity = () => {
    const [activity, setActivity] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/sector')
            .then(res => res.json())
            .then(data => setActivity(data))
    }, [])
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="row">

                {
                    activity.map(pd => <ActivityDetails activity={pd}></ActivityDetails>)
                }
            </div>
        </div>
    );
};

export default Activity;