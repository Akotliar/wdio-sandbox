import homeScreen from "../../pageobjects/home.screen.js";

import { After } from "@cucumber/cucumber";

After({ tags: "@navigateHome" }, async () => {
  await navigateToHomescreen();
});


async function navigateToHomescreen() {
  const maxAttempts = 5;
  let attempts = 0;

  while (attempts < maxAttempts) {
    try {
      // Check if we're already on homescreen by looking for a unique homescreen element
      const homescreenElement = homeScreen.stopCodeSearchInput
      if (await homescreenElement.isDisplayed()) {
        console.log("Already on homescreen");
        return;
      }
    } catch (error) {
      // Element not found, continue navigating
    }

    const currentActivity = await driver.getCurrentActivity();
    if (!currentActivity) {
      const appId = "com.railtok.rideyr";
      await driver.execute("mobile: activateApp", { appId });
      return;
    }

    await driver.back();
    await driver.pause(500);
    attempts++;
  }
}