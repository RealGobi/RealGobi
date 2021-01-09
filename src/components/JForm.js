import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';


function JForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(null);

  const port = process.env.PORT || 5000;

  const submitHandler = (e) => {
    e.preventDefault();
    let emailToSend ={
      name,
      email,
      message
    }


    Axios.post(`https://js-api-portfolio.herokuapp.com/api/email`, emailToSend)
    .then(res=> {
      if(res.data.success){
        // reset
        setName("");
        setEmail("");
        setMessage("");
    
        // set sent
        setSent(true);
      } else {
        setSent(false);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
  <Container>
    {!sent ?     
    <Col  md={{ span: 6, offset: 3 }}>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label htmlFor="name">Namn</Form.Label>
          <Form.Control type="text" placeholder="Namn" name="name" id="name" onChange={(e) => {setName(e.target.value)}} value={name} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="message">Meddelande</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Meddelande..." name="message" id="message" onChange={e => setMessage(e.target.value)} value={message} />
        </Form.Group>
        <Button variant="secondary" size="lg" active style={{marginBottom:"100px"}} type="submit">Skicka</Button>
      </Form>
    </Col>
    : <p style={{textAlign:"center", height:"454px", marginBottom:"0px"}}>Meddelandet har skickats. Jag återkommer så fort jag kan, tack :)</p> }
  </Container>
  )
}

export default JForm;
