import $ from 'jquery';

$(document).ready(function () {

    $(function () {

        $('.menu-btn').on('click', function () {
            $('nav').toggleClass('toggled');
            $('main').toggleClass('toggled-map');
            $(this).toggleClass("button-open");
        })

        $('.cli').on('click', function () {
            $('nav').toggleClass('toggled');
            $('main').toggleClass('toggled-map');
            $('.menu-btn').toggleClass("button-open");
        })

    });

    $('.tab a').on('click', function (e) {

        
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
    })



})