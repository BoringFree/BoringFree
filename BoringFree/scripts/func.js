$// JavaScript Document

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    navigator.splashscreen.hide();
}

function get_people() {
    //window.location.href = '#tabstrip-uiinteraction';
    $.ajax({
        url: "http://boringfree.com/api/",
        dataType: "json",
        data: {
            appkey: "test"
            //cmd: "login",
            //params: {
            //    name: "Georgi",
            //    pass: "123"
            //}
        },
        success: function(data) {
            alert("tes");
            $('.result').html('test');
            //$('.result').html(data);
        }
    });
}
