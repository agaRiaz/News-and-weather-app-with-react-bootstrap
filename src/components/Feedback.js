import React from 'react';
import { Form,Button } from 'react-bootstrap';

const Feedback = () => {
  return (
   <>
  
    <Form className='mt-5'  style={{marginBottom:'360px',marginRight:'50px',marginLeft:'50px'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Please Enter Your Feedback" />
      </Form.Group>
      <Button as="input" type="submit" value="Submit" />{' '}
    </Form>
  

   </>
  )
}

export default Feedback;