
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
		currentPage = page;//set the desired page
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
}

export default Context;