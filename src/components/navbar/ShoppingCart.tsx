import React from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import currencyFormatter from '../../utilities/currencyFormatter';
import CartItem from '../navbar/CartItem'
import shopItems from '../../maindata/mdb.json'

type ShoppingCartProps = {
  isOpen: boolean
}

function ShoppingCart({isOpen}: ShoppingCartProps) {
  const { closeCart, cartItem } = useCartContext()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItem.map(item => (
            <CartItem key={item.id} {...item}/>
          ))}
          <div className='ms-auto fw-bold fs-5'>
            Total{" "}
            {currencyFormatter(cartItem.reduce((total, cartItem) => {
              const item = shopItems.find(i => i.id === cartItem.id)
              return total + (item?.price || 0) * cartItem.quantity
            }, 0))}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ShoppingCart;