var hitPoints = [140, 120, 110, 170];
var attackValues = [10, 5, 7, 4];
var counterAttack = [25, 40, 30, 55];
var imageIdArray = ["vaderImg", "obiwanImg", "yodaImg", "jarjarImg"];
var imageSourceArray = ["assets/images/darthVader.jpg", "assets/images/obiWan.jpg", "assets/images/yoda.jpg", "assets/images/darthJarJar.jpg"];
var imageAltArray = ["Darth Vader", "ObiWan Kenobi", "Yoda", "Darth Jar Jar Binks"]
var topHolderArray = ["#vaderHolder", "#obiwanHolder", "#yodaHolder", "#jarjarHolder"];
var charSelector = -1;
var enemSelector = -1;
var yourChar = false;
var enemChar = false;

for (var i=0; i<hitPoints.length; i++) {
    var image = createImage(i);
    $(topHolderArray[i]).append(image);
}

function createImage (i) {
    var heroFigure=$("<figure>")
    var imageHero = $("<img>");
    imageHero.addClass("heroImage figure-img m-0 rounded");
    imageHero.attr("src", imageSourceArray[i]);
    imageHero.attr("alt", imageAltArray[i]);
    heroFigure.append(imageHero);
    heroFigure.addClass("figure");
    heroFigure.attr("id", imageIdArray[i]);
    heroFigure.attr("data-hitPointValue", hitPoints[i]);
    heroFigure.attr("data-attackValue", attackValues[i]);
    heroFigure.attr("data-counterAttack", counterAttack[i]);
    var heroCaption = $("<figcaption>");
    heroCaption.addClass("figure-caption text-center text-primary captionBackground mt-1 rounded");
    heroCaption.append(imageAltArray[i] + "<br>Hit Points: " + hitPoints[i]);
    heroFigure.append(heroCaption);
    return heroFigure;
}

function characterSelected (i) {
    for (var j=0; j<hitPoints.length;j++) {
        $(topHolderArray[j]).empty();
    }
}

$("#vaderImg").on("click", function() {
    charSelector = 0;
    characterSelected(charSelector);
});

$("#obiwanImg").on("click", function () {
    charSelector = 1;
    characterSelected(charSelector);
});

$("#yodaImg").on("click", function () {
    charSelector = 2;
    characterSelected(charSelector);
});

$("#jarjarImg").on("click", function() {
    charSelector = 3;
    characterSelected(charSelector);
});
