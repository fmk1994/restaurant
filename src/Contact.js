import React from 'react'
import {withStyles} from '@mui/styles';
import styles from './styles/ContactStyles';
import Map from "./components/Map";
import {useNavigate} from "react-router-dom";
import RestaurantBydgoszcz from './pictures/bydgoszcz.jpg';
import RestaurantPoznan from './pictures/poznan.jpg';
  
function Contact (props){
  let navigate = useNavigate();
  const routeChangeBdg=()=>{
    let path = 'bydgoszcz';
    navigate(path)
  }
  const routeChangePzn=()=>{
    let path = 'poznan';
    navigate(path)
  }
  const{classes} = props;

    return (
      <div id="kontakt" className={classes.contact}>
      <div className={classes.textArea}>
        <div className={classes.contactData}>
      <ul className={classes.openingHours}>
        <li style={{marginBottom:"1.5rem", fontWeight:800}}>Godziny otwarcia:</li>
        <li>Poniedziałek 16-22</li>
        <li>Wtorek 11-22</li>
        <li>Środa 11-22</li>
        <li>Czwartek 11-22</li>
        <li>Piątek 11-22</li>
        <li>Sobota 11-20</li>
        <li>Niedziela 11-20</li>
      </ul>
      <ul className={classes.adress}>
      <li>Restauracja Good Taste</li>
      <li>ul. Legionów 102A/32</li>
      <li>81-472 Gdynia</li>
      <li>tel: 000-000-000</li>
      <li>e-mail: .................................</li>
      </ul>  
       </div>
      <div className={classes.anotherRestaurant}>
        ZAPRASZAMY RÓWNIEŻ DO NASZYCH RESTAURACJI W INNYCH MIASTACH:
        <div className={classes.imgs}>

          <div>
      <img 
onClick={routeChangeBdg}
src={RestaurantBydgoszcz}/>
<span>Bydgoszcz</span>
          </div>
      <div>
<img
onClick={routeChangePzn} 
src={RestaurantPoznan}/>
<span>Poznań</span>
      </div>
        </div>
      </div>
       </div>
       <div className={classes.mapContainer}><Map /></div>
      
    
    
    </div>
    )
  
}

export default withStyles(styles) (Contact);