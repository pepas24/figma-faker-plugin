import faker from './lib/faker'

figma.showUI(__html__)

figma.ui.onmessage = msg => {
  if ( msg.type === 'run' ) {

    faker.locale = msg.fakerLocation
    console.log(faker.name.findName())

  }

  // figma.closePlugin()
}
