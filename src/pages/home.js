import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.css'
import logo from '../assets/images/small-logo-t.png'
import m1 from '../assets/images/mock1.png'
import md from '../assets/images/mock-d.png'
import b1 from '../assets/images/blob-1.png'
import clg from '../assets/images/collage.png'
import app from '../assets/gitstalker.apk'
import {FaDownload} from 'react-icons/fa'
import { IoLogoIonic, IoLogoGithub, IoLogoAngular } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";

export default class Home extends React.Component{
  render(){
    return(
      <section>
        <Container fluid id="home" name="home" className="full-section">
          <Row noGutters className="">
            <Col md="6">
            <div className="hero-con">
                <div className="hero-content">
                  <h1>
                    <img src={logo} height="40px" style={{paddingRight:'10px',marginTop:'-10px'}} alt="logo"/>
                    Gitstalker
                  </h1>
                  <p>Do you have a habbit of stalking github profiles all the time? <br/> Then Gitstalker is for you. <br/> Find out what your peers upto </p>
                  <a className="btn btn-download" href={app} download> <FaDownload/> Download for android</a>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="mock-up">
                <img className="phone" src={m1} alt="phone mockup"/>
                <img className="blob" src={b1} alt="blob"/>
              </div>
            </Col>
          </Row>
        </Container>
        <Container name="about" id="about" className="full-section">
          <Row>
            <Col md="6" className="text-center py-5">
              <img src={clg} alt="gitstalker app" width="80%"/>
            </Col>
            <Col md="6">
              <div className="">
                <h1 className="">About</h1>
                <Alert variant="primary">
                  <p>Features of Gitstalker app</p>
                  <ul style={{listStyleType:'square'}}>
                    <li>Quick access to Github feed</li>
                    <li>Get any developer's repo, feed and events information</li>
                    <li>User friendly and elegant user interface design</li>
                  </ul>
                </Alert>
                <Alert variant="primary">
                  Instruction: Signup and login with your Github username
                </Alert>
                <Alert variant="primary">
                  Stack used:
                  <h2>
                    <IoLogoIonic/>
                    <IoLogoAngular/>
                    <IoLogoGithub/>
                    <IoLogoFirebase/>
                  </h2>
                </Alert>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid name="downloads" id="downloads" className="full-section bg-grad text-light downloads-con">
          <Row noGutters>
            <Col md="6" className="download-content px-5">
              <h1>Download</h1>
              <p>Download and install gitstalker now</p>
              <a className="btn btn-light" href={app} download> <FaDownload/> Download for android</a>
            </Col>
            <Col md="6" className="download-img px-5">
              <img src={md} alt="mockup"/>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
