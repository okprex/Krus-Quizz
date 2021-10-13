"use strict"




let Quizz = {

    katalog : [],
    right_anwser_position : 0,
    picked_answer : 0,

    
    

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
          //sort questions randomly//
            let ran_1_4 = Math.floor(Math.random() * 4);

            switch(ran_1_4) {
                case 1: 
                    document.querySelector("#f_1").innerHTML = Quizz.katalog[random_q].frage;
                    document.querySelector("#a_1").innerHTML = Quizz.katalog[random_q].a1;
                    document.querySelector("#a_2").innerHTML = Quizz.katalog[random_q].a2;
                    document.querySelector("#a_3").innerHTML = Quizz.katalog[random_q].a3;
                    document.querySelector("#a_4").innerHTML = Quizz.katalog[random_q].a4;
                    this.right_anwser_position = 1;

                case 2: 
                    document.querySelector("#f_1").innerHTML = Quizz.katalog[random_q].frage;
                    document.querySelector("#a_1").innerHTML = Quizz.katalog[random_q].a4;
                    document.querySelector("#a_2").innerHTML = Quizz.katalog[random_q].a3;
                    document.querySelector("#a_3").innerHTML = Quizz.katalog[random_q].a2;
                    document.querySelector("#a_4").innerHTML = Quizz.katalog[random_q].a1;
                    this.right_anwser_position = 4;

                break;
                
                case 3:
                    document.querySelector("#f_1").innerHTML = Quizz.katalog[random_q].frage;
                    document.querySelector("#a_1").innerHTML = Quizz.katalog[random_q].a2;
                    document.querySelector("#a_2").innerHTML = Quizz.katalog[random_q].a1;
                    document.querySelector("#a_3").innerHTML = Quizz.katalog[random_q].a3;
                    document.querySelector("#a_4").innerHTML = Quizz.katalog[random_q].a4;
                    this.right_anwser_position = 2;

                break;

                case 4:
                    document.querySelector("#f_1").innerHTML = Quizz.katalog[random_q].frage;
                    document.querySelector("#a_1").innerHTML = Quizz.katalog[random_q].a3;
                    document.querySelector("#a_2").innerHTML = Quizz.katalog[random_q].a4;
                    document.querySelector("#a_3").innerHTML = Quizz.katalog[random_q].a1;
                    document.querySelector("#a_4").innerHTML = Quizz.katalog[random_q].a2;
                    this.right_anwser_position = 3;

                break;
            }

          
    },

    get_answer() {
        document.querySelector("#a_1").addEventListener("click", e => {
            this.picked_answer = 1;
            this.check_answer();
        });
        document.querySelector("#a_2").addEventListener("click", e => {
            this.picked_answer = 2;
            this.check_answer();
        });
        document.querySelector("#a_3").addEventListener("click", e => {
            this.picked_answer = 3;
            this.check_answer();
        });
        document.querySelector("#a_4").addEventListener("click", e => {
            this.picked_answer = 4;
            this.check_answer();
        });
    },

    check_answer() {
        if(this.right_anwser_position == this.picked_answer) {
            this.right_answer_picked();
        } else {
            this.false_answer_picked();
        }
    },

    right_answer_picked() {
        alert("Richtig!");
    },

    false_answer_picked() {
        alert("Falsch!");
    },

    // remove_click_listener() {
    //     document.querySelector("#f_1").removeEventListener("click", Quizz.false_answer);
    //     document.querySelector("#f_1").removeEventListener("click", Quizz.right_answer);
    //     document.querySelector("#f_2").removeEventListener("click", Quizz.false_answer);
    //     document.querySelector("#f_2").removeEventListener("click", Quizz.right_answer);
    //     document.querySelector("#f_3").removeEventListener("click", Quizz.false_answer);
    //     document.querySelector("#f_3").removeEventListener("click", Quizz.right_answer);
    //     document.querySelector("#f_4").removeEventListener("click", Quizz.false_answer);
    //     document.querySelector("#f_4").removeEventListener("click", Quizz.right_answer);
    // },

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

Quizz.get_answer();
