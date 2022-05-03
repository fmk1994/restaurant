import React from "react";

import Input from "./Input";
import { withStyles } from "@mui/styles";
import styles from "../menuStyles/ExtrasStyles";

function Extras(props) {
  const {classes, type, items} = props;
  return (
    <section className={classes.Extras}>
      <h2 className={classes.ExtrasHeading}>{type}</h2>
      {items.map((item, index) => (
        <article className={classes.MenuItem} key={index}>
          <div className={classes.ExtrasName}>{item.name}</div>
<Input type={type} name={item.name} index={index} />
          <strong className={classes.ExtrasPrice}>${item.price}</strong>
        </article>
      ))}
    </section>
  );
}
export default withStyles(styles)(Extras)