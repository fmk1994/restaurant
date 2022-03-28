import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import styles from './styles/AboutUsStyles';
import { withStyles} from '@mui/styles';




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide_copy(props) {

    const{classes} = props;


    const [open0, setOpen0] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    
  const handleClickOpen0 = ()=> {
    setOpen0(true);
 
  };
  const handleClickOpen1 = () => {
    setOpen1(true);

  };

  const handleClose = (e) => {
    setOpen0(false);
    setOpen1(false);
  };

  return (
      <div id="o-nas" className={classes.Wrapper}>


    <div>
        <Box 
        onClick={handleClickOpen0}
        key={"team"}
       className={`${classes.Box} ${classes.Team}`}
       >
         <Typography 
        className={classes.Paragraph}
         paragraph={true}
         variant="subtitle1">Team
         </Typography>
         </Box>

      <Dialog
      fullScreen
      className={classes.Dialog}
        open={open0}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</DialogTitle>
        <DialogContent className={classes.DialogContent}>
        <Box className={classes.TeamBox}></Box>
        <Box className={classes.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>

      </Dialog>
    
    </div>

    <div>
        <Box 
        onClick={handleClickOpen1}
        key="Place"
       className={`${classes.Box} ${classes.Place}`}
       >

         <Typography 
        className={classes.Paragraph}
         paragraph={true}
         variant="subtitle1">Restauracja
         </Typography>
         </Box>

      <Dialog
      fullScreen
      className={classes.Dialog}
        open={open1}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</DialogTitle>
        <DialogContent className={classes.DialogContent}>
        <Box className={classes.PlaceBox}></Box>
        <Box className={classes.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>

      </Dialog>
    
    </div>

 </div>
  );
}
export default withStyles(styles)(AlertDialogSlide_copy);