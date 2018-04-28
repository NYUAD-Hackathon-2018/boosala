$("#start").click(function () {
    $("#search").show();
    $("#home").hide();
});

$("#back").click(function () {
    $("#home").show();
    $("#search").hide();
});


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#picture')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}