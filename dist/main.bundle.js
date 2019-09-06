(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+5i3":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "J/SR");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "J/SR":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, "body {\n  height: 100vh;\n  background: #000000; }\n\ncanvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: rotate(180deg); }\n", ""]);


/***/ }),

/***/ "Wotd":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./reset.css */ "l60k");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "l60k":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0-modified | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n    outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol, ul {\n    list-style: none;\n}\n\nblockquote, q {\n    quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\ninput[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\n\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n\n[hidden] {\n    display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\n\nimg {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\n\nfigure {\n    margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\n\nform {\n    margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    *margin-left: -7px; /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    *vertical-align: middle; /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    *overflow: visible;  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    *height: 13px; /* 3 */\n    *width: 13px; /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\nimg {\n    vertical-align: middle;\n}\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\n", ""]);


/***/ }),

/***/ "p2/P":
/*!*********************!*\
  !*** ./src/Tree.js ***!
  \*********************/
/*! exports provided: P_Split, P_Sub, P_continue, P_Nothing, random, chose, growTree, toDegrees, toRadians, drawLine, lineByAngle, drawTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P_Split", function() { return P_Split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P_Sub", function() { return P_Sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P_continue", function() { return P_continue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P_Nothing", function() { return P_Nothing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chose", function() { return chose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "growTree", function() { return growTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDegrees", function() { return toDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadians", function() { return toRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawLine", function() { return drawLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineByAngle", function() { return lineByAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTree", function() { return drawTree; });
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/groupBy */ "bt/X");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__);


const P_Split = 0.05
const P_Sub = 0.1
const P_continue = 0.8
const P_Nothing = 0.05

function random (f, e) {
  return Math.random() * (e - f) + f
}

function chose (probabilities, choices) {
  let rand = Math.random()
  let sum = 0
  for (let index = 0; index < probabilities.length; index++) {
    let probability = probabilities[index]
    let end = sum + probability
    if (rand >= sum && rand < end) {
      return choices[index]
    }
    sum = end
  }
}

function growTree (tree) {
  if (tree.children.length === 0) {
    let angle
    let width
    switch (chose([P_Split, P_Sub, P_continue, P_Nothing], ['split', 'sub', 'continue', 'nothing'])) {
      case 'split':
        angle = tree.angle + random(5, 50)
        width = tree.width - 0.25
        if (angle > -30 && angle < 210) {
          tree.children.push({
            width: (width > 0) ? width : tree.width,
            children: [],
            angle
          })
        }

        angle = tree.angle - random(5, 50)
        if (angle > -30 && angle < 210) {
          tree.children.push({
            width: (width > 0) ? width : tree.width,
            children: [],
            angle
          })
        }
        break
      case 'sub':
        angle = tree.angle + (((Math.round(Math.random()) === 0) ? -1 : 1) * random(0, 5))
        width = tree.width - 0.15
        if (angle > -30 && angle < 210) {
          tree.children.push({
            width: (width > 0) ? width : tree.width,
            children: [],
            angle
          })
        }
        width = tree.width - 0.35
        if (angle > -30 && angle < 210) {
          angle = tree.angle + ((Math.round(Math.random()) === 0) ? -1 : 1) * random(10, 40)
          tree.children.push({
            width: (width > 0) ? width : tree.width,
            children: [],
            angle
          })
        }
        break
      case 'continue':
        width = tree.width - 0.15
        angle = tree.angle + (((Math.round(Math.random()) === 0) ? -1 : 1) * random(0, 20))
        if (angle > -30 && angle < 210) {
          tree.children.push({
            width: (width > 0) ? width : tree.width,
            children: [],
            angle
          })
        }
        break
    }
  } else {
    tree.children.forEach(child => growTree(child))
  }
}

function toDegrees (angle) {
  return angle * (180 / Math.PI)
}

function toRadians (angle) {
  return angle * (Math.PI / 180)
}

function drawLine (ctx, line) {
  ctx.lineWidth = line.width
  ctx.beginPath()
  ctx.moveTo(line.start.x, line.start.y)
  ctx.lineTo(line.end.x, line.end.y)
  ctx.closePath()
  ctx.stroke()
}

function lineByAngle (start, width, length, angle) {
  let y = start.y - Math.sin(toRadians(angle)) * length
  let x = start.x + Math.cos(toRadians(angle)) * length
  return { start, length, width, end: { y, x } }
}

function makeTreePath (start, index, tree, result) {
  let line = lineByAngle(start, tree.width, 30, tree.angle)
  line.index = index
  result.push(line)
  for (let i = 0; i < tree.children.length; i++) {
    makeTreePath(line.end, index + i.toString(), tree.children[i], result)
  }
}

function onSegment (p, q, r) {
  return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) &&
    q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y)
}

