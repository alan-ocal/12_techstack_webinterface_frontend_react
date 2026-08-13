import { useState } from 'react'


function  MyApp() {
  return(
      <div>
          <h1>Counters that update separately</h1>
          <MyButton />
          <MyButton />
      </div>
  )

function MyButton(){
      // get two things from useState: the current state (count), and the function that lets me update it (setCount).
      //[something, setSomething]
      const [count, setCount] = useState(0);
      function handleClick() {
        setCount(count + 1);
      }
      return(
          <button onClick={handleClick}>
              You clicked me {count} times
          </button>
      )
   }
}
export default MyApp
