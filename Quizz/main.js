"use strict"




let Quizz = {

    katalog : [],

    
    

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
        } else {    Quizz.fehlermeldung_neue_frage()}
        //fragt ab ob eine Fehlermeldung vorhanden ist und löscht diese gegebenenfalls
        Quizz.katalog_speichern();
    } ),

    fragenkatalog_aktualisieren() {

        for(let e of document.querySelectorAll("#fk_li > span")) {
            e.remove();
        };



        //erstellt ein element für jede frage aus dem Katalog, und fügt ihnen sofort einen eventlistener
        //hinzu welcher auf "click" reagiert und das dementsprechende element sowohl aus der HTML listung
        //sowie auch aus dem Fragen Array löscht
        for (let e of Quizz.katalog) {
            let curser = e;
            let span = document.createElement("span");
            span.setAttribute("class", "fk_span");
            span.innerText = e.frage;

            let img = document.createElement("img");
            img.setAttribute("src", "img/eimer.png");
            img.setAttribute("class", "fk_img");
            img.onclick = function() {

                for(let e of Quizz.katalog) {
                    if(e.frage === curser.frage) {
                        let index = Quizz.katalog.indexOf(e);
                        Quizz.katalog.splice(index,1);
                    }
                }
                img.parentElement.remove();
            }

            span.appendChild(img);
            document.querySelector("#fk_li").appendChild(span);

            img.addEventListener("mouseenter", e => {
                img.setAttribute("src", "img/x.png");
            })

            img.addEventListener("mouseleave", e => {
                img.setAttribute("src", "img/eimer.png");
            })

        }


    },


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
        let neue_frage = {
            
            frage   : f,
            a1      : a1,
            a2      : a2,
            a3      : a3,
            a4      : a4
        }

        this.katalog.push(neue_frage);

        this.fragenkatalog_aktualisieren();
    },

    frage_anzeigen() {

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }

        let random_q = getRandomInt(Quizz.katalog.length);

          document.querySelector("#f_1").innerHTML = Quizz.katalog[random_q].frage;
          document.querySelector("#a_1").innerHTML = Quizz.katalog[random_q].a1;
          document.querySelector("#a_2").innerHTML = Quizz.katalog[random_q].a2;
          document.querySelector("#a_3").innerHTML = Quizz.katalog[random_q].a3;
          document.querySelector("#a_4").innerHTML = Quizz.katalog[random_q].a4;

          
    },

    katalog_speichern() {
        let katalog_string = JSON.stringify(this.katalog);
        localStorage.setItem("katalog", katalog_string);
    },

    katalog_laden() {
        let katalog_string_geladen = localStorage.getItem("katalog");
        let katalog_parse = JSON.parse(katalog_string_geladen);
        Quizz.katalog = katalog_parse;
        Quizz.fragenkatalog_aktualisieren();
    }

    

}

Quizz.katalog_laden();

let next_knopf = document.querySelector("#next_btn");
next_knopf.addEventListener("click", e => {

    Quizz.frage_anzeigen();
});


document.querySelector("#fk_load").addEventListener("click", e => {
    Quizz.katalog_laden();
})

// document.addEventListener("keyup", e => {
//     if(e.key === "u") {
//         console.log(Quizz.katalog);
//     }
// }); 



document.querySelector("#fk_save").addEventListener("click", e => {
    Quizz.katalog_speichern();

})

if (Quizz.katalog.length = 0 && localStorage.getItem("fragen") != null) {

    let katalog_als_objekt = JSON.parse(localStorage.getItem("fragen"));
    let katalog_als_array = Object.entries(katalog_als_objekt);
    console.log(katalog_als_array);
    Quizz.katalog = katalog_als_array;
    fragenkatalog_aktualisieren();
}


