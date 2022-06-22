import { Card } from "react-bootstrap";
import currencyFormatter from "../utilities/currencyFormatter";

type ShopItemProps = {
  id: number,
  name: string,
  price: number,
  img: string
}

function ShopItem({id, name, price, img}: ShopItemProps) {
  return (
    <Card>
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
      </Card.Body>
    </Card>
  );
}

export default ShopItem;