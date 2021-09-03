$(document).ready(function() {
// animation menu déroulant
var menu = ["s4", "s3", "s2", "s1"];
for (var i = 0; i <= menu.length - 1; i++) {
  console.log(menu[i])
  $("#" + menu[i]).click(function() {
    menuSub = $(this)[0].id;
    angle = $("#" + menuSub + " i");
    if (angle[0].className == 'fas fa-angle-down') {
      console.log('oke'); 
      angle.removeClass('fa-angle-down');
      angle.addClass('fa-angle-right');
      valeur = 'none';
    } else {
      angle.removeClass('fa-angle-right');
      angle.addClass('fa-angle-down');
      valeur = 'flex';
    };
    var elems = document.getElementsByClassName(menuSub);
    console.log(elems)

    for (var i=0;i<elems.length;i+=1){
      elems[i].style.display = valeur;
    };
  });
}

});