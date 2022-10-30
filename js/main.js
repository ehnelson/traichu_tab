function dateTime () {
  const date = new Date()
  let today = date.toDateString()
  let time = date.toLocaleTimeString()
  document.getElementsByName('q')[0].placeholder = today + ' ' + time
  setTimeout(dateTime, 1000)
}

var konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
]
var currentKey = 0
var keyHandler = function (event) {
  // If the key isn't in the pattern, or isn't the current key in the pattern, reset
  if (
    konamiCode.indexOf(event.key) < 0 ||
    event.key !== konamiCode[currentKey]
  ) {
    currentKey = 0
    return
  }

  // Update how much of the pattern is complete
  currentKey++

  // If complete, add animation class and reset
  if (konamiCode.length === currentKey) {
    currentKey = 0
    document.getElementById('cat-header').classList.add('slide')
    setTimeout(function () {
      document.getElementById('cat-header').classList.remove('slide')
    }, 4250)
  }
}

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false)


addEventListener('load', (event) => {
  var headerCats = [
    'img/p_blanket.gif',
    'img/p_chair.gif',
    'img/p_comp.gif', 
    'img/p_cool.gif', 
    'img/p_keyboard.gif', 
    'img/p_laptop.gif', 
    'img/p_music.gif', 
    'img/p_noodle.gif', 
    'img/p_norm.gif', 
    'img/p_soda.gif'
  ]
  var index = Math.floor(Math.random() * headerCats.length);
  document.getElementById("cat-header").src = headerCats[index]
});