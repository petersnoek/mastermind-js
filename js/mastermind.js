console.log('loaded mastermind.js');

var kleuren = [
    "red",
    "white",
    "blue",
    "violet",
    "yellow",
    "green"];

var geheimekleur_1 = kleuren[Math.floor((Math.random() * 6))];
var geheimekleur_2 = kleuren[Math.floor((Math.random() * 6))];
var geheimekleur_3 = kleuren[Math.floor((Math.random() * 6))];
var geheimekleur_4 = kleuren[Math.floor((Math.random() * 6))];

var poging = 0;

console.log('geheime kleur 1: ' + geheimekleur_1);
console.log('geheime kleur 2: ' + geheimekleur_2);
console.log('geheime kleur 3: ' + geheimekleur_3);
console.log('geheime kleur 4: ' + geheimekleur_4);

// geef de bolletjes in de bovenste rij de geheime kleuren
document.getElementById('0.secret').className = "circle " + geheimekleur_1;
document.getElementById('1.secret').className = "circle " + geheimekleur_2;
document.getElementById('2.secret').className = "circle " + geheimekleur_3;
document.getElementById('3.secret').className = "circle " + geheimekleur_4;



function Raad() {
    console.log('entering function Raad()');

    // haal de gekozen kleuren op

    var guess_color_1 = document.getElementById('guess_color_1').value;
    var guess_color_2 = document.getElementById('guess_color_2').value;
    var guess_color_3 = document.getElementById('guess_color_3').value;
    var guess_color_4 = document.getElementById('guess_color_4').value;

    document.getElementById('0.0').className = "circle " + guess_color_1;
    document.getElementById('1.0').className = "circle " + guess_color_2;
    document.getElementById('2.0').className = "circle " + guess_color_3;
    document.getElementById('3.0').className = "circle " + guess_color_4;

    if ( guess_color_1 == geheimekleur_1 ) {
        document.getElementById('r.0').innerHTML = '<div id="r0.0" class="minicircle red"></div>';
    }
//
    // kopieer de gekozen kleuren naar een nog ongebruikte rij


    // controleer welk van de gekozen kleuren op de goede plek staan of voorkomen

    poging++;
}