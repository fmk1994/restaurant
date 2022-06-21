import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import styles from '../styles/GalleryStyles';
import galleryItemData from '../data/galleryItemData';
type GalleryProps = {
	classes: Record<string, string>;
};
const Gallery: React.FC<GalleryProps> = ({ classes }: GalleryProps) => {
	const [photoIndex, setIndex] = useState<number | undefined>();
	const [toggleActive, setToggleActive] = useState(false);

	const handleClick = (
		e: React.MouseEvent<Element, MouseEvent>,
		index: number | undefined
	) => {
		if ((e.target as Element).className.includes('active')) {
			setToggleActive(!toggleActive);
			setIndex(undefined);
		} else {
			setIndex(index);
		}
	};

	return (
		<div className={classes.gallery} id='gallery'>
			<div className={classes.title}>
				<Typography
					variant='h1'
					align='center'
					sx={{
						letterSpacing: '0.5rem',
						fontSize: { xs: '3rem', md: '4rem' },
						display: { xl: 'none' },
					}}
				>
					GALLERY
				</Typography>
				<Divider
					sx={{
						width: '50vw',
						bgcolor: 'brown',
						marginBottom: { xs: '5px', sm: '20px' },
						display: { xl: 'none' },
					}}
					variant='middle'
				/>
			</div>
			{galleryItemData.map((item, index) => (
				<div
					id={item.img}
					className={`${classes.panel} ${
						photoIndex === index && classes.active
					}`}
					style={{ backgroundImage: `url(${item.img})` }}
					onClick={(e) => handleClick(e, index)}
					key={item.img}
				></div>
			))}
		</div>
	);
};
export default withStyles(styles)(Gallery);
