/* eslint-disable */
import {useNavigate} from 'react-router-dom';
import SpiceImage from '../images/spices.jpg'; // Adjust the path based on your project structure

const OurProduct = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="our-products">
        <h1>Our Product</h1>
        <p>Click on image for more details</p>

        <div className="product-container">
          <div className="product-box">
            <a
              onClick={() => {
                navigate('/spiceses');
              }}
            >
              <img src={SpiceImage} alt="Spices" />
            </a>
            <h3>
              <a
                onClick={() => {
                  navigate('/spiceses');
                }}
              >
                Spices
              </a>
            </h3>
            <p>High-quality spices sourced from around the world.</p>
          </div>
          {/* Add more product boxes here */}
        </div>
      </div>
    </>
  );
};

export default OurProduct;
