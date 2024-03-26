import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Context{
	constructor(){
		this.currentPage = "";
		this.domain = "";
		this.token = "";
		this.loadDomainData();
		this.protocal = "";
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
	
	getProtocall(){
		return this.protocal;
	}
	
	setDomain(newDomain){
		this.domain=newDomain;
		this.token = "";
		//load the correspoing token for this domain
		for(let i=0;i<this.domainData.length;i++){
			if(this.domainData[i].domain == newDomain){
				this.token = this.domainData[i].token;
				this.protocal = this.domainData[i].protocal;
				break;
			}
		}
		
	}
	
	setToken(newToken){
		this.token=newToken;
		//save new token to this domain
		for(let i=0;i<this.domainData.length;i++){
			if(this.domainData[i].domain == this.domain){
				this.domainData[i].token = this.token;
				break;
			}
		}
		this.saveDomainData();
	}
	
	addNewDomain(newDomain,protocal){
		this.domain = newDomain;
		this.token = "";
		this.protocal = protocal;
		let newDomainData = JSON.parse('{"domain": "", "token": "" , "protocal": ""}');
		newDomainData.domain = this.domain;
		newDomainData.token = this.token;
		newDomainData.protocal = this.protocal;
		this.domainData.push(newDomainData);
		this.saveDomainData();
		
	}
	
	removeDomain(domainName){
		for(let i=0;i<this.domainData.length;i++){
			if(this.domainData[i].domain == domainName){
				this.domainData.splice(i, 1); // 2nd parameter means remove one item only
				break;
			}
		}
		this.saveDomainData();
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
			//console.log(this.domainData);
		}).catch(err => {
			// any exception including data not found
			// goes to catch()
			//console.warn(err.message);
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