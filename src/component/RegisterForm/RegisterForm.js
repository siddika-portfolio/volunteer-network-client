import React, { useContext, useState } from 'react';
import logo from '../../images/logo.png'
import Alert from '@material-ui/lab/Alert';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './RegisterForm.css';

const RegisterForm = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const {name} = useParams();
    const history = useHistory();

    const [user, setUser] = useState({
        name: '',
        email: '',
        date: '',
        description: '',
        organization: '',
        success: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRegistration = { ...loggedInUser }
        fetch('https://warm-eyrie-46552.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(data => {
            user.success = "Registration Successful"
            history.push('/donation')
            console.log(loggedInUser)
        })

    }

    const handleChange = (e) => {

        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (isFieldValid) {
            const newUserInfo = { ...loggedInUser };
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
    }

    return (
        <div className="RegisterVolunteer">
            <div className="success__alert">
            {
                user.success ? <Alert severity="success"> Registration Successful — check it out!</Alert> : user.success = ""
            }
            </div>

            <Link to="/"> <img className="logo" src={logo} alt="" /> </Link>
            

            
                <form onSubmit={handleSubmit} action="">
                    <h2> Register as a Volunteer </h2>
                    <input type="text" name="name" onChange={handleChange} placeholder="Full Name" id="" value={loggedInUser.name} required/>

                    <input type="text" name="email" onChange={handleChange} placeholder="Username or Email" id="" value={loggedInUser.email} required/>

                    <input type="date" name="date" onChange={handleChange} id="" required/>

                    <input type="text" name="description" onChange={handleChange} placeholder="Description" id=""  required/>

                    <input type="text" name="organization" placeholder="Organize books at the library." id="" value={name} required/>

                    <input 
                        style={{ 
                            background: "#3F90FC", 
                            height: "35px", color: "white", 
                            marginTop: "60px",paddingBottom:'35px', 
                            fontSize: "1.2rem" ,
                            borderRadius: "5px"
                        }}
                        type="submit"
                        value="Registration"
                        
                    />
                </form>
            
        </div>
    );
};

export default RegisterForm;