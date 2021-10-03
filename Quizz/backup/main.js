"use strict"

let Quizz = {

    frage_katalog: {},


    //Event wenn beim anlegen einer neuen Frage auf senden geklick wird
    senden_event : document.querySelector("#frage_senden").addEventListener("click", function(){
    
        if(document.querySelector("#fm") != null){
            document.querySelector("#fm").remove()
        }

    let neue_frage = document.querySelector("#neue_frage").value;
    let antwort_1 = document.querySelector("#antwort_1").value;
    let antwort_2 = document.querySelector("#antwort_2").value;
    let antwort_3 = document.querySelector("#antwort_3").value;
    let antwort_4 = document.querySelector("#antwort_4").value;
    
    if (neue_frage != "" && antwort_1 != "" && antwort_2 != "" && antwort_3 != "" && antwort_4 != "") {

        Quizz.frage_in_katalog_pushen(neue_frage, antwort_1,antwort_2,antwort_3,antwort_4);

        neue_frage = document.querySelector("#neue_frage").value = "";
        antwort_1 = document.querySelector("#antwort_1").value = "";
        antwort_2 = document.querySelector("#antwort_2").value = "";
        antwort_3 = document.querySelector("#antwort_3").value = "";
        antwort_4 = document.querySelector("#antwort_4").value = "";
        console.log(Quizz.frage_katalog); }
        else {    Quizz.fehlermeldung_neue_frage()}
        //fragt ab ob eine Fehlermeldung vorhanden ist und löscht diese gegebenenfalls
        Quizz.fragen_katalog_anzeigen();
    } ),

    
    fehlermeldung_neue_frage(){
        let fm = document.createElement("p");
        fm.setAttribute("id","fm");
        let fm_text = document.createTextNode("Fehlerhafte Eingabe!");
        fm.appendChild(fm_text);
     
        console.log(fm);

        console.log("else ist raus");
        document.querySelector("#frage_hinzufuegen").appendChild(fm);
    },

    frage_in_katalog_pushen(f,a1,a2,a3,a4){
        let frage = {
            frage_text : f,
            ant_1 : a1,
            ant_2 : a2,
            ant_3 : a3,
            ant_4 : a4,
        }
        Quizz.frage_katalog.add(frage);
    },

    fragen_katalog_anzeigen(){
        for(let e of Quizz.frage_katalog) {
            console.log(Quizz.frage_katalog[e]);
            li = createElement("li");
            li_p = li.appendChild("p");
            li_p.createTextNode(`F: ${f_text}`);

            querySelector("#fragenkatalog").appendChild(li);
            

        }
    },
    

}


