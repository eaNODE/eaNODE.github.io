


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


var blocks = JSON.parse(localStorage.getItem('blocks')) ? JSON.parse(localStorage.getItem('blocks')) : 
[
  {
    type: "header",
    data: {
      text: "Education : ",
      level: 5
    }
  },
  {
    type : 'paragraph',
    data : {
      text : '(2015 – Present) B.Sc. in Computer Engineering (software), Mazandaran  University'
    }
  },
  {
    type: "header",
    data: {
      text: "GPA : ",
      level: 5
    }
  },
  {
    type : 'paragraph',
    data : {
      text : '3.44/4 ( 16./20)'
    }
  },
  {
    type: "header",
    data: {
      text: "Last 4 semesters GPA : ",
      level: 5
    }
  },
  {
    type : 'paragraph',
    data : {
      text : '3.85'
    }
  },
  {
    type: "header",
    data: {
      text: "Specialized Course : ",
      level: 5
    }
  },
  {
    type : 'paragraph',
    data : {
      text : '3.36'
    }
  },
  {
    type: "header",
    data: {
      text: "Research Interests : ",
      level: 5
    }
  },
  {
    type : 'list',
    data : {
      items : [
        "Machine Learning and Deep Learning",
        "Artificial Intelligence",
        "Human Computer Interaction (HCI)",
        "Natural Language Processing and Text Analysis"
      ],
      style: 'unordered'
    }
  },
  {
    type: "header",
    data: {
      text: "Project Experiences : ",
      level: 5
    }
  },
  {
    type : 'list',
    data : {
      items : [
        "Text Classification - emotion detection using deep learning (LSTM)",
        "Data Clustering on SFO Airport Report using k-means Algorithms in RapidMiner",
        "GUI Huffman Image Compression using Python 3 and tkinter",
        "Top Down Parser using Python 3",
        "FTP Server and Client using Python 3 and socket library",
        "Snake game using C++",
        "Data Encryption using RSA Algorithm using Matlab",
        "Implementing 8-Puzzle in Python 3",
        "Binary Search Tree using Python 2.7"
      ],
      style: 'unordered'
    }
  },
  {
    type: "header",
    data: {
      text: "Languages : ",
      level: 5
    }
  },
  {
    type : 'list',
    data : {
      items : [
        "C++",
        "Python",
        "C#",
        "HTML and CSS" 
      ],
      style: 'unordered'
    }
  },
  {
    type: "header",
    data: {
      text: "Software Skill : ",
      level: 5
    }
  },
  {
    type : 'list',
    data : {
      items : [
        "Matlab",
        "RapidMiner Studio",
        "Proteus Design Suit",
        "Atmel Studio",
        "Code Vision AVR",
        "Microsoft Office (word, excel, power point, outlook)"
      ],
      style: 'unordered'
    }
  },
  {
    type: "header",
    data: {
      text: "Language Proficiency : ",
      level: 5
    }
  },
  {
    type : 'list',
    data : {
      items : [
        "English: fluent (speaking, writing, reading)",
        "Farsi: Native Language"
      ],
      style: 'unordered'
    }
  },
  {
    type: "header",
    data: {
      text: "On Campus Activities : ",
      level: 5
    }
  },
  {
    type : 'list',
    data : {
      items : [
        "Member of Student’s Scientific Computer Council",
        "Volunteer at Student Charity Council"
      ],
      style: 'unordered'
    }
  },
  {
    type: "header",
    data: {
      text: "Extracurricular Activities : ",
      level: 5
    }
  },
  {
    type : 'list',
    data : {
      items : [
        "Playing Piano",
        "Sport: Table Tennis, Volleyball",
        "Camping"
      ],
      style: 'unordered'
    }
  },
  {
    type: "header",
    data: {
      text: "References : ",
      level: 5
    }
  },
  {
    type : 'list',
    data : {
      items : [
        "Mostafa Bastam, PhD Assistant Professor in  IT Engineering- Computer Networks Email: bastam@umz.ac.ir",
        "Khadije Aghajani, PhD Assistant Professor in Computer Engineering Email: kh.aghajani@umz.ac.ir",
        "Sekine Asadi Amiri, PhD Assistant Professor in Computer Engineering Email: s.asadi@umz.ac.ir"
      ],
      style: 'unordered'
    }
  },
]

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