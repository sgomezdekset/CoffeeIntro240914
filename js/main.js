// Generated by CoffeeScript 1.8.0
(function() {
  var randomColor;

  randomColor = function() {
    return '#' + Math.random().toString(16).slice(2, 8);
  };

  $(function() {
    return $('#bgBtn').on("click", function(event) {
      event.preventDefault();
      console.log("Hello Simon!");
      return $('body').css('background', randomColor());
    });
  });

}).call(this);

//# sourceMappingURL=main.js.map
