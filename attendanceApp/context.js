
class Context{
	constructor(){
		this.currentPage = "";
		this.domain = "";
		this.token = "";
	}
	
	//preferd method for switching between pages
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
	}
	
	setToken(newToken){
		thie.token=newToken;
	}
	
	toString(){
		return "CONTEXT!!";
	}
}

export default Context;