function orientation (p, q, r) {
  let val = (q.y - p.y) * (r.x - q.x) -
    (q.x - p.x) * (r.y - q.y)
  if (val === 0) return 0
  return (val > 0) ? 1 : 2
}

function doIntersect (p1, q1, p2, q2) {

  let o1 = orientation(p1, q1, p2)
  let o2 = orientation(p1, q1, q2)
  let o3 = orientation(p2, q2, p1)
  let o4 = orientation(p2, q2, q1)

  if (o1 !== o2 && o3 !== o4)
    return true

  if (o1 === 0 && onSegment(p1, p2, q1)) return true

  if (o2 === 0 && onSegment(p1, q2, q1)) return true

  if (o3 === 0 && onSegment(p2, p1, q2)) return true

  if (o4 === 0 && onSegment(p2, q1, q2)) return true

  return false
}

function clearPaths (paths) {
  for (let i = 0; i < paths.length; i++) {
    for (let j = i + 1; j < paths.length; j++) {
      if (paths[i] && paths[j]) {
        if (paths[i].end === paths[j].start || paths[i].start === paths[j].start || paths[i].end === paths[j].end || paths[i].start === paths[j].end) continue
        if (doIntersect(paths[i].start, paths[i].end, paths[j].start, paths[j].end)) {
          let index = paths[j].index
          paths[j] = false
          let l = paths.findIndex(r => !!r && r.index.startsWith(index))
          while (l !== -1) {
            paths[l] = false
            l = paths.findIndex((r, ll) => {
              if (ll > l) {
                if (r) {
                  return r.index.startsWith(index)
                }
              }
              return false
            })
          }
        }
      }
    }
  }
}

function drawTree (ctx, postCtx, tree) {
  const height = ctx.canvas.height
  let paths = []
  makeTreePath({ x: 0, y: height }, '0', tree, paths)
  // clearPaths(paths)
  paths = paths.filter(p => p !== false)
  paths = lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default()(paths, p => p.index.length)
  for (let key in paths) {
    setTimeout(() => {
      paths[key].forEach(path => {
        drawLine(ctx, path)
      })
      postCtx.drawImage(ctx.canvas, 0, 0)
      postCtx.globalCompositeOperation = 'screen'
      postCtx.filter = 'blur(36px) brightness(200%)'
      postCtx.drawImage(ctx.canvas, 0, 0)
      postCtx.filter = 'blur(0)'
      postCtx.globalCompositeOperation = 'source-over'
    }, key * 10)
  }
}

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "Wotd");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "+5i3");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tree */ "p2/P");




