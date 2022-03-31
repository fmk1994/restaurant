import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import styles from './styles/AboutUsStyles';
import { withStyles } from '@mui/styles';
import aboutUsItemData from './data/aboutUsItemData';
import Comments from './comments/Comments';
import ContactImage from './pictures/contactimage.jpg'
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

function AboutUs(props) {
	const { classes} = props;
	const [open, setOpen] = React.useState(false);
	const [buttonIndex, setButtonIndex] = React.useState(0);
	React.useEffect(() => {
		setButtonIndex(buttonIndex);
		console.log(buttonIndex);
	}, [buttonIndex]);

	const handleClickOpen = (e) => {
		setButtonIndex(e.target.attributes.id.value);
		setOpen(true);
		console.log(e.target.attributes);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div id='about-us' className={classes.AboutUs}>
			<Box className={classes.Box}
			sx={{backgroundImage: `url(${ContactImage})`,}}>
				<Typography
							className={classes.Paragraph}
							paragraph={true}
							variant='subtitle1'
						>
							Contact
						</Typography>
			</Box>
			{aboutUsItemData.map((data, index) => (
				<div
				 key={index}>
					<Box
						id={index}
						onClick={handleClickOpen}
						className={
							data.index === 0
								? `${classes.Box} ${classes.Team}`
								: `${classes.Box} ${classes.Place}`
						}
					>
						<Typography
							className={classes.Paragraph}
							paragraph={true}
							variant='subtitle1'
						>
							{data.name}
						</Typography>
					</Box>
				</div>
			))}
<Box className={classes.CommentsWrapper}>
<Comments
        
        currentUserId="1"
      />
			</Box>
			<Dialog
				id={buttonIndex}
				fullScreen
				className={classes.Dialog}
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogTitle>{aboutUsItemData[buttonIndex].dialogTitle}</DialogTitle>
				<DialogContent className={classes.DialogContent}>
					<Box
						className={classes.BoxOpened}
						sx={{
							backgroundImage: `url(${aboutUsItemData[buttonIndex].dialogPhoto})`,
						}}
					></Box>
					<Box className={classes.Text}>
						{aboutUsItemData[buttonIndex].dialogText}
					</Box>
				</DialogContent>
			</Dialog>
		</div>
	);
}
export default withStyles(styles)(AboutUs);
