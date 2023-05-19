import React from 'react'
import "./seller-section.css"
import {Col, Container, Row} from "reactstrap";
import ava01 from "../../../assets/images/ava-01.png"
import{SELLER__DATA} from "../../../assets/data/data.js"



const SellerSection = () => {
  return (
    <section>
      <Container>
        <Row>
            <Col lg="12" className='mb-5' >
                <div className="seller_section-title">
                    <h3>Top Seller</h3>
                </div>
            </Col>
            {
                SELLER__DATA.map((item)=>(
                 <Col lg="2" md="3" sm="4" xs="6" key={item.id} className='mb-4' >
                    <div className="single_seller-card d-flex align-items-center gap-3">
                        <div className="seller_img">
                            <img src={item.sellerImg} className='w-100' />
                        </div>
                        <div className='seller_content' >
                            <h6>{item.sellerName}</h6>
                            <h6>{item.currentBid} ETH</h6>
                        </div>
                    </div>
                </Col>
                ))
            }
            
        </Row>
      </Container>
    </section>
  )
}

export default SellerSection
