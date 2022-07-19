
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '20px, 0',
        display: 'flex',
        flexDirection: 'row',
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
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '4em',
        color: '#53a9bc',
        fontFamily: 'georgia',
    },
    links: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    link: {
        marginRight: '10px',
        textDecoration: 'none',
        padding: '4px',
        borderRadius: '5px',
        fontSize: '17px',
        
        color: '##252C6F',
        '&:hover': {
            backgroundColor: '#53a9bc',
            color: '#3c52b2', }
    },
    
})) ;