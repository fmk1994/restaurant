import React, { useState, useEffect, useCallback, MouseEvent } from 'react';
import Input from '@mui/material/Input';
import { withStyles } from '@mui/styles';
import styles from '../styles/ReservationFormStyles';
import { InputLabel } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormControl } from '@mui/material';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import MuiPhoneNumber from 'material-ui-phone-number';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

let day = new Date();
let nextDay = new Date(day);
nextDay.setDate(day.getDate() + 1);

const initialFormData = Object({
	date: new Date(),
	guestsNum: '',
	number: '',
	firstName: '',
	lastName: '',
	text: '',
});

function ReservationForm(props) {
	const { classes } = props;
	const [formData, setFormData] = useState(initialFormData);
	const seats = [1, 2, 3, 4, 5, 6];

	const handleSubmit = useCallback((e) => {
		e.preventDefault();

		setFormData({
			date,
			guestsNum,
			number,
			firstName,
			lastName,
			text,
		});
		alert(`Reservation params: ${JSON.stringify(formData)}`);
	}, []);
	const [guestsNum, setGuestsNum] = useState(1);
	const [date, setDate] = useState(new Date(nextDay));
	const [text, setText] = useState('');
	const [number, setNumber] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	useEffect(() => {
		setFormData({
			date,
			guestsNum,
			number,
			firstName,
			lastName,
			text,
		});
	}, [date, guestsNum, text, number, firstName, lastName]);

	return (
		<Paper className={classes.wrapper}>
			<h2 className={classes.title}>Make reservation</h2>
			<form className={classes.form} onSubmit={handleSubmit}>
				<FormControl>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DateTimePicker
							renderInput={(params) => <TextField {...params} />}
							label='Date'
							value={date}
							onChange={(newDate) => {
								setDate(newDate);
							}}
							minDate={new Date(nextDay)}
							maxDate={new Date('2022-08-31')}
							minTime={new Date(0, 0, 0, 16, 0)}
							maxTime={new Date(0, 0, 0, 22, 0)}
						/>
					</LocalizationProvider>
				</FormControl>
				<FormControl>
					<InputLabel id='select'>Booking for</InputLabel>
					<Select
						name='sits'
						id='select'
						value={guestsNum}
						label='Booking for'
						onChange={(e) => setGuestsNum(e.target.value)}
					>
						{seats.map((seat) => (
							<MenuItem value={seat} key={seat}>
								{seat}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<FormControl margin='normal' required>
					<InputLabel htmlFor='firstName'>First Name</InputLabel>
					<Input
						id='firstName'
						name='firstName'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						inputProps={{ maxLength: 20 }}
					/>
				</FormControl>
				<FormControl margin='normal' required>
					<InputLabel htmlFor='lastName'>Last Name</InputLabel>
					<Input
						id='lastName'
						name='lastName'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						inputProps={{ maxLength: 20 }}
					/>
				</FormControl>

				<FormControl margin='normal' required>
					<MuiPhoneNumber
						defaultCountry='pl'
						regions='europe'
						name='number'
						label='Phone Number'
						value={number}
						onChange={setNumber}
					/>
				</FormControl>

				<FormControl>
					<TextField
						name='notes'
						label='Notes...'
						className={classes.textField}
						multiline
						inputProps={{ maxLength: 200 }}
						rows={4}
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</FormControl>
				<Button className={classes.button} type='submit' fullWidth>
					BOOK NOW
				</Button>
			</form>
		</Paper>
	);
}
export default withStyles(styles)(ReservationForm);
