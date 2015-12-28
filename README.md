# virtual-dom-stream [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Stream a virtual-dom tree as HTML. Useful to render `virtual-dom` / `mercury`
nodes on the server.

## Installation
```sh
$ npm install virtual-dom-stream
```

## Usage
```js
const vdom = require('virtual-dom-stream')
const h = require('virtual-dom/h')
const hs = require('hyperstream')
const bankai = require('bankai')
const http = require('http')

// render a vdom tree to html and append it to body in a stream
// and return it as a server response
const html = bankai.html()
http.createServer(function (req, res) {
  html(req, res)
   .pipe(hs({ body: { _appendHtml: vdom(createTree()) } }))
   .pipe(res)
}).listen()

function createTree () {
  return h('.greeting', [
    'hello world'
  ])
}
```

## API
### readableStream = virtualDomStream(tree)
Render a `virtual-dom` tree of `h` nodes to a readable stream.

## See Also
- [virtual-dom][12]
- [bankai][13]
- [hyperstream][14]
- [virtual-html][15]

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/virtual-dom-stream.svg?style=flat-square
[3]: https://npmjs.org/package/virtual-dom-stream
[4]: https://img.shields.io/travis/yoshuawuyts/virtual-dom-stream/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/virtual-dom-stream
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/virtual-dom-stream/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/virtual-dom-stream
[8]: http://img.shields.io/npm/dm/virtual-dom-stream.svg?style=flat-square
[9]: https://npmjs.org/package/virtual-dom-stream
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
[12]: https://github.com/Matt-Esch/virtual-dom
[13]: https://github.com/yoshuawuyts/bankai
[14]: https://github.com/substack/hyperstream
[15]: https://github.com/yoshuawuyts/virtual-html
