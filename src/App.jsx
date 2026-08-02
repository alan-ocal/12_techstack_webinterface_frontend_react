import Button1 from "./Button1.jsx";
import './App.css';
import Button2 from "./Button2.jsx";

function App() {
  return (
      <div container>
        <Button1 />
          {/*This allows each instance of Button to have additional styling while keeping the base .btn styles.*/}
         <Button2 className="btn"/>
       </div>

  );
}
export default App;