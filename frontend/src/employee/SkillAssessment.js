import React, { useEffect, useState } from "react";
import EmployeeNavbar from "./components/EmployeeNavbar";
import EmployeeSidebar from "./components/EmployeeSidebar";
import { Button, Modal } from "react-bootstrap";
import SkillAssessmentForm from "./components/SkillAssessmentForm"; // Import the SkillAssessmentForm component

const SkillAssessment = () => {
  const [assessments, setAssessments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentAssessment, setCurrentAssessment] = useState(null);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/assessments"); // Replace with appropriate API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAssessments(data);
      } catch (error) {
        console.error("Error fetching assessments:", error);
      }
    };

    fetchAssessments();
  }, []);

  const handleTakeAssessment = (assessment) => {
    setCurrentAssessment(assessment);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentAssessment(null);
  };

  return (
    <div>
      <EmployeeNavbar />
      <div className="row">
        <EmployeeSidebar />
        <div className="container mt-4 col-md-9">
          <h1 className="mb-4">Skill Assessment</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Assessment Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {assessments.map((assessment) => (
                <tr key={assessment.id}>
                  <td>{assessment.name}</td>
                  <td>{assessment.description}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => handleTakeAssessment(assessment)}
                    >
                      Take Assessment
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Modal for taking assessment */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Assessment: {currentAssessment?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{currentAssessment?.description}</p>
              {/* Include the SkillAssessmentForm for submitting the assessment */}
              {currentAssessment && (
                <SkillAssessmentForm assessmentId={currentAssessment.id} />
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SkillAssessment;
