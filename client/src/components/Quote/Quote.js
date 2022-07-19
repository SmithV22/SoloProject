
import React, { useEffect, useState } from 'react' ;
import axios from 'axios' ;
import { useNavigate } from 'react-router-dom';

import { Grid, CircularProgress, Card, CardActions, CardContent,  Button, Typography, IconButton, Container, Paper } from '@material-ui/core' ;
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './Quote.style' ;

const Quote = () => {
    const [ quotes, setQuotes ] = useState([]) ;
    const classes = useStyles() ;
    const navigate = useNavigate() ;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/quotes')
        .then((res) => {
            setQuotes(res.data)
        })
        .catch((err) => {
            console.log('ERROR from GET ALL') ;
        })
    }, []) ;

    const deleteHandler = (_id) => {
        axios
        .delete(`http://localhost:8000/api/quotes/${_id}`)
        .then((res) => {
            console.log(res) ;
            setQuotes(quotes.filter((quote)=> quote._id !== _id)) ;
            navigate('/') ;
        })
        .catch((err) => {
            console.log('Error Deleting Journal', err) ;
        }) ;
    } ;
    
    let quoteIndex = quotes[Math.floor(Math.random() * quotes.length)] ;
    
    return (
        !quotes.length ? <CircularProgress /> : (
            <div>
                <Container className={ classes.randomQuote } maxWidth='md'>
                    <Typography variant='h6'className={ classes.quotes }>  { quoteIndex?.quote }
                    </Typography>
                        <Typography variant='body2'className={ classes.quotes }> { quoteIndex?.author }
                        </Typography>
                </Container>
            <Grid className={ classes.container } container alignItems='stretch' spacing={3}>
                { quotes.map((quote) => (
                    <Grid key={quote._id} item xs={12} sm={6} style={{ background: '#fff' }}>
                        <Paper elevation={6}>
                        <CardContent style={{ background: '#53a9bc' }}  >
                            <IconButton aria-label="Example" href={`/quote/update/${quote._id}`}>
                                <MoreHorizIcon fontSize='medium' />
                            </IconButton>
                                <Typography className={ classes.title } variant='h5' gutterBottom>Words by: { quote.authorFirstName } { quote.authorLastName} </Typography>
                                </CardContent>
                            <CardContent style={{ background: '#D4EBEE' }}>
                                <Typography variant='h5' color='primary' component='p' className={ classes.font }> { quote.quote }</Typography>
                            </CardContent>
                        <Card key={ quote._id }>
                            <CardContent>
                                <Typography variant='body2' color='textSecondary' component='p'>Source: { quote.source }</Typography>
                            </CardContent>
                            <CardActions className={ classes.cardActions }>
                                <Button className={ classes.button } size='small' variant='contained' href={`/journal/${ quote._id }/add`} state={quote}> Journal </Button>
                                {/* <Button onClick={() => deleteHandler(quote._id)} size='small' color='primary' variant='contained' > Delete </Button> */}
                            </CardActions>
                        </Card>
                    </Paper>    
                    </Grid>
                ))} 
            </Grid>
        </div>
        )
    ) ;
} 

export default Quote ;