/*
Aufgabe: <Aufgabe 3 Mau Mau>
Name: <Nathalie Schneider>
Matrikel: <>
Datum: <11.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var A03;
(function (A03) {
    let alleKarten = [];
    let handkarten = [];
    let werte = [" 7", " 8", " 9", " 10", " Bube", " Dame", " König", " As"];
    let zeichen;
    let y;
    let anzahl;
    function anzahlHandkarten() {
        anzahl = prompt("Anzahl der Handkarten eingeben");
        y = parseInt(anzahl);
    }
    anzahlHandkarten();
    function karteErstellen() {
        for (let i = 0; i <= 32; i++) {
            if (i < 8) {
                zeichen = "Herz" + werte[i];
                alleKarten.splice(0, 0, zeichen);
            }
            else if (i >= 8 && i < 16) {
                zeichen = "Kreuz" + werte[i % 8];
                alleKarten.splice(0, 0, zeichen);
            }
            else if (i >= 16 && i < 24) {
                zeichen = "Karo" + werte[i % 8];
                alleKarten.splice(0, 0, zeichen);
            }
            else if (i >= 24 && i < 32) {
                zeichen = "Pik" + werte[i % 8];
                alleKarten.splice(0, 0, zeichen);
            }
        }
    }
    function kartenVerteilen() {
        for (let x = 0; x < y; x++) {
            let randomCard = Math.floor((Math.random() * alleKarten.length));
            handkarten.push(alleKarten[randomCard]);
            let prodElement = document.createElement('div');
            let karte = `<p class="${alleKarten[randomCard]}">${alleKarten[randomCard]}</p>`;
            prodElement.innerHTML = karte;
            document.getElementById("Handkarten").appendChild(prodElement);
            alleKarten.splice(randomCard, 1);
        }
    }
    function erstelleNachziehstapel() {
        for (let z = 0; z <= alleKarten.length - y; z++) {
            let prodElement = document.createElement('div');
            document.getElementById("Nachziehstapel").appendChild(prodElement);
            let karte = `<p class="${alleKarten[z]}">${alleKarten[z]}</p>`;
            prodElement.innerHTML = karte;
        }
    }
    function sortiereKarte() {
        //document.addEventListener ("click",init); bla
    }
    erstelleNachziehstapel();
    karteErstellen();
    kartenVerteilen();
})(A03 || (A03 = {}));
//# sourceMappingURL=main.js.map