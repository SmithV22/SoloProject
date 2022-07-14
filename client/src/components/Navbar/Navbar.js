
import React from 'react' ;
import { Link } from 'react-router-dom' ;
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import useStyles from './navbar.styles' ;
import Neia from '../images/Neia.png' ;

const Navbar = () => {
    const classes = useStyles() ;
    return (
        <div>
            <AppBar position='static'>
                <Toolbar >
                    <IconButton size='medium' edge='start' color='inherit' aria-label='logo'>
                    <img className={ classes.imgage } component={ Link } to ='/' src={ Neia } alt='memories' height='60' />
                    </IconButton >
                    <Typography variant='h3'className={ classes.heading }> Quoting Your Thoughts </Typography>
                </Toolbar>
            </AppBar>
            <div className={ classes.links}>
                <Typography className={ classes.link} component={ Link } to ='/' variant='body2'>Home |</Typography>
                <Typography className={ classes.link} component={ Link } to ='/journal' variant='body2'>Journals |</Typography>
                <Typography className={ classes.link} component={ Link } to ='/quote/add' variant='body2'>Add Quote</Typography>
            </div>
        </div>
    )
}

export default Navbar ;