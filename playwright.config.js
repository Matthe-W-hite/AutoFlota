const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e',
  timeout: 120000,
  expect: {
    timeout: 10000,
  },
  fullyParallel: false,
  reporter: process.env.CI ? [['github'], ['list']] : [['list']],
  use: {
    actionTimeout: 10000,
    navigationTimeout: 30000,
    baseURL: 'http://127.0.0.1:8082',
    browserName: 'chromium',
    headless: true,
    viewport: { width: 390, height: 844 },
  },
  webServer: {
    command: 'npx expo start --web --port 8082',
    port: 8082,
    env: { CI: '1' },
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
