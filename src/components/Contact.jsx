import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {MdAddCall} from 'react-icons/md';
import {SlLocationPin} from 'react-icons/sl';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Feel Free to Contact us</h1>
      <div className="company-container">
        <h2>Eva Aviation Academy</h2>
        <p>Contact Information:</p>
        {/* <strong>
          <p>Contact Person: Capt.Rishi Kumar</p>
          <p></p>
        </strong> */}

        <ul>
          <p className="topicondiv">
            <MdAddCall className="topicons " />
            +91 7982316437, 011-35886195
          </p>
          <p className="topicondiv">
            <HiOutlineMail className="topicons " />
            evaaviationacademy@gmail.com
          </p>
          <p className="topicondiv">
            <SlLocationPin className="topicons " />E 1054, Ramphal Chowk, Dwarka
            Sector-07, New Delhi, India
          </p>
        </ul>
      </div>
      <div className="company-container">
        <h2>Eva Aviation Import & Export</h2>
        <p>Contact Information:</p>

        {/* <strong>
          <p>Contact Person: Capt.Rishi Kumar</p>
          <p></p>
        </strong> */}
        <ul>
          <p className="topicondiv">
            <MdAddCall className="topicons " />
            +91 7982316437, 011-35886195
          </p>
          <p className="topicondiv">
            <HiOutlineMail className="topicons " />
            evaaviationimportexport@gmail.com
          </p>
          <p className="topicondiv">
            <SlLocationPin className="topicons " />E 1054, Ramphal Chowk, Dwarka
            Sector-07, New Delhi, India
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
