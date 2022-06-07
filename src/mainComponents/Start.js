import React from 'react';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import styles from '../styles/StartStyles';
import Logoicon from '../pictures/ikonastronastartowa.png';
import { Link, animateScroll as scroll } from 'react-scroll';

function Start(props) {
	const { classes } = props;
	return (
		<Paper id='top' className={classes.mainPage}>
			<div className={classes.logoArea}>
				<img alt='logo' className={classes.logo} src={Logoicon} />
			</div>
			<div className={classes.buttonsArea}>
				<Link
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					activeClass='active'
					to={'menu'}
				>
					<Button
						key='order_online'
						className={classes.mainButtons}
						variant='contained'
					>
						Order Online
					</Button>
				</Link>
				<Button
					key='bookTable'
					className={classes.mainButtons}
					variant='contained'
					onClick={() => scroll.scrollToBottom()}
				>
					Reservation
				</Button>
			</div>
		</Paper>
	);
}

export default withStyles(styles)(Start);
