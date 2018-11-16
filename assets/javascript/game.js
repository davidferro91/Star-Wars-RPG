var hitPoints = [110, 140, 120, 170];
var attackValues = [10, 5, 7, 4];
var counterAttack = [25, 40, 30, 55];
var imageIdArray = ["vaderImg", "obiwanImg", "yodaImg", "jarjarImg"];
var imageSourceArray = ["assets/images/darthVader.jpg", "assets/images/obiWan.jpg", "assets/images/yoda.jpg", "assets/images/darthJarJar.jpg"];
var imageAltArray = ["Darth Vader", "ObiWan Kenobi", "Yoda", "Darth Jar Jar"]
var topHolderArray = ["#vaderHolder", "#obiwanHolder", "#yodaHolder", "#jarjarHolder"];

for (var i=0; i<hitPoints.length; i++) {
    var image = createImage(i);
    $(topHolderArray[i]).append(image);
}

function createImage (i) {
    var imageHero = $("<img>");
    imageHero.addClass("heroImage");
    imageHero.attr("id", imageIdArray[i]);
    imageHero.attr("src", imageSourceArray[i]);
    imageHero.attr("alt", imageAltArray[i]);
    imageHero.attr("data-hitPointValue", hitPoints[i]);
    imageHero.attr("data-attackValue", attackValues[i]);
    imageHero.attr("data-counterAttack", counterAttack[i]);
    return imageHero;
}

$("#vaderImg").on("click", function() {
    
});

$("#obiwanImg").on("click", function () {

});

$("#yodaImg").on("click", function () {

});

$("jarjarImg").on("click", function() {

});
