import React from 'react';
import Mains from '../menu/menuComponents/Mains';
import Extras from '../menu/menuComponents/Extras';
import Total from '../menu/menuComponents/Total';
import data from '../menu/data.json';
import { withStyles } from '@mui/styles';
import styles from '../styles/MenuStyles';
import Image from '../pictures/ikona.png';


function Menu(props) {
	const { classes } = props;

	return (
			<div id='menu' className={classes.Menu}>
				<img src={Image} className={classes.Logo} />
				<Mains type='Mains' meals={data.mains} />
				<aside className={classes.Aside}>
					<Extras type='Sides' items={data.sides} />
					<Extras type='Drinks' items={data.drinks} />
				</aside>
				<Total  />
			</div>
	);
}

export default withStyles(styles)(Menu);
