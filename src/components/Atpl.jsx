import React from 'react';
// Assuming you have a styles.css file for styling

const Atpl = () => {
  return (
    <div className="course-body">
      <h1>Airlines Transport Pilot License (ATPL) Course Details</h1>

      <div className="course-container">
        <h2>Qualifications and Prerequisites</h2>
        <ul>
          <li>Minimum Age: 21 years old</li>
          <li>Hold a valid Commercial Pilot License (CPL)</li>
          <li>Aviation Medical Certificate (Class 1)</li>
          <li>English Language Proficiency</li>
        </ul>
      </div>

      <div className="course-container">
        <h2>Flight Training Requirements</h2>
        <ul>
          <li>Minimum Flight Hours: Around 1,500 hours</li>
          <li>
            Types of Flights: Cross-country, night, instrument flight,
            multi-engine, crew resource management (CRM)
          </li>
          <li>Pass Practical Flight Test (Checkride)</li>
        </ul>
      </div>

      <div className="course-container">
        <h2>Ground School Training</h2>
        <ul>
          <li>
            Advanced Subjects: Advanced aircraft systems, airline operations,
            crew resource management (CRM)
          </li>
          <li>Pass Written Knowledge Test</li>
        </ul>
      </div>

      <div className="course-container">
        <h2>Additional Information</h2>
        <p>
          An Airlines Transport Pilot License (ATPL) qualifies you to act as a
          pilot in command (PIC) of an airline transport category aircraft.
        </p>
      </div>
    </div>
  );
};

export default Atpl;
