import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecojute from "../../Assets/Projects/ecojute.png";
import embo from "../../Assets/Projects/embroidery.png";
import resumebuilder from "../../Assets/Projects/resume.png";
import emi from "../../Assets/Projects/emi.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumebuilder}
              isBlog={false}
              title="resumebuilder"
              description="Developed a api power resume builder that enhance Professional Summary and Job Description and have treading template where we can file details and perfect resume..."
              ghLink="https://github.com/DEEPAKbaisla/ResumeMaker.git"
              demoLink="https://resumebuilder-silk-theta.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emi}
              isBlog={false}
              title="emi"
              description="EMI Store application displays the latest smartphones  Each product shows both the original and EMI-adjusted price for transparency. A “View Plans” button lets users explore flexible EMI options tailored to their budget..."
              ghLink="https://github.com/DEEPAKbaisla/EMI-project.git"
              demoLink="https://emi-project-mu.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
