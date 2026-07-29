import { Container } from 'react-bootstrap';
import MyButton from "./components/Button";
import Products from "./components/Products.jsx";

function App() {
  return (
      <Container>
        {<h1>React+ Vite integrate with Bootstrap and TDD</h1>}
          <Products />
        <MyButton />
      </Container>
  );
}

export default App;