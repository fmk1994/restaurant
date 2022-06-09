import { forwardRef, useState, useEffect, useCallback } from 'react';
import { aboutUsItemData, aboutUsTextFill } from '../data/aboutUsItemData';
import { withStyles } from '@mui/styles';
import styles from '../styles/AboutUsStyles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
const Transition = forwardRef(function Transition(props, ref) {
    return direction;
    'up';
    ref = { ref };
    { }
}, ...props);
/>;;
;
function AboutUs(props) {
    const { classes } = props;
    const [open, setOpen] = useState(false);
    const [buttonIndex, setButtonIndex] = useState(0);
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
    return id = 'about-us' >
        className;
    {
        classes.AboutUs;
    }
     >
        className;
    {
        classes.title;
    }
    align = 'center' >
        ABOUT;
    US
        < /Typography>
        < Divider;
    className = { classes, : .divider };
    variant = 'middle' /  >
        className;
    {
        classes.ContentWrapper;
    }
     >
        { aboutUsItemData, : .map((data, index) => key = { index } >
                id, { index }, onClick = { handleClickOpen }, className = { classes, : .Box }, sx = {}, {
                backgroundImage: `url(${aboutUsItemData[index].img})`,
            }) }
        >
            className;
    {
        classes.boxName;
    }
    paragraph = { true:  };
    variant = 'subtitle1'
        >
            { data, : .name }
        < /Typography>
        < /Box>
        < /div>;
}
className;
{
    classes.gridThird;
}
 >
    className;
{
    classes.textArea;
}
align = 'center';
variant = 'body1';
paragraph = { true:  }
    >
        { aboutUsTextFill, [0]: .TeamText }
    < /Typography>
    < /Box>
    < Box;
className = { classes, : .gridFourth } >
    className;
{
    classes.textArea;
}
align = 'center';
variant = 'body1';
paragraph = { true:  }
    >
        { aboutUsTextFill, [1]: .PlaceText }
    < /Typography>
    < /Box>
    < /div>
    < Dialog;
id = { buttonIndex };
fullWidth;
maxWidth = { 'xl':  };
className = { classes, : .Dialog };
open = { open };
TransitionComponent = { Transition };
keepMounted;
onClose = { handleClose };
aria - describedby;
'alert-dialog-slide-description'
    >
        className;
{
    classes.dialogTitle;
}
 > { aboutUsItemData, [buttonIndex]: .dialogTitle } < /DialogTitle>
    < DialogContent;
className = { classes, : .DialogContent } >
    className;
{
    classes.dialogPhoto;
}
sx = {};
{
    backgroundImage: `url(${aboutUsItemData[buttonIndex].dialogPhoto})`,
    ;
}
    >
        { aboutUsItemData, : .content }
    < /Box>
    < Box;
className = { classes, : .Text } >
    { aboutUsItemData, [buttonIndex]: .dialogText }
    < /Box>
    < /DialogContent>
    < /Dialog>
    < /div>
    < /div>;
;
export default withStyles(styles)(AboutUs);
