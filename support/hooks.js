const { Before, After } = require('@cucumber/cucumber')
const { chromium } = require('playwright')
const config = require('../playwright.config')

/**
 * Sets up browser, context and page before each scenario.
 */
Before( async function () {
  const headless = process.env.HEADLESS === 'true' ? true : config.use.headless

  this.browser = await chromium.launch({
    headless: headless
  });
  this.context = await this.browser.newContext({
    viewport: config.use.viewport,
    baseURL: config.use.baseURL
  });
  this.page = await this.context.newPage()
});

/**
 * Closes browser after each scenario.
 */
After( async function () {
  await this.browser.close()
});