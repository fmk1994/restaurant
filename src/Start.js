import React from 'react';
import {withStyles} from '@mui/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import styles from './styles/StartStyles';
import Logoicon from './pictures/ikona.png';

function Start(props) {

  const{classes} = props;
  const buttons = ['O nas', 'Menu', 'Galeria', 'Kontakt'];
    return (
  
    <Paper className={classes.mainPage} id="top">
      <div className={classes.logoArea}>
      <img className={classes.logo} src={Logoicon}/>
      </div>
      <div className={classes.buttonsArea}>
        {buttons.map((button)=>(
          <Button
          key={button}
        className={classes.button}
        sx={{color:"black"}} variant="contained"
        >{button}</Button>
        ))}
         <Button 
         key="order_online"
        className={classes.mainButtons}
        variant="contained"
        >Zamów Online
        </Button>
        <Button 
        key="bookTable"
        className={classes.mainButtons}
        variant="contained"
        >Zarezerwuj stolik
        </Button>
      </div>
    </Paper>

    )

}

export default withStyles(styles) (Start);