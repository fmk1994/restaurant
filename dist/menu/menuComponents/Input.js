import { useContext, useEffect, useState } from 'react';
import { MenuContext } from '../../contexts/MenuContext';
import { IconButton } from '@mui/material';
import { withStyles } from '@mui/styles';
import styles from '../menuStyles/InputStyles';
function Input(props) {
    const { type, name, index, classes } = props;
    const [, updateItem] = useContext(MenuContext);
    const [count, setCount] = useState(0);
    useEffect(() => {
        updateItem(type, index, count);
    }, [count]);
    const disabled = count <= 0;
    return onClick = {}();
    setCount(count + 1);
}
 >
    />
    < /IconButton>
    < div;
className = { classes, : .number };
name = { name, : .replace(' ', '-').toLowerCase() }
    >
        { count } !== 0 && count;
/p>
    < /div>
    < IconButton;
disabled = { disabled };
onClick = {}();
setCount(count - 1);
 >
    />
    < /IconButton>
    < /Fragment>;
;
export default withStyles(styles)(Input);
