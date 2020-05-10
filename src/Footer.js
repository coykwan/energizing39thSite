import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Container, Typography, Grid, useMediaQuery, Button} from '@material-ui/core'

const useStyles = makeStyles((theme) =>({
    footerBackground: {
        backgroundColor: '#0a2a66',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center',
        padding: theme.spacing(6,0),
        },
    footerContent: {
        color: 'rgba(255,255,255,0.6)',
        textAlign: 'center',
        fontSize: '12px',
    }
  }));

export default () => {
    const classes = useStyles();   
    return (
        <div className={classes.footerBackground}>
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography className={classes.footerContent}>
                            Copyright© 2020 Energizing 39th All rights reserved
                        </Typography>
                    </Grid>
                    <Grid item xs={12}/>  
                </Grid>
            </Container>
        </div>
      );
}