import React from "react";
import PropTypes from "prop-types";
import Momemt from "react-moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => (
  <div>
    <h3 className="text-dark">{school}</h3>
    <p>
      <Momemt format="YYYY/MM/DD">{from}</Momemt> -{" "}
      {!to ? "Now" : <Momemt format="YYYY/MM/DD">{to}</Momemt>}
    </p>
    <p>
      <strong>Position:</strong>
      {degree}
    </p>
    <p>
      <strong>Field Of Study:</strong>
      {fieldofstudy}
    </p>
    <p>
      <strong>Description:</strong>
      {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
