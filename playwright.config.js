module.exports = {
  timeout: 30000,
  use: {
    browserName: 'chromium',
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://www.saucedemo.com'
  },
  retries: 1
}
