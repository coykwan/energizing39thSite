import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Link, Container} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    instagram: {
        backgroundImage: `url(/mardiGras.jpeg)`,
    },
    facebook: {
        backgroundImage: `url(/blue.jpeg)`,
    },
    image: {
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: '900',
        padding: theme.spacing(4),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        margin: theme.spacing(0,0,2),
        border: '10px solid #fff',
        '&:before':{
            content: '""',
            position: 'absolute',
            height: '100%',
            width: '100%',
            background: 'rgba(0,0,0,0.3)',
            zIndex: '1',
        },
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(0,1),
            transition: 'all 200ms ease',
        '&:hover':{
            transform: 'scale(1.05)',
        },
        '&:hover:before':{
            background: 'rgba(0,0,0,0.1)',
        },
        },
    },
    prefix: {
        fontSize: '31px',
        position: 'relative',
        zIndex: '2', 

    },
    title: {
        fontSize: '40px',
        position: 'relative',
        zIndex: '2',
    },
    link: {
        '&:hover':{
            textDecoration: 'none',
        },
    }
}));


export default () => {
    const classes = useStyles();
    return ( 
        <Container className={classes.container} maxWidth="md">
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Link className={classes.link} href="https://www.instagram.com/energizing39th/" target="_blank">
                        <Typography className={[classes.instagram, classes.image]} variant="h6">
                            <div className={classes.prefix}>
                                Follow us on
                            </div>
                            <div className={classes.title}>
                                Instagram
                            </div>
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Link className={classes.link} href="https://www.facebook.com/energizing39th/" target="_blank">
                        <Typography className={[classes.facebook, classes.image]} variant="h6">
                            <div className={classes.prefix}>
                                Like us on
                            </div>
                            <div className={classes.title}>Facebook</div>
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}