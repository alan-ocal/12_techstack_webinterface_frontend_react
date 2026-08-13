import {useState} from 'react'


function MyApp() {
    // MyApp component contains the count state and the handleClick event handler,
    // and passes both of them down as props to each of the buttons.
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
        </div>
    );
}

//read the props we have passed from its parent component:
function MyButton({count, onClick}) {
    return (
        <button onClick={onClick}>
            You clicked me {count} times
        </button>
    )
}

export default MyApp
