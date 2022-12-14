import React,{useRef} from "react";

import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const ContactUS = (props) => {

  const nameref=useRef();
  const emailref=useRef();
  const phoneref=useRef();

  const submitHandler = (event) =>{
   event.preventDefault();
   const user={
    name:nameref.current.value,
    email:emailref.current.value,
    phone:phoneref.current.value
   }
   props.onContact(user);
    nameref.current.value='';
    emailref.current.value='';
    phoneref.current.value='';
  }
  return (
    <>
      
      <br/>
      <Container >
      <Row >
          <Col lg={8}>
            <Card bg="info" >
              <Card.Header>
                <h3> Contact Us</h3>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      ref={nameref}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailref}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phonenumber</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter Phonenumber"
                      ref={phoneref}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit"  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
      </Container>
    
      
    </>
  );
};
export default ContactUS;
