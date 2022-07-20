
import React, { useEffect, useState } from 'react' ;
import axios from 'axios' ;
import { useParams } from 'react-router-dom' ;

import { Grid, CircularProgress, Card, CardActions, CardContent,  Button, Typography, IconButton, Paper } from '@material-ui/core' ;
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './Quote.style' ;



const QuoteDisplay = () => {
    
    const [ quotes, setQuotes ] = useState([]) ;
    const classes = useStyles() ;
    const [ quote, setQuote ] = useState({}) ;
    const { authorLastName } = useParams() ;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/quotes') 
        .then((res) => {
            setQuotes(res.data)
            console.log(authorLastName + '  authorLastName display') ;
        })
        .catch((err) => {
            console.log('ERROR from Author Search') ;
        })
    }, []) ;
    
    return (
        !quotes?.length ? <CircularProgress /> : (
            <div>
                
                <Typography variant='h6' className={ classes.displayTitle}> { authorLastName }'s Quotes  </Typography>
                        
            <Grid className={ classes.container } container alignItems='stretch' spacing={3}>
                { quotes.map((quote) => authorLastName === quote.authorLastName ? 
                (
                    <Grid key={quote._id} item xs={12} sm={6} style={{ background: '#fff' }}>
                        <Paper elevation={6}>
                        <CardContent style={{ background: '#53a9bc' }}  >
                            <IconButton aria-label="Example" href={`/quote/update/${quote._id}`}>
                                <MoreHorizIcon fontSize='medium' />
                            </IconButton>
                                <Typography className={ classes.title } variant='h5' gutterBottom>Words by: { quote.authorFirstName } { authorLastName }</Typography>
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
                    </Paper>    
                    </Grid>
                    
                ): null )} 
            </Grid>
            
        
        </div>
        )
    ) ;
}

export default QuoteDisplay ;