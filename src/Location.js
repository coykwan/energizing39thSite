import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Container, Typography, useMediaQuery, Link} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    map: {
        border: '10px solid #fff',
        height: '280px',
        width: '100%',

        [theme.breakpoints.up('sm')]: {
            height: '380px',
        },
    },
    mapContainer: {
        position: 'relative',
        margin: theme.spacing(0,2),
        '&:before':{
            content: '""',
            position: 'absolute',
            height: '100%',
            width: '100%',
            border: '4px solid #0a2a66',
            top: '6px',
            left: '10px',
            zIndex: -1,
            
        },
        [theme.breakpoints.up('sm')]: {
            minHeight: 'none',
            '&:before': {
                top: '10px',
                left: '14px',  
            },
        },
    },
    container: {
        padding: theme.spacing(4,0,6)
    },
    title: {
        fontWeight: '900',
        paddingTop: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            paddingTop: '0'
        },
    },
    divider: {
        fontSize: '40px',
        padding: theme.spacing(0,0,2),
        display: 'block',
    },
    infoContainer: {
        padding: theme.spacing(3),
        textAlign: 'center',

        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(6),
            textAlign: 'left',
        },
    },
    text: {
        padding: theme.spacing(0,0,2),
        display: 'block',
    }
}));


export default () => {
    const classes = useStyles();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Container className={classes.container} maxWidth="lg">
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <div className={classes.mapContainer}>
                        <iframe
                            frameborder="0" 
                            className={classes.map}
                            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJD_y6iorvwIcRQ57LoP7VzRg&key=AIzaSyCYPLcewpI1hVgurONZxSfnXI6r9UAIUQo">
                        </iframe>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.infoContainer}>
                        <Typography className={classes.title} variant={isDesktop ? 'h4' : 'h5'} component={"h1"} gutterBottom>
                            LOCATION / HOURS
                        </Typography>
                        <Typography className={classes.divider}>
                            +
                        </Typography>
                        <Grid container>
                            <Grid item xs={12} sm={6}> 
                                <Typography className={classes.text} variant="body1">
                                    Energizing 39th <br/>
                                    910 W 39th Street <br/>
                                    Kansas City, Missouri 64111
                                </Typography>
                                <Typography className={classes.text} variant="body1">
                                    <Link href="tel:816-569-5526">
                                        816-569-5526
                                    </Link>
                                </Typography>  
                                <Typography className={classes.text} variant="body1">
                                    <Link href="mailto:energizing39th@gmail.com">
                                        energizing39th@gmail.com
                                    </Link>
                                </Typography>  
                            </Grid>
                            <Grid item xs={12} sm={6}> 
                                <Typography variant="body1">
                                    Weekdays 9-6 <br/>
                                    Saturday 9-3 <br/>
                                    Sunday 11-3
                                </Typography>
  
                            </Grid>
                        </Grid>
                        
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}