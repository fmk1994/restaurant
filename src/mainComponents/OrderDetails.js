import React, { useContext, useState, useEffect, useCallback } from 'react';
import { withStyles } from '@mui/styles';
import styles from '../styles/OrderDetailsStyles';
import { v4 as uuidv4 } from 'uuid';
import { InputLabel } from '@mui/material';
import { Typography } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import RadioGroup from '@mui/material/RadioGroup';
import MuiPhoneNumber from 'material-ui-phone-number';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TotalPriceContext } from '../contexts/TotalPriceContext';
import { MenuContext } from '../contexts/MenuContext';
import { Radio } from '@mui/material';
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
	const [orderNames, setOrderNames] = useState([]);
	const [openThanksPage, setOpenThanksPage] = useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
	const { totalPrice } = useContext(TotalPriceContext);
	const [items] = useContext(MenuContext);
	let names = [];
	let index = [];
	let dishesArray = [];
	const { mains, drinks, sides } = data;

	mains.map((name) => {
		names.push(name.name);
		index.push(name.index);
	});
	drinks.map((name) => {
		names.push(name.name);
		index.push(name.index);
	});
	sides.map((name) => {
		names.push(name.name);
		index.push(name.index);
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
		} else {
			dishesArray.map((element) => {
				if (orderNames.includes(names[index.indexOf(element)])) {
					return orderNames;
				} else {
					setOrderNames([...orderNames, names[index.indexOf(element)]]);
				}
			});
		}
	}
	const mealsCounter = Object.values(items).filter((number) => {
		return number > 0;
	});
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
		}, 500);
	};
	const handleSubmit = useCallback(
		(e) => {
			e.preventDefault();
			setFormData({
				deliveryMethod,
				adress,
				number,
				firstName,
				lastName,
				paymentMethod,
			});

			handleThanksPage();
			setTimeout(() => {
				alert(JSON.stringify({ ...formData, ...dishesObject }));
			}, 1500);
		},
		[formData]
	);
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

	const dishesObject = {};
	orderNames.forEach((element, index) => {
		dishesObject[element] = mealsCounter[index];
	});

	return (
		<div>
			<Box className={classes.basket} onClick={handleOpen}>
				<img className={classes.basketIcon} src={basketIcon} />
				<div className={classes.counter}>{`(${totalPrice}$)`}</div>
			</Box>

			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				aria-labelledby='order-details-dialog'
			>
				{totalPrice === 0 && (
					<Dialog
						fullScreen={fullScreen}
						open={open}
						onClose={handleClose}
						aria-labelledby='empty-order-dialog'
					>
						<DialogTitle>{`Empty Order!`}</DialogTitle>
						<DialogContent className={classes.emptyOrderDialog}>
							<img src={emptyCartImg} />
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose}>Cancel</Button>
						</DialogActions>
					</Dialog>
				)}
				{totalPrice !== 0 && (
					<form onSubmit={handleSubmit}>
						<DialogTitle id='order-details-dialog'>
							{'Details of your order'}
						</DialogTitle>

						<DialogContent className={classes.details}>
							<DialogContentText>
								{'How do you want to get your food?'}
							</DialogContentText>
							<FormControl required>
								<RadioGroup
									row
									value={deliveryMethod}
									onChange={(e) => setDeliveryMethod(e.target.value)}
									aria-labelledby='delivery-method'
								>
									<FormControlLabel
										value='delivery'
										className={classes.button}
										label='delivery'
										control={<Radio color='secondary' size='small' />}
									>
										Delivery
									</FormControlLabel>
									<FormControlLabel
										value='pick-up'
										className={classes.button}
										label='pick-up'
										control={<Radio color='secondary' size='small' />}
									>
										Pick up
									</FormControlLabel>
								</RadioGroup>
							</FormControl>
							<DialogContentText>
								{'Estimated delivery time: 30-60 min'}
							</DialogContentText>
							{deliveryMethod === 'delivery' && (
								<Box className={classes.deliveryForm}>
									<FormControl required>
										<InputLabel htmlFor='deliveryAdress'>
											Delivery Adress
										</InputLabel>
										<Input
											id='deliveryAdress'
											name='Delivery Adress'
											value={adress}
											onChange={(e) => setAdress(e.target.value)}
											inputProps={{ maxLength: 100 }}
										/>
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
								</Box>
							)}
							{deliveryMethod === 'pick-up' && (
								<Box className={classes.pickUp}>
									<Typography>
										{'Pick up adress: Gdynia, ul. Legionów 102A/32'}
									</Typography>
								</Box>
							)}
							<DialogContentText>{'How do you want to pay?'}</DialogContentText>
							<FormControl required>
								<RadioGroup
									row
									value={paymentMethod}
									onChange={(e) => setPaymentMethod(e.target.value)}
									aria-labelledby='payment-method'
								>
									<FormControlLabel
										value='cash'
										className={classes.button}
										label='cash'
										control={<Radio color='secondary' size='small' />}
									>
										Cash
									</FormControlLabel>
									<FormControlLabel
										value='card'
										className={classes.button}
										label='card'
										control={<Radio color='secondary' size='small' />}
									>
										Card
									</FormControlLabel>
								</RadioGroup>
							</FormControl>
						</DialogContent>

						<DialogActions>
							<Button onClick={handleClose}>Cancel</Button>
							<Button type='submit'>Order</Button>
						</DialogActions>
					</form>
				)}
			</Dialog>

			<Dialog
				fullScreen={fullScreen}
				open={openThanksPage}
				onClose={handleClose}
				aria-labelledby='thank-you-dialog'
			>
				<DialogTitle id='thank-you-dialog'>
					{`Thank you for the order!`}
				</DialogTitle>
				<DialogContent className={classes.thankYouDialogContent}>
					{`You've ordered:`}
					<div className={classes.orderNames}>
						<ul className={classes.orderNamesRows}>
							{orderNames.map((key) => {
								return <li key={key}>{key}</li>;
							})}
						</ul>
						<ul className={classes.orderNamesRows}>
							{mealsCounter.map((value) => {
								return <li key={uuidv4()}>{`x ${value}`}</li>;
							})}
						</ul>
					</div>
					<DialogContentText>
						{'Estimated delivery/pick up time 30-60 min.'}
					</DialogContentText>
					<img src={cookingImg} />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
export default withStyles(styles)(OrderDetails);
