//IMPORTANT IOS NEEDS ADDITINAL SETUP: https://react-native-camera.github.io/react-native-camera/docs/installation IOS manual installion section
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewBorderAmmount =1.5;

const Scan = ({navigation}) => {
	
	return (
		<View>
			<Text>
				Scan QR Code{'\n'}
			</Text>
			<View>
				<QRCodeScanner
					onRead={scanResult}
					flashMode={RNCamera.Constants.FlashMode.off}
					
					reactivateTimeout = {2000}
					showMarker = {true}
					style={styles.cameraView}
					cameraStyle={styles.cameraView}
				/>
			</View>
		</View>
	);
};

function scanResult(input){
	console.log(input);
}


const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  },
  cameraView:{
	flex :0,
	width: Math.floor(windowWidth/viewBorderAmmount),
	height: Math.floor(windowHeight/viewBorderAmmount),
	alignSelf: 'center', 
	justifyContent: 'center'
	/*top: Math.floor(windowHeight/(viewBorderAmmount*8	)),
	left: Math.floor(windowWidth/(viewBorderAmmount*4.5))*/
  }
});//{ height: 200, marginTop: 20, width: 200, alignSelf: 'center', justifyContent: 'center' }


export default Scan;