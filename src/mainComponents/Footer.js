import * as React from 'react';
import { withStyles } from '@mui/styles';
import styles from '../styles/FooterStyles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

function Footer(props) {
	const { classes } = props;

	return (
		<Box className={classes.box} position='fixed'>
				<IconButton href='//facebook.com/thegoodtasterestaurant123123'>
					<FacebookIcon />
				</IconButton>
				<IconButton href='//instagram.com/thegoodtasterestaurant123123'>
					<InstagramIcon />
				</IconButton>


		</Box>
	);
}
export default withStyles(styles)(Footer);
