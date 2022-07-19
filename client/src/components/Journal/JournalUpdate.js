
import { useEffect, useState } from 'react' ;
import axios from 'axios' ;
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import JournalForm from '../Forms/JournalForm' ;

const JournalUpdate = () => {
    const navigate = useNavigate() ;
    const { id } = useParams() ;
    const  [ oldJournal, setOldJournal ] = useState({}) ;
    const { state } = useLocation() ;

    useEffect(() => {
        if (!state) {
            axios.get(`http://localhost:8000/api/journals/${id}`)
            .then((res) => {
                console.log(res.data) ;
                setOldJournal(res.data) ;
                
            })
            .catch((err) => {
                console.log("Error from UPDATE", err)
            }) ;
        } else {
            setOldJournal(state) ;
        }
    }, [id, state]) ;
    
    const submitHandler = (journal, setErrors) => {
        axios.put(`http://localhost:8000/api/journals/${id}`, journal)
        .then((res) => {
            console.log(res.data) ;
            navigate('/journal') ;
        })
        .catch((err) => {
            setErrors(err.response.data.error.errors)
        })
    } ;

    return oldJournal ? (
        <div>
            <h3>Edit Journal</h3>
            <div>
                <JournalForm submitHandler={ submitHandler } buttonText={'Edit Journal'} oldJournal={ oldJournal } />
            </div>
        </div>
    ) : null ;
}

export default JournalUpdate ;