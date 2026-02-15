import homeScreen from "../pageobjects/home.screen.ts";

export class StopTimeFlow {
  static async navigateToStop(stopNumber: number) {
     const searchInput = await homeScreen.stopCodeSearchInput;
     await searchInput.click();
     await searchInput.setValue(stopNumber);
     await driver.pressKeyCode(66);
  }
}
