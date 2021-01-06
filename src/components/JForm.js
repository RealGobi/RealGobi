import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function JForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMassage] = useState('');
  const [disabeld, setDisabel] = useState(false);
  const [sent, setSent] = useState(null);
  
  return (
  <Container>
    <Col  md={{ span: 6, offset: 3 }}>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Namn</Form.Label>
          <Form.Control type="text" placeholder="Namn" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Meddelande</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Meddelande..." />
        </Form.Group>
        <Button variant="secondary" size="lg" active style={{marginBottom:"100px"}}>Skicka</Button>
      </Form>
    </Col>
  </Container>
  )
}

export default JForm;
