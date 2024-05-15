/* eslint-disable */
import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
const IandEHome = () => {
  const photosRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const photos = photosRef.current;
      if (photos[currentIndex]) {
        photos[currentIndex].style.transform = 'translateX(-100%)';
      }
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      if (photos[currentIndex]) {
        photos[currentIndex].style.transform = 'translateX(0)';
      }
    }, 2000);

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [currentIndex]);

  const img = [
    './images/slider-1-box-2.jpg',
    './images/slider-2-box-2.jpg',
    './images/slider-3-box-2.jpg',
    './images/slider-4-box-2.jpg',
    './images/slider-5-box-2.jpg',
    './images/slider-6-box-2.jpg',
  ];

  return (
    <>
      <div className="ie-home">
        <section className="welcome-section">
          <h1>Welcome to Eva Aviation Import and Export</h1>
          {/* <img
            className="ppppppppp"
            src="https://media.istockphoto.com/id/1066762856/photo/aerial-view-top-speed-with-beautiful-wave-of-container-ship-full-load-container-with-crane.jpg?s=612x612&w=0&k=20&c=2QvFt7T-vb6nUrrm0cI42s9zYDgOjZy-YeMpMNuSa9Y="
            alt=""
          /> */}
          <img
            className="ppppppppp"
            src="https://media.istockphoto.com/id/1445383492/photo/logistics-and-transportation-of-container-cargo-ship-and-cargo-plane-with-working-crane.jpg?s=612x612&w=0&k=20&c=rOPTeJma5uUCiK4SXjPkJ_fkZhLu2Of5Khvzs6_HkAI="
            alt=""
          />
          <p>
            Welcome to Eva Aviation Import and Export, your trusted partner in
            aviation logistics solutions. With a focus on efficiency,
            reliability, and global reach, we specialize in seamless import and
            export services for the aviation industry.
          </p>
        </section>

        <section className="services-section">
          <h2>Our Services</h2>
          <div className="service">
            <h3>Import Services</h3>
            <p>
              Our import services encompass the efficient handling and clearance
              of aviation-related goods, including aircraft parts, components,
              and equipment. Benefit from our expertise in navigating customs
              procedures and logistics coordination for timely deliveries.
            </p>
          </div>
          <div className="service">
            <h3>Export Services</h3>
            <p>
              Experience hassle-free exports with our comprehensive export
              services. We manage documentation, customs clearance, and
              transportation, ensuring your aviation products reach their
              destinations worldwide securely and on schedule.
            </p>
          </div>
          <div className="service">
            <h3>Specialized Services</h3>
            <p>
              In addition to standard import and export services, we offer
              specialized solutions such as temperature-controlled shipping for
              perishable aviation items and handling oversized cargo with
              precision and care.
            </p>
          </div>
        </section>

        <section className="global-reach-section">
          <h2>Global Reach</h2>
          <p>
            Tap into our extensive network of offices, partners, and agents
            strategically located in key aviation hubs globally. Benefit from
            seamless coordination and reliable services across borders. Our
            partnerships with airlines, manufacturers, and industry stakeholders
            enhance our global reach and ensure optimal logistics solutions
            tailored to your specific needs.
          </p>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>
            For inquiries, quotes, or more information about our services,
            please contact us at:
          </p>
          <br />
          <ul>
            <strong>
              <li>Phone: [+91 7982316437, 011-35886195]</li>
              <li>
                Email: [evaaviationacademy@gmail.com,
                evaaviationimportexport@gmail.com]
              </li>
              <li>
                Address: [E 1054, Ramphal Chowk, Dwarka Sector-07, New Delhi]
              </li>
            </strong>
          </ul>
          <p>
            Connect with us on social media for updates and industry insights.
          </p>
        </section>
      </div>
    </>
  );
};

export default IandEHome;
