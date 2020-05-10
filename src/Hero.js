import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Container, Typography, Grid, useMediaQuery, Button} from '@material-ui/core'

const useStyles = makeStyles((theme) =>({
    heroImage: {
        backgroundImage: `url(/headerImg.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        minHeight: '100px',
        position: 'relative',
        border: '3px solid #0a2a66',
        '&:before':{
            content: '""',
            position: 'absolute',
            height: '100%',
            width: '100%',
            border: '4px solid #fff',
            top: '10px',
            left: '10px',
            zIndex: -1,
            
        },
        [theme.breakpoints.up('sm')]: {
            minHeight: 'none',
            '&:before': {
                top: '14px',
                left: '14px',  
            },
        },
    },
    title: {
        fontWeight: '900',
        },

    titleContainer: {
        padding: theme.spacing(3),
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(6),
            textAlign: 'right',
        },
    },
    superScript: {
        fontSize: '18px',
        verticalAlign: 'super',

        [theme.breakpoints.up('sm')]: {
            fontSize: '32px',
        },
    },
    divider: {
        fontSize: '40px',
        marginBottom: theme.spacing(3),
        

    },
    cta: {
        marginTop: theme.spacing(3),
    }
  }));

export default () => {
    const classes = useStyles();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <div className={classes.titleContainer}> 
                        <Typography className={[classes.text, classes.title]} variant={isDesktop ? 'h2' : 'h4'} component={"h1"} gutterBottom>
                            ENERGIZING 39<span className={classes.superScript}>TH</span>
                        </Typography>
                        <Typography className={classes.divider}>
                            +
                        </Typography>
                        <Typography className={classes.text} variant={isDesktop ? 'h4' : 'h6'} component={'h2'}>
                            Get ready to be energized.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.heroImage}/>  
            </Grid>
        </Container>
      );
}