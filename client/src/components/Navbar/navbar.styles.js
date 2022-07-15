
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '20px, 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '150px',
        
    },
    image: {
        height: '40px',
        width: '60px',
    },
    heading: {
        textDecoration: 'none',
        marginLeft: '4em',
        color: '#53a9bc'
    },
    links: {
        textAlign: 'center',
        marginBottom: '40px'
    },
    link: {
        marginRight: '10px',
        textDecoration: 'none',
        padding: '4px',
        borderRadius: '5px',
        
        color: '##252C6F',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2', }
    }
})) ;