


$(document).ready(function(){
  $('#wrapper').addClass('loaded');
  $('.loader').hide();
  $('#editor_holder').hide();
})

$('.more-info').click(function(){
  $("#card").toggleClass('flip');
  $('#arrow').remove();
});

$('#background').click(function(){
  $('#card').removeClass('flip');
})