"use strict";

window.UnicomStatus = {};

$(function() {
    DevExpress.devices.current('iPhone');
    document.addEventListener("deviceready", function() { navigator.splashscreen.hide(); });

    UnicomStatus.app = new DevExpress.framework.html.HtmlApplication({
        namespace: UnicomStatus,
        
        defaultLayout: "empty"
    });

    // enable iOS7 theme
	
    var device = DevExpress.devices.current(),
        iosVersion = DevExpress.devices.iosVersion();
    if(device.platform === "ios" && iosVersion && iosVersion[0] === 7) {
        $(".dx-viewport")
            .removeClass("dx-theme-ios")
            .addClass("dx-theme-ios7");
    }

    UnicomStatus.app.router.register(":view", { view: "home" });
    UnicomStatus.app.navigate();   
});