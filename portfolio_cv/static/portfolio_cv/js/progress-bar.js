var skills = {
  ht: 90,
  cs: 80,
  phs: 75,
  ra: 45,
  jq: 30,
  ph: 20,
}

$.each(skills, function(key, value) {
  var skillbar = $('.' + key);

  skillbar.animate(
    {
      width: value + "%"
    },
    3000,
    function(){
      $(".speech-bubble").fadeIn();
    }
  )
})