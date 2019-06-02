import $ from 'jquery';
$(document).ready(function () {
    $("#file").on("change", function (e) {
        var files = $(this)[0].files;
        if (files.length >= 2) {
            $(".file_label").text(files.length + " ảnh đã chọn");
        } else {
            var fileName = e.target.value.split("\\").pop();
            $(".file_label").text(fileName);
        }
    });
});