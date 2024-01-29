import React, { useState, useEffect } from 'react';
import Banner from '../components/FicheLogementBanner';
import houses from '../houses.json';
import { useParams } from 'react-router-dom';
import HouseRating from '../components/RatingStar';
import Page_404 from './Page_404';
import DropdownButton from '../components/DropdownButton';


const Fiche_Logement = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    const selectedHouse = houses.find(h => h.id === id);
    setHouse(selectedHouse);
  }, [id]);

  if (!house) {
    return <Page_404/>;
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
        <div className='DropDownParents'>
          <DropdownButton Title="Equipements" Text={house.description} className="DropDown_Fiche"/>
          </div>
          <div className='DropDownParents'>
          <DropdownButton Title="Description" equipement={house.equipments} className="DropDown_Fiche"/>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Fiche_Logement;
