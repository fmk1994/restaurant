import Input from './Input';
import { withStyles } from '@mui/styles';
import styles from '../menuStyles/MainsStyles';
function Mains(props) {
    const { classes, meals, type } = props;
    return className = { classes, : .Mains } >
        className;
    {
        classes.MainsHeading;
    }
     > { type } < /h2>;
    {
        meals.map((meal, index) => className = { classes, : .MenuItem }, key = { index } >
            className, { classes, : .MainsName } > { meal, : .name } < /h3>
            < Input, type = 'mains', name = { meal, : .name }, index = { index } /  >
            className, { classes, : .mainsPrice } > $, { meal, : .price } < /strong>
            < p, className = { classes, : .MainsDescription } > { meal, : .description } < /p>
            < /article>);
    }
    /section>;
    ;
}
export default withStyles(styles)(Mains);
