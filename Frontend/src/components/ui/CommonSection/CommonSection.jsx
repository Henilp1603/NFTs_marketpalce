import React from 'react'
import "./commonsection.css"
import {Col, Container, Row} from "reactstrap";


const CommonSection = ({title}) => {
  return (
    <section className='common_section'>
       <Container className='text-center'>
        <h2>{title}</h2>
       </Container>
    </section>
  )
}

export default CommonSection
