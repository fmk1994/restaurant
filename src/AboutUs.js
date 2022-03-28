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
import { withStyles} from '@mui/styles';
import aboutUsItemData from './components/aboutUsItemData';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AboutUs(props) {

    const{classes} = props;


    const [open, setOpen] = React.useState(false);
    

  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div id="o-nas" className={classes.Wrapper}>

{aboutUsItemData.map((element, index)=>(
    <div>
        <Box 
        onClick={handleClickOpen}
        key={element.index}
       className={index===0?`${classes.Box} ${classes.Team}`:`${classes.Box} ${classes.Place}`}
       >
         <Typography 
        className={classes.Paragraph}
         paragraph={true}
         variant="subtitle1">{element.name}
         </Typography>
         </Box>

      <Dialog
      fullScreen
      className={classes.Dialog}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</DialogTitle>
        <DialogContent className={classes.DialogContent}>
        <Box className={index===0?classes.TeamBox:classes.PlaceBox}></Box>
        <Box className={classes.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>

      </Dialog>
    
    </div>
))}
 </div>
  );
}
export default withStyles(styles)(AboutUs);