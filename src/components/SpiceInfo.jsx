import React from 'react';

const SpiceInfo = ({spice}) => {
  if (!spice) {
    return <div>Loading...</div>; // Handle case when spice data is not yet loaded
  }

  return (
    <div className="spice-info-container">
      <h1>{spice.spiceName}</h1>
      <div className="spice-container">
        <img
          src={spice.spicePhoto}
          alt={spice.spiceName}
          className="spice-photo"
        />
        <div className="spice-details">
          <div className="section">
            <h2>{spice.spiceName} Description:</h2>
            <p>{spice.description}</p>
          </div>

          <div className="section">
            <h2>Botanical Name / Scientific Name:</h2>
            <p>
              <strong>{spice.botanicalName}</strong>
            </p>
          </div>

          <div className="section">
            <h2>Appearance:</h2>
            <ol>
              {spice.appearance.map((appearance, index) => (
                <li key={index}>
                  <strong>{appearance.split(':')[0]}:</strong>
                  {appearance.split(':')[1]}
                </li>
              ))}
            </ol>
          </div>

          <div className="section">
            <h2>Flavor and Aroma:</h2>
            <ol>
              {spice.flavorandaroma.map((flavorandaroma, index) => (
                <li key={index}>
                  <strong>{flavorandaroma.split(':')[0]}:</strong>{' '}
                  {flavorandaroma.split(':')[1]}
                </li>
              ))}
            </ol>
          </div>

          <div className="section">
            <h2>Common Uses:</h2>
            <ol>
              {spice.use.map((use, index) => (
                <li key={index}>
                  <strong>{use.split(':')[0]}:</strong> {use.split(':')[1]}
                </li>
              ))}
            </ol>
          </div>

          <div className="section">
            <h2>Ingredient Profile:</h2>
            <ol>
              {spice.ingredients.map((ingredients, index) => (
                <li key={index}>
                  <strong>{ingredients.split(':')[0]}:</strong>{' '}
                  {ingredients.split(':')[1]}
                </li>
              ))}
            </ol>
          </div>
          <div className="section">
            <h2>Health Benefits:</h2>
            <ol type="1">
              {spice.benefits.map((benefits, index) => (
                <li key={index}>
                  <strong>{benefits.split(':')[0]}:</strong>
                  {benefits.split(':')[1]}
                </li>
              ))}
            </ol>
          </div>
          <div className="section">
            <h2>Storage Tips:</h2>
            <ul>
              {spice.storage.map((storage, index) => (
                <li key={index}>{storage}</li>
              ))}
            </ul>
          </div>
          <div className="section">
            <h2>Cultural Significance:</h2>
            <p>{spice.p}</p>
            <ul>
              {spice.significance.map((significance, index) => (
                <li key={index}>
                  <strong>{significance.split(':')[0]}:</strong>
                  {significance.split(':')[1]}
                </li>
              ))}
            </ul>
          </div>
          <div className="section">
            <p>{spice.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiceInfo;
