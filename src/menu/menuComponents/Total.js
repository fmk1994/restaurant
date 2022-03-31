import React, { useContext } from "react";
import { Context } from "../../contexts/MenuContext";
import data from "../data";
import { withStyles } from "@mui/styles";
import styles from '../menuStyles/TotalStyles';

function Total(props) {
  const {classes} = props;
  const [items] = useContext(Context);

  const totalPrice = Object.keys(items).reduce((acc, curr) => {
    const [group, item] = curr.split("-");
    const amount = items[curr] * data[group][item].price;
    return acc + amount;
  }, 0);

  return (
    <div className={classes.Total}>
      <span className={classes.TotalTitle}>Total:</span>
      <span className={classes.TotalPrice}>${totalPrice}</span>
    </div>
  );
}

export default withStyles(styles) (Total);