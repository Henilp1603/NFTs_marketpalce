import React from 'react'
import { Link } from 'react-router-dom';
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";
import "./footer.css"

const MY_ACCOUNT=[
  {
    display:"Author Profile",
    url:"/seller-profile"
  },
  {
    display:"Create Items",
    url:"/create"
  },
  {
    display:"Collection",
    url:"/market"
  },
  {
    display:"Edit Profile",
    url:"/edit-profile"
  },

]


const RESOURCES=[
  {
    display:"Help Center",
    url:"#"
  },
  {
    display:"Partner",
    url:"#"
  },
  {
    display:"Comunity",
    url:"#"
  },
  {
    display:"Activity",
    url:"#"
  },

]

const COMPANY=[
  {
    display:"About",
    url:"#"
  },
  {
    display:"Career",
    url:"#"
  },
  {
    display:"Ranking",
    url:"#"
  },
  {
    display:"Contact Us",
    url:"#"
  },

]
const Footer = () => {
  return (
    <footer className='footer' >
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6" className='mb-3' >
            <div className="logo">
              <h2 className='d-flex gap-2 align-items-center' >
                <span><i className="ri-firefox-fill"></i></span>NFTs
              </h2>
              <p>Discover NFT's by Category, track the latest art, and follow the collection you love, Enjoy it!</p>
              <p>© 2023 Henil Patel</p>
            </div>
          </Col>
          <Col lg="2" md="6" sm="6" className='mb-4' >
            <h5>My Account</h5>
            <ListGroup className='list__group' >
              { 
                MY_ACCOUNT.map((item,index)=>(
                  <ListGroupItem className='list__item' key={index} >
                    <Link to={item.url} >{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="2" md="6" sm="6" className='mb-4' >
             <h5>Resources</h5>
             <ListGroup className='list__group' >
              { 
                RESOURCES.map((item,index)=>(
                  <ListGroupItem className='list__item'key={index} >
                    <Link to={item.url} >{item.display}</Link>
                  </ListGroupItem>
                ))
              }
             </ListGroup>
          </Col>
          <Col lg="2" md="6" sm="6" className='mb-4' >
          <h5>Company</h5>
             <ListGroup className='list__group' >
              { 
                COMPANY.map((item,index)=>(
                  <ListGroupItem className='list__item'key={index} >
                    <Link to={item.url} >{item.display}</Link>
                  </ListGroupItem>
                ))
              }
             </ListGroup>
          </Col>
          <Col lg="3" md="6" sm="6" className='mb-4' >
            <h5>Newsletter</h5>
            <input type="text" className='newsletter' placeholder='Email' />
            <div className='social__links d-flex gap-3 align-items-center'  >
              <span><Link to="#" ><i className="ri-facebook-line"></i> </Link></span>
              <span><Link to="#" ><i className="ri-instagram-line"></i> </Link></span>
              <span><Link to="#" ><i className="ri-telegram-line"></i> </Link></span>
              <span><Link to="#" ><i className="ri-twitter-line"></i> </Link></span>

            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer
