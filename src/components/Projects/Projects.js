import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecojute from "../../Assets/Projects/ecojute.png";
import embo from '../../Assets/Projects/embroidery.png'

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
              imgPath={ecojute}
              isBlog={false}
              title="ecojute"
              description="Developed and deployed the EcoJute e-commerce platform, a responsive online store for sustainable jute bags, built with [Specify your main e-commerce technology, e.g., React.js] and styled using Material-UI..."
              ghLink="https://github.com/DEEPAKbaisla/ECOjute.git"
              demoLink="https://ec-ojute-9nt6.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={embo}
              isBlog={false}
              title="embo"
              description="Developed a dynamic Digital Embroidery Design Page using React.js that allows users to create and preview custom embroidery patterns..."
              ghLink="https://github.com/DEEPAKbaisla/Emboridery-page.git"
              demoLink="https://emboridery.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
