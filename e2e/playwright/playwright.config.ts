import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',
  reporter: 'html',
  use: {
    headless: true,
    baseURL: 'https://github.com',
    trace: 'on-first-retry',
  }

});
