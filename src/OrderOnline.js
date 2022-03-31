import React from 'react';
import { withStyles } from '@mui/styles';
import styles from './styles/OrderOnlineStyles';

function OrderOnline(props) {
	const { classes } = props;
	return (
		<div id='order-online' className={classes.OrderOnline}>
			orders
		</div>
	);
}

export default withStyles(styles)(OrderOnline);
