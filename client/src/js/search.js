import $ from 'jquery';

$(document).ready(function () {

    $(function () {

        $('.showInfo').on('click', function () {
            $('nav').toggleClass('showInfoCheck');

        })
    });

})