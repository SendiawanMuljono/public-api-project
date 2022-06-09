import { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import RandomUserAPI from './component/RandomUserAPI';
import SimpleBookAPI from './component/SimpleBookAPI';
import CatFactsAPI from './component/CatFactsAPI';
import JsonPostsAPI from './component/JsonPostsAPI';
import WeatherAPI from './component/WeatherAPI';
import TheCatAPI from './component/TheCatAPI';
import TwitterAPI from './component/TwitterAPI';

class App extends Component {
  render(){
    return(
      <div>
        <div className='pt-3 pb-3 mb-3 bg-secondary d-flex justify-content-center'>
          <h1 className='text-light'>Public APIs</h1>
        </div>
  
        <Container>
  
          <div className='d-flex justify-content-center'>
            <Button onClick={() => window.location.reload()} className='fw-bold text-light'>Refresh APIs</Button>
          </div>
          
          <Row sm={2} md={3}>
            <Col className='d-flex justify-content-center p-2'>
              <RandomUserAPI/>
            </Col>
            <Col className='d-flex justify-content-center p-2'>
              <SimpleBookAPI/>
            </Col>
            <Col className='d-flex justify-content-center p-2'>
              <CatFactsAPI/>
            </Col>
            <Col className='d-flex justify-content-center p-2'>
              <JsonPostsAPI/>
            </Col>
            <Col className='d-flex justify-content-center p-2'>
              <WeatherAPI/>
            </Col>
            <Col className='d-flex justify-content-center p-2'>
              <TheCatAPI/>
            </Col>
            <Col className='d-flex justify-content-center p-2'>
              <TwitterAPI/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } 
}

export default App;
