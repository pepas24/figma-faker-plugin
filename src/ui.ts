import './lib/figma-plugin-ds.min.css'
import './lib/figma-plugin-ds.min.js'

selectMenu.init();

document.getElementById('run').onclick = () => {
  const fakerLocation = document.getElementById('location').value
  parent.postMessage({ pluginMessage: { type: 'run' , fakerLocation} }, '*')
}
