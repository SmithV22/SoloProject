import React, { useEffect, useState } from 'react';
import useStyles from './SearchBar.style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SearchBar = ( props) => {
    const classes = useStyles();
    const [quotes, setQuotes] = useState([]);
    const navigate = useNavigate() ;

    useEffect(() => {
        axios.get('http://localhost:8000/api/quotes')
            .then((res) => {
                setQuotes(res.data)
            })
            .catch((err) => {
                console.log('ERROR from GET ALL');
            })
    }, [quotes]);


    const [value, setValue] = useState("");
    let data = quotes ;
    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        navigate(`/quote/${searchTerm}`) ;
        
        console.log("search ", searchTerm);
    };


    return (
        <div className={ classes.searchContainer }>
            <div className={ classes.searchInner }>
                <input type="text" value={value} onChange={onChange} />
                <button onClick={() => onSearch(value)} className={ classes.button }> Search </button>
            </div>
            <div className={ classes.dropdown }>
                {
                    data.filter((quote) => {
                        const searchTerm = value.toLowerCase();
                        const authorLastName = quote.authorLastName.toLowerCase();

                        return (
                            searchTerm &&
                            authorLastName.startsWith(searchTerm) &&
                            authorLastName !== searchTerm
                        );
                    })
                    .slice(0, 10)
                    .map((quote) => (
                        <div onClick={() => onSearch(quote.authorLastName)}
                            className={ classes.dropdownRow }
                            key={quote.authorLastName} > 
                            {quote.authorLastName} 
                        </div>
                    ))}
            </div>
        </div >
    );
}

export default SearchBar;