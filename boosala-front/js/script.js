$("#start").click(function () {
    $("#search").show();
    $("#home").hide();
});

$("#back").click(function () {
    $("#home").show();
    $("#search").hide();
});

$("#back_logo").click(function () {
    $("#home").show();
    $("#search").hide();
});

$("#back_to_search").click(function () {
    $("#result").hide();
    $("#home").hide();
    $("#search").show();
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
        // local storage of base64 of family's image for later display?
    }
}

$("#submit").click(function (){
    me = $( "#me" ).val();
    their = $( "#their" ).val();
    localStorage.setItem("me", me);
    localStorage.setItem("their", their);
    $("#their-name").text(their);
    $("#submit").html("Loading...");
    ProcessImage();
    window.setTimeout(function() {$("#search").hide(); $("#home").hide();$("#submit").html("Find");}, 4000);
});


function parseData(dataVals) {
    var matches = dataVals["FaceMatches"];
    var matchFound = false;
    if (matches.length > 0) {
        for (var i = 0; i < matches.length; ++i) {
            var match = matches[i];
            if (match["Similarity"] >= 50) {
                matchFound = true;
                console.log("MATCH");
                $("#result").show();
                return;
            }
        }
    }
    console.log("show not found");
    $("#not-found").show();
    console.log("NO MATCH");
}