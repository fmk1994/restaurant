import { useContext, useState, useEffect, useCallback } from 'react';
import { withStyles } from '@mui/styles';
import styles from '../styles/OrderDetailsStyles';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TotalPriceContext } from '../contexts/TotalPriceContext';
import { MenuContext } from '../contexts/MenuContext';
import { Radio } from '@mui/material';
// import { List } from '@mui/material';
// import { ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import basketIcon from '../pictures/shoppingbasket.jpg';
import cookingImg from '../pictures/cooking.png';
import emptyCartImg from '../pictures/empty-cart.png';
import data from '../menu/data.json';
function OrderDetails(props) {
    const initialFormData = Object({
        deliveryMethod: '',
        adress: '',
        number: '',
        firstName: '',
        lastName: '',
        paymentMethod: '',
    });
    const { classes } = props;
    const [formData, setFormData] = useState(initialFormData);
    const [deliveryMethod, setDeliveryMethod] = useState('delivery');
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [adress, setAdress] = useState('');
    const [number, setNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [open, setOpen] = useState(false);
    const [orderNames, setOrderNames] = useState('');
    // const [uniqueOrderNames, setUniqueOrderNames] = useState(orderNames);
    const [openThanksPage, setOpenThanksPage] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { totalPrice } = useContext(TotalPriceContext);
    const [items] = useContext(MenuContext);
    const names = [];
    const index = [];
    let dishesArray = [];
    data.mains.map((mainDish) => {
        const mainNames = mainDish.name;
        const mainsIndex = mainDish.index;
        names.push(mainNames);
        index.push(mainsIndex);
    });
    data.drinks.map((drink) => {
        const drinkNames = drink.name;
        const drinkIndex = drink.index;
        names.push(drinkNames);
        index.push(drinkIndex);
    });
    data.sides.map((side) => {
        const sideNames = side.name;
        const sideIndex = side.index;
        names.push(sideNames);
        index.push(sideIndex);
    });
    for (const [key, value] of Object.entries(items)) {
        if (value !== 0) {
            let dish = `${key}`;
            dishesArray.push(dish);
        }
    }
    function handleOrderNames() {
        if (dishesArray.length === 0) {
            return null;
        }
        else {
            dishesArray.forEach((element) => {
                setOrderNames([...orderNames, names[index.indexOf(element)]]);
                // let uniqueOrderNames = [...new Set(orderNames)];
                // setUniqueOrderNames(uniqueOrderNames);
            });
        }
    }
    const mealsCounter = new Object();
    for (let i = 0; i < orderNames.length; i++) {
        if (mealsCounter[orderNames[i]] != null) {
            mealsCounter[orderNames[i]] += 1;
        }
        else {
            mealsCounter[orderNames[i]] = 1;
        }
    }
    useEffect(() => {
        handleOrderNames();
    }, [items]);
    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);
    const handleClose = useCallback(() => {
        setOpen(false);
        setOpenThanksPage(false);
    }, []);
    const handleThanksPage = () => {
        setTimeout(() => {
            setOpen(false);
            setOpenThanksPage(true);
        }, 1000);
    };
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setFormData({
            deliveryMethod,
            adress,
            number,
            firstName,
            lastName,
            paymentMethod,
        });
        console.log(JSON.stringify(formData));
        handleThanksPage();
    }, [formData]);
    useEffect(() => {
        setFormData({
            deliveryMethod,
            adress,
            number,
            firstName,
            lastName,
            paymentMethod,
        });
    }, [deliveryMethod, adress, number, firstName, lastName, paymentMethod]);
    return className = { classes, : .basket };
    onClick = { handleOpen } >
        className;
    {
        classes.basketIcon;
    }
    src = { basketIcon } /  >
        className;
    {
        classes.counter;
    }
     > {} `(${totalPrice}$)`;
}
/div>
    < /Box>
    < Dialog;
fullScreen = { fullScreen };
open = { open };
onClose = { handleClose };
aria - labelledby;
'order-details-dialog'
    >
        { totalPrice } === 0 && fullScreen;
{
    fullScreen;
}
open = { open };
onClose = { handleClose };
aria - labelledby;
'empty-order-dialog'
    >
        {} `Empty Order!`;
/DialogTitle>
    < DialogContent;
className = { classes, : .emptyOrderDialog } >
    src;
{
    emptyCartImg;
}
/>
    < /DialogContent>
    < DialogActions >
    onClick;
{
    handleClose;
}
 > Cancel < /Button>
    < /DialogActions>
    < /Dialog>;
{
    totalPrice !== 0 && onSubmit;
    {
        handleSubmit;
    }
     >
        id;
    'order-details-dialog' >
        { 'Details of your order':  }
        < /DialogTitle>
        < DialogContent;
    className = { classes, : .details } >
        { 'How do you want to get your food?':  }
        < /DialogContentText>
        < FormControl;
    required >
        row;
    value = { deliveryMethod };
    onChange = {}(e);
    setDeliveryMethod(e.target.value);
}
aria - labelledby;
'delivery-method'
    >
        value;
