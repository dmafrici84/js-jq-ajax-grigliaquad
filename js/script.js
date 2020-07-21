// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un
// numero random da 1 a 9. Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato

$(document).ready(init);

// FUNZIONI
  function init(){
    addNewColorNumberListener();
  }

    function addNewColorNumberListener() {

      $(document).on("click", ".quadrato", function(){

        var quadratoCorrente = $(this);

        quadratoCorrente.text("");
        quadratoCorrente.removeClass("giallo","verde");

        getNewColorNumberListener(quadratoCorrente);

      });

    }

    // function addNewColorNumberListener() {
    //
    //   $(document).on("click", ".quadrato", function(){
    //
    //     var quadratoCorrente = $(this);
    //
    //     if (!(quadratoCorrente.hasClass("giallo")) && !(quadratoCorrente.hasClass("verde"))) {
    //       console.log("giallo",!(quadratoCorrente.hasClass("giallo")));
    //       console.log("verde",!(quadratoCorrente.hasClass("verde")));
    //       getNewColorNumberListener(quadratoCorrente);
    //     }
    //
    //   });
    //
    // }

      function getNewColorNumberListener(tag) {

        $.ajax({

          url: "https://flynn.boolean.careers/exercises/api/random/int",

          method: "GET",

          success: function(data, state) {

            var quadratoTarget = tag;
            var success = data["success"];
            var value = data["response"];
            console.log(value);

            if (success) {

              if (value <= 5) {
                quadratoTarget.append(value);
                quadratoTarget.addClass("giallo");
              } else {
                quadratoTarget.append(value);
                quadratoTarget.addClass("verde");
              }

            } else {

              console.log("errore");

            }

          },

          error: function(request, state, error) {

            console.log("request",request);
            console.log("state",state);
            console.log("error",error);

          }

        });

      }
