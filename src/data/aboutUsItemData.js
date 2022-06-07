import TeamPhoto from '../pictures/sebastian-coman.jpg';
import PlacePhoto from '../pictures/steven-pecoraro.jpg';
import teamOpenedPhoto from '../pictures/teamOpenedPhoto.jpg';
import placeOpenedPhoto from '../pictures/placeOpenedPhoto.jpg';

const aboutUsItemData = [
	{
		name: 'Team',
		img: TeamPhoto,
		title: 'chef',
		index: 0,
		dialogText:
			'TEAM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',

		dialogTitle: 'TEAM ipsum dolor sit amet, consectetur adipiscing elit',
		dialogPhoto: teamOpenedPhoto,
	},
	{
		name: 'Place',
		img: PlacePhoto,
		title: 'place',
		index: 1,
		dialogText:
			'PLACE ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',

		dialogTitle: 'PLACE ipsum dolor sit amet, consectetur adipiscing elit',
		dialogPhoto: placeOpenedPhoto,
	},
];

const aboutUsTextFill = [
	{
		TeamText:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.',
	},
	{
		PlaceText:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.',
	},
];
export { aboutUsItemData, aboutUsTextFill };
