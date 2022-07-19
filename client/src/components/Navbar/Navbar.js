
import React from 'react' ;
import { Link } from 'react-router-dom' ;
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import useStyles from './navbar.styles' ;
import Neia from '../images/Neia.png' ;
import SearchBar from '../Search/SearchBar' ;
import Quote from '../Quote/Quote';

const Navbar = () => {
    const classes = useStyles() ;
    return (
        <div>
            <AppBar position='static' maxwidth style={{ background: '#252C6F' }}>
                <Toolbar >
                    <IconButton size='medium' edge='start' color='inherit' aria-label='logo'>
                    <img className={ classes.imgage } component={ Link } to ='/' src={ Neia } alt='logo' height='60' />
                    </IconButton >
                    <Typography variant='h3'className={ classes.heading }> Quoting Your Thoughts </Typography>
                </Toolbar>
            </AppBar>
            <div className={ classes.links}>
                <Typography className={ classes.link} component={ Link } to ='/' variant='body2' color='primary'> Home </Typography>
                <Typography className={ classes.link} component={ Link } to ='/journal' variant='body2' color='primary'>Journals </Typography>
                <Typography className={ classes.link} component={ Link } to ='/quote/add' variant='body2' color='primary'>Add Quote</Typography>
            </div>
            <div><SearchBar placeholder='Search For Quote By Author Name' data={ Quote }/></div>
        </div>
    )
}

export default Navbar ;