import faker from './lib/faker'

figma.showUI(__html__, { width: 300, height: 260 })

figma.ui.onmessage = msg => {
  if ( msg.type === 'run' ) {

    faker.locale = msg.fakerLocation

    const selection = figma.currentPage.selection

    if ( selection.length === 0 ) {
      figma.ui.postMessage({
        type: 'error',
        msg: 'Select a text layer or group with text layers.'
      })
    }

  }

  // figma.closePlugin()
}
