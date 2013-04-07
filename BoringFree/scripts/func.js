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
            var html_content = '';
            html_content += '<div class="detailed_people_container">';
            html_content += '<img src="'+info.photobig+'" class="item_type_icon fleft" />';
            html_content += '<div class="item_title">'+info.name+'</div>';
            html_content += '<div class="item_owner_info fleft">'+info.email+' - '+info.phone+'</div>';
            html_content += '</div>';
            html_content += '<div class="chat_button" data-bind="events:{click: listener}" >Chat</div>';
            $('.detailed_result').html(html_content);
            kendo.bind($(".chat_button"), chat_view);
        },
        error: function() {
            alert('luck? ');
        }
    });
}

function get_chat() {
    window.location.href = '#tabstrip-chat';
    kendo.bind($("#list_people"), people_view);
    kendo.bind($("#list_events"), events_view);
}


function get_detailed_event(elem) {
    var eid = elem.currentTarget.attributes[2].nodeValue;
    window.location.href = '#tabstrip-detailed';
    $.ajax({
        url: "http://boringfree.com/api/",
        type: 'get',
        crossDomain: true,
        ProcessData: true,
        data: {
           appkey: 'test',
           cmd: 'eventg',
           params: {
               eid: eid
           }
        },
        contentType: "application/json; charset=utf-8",
        dataType: 'jsonp',
        success: function(info) {
            console.log(info);
            var html_content = '';
            html_content += '<div class="detailed_event_container">';
            html_content += '<img src="styles/img/'+info.type+'.png" class="item_type_icon" />';
            html_content += '<div class="item_title">'+info.title+'</div>';
            html_content += '<div class="item_title">'+info.info+'</div>';
            html_content += '<div class="item_desc">'+info.description+' - '+info.location+' <div class="item_time">'+info.start+'-'+info.end+'</div></div>';
            html_content += '<div class="item_owner_info">'+info.pname+' - '+info.pphone+'</div>';
            html_content += '</div>';
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
    window.location.href = '#tabstrip-list_events';
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
                html_content += '<img src="styles/img/'+info[i].type+'.png" class="item_type_icon fleft" />';
                html_content += '<div class="item_title fleft">'+info[i].title+'</div>';
                html_content += '<div class="item_desc">'+info[i].city+' - '+info[i].location+' <div class="item_time">'+info[i].start+'-'+info[i].end+'</div></div>';
                html_content += '<div class="clr"></div>';
                html_content += '</div>';
            }
            $('.result').children().remove();
            $('.result').html(html_content);
            kendo.bind($(".event_container"), detailed_events_view);
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
    window.location.href = '#tabstrip-list_people';
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
                html_content += '<img src="'+info[i].photo+'" class="item_type_icon fleft" />';
                html_content += '<div class="item_title fleft">'+info[i].name+'</div>';
                html_content += '<div class="item_owner_info fleft">'+info[i].email+' - '+info[i].phone+'</div>';
                html_content += '</div>';
            }
            
            $('.result').children().remove();
            $('.result').html(html_content);
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
