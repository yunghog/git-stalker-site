import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.css'
import logo from '../assets/images/small-logo-t.png'
import wave from '../assets/images/site-bg.png'
import m1 from '../assets/images/mock1.png'
import b1 from '../assets/images/blob-1.png'

export default class Home extends React.Component{
  render(){
    return(
      <section>
        <Container fluid>
          <Row noGutters className="">
            <Col md="6">
            <div className="hero-con">
                <div className="hero-content">
                  <h1>Gitstalker</h1>
                  <p>Do you have a habbit of stalking github profiles all the time? <br/> Then Gitstalker is for you. <br/> Find out what your peers upto </p>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div class="mock-up">
                <img className="phone" src={m1}/>
                <img className="blob" src={b1}/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
