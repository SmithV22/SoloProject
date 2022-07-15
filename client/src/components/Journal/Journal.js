
import React, { useEffect, useState } from 'react' ;
import axios from 'axios' ;
import { useNavigate } from 'react-router-dom' ;

import { Grid, CircularProgress, Box, CardActions, Paper,  Button, Typography, IconButton } from '@material-ui/core' ;
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './Journal.style' ;

const Journal = () => {
    const navigate = useNavigate() ;
    const [ journals, setJournals ] = useState([]) ;
    const classes = useStyles() ;
    useEffect(() => {
        axios.get('http://localhost:8000/api/journals')
        
        .then((res) => {
            setJournals(res.data)
        })
        .catch((err) => {
            console.log('ERROR from GET ALL') ;
        })
    }, []) ;
    
    
    const deleteHandler = (_id) => {
        axios
        .delete(`http://localhost:8000/api/journals/${_id}`)
        .then((res) => {
            console.log(res) ;
            setJournals(journals.filter((journal)=> journal._id !== _id)) ;
            navigate('/journal') ;
        })
        .catch((err) => {
            console.log('Error Deleting Journal', err) ;
        }) ;
    } ;
    

    return (
        !journals.length ? <CircularProgress /> : (
            <Grid className={ classes.container } container alignItems='stretch' spacing={3}>
                { journals.map((journal) => (
                    <Grid key={ journal._id }item xs={12} sm={6}  >
                        <Box p={5} >
                            <Paper > 
                                <Box p={5}  style={{ background: '#53a9bc' }}>
                                <IconButton aria-label="Example" href={`/journal/${journal._id}`}>
                                    <MoreHorizIcon fontSize='medium' />
                                </IconButton>
                                    <Typography className={ classes.title } variant='body1' gutterBottom>Words by: <span color='primary'>{ journal?.quoted?.author  }</span></Typography>
                                    <Typography variant='h5'> Quote: </Typography>
                                    <Typography variant='h5'color='primary'  component='p'> { journal?.quoted?.quote}</Typography>
                                </Box>
                                <Box p={5} style={{ background: '#D4EBEE' }}>
                                    <Typography variant='h5'> Journal Entry: </Typography>
                                    <Typography variant='h5'> { journal.entry }  </Typography>
                                    <CardActions className={ classes.cardActions }>
                                        <Button size='small' color='primary' variant='contained' href={`/journal/${journal._id}/update`}> Edit </Button>
                                        <Button onClick={() => deleteHandler(journal._id)} size='small' color='primary' variant='contained' > Delete </Button>
                                    </CardActions>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                ))}     
            </Grid>
        )) ;
}

export default Journal ;