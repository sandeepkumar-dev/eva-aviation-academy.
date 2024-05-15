import React from 'react';
// Assuming you have a styles.css file for styling

const Cpl = () => {
  return (
    <div className="course-body">
      <h1>Commercial Pilot License (CPL) Course Details</h1>

      <div className="course-container">
        <h2>Qualifications and Prerequisites</h2>
        <ul>
          <li>Minimum Age: 18 years old</li>
          <li>Hold a valid Private Pilot License (PPL)</li>
          <li>Aviation Medical Certificate (Class 1)</li>
          <li>English Language Proficiency</li>
        </ul>
      </div>

      <div className="course-container">
        <h2>Flight Training Requirements</h2>
        <ul>
          <li>Minimum Flight Hours: Around 150-250 hours</li>
          <li>
            Types of Flights: Cross-country, night, instrument flight, complex
            aircraft training
          </li>
          <li>Pass Practical Flight Test (Checkride)</li>
        </ul>
      </div>

      <div className="course-container">
        <h2>Ground School Training</h2>
        <ul>
          <li>
            Advanced Subjects: Advanced aerodynamics, navigation, aviation
            regulations, flight planning
          </li>
          <li>Pass Written Knowledge Test</li>
        </ul>
      </div>

      <div className="course-container">
        <h2>Additional Information</h2>
        <p>
          A Commercial Pilot License (CPL) allows you to work as a pilot for
          hire or compensation. It is a stepping stone towards becoming an
          airline transport pilot.
        </p>
      </div>
    </div>
  );
};

export default Cpl;
