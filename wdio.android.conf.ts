import { config as baseConfig } from './wdio.conf.ts';
import path from 'path';

export const config = {
  ...baseConfig,
  port: 4723,
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Pixel 6a",
      "appium:udid": "adb-26251JEGR15039-zxVANS._adb-tls-connect._tcp",
      "appium:app": path.resolve("./apps/composeApp-debug.apk"),
      "appium:automationName": "UiAutomator2",
      "appium:noReset": false,
    },
  ],
};