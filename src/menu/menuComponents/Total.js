import React, { useContext } from 'react';

import data from '../data';
import { withStyles } from '@mui/styles';
import styles from '../menuStyles/TotalStyles';
import { MenuContext } from '../../contexts/MenuContext';
import { TotalPriceContext } from '../../contexts/TotalPriceContext';

function Total(props) {
	const { classes } = props;
	const [items] = useContext(MenuContext);

	const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);

	React.useEffect(() => {
		const totalPrice = Object.keys(items).reduce((acc, curr) => {
			const [group, item] = curr.split('-');

			const amount = items[curr] * data[group][item].price;

			return acc + amount;
		}, 0);
		setTotalPrice(totalPrice);
	}, [items]);
  
	return (
		<>
			<div className={classes.Total}>
				<span className={classes.TotalTitle}>Total:</span>
				<span className={classes.TotalPrice}>${totalPrice}</span>
			</div>
		</>
	);
}

export default withStyles(styles)(Total);
