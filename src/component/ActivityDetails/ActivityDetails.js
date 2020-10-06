import { Card } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const ActivityDetails = (props) => {
    const { name, photoUrl, date, key } = props.activity;
    const history = useHistory();

    const handleDelete = (key) => {
        fetch('https://warm-eyrie-46552.herokuapp.com/delete/' + key, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                history.push('/event')
            })
    }

    return (
        <Card className="col-md-4 alignment-center m-5 p-2">
            <div >
                <div>
                    <h4>{name}</h4>
                    <img style={{ width: "250px" }} src={photoUrl} alt="" />
                    <h3>{date}</h3>
                    <button onClick={() => handleDelete(key)}>Delete</button>
                </div>

            </div>
        </Card>
    );
};

export default ActivityDetails;