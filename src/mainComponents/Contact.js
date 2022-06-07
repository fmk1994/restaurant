import React from 'react';
import { withStyles } from '@mui/styles';
import styles from '../styles/ContactStyles';
import Map from '../data/Map';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ReservationForm from './ReservationForm';

function Contact(props) {
	const { classes } = props;

	return (
		<div id='contact' className={classes.contact}>
			<Typography variant='h1' align='center' className={classes.title}>
				CONTACT
			</Typography>
			<Divider
				sx={{ width: '50vw', bgcolor: 'brown', marginBottom: '5rem' }}
				variant='middle'
			/>
			<div className={classes.contentWrapper}>
				<div className={classes.reservationForm}>
					<ReservationForm />
				</div>
				<div className={classes.mapContainer}>
					<Map />
				</div>
				<Box className={classes.hours}>
					<Typography className={classes.textArea}>
						We{`'`}re open from <mark>Monday</mark> to <mark>Sunday</mark>.
						Everyday from <mark>16</mark> to <mark>23</mark>.
					</Typography>
					<Typography className={classes.textArea}>
						If you have questions - call <mark>+48-000-000-000</mark> or ask us
						via email <mark>thegoodtaste@office123.com</mark>
					</Typography>
				</Box>
				<Box className={classes.text}>
					<Typography className={classes.textArea}>
						Please use the <mark>booking form</mark>. Use <mark>Notes</mark> to
						let us know if you have any <mark>allergies</mark>.
					</Typography>
				</Box>
			</div>
		</div>
	);
}
export default withStyles(styles)(Contact);
