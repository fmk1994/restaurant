import Total from '../menu/menuComponents/Total';
import data from '../menu/data.json';
import { withStyles } from '@mui/styles';
import styles from '../styles/MenuStyles';
import Image from '../pictures/ikona.png';
function Menu(props) {
    const { classes } = props;
    return id = 'menu';
    className = { classes, : .Menu } >
        src;
    {
        Image;
    }
    className = { classes, : .Logo } /  >
        type;
    'Mains';
    meals = { data, : .mains } /  >
        className;
    {
        classes.Aside;
    }
     >
        type;
    'Sides';
    items = { data, : .sides } /  >
        type;
    'Drinks';
    items = { data, : .drinks } /  >
        /aside>
        < Total /  >
        /div>;
    ;
}
export default withStyles(styles)(Menu);
