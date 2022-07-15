
import React, { useState, useEffect } from 'react' ;
import axios from 'axios' ;
import { useParams } from 'react-router-dom' ;

import Form from 'react-bootstrap/Form' ;
import Button from 'react-bootstrap/Button' ;
import { Box, Typography } from '@material-ui/core' ;


const JournalForm = (props ) => {

    const { id } = (useParams()) ;
    
    const { oldJournal } = props ;
    const [ errors, setErrors ] = useState({}) ;
    const [ quote, setQuote ] = useState({}) ;

    const [ journal, setJournal ] = useState(
        props.oldJournal || {
        entry: '',
        writtenBy: '',
        quoted: id ,
    }) ;
    
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/quotes/${id}`)
        .then((res) => {
            console.log(res.data) ;
            setQuote(res.data) ;
        })
        .catch((err) => {
            console.log("Error from DETAILS", err)
        })
    }, [id]) ;
    
    
    useEffect(()=> {
        if (props.oldJournal) {
            setJournal(props.oldJournal) ;
        }
    }, [props.oldJournal]) ;

    const submitHandler = (e) => {
        e.preventDefault() ;
        props.submitHandler(journal, setErrors) ;
    } ;

    const changeHandler = (e) => {
        setJournal({ ...journal, [e.target.name]: e.target.value }) ;
        
    } ;

    return (
        <div className="container">
            <Box >
                <Typography>{ quote.author}</Typography>
                <Typography color='primary'>{ quote.quote}</Typography>
            </Box>
        <div className="add">
            <Form onSubmit={submitHandler} className="addForm" style={{ background: '#D4EBEE' }}>
                <Form.Group>
                    <Form.Control type = 'hidden' name='quoted' value={  journal.quoted } onChange={changeHandler}/>
                </Form.Group>
                <Form.Group className="mb-3">
                { errors.journal && <p className="error">{ errors.journal.entry }</p> }
                    <Form.Label>Journal Entry</Form.Label>
                    <Form.Control as='textarea' rows={3} name="entry" value={journal.entry} onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    { errors.author && <p className="error">{ errors.journal.writtenBy }</p> }
                    <Form.Label>Written By</Form.Label>
                    <Form.Control type="text" name="writtenBy" value={journal.writtenBy} onChange={changeHandler} />
                </Form.Group>
                
                <Button variant="primary" type="submit"> {props.buttonText}
                </Button>
            </Form>
        </div>
    </div>
    )
}
export default JournalForm ;