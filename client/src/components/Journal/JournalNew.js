
import React from 'react' ;
import axios from 'axios' ;
import JournalForm from '../Forms/JournalForm';
import { useNavigate } from 'react-router-dom';

const JournalNew = () => {
    const navigate = useNavigate() ;
    
    const submitHandler = (journal, setErrors) => {
        axios.post('http://localhost:8000/api/journals', journal)
        .then((res) => {
            console.log(res.data)
            navigate('/journal') ;
        })
        .catch((err) => {
            console.log('Errors from CREATE', err.response.data.error)
            setErrors(err.response.data.error.errors)
        })
    }
    return (
        <div>
            <h3>What Are Your Thoughts About This Quote?</h3>
            <JournalForm submitHandler={ submitHandler } buttonText={ 'Add Journal Entry' }/>
        </div>
    )
}

export default JournalNew ;