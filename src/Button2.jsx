import "./Button.css";

function Button2({className=""}) {
    function handleClick() {
        console.log('Button2 clicked!');
    }

    return <button className={`btn ${className}`}
                   onClick={handleClick}>Click Button2
    </button>
}
export default Button2;