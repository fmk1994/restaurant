const styles = theme => ({
	comment: {
		minWidth: '300px',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		margin: '0 4rem 0 4rem',
		overflow: 'auto',
		[theme.breakpoints.down('xxl')]: {
			margin:0,
			},
			[theme.breakpoints.down('xl')]: {
				},
				[theme.breakpoints.down('md')]: {
					width:"80%",
					overflow:"visible",
				},
	},
	commentData: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		margin: '2rem 3rem 2rem 2rem',
		textTransform: 'uppercase',
	},

	createdAt: {
		fontSize: '1rem',
		fontStyle: 'italic',
        alignSelf:"flex-end",
	},

	author: {
		letterSpacing: '0.2rem',
		fontSize: '2rem',
	},
	content: {
		height: '100%',
		wordWrap: 'break-word',
		fontSize: '3rem',
		margin: '1rem',
		lineHeight: '5rem',
		letterSpacing: '2px',
		fontFamily: `'Amatic SC', cursive`,
        overflow:"scroll",
		[theme.breakpoints.down('md')]: {
			height:"50vh",
			width:"80%",
			fontSize:'3rem',
			lineHeight:"3rem"
		},
	},

    commentActions:{
        display:"flex",
        justifyContent:"space-around",
        marginBottom:"2rem"
    },
    actionButton:{
            '&.MuiButton-root': {
                backgroundColor: 'transparent',
                border:"1px solid black",
                color: 'black',
                width: '5rem',
                height: '3rem',
                fontSize: '1rem',
                '&:hover': {
                    transform: 'scale(1.15)',
                    backgroundColor: 'transparent',
        },
    },
        },
    
});

export default styles;
