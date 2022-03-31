import sizes from '../../styles/sizes';

const styles = {
	Menu: {
		color: "grey",
	backgroundColor: "black",
	fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji",
		padding: '2rem 2.25rem 1rem',
		margin: '0 auto',
		maxWidth: '50rem',
		backgroundColor: 'white',
		[sizes.up('md')]: {
			display: 'grid',
			gridGap: '4rem',
			gridTemplateColumns: '1fr 1fr',
		},
	},
	Aside: {
		gridColumn: '2 / 3',
	},
	Logo:{
		width: "280px",
		margin: "0 auto 2rem",
		display: "block",
		borderRadius:"50%",
		gridColumn: "1 / 3",
		[sizes.up('md')]:{
			marginBottom:"0",
		},
	}
};

export default styles;
