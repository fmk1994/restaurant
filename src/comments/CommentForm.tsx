import React, {useState, useCallback, FormEvent} from 'react';
import {withStyles} from '@mui/styles';
import styles from './styles/CommentFormStyles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';

type CommentFormProps = {
	classes: Record<string, string>;
	handleSubmit: (text: string, username: string) => void;
	submitLabel: string;
	hasCancelButton: boolean;
	initialText: string;
	handleCancel: () => void;
};

const CommentForm: React.FC<CommentFormProps> = ({classes, handleSubmit, submitLabel, hasCancelButton = false, initialText = '', handleCancel}: CommentFormProps) => {

	const [text, setText] = useState<string>(initialText);
	const [username, setUsername] = useState<string>('');
	const isSubmitButtonDisabled = text.length === 0;
	
		const onSubmit = useCallback((event: FormEvent) => {
			event.preventDefault();
			handleSubmit(text, username);
			setText('');
			setUsername('');
	},[text,username]);
	
	return (
		<Box>
			<form className={classes.form} onSubmit={onSubmit}>
				{!hasCancelButton && (
					<FormControl className={classes.nameInput} margin='normal' required>
						<InputLabel htmlFor='name'>Enter your name</InputLabel>
						<Input
							inputProps={{ maxLength: 11 }}
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</FormControl>
				)}
				<TextField
					label='Type here...'
					className={classes.textField}
					multiline
					inputProps={{ maxLength: 200 }}
					rows={4}
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>

				<Button
					className={classes.formButton}
					type='submit'
					disabled={isSubmitButtonDisabled}
				>
					{submitLabel}
				</Button>
				{hasCancelButton && (
					<Button
						type='submit'
						className={classes.formButton}
						onClick={handleCancel}
					>
						Cancel
					</Button>
				)}
			</form>
		</Box>
	);
}

export default withStyles(styles)(CommentForm);