import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ShopItem from '../components/ShopItem';
import shopItems from '../maindata/mdb.json'


function Shop() {
  return (
    <>
      <h3>Shop</h3>
      <Row md={2} xs={1} lg={4} className="g-3">
        {shopItems.map(item => (
          <Col key={item.id}>
            <ShopItem {...item}/>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Shop;