import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo2 from '../images/logo2.png';

const Navi = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img src={logo2} alt='logo' style={{width:'50px',height:'40px'}} className='rounded-circle' /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/feedback">feedback</Nav.Link>          
        </Nav>
      </Container>
    </Navbar>
   </>
  )
}

export default Navi;