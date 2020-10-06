import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';

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
  
    const { photoUrl, key, name} = props.work;
    const history = useHistory();

    const handleWorkOrder = () => {
        history.push('/RegisterForm');
    }

    const classes = useStyles();

    return (
        <div className="col-md-3 pb-3">
            <Card onClick={handleWorkOrder} className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={photoUrl}
                        title="Contemplative Reptile"
                    />
                    <CardContent className="bg-primary">
                        <h5 onClick={() =>props.handleAddPost(props.work)}>
                            <Link className="text-light" to={"/works/"+key}>{name}</Link>
                        </h5>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default VolunteerWorks;