$("#submit").click(function (){
    me = $( "#me" ).val();
    their = $( "#their" ).val();
    localStorage.setItem("me", me);
    localStorage.setItem("their", their);
    $("#their-name").text(their);

    $("#their-name-not-found").text(their);
    $("#submit").html("..."+" جار البحث عن "+their);

    ProcessImage();
    window.setTimeout(function() {$("#search").hide(); $("#home").hide();$("#submit").html("Find");}, 4000);
});