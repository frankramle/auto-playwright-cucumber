const { When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')

const InventoryPage = require('../pages/inventoryPage')

Then('I should see the products page', async function () {
  this.inventoryPage = new InventoryPage(this.page)
  await expect(this.inventoryPage.productsTitle).toBeVisible()
})

When('I add {string} to the cart', async function (productName) {
  await this.inventoryPage.addProductToCart(productName)
})

Then('I should see {string} item in the cart', async function (count) {
  await expect(this.inventoryPage.cartBadge).toHaveText(count)
})

Then('I logout', async function () {
  await this.inventoryPage.logout()
})
