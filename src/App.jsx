import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <img
            src={reactLogo}
            className="App-logo"
            alt="React logo"
        />

        <a
            className="App-link"
            href="https://www.figma.com/design/2DogT5wOkrM9jgT5JRdQQX/Designfile_cdp?node-id=0-1&p=f&t=zHaIwlZk3ML3eRxl-0"
            target="_blank"
            rel="noopener noreferrer"
        >
          Open Figma Design
        </a>
      </div>
  );
}

export default App;