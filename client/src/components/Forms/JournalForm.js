
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
    const quoteId = journal.quoted ;
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/quotes/${quoteId}`)
        .then((res) => {
            console.log(quoteId) ;
            console.log(res.data) ;
            setQuote(res.data) ;
        })
        .catch((err) => {
            console.log("Error from DETAILS", err)
        })
    }, [quoteId]) ;
    
    
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
    console.log(journal) ;
    return (
        <div className="container">
            <Box >
                <Typography color='primary' variant='h5' style={{ fontFamily: 'times new roman', fontStyle: 'italic'  }}>{ quote.quote}</Typography>
                <Typography>{ quote.authorFirstName } { quote.authorLastName }</Typography>
            </Box> 
        <div className="add">
            <Form onSubmit={submitHandler} className="addForm" >
                <Form.Group>
                    <Form.Control type = 'hidden' name='quoted' value={  journal.quoted } onChange={changeHandler}/>
                </Form.Group>
                <Form.Group className="mb-3" style={{ fontSize: '20px' }}>
                { errors.journal && <p className="error">{ errors.journal.entry }</p> }
                    <Form.Label>Journal Entry</Form.Label>
                    <Form.Control as='textarea' rows={3} name="entry" value={journal.entry} onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    { errors.author && <p className="error">{ errors.journal.writtenBy }</p> }
                    <Form.Label style={{ fontSize: '20px' }}>Written By</Form.Label>
                    <Form.Control type="text" name="writtenBy" value={journal.writtenBy} onChange={changeHandler} />
                </Form.Group>
                
                <Button style={{ backgroundColor: "#252C6F", color: '#fff' }} type="submit"> {props.buttonText}
                </Button>
            </Form>
        </div>
    </div>
    )
}
export default JournalForm ;