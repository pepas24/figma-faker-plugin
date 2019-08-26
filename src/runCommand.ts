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


  if ( selection.length === 0 ) {

    figma.ui.postMessage({
      type: 'error',
      msg: 'Select a text layer or group with text layers.'
    })

  }


  if ( selection.length > 0 ) {

    selection.map( layer => {
      if ( layersAllowed.find( layerType => layerType === layer.type ) ) {
        console.log('Layer allowed')
      } else {
        console.log('Layer in not allowed')
      }
    })

  }
}

export default runCommand;
