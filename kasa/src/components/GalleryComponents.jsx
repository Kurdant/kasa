import React, { useState } from "react";
import housesData from '../houses.json';
import { Link } from "react-router-dom";


const GalleryComponents = () => {
    const [houses, setHouses] = useState(housesData);
    const displayedHouses = houses.slice(0, 3);
    return (
        <div className="AllComponents">
            <div className="ListComponents">
          {displayedHouses.map((house) => (
            <Link to='/Fiche_Logement'>
            <div key={house.id} className="Components">
              <div className="ComponentTitle"><h2>{house.title}</h2></div>
              <div className="ComponentImg"><img src={house.cover} alt={house.title} /></div>
            </div>
            </Link> 
          ))}
          </div>
        </div>
      );
    }


export default GalleryComponents; 

// className="InsideComponents"
// className="Components"