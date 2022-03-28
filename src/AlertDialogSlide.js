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
import aboutUsItemData from './components/aboutUsItemData';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide(props) {

    const{classes} = props;


  const [open, setOpen] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState(undefined)


  const handleClickOpen = (index) => {
    setSelectedImg(index);
    setOpen(true);
    console.log(index)
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  return (
      <div className={classes.Wrapper}>

{aboutUsItemData.map((element, index) => (
    <div>
        <Box 
        onClick={()=>handleClickOpen(index)}
        index={index}
        key={selectedImg}
       className={element.name==="Team"?
       `${classes.Box} ${classes.Team}`
       :
       `${classes.Box} ${classes.Place}`}
       >

         <Typography 
        className={classes.Paragraph}
         paragraph={true}
         variant="subtitle1">{element.name}
         </Typography>
         </Box>

      <Dialog
      index={index}
      fullWidth={true}
      className={classes.Dialog}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{element.title}</DialogTitle>
        <DialogContent>
        <h5>{index}MIEJSCE NA FOTO {element.name}</h5>
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
export default withStyles(styles)(AlertDialogSlide);