(function(){
  "use strict";

  var Moosipurk = function(){

    // SEE ON SINGLETON PATTERN
    if(Moosipurk.instance){
      return Moosipurk.instance;
    }

    //this viitab Moosipurk funktsioonile
    Moosipurk.instance = this;

    console.log('moosipurgi sees');

    // Kõik muutujad, mida muudetakse ja on rakendusega seotud, defineeritakse siin
    this.click_count = 0;
    console.log(this);

    // Kui tahan moosipurgile referenci, siis kasutan THIS = Moosipurgi rakendus ise
    this.init();
  };

  // paneme muutuja külge
  window.Moosipurk = Moosipurk;

  //Kõik funktsioonid lähevad moosipurgi külge
  Moosipurk.prototype = {

    init: function(){
      console.log('rakendus läks tööle');

      // esimene loogika oleks see, et kuulame hiireklikki nupul
      this.bindMouseEvents();
    },
    bindMouseEvents: function(){
      document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));
    },
    addNewClick: function(event){
      console.log(event);
      this.click_count++;
      console.log(this.click_count);
    }
  };

  // Kui leht on laetud, siis käivitan moosipurgi rakenduse
  window.onload = function(){
    var app = new Moosipurk();
  };


})();
