/**
* Bootstrap-Admin-Template v2.1.3
* Author : [object Object] 
* Copyright 2014
* Licensed under ,, (,,)
*/
/* Start Countdown Settings */

var startDate = new Date("01/01/2013");
var endDate = new Date("04/06/2014");

var dif = endDate.getTime() - startDate.getTime();
var difToSecond = dif / 1000;
var defaultPercent = 0;


$(function () {
    $('#counter').countdown({
        until: endDate,
        layout: '<div></div>',
        onTick: updateBar
    });

    $('a[rel=tooltip]').tooltip();
    $('div[rel=tooltip]').tooltip();
});

function updateBar(periods) {

    fillSecondBar(periods[6]);
    fillMinuteBar(periods[5]);
    fillHourBar(periods[4]);
    fillDayBar(periods[3]);

    fillTotalbar(periods[6] + periods[5] * 60 + periods[4] * 60 * 60 + periods[3] * 60 * 60 * 24);
}

function fillSecondBar(percent) {
    $('#second-number').html(percent);
    $('#second-bar').css('width', percent * 100 / 60 + '%');
}

function fillMinuteBar(percent) {
    $('#minute-number').html(percent);
    $('#minute-bar').css('width', percent * 100 / 60 + '%');
}

function fillHourBar(percent) {
    $('#hour-number').html(percent);
    $('#hour-bar').css('width', percent * 100 / 24 + '%');
}

function fillDayBar(percent) {
    $('#day-number').html(percent);
    $('#day-bar').css('width', percent * 100 / 365 + '%');
}

function fillTotalbar(percent) {
    defaultPercent = 100 - 100 * percent / difToSecond;

    if (defaultPercent >= 10) {
        currentPercent = defaultPercent.toString().substr(0, 5);
    } else {
        currentPercent = defaultPercent.toString().substr(0, 4);
    }

    $('#total-bar').css('width', defaultPercent + '%').html(currentPercent + '%');
}


/* Start Google Map*/

var map;

map = new GMaps({
        el: '#map_canvas',
        lat: -12.043333,
        lng: -77.028333,
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false
    });


/* Start Form validation*/

$(function () {

    $('#emailForm').validate({
        rules: {
            email1: {
                required: true,
                email: true
            }
        },
        errorClass: 'help-block',
        errorElement: 'span',
        highlight: function (element, errorClass, validClass) {
            $(element).parents('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents('.form-group').removeClass('has-error').addClass('has-success');
        }
    });
    $('#messageForm').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
        errorClass: 'help-block',
        errorElement: 'span',
        highlight: function (element, errorClass, validClass) {
            $(element).parents('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents('.form-group').removeClass('has-error').addClass('has-success');
        }
    });
});