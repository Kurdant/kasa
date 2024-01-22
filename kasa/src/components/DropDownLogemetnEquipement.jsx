import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import houses from '../houses.json';
import Arrow from '../img/Arrow_Kasa.png'


const DropdownButtonEquipement = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [equipments, setEquipments] = useState([]);
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
          setEquipments(houseData.equipments || []);
        }
      } catch (error) {
        console.error('Error fetching house data:', error);
      }
    };

    fetchData();
  }, [houseId]);

  return (
    <div className={`DropdownOther dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
      <div className="dropdown-header">
        <span>Équipements</span>
        <div className={`arrow ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
          <img src={Arrow} alt="" />
        </div>
      </div>
      <div className="dropdown-content">
        <p>{equipments}</p>
      </div>
    </div>
  );
};


export default DropdownButtonEquipement;
