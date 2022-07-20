
import React, { useState, useEffect } from 'react' ;

import Form from 'react-bootstrap/Form' ;
import Button from 'react-bootstrap/Button' ;

const QuoteForm = (props ) => {
    const { oldQuote } = props ;
    const [ errors, setErrors ] = useState({}) ;
    const [ quote, setQuote ] = useState(
        props.oldQuote || {
        quote: '',
        author: '',
        source: '',
    }) ;

    useEffect(()=> {
        if (props.oldQuote) {
            setQuote(props.oldQuote) ;
        }
    }, [props.oldQuote]) ;

    const submitHandler = (e) => {
        e.preventDefault() ;
        props.submitHandler(quote, setErrors) ;
    } ;

    const changeHandler = (e) => {
        setQuote({ ...quote, [ e.target.name ]: e.target.value }) ;
    } ;

    return (
        <div className="container">
        <div className="add">
            <Form onSubmit={submitHandler} className="addForm"  >
                <Form.Group className="mb-3">
                { errors.quote && <p className="error">{ errors.quote.message }</p> }
                <Form.Label style={{ fontSize: '20px' }}>Quote</Form.Label>
                <Form.Control as='textarea' rows={3} name="quote" value={quote.quote} onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    { errors.authorLastName && <p className="error">{ errors.authorFirstName.message }</p> }
                    <Form.Label style={{ fontSize: '20px' }}>Author First Name</Form.Label>
                    <Form.Control type="text" name="authorFirstName" value={quote.authorFirstName} onChange={changeHandler}  />
                </Form.Group>
                <Form.Group className="mb-3">
                    { errors.authorLastName && <p className="error">{ errors.authorLastName.message }</p> }
                    <Form.Label style={{ fontSize: '20px' }}>Author Last Name</Form.Label>
                    <Form.Control type="text" name="authorLastName" value={quote.authorLastName} onChange={changeHandler}  />
                </Form.Group>
                <Form.Group className="mb-3">
                    { errors.source && <p className="error">{ errors.source.message }</p> }
                    <Form.Label style={{ fontSize: '20px' }}>Source</Form.Label>
                    <Form.Control type="text" name="source" value={quote.source} onChange={changeHandler} />
                </Form.Group>
                
                <Button style={{ backgroundColor: "#252C6F", color: '#fff' }} type="submit"> {props.buttonText}
                </Button>
            </Form>
        </div>
    </div>
    )
}
export default QuoteForm ;