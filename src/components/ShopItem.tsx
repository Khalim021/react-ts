import { Button, Card } from "react-bootstrap";
import currencyFormatter from "../utilities/currencyFormatter";
import {useCartContext} from '../context/CartContext';

type ShopItemProps = {
  id: number,
  name: string,
  price: number,
  img: string
}

function ShopItem({id, name, price, img}: ShopItemProps) {
  const { getQuantity, increaseQuantity, decreaseQuantity, removeFromCart} = useCartContext()
  const quantity = getQuantity(id);
  return (
    <Card className="v-100">
      <Card.Img 
      variant="top" 
      src={img}  
      style={{objectFit: 'cover'}}>
      </Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{currencyFormatter(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 1 ? (
            <Button className="w-100" onClick={() => increaseQuantity(id)}>+ Add to Cart</Button>
          ): <div className="d-flex flex-column align-items-center" style={{gap: '.3rem'}}>
                <div className="d-flex align-items-center justify-content-center" style={{gap: '.3rem'}}>
                  <Button className="btn-sm" onClick={() => decreaseQuantity(id)}>-</Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in Cart
                  </div>
                  <Button className="btn-sm" onClick={() => increaseQuantity(id)}>+</Button>
                </div>
                <Button className="btn btn-danger btn-sm" onClick={() => removeFromCart(id)}>Remove</Button>
            </div>}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ShopItem;