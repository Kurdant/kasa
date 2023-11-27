import React, { useState } from 'react';

const DropdownButton = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className='DropDownTexte'><p>{props.Title}</p></div>
      <div className="dropdown"> 
        <button onClick={toggleDropdown} className="dropdown-button">
          {selectedOption ? selectedOption : '>'}
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <div
              className="dropdown-option"
              onClick={() => handleOptionClick(props.Text)}
            >
              <p>{props.Text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownButton;
