const concat = require('concat-stream')
const h = require('virtual-dom/h')
const test = require('tape')
const vdom = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(vdom, /object/)
})

test('should render a vdom tree to an html stream', function (t) {
  t.plan(1)
  vdom(h('div.foo', [ 'hello world' ])).pipe(concat(function (buf) {
    const str = String(buf)
    t.equal(str, '<div class="foo">hello world</div>', 'is html')
  }))
})
