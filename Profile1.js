// Profile.js
import React from 'react';
import PropTypes from 'prop-types';

export function Profile({ name, role, photo }) {
  return (
    <div className="profile">
      <img src={photo} alt={`${name}'s photo`} className="profile-photo" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-role">{role}</p>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Profile;
