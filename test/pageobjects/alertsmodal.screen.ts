class AlertsModal {
    get Container(){
        return $('android=new UiSelector().resourceId("alert_details_modal_container")');
    }
}

export default new AlertsModal();