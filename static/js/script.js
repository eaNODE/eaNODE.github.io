


$(document).ready(function(){
  $('#wrapper').addClass('loaded');
  $('.loader').hide();
})

$('.more-info').click(function(){
  $("#card").toggleClass('flip');
  $('#arrow').remove();
});

$('#background').click(function(){
  $('#card').removeClass('flip');
})