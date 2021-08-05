/**
 * fs read and write stream
 */

const iKfs = require('fs')

//collects the file content
const iKreadStream = iKfs.createReadStream('./iKtextFile1.txt', 'utf8') /*1+*/

//file you would like to write on
const iKwriteStream = iKfs.createWriteStream('./iKtextFile2.txt') /*2+*/

//execute read and write
iKreadStream.pipe( iKwriteStream )

//exact same execute read and write but the longer version
// iKreadStream.on('data', (iKchunkP) => {
//     iKwriteStream.write(iKchunkP)
//     console.log('iKfinish')
// })


/**
 * 1+ 'utf8' will turn the buffer character into string
 * 2+ if file does not exist than it will create the file itself when executed
 */


