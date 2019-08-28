import faker from './lib/faker'

const runCommand = (msg) => {
  const selection = figma.currentPage.selection
  const layersAllowed = [
    'TEXT',
    'COMPONENT',
    'INSTANCE',
    'GROUP',
    'FRAME'
  ]


  // Set location for Faker.js
  faker.locale = msg.fakerLocation

  // If not layers has been selected
  if ( selection.length === 0 ) {

    figma.ui.postMessage({
      type: 'error',
      msg: 'Select a text layer or group with text layers.'
    })

  }

  // If more of one layer is selected
  if ( selection.length > 0 ) {

    selection.map( layer => {

      if ( layersAllowed.find( layerType => layerType === layer.type ) ) {

        if ( layer.type === 'TEXT' ) {
          if (layer.name[0] === '$') {
            setFakeData(layer)
          }
          return;
        } else {
          const textLayers = layer.findAll( node => (node.type === 'TEXT'))
          textLayers.map(textLayer => {
            if (textLayer.name[0] === '$') {
              setFakeData(textLayer)
            }
          })
        }

      } else {
        console.log('Layer in not allowed')
      }

    })

  }

  function getFakerMethod(layerName) {
    const split = layerName.split('.')
    return {
      category: split[0].slice(1),
      function: split[1],
    }
  }

  function setFakeData (textLayer) {
    const fakerMethod = getFakerMethod(textLayer.name)
    const fakerValue = faker[fakerMethod.category][fakerMethod.function]();

    figma.loadFontAsync(textLayer.fontName)
      .then(() => textLayer.characters = fakerValue)
  }

}

export default runCommand;
