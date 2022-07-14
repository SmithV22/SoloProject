
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 10,
        margin: '20px',
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
        color: '#00c8c7'
    },
    links: {
        textAlign: 'center',
        textDecoration: 'none',
    },
    link: {
        marginRight: '10px'
    }
})) ;