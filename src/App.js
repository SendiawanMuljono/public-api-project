import axios from 'axios';
import { Button, Card, Container } from 'react-bootstrap';
// import './App.css';

function App() {
  return (
    <Container>
      <p>tes</p>
      <Button variant="primary">Test</Button>
      {/*  */}
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Simple Books API</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">https://simple-books-api.glitch.me</Card.Subtitle>
          {axios.get("https://simple-books-api.glitch.me")
            .then(
              <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
              </Card.Text>
            )
          }
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      {/*  */}
    </Container>
  );
}

export default App;
