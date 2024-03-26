import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Context{
	constructor(){
		this.currentPage = "";
		this.domain = "";
		this.token = "";
	}
	
	/**preferd method for switching between pages
		@param page string the desired page
		@param navigation the navigation object provied to the page
	*/
	goToPage(page, navigation){
		this.currentPage = page;//set the desired page
		navigation.goBack();//force the screen back to the primary screen to do re navigation
	}
	
	getCurrentPage(){
		return this.currentPage;
	}
	
	getDomain(){
		return this.domain;
	}
	
	getToken(){
		return this.token;
	}
	
	setDomain(newDomain){
		this.domain=newDomain;
		//load the correspoing token for this domain
	}
	
	setToken(newToken){
		thie.token=newToken;
		//save new token to this domain
	}
	
	saveDomainData(){
		if(this.domainData == undefined){
			this.domainData = [];
		}
		let data = JSON.stringify(this.domainData);
		storage.save({
			key: 'domains',
			data: data
		});
	}
	
	loadDomainData(){
		storage.load({
			key: 'domains'
		}).then(ret => {
			// found data go to then()
			
			this.domainData= JSON.parse(ret);
			console.log(this.domainData);
		}).catch(err => {
			// any exception including data not found
			// goes to catch()
			console.warn(err.message);
			this.saveDomainData();
		})
	}		
}

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // we'll talk about the details later.
  }
});


export default Context;