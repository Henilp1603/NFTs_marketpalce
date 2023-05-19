import React from 'react'
import {Col, Container, Row} from "reactstrap";
import CommonSection from '../components/ui/CommonSection/CommonSection';
import "../styles/contact.css"

const Contact = () => {
  return (
    <>
     <CommonSection/>
     <section>
      <Container>
        <Row>
          <Col lg='6' md='6' className='m-auto text-center'>
            <h2>Drop a Message</h2>
            <p>Any Question, Query or Remarks? Just Write Us A Message!</p>
            <div className='contact mt-4' >
              <form>
                <div className="form_input">
                  <input type="text" placeholder='Enter your name' />
                </div>
                <div className="form_input">
                  <input type="email" placeholder='Enter your email' />
                </div>
                <div className="form_input">
                  <input type="text" placeholder='Enter your subject' />
                </div>
                <div className="form_input">
                  <textarea  rows="7" placeholder='Write your message'></textarea>
                </div>
                <button className='send_btn'>Send Message</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
     </section>
    </>
  )
}

export default Contact
