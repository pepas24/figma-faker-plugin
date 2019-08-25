import faker from './lib/faker.js'

figma.showUI(__html__)

figma.ui.onmessage = msg => {
  if ( msg.type === 'run' ) {
    console.log('Plugin works!')
  }

  figma.closePlugin()
}
