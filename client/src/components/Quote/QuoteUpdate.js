
import { useEffect, useState } from 'react' ;
import axios from 'axios' ;
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import QuoteForm from '../Forms/QuoteForm' ;

const QuoteUpdate = () => {
    const navigate = useNavigate() ;
    const { id } = useParams() ;
    const  [ oldQuote, setOldQuote ] = useState({}) ;
    const { state } = useLocation() ;

    useEffect(() => {
        if (!state) {
            axios.get(`http://localhost:8000/api/quotes/${id}`)
            .then((res) => {
                console.log(res.data) ;
                setOldQuote(res.data) ;
            })
            .catch((err) => {
                console.log("Error from UPDATE", err)
            }) ;
        } else {
            setOldQuote(state) ;
        }
    }, [id, state]) ;
    
    const submitHandler = (quote, setErrors) => {
        axios.put(`http://localhost:8000/api/quotes/${id}`, quote)
        .then((res) => {
            console.log(res.data) ;
            navigate('/') ;
        })
        .catch((err) => {
            setErrors(err.response.data.error.errors)
        })
    } ;

    return oldQuote ? (
        <div>
            <h3>Edit Quote</h3>
            <div>
                <QuoteForm submitHandler={ submitHandler } buttonText={'Edit Quote'} oldQuote={ oldQuote } />
            </div>
        </div>
    ) : null ;
}

export default QuoteUpdate ;