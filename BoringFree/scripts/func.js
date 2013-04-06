,// JavaScript Document

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    navigator.splashscreen.hide();
}

function get_people() {
    jQuery.support.cors = true;
    alert('dev');
    //e.preventDefault();
    //window.location.href = '#tabstrip-uiinteraction';
    $.ajax({
        url: "http://boringfree.com/api/index.php?appkey=test",
        type: 'get',
        crossDomain: true,
        ProcessData: true,
        contentType: "application/json; charset=utf-8",
        dataType: 'jsonp',
        success: function(info) {
            alert(info);
            console.log(info);
            //$('.result').html(data);
        },
        error: function() {
            alert('luck? ');
        }
    });
    
    return false;
}
