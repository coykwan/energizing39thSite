import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    body: {
        fontSize: '15px',
        padding: theme.spacing(0),
        textAlign: 'center',
    },
    title: {
        padding: theme.spacing(1),
        textAlign: 'center',
        fontWeight: '900'
    },
    infoContainer: {
        padding: theme.spacing(8,0),
        textAlign: 'center',
    },
}));

export default () => {
    const classes = useStyles();
    return ( 
        <Container maxWidth="md">
            <Grid container>
                <Grid item xs={0} sm={2} md={3}/>
                <Grid item xs={12} sm={8} md={6}>
                    <div className={classes.infoContainer}>
                        <Typography className={classes.title} variant="h4" gutterBottom>
                            ABOUT US
                        </Typography>
                        <Typography className={classes.body} variant="h6">
                            We are a local nutrition club that serves healthy shakes, energizing teas, and aloe vera. We have fun, friendly, and passionate coaches who want to get to know you and help you become healthier and happier.
                            We offer free wellness profiles, information on how to make our healthy shakes at home, and education on living a healthy, active lifestyle.
                            We have options for breakfast, lunch, and dinner to fuel your day! Energizing39th is committed to providing the best nutrition and weight management products in the KC metro area!
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}