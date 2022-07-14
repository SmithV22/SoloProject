
import React, { useEffect, useState } from 'react' ;
import axios from 'axios' ;

import { Grid, CircularProgress, Box, CardActions, Paper,  Button, Typography, IconButton } from '@material-ui/core' ;
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './Journal.style' ;

const Journal = () => {
    const [ journals, setJournals ] = useState([]) ;
    const [ quote, setQuote ] = useState({}) ;
    const [ quoteId, setQuoteId ] = useState() ;
    const classes = useStyles() ;
    
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/journals')
        //.populate('quoted')
        .then((res) => {
            setJournals(res.data)
        })
        .catch((err) => {
            console.log('ERROR from GET ALL') ;
        })
    }, []) ;
    
    useEffect(() => {
        let quoteId = journals.quoted ;
        axios.get(`http://localhost:8000/api/quotes/${quoteId}`)
        .then((res) => {
            setQuote(res.data)
        })
        .catch((err) => {
            console.log('ERROR from GET ALL') ;
        })
    }, [quoteId]) ;
    
    console.log(quoteId + 'quoteId') ;
    

    return (
        !journals.length ? <CircularProgress /> : (
            <Grid className={ classes.container } container alignItems='stretch' spacing={3}>
                { journals.map(journal => (
                    <Grid key={ journal.id }item xs={12} sm={6} >
                        <Box p={5} >
                            <Paper> 
                                <IconButton aria-label="Example" href={`/journal/${journal._id}`}>
                                    <MoreHorizIcon fontSize='default' />
                                </IconButton>
                                <Box p={5}>
                                    <Typography variant='h5'> Quote </Typography>
                                    <Typography className={ classes.title } variant='body1' gutterBottom>Words by: { journal.quoted.author }</Typography>
                                    <Typography variant='h5'  component='p'> { journal.quoted.quote }</Typography>
                                </Box>
                                <Box p={5}>
                                    <Typography variant='h5'> Journal Entry </Typography>
                                    <Typography variant='h5'> { journal.entry }  </Typography>
                                    <CardActions className={ classes.cardActions }>
                                        <Button size='small' color='primary' variant='contained' href={`/journal/${journal._id}/update`}> Edit </Button>
                                    </CardActions>
                                    <CardActions className={ classes.cardActions }>
                                        <Button size='small' color='primary' variant='contained' href='/journal/delete/:id'> delete </Button>
                                    </CardActions>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                ))}     
            </Grid>
        )
    ) ;
} 

export default Journal ;