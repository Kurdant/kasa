import React, { useState } from "react";
import housesData from '../houses.json';
import { Link } from "react-router-dom";

const GalleryComponents = () => {
    const [houses, setHouses] = useState(housesData);
    const displayedHouses = houses.slice();

    return (
        <div className="AllComponents">
            <div className="ListComponents">
                {displayedHouses.map((house) => (
                    <div key={house.id} className="Components">
                        <Link to={`/appartements/${house.id}`}>
                            <div className="ComponentTitle"><h2>{house.title}</h2></div>
                            <div className="ComponentImg"><img src={house.cover} alt={house.title} /></div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleryComponents;
