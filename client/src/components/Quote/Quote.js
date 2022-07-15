
import React, { useEffect, useState } from 'react' ;
//import { useSelector } from 'react-redux'; 
import axios from 'axios' ;

import { Grid, CircularProgress, Card, CardActions, CardContent,  Button, Typography, IconButton } from '@material-ui/core' ;
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './Quote.style' ;

const Quote = () => {
    const [ quotes, setQuotes ] = useState([]) ;
    const [ currentId, setCurrentId] = useState({}) ;
    const classes = useStyles() ;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/quotes')
        .then((res) => {
            setQuotes(res.data)
        })
        .catch((err) => {
            console.log('ERROR from GET ALL') ;
        })
    }, []) ;

    return (
        !quotes.length ? <CircularProgress /> : (
            <Grid className={ classes.container } container alignItems='stretch' spacing={3}>
                { quotes.map((quote) => (
                    <Grid key={quote._id} item xs={12} sm={6} style={{ background: '#fff' }}>
                        <CardContent style={{ background: '#53a9bc' }}>
                            <IconButton aria-label="Example" href={`/quote/update/${quote._id}`}>
                                <MoreHorizIcon fontSize='medium' />
                            </IconButton>
                                <Typography className={ classes.title } variant='body1' gutterBottom>Words by: { quote.author }</Typography>
                                </CardContent>
                            <CardContent style={{ background: '#D4EBEE' }}>
                                <Typography variant='h5' color='primary' component='p'> { quote.quote }</Typography>
                            </CardContent>
                        <Card key={ quote._id }>
                            <CardContent>
                                <Typography variant='body2' color='textSecondary' component='p'>Source: { quote.source }</Typography>
                            </CardContent>
                            <CardActions className={ classes.cardActions }>
                                <Button size='small' color='primary' variant='contained' href={`/journal/${ quote._id }/add`} state={quote}> Journal </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}     
            </Grid>
        )
    ) ;
} 

export default Quote ;