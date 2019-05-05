$(document).ready(function(){

    $("#item1").click(function(){
        window.location = $(this).attr("href");
    });

});

$(document).ready(function(){

    $("#item2").click(function(){
        window.location = $(this).attr("href");
    });

});
$(document).ready(function(){

  
    document.getElementById('seedNum').innerHTML = localStorage.getItem("numOfSeed");

});