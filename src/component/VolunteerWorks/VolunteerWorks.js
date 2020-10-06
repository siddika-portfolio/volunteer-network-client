import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const useStyles = makeStyles({
    root: {
        maxWidth: 355,
        display: "flex",
        height: 310,
    },
    media: {
        height: 230,
    },
});
const VolunteerWorks = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
    const { photoUrl, key, name} = props.work;
    const history = useHistory();

    const handleRegister = (work) => {
        history.push('/registerForm')
        setLoggedInUser({...loggedInUser, work, pic: photoUrl})
    }

    const classes = useStyles();

    return (
        <div className="col-md-3 pb-3">
            <Card style={{cursor:"pointer"}} onClick={() =>handleRegister(name)} className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={photoUrl}
                        title="Contemplative Reptile"
                    />
                    <CardContent className="bg-primary">
                        <h5>{name}</h5>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default VolunteerWorks;