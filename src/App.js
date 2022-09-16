import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col>
            <Form.Group controlId='formEmail'>
            <Form.Label> Email Address </Form.Label>
            <Form.Control type='email' placeholder="Exemple@email.com"/>
            <Form.Text className='text-muted'>
              Welcome
            </Form.Text>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId='formPassword'>
            <Form.Label> Password </Form.Label>
            <Form.Control type='password' placeholder="PassWord"/>
          </Form.Group>
          </Col>
          </Row>
          <Button variant='secondary' type='submit'> Login </Button>

        </Form>
        <Card className="nb-3" style={{color:"#000"}}>
            <Card.Img src='https://www.okvoyage.com/wp-content/uploads/2021/02/paysages-norvege-scaled.jpeg'/>
            <Card.Body>
            <Card.Title>
              Card Exemple
            </Card.Title> 
           <Card.Text>
              This un exemple of react bootstrap cards
           </Card.Text>
           <Button variant='primary'> Read More </Button>
          </Card.Body>
        </Card>

      <Breadcrumb>
        <Breadcrumb.Item> Test </Breadcrumb.Item>
        <Breadcrumb.Item> Test2 </Breadcrumb.Item>
        <Breadcrumb.Item active> Test3 </Breadcrumb.Item>
      </Breadcrumb>

        <Alert variant='success'> This is a Button </Alert>
        <Button> Test Button </Button>
      </Container>
        
      </header>
    </div>
  );
}

export default App;
