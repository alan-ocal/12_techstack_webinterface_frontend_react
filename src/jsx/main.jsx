import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
// Import custom CSS
import '../scss/styles.scss';

//main.jsx is only responsible for rendering the application.
// App component is imported and rendered inside StrictMode.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
