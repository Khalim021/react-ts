import React from 'react';
import { Nav, Container, Navbar as NavbarNav, Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import { BiCartAlt } from "react-icons/bi";
import { useCartContext } from '../../context/CartContext';

function Navbar() {
  const {openCart, cartQuantity} = useCartContext();
  return (
    <NavbarNav sticky='top' className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
          <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
          <Nav.Link to="/shop" as={NavLink}>Shop</Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
        <Button 
        onClick={openCart} 
        style={{width: '2.5rem', height: '2.5rem', position: 'relative'}} 
        className='rounded-circle' 
        variant='outline-primary'
        >
          <BiCartAlt/>
          <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
          style={{
            color: 'white',
            width: '1.2rem',
            position: 'absolute',
            bottom: '0',
            height: '1.2rem',
            right: '0',
            transform: 'translate(25%, 25%)'
          }}
          >
            {cartQuantity}
          </div>
        </Button>
        )}
      </Container>
    </NavbarNav>
  );
}

export default Navbar;












