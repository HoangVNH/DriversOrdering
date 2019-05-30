import $ from 'jquery';



$(document).ready(function () {

    $(function () {

        $('.menu-btn').on('click', function () {
            $('main').toggleClass('toggled');
            $(this).toggleClass("button-open");
        })

    });

    $('.tab a').on('click', function (e) {

        
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
    })



})