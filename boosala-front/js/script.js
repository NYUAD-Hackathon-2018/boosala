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

$("#submit").click(function (){
    me = $( "#me" ).val();
    their = $( "#their" ).val();
    localStorage.setItem("me", me);
    localStorage.setItem("their", their);
    $("#their-name").text(their);
    $("#search").hide();
    $("#home").hide();
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