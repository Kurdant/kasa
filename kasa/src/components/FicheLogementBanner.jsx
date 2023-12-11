import Images from '../houses.json'
import React, { useState } from "react";

const FicheLogementBanner = () => {
    const [ImagesHouses] = useState(Images);

    return (
        <div>
            <div>
                {ImagesHouses.map((house) => (
                    <div key={house.id}>
                        {house.pictures.map((picture, index) => (
                            <img key={index} src={picture} alt={`House ${house.id} - Image ${index + 1}`} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FicheLogementBanner;
