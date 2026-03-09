const { When, Then } = require('@cucumber/cucumber')
const assert = require('assert')

const InventoryPage = require('../pages/inventoryPage')

Then('I should see the products page', async function () {
  this.inventoryPage = new InventoryPage(this.page)
  const visible = await this.inventoryPage.isProductsVisible()
  assert.strictEqual(visible, true)
})

When('I add {string} to the cart', async function (productName) {
  await this.inventoryPage.addProductToCart(productName)
})

Then('I should see {string} item in the cart', async function (count) {
  const cartCount = await this.inventoryPage.getCartCount()
  assert.strictEqual(cartCount, count)
})

Then('I logout', async function () {
  await this.inventoryPage.logout()
})
