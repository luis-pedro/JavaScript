//keydow
document.addEventListener("keydow", function(event) {

    console.log(event);;

    if(event.key ===  "Enter") {
        console.log("Apertou Enter");
    }
 
});

//keyup
document.addEventListener("keyup", function(e) {

    console.log("Soltou o Enter");

});