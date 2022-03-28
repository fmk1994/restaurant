import React from 'react'
import {withStyles } from '@mui/styles'
import styles from "./styles/MenuStyles"


function Menu (props) {
 const {classes} = props;
    return (
     <div id="menu" className={classes.Menu}>menuuuuuuuu</div>
    )
  }

export default withStyles(styles) (Menu)