import $ from 'jquery';

$(document).ready(function () {

    $(function () {

        $('.menu-btn').on('click', function () {
            $('main').toggleClass('toggled');
            $(this).toggleClass("button-open");
        })

    });


})