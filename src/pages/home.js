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
import Axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      downloads: ''
    }
  }
  incDownloads = () =>{
    let data = Number(this.state.downloads)+1;
    var config = {
      method: 'put',
      url: 'https://gitwatch-405ac-default-rtdb.asia-southeast1.firebasedatabase.app/downloads.json',
      data : data
    };

    Axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  getDownloads=()=>{
    Axios.get('https://gitwatch-405ac-default-rtdb.asia-southeast1.firebasedatabase.app/downloads.json').then(res=>{
      this.setState({
        downloads: res.data
      })
    })
    }
    componentDidMount(){
      this.getDownloads();
      AOS.init({
        mirror: false,
        once: true,
        duration: 1000
      });

    }
  render(){
    return(
      <section>
        <Container fluid id="home" name="home" className="full-section">
          <Row noGutters className="">
            <Col md="6">
            <div className="hero-con">
                <div className="hero-content" data-aos="fade-up">
                  <h1>
                    <img src={logo} height="40px" style={{paddingRight:'10px',marginTop:'-10px'}} alt="logo"/>
                    Gitstalker
                  </h1>
                  <p>Do you have a habbit of stalking github profiles all the time? <br/> Then Gitstalker is for you. <br/> Find out what your peers are upto !! </p>
                  <a className="btn btn-dark btn-download" href={app} onClick={this.incDownloads} download> <FaDownload/> Download for android</a>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="mock-up">
                <img className="phone" src={m1} alt="phone mockup"  data-aos="fade-left"/>
                <img className="blob" src={b1} alt="blob"/>
              </div>
            </Col>
          </Row>
        </Container>
        <Container name="about" id="about" className="full-section">
          <Row>
            <Col md="6" className="text-center py-5">
              <img src={clg} alt="gitstalker app" width="80%" data-aos="zoom-out"/>
            </Col>
            <Col md="6">
              <div>
                <h1 data-aos="fade-up">About</h1>
                <Alert variant="primary" data-aos="fade-left" data-aos-delay="500">
                  <p>Features of Gitstalker app</p>
                  <ul style={{listStyleType:'square'}}>
                    <li>Quick access to Github feed</li>
                    <li>Get any developer's repo, feed and events information</li>
                    <li>User friendly and elegant user interface design</li>
                  </ul>
                </Alert>
                <Alert variant="primary" data-aos="fade-left" data-aos-delay="750">
                  Instruction: Signup and login with your Github username
                </Alert>
                <span>
                  <Alert variant="primary" data-aos="fade-left" data-aos-delay="1000">
                    <p>Stack used</p>
                    <h2>
                      <IoLogoIonic/>
                      <IoLogoAngular/>
                      <IoLogoGithub/>
                      <IoLogoFirebase/>
                    </h2>
                    <p>
                      <a class="text-primary" href="https://github.com/yunghog/git-stalk"> <IoLogoGithub/> View source code</a>
                    </p>
                  </Alert>
                </span>
              </div>
              <div className="tile my-2" data-aos="fade-left" data-aos-delay="1250">
                <p>Downloads</p>
                <h2>{this.state.downloads}</h2>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid name="downloads" id="downloads" className="full-section bg-grad text-light downloads-con">
          <Row noGutters>
            <Col md="6" className="download-content px-5" data-aos="fade-up">
              <h1>Download</h1>
              <h5>Gitstalker v 1.1</h5>
              <p>Download and install gitstalker now</p>
              <a className="btn btn-light" href={app} download onClick={this.incDownloads}> <FaDownload/> Download for android</a>
            </Col>
            <Col md="6" className="download-img px-5">
              <img src={md} alt="mockup" data-aos="fade-left"/>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
