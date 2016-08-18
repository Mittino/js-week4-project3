/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #1
$('.changeColor').click(function(){
  $('#my-list').find('li:eq(2)').css('color', '#8A2BE2');
});

// Question #2
$('#my-list li:eq(3)').click(function(){
  $('<li>New List Item</li>').insertAfter(this);
})

// Question #3
$('#removeLi').click(function(){
  $('#my-list li:eq(1)').hide();
});

// Question #4
$('#my-list li:last-child').last().click(function(){
  $(this).css('font-size', 40);
  $(this).siblings().hide();

});


// // Question #5
$('.cute').click(function(){
  $(this).clone().appendTo('.clones');
});

  // Question #6
$(document.body).dblclick(function(){
  $('#makeSquare').width(120);
});


// Question #7

$('#black').click(function(){
  $('body').removeClass();
  $('body').addClass('black');
});
$('#wood').click(function(){
  $('body').removeClass();
  $('body').addClass('wood');
});
$('#chaos').click(function(){
  $('body').removeClass();
  $('body').addClass('chaos');
});
$('#restore').click(function(){
  $('body').removeClass();
  $('body').addClass('restore');
});

  // Question #8

$('#hover').hover(function(){
  $(this).css('background-color', 'red');
}, function(){
  $(this).css('background-color', '#39B7CD');
});
$('#hover').click(function(){
  $(this).toggleClass('green');
});



});
