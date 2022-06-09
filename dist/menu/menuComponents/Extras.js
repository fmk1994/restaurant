import Input from './Input';
import { withStyles } from '@mui/styles';
import styles from '../menuStyles/ExtrasStyles';
function Extras(props) {
    const { classes, type, items } = props;
    return className = { classes, : .Extras } >
        className;
    {
        classes.ExtrasHeading;
    }
     > { type } < /h2>;
    {
        items.map((item, index) => className = { classes, : .MenuItem }, key = { index } >
            className, { classes, : .ExtrasName } > { item, : .name } < /div>
            < Input, type = { type }, name = { item, : .name }, index = { index } /  >
            className, { classes, : .ExtrasPrice } > $, { item, : .price } < /strong>
            < /article>);
    }
    /section>;
    ;
}
export default withStyles(styles)(Extras);
