import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import houses from '../houses.json';
import Arrow from '../img/Arrow_Kasa.png'

const DropdownButtonLogement = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [description, setDescription] = useState('');
  const location = useLocation();
  const houseId = location.pathname.split('/').pop(); // Obtient l'ID de la dernière partie de l'URL

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const houseData = houses.find(h => h.id === houseId);

        if (houseData) {
          setDescription(houseData.description);
        }
      } catch (error) {
        console.error('Error fetching house data:', error);
      }
    };

    fetchData();
  }, []);
  
    return (
      <div className={`DropdownOther dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
        <div className="dropdown-header">
          <span>Description</span>
          <div className={`arrow ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="dropdown-content">
          <p>{description}</p>
        </div>
      </div>
    );
  };
  

export default DropdownButtonLogement;
