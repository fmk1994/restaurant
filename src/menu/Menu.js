import React from "react";
import Mains from "./menuComponents/Mains";
import Extras from "./menuComponents/Extras";
import Total from "./menuComponents/Total";
import { Provider } from "../contexts/MenuContext";
import data from "./data.json";
import { withStyles } from '@mui/styles';
import styles from './menuStyles/MenuStyles';
import  Image  from '../pictures/ikona.png';

function Menu(props) {
    const {classes} = props;
  return (
    <Provider>
      <div id="menu" className={classes.Menu}>
        <img src={Image} className={classes.Logo}/>
        <Mains meals={data.mains} />
        <aside className={classes.Aside}>
          <Extras type="Sides" items={data.sides} />
          <Extras type="Drinks" items={data.drinks} />
        </aside>
        <Total />
      </div>
    </Provider>
  );
}

export default withStyles(styles)(Menu); 