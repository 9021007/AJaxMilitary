var app = document.getElementById('onetext');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 65,
});

AOS.init();

typewriter
    .pauseFor(250)
    .typeString('Welcome to AJax Military.')
    .pauseFor(1500)
    .deleteChars(25)
    .pauseFor(300)
    .typeString('A powerful and advanced military clan')
    .pauseFor(300)
    .deleteChars(4)
    .pauseFor(350)
    .typeString('community.')
    .pauseFor(1000)
    .start();