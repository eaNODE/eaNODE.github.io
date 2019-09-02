


$(document).ready(function(){
  $('#wrapper').addClass('loaded');
  $('.loader').hide();
  $('#editor_holder').hide();
  $('#cv-json').hide();
})

$('.more-info').click(function(){
  $("#card").toggleClass('flip');
  $('#arrow').remove();
});

$('#background').click(function(){
  $('#card').removeClass('flip');
})

var keys = {
  "title": "CV",
  "type": "object",
  "properties": {}
};

// var value = {}

fetch('http://localhost:8080/cv.json', {mode: 'cors'})
  .then((response) => response.json())
  .then(data => {
    for (const key in data) {
        keys.properties[key] = key
        // value[key] = data[key]
    }
  })
  .catch(function(error) {
    console.log('cannot load the cv file', error)
  });

var value = {
  "Education" : {
    "where" : "(2015 – Present) B.Sc. in Computer Engineering (software), Mazandaran  University",
    "GPA" : "3.44/4 ( 16./20)",
    "Last 4 semesters GPA" : "3.85",
    "Ekhtesasi" : "3.36"
  },

    "Project Experiences" : [
      "• Text Classification - emotion detection using deep learning (LSTM)",
      "• Data Clustering on SFO Airport Report using k-means Algorithms in RapidMiner",
      "• GUI Huffman Image Compression using Python 3 and tkinter",
      "• Top Down Parser using Python 3",
      "• FTP Server and Client using Python 3 and socket library",
      "• Snake game using C++",
      "• Data Encryption using RSA Algorithm using Matlab",
      "• Implementing 8-Puzzle in Python 3",
      "• Binary Search Tree using Python 2.7"
  ],

    "Languages" : [
        "• C++",
        "• Python",
        "• C#",
        "• HTML and CSS" 
    ],

    "Software Skill" : [
        "• Matlab",
        "• RapidMiner Studio",
        "• Proteus Design Suit",
        "• Atmel Studio",
        "• Code Vision AVR",
        "• Microsoft Office (word, excel, power point, outlook)"
    ],

    "Language Proficiency" : [
        "• English: fluent (speaking, writing, reading)",
        "• Farsi: Native Language"
    ],

    "On Campus Activities" : [
        "• Member of Student’s Scientific Computer Council",
        "• Volunteer at Student Charity Council"
    ],

    "Extracurricular Activities" : [
        "• Playing Piano",
        "• Sport: Table Tennis, Volleyball",
        "• Camping"
    ],

    "References" : [
        "• Mostafa Bastam, PhD Assistant Professor in  IT Engineering- Computer Networks Email: bastam@umz.ac.ir",
        "• Khadije Aghajani, PhD Assistant Professor in Computer Engineering Email: kh.aghajani@umz.ac.ir",
        "• Sekine Asadi Amiri, PhD Assistant Professor in Computer Engineering Email: s.asadi@umz.ac.ir"
    ]
}


JSONEditor.defaults.options.theme = 'bootstrap3';

// Initialize the editor
var editor = new JSONEditor(document.getElementById("editor_holder"),{
  theme: 'bootstrap3',
  schema: keys,
});


editor.setValue(value);

var data = editor.getValue();
// console.log(data)
// send data to the server for saving in cv.json file

// Validate
var errors = editor.validate();
if(errors.length) {
  // Not valid
}

// Listen for changes
editor.on("change",  function() {
  // save data into cv.json
});