import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import images from "../../../assets/images.png"

const Banner = () => {
  return (
    <section id='banner_main'>
      <Container>
        <Row>
          <Col lg={{span:7, offset:3}}>
          <div className="one">
            <h2>Let’s Help Those Who Are More In Need</h2>
            <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
            <button>Donate Now</button>
          </div>
          </Col>
        </Row>
       
      </Container>
    </section>
  )
}

export default Banner
