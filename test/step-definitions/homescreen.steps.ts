import { Given, Then, When } from "@wdio/cucumber-framework";
import homeScreen from "../pageobjects/home.screen.js";
import stopScreen from "../pageobjects/stop.screen.js";
import { StopTimeFlow } from "../flow/stoptime.flow.js";
import alertsmodal from "../pageobjects/alertsmodal.screen.js";

Given("I am on the RideYR Homescreen", async () => {
  const searchInput = await homeScreen.stopCodeSearchInput;
  expect(searchInput).toBeDisplayed();
});

Then(
  "I should be able to search for a stop code in the search input field",
  async () => {
    await StopTimeFlow.navigateToStop(1234);
    await stopScreen.ScreenTitle.waitForDisplayed();
    await stopScreen.NextArrivalHeading.waitForDisplayed();
  },
);

When("I select Service Alerts tab", async () => {
  await homeScreen.alertTabButton.click();
});

Then("I should be able to view active service alerts", async () => {
  await homeScreen.alertsCountLabel.waitForDisplayed();
  await homeScreen.alertCardItems[0].click();
  await alertsmodal.Container.waitForDisplayed();
});
