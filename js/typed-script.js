$(document).ready(function() {
    Typed.new('#im', {
      strings: ["I'm Cristopher Rojas"],
      typeSpeed: 50,
      callback: function() {
          $("#im").next().hide();
          Typed.new('#caption', {
            strings: ["Front-end Developer","Back-end Developer","Fullstack Developer"],
            startDelay: 1000,
            typeSpeed: 50,
            backSpeed: 10
          });
      }
    });

});
