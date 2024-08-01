//this file will help clean up the dom between different hash/ page reloads

export function componentCleanUp () {
  document.body.querySelector('#container').innerHTML = ''

  //change background color as well
  const body = document.body
  body.style.background = 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(240, 240, 240,1))'
}