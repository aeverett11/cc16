// Gallery.js
import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';

export function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export function Gallery({ teamMembers }) {
  return (
    <div className="gallery">
      {teamMembers.map((member) => (
        <Profile
          key={member.id}
          name={member.name}
          role={member.role}
          photo={member.photo}
        />
      ))}
    </div>
  );
}

Gallery.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

