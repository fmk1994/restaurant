import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import styles from './styles/NavbarTopStyles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logoicon from './pictures/ikona.png';
import Popper from '@mui/material/Popover';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useNavigate, Outlet } from 'react-router-dom';


const pages = [ 'Menu', 'Order online', 'Gallery','About Us', 'Contact'];

function NavbarTop(props) {
	const { classes } = props;

	let navigate = useNavigate();

	const routeChange = (e) => {
		let path = e.target.innerText
			.toLowerCase()
			.replace(' ', '_');
		navigate(path);
	};

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	const handleAvataronClick = () => {
		scrollToTop();
		navigate('');
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
		<AppBar className={classes.AppBar} position='fixed' color='transparent'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Avatar
						className={classes.Avatar}
						onClick={handleAvataronClick}
						src={Logoicon}
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					/>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon
								sx={{ display: {sm: 'flex'} }}
								className={classes.MenuIcon}
							/>
						</IconButton>

						<Popper
							className="popover"
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
								display: { xs: 'block', md: 'none' },
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
									to={`${page
										.toLowerCase()
										.replace(' ', '-')}`}
									key={page.toLowerCase().replace('ó', 'o').replace(' ', '-')}
									onClick={routeChange}
								>
									<MenuItem
										className={classes.MenuItems}
										key={page}
										onClick={handleCloseNavMenu}
									>
										{page}
									</MenuItem>
								</Link>
							))}
						</Popper>
					</Box>
					<Avatar
						className={classes.Avatar}
						onClick={handleAvataronClick}
						src={Logoicon}
						sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}
					/>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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
								onClick={routeChange}
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
				</Toolbar>
			</Container>
		</AppBar>
		<Outlet /> 
		</>
	);
}

export default withStyles(styles)(NavbarTop);
