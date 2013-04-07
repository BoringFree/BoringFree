    // JavaScript Document

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    navigator.splashscreen.hide();
}

function get_detailed_people(elem) {
    var pid = elem.currentTarget.attributes[2].nodeValue;
    window.location.href = '#tabstrip-detailed';
    $.ajax({
        url: "http://boringfree.com/api/",
        type: 'get',
        crossDomain: true,
        ProcessData: true,
        data: {
           appkey: 'test',
           cmd: 'persong',
           params: {
               pid: pid
           }
        },
        contentType: "application/json; charset=utf-8",
        dataType: 'jsonp',
        success: function(info) {
            console.log(info);
            var html_content = '';
            html_content += '<div class="detailed_people_container">';
            html_content += '<img src="'+info.photo+'" class="item_type_icon" />';
            html_content += '<div class="item_title">'+info.name+'</div>';
            html_content += '<div class="item_owner_info">'+info.email+' - '+info.phone+'</div>';
            html_content += '</div><hr/>';
            $('.detailed_result').html(html_content);
        },
        error: function() {
            alert('luck? ');
        }
    });
}

function get_events() {
    jQuery.support.cors = true;
    //e.preventDefault();
    window.location.href = '#tabstrip-list';
    $.ajax({
        url: "http://boringfree.com/api/",
        type: 'get',
        crossDomain: true,
        ProcessData: true,
        data: {
           appkey: 'test',
           cmd: 'events',
           params: {
               pid: 3
           }
        },
        contentType: "application/json; charset=utf-8",
        dataType: 'jsonp',
        success: function(info) {
            var html_content = '';
            console.log(info);
            
            for(var i = 0; i < info.length; i++) {
                //console.log(info[i]);
                html_content += '<div class="event_container" data-bind="events:{click: listener}" id="'+info[i].eid+'">';
                html_content += '<img src="../styles/img/'+info[i].type+'" class="item_type_icon" />';
                html_content += '<div class="item_title">'+info[i].title+'</div>';
                html_content += '<div class="item_desc">'+info[i]+' - '+info[i].location+' <div class="item_time">'+info[i].start+'-'+info[i].end+'</div></div>';
                html_content += '<div class="item_owner_info">'+info[i].pname+' - '+info[i].pphone+'</div>';
                html_content += '</div><hr/>';
            }
            $('.result').children().remove();
            $('.result').html(html_content);
            //$('.result').html(data);
        },
        error: function() {
            alert('luck? ');
        }
    });
    
    return false;
}

function get_people() {
    jQuery.support.cors = true;
    //e.preventDefault();
    window.location.href = '#tabstrip-list';
    $.ajax({
        url: "http://boringfree.com/api/",
        type: 'get',
        crossDomain: true,
        ProcessData: true,
        data: {
           appkey: 'test',
           cmd: 'persons',
           params: {
               pid: 3
           }
        },
        contentType: "application/json; charset=utf-8",
        dataType: 'jsonp',
        success: function(info) {
            var html_content = '';
            console.log(info);
            for(var i = 0; i < info.length; i++) {
                //console.log(info[i]);
                html_content += '<div class="people_container" data-bind="events:{click: listener}" id="'+info[i].pid+'">';
                html_content += '<img src="'+info[i].photo+'" class="item_type_icon" />';
                html_content += '<div class="item_title">'+info[i].name+'</div>';
                html_content += '<div class="item_owner_info">'+info[i].email+' - '+info[i].phone+'</div>';
                html_content += '</div><hr/>';
            }
            
            $('.result').children().remove();
            $('.result').html(html_content);
            kendo.bind($(".event_container"), detailed_events_view);
            kendo.bind($(".people_container"), detailed_people_view);
            //$('.result').html(data);
        },
        error: function() {
            alert('luck? ');
        }
    });
    
    return false;
}

function generate_markup(info_data){
    
}
