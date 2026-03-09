/** @constant {Object} Selectors for inventory page elements */
const SELECTORS = {
  PRODUCTS_TITLE: '.title',
  ADD_BACKPACK: '#add-to-cart-sauce-labs-backpack',
  CART_ICON: '.shopping_cart_link',
  CART_BADGE: '.shopping_cart_badge',
  MENU_BUTTON: '#react-burger-menu-btn',
  LOGOUT_LINK: '#logout_sidebar_link'
}

/**
 * Page Object for the Inventory/Products page.
 */
class InventoryPage {

  /**
   * @param {import('playwright').Page} page - Playwright page instance
   */
  constructor(page) {
    this.page = page
    this.productsTitle = page.locator(SELECTORS.PRODUCTS_TITLE)
    this.addBackpack = page.locator(SELECTORS.ADD_BACKPACK)
    this.cartIcon = page.locator(SELECTORS.CART_ICON)
    this.cartBadge = page.locator(SELECTORS.CART_BADGE)
    this.menuButton = page.locator(SELECTORS.MENU_BUTTON)
    this.logoutLink = page.locator(SELECTORS.LOGOUT_LINK)
  }

  /**
   * Adds a product to the cart by name.
   * @param {string} productName - Product name to add
   */
  async addProductToCart(productName) {
    const productId = productName.toLowerCase().replace(/ /g, '-')
    const addButton = this.page.locator(`#add-to-cart-${productId}`)
    await addButton.click()
  }

  /** Logs out the current user. */
  async logout() {
    await this.menuButton.click()
    await this.logoutLink.click()
    await this.page.waitForURL('**/')
  }
}

module.exports = InventoryPage