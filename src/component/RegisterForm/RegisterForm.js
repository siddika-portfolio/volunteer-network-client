import { Card } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import volunteerWork from '../../fakeData/fakeData';
import './RegisterForm.css';

const RegisterForm = () => {
    const {worksKey } = useParams();
    console.log(worksKey);
    // const [work, setWork] = useState({});
    // console.log(work);

    // useEffect((e) => {
    //     fetch('http://localhost:5000/works/'+ worksKey, {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(work[0])
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [worksKey])

    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = (detail) => {
        
       const newOrder = {...loggedInUser, shipment: detail, orderTime: new Date()};
       fetch('http://localhost:5000/addOrder',{
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(newOrder)
       })
       .then(res => res.json())
       .then(data => {
           if(data){
               alert('your order placed successfully')
           }
       })
    }
  

    return (
        <Container>
            <Card style={{ width: '35rem', height: '32rem' }}>
                <h2 className="p-4">Register as a volunteer</h2>
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
                    {errors.name && <span className="error">Name is required</span>}

                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email" />
                    {errors.email && <span className="error">Email is required</span>}

                    <input name="date" ref={register({ required: true })} placeholder="Date" />
                    {errors.date && <span className="error">Date is required</span>}

                    <input name="description" ref={register({ required: true })} placeholder="Description" />
                    {errors.description && <span className="error">description is required</span>}

                    <input name="organize books" ref={register({ required: true })} placeholder="Organize" />
                    {errors.organize && <span className="error">{}</span>}

                    <input type="submit" />
                </form>
            </Card>
        </Container>
    );
};

export default RegisterForm;