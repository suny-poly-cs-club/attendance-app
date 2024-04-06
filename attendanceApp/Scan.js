//IMPORTANT IOS NEEDS ADDITINAL SETUP: https://react-native-camera.github.io/react-native-camera/docs/installation IOS manual installion section
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  Button,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewBorderAmmount =1.5;

let context = null;

const Scan = ({navigation, route}) => {
	context = route.params.context
	
	return (
		<View style={styles.centerText}>
			<Text>
				Scan QR Code{'\n'}
			</Text>
			<View style={styles.cameraView}>
				<QRCodeScanner
					onRead={scanResult}
					flashMode={RNCamera.Constants.FlashMode.off}
					reactivate={true}
					reactivateTimeout = {2000}
					showMarker = {true}
					style={styles.cameraView}
					cameraStyle={styles.cameraView}
				/>
			</View>
			<View>
				<Text>{"\n"}</Text>
				
				<Button title="Log Out" onPress={() => { console.log("pressed");}} />
				
				<Text>{"\n"}</Text>
				
				<Button title="Change Domain" onPress={() => { console.log("pressed"); }} />
			</View>
		</View>
	);
};

function scanResult(input){
	fetch(context.getURL()+'/check-in',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
		'Authorization': context.getToken()
      },
      body: JSON.stringify({
		 code: input.data
	  })
    }).then(responce =>{
		if(responce.ok){
			Alert.alert("Success!");
		}else{
			responce.text().then(msg =>{
				Alert.alert("Something Went Wrong! "+responce.status+" message: "+msg);
			}).catch(err =>{
				Alert.alert("Oh Come on!");
			});
			
		}
	}).catch(err => {
		Alert.alert("Error: "+err);
	});
	console.log(input);
	Alert.alert("SCANNED!\n"+input.data);
}


const styles = StyleSheet.create({
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
	textAlign: 'center'
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