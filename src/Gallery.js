import React from 'react';
import Arrow from './pictures/arrow.png';
import {useState} from 'react';
import { withStyles } from "@mui/styles";
import styles from './styles/GalleryStyles';
import galleryItemData from "./components/galleryItemData";



function Gallery(props) {
const {classes} = props;

const [oIndex, setIndex] = useState();

const handleClick = (index) =>{
setIndex(index);

}
  return (
 

    <div className={classes.gallery} id="galeria">
      <div className={classes.textArea}>
        <span>GALERIA ZDJĘĆ</span>
        <div className={classes.galleryIcon}>
        <img className={classes.arrow} src={Arrow}/>
        </div>
        <div className={classes.bottomBox}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
      </div>
      <div
    className={classes.galleryImages}>
      {galleryItemData.map((item, index) => (
         <div id={item.img}
          className={oIndex===index? `${classes.active} ${classes.panel}`: classes.panel}
          style={{backgroundImage:`url(${item.img})`}}
          alt={item.title}
          onClick={()=>handleClick(index)}
          key={item.img}
          >
          </div>
      
      ))}
      </div>

      
    </div>
  
  )}


export default withStyles(styles) (Gallery);


//react useCallback