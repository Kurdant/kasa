import React, { useState } from 'react';

const DropdownButton = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownClose, setIsDropdownClose] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDropdownClose(false);
  };

  const toggleDropdownClose = () => {
    setIsDropdownClose(!isDropdownClose);
    setIsDropdownOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    setIsDropdownClose(false);
  };

  return (
    <div className="dropdown-container">
      <div className='DropDownTexte'><p>{props.Title}</p></div>
      <div className={`dropdown ${isDropdownOpen ? 'slideDown' : ''}`}> 
        <button onClick={isDropdownClose ? toggleDropdown : toggleDropdownClose} className={`dropdown-button ${isDropdownOpen ? 'rotate180' : ''}`}>
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
