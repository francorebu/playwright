
class LoginPage  {

    constructor(page){
        this.page = page;
        //locators
        this.userName    =  this.page.locator('//*[@name="username"]');
        this.password    =  this.page.locator('//*[@name="password"]');
        this.loginButton =  this.page.locator('//*[@type="submit"]');
    }   

    async loginUser(user,pass){
        await this.enterUsername(user);
        await this.enterPassword(pass);
        await this.clickOnLogin();
    }

    async enterUsername(user){
        await this.userName.type(user);
        console.log("....entering username: " + user);
    }

    async enterPassword(pass){
        await this.password.type(pass);
        console.log("...entering password: " + pass);
    }

    async clickOnLogin(){
        await this.loginButton.click();
        console.log("...Clicking login button: ");
    }

}

module.exports = LoginPage;