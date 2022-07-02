import React from 'react';
import { Stack, Button} from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import shopItems from '../../maindata/mdb.json'
import currencyFormatter from '../../utilities/currencyFormatter';

type CartItemProps = {
  id: number,
  quantity: number
}

function CartItem({id, quantity}: CartItemProps) {
  const { removeFromCart } = useCartContext()
  const item = shopItems.find(i => i.id === id)
  if(item == null) return null
  return (
    <Stack direction='horizontal' gap={2} className="d-flex align-items-center">
      <img src={item.img} style={{width: "124px", height: '75px', objectFit: 'cover'}}/>
      <div className='me-auto'>
        <div>
          {item.name} {quantity > 1 && <span className='text-muted' style={{fontSize: ".65rem"}}>
            {quantity}x
          </span>}
        </div>
        <div className='text-muted' style={{fontSize: '.75rem'}}>
          {currencyFormatter(item.price)}
        </div>
        <div>{currencyFormatter(item.price * quantity)}</div>
      </div>
      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
    </Stack>
  );
}

export default CartItem;