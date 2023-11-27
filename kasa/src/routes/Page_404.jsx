import { Link } from "react-router-dom";

const Page_404 = () => {
    return (
      <div className="Parents404">
        <div className="Number404">404</div>
        <div className="Text404"><p>Oups! La page que vous demandez n'existe pas.</p></div>
        <div className="HomeLink404"><Link to='/' className="HomeLink404Link"><p>Retourner sur la page d'accueil</p></Link></div>
      </div>
    )
  };
  
  export default Page_404;