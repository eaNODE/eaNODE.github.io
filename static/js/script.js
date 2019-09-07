


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
  console.log('Fetch Error From github gist :-S', err);
});

var blocks = JSON.parse(localStorage.getItem('blocks'))

const editor = new EditorJS({
  holder : 'cv-editor',
  tools: {
    header: {
      class: Header,
      inlineToolbar : true
    },
    list: { 
      class: List, 
      inlineToolbar: true
    },
    Marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M',
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+O',
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote\'s author',
      },
    },
  },
  data: {
    blocks: blocks
  },
  onChange: function() {
    saveContent()
  }
});

function saveContent(){
  editor.save().then((savedData) => {
    localStorage.setItem('blocks', JSON.stringify(savedData.blocks));
  });
}