/* eslint-disable */
import {useNavigate} from 'react-router-dom';
import '../styles/AcademyHeader.css';

const AcademyHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="header-1">
          <img src="./images/logo.jpg" alt="Eva Aviation Academy Logo" />
          <h1>Eva Aviation Academy</h1>
        </div>
        <ul>
          <li>
            <a onClick={() => navigate('/academyhome')}>Home</a>
          </li>
          <li>
            <a onClick={() => navigate('/about')}>About</a>
          </li>
          <li className="dropdown">
            <span>Course</span>
            <div className="dropdown-content">
              <a onClick={() => navigate('/ppl-course')}>
                Private Pilot License (PPL)
              </a>
              <a onClick={() => navigate('/cpl-course')}>
                Commercial Pilot License (CPL)
              </a>
              <a onClick={() => navigate('/atpl-course')}>
                Airline Transport Pilot License (ATPL)
              </a>
              <div className="nested-dropdown">
                <span>Type Rating</span>
                <div className="nested-content">
                  <a onClick={() => navigate('/type-rating-abc')}>abc</a>
                  <a onClick={() => navigate('/type-rating-ancnncn')}>
                    ancnncn
                  </a>
                  <a onClick={() => navigate('/type-rating-other')}>Other</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a onClick={() => navigate('/enquiry')}>Enquiry</a>
          </li>
          <li>
            <a onClick={() => navigate('/')}>MainPage</a>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default AcademyHeader;
