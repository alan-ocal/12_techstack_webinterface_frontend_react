import "./Button.css";

function Button1() {
    function handleClick() {
        console.log('Button1 clicked!');
    }

    return (
        //add CSS className to the button
        <button className="btn" onClick={handleClick}>
            Click Button1
        </button>
    );
}
export default Button1;