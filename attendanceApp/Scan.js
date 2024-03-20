import {
  Text,
  View,
} from 'react-native';

let context = null;

const Scan = ({navigation, route}) => {
	context = route.params.context
	
	return (
		<View>
			<Text>
				You are on the Scan{'\n'}
				Plsease switch to the Scan branch to view content
			</Text>
		</View>
	);
};

export default Scan;