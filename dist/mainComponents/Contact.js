import { withStyles } from '@mui/styles';
import styles from '../styles/ContactStyles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
function Contact(props) {
    const { classes } = props;
    return id = 'contact';
    className = { classes, : .contact } >
        variant;
    'h1';
    align = 'center';
    className = { classes, : .title } >
        CONTACT
        < /Typography>
        < Divider;
    className = { classes, : .divider };
    variant = 'middle'
        /  >
        className;
    {
        classes.contentWrapper;
    }
     >
        className;
    {
        classes.reservationForm;
    }
     >
        />
        < /div>
        < div;
    className = { classes, : .mapContainer } >
        />
        < /div>
        < Box;
    className = { classes, : .hours } >
        className;
    {
        classes.textArea;
    }
     >
        We;
    {
        `'`;
    }
    re;
    open;
    from < mark > Monday < /mark> to <mark>Sunday</mark > .
    ;
    Everyday;
    from < mark > 16 < /mark> to <mark>23</mark > .
        < /Typography>
        < Typography;
    className = { classes, : .textArea } >
        If;
    you;
    have;
    questions - call < mark > +48 - 000 - 000 - 000 < /mark> or ask us;
    via;
    email < mark > thegoodtaste;
    /mark>
        < /Typography>
        < /Box>
        < Box;
    className = { classes, : .textBox } >
        className;
    {
        classes.textArea;
    }
     >
        Please;
    use;
    the < mark > booking;
    form < /mark>. Use <mark>Notes</mark > to;
    let us, know;
    if (you)
        have;
    any < mark > allergies < /mark>. We have 15 tables for you to book. We recommend booking one of three balcony tables overlooking the city!
        < /Typography>
        < /Box>
        < /div>
        < /div>;
    ;
}
export default withStyles(styles)(Contact);
