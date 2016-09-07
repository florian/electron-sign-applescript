const spawn = require( 'child_process' ).spawnSync

module.exports = (callback) => {
  const result = spawn('osascript', ['-e', 'random number from 1000 to 9999'])
  callback(result.stdout.toString())
}
