$(document).ready(function() {
  /* $('div#top.menu_item').click(function(){
    $('div#main').text("This is top");
  });

  $('div#who.menu_item').click(function(){
    $('div#main').text("This is who");
  }); */

  $('div#main').load("/top.html");

  $('div#top.menu_item').click(function(){
    $('div#main').load("/top.html");
  });

  $('div#who.menu_item').click(function(){
    $('div#main').load("/who.html");
  });

  $('div.menu_item').mouseenter(function(){
    $(this).css('background-color', '#5555FF');
  }).mouseleave(function(){
    $(this).css('background-color', '#9999FF');
  });
});
