import React, { useState, useContext } from 'react';
import { withStyles } from '@mui/styles';
import styles from '../styles/NavbarStyles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logoicon from '../pictures/ikona.png';
import Popper from '@mui/material/Popover';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link, animateScroll as scroll } from 'react-scroll';


const pages = ['Menu', 'About Us', 'Gallery', 'Contact'];

function Navbar(props) {
	const { classes, totalPrice } = props;

	
	const handleAvataronClick = () => {
		scroll.scrollToTop();

	};

	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<AppBar className={classes.AppBar} position='fixed'>
				<Container maxWidth='lg'>
					<Toolbar className={classes.toolbar}>
						<Avatar
							className={classes.Avatar}
							onClick={handleAvataronClick}
							src={Logoicon}
							sx={{ mr: 7, display: { xs: 'none', lg: 'flex' } }}
						/>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'flex', lg: 'none' },
							}}
						>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<MenuIcon className={classes.MenuIcon} />
							</IconButton>

							<Popper
								className='popover'
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', lg: 'none' },
								}}
							>
								{pages.map((page) => (
									<Link
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
										activeClass='active'
										className={classes.Link}
										underline='none'
										to={`${page.toLowerCase().replace(' ', '-')}`}
										key={page.toLowerCase().replace('ó', 'o').replace(' ', '-')}
									
									>
										<MenuItem
											className={classes.MenuItems}
											key={page}
											onClick={handleCloseNavMenu}
										>
											{page.toUpperCase()}
										</MenuItem>
									</Link>
								))}
							</Popper>
						</Box>
						<Avatar
							className={classes.Avatar}
							onClick={handleAvataronClick}
							src={Logoicon}
							sx={{ flexGrow: 0, display: { xs: 'flex', lg: 'none' } }}
						/>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', lg: 'flex' },
							}}
						>
							{pages.map((page) => (
								<Link
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
									activeClass='active'
									className={classes.Link}
									underline='none'
									to={`${page.toLowerCase().replace(' ', '-')}`}
									key={page.toLowerCase().replace(' ', '-')}
								
								>
									<Button
										className={classes.menuButtons}
										onClick={handleCloseNavMenu}
										sx={{ my: 2, display: 'block' }}
									>
										{page}
									</Button>
								</Link>
							))}
						</Box>
						<Box className={classes.basket}>
							<ShoppingBasketOutlinedIcon />
							<div className={classes.counter}>{`(${totalPrice}$)`}</div>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
	
		</>
	);
}

export default withStyles(styles)(Navbar);
