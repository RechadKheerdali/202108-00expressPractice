/**
 * path module
 */

const iKpath = require('path')

//absolute file path
console.log( __filename )

//absolute directory path
console.log( __dirname )

//base file name
console.log( iKpath.basename(__filename) )

//directory name
console.log( iKpath.dirname(__filename) )

//file extension
console.log( iKpath.extname(__filename) )

//path in object
console.log( iKpath.parse(__filename) )

// concatenate paths
console.log( iKpath.join(__dirname, 'iKanyDirectory', 'iKanyFile.js') )

//resolve
console.log( iKpath.resolve(__dirname, 'file', 'ifhs' ) )




/**
 * 
 * 
 */