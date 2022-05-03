import React from 'react';
import { useState } from 'react';
import { withStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import styles from '../styles/GalleryStyles';
import galleryItemData from '../data/galleryItemData';
import useToggleState from '../hooks/useToggleState';
function Gallery(props) {
	const { classes } = props;

	const [photoIndex, setIndex] = useState();
	const [toggleActive, setToggleActive] = useToggleState();
	const handleClick = (index) => {
		setIndex(index);
		setToggleActive(!toggleActive);
	};
	return (
		<div className={classes.gallery} id='gallery'>
			<div className={classes.title}>
			<Typography
					variant='h1'
					align='center'
					sx={{ letterSpacing: '0.5rem', fontSize:{xs:"3rem", md:"4rem"}, display:{xl:"none"} }}
				>
					GALLERY
				</Typography>
				<Divider
					sx={{ width: '50vw', bgcolor: 'brown', marginBottom: {xs:'5px', sm:'20px'}, display:{xl:"none"} }}
					variant='middle'
				/>
				</div>
			{galleryItemData.map((item, index) => (
				<div
					id={item.img}
					className={`${classes.panel}
							${photoIndex === index && toggleActive && classes.active}`}
					style={{ backgroundImage: `url(${item.img})` }}
					alt={item.title}
					onClick={() => handleClick(index)}
					key={item.img}
				></div>
			))}
		</div>
	);
}

export default withStyles(styles)(Gallery);

//react useCallback
