
import React from 'react' ;
import axios from 'axios' ;
import QuoteForm from '../Forms/QuoteForm';
import { useNavigate } from 'react-router-dom';

const QuoteNew = () => {
    const navigate = useNavigate() ;
    
    const submitHandler = (quote, setErrors) => {
        axios.post('http://localhost:8000/api/quotes', quote)
        .then((res) => {
            console.log(res.data)
            navigate('/') ;
        })
        .catch((err) => {
            console.log('Errors from CREATE', err.response.data.error)
            setErrors(err.response.data.error.errors)
        })
    }
    return (
        <div>
            <h3>Want To Share A Great Quote?</h3>
            <QuoteForm submitHandler={ submitHandler } buttonText={ 'Add Quote' }/>
        </div>
    )
}

export default QuoteNew ;