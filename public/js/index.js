
$(document).ready(function(){

    $("#forItem").click(function(){
        window.location = $(this).attr("href");
    });
    document.getElementById('seedNum').innerHTML = localStorage.getItem("numOfSeed");
    console.log(localStorage.getItem("numOfSeed"));

});

$(document).ready(function(){

    $("#forDiscount").click(function(){
        window.location = $(this).attr("href");
    });

});

$(document).ready(function(){

    $("#forQuiz").click(function(){
        window.location = $(this).attr("href");
    });

});

$(document).ready(function(){

    $("#quizBanner").click(function(){
        window.location = $(this).attr("href");
    });
});

