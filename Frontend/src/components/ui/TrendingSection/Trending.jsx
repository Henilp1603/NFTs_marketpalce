import React from 'react'
import {Col, Container, Row} from "reactstrap";
import "./trending.css"
import{NFT__DATA} from "../../../assets/data/data.js"
import NFTcard from "../NFT-card/NFTcard"



const Trending = () => {
  
  return (
    <section>
        <Container>
            <Row>
              <Col lg="12"className='mb-5' >
                <h3 className='trending_title' >Trending</h3>
              </Col>  
              {
                NFT__DATA.slice(0,8).map((item)=>(
                  <Col lg="3" md="4" sm="6" key={item.id} className='mb-4' >
                    <NFTcard item={item} />
                  </Col>
                ))
              }
            </Row>  
        </Container>      
    </section>
  )
}

export default Trending
