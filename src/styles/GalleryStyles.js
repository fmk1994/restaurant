

const styles = theme => ({
	gallery: {
		display: 'flex',
		overflow: 'hidden',
		height: '100vh',
		width: '98vw',
		justifyContent: 'center',
		alignItems: 'end',
		transition: 'transform 0.5s ease',
		[theme.breakpoints.down('xl')]:{
			flexDirection:"column",
			justifyContent:"flex-end",
			alignItems:"center",
			overflow:"scroll",
			paddingTop:"70px"
		},
	},
		title:{
		marginBottom:"70px"
		},

	
	panel: {
		backgroundSize: 'auto 100%',
		backgroundPositionX: 'center',
		backgroundRepeat: 'no-repeat',
		height: '82vh',
		borderRadius: '50px',
		color: '#fff',
		cursor: 'pointer',
		flex: '0.2',
		margin: '5px 5px 70px 5px',
		position: 'relative',
		transition: 'flex 0.7s ease-in-out',
		[theme.breakpoints.down('xl')]:{
			width:"90vw",
			height:"20vh",
			margin:0,
			marginBottom:"10px",
			backgroundSize:"100% auto",
			borderRadius:"40px",
			backgroundPositionY:"center",	
		},
		[theme.breakpoints.down('md')]:{
			marginBottom:"20px",
		},
		[theme.breakpoints.down('sm')]:{
			marginBottom:"25px",

		},
	},
	active: {
		flex: '2',
	
		[theme.breakpoints.down('xl')]:{
			flex:"70%",
		},
		[theme.breakpoints.down('additional_bp')]:{
			flex:"50%",
		},
		[theme.breakpoints.down('lg')]:{
			flex:"30%"

		},
		[theme.breakpoints.down('md')]:{
			flex:"20%"
		},
		[theme.breakpoints.down('sm')]:{
			flex:"5%"

		},
	},
});

export default styles;
