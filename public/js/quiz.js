var score = localStorage.getItem("numOfSeed");

$(document).ready(function(){
// var firebaseConfig = {
//   apiKey: "AIzaSyCACZPJJ4gnsfceKLEpqQPpm1JDNDVKarY",
//   authDomain: "clime-b5f97.firebaseapp.com",
//   databaseURL: "https://clime-b5f97.firebaseio.com",
//   projectId: "clime-b5f97",
//   storageBucket: "clime-b5f97.appspot.com",
//   messagingSenderId: "334342587603",
//   appId: "1:334342587603:web:54478d2843b875c9"
// };
// firebase.initializeApp(firebaseConfig);

console.log(firebase);

//
// var data = {
//     name: "Hannah",
//     quiz: "today?"
// };
//
// ref.push(data);


});
// var database = firebase.database();
// // Import Admin SDK
// var admin = require("firebase-admin");
//
// // Get a database reference to our posts
// var db = admin.database();
// var ref = db.ref("server/saving-data/fireblog/posts");
//
// // Attach an asynchronous callback to read the data at our posts reference
// ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

function incrementSeed() {
    score++;
    console.log("increment number of seed");
    localStorage.setItem("numOfSeed", score);

}
console.log("store number of seed in local storage")
$(document).ready(function(){

  
    document.getElementById('seedNum').innerHTML = localStorage.getItem("numOfSeed");

});


$(function(){
    var loading = $('#loadbar').hide();
    $(document)
        .ajaxStart(function () {
            loading.show();
        }).ajaxStop(function () {
        loading.hide();
    });

    $("label.btn").on('click',function () {
        var choice = $(this).find('input:radio').val();
        $('#loadbar').show();
        $('#quiz').fadeOut();
        setTimeout(function(){
            $( "#answer" ).html(  $(this).checking(choice) );
            $('#quiz').show();
            $('#loadbar').fadeOut();
            /* something else */
        }, 1500);
    });

    $ans = 3;

    // $.fn.checking = function(ck) {
    //     if (ck != $ans)
    //         return 'INCORRECT';
    //     else
    //         return 'CORRECT';:
    // };
});
