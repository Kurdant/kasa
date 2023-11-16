import React from "react"
import Logoimg from '../img/LOGO.png'
import {Link} from "react-router-dom";


function Logo(){
    return(
        <div>
            <Link to="/"><img src={Logoimg} alt="Logo Kasa" className="NavbarLogo"/></Link>
        </div>
    )
};

export default Logo