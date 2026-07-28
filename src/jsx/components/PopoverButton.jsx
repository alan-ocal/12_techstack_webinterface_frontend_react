import { useEffect, useRef } from 'react';
import {Popover} from 'bootstrap';


function PopoverButton() {
    
    //it stores a reference to the <button> element.
    //useRef gives React access to the actual DOM element. 
    const buttonRef = useRef (null);
    //useEffect runs `after the component has been rendered`. 
  
    useEffect(() => {
        //initially buttonRef.current is null 
        const popover =  new Popover(buttonRef.current);
        
        //The cleanup function
        return() => {
            popover.dispose();
        };
        //The second argument (Empty array) is called the dependency array.
        //It tells React when the effect should run.
    }, []);

   

    return (
        
        <button
            ref={buttonRef}
            className="btn btn-primary" 
            data-bs-toggle="popover"
            data-bs-title="Button"
            data-bs-content="React Beginner! Continue Please :)"
            >
                 Show Popover
            </button>
                             
    );
}

export default PopoverButton;