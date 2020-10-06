import React from 'react';
import volunteerWork from '../../fakeData/fakeData';
import volunteerActivities from '../../fakeData/fakeDataB';

const PeopleEvent = () => {


   const handleAddWorks = () => {
       fetch('http://localhost:5000/worksBykeys', {
           method: 'POST',
           headers: { 
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(volunteerWork)
       })
   }

    const handleAddSector = () => {
        fetch('http://localhost:5000/addSector', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerActivities)
        })
    }

    return (
        <div>
            <button onClick={handleAddWorks}>Add works</button>
            <button onClick={handleAddSector}>Add Sector</button>
        </div>
    );
};

export default PeopleEvent;