// Import libraries for making a component
import React from 'React';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
	const { textStlye, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStlye}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.9,
		elevation: 4,
		position: 'relative'
	},
	textStlye: {
		fontSize: 20
	}
};

// make the component available to other parts of the app
export default Header;
