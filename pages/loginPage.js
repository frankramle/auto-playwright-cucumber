const SELECTORS = {
  USERNAME: '#user-name',
  PASSWORD: '#password',
  LOGIN_BUTTON: '#login-button'
}

class LoginPage {

  constructor(page) {
    this.page = page
    this.username = page.locator(SELECTORS.USERNAME)
    this.password = page.locator(SELECTORS.PASSWORD)
    this.loginBtn = page.locator(SELECTORS.LOGIN_BUTTON)
  }

  async navigate() {
    await this.page.goto('/')
  }

  async login(user, pass) {
    await this.username.waitFor({ state: 'visible' })
    await this.username.fill(user)
    await this.password.fill(pass)
    await this.loginBtn.click()
    await this.page.waitForURL('**/inventory.html')
  }

}

module.exports = LoginPage