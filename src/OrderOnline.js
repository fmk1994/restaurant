import React from 'react';
import {withStyles } from '@mui/styles';
import styles from "./styles/OrderOnlineStyles";

function OrderOnline (props) {
 const {classes} = props;
    return (
     <div id="zamow-online" 
     className={classes.OrderOnline}>zamowienia</div>
    )
  }

export default withStyles(styles) (OrderOnline)