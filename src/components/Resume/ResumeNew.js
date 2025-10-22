
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/MYresume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "./Resume.css";

// Setup PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  // Update width when window resizes
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust PDF scale for screen width
  const scale = width > 1200 ? 1.6 : width > 992 ? 1.3 : width > 768 ? 1 : 0.6;

  return (
    <div className="resume-container">
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Download Button */}
        <Row className="justify-content-center mb-4">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            download="Deepak_Baisla_Resume.pdf"
            className="download-btn"
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Preview */}
        <Row className="resume d-flex justify-content-center align-items-center">
          <div className="pdf-wrapper">
            <Document file={pdf} className="pdf-document">
              <Page pageNumber={1} scale={scale} />
            </Document>
          </div>
        </Row>

        {/* Bottom Download Button */}
        <Row className="justify-content-center mt-4">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            download="Deepak_Baisla_Resume.pdf"
            className="download-btn"
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
