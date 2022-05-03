import React, { useContext, useState } from 'react';
import Mains from '../menu/menuComponents/Mains';
import Extras from '../menu/menuComponents/Extras';
import Total from '../menu/menuComponents/Total';
import {MenuProvider} from '../contexts/MenuContext';
import data from '../menu/data.json';
import { withStyles } from '@mui/styles';
import styles from '../menu/menuStyles/MenuStyles';
import Image from '../pictures/ikona.png';
import Button from '@mui/material/Button';
import { Link} from 'react-scroll';


function Menu(props) {
	const { classes} = props;




	return (
		<>
			<div id='menu' className={classes.Menu}>
				<img src={Image} className={classes.Logo} />
				<Mains meals={data.mains} />
				<aside className={classes.Aside}>
					<Extras type='Sides' items={data.sides} />
					<Extras type='Drinks' items={data.drinks} />
				</aside>
			 <Total/>
			</div>
			
				<Link
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					activeClass='active'
					to='menu'
				>
					<Button id='order-button' className={classes.button}  sx={{ marginTop: '10rem' }}>
						MAKE AN ORDER
					</Button>
				</Link>
			

			
		</>
	);
}

export default withStyles(styles)(Menu);
