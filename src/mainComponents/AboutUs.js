import React, { forwardRef, useState, useEffect, useCallback } from 'react';
import { aboutUsItemData, aboutUsTextFill } from '../data/aboutUsItemData';
import { withStyles } from '@mui/styles';
import styles from '../styles/AboutUsStyles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Slide } from '@mui/material';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

function AboutUs(props) {
	const { classes } = props;
	const [open, setOpen] = useState(false);
	const [buttonIndex, setButtonIndex] = useState(null);
	useEffect(() => {
		setButtonIndex(buttonIndex);
	}, [buttonIndex]);

	const handleClickOpen = useCallback((e) => {
		setButtonIndex(e.target.attributes.id.value);
		setOpen(true);
	}, []);

	const handleClose = useCallback(() => {
		setOpen(false);
	}, []);

	return (
		<div id='about-us'>
			<div className={classes.aboutUs}>
				<Typography className={classes.title} align='center'>
					ABOUT US
				</Typography>
				<Divider className={classes.divider} variant='middle' />

				<div className={classes.contentWrapper}>
					{aboutUsItemData.map((data, index) => (
						<React.Fragment key={index}>
							<Box
								id={index}
								onClick={handleClickOpen}
								className={classes.box}
								sx={{
									backgroundImage: `url(${aboutUsItemData[index].img})`,
								}}
							>
								<Typography
									className={classes.boxName}
									paragraph={true}
									variant='subtitle1'
								>
									{data.name}
								</Typography>
							</Box>
						</React.Fragment>
					))}

					<Box className={classes.gridThird}>
						<Typography
							className={classes.textArea}
							align='center'
							variant='body1'
							paragraph={true}
						>
							{aboutUsTextFill[0].TeamText}
						</Typography>
					</Box>

					<Box className={classes.gridFourth}>
						<Typography
							className={classes.textArea}
							align='center'
							variant='body1'
							paragraph={true}
						>
							{aboutUsTextFill[1].PlaceText}
						</Typography>
					</Box>
				</div>

				<Dialog
					id={buttonIndex}
					fullWidth
					maxWidth={'xl'}
					className={classes.dialog}
					open={open}
					TransitionComponent={Transition}
					keepMounted
					onClose={handleClose}
					aria-describedby='dialog-slide-about-us'
				>
					<DialogContent
						className={classes.dialogContent}
						sx={{
							backgroundImage: `url(${aboutUsItemData[buttonIndex].dialogPhoto})`,
						}}
					></DialogContent>
					<Box className={classes.text}>
						{aboutUsItemData[buttonIndex].dialogText}
					</Box>
				</Dialog>
			</div>
		</div>
	);
}
export default withStyles(styles)(AboutUs);
