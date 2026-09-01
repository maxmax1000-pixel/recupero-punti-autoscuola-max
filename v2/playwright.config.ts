import { defineConfig, devices } from "@playwright/test";

declare const process: {
  execPath: string;
};

const nodeCommand = JSON.stringify(process.execPath);

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
        headless: true,
        ...devices["Desktop Chrome"],
      },
    },
  ],
  webServer: {
    command: `${nodeCommand} ./node_modules/vite/bin/vite.js --host 127.0.0.1 --port 4173`,
    url: "http://127.0.0.1:4173",
    reuseExistingServer: false,
    timeout: 120000,
  },
});
