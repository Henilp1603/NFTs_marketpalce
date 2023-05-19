import React from 'react'
import { Link } from 'react-router-dom';
import {Col, Container, Row} from "reactstrap";
import "./stepsection.css"

const STEP_DATA=[
  {
    title:'Setup your wallet',
    desc: "Your NFT wallet is essentially a cryptocurrency wallet that can also store NFTs. ",
    icon:'ri-wallet-line'
  },
  {
    title:'Create your collection',
    desc: "Go to the create page and select create collection. Now fill out the details of your collection.",
    icon:'ri-layout-4-line'
  },
  {
    title:'Add your NFTs',
    desc: "After create your collection, you can add you own NFT by clicking the create button.",
    icon:'ri-image-line'
  },
  {
    title:'List them for sale',
    desc: "After create your coolection and add your NFT you can list them for a sale and also track them.",
    icon:'ri-list-check'
  },
]

const StepSection = () => {
  return (
    <section>
      <Container>
            <Row>
              <Col lg="12"className='mb-4' >
                <h3 className='step_title' >Create and Sell Your NFTs</h3>
              </Col>  

              {
                STEP_DATA.map((item,index)=>(
                  <Col lg="3"  md="4" sm='6' key={index} className='mb-4' >
                  <div className='single_stepItem ' >
                      <span><i class={item.icon}></i></span>
                  <div className='step_item_content' >
                      <h5>
                          <Link to="/wallet" >{item.title}</Link>
                      </h5>
                      <p className='mb-0'>{item.desc}</p>
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

export default StepSection
