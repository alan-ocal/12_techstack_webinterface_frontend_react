import { useState } from 'react'
import './App.css'

function App() {
  //`useState` stores data that affects rendering.
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
      <div className="container">
        <h1>Conditional Operator Example</h1>
        <h2>
          {isLoggedIn ? "Welcome back!" : "Please log in"}
        </h2>

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      </div>
  );
}

export default App
