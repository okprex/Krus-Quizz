"use strict"

class Fragenkatalog {
    
    constructor(_frage, _a1, _a2, _a3, _a4) {

    this.frage    = _frage;

    this.antwort1 = _a1;
    this.antwort2 = _a2;
    this.antwort3 = _a3;
    this.antwort4 = _a4;
    }

    //====setter====    fragen/antworten in class eintragen
    set_frage(frage) {
        this._frage = frage;
    }

    set_a1(a) {
        this._a1 =  a;            
    }

    set_a2(a) {
        this._a2 =  a;            
    }

    set_a3(a) {
        this._a3 =  a;            
    }

    set_a1(a) {
        this._a4 =  a;            
    }

    // ====getter====   fragen/anworten auslesen

    get_frage() {
        return this._frage;
    }

    get_a1() {
        return this._a1;
    }

    get_a2() {
        return this._a2;
    }

    get_a3() {
        return this._a3;
    }

    get_a4() {
        return this._a4;
    }
}