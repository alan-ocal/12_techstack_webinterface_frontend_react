import {Button} from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css';


//pass a condition directly to the disabled prop
const MyButton = ({isDisabled}) => {
    return(
        //react-bootstrap provides a `variant prop`
        //that maps to Bootstrap's button classes.
        <Button
            variant="success"
            disabled={isDisabled} // Disables the button if isDisabled is true
        >
            {isDisabled ? 'Blocked' : 'Click me'}
        </Button>
    );
}
export default MyButton;