import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function JForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [sent, setSent] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let emailToSend ={
      name,
      email,
      message
    }

    console.log(emailToSend, 'Skickat');

    // reset
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
  <Container>
    <Col  md={{ span: 6, offset: 3 }}>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label htmlFor="name">Namn</Form.Label>
          <Form.Control type="text" placeholder="Namn" name="name" id="name" onChange={e => setName(e.target.value)} value={name} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="message">Meddelande</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Meddelande..." name="message" id="message" onChange={e => setMessage(e.target.value)} value={message} />
        </Form.Group>
        <Button variant="secondary" size="lg" active style={{marginBottom:"100px"}} type="submit" disabled={disabled}>Skicka</Button>
      </Form>
    </Col>
  </Container>
  )
}

export default JForm;
