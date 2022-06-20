import { CSSProperties } from '@emotion/serialize';

import { Styles } from '@mui/styles';

const styles: Styles<string, CSSProperties> = {
	mapWrap: {
		position: 'relative',
		right: '0',
		bottom: '0',
		width: '100%',
		height: '100%',
	},

	map: {
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
};
export default styles;
