class StopScreen {
  get ScreenTitle() {
    return $('//android.widget.TextView[starts-with(@text, "Stop #")]');
  }
  
  get NextArrivalHeading () {
    return $('//android.widget.TextView[@text ="Next Arrival"]');
  }
}


export default new StopScreen();
