
import { Container, Typography, Paper } from '@material-ui/core';
import React from 'react' ;

import useStyles from './RandomQuote.styles' ;

const RandomQuote = () => {
    const classes = useStyles() ;
    return (
        <Container className={ classes.randomQuote } maxWidth='md'>
            <Paper className={ classes.bluePaper } elevation={ 6 }>
                <Typography variant='h3'>
                    Random Quote
                </Typography>

            </Paper>
        </Container>
    )
}

export default RandomQuote ;