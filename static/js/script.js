


$(document).ready(function(){
  $('#wrapper').addClass('loaded');
  $('.loader').hide();
  $('.codex-editor__redactor').removeAttr("style")
})

$('.more-info').click(function(){
  $("#card").toggleClass('flip');
  $('#arrow').remove();
});

$('#background').click(function(){
  $('#card').removeClass('flip');
})


fetch('https://api.github.com/gists/6de0f56bcef714552f2398f014d60e49')
.then(
  (response) => {
    response.json()
      .then((data) => {
          localStorage.setItem('blocks', JSON.stringify(data.files.prna.content))
    });
  }
)
.catch((err) => {
  console.log('[!] Fetch Error From github gist :-S', err);
  // TODO : fix below err ; doesn't work
  $('.loader').show(1000);
});


var blocks = JSON.parse(localStorage.getItem('blocks'))
document.getElementById("cv-editor").innerText = blocks


BalloonEditor
    .create( document.querySelector( '#cv-editor' ))
    .then( editor => {
      window.editor = editor;
    })
    .catch( error => {
      $('.loader').show(1000);
    });

document.getElementById("cv-editor").onkeyup = (event) => {
  event.preventDefault()
  console.log(editor.getData())
}