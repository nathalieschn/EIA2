function anzahlHandkarten () : void {

}

interface Karte {
    zeichen: string;
    wert: string;
}



function karteErstellen () {
let werte: string[] = ["7", "8", "9", "10", "Bube", "Dame", "König", "A"]
 for (let i:number = 0, i=<32, i++) {
     if (i<8){
     zeichen = "Herz" + wert[i];

    }
    else if (i>=8 && i<16){
        // Karte erstellen mit Kreuz [i%7]
    }

    else if (i>=16 && i<24){
        // Karte erstellen mit Pik
    }
    else 
 }
}