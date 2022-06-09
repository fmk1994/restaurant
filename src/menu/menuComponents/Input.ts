import React, {Fragment, useContext, useEffect, useState } from 'react';
import { MenuContext } from '../../contexts/MenuContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import { withStyles } from '@mui/styles';
import styles from '../menuStyles/InputStyles';

function Input(props) {
	const { type, name, index, classes } = props;
	const [,updateItem] = useContext(MenuContext);
	const [count, setCount] = useState(0);
	useEffect(() => {
		updateItem(type, index, count);
	}, [count]);

	const disabled = count <= 0;

	return (
		<Fragment>
			<IconButton onClick={() => setCount(count + 1)}>
				<AddIcon />
			</IconButton>
			<div
				className={classes.number}
				name={name.replace(' ', '-').toLowerCase()}
			>
				<p>{count !== 0 && count}</p>
			</div>

			<IconButton disabled={disabled} onClick={() => setCount(count - 1)}>
				<RemoveIcon />
			</IconButton>
		</Fragment>
	);
}
export default withStyles(styles)(Input);
