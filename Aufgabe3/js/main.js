/*
Aufgabe: <Aufgabe 2 Mau Mau>
Name: <Nathalie Schneider>
Matrikel: <>
Datum: <07.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
let anzahl;
function anzahlHandkarten() {
    anzahl = prompt("Anzahl der Handkarten eingeben");
    let y = anzahl;
}
anzahlHandkarten();
let alleKarten = [];
let werte = [" 7", " 8", " 9", " 10", " Bube", " Dame", " König", " As"];
let zeichen;
function karteErstellen() {
    for (let i = 0; i <= 32; i++) {
        if (i < 8) {
            zeichen = "Herz" + werte[i];
            alleKarten.splice(0, 0, werte[i]);
            let prodElement = document.createElement('div');
            let karte = `<p> ${zeichen} </p>
    `;
            prodElement.innerHTML = karte;
            document.getElementById("Handkarten").appendChild(prodElement);
        }
        else if (i >= 8 && i < 16) {
            zeichen = "Kreuz" + werte[i % 8];
            alleKarten.splice(0, 0, werte[i % 8]);
            let prodElement = document.createElement('div');
            let karte = `<p> ${zeichen} </p>
        `;
            prodElement.innerHTML = karte;
            document.getElementById("Handkarten").appendChild(prodElement);
        }
        else if (i >= 16 && i < 24) {
            zeichen = "Karo" + werte[i % 8];
            alleKarten.splice(0, 0, werte[i % 8]);
            let prodElement = document.createElement('div');
            let karte = `<p> ${zeichen} </p>
        `;
            prodElement.innerHTML = karte;
            document.getElementById("Handkarten").appendChild(prodElement);
        }
        else if (i >= 24 && i < 24) {
            zeichen = "Pik" + werte[i % 8];
            alleKarten.splice(0, 0, werte[i % 8]);
            let prodElement = document.createElement('div');
            let karte = `<p> ${zeichen} </p>
        `;
            prodElement.innerHTML = karte;
            document.getElementById("Handkarten").appendChild(prodElement);
        }
    }
}
function kartenVerteilen() {
    let handkarten = [];
    for (let x = parseFloat(anzahl); handkarten.length <= x - 1; x++) {
        let y = 0;
        y = Math.floor((Math.random() * alleKarten.length));
        y = y - 1;
        handkarten.push(alleKarten[y]);
        let prodElement = document.createElement('div');
        let karte = `
            <p class="${alleKarten[y]}">${alleKarten[y]}</p>            `;
        prodElement.innerHTML = karte;
        document.getElementById("Handkarten").appendChild(prodElement);
        alleKarten.splice(y, 1);
    }
}
function erstelleNachziehstapel() {
    for (let z = 0; z < alleKarten.length; z++) {
        let prodElement = document.createElement('div');
        document.getElementById("Spielkarten").appendChild(prodElement);
        let karte = `
                <p class="${alleKarten[z]}">${alleKarten[z]}</p>
                `;
        prodElement.innerHTML = karte;
    }
}
erstelleNachziehstapel();
karteErstellen();
kartenVerteilen();
//# sourceMappingURL=main.js.map