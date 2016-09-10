const spawn = require( 'child_process' ).spawnSync

module.exports.file = (file) => {
  const result = spawn('osascript', [file])
}
