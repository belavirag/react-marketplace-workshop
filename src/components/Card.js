import React from "react";

const Button = (props) => {
  const { children } = props;
  return (
    <button className="btn btn-info shadow" {...props}>
      {children}
    </button>
  );
};

const Card = ({ title, description, image, contact }) => {
  return (
    <div className="col mb-4">
      <div className="card">
        <img src={image} alt={title} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Contact: ***</p>
          <div className="text-center">
            <Button>Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
