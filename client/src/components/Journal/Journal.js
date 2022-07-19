
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
        <div>
            <Box className={ classes.heading }>
                <Typography className={classes.journalTitle}>Journals</Typography>
            </Box>
            <Grid className={ classes.container } container alignItems='stretch' spacing={3}>
                { journals.map((journal) => (
                    <Grid key={ journal._id }item xs={12} sm={6}  >
                        <Box p={5} >
                            <Paper > 
                                <Box style={{ background: '#53a9bc', paddingBottom: '10px' }}>
                                <IconButton aria-label="Example" href={`/journal/${journal._id}/update`}>
                                    <MoreHorizIcon fontSize='medium' />
                                </IconButton>
                                    <Typography variant='h5'  component='p' className={ classes.fontQuote }> { journal?.quoted?.quote}</Typography>
                                    <Typography className={ classes.title } variant='body1' color='textSecondary' gutterBottom>Words by: { journal?.quoted?.authorFirstName  } {journal?.quoted?.authorLastName} </Typography>
                                </Box>
                                <Box  style={{ background: '#D4EBEE', padding: '5px' }}>
                                    <Typography variant='h5' color='primary' fontWeight='bold'> Journal Entry: </Typography>
                                    <Typography variant='h5' style={{  paddingBottom: '10px' }} className={ classes.font }> { journal.entry }  </Typography>
                                    <CardActions className={ classes.cardActions }>
                                        <Button onClick={() => deleteHandler(journal._id)} className={ classes.button } size='small' color='primary' variant='contained' > Delete </Button>
                                    </CardActions>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                ))}     
            </Grid>
        </div>
        )) ;
    }

export default Journal ;