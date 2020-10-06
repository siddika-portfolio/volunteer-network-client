import React from 'react';

const ActivityDetails = (props) => {
    const { name, photoUrl, date } = props.activity;
    return (
        <div className="col-md-4 alignment-center m-5">
            <div>
                <h4>{name}</h4>
                <img style={{ width: "300px" }} src={photoUrl} alt="" />
                <h3>{date}</h3>
                <button>Delete</button>
            </div>

        </div>
    );
};

export default ActivityDetails;