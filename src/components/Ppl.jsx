import React from 'react';
// Assuming you have a styles.css file for styling

const Ppl = () => {
  return (
    <div className="course-body">
      <h1>Private Pilot License (PPL) Course Details</h1>

      <div className="course-container">
        <h2>Qualifications and Prerequisites</h2>
        <ul>
          <li>Minimum Age: 17 years old</li>
          <li>High School Diploma or Equivalent</li>
          <li>Aviation Medical Certificate (Class 3)</li>
          <li>English Language Proficiency</li>
        </ul>
      </div>

      <div className="course-container">
        <h2>Flight Training Requirements</h2>
        <ul>
          <li>Minimum Flight Hours: Around 40-50 hours</li>
          <li>Types of Flights: Solo and Dual Instruction</li>
          <li>
            Flight Training Topics: Basic maneuvers, navigation, emergency
            procedures
          </li>
          <li>Pass Practical Flight Test (Checkride)</li>
        </ul>
      </div>

      <div className="course-container">
        <h2>Ground School Training</h2>
        <ul>
          <li>
            Subjects: Aerodynamics, navigation, meteorology, aircraft systems,
            regulations
          </li>
          <li>Pass Written Knowledge Test</li>
        </ul>
      </div>

      <div className="course-container">
        <h2>Additional Information</h2>
        <p>
          Obtaining a Private Pilot License (PPL) allows you to fly
          single-engine aircraft for recreational or non-commercial purposes
          under visual flight rules (VFR).
        </p>
      </div>
    </div>
  );
};

export default Ppl;
