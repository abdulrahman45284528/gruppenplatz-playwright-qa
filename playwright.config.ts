import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve('./global-setup'),

  use: {
    baseURL: 'https://gruppenplatz.healthycloud.de/HC_GP_Public_Pages/',
    storageState: 'storageState.json',
  },
});
