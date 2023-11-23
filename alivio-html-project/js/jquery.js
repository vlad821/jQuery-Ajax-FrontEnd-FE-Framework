
//         // jQuery code
// 	  $(document).ready(function () {
//     setInterval(function() {
//         var a = $("#myh");
//         a.hide(2000).delay(2000).show(2000).text('MANAGE WELL').hide(2000).delay(2000).show(2000).text('BE AWARE');
//     }, 5000); // Repeat every 7 seconds
// });

$(document).ready(function() {
    var element = $("#myh");
    var texts = ["BE AWARE", "STAY CALM", "RULE WELL"]; // Array of texts to cycle through
    var currentTextIndex = 0; // Variable to keep track of the current text index

    setInterval(function() {
        element.fadeOut(1000, function() {
            $(this).text(texts[currentTextIndex]).fadeIn(1000);
            currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to the next text
        });
    }, 3000); // Change text every 3 seconds (3000 milliseconds)
});


  
  