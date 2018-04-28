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
    $("#their-name").text(me);
    $("#search").hide();
    $("#home").hide();
});


function parseData(dataVals) {
var jsonData = JSON.parse(dataVals);
var matchFound=false;
for (var i = 0; i < jsonData.counters.length; i++) {
   var counter = jsonData.counters[i];
   if(counter.similarity>70) {
       matchFound = true;
       $("#result").show();
   }
}
}