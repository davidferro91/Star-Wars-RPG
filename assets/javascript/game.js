var hitPoints = [140, 120, 110, 170];
var attackValues = [8, 3, 6, 4];
var counterAttack = [35, 25, 20, 45];
var imageIdArray = ["vaderImg", "obiwanImg", "yodaImg", "jarjarImg"];
var imageSourceArray = ["assets/images/darthVader.jpg", "assets/images/obiWan.jpg", "assets/images/yoda.jpg", "assets/images/darthJarJar.jpg"];
var imageAltArray = ["Darth Vader", "Obi-Wan Kenobi", "Yoda", "Darth Jar Jar"];
var topHolderArray = ["#vaderHolder", "#obiwanHolder", "#yodaHolder", "#jarjarHolder"];
var yourHolderArray = ["#yourVaderHolder", "#yourObiwanHolder", "#yourYodaHolder", "#yourJarjarHolder"];
var enemHolderArray = ["#enemVaderHolder", "#enemObiwanHolder", "#enemYodaHolder", "#enemJarjarHolder"];
var defHolderArray = ["#defVaderHolder", "#defObiwanHolder", "#defYodaHolder", "#defJarjarHolder"];
var charSelector = -1;
var enemSelector = -1;
var yourChar = false;
var enemChar = false;
var attNumber = 0;
var winNumber = 0;

for (var i=0; i<hitPoints.length; i++) {
    var topImage = createImage(i);
    $(topHolderArray[i]).append(topImage);
    var yourImage = createImage(i);
    yourImage.attr("id", imageIdArray[i]+"2")
    $(yourHolderArray[i]).append(yourImage);
    $(yourHolderArray[i]).hide();
    var enemImage = createImage(i);
    enemImage.attr("id", imageIdArray[i]+"3");
    $(enemHolderArray[i]).append(enemImage);
    $(enemHolderArray[i]).hide();
    var defImage = createImage(i);
    defImage.attr("id", imageIdArray[i]+"4");
    $(defHolderArray[i]).append(defImage);
    $(defHolderArray[i]).hide();
}
$("#resetBtn").hide();
$("#attackInfo").hide();

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
    heroCaption.addClass("figure-caption text-center captionBackground mt-1 rounded");
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

$("#vaderImg3").on("click", function () {
    if (charSelector != 0 && enemChar == false) {
        enemSelector = 0;
        enemySelected(enemSelector);
    }
});

$("#obiwanImg3").on("click", function(){
    if (charSelector != 1 && enemChar == false) {
        enemSelector = 1;
        enemySelected(enemSelector);
    }
});

$("#yodaImg3").on("click", function () {
    if (charSelector != 2 && enemChar == false) {
        enemSelector = 2;
        enemySelected(enemSelector);
    }
});

$("#jarjarImg3").on("click", function() {
    if (charSelector != 3 && enemChar == false) {
        enemSelector = 3;
        enemySelected(enemSelector);
    }
});

$("#attBtn").on("click", function() {
    $("#attackInfo").show();
    hitPoints[enemSelector] = hitPoints[enemSelector] - (attackValues[charSelector] * Math.pow(2,attNumber));
    var defImage = createImage(enemSelector);
    $(defHolderArray[enemSelector]).html(defImage);
    $("#attackInfo").html(imageAltArray[charSelector]+" dealt " + (attackValues[charSelector] * Math.pow(2,attNumber)) + " damage to " + imageAltArray[enemSelector] + "!");
    
    if (hitPoints[enemSelector] < 1) {
        $(defHolderArray[enemSelector]).hide();
        enemChar=false;
        $("#attackInfo").append("<br>"+imageAltArray[charSelector]+" defeated "+ imageAltArray[enemSelector]+"!");
        winNumber++;
        if (winNumber < 3){
            $("#attackInfo").append("<br>Select another opponent.");
        }
        else {
            $("#resetBtn").show();
            $("#attBtn").hide();
            $("#attackInfo").append("<br><h3>You win!  "+imageAltArray[charSelector]+" is victorious!  You have restored peace to the galaxy!<br>Click the Restart button to play again!</h3>");
        }
    }
    else {
        hitPoints[charSelector] = hitPoints[charSelector] - counterAttack[enemSelector];
        var yourImage = createImage(charSelector);
        $(yourHolderArray[charSelector]).html(yourImage);
        $("#attackInfo").append("<br>" + imageAltArray[enemSelector] + " dealt " + counterAttack[enemSelector] + " damage to " + imageAltArray[charSelector]+"!");
    }
    if (hitPoints[charSelector] < 1) {
        $("#resetBtn").show();
        $("#attBtn").hide();
        $(yourHolderArray[charSelector]).hide();
        attNumber--;
        $("#attackInfo").append("<br><h3>You lose!  "+imageAltArray[charSelector]+" has died!  Click the Restart button to play again.</h3>")
    }
    attNumber++;
});