'delivery';
className = { classes, : .button };
label = 'delivery';
control = {} < Radio;
color = 'secondary';
size = 'small' /  > ;
    >
        Delivery
    < /FormControlLabel>
    < FormControlLabel;
value = 'pick-up';
className = { classes, : .button };
label = 'pick-up';
control = {} < Radio;
color = 'secondary';
size = 'small' /  > ;
    >
        Pick;
up
    < /FormControlLabel>
    < /RadioGroup>
    < /FormControl>
    < DialogContentText >
    { 'Estimated delivery time: 30-60 min':  }
    < /DialogContentText>;
{
    deliveryMethod === 'delivery' && className;
    {
        classes.deliveryForm;
    }
     >
        required >
        htmlFor;
    'deliveryAdress' >
        Delivery;
    Adress
        < /InputLabel>
        < Input;
    id = 'deliveryAdress';
    name = 'Delivery Adress';
    value = { adress };
    onChange = {}(e);
    setAdress(e.target.value);
}
inputProps = {};
{
    maxLength: 100;
}
/>
    < /FormControl>
    < FormControl;
margin = 'normal';
required >
    htmlFor;
'firstName' > First;
Name < /InputLabel>
    < Input;
id = 'firstName';
name = 'firstName';
value = { firstName };
onChange = {}(e);
setFirstName(e.target.value);
inputProps = {};
{
    maxLength: 20;
}
/>
    < /FormControl>
    < FormControl;
margin = 'normal';
required >
    htmlFor;
'lastName' > Last;
Name < /InputLabel>
    < Input;
id = 'lastName';
name = 'lastName';
value = { lastName };
onChange = {}(e);
setLastName(e.target.value);
inputProps = {};
{
    maxLength: 20;
}
/>
    < /FormControl>
    < FormControl;
margin = 'normal';
required >
    defaultCountry;
'pl';
regions = 'europe';
name = 'number';
label = 'Phone Number';
value = { number };
onChange = { setNumber }
    /  >
    /FormControl>
    < /Box>;
{
    deliveryMethod === 'pick-up' && className;
    {
        classes.pickUp;
    }
     >
        { 'Pick up adress: Gdynia, ul. Legionów 102A/32':  }
        < /Typography>
        < /Box>;
}
({ 'How do you want to pay?':  } < /DialogContentText>
    < FormControl);
required >
    row;
value = { paymentMethod };
onChange = {}(e);
setPaymentMethod(e.target.value);
aria - labelledby;
'payment-method'
    >
        value;
'cash';
className = { classes, : .button };
label = 'cash';
control = {} < Radio;
color = 'secondary';
size = 'small' /  > ;
    >
        Cash
    < /FormControlLabel>
    < FormControlLabel;
value = 'card';
className = { classes, : .button };
label = 'card';
control = {} < Radio;
color = 'secondary';
size = 'small' /  > ;
    >
        Card
    < /FormControlLabel>
    < /RadioGroup>
    < /FormControl>
    < /DialogContent>
    < DialogActions >
    onClick;
{
    handleClose;
}
 > Cancel < /Button>
    < Button;
type = 'submit' > Order < /Button>
    < /DialogActions>
    < /form>;
/Dialog>
    < Dialog;
fullScreen = { fullScreen };
open = { openThanksPage };
onClose = { handleClose };
aria - labelledby;
'thank-you-dialog'
    >
        id;
'thank-you-dialog' >
    {} `Thank you for the order!`;
/DialogTitle>
    < DialogContent;
className = { classes, : .thankYouDialogContent } >
    {} `You've ordered:`;
className;
{
    classes.orderNames;
}
 >
    className;
{
    classes.orderNamesRows;
}
 >
    { Object, : .keys(mealsCounter).map((key) => {
            return key;
            {
                key;
            }
             > { key } < /li>;
        }) }
    < /ul>
    < ul;
className = { classes, : .orderNamesRows } >
    { Object, : .values(mealsCounter).map((value) => {
            return key;
            {
                value;
            }
             > {} `x ${value}`;
        }, /li>)
    };
/ul>
    < /div>
    < DialogContentText >
    { 'Estimated delivery/pick up time 30-60 min.':  }
    < /DialogContentText>
    < img;
src = { cookingImg } /  >
    /DialogContent>
    < DialogActions >
    onClick;
{
    handleClose;
}
 > Close < /Button>
    < /DialogActions>
    < /Dialog>
    < /div>;
;
export default withStyles(styles)(OrderDetails);
