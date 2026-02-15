class HomeScreen {
  get stopCodeSearchInput() {
    return $('android=new UiSelector().resourceId("searchbar_input")');
  }

  get routeTabButton() {
    return $('android=new UiSelector().resourceId("routes_tab_button")');
  }

  get alertTabButton() {
    return $(
      'android=new UiSelector().resourceId("service_alerts_tab_button")',
    );
  }

  get routeList() {
    return $('android=new UiSelector().resourceId("routes_list_container")');
  }

  get alertsCountLabel() {
    return $('android=new UiSelector().resourceId("alerts_count_label")');
  }

  get alertCardItems() {
    return $('android=new UiSelector().resourceId("service_alerts_list")').$$(
      'android=new UiSelector().resourceIdMatches("alert_item_.*")',
    );
  }
}

export default new HomeScreen();
