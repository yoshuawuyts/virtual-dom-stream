const fromString = require('from2-string')
const toHtml = require('vdom-to-html')
const assert = require('assert')

module.exports = virtualDomStream

// Stream a virtual-dom tree as HTML
// obj -> rstream
function virtualDomStream (tree) {
  assert.equal(typeof tree, 'object', 'tree must be an object')
  return fromString(toHtml(tree))
}
