$(function () {
    "use strict";
    //This is for the Notification top right
    $.toast({
        heading: 'Welcome to Tourist Management System'
        , text: 'Have A Nice Time.'
        , position: 'top-right'
        , loaderBg: '#ff6849'
        , icon: 'info'
        , hideAfter: 3500
        , stack: 6
    })
    // Dashboard 1 Morris-chart
    Morris.Area({
        element: 'morris-area-chart'
        , data: [{
            period: '2013'
            , LALIBELA: 40
            , AXUM: 80
            , GONDAR: 30
        }, {
            period: '2014'
            , LALIBELA: 50
            , AXUM: 80
            , GONDAR: 20
        }, {
            period: '2015'
            , LALIBELA: 80
            , AXUM: 80
            , GONDAR: 56
        }, {
            period: '2016'
            , LALIBELA: 90
            , AXUM: 30
            , GONDAR: 50
        }, {
            period: '2017'
            , LALIBELA: 30
            , AXUM: 60
            , GONDAR: 80
        }, {
            period: '2018'
            , LALIBELA: 90
            , AXUM: 90
            , GONDAR: 90
        }
            , {
                period: '2019'
                , LALIBELA: 10
                , AXUM: 60
                , GONDAR: 80
            }]
        , xkey: 'period'
        , ykeys: ['LALIBELA', 'AXUM', 'GONDAR']
        , labels: ['LALIBELA', 'AXUM', 'GONDAR']
        , pointSize: 3
        , fillOpacity: 0
        , pointStrokeColors: ['#00bfc7', '#fb9678', '#9675ce']
        , behaveLikeLine: true
        , gridLineColor: '#e0e0e0'
        , lineWidth: 3
        , hideHover: 'auto'
        , lineColors: ['#00bfc7', '#fb9678', '#9675ce']
        , resize: true
    });


    Morris.Area({
        element: 'morris-area-chart3'
        , data: [{
            period: 'April 1'
            , iphone: 10999
        }, {
            period: 'April 2'
            , iphone: 11667
        }, {
            period: 'April 3'
            , iphone: 24912
        }, {
            period: 'April 4'
            , iphone: 36767
        }, {
            period: 'April 5'
            , iphone: 16810
        }, {
            period: 'April 6'
            , iphone: 15670
        }, {
            period: 'April 7'
            , iphone: 12820
        }, {
            period: 'April 8'
            , iphone: 15073
        }, {
            period: 'April 9'
            , iphone: 8807
        }, {
            period: 'April 10'
            , iphone: 1800
        }


        ]
        , lineColors: ['#a5d9c7']
        , xkey: 'period'
        ,parseTime: false
        , ykeys: ['iphone']
        , labels: ['Total Sale']
        , pointSize: 0
        , lineWidth: 0
        , fillOpacity: 1
        , resize: true
        , behaveLikeLine: true
        , gridLineColor: '#e0e0e0'
        , hideHover: 'auto'
    });







    Morris.Area({
        element: 'morris-area-chart2'
        , data: [{
            period: '2013'
            , LOCAL: 10
            , FOREIGN: 20
            , }, {
            period: '2014'
            , LOCAL: 130
            , FOREIGN: 100
            , }, {
            period: '2015'
            , LOCAL: 80
            , FOREIGN: 60
            , }, {
            period: '2016'
            , LOCAL: 70
            , FOREIGN: 200
            , }, {
            period: '2017'
            , LOCAL: 180
            , FOREIGN: 150
            , }, {
            period: '2018'
            , LOCAL: 105
            , FOREIGN: 90
            , }
            , {
                period: '2019'
                , LOCAL: 250
                , FOREIGN: 150
                , }]
        , xkey: 'period'
        , ykeys: ['LOCAL', 'FOREIGN']
        , labels: ['LOCAL', 'FOREIGN']
        , pointSize: 0
        , fillOpacity: 0.4
        , pointStrokeColors: ['#b4becb', '#01c0c8']
        , behaveLikeLine: true
        , gridLineColor: '#e0e0e0'
        , lineWidth: 0
        , smooth: false
        , hideHover: 'auto'
        , lineColors: ['#b4becb', '#01c0c8']
        , resize: true
    });
});
// sparkline
var sparklineLogin = function() {
    $('#sales1').sparkline([20, 40, 30], {
        type: 'pie',
        height: '90',
        resize: true,
        sliceColors: ['#01c0c8', '#7d5ab6', '#ffffff']
    });
    $('#sparkline2dash').sparkline([6, 10, 9, 11, 9, 10, 12], {
        type: 'bar',
        height: '154',
        barWidth: '4',
        resize: true,
        barSpacing: '10',
        barColor: '#25a6f7'
    });

};
var sparkResize;

$(window).resize(function(e) {
    clearTimeout(sparkResize);
    sparkResize = setTimeout(sparklineLogin, 500);
});
sparklineLogin();
