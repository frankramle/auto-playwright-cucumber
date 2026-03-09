/** @constant {Object} Selectors for login page elements */
const SELECTORS = {
  USERNAME: '#user-name',
  PASSWORD: '#password',
  LOGIN_BUTTON: '#login-button'
}

/**
 * Page Object for the Login page.
 */
class LoginPage {

  /**
   * @param {import('playwright').Page} page - Playwright page instance
   */
  constructor(page) {
    this.page = page
    this.username = page.locator(SELECTORS.USERNAME)
    this.password = page.locator(SELECTORS.PASSWORD)
    this.loginBtn = page.locator(SELECTORS.LOGIN_BUTTON)
  }

  /** Navigates to the login page. */
  async navigate() {
    await this.page.goto('/')
  }

  /**
   * Logs in with the given credentials.
   * @param {string} user - Username
   * @param {string} pass - Password
   */
  async login(user, pass) {
    await this.username.waitFor({ state: 'visible' })
    await this.username.fill(user)
    await this.password.fill(pass)
    await this.loginBtn.click()
    await this.page.waitForURL('**/inventory.html')
  }

}

module.exports = LoginPage