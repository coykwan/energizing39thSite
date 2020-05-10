import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Hero from '../src/Hero';
import Nav from '../src/Nav';
import Location from '../src/Location';
import Socials from '../src/Socials';
import About from '../src/About';
import Footer from '../src/Footer';

const useStyles = makeStyles((theme) =>({
    heroBackground: {
        background: `url(/splash1.jpg)`,
        backgroundSize: 'cover',
        position: 'relative',
        zIndex: -2,
        padding: theme.spacing(4,0,6)
        }
  }));


  export default () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.heroBackground}> 
                <Nav />
                <Hero />
            </div>
            <Location/>
            <Socials/>
            <About/>
            <Footer/>
        </div>
    )
}