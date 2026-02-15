import { config as baseConfig } from "./wdio.conf.ts";
import path from "path";

export const config = {
  ...baseConfig,
  port: 4723,
  capabilities: [
    {
      platformName: "iOS",
      "appium:deviceName": "iPhone 16",
      "appium:platformVersion": "18.2",
      "appium:app": path.resolve("./apps/your-app.app"),
      "appium:automationName": "XCUITest",
      "appium:noReset": true,
    },
  ],
};
