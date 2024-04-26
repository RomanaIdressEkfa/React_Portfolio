import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
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
              title="Wedding_Couple"
              description="The Wedding_Couple entity represents a couple getting married. It typically includes attributes such as the bride's name, groom's name, and the date of the wedding. This entity is commonly used in wedding planning and management systems to keep track of couples' information and wedding details."
              ghLink="https://github.com/RomanaIdressEkfa/wedding-couple"
              demoLink="https://github.com/RomanaIdressEkfa/wedding-couple"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pick_Bazar"
              description="Experience convenience at your fingertips with our comprehensive grocery e-commerce platform. Browse, shop, and enjoy doorstep delivery of fresh produce, pantry staples, and household essentials"
              ghLink="https://github.com/RomanaIdressEkfa/PickBazar"
              demoLink="https://github.com/RomanaIdressEkfa/PickBazar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fast_Food"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/RomanaIdressEkfa/fast-food"
              demoLink="https://github.com/RomanaIdressEkfa/fast-food/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/RomanaIdressEkfa/fast-food"
              demoLink="https://github.com/RomanaIdressEkfa/fast-food"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Harnessing AI for social good, we strive to address pressing global challenges. Through innovative solutions and ethical AI practices, we aim to foster positive change and empower communities worldwide."
              ghLink="https://github.com/RomanaIdressEkfa/fast-food"
              demoLink="https://github.com/RomanaIdressEkfa/fast-food"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/RomanaIdressEkfa/fast-food"
             demoLink="https://github.com/RomanaIdressEkfa/fast-food" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
