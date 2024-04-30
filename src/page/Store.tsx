import React from 'react'
import StoreItems from '../components/StoreItems';
import storeitems from '../data/items.json'
import './Store.scss';
import { Col, Container, Row } from 'react-bootstrap';

const Store = () => {

  return (
    <Container>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-5'>
        {storeitems.map(item =>(
          <Col key={item.id}>
            <StoreItems {...item}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Store