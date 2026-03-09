const { Given, When } = require('@cucumber/cucumber')

const LoginPage = require('../pages/loginPage')

Given('I open the SauceDemo page', async function () {
  this.loginPage = new LoginPage(this.page)
  await this.loginPage.navigate()
})

When('I login with user {string} and password {string}', async function (user, password) {
  await this.loginPage.login(user, password)
})
