import './lib/figma-plugin-ds.min.css'
import './lib/figma-plugin-ds.min.js'
import './ui.css'

// Init selection menu for ui
selectMenu.init();

document.getElementById('run').onclick = () => {
  const fakerLocation = document.getElementById('location').value
  parent.postMessage({ pluginMessage: { type: 'run' , fakerLocation} }, '*')
}

onmessage = (event) => {
  if ( event.data.pluginMessage.type === 'error' ) {
    showBell(event.data.pluginMessage.msg)
  }
}

function showBell (msg) {
  const bell = document.getElementById('visual-bell')
  const messageBell = document.querySelector('.visual-bell__msg')

  messageBell.textContent = msg
  bell.classList.toggle('hidde')

  setTimeout(function () {
    bell.classList.toggle('hidde')
  }, 5000)
}
