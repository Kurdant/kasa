import React from "react";
import Components from "./GalleryComponents";
import Components2 from "./secondGalleryComponents";

function Gallery () {
    return(
        <div className="AllComponents">
            <div className="lineComponents">
                <Components/>
                <Components2/>
            </div>
        </div>
    )
}

export default Gallery