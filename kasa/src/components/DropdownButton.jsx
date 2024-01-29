import React, { useState } from 'react';
import Arrow from '../img/Arrow_Kasa.png';

const DropdownButton = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
      <div className="dropdown-header">
        <span>{props.Title}</span>
        <div className={`arrow ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
          <img src={Arrow} alt="" />
        </div>
      </div>
      <div className="dropdown-content">
        {props.Text && (
          <p>{props.Text}</p>
        )}
        {props.equipement && (
          <ul>
            {props.equipement.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownButton;
