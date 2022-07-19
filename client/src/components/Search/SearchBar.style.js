import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    
    searchContainer: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    dropdown: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        border: '3px solid #252C6F',
        empty: {
            border: 'none',
        }
    },
    input: {
        width: '250px',
        
    },
    searchInner: {
        display: 'flex',
        border: '3px solid #252C6F',
        justifyContent: 'center',
        
    },
    dropdownRow: {
        cursor: 'pointer',
        textAlign: 'start',
        width: '280px',
        margin: '2px 0',
    },
    button: {
        color: '#fff',
        background: '#252C6F',
    }
})) ;