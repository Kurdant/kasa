import Banner from '../components/FicheLogementBanner';
import randomImage from '../img/AboutUsBannerImg.png'
import houses from '../houses.json'

const Fiche_Logement = () => {
  const [house, setHouse] = useState(null);

  // learn UseEffect, useState, UseNavigate

  // UseNavigate from react routeur, learn how to get an id, how to use UseNavigate 

  // 1st step, create a useEffect that will trigger on component load
  // 2cnd step, get id if the house on the url 
  // 3rd step, filter houses data in the useEffect to get only the house you need
  // 4ft step, useState to set the current house in the component
  // 5ft step, If url doesnt exist => 404
  // bonus step, display loadbar 

  return (
    <div>
      <div id='FicheLogementParents'>
        <div className='FicheLogement1Part'>
          <div className='FicheLogementTitle'>
            <h1>title</h1>
            <p>Subtitle</p>
          </div>
          <div className='FicheLogementTagsParents'>
            <div className='FicheLogementTags'>
            <p>tags</p>
              </div>
            <div className='FicheLogementTags'>
              <p>tags</p>
            </div>
            <div className='FicheLogementTags'>
              <p>tags</p>
            </div>
          </div>
        </div>
        <div className='FicheLogement2Part'>
          <div className='FicheLogementNotes'>
            <p>note</p>
          </div>
          <div className='FicheLogementNamePicture'>
            <p>name and picture</p>
            <img src={randomImage} className='FicheLogementPFP' alt='fiche des logements'></img>
          </div>
        </div>
        <div><p>description</p></div>
        <div><p>Equipements</p></div>
      </div>
    </div>
  )
};

export default Fiche_Logement;