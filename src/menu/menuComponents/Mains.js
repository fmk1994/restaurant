import React from "react";

import Input from "./Input";
import { withStyles } from "@mui/styles";
import styles from "../menuStyles/MainsStyles";

function Mains(props) {
  const {classes, meals} = props;
  return (
    <section className={classes.Mains}>
      {meals.map((meal, index) => (
        <article className={classes.MenuItem} key={index}>
          <h3 className={classes.MainsName}>{meal.name}</h3>
<Input type="mains" name={meal.name} index={index} />
          <strong className={classes.mainsPrice}>${meal.price}</strong>
          <p className={classes.MainsDescription}>{meal.description}</p>
          
        </article>
      ))}
    </section>
  );
}
export default withStyles(styles)(Mains);