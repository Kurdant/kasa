import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Arrow from '../img/Arrow_Kasa_2.png'

import Images from '../houses.json';

const BannerTest = () => {
    const { id } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        const images = Images.find((house) => house.id === id)?.pictures || [];
        setFilteredImages(images);
    }, [id]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
    };

    return (
        <div id="LogementBanner">
            <div className="BannerCliquable">
                <button onClick={handlePrev} className="LogementBannerButton previous"><img src={Arrow} alt="" className="Previous_Arrow"/></button>
                {filteredImages.map((picture, index) => (
                    <img key={index} src={picture} alt={`House ${id} - Image ${index + 1}`} style={{ display: index === currentIndex ? "block" : "none" }}/>
                ))}
                <button onClick={handleNext}className="LogementBannerButton after"><img src={Arrow} alt="" className="After_Arrow"/></button>
            </div>
        </div>
    );
};

export default BannerTest;
