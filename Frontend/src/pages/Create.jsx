import React from 'react'
import {Col, Container, Row} from "reactstrap";
import CommonSection from '../components/ui/CommonSection/CommonSection';
import img06 from "../assets/images/img-06.jpg"
import ava06 from "../assets/images/ava-06.png"
import "../styles/create.css"
import NFTcard from '../components/ui/NFT-card/NFTcard';


const item={
    id: "06",
    title: "Sir Lion Swag",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img06,
    creator: "Trista Francis",
    creatorImg: ava06,
    currentBid: 4.99,
}


const Create = () => {
  return (
    <div>
     <CommonSection title="Create NFT" />

     <section>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6' >
            <h5 className='mb-4 text-light' >Preview Item</h5>
            <NFTcard item={item} />
          </Col>
          <Col lg='8' md='8' sm='6' className='create_item_col'>
            <div className='create_item'>
              <form>
                <div className='form_input' >
                  <label>Upload File</label>
                  <input type="file" className='upload_input' />
                </div>

                <div className='form_input' >
                  <label>Price</label>
                  <input type="number" placeholder='Enter the price for one item(ETH)' />
                </div>

                <div className='form_input' >
                  <label>Minimum Bid</label>
                  <input type="number" placeholder='Enter minimum bid(ETH)' />
                </div>

                <div className='d-flex align-items-center justify-content-between'>
                  <div className='form_input w-50' >
                    <label>Starting Date</label>
                    <input type="date"  />
                  </div>

                  <div className='form_input w-50' >
                    <label>Expiration Date</label>
                    <input type="date"  />
                  </div>
                </div>

                <div className='form_input' >
                  <label>Title</label>
                  <input type="text" placeholder='Enter title' />
                </div>

                <div className='form_input' >
                  <label>Description</label>
                  <textarea className='w-100' rows='7' placeholder='Enter description'></textarea>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
     </section>
    </div>
  )
}

export default Create
