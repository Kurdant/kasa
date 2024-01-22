import React, { useState, useEffect } from 'react';
import Banner from '../components/FicheLogementBanner';
import houses from '../houses.json';
import { useParams } from 'react-router-dom';
import DropdownButtonLogement from '../components/DropDownLogement';
import HouseRating from '../components/RatingStar';
import DropDownLogemetnEquipement from '../components/DropDownLogemetnEquipement';


const Fiche_Logement = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    const selectedHouse = houses.find(h => h.id === id);
    setHouse(selectedHouse);
  }, [id]);

  if (!house) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Banner imageUrl={house.cover} title={house.title} />
      <div id='FicheLogementParents'>
        <div className='Part1And2Parent'>
          <div className='FicheLogement1Part'>
            <div className='FicheLogementTitle'>
              <h1>{house.title}</h1>
              <p>{house.location}</p>
            </div>
            <div className='FicheLogementTags'>
              {house.tags.map((tag, index) => (
                <div key={index} className='LogementTags'>
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='FicheLogement2Part'>
            <div className='FicheLogementNotes'>
              <HouseRating match={{ params: { id } }} />
            </div>
            <div className='FicheLogementNamePicture'>
              <p>{house.host.name}</p>
              <img src={house.host.picture} className='FicheLogementPFP' alt='Profile'></img>
            </div>
          </div>
        </div>
        <div id='logementDescription'>
          <DropdownButtonLogement />
          <DropDownLogemetnEquipement />
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Fiche_Logement;
