const SELECTORS = {
  PRODUCTS_TITLE: '.title',
  ADD_BACKPACK: '#add-to-cart-sauce-labs-backpack',
  CART_ICON: '.shopping_cart_link',
  CART_BADGE: '.shopping_cart_badge',
  MENU_BUTTON: '#react-burger-menu-btn',
  LOGOUT_LINK: '#logout_sidebar_link'
}

class InventoryPage {

  constructor(page) {
    this.page = page
    this.productsTitle = page.locator(SELECTORS.PRODUCTS_TITLE)
    this.addBackpack = page.locator(SELECTORS.ADD_BACKPACK)
    this.cartIcon = page.locator(SELECTORS.CART_ICON)
    this.cartBadge = page.locator(SELECTORS.CART_BADGE)
    this.menuButton = page.locator(SELECTORS.MENU_BUTTON)
    this.logoutLink = page.locator(SELECTORS.LOGOUT_LINK)
  }

  async isProductsVisible() {
    await this.productsTitle.waitFor({ state: 'visible', timeout: 10000 })
    return await this.productsTitle.isVisible()
  }

  async addProductToCart(productName) {
    const productId = productName.toLowerCase().replace(/ /g, '-')
    const addButton = this.page.locator(`#add-to-cart-${productId}`)
    await addButton.waitFor({ state: 'visible' })
    await addButton.click()
    await this.cartBadge.waitFor({ state: 'visible' })
  }

  async getCartCount() {
    await this.cartBadge.waitFor({ state: 'visible' })
    return await this.cartBadge.textContent()
  }

  async logout() {
    await this.menuButton.waitFor({ state: 'visible' })
    await this.menuButton.click()
    await this.logoutLink.waitFor({ state: 'visible' })
    await this.logoutLink.click()
    await this.page.waitForURL('**/')
  }
}

module.exports = InventoryPage