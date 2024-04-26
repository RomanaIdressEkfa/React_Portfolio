import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import About from "../About/About";
import Typewriter from "typewriter-effect";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Home2() {
  return (
    <Container fluid className="" id="about">
      <Container>
        <Row>

        <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Programming has captured my heart, and I believe I've gained some proficiency along the way.
              <br />
              <br />My repertoire includes
              <i>
                <b className="purple"> 
                 React, Laravel, JavaScript, and Go – </b>
              </i>
              the classics, you might say.
              <br />
              <br />
              My passion lies in crafting new &nbsp;
              <i>
                <b className="purple"> Web Applications and E-Commerce sites,  </b> especially those touching on{" "}
                <b className="purple">
                Inventory Management.
                </b>
              </i>
                I relish the challenge of bringing these ideas to life.
              <br />
              <br />
              I indulge my enthusiasm for development by working with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                   leveraging modern libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js and of course, Laravel ☺</b>
              </i>
              whenever the opportunity presents itself🤷‍♂️ 
            </p>
          </Col>
          
        </Row>
       <About></About>

       <Row>
       <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Arabesque"
              description="Abayas, the flowing garments that grace the wardrobes of women in many parts of the world, hold a special place in the realm of modest fashion. These elegant, loose-fitting robes are not merely clothing items; they embody a rich cultural heritage and a symbol of modesty and grace."
              ghLink="https://github.com/RomanaIdressEkfa/elegance_arabesque"
              demoLink="https://jtzclothes.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Q7BD"
              description="Discover a world of innovation and convenience with our electronics e-commerce website. From cutting-edge gadgets to essential home appliances, find everything you need to stay connected and powered up, all with seamless shopping and delivery."
              ghLink="https://github.com/RomanaIdressEkfa/software_q7bd"
              demoLink="http://softwares.com.bd/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Printers"
              description="Elevate your printing experience with our specialized e-commerce platform for printers. Browse a curated selection of high-quality printers, ink, and accessories, and enjoy swift delivery to meet all your printing needs."
              ghLink="https://github.com/RomanaIdressEkfa/printers"
              demoLink="https://printers.softwares.com.bd/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
       </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RomanaIdressEkfa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/IdressRomana"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/romana-idress-ekfa-9b991a225/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/romana.idress.ekfa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
