import './lib/figma-plugin-ds.min.css'
import './lib/figma-plugin-ds.min.js'

document.getElementById('run').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'run' } }, '*')
}
