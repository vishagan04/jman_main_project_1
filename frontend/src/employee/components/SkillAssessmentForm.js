import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SkillAssessmentForm = ({ assessmentId }) => {
  const [formData, setFormData] = useState({
    certification: "",
    skill: "",
    score: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/assessments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          assessmentId, // Include the assessment ID in the submission
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Assessment submitted successfully:", result);
        // Reset form
        setFormData({ certification: "", skill: "", score: "" });
      } else {
        console.error("Error submitting assessment:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting assessment:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCertification">
        <Form.Label>Certification</Form.Label>
        <Form.Control
          type="text"
          name="certification"
          value={formData.certification}
          onChange={handleChange}
          required
          placeholder="Enter your certification"
        />
      </Form.Group>

      <Form.Group controlId="formSkill">
        <Form.Label>Skill</Form.Label>
        <Form.Control
          type="text"
          name="skill"
          value={formData.skill}
          onChange={handleChange}
          required
          placeholder="Enter the skill"
        />
      </Form.Group>

      <Form.Group controlId="formScore">
        <Form.Label>Score</Form.Label>
        <Form.Control
          type="number"
          name="score"
          value={formData.score}
          onChange={handleChange}
          required
          placeholder="Enter your score"
          min="0"
          max="100"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit Assessment
      </Button>
    </Form>
  );
};

export default SkillAssessmentForm;
