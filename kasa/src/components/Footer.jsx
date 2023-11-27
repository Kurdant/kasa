import React from "react";
import {Link} from "react-router-dom";
import LogoFooter from '../img/LogoFooter.png'

function FooterElement() {
    return(
        <div id="FooterParent">
            <div className="FooterChild">
                <div className="FooterLogo">
                    <img src={LogoFooter} alt="" />
                </div>
                <div className="FooterCopyright">
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default FooterElement