const canvas = document.createElement('canvas')
const canvas2 = document.createElement('canvas')
const music = document.createElement('audio')
music.src = 'assets/sound.mp3'
music.autoplay = true
music.controls = false
document.body.appendChild(music)
document.body.appendChild(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight - 3
document.body.appendChild(canvas2)
canvas2.width = window.innerWidth
canvas2.height = window.innerHeight - 3
const ctx = canvas.getContext('2d', { alpha: false })
let postCtx = canvas2.getContext('2d')
const colors = ['#FFFFFF','#8585FF', '#3C13F2']
ctx.strokeStyle = colors[Math.floor(Object(_Tree__WEBPACK_IMPORTED_MODULE_2__["random"])(0, colors.length))]

let tree = {
  angle: 45,
  width: 5,
  children: []
}

for (let i = 0; i < 40; i++) {
  Object(_Tree__WEBPACK_IMPORTED_MODULE_2__["growTree"])(tree)
}
Object(_Tree__WEBPACK_IMPORTED_MODULE_2__["drawTree"])(ctx, postCtx, tree)


/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz8yN2I2Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzJmZjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGNBQWMsbUJBQU8sQ0FBQywrR0FBb0c7O0FBRTFIO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNGQUEyRTs7QUFFaEc7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQSwyQkFBMkIsbUJBQU8sQ0FBQywrREFBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsU0FBUyxrQkFBa0Isd0JBQXdCLEVBQUUsWUFBWSx1QkFBdUIsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIsOEJBQThCLEVBQUU7Ozs7Ozs7Ozs7OztBQ0Z2TSxjQUFjLG1CQUFPLENBQUMsb0VBQXlEOztBQUUvRTtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzRkFBMkU7O0FBRWhHO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZkEsMkJBQTJCLG1CQUFPLENBQUMsK0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLDhtQkFBOG1CLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHNCQUFzQixvQkFBb0IsK0JBQStCLEdBQUcsd0VBQXdFLGlCQUFpQixHQUFHLGlKQUFpSixxQkFBcUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLFlBQVksdUJBQXVCLEdBQUcsbUJBQW1CLG1CQUFtQixHQUFHLDZEQUE2RCxrQkFBa0Isb0JBQW9CLEdBQUcsV0FBVyxnQ0FBZ0Msd0JB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLHFEQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3JNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkI7QUFDQTtBQUN3Qjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZUFBZTtBQUNwRDtBQUNBO0FBQ0Esb0NBQW9DLG9EQUFNOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsUUFBUTtBQUN2QixFQUFFLHNEQUFRO0FBQ1Y7QUFDQSxzREFBUSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogIzAwMDAwMDsgfVxcblxcbmNhbnZhcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuXCIsIFwiXCJdKTtcbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcbiAgIHYyLjAtbW9kaWZpZWQgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBtYWtlIHN1cmUgdG8gc2V0IHNvbWUgZm9jdXMgc3R5bGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXFxuOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICAgIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXG4gKi9cXG5cXG5hdWRpbyxcXG5jYW52YXMsXFxudmlkZW8ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICpkaXNwbGF5OiBpbmxpbmU7XFxuICAgICp6b29tOiAxO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXFxuICogS25vd24gaXNzdWU6IG5vIElFIDYgc3VwcG9ydC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGV4dCByZXNpemluZyBvZGRseSBpbiBJRSA2Lzcgd2hlbiBib2R5IGBmb250LXNpemVgIGlzIHNldCB1c2luZ1xcbiAqICAgIGBlbWAgdW5pdHMuXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxuICogICAgdXNlciB6b29tLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICAgIG91dGxpbmU6IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcbiAqIDIuIEltcHJvdmUgaW1hZ2UgcXVhbGl0eSB3aGVuIHNjYWxlZCBpbiBJRSA3LlxcbiAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xcbiAgICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcbiAqL1xcblxcbmZvcm0ge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxuICAgIG1hcmdpbjogMCAycHg7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDYvNy84LzkuXFxuICogMi4gQ29ycmVjdCB0ZXh0IG5vdCB3cmFwcGluZyBpbiBGaXJlZm94IDMuXFxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgICBib3JkZXI6IDA7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMiAqL1xcbiAgICAqbWFyZ2luLWxlZnQ6IC03cHg7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxcbiAqICAgIGFuZCBDaHJvbWUuXFxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAzICovXFxuICAgICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcbiAqIDQuIFJlbW92ZSBpbm5lciBzcGFjaW5nIGluIElFIDcgd2l0aG91dCBhZmZlY3Rpbmcgbm9ybWFsIHRleHQgaW5wdXRzLlxcbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXG4gICAgKm92ZXJmbG93OiB2aXNpYmxlOyAgLyogNCAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkuXFxuICogMy4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDcuXFxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG4gICAgKmhlaWdodDogMTNweDsgLyogMyAqL1xcbiAgICAqd2lkdGg6IDEzcHg7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogb24gT1MgWC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDYvNy84LzkuXFxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiAxICovXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmh0bWwsXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGNvbG9yOiAjMjIyO1xcbn1cXG5cXG5cXG46Oi1tb3otc2VsZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLmNocm9tZWZyYW1lIHtcXG4gICAgbWFyZ2luOiAwLjJlbSAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgcGFkZGluZzogMC4yZW0gMDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImltcG9ydCBncm91cEJ5IGZyb20gJ2xvZGFzaC9ncm91cEJ5J1xuXG5leHBvcnQgY29uc3QgUF9TcGxpdCA9IDAuMDVcbmV4cG9ydCBjb25zdCBQX1N1YiA9IDAuMVxuZXhwb3J0IGNvbnN0IFBfY29udGludWUgPSAwLjhcbmV4cG9ydCBjb25zdCBQX05vdGhpbmcgPSAwLjA1XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20gKGYsIGUpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAoZSAtIGYpICsgZlxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvc2UgKHByb2JhYmlsaXRpZXMsIGNob2ljZXMpIHtcbiAgbGV0IHJhbmQgPSBNYXRoLnJhbmRvbSgpXG4gIGxldCBzdW0gPSAwXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9iYWJpbGl0aWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGxldCBwcm9iYWJpbGl0eSA9IHByb2JhYmlsaXRpZXNbaW5kZXhdXG4gICAgbGV0IGVuZCA9IHN1bSArIHByb2JhYmlsaXR5XG4gICAgaWYgKHJhbmQgPj0gc3VtICYmIHJhbmQgPCBlbmQpIHtcbiAgICAgIHJldHVybiBjaG9pY2VzW2luZGV4XVxuICAgIH1cbiAgICBzdW0gPSBlbmRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3Jvd1RyZWUgKHRyZWUpIHtcbiAgaWYgKHRyZWUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgbGV0IGFuZ2xlXG4gICAgbGV0IHdpZHRoXG4gICAgc3dpdGNoIChjaG9zZShbUF9TcGxpdCwgUF9TdWIsIFBfY29udGludWUsIFBfTm90aGluZ10sIFsnc3BsaXQnLCAnc3ViJywgJ2NvbnRpbnVlJywgJ25vdGhpbmcnXSkpIHtcbiAgICAgIGNhc2UgJ3NwbGl0JzpcbiAgICAgICAgYW5nbGUgPSB0cmVlLmFuZ2xlICsgcmFuZG9tKDUsIDUwKVxuICAgICAgICB3aWR0aCA9IHRyZWUud2lkdGggLSAwLjI1XG4gICAgICAgIGlmIChhbmdsZSA+IC0zMCAmJiBhbmdsZSA8IDIxMCkge1xuICAgICAgICAgIHRyZWUuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgICB3aWR0aDogKHdpZHRoID4gMCkgPyB3aWR0aCA6IHRyZWUud2lkdGgsXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBhbmdsZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBhbmdsZSA9IHRyZWUuYW5nbGUgLSByYW5kb20oNSwgNTApXG4gICAgICAgIGlmIChhbmdsZSA+IC0zMCAmJiBhbmdsZSA8IDIxMCkge1xuICAgICAgICAgIHRyZWUuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgICB3aWR0aDogKHdpZHRoID4gMCkgPyB3aWR0aCA6IHRyZWUud2lkdGgsXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBhbmdsZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3N1Yic6XG4gICAgICAgIGFuZ2xlID0gdHJlZS5hbmdsZSArICgoKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkgPT09IDApID8gLTEgOiAxKSAqIHJhbmRvbSgwLCA1KSlcbiAgICAgICAgd2lkdGggPSB0cmVlLndpZHRoIC0gMC4xNVxuICAgICAgICBpZiAoYW5nbGUgPiAtMzAgJiYgYW5nbGUgPCAyMTApIHtcbiAgICAgICAgICB0cmVlLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgd2lkdGg6ICh3aWR0aCA+IDApID8gd2lkdGggOiB0cmVlLndpZHRoLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgYW5nbGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHdpZHRoID0gdHJlZS53aWR0aCAtIDAuMzVcbiAgICAgICAgaWYgKGFuZ2xlID4gLTMwICYmIGFuZ2xlIDwgMjEwKSB7XG4gICAgICAgICAgYW5nbGUgPSB0cmVlLmFuZ2xlICsgKChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID09PSAwKSA/IC0xIDogMSkgKiByYW5kb20oMTAsIDQwKVxuICAgICAgICAgIHRyZWUuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgICB3aWR0aDogKHdpZHRoID4gMCkgPyB3aWR0aCA6IHRyZWUud2lkdGgsXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBhbmdsZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbnRpbnVlJzpcbiAgICAgICAgd2lkdGggPSB0cmVlLndpZHRoIC0gMC4xNVxuICAgICAgICBhbmdsZSA9IHRyZWUuYW5nbGUgKyAoKChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID09PSAwKSA/IC0xIDogMSkgKiByYW5kb20oMCwgMjApKVxuICAgICAgICBpZiAoYW5nbGUgPiAtMzAgJiYgYW5nbGUgPCAyMTApIHtcbiAgICAgICAgICB0cmVlLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgd2lkdGg6ICh3aWR0aCA+IDApID8gd2lkdGggOiB0cmVlLndpZHRoLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgYW5nbGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRyZWUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBncm93VHJlZShjaGlsZCkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlcyAoYW5nbGUpIHtcbiAgcmV0dXJuIGFuZ2xlICogKDE4MCAvIE1hdGguUEkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbnMgKGFuZ2xlKSB7XG4gIHJldHVybiBhbmdsZSAqIChNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0xpbmUgKGN0eCwgbGluZSkge1xuICBjdHgubGluZVdpZHRoID0gbGluZS53aWR0aFxuICBjdHguYmVnaW5QYXRoKClcbiAgY3R4Lm1vdmVUbyhsaW5lLnN0YXJ0LngsIGxpbmUuc3RhcnQueSlcbiAgY3R4LmxpbmVUbyhsaW5lLmVuZC54LCBsaW5lLmVuZC55KVxuICBjdHguY2xvc2VQYXRoKClcbiAgY3R4LnN0cm9rZSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lQnlBbmdsZSAoc3RhcnQsIHdpZHRoLCBsZW5ndGgsIGFuZ2xlKSB7XG4gIGxldCB5ID0gc3RhcnQueSAtIE1hdGguc2luKHRvUmFkaWFucyhhbmdsZSkpICogbGVuZ3RoXG4gIGxldCB4ID0gc3RhcnQueCArIE1hdGguY29zKHRvUmFkaWFucyhhbmdsZSkpICogbGVuZ3RoXG4gIHJldHVybiB7IHN0YXJ0LCBsZW5ndGgsIHdpZHRoLCBlbmQ6IHsgeSwgeCB9IH1cbn1cblxuZnVuY3Rpb24gbWFrZVRyZWVQYXRoIChzdGFydCwgaW5kZXgsIHRyZWUsIHJlc3VsdCkge1xuICBsZXQgbGluZSA9IGxpbmVCeUFuZ2xlKHN0YXJ0LCB0cmVlLndpZHRoLCAzMCwgdHJlZS5hbmdsZSlcbiAgbGluZS5pbmRleCA9IGluZGV4XG4gIHJlc3VsdC5wdXNoKGxpbmUpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdHJlZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIG1ha2VUcmVlUGF0aChsaW5lLmVuZCwgaW5kZXggKyBpLnRvU3RyaW5nKCksIHRyZWUuY2hpbGRyZW5baV0sIHJlc3VsdClcbiAgfVxufVxuXG5mdW5jdGlvbiBvblNlZ21lbnQgKHAsIHEsIHIpIHtcbiAgcmV0dXJuIHEueCA8PSBNYXRoLm1heChwLngsIHIueCkgJiYgcS54ID49IE1hdGgubWluKHAueCwgci54KSAmJlxuICAgIHEueSA8PSBNYXRoLm1heChwLnksIHIueSkgJiYgcS55ID49IE1hdGgubWluKHAueSwgci55KVxufVxuXG5mdW5jdGlvbiBvcmllbnRhdGlvbiAocCwgcSwgcikge1xuICBsZXQgdmFsID0gKHEueSAtIHAueSkgKiAoci54IC0gcS54KSAtXG4gICAgKHEueCAtIHAueCkgKiAoci55IC0gcS55KVxuICBpZiAodmFsID09PSAwKSByZXR1cm4gMFxuICByZXR1cm4gKHZhbCA+IDApID8gMSA6IDJcbn1cblxuZnVuY3Rpb24gZG9JbnRlcnNlY3QgKHAxLCBxMSwgcDIsIHEyKSB7XG5cbiAgbGV0IG8xID0gb3JpZW50YXRpb24ocDEsIHExLCBwMilcbiAgbGV0IG8yID0gb3JpZW50YXRpb24ocDEsIHExLCBxMilcbiAgbGV0IG8zID0gb3JpZW50YXRpb24ocDIsIHEyLCBwMSlcbiAgbGV0IG80ID0gb3JpZW50YXRpb24ocDIsIHEyLCBxMSlcblxuICBpZiAobzEgIT09IG8yICYmIG8zICE9PSBvNClcbiAgICByZXR1cm4gdHJ1ZVxuXG4gIGlmIChvMSA9PT0gMCAmJiBvblNlZ21lbnQocDEsIHAyLCBxMSkpIHJldHVybiB0cnVlXG5cbiAgaWYgKG8yID09PSAwICYmIG9uU2VnbWVudChwMSwgcTIsIHExKSkgcmV0dXJuIHRydWVcblxuICBpZiAobzMgPT09IDAgJiYgb25TZWdtZW50KHAyLCBwMSwgcTIpKSByZXR1cm4gdHJ1ZVxuXG4gIGlmIChvNCA9PT0gMCAmJiBvblNlZ21lbnQocDIsIHExLCBxMikpIHJldHVybiB0cnVlXG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGNsZWFyUGF0aHMgKHBhdGhzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBwYXRocy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHBhdGhzW2ldICYmIHBhdGhzW2pdKSB7XG4gICAgICAgIGlmIChwYXRoc1tpXS5lbmQgPT09IHBhdGhzW2pdLnN0YXJ0IHx8IHBhdGhzW2ldLnN0YXJ0ID09PSBwYXRoc1tqXS5zdGFydCB8fCBwYXRoc1tpXS5lbmQgPT09IHBhdGhzW2pdLmVuZCB8fCBwYXRoc1tpXS5zdGFydCA9PT0gcGF0aHNbal0uZW5kKSBjb250aW51ZVxuICAgICAgICBpZiAoZG9JbnRlcnNlY3QocGF0aHNbaV0uc3RhcnQsIHBhdGhzW2ldLmVuZCwgcGF0aHNbal0uc3RhcnQsIHBhdGhzW2pdLmVuZCkpIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBwYXRoc1tqXS5pbmRleFxuICAgICAgICAgIHBhdGhzW2pdID0gZmFsc2VcbiAgICAgICAgICBsZXQgbCA9IHBhdGhzLmZpbmRJbmRleChyID0+ICEhciAmJiByLmluZGV4LnN0YXJ0c1dpdGgoaW5kZXgpKVxuICAgICAgICAgIHdoaWxlIChsICE9PSAtMSkge1xuICAgICAgICAgICAgcGF0aHNbbF0gPSBmYWxzZVxuICAgICAgICAgICAgbCA9IHBhdGhzLmZpbmRJbmRleCgociwgbGwpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGxsID4gbCkge1xuICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gci5pbmRleC5zdGFydHNXaXRoKGluZGV4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3VHJlZSAoY3R4LCBwb3N0Q3R4LCB0cmVlKSB7XG4gIGNvbnN0IGhlaWdodCA9IGN0eC5jYW52YXMuaGVpZ2h0XG4gIGxldCBwYXRocyA9IFtdXG4gIG1ha2VUcmVlUGF0aCh7IHg6IDAsIHk6IGhlaWdodCB9LCAnMCcsIHRyZWUsIHBhdGhzKVxuICAvLyBjbGVhclBhdGhzKHBhdGhzKVxuICBwYXRocyA9IHBhdGhzLmZpbHRlcihwID0+IHAgIT09IGZhbHNlKVxuICBwYXRocyA9IGdyb3VwQnkocGF0aHMsIHAgPT4gcC5pbmRleC5sZW5ndGgpXG4gIGZvciAobGV0IGtleSBpbiBwYXRocykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcGF0aHNba2V5XS5mb3JFYWNoKHBhdGggPT4ge1xuICAgICAgICBkcmF3TGluZShjdHgsIHBhdGgpXG4gICAgICB9KVxuICAgICAgcG9zdEN0eC5kcmF3SW1hZ2UoY3R4LmNhbnZhcywgMCwgMClcbiAgICAgIHBvc3RDdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NjcmVlbidcbiAgICAgIHBvc3RDdHguZmlsdGVyID0gJ2JsdXIoMzZweCkgYnJpZ2h0bmVzcygyMDAlKSdcbiAgICAgIHBvc3RDdHguZHJhd0ltYWdlKGN0eC5jYW52YXMsIDAsIDApXG4gICAgICBwb3N0Q3R4LmZpbHRlciA9ICdibHVyKDApJ1xuICAgICAgcG9zdEN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXG4gICAgfSwga2V5ICogMTApXG4gIH1cbn0iLCJpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcydcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJ1xuaW1wb3J0IHsgZ3Jvd1RyZWUsIGRyYXdUcmVlLCByYW5kb20gfSBmcm9tICcuL1RyZWUnXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG5jb25zdCBjYW52YXMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbmNvbnN0IG11c2ljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKVxubXVzaWMuc3JjID0gJ2Fzc2V0cy9zb3VuZC5tcDMnXG5tdXNpYy5hdXRvcGxheSA9IHRydWVcbm11c2ljLmNvbnRyb2xzID0gZmFsc2VcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobXVzaWMpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcylcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gM1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMyKVxuY2FudmFzMi53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5jYW52YXMyLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDNcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHsgYWxwaGE6IGZhbHNlIH0pXG5sZXQgcG9zdEN0eCA9IGNhbnZhczIuZ2V0Q29udGV4dCgnMmQnKVxuY29uc3QgY29sb3JzID0gWycjRkZGRkZGJywnIzg1ODVGRicsICcjM0MxM0YyJ11cbmN0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1tNYXRoLmZsb29yKHJhbmRvbSgwLCBjb2xvcnMubGVuZ3RoKSldXG5cbmxldCB0cmVlID0ge1xuICBhbmdsZTogNDUsXG4gIHdpZHRoOiA1LFxuICBjaGlsZHJlbjogW11cbn1cblxuZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG4gIGdyb3dUcmVlKHRyZWUpXG59XG5kcmF3VHJlZShjdHgsIHBvc3RDdHgsIHRyZWUpXG4iXSwic291cmNlUm9vdCI6IiJ9