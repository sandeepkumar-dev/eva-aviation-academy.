/* eslint-disable */
import {useNavigate} from 'react-router-dom';
import '../styles/AcademyHeader.css';
const AcademyHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="header-1">
          <img src="./images/logo.jpg" alt="" />
          <h1>Eva Aviation Academy</h1>
        </div>
        <ul>
          <a
            onClick={() => {
              navigate('/academyhome');
            }}
          >
            Home
          </a>
          <a
            onClick={() => {
              navigate('/about');
            }}
          >
            About
          </a>
          <a>
            <div class="dropdown">
              <span
                onClick={() => {
                  navigate('/course');
                }}
              >
                Course
              </span>
              <div class="dropdown-content">
                <a
                  onClick={() => {
                    navigate('/ppl-course');
                  }}
                >
                  Private Pilot License (PPL)
                </a>
                <a
                  onClick={() => {
                    navigate('/cpl-course');
                  }}
                >
                  {' '}
                  Commercial Pilot License (CPL)
                </a>
                <a
                  onClick={() => {
                    navigate('/atpl-course');
                  }}
                >
                  Airline Transport Pilot License (ATPL)
                </a>
              </div>
            </div>
          </a>
          <a
            onClick={() => {
              navigate('/enquiry');
            }}
          >
            Enquiry
          </a>
          <a
            onClick={() => {
              navigate('/');
            }}
          >
            MainPage
          </a>
        </ul>
      </div>
      <hr />
    </>
  );
};
export default AcademyHeader;
