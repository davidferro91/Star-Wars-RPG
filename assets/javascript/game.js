var hitPoints = [140, 120, 110, 170];
var attackValues = [10, 5, 7, 4];
var counterAttack = [25, 40, 30, 55];
var imageIdArray = ["vaderImg", "obiwanImg", "yodaImg", "jarjarImg"];
var imageSourceArray = ["assets/images/darthVader.jpg", "assets/images/obiWan.jpg", "assets/images/yoda.jpg", "assets/images/darthJarJar.jpg"];
var imageAltArray = ["Darth Vader", "ObiWan Kenobi", "Yoda", "Darth Jar Jar Binks"];
var topHolderArray = ["#vaderHolder", "#obiwanHolder", "#yodaHolder", "#jarjarHolder"];
var yourHolderArray = ["#yourVaderHolder", "#yourObiwanHolder", "#yourYodaHolder", "#yourJarjarHolder"];
var enemHolderArray = ["#enemVaderHolder", "#enemObiwanHolder", "#enemYodaHolder", "#enemJarjarHolder"];
var defHolderArray = ["#defVaderHolder", "#defObiwanHolder", "#defYodaHolder", "#defJarjarHolder"];
var charSelector = -1;
var enemSelector = -1;
var yourChar = false;
var enemChar = false;

for (var i=0; i<hitPoints.length; i++) {
    var topImage = createImage(i);
    $(topHolderArray[i]).append(topImage);
    var yourImage = createImage(i);
    $(yourHolderArray[i]).append(yourImage);
    $(yourHolderArray[i]).hide();
    var enemImage = createImage(i);
    enemImage.attr("id", imageIdArray[i]+"2");
    $(enemHolderArray[i]).append(enemImage);
    $(enemHolderArray[i]).hide();
    var defImage = createImage(i);
    $(defHolderArray[i]).append(defImage);
    $(defHolderArray[i]).hide();
}
$("#restBtn").hide();

function createImage (i) {
    var heroFigure = $("<figure>")
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
        $(topHolderArray[j]).hide();
    }
    yourChar=true;
    $(yourHolderArray[i]).show();
    for (var j=1;j<hitPoints.length;j++) {
        $(enemHolderArray[(i+j)%4]).show();
    }
}

function enemySelected (i) {
    $(enemHolderArray[i]).hide();
    enemChar=true;
    $(defHolderArray[i]).show();
}

$("#vaderImg").on("click", function() {
    if (yourChar == false) {
        charSelector = 0;
        characterSelected(charSelector);
    }
});

$("#obiwanImg").on("click", function () {
    if (yourChar == false) {
        charSelector = 1;
        characterSelected(charSelector);
    }
});

$("#yodaImg").on("click", function () {
    if (yourChar == false) {
        charSelector = 2;
        characterSelected(charSelector);
    }
});

$("#jarjarImg").on("click", function() {
    if (yourChar == false) {
        charSelector = 3;
        characterSelected(charSelector);
    }
});

$("#vaderImg2").on("click", function () {
    if (charSelector != 0 && enemChar == false) {
        enemSelector = 0;
        enemySelected(enemSelector);
    }
});

$("#obiwanImg2").on("click", function(){
    if (charSelector != 1 && enemChar == false) {
        enemSelector = 1;
        enemySelected(enemSelector);
    }
});

$("#yodaImg2").on("click", function () {
    if (charSelector != 2 && enemChar == false) {
        enemSelector = 2;
        enemySelected(enemSelector);
    }
});

$("#jarjarImg2").on("click", function(){
    if (charSelector != 3 && enemChar == false) {
        enemSelector = 3;
        enemySelected(enemSelector);
    }
});