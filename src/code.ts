import runCommand from './runCommand'


figma.showUI(__html__, { width: 300, height: 260 })

figma.ui.onmessage = msg => {

  if ( msg.type === 'run' ) {
    runCommand(msg);
  }

  // figma.closePlugin()
}
