import React, { useState } from "react";
import Images from '../houses.json';

const BannerTest = () => {
    // Remplacez "maisonId" par l'ID spécifique que vous souhaitez afficher
    const maisonId = "c67ab8a7";
    // Filtrer les images en fonction de l'ID de la maison
    const filteredImages = Images.filter((house) => house.id === maisonId)[0]?.pictures || [];

    return (
        <div>
            <div>
                {filteredImages.map((picture, index) => (
                    <img key={index} src={picture} alt={`House ${maisonId} - Image ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default BannerTest;
