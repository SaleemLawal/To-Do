/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/form.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet/form.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal{
    backdrop-filter: blur(2rem);
    background-color: transparent;
    align-items: center;
    display: flex;
    height: 100%;
    inset: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
    z-index: 100;
}

.form-container {
    width: 20%;
    height: 45%;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: var(--shadow-primary);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 1.5rem;
    position: relative;
}

.form-container .form-title{
    font-size: 1.5rem;
    font-weight: var(--fw-700);
    color: var(--font-clr-primary);
}

.form-container .input-fields{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.form-container .priority{
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
}
.form-container input,
.form-container textarea{
    border: 1px solid var(--clr-form-accent);
    border-radius: 0.5rem;
    box-shadow: var(--shadow-secondary);
    padding: 0.2rem;
    outline: none;
    font-weight: var(--fw-500);
    color: var(--font-clr-primary);
}
.form-container input:focus,
.form-container textarea:focus{
    border: 1px solid var(--clr-btn-focus);
    box-shadow: var(--shadow-primary);
}

.form-container .btn-close{
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    border: none;
    background-color: transparent;
    color: var(--font-clr-primary);
    cursor: pointer;
}


`, "",{"version":3,"sources":["webpack://./src/stylesheet/form.css"],"names":[],"mappings":"AAGA;IACI,2BAA2B;IAC3B,6BAA6B;IAC7B,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,QAAQ;IACR,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,SAAS;IACT,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;AAC3B;AACA;;IAEI,wCAAwC;IACxC,qBAAqB;IACrB,mCAAmC;IACnC,eAAe;IACf,aAAa;IACb,0BAA0B;IAC1B,8BAA8B;AAClC;AACA;;IAEI,sCAAsC;IACtC,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,YAAY;IACZ,6BAA6B;IAC7B,8BAA8B;IAC9B,eAAe;AACnB","sourcesContent":["@import './variables.css';\n\n\n.modal{\n    backdrop-filter: blur(2rem);\n    background-color: transparent;\n    align-items: center;\n    display: flex;\n    height: 100%;\n    inset: 0;\n    justify-content: center;\n    position: absolute;\n    width: 100%;\n    z-index: 100;\n}\n\n.form-container {\n    width: 20%;\n    height: 45%;\n    background-color: #fff;\n    border-radius: 1rem;\n    box-shadow: var(--shadow-primary);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    gap: 1rem;\n    padding: 1.5rem;\n    position: relative;\n}\n\n.form-container .form-title{\n    font-size: 1.5rem;\n    font-weight: var(--fw-700);\n    color: var(--font-clr-primary);\n}\n\n.form-container .input-fields{\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n.form-container .priority{\n    display: flex;\n    flex-direction: row;\n    align-items: baseline;\n    justify-content: center;\n}\n.form-container input,\n.form-container textarea{\n    border: 1px solid var(--clr-form-accent);\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow-secondary);\n    padding: 0.2rem;\n    outline: none;\n    font-weight: var(--fw-500);\n    color: var(--font-clr-primary);\n}\n.form-container input:focus,\n.form-container textarea:focus{\n    border: 1px solid var(--clr-btn-focus);\n    box-shadow: var(--shadow-primary);\n}\n\n.form-container .btn-close{\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    border: none;\n    background-color: transparent;\n    color: var(--font-clr-primary);\n    cursor: pointer;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/normalize.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet/normalize.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v3.0.2 | MIT License | git.io/normalize */

/**
 * 1. Set default font family to sans-serif.
 * 2. Prevent iOS text size adjust after orientation change, without disabling
 *    user zoom.
 */
 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-family: sans-serif; /* 1 */
  -ms-text-size-adjust: 100%; /* 2 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/**
 * Remove default margin.
 */

body {
  margin: 0;
}

/* HTML5 display definitions
   ========================================================================== */

/**
 * Correct \`block\` display not defined for any HTML5 element in IE 8/9.
 * Correct \`block\` display not defined for \`details\` or \`summary\` in IE 10/11
 * and Firefox.
 * Correct \`block\` display not defined for \`main\` in IE 11.
 */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

/**
 * 1. Correct \`inline-block\` display not defined in IE 8/9.
 * 2. Normalize vertical alignment of \`progress\` in Chrome, Firefox, and Opera.
 */

audio,
canvas,
progress,
video {
  display: inline-block; /* 1 */
  vertical-align: baseline; /* 2 */
}

/**
 * Prevent modern browsers from displaying \`audio\` without controls.
 * Remove excess height in iOS 5 devices.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Address \`[hidden]\` styling not present in IE 8/9/10.
 * Hide the \`template\` element in IE 8/9/11, Safari, and Firefox < 22.
 */

[hidden],
template {
  display: none;
}

/* Links
   ========================================================================== */

/**
 * Remove the gray background color from active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */

a:active,
a:hover {
  outline: 0;
}

/* Text-level semantics
   ========================================================================== */

/**
 * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
 */

abbr[title] {
  border-bottom: 1px dotted;
}

/**
 * Address style set to \`bolder\` in Firefox 4+, Safari, and Chrome.
 */

b,
strong {
  font-weight: bold;
}

/**
 * Address styling not present in Safari and Chrome.
 */

dfn {
  font-style: italic;
}

/**
 * Address variable \`h1\` font-size and margin within \`section\` and \`article\`
 * contexts in Firefox 4+, Safari, and Chrome.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/**
 * Address styling not present in IE 8/9.
 */

mark {
  background: #ff0;
  color: #000;
}

/**
 * Address inconsistent and variable font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` affecting \`line-height\` in all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove border when inside \`a\` element in IE 8/9/10.
 */

img {
  border: 0;
}

/**
 * Correct overflow not hidden in IE 9/10/11.
 */

svg:not(:root) {
  overflow: hidden;
}

/* Grouping content
   ========================================================================== */

/**
 * Address margin not present in IE 8/9 and Safari.
 */

figure {
  margin: 1em 40px;
}

/**
 * Address differences between Firefox and other browsers.
 */

hr {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}

/**
 * Contain overflow in all browsers.
 */

pre {
  overflow: auto;
}

/**
 * Address odd \`em\`-unit font size rendering in all browsers.
 */

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

/* Forms
   ========================================================================== */

/**
 * Known limitation: by default, Chrome and Safari on OS X allow very limited
 * styling of \`select\`, unless a \`border\` property is set.
 */

/**
 * 1. Correct color not being inherited.
 *    Known issue: affects color of disabled elements.
 * 2. Correct font properties not being inherited.
 * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
 */

button,
input,
optgroup,
select,
textarea {
  color: inherit; /* 1 */
  font: inherit; /* 2 */
  margin: 0; /* 3 */
}

/**
 * Address \`overflow\` set to \`hidden\` in IE 8/9/10/11.
 */

button {
  overflow: visible;
}

/**
 * Address inconsistent \`text-transform\` inheritance for \`button\` and \`select\`.
 * All other form control elements do not inherit \`text-transform\` values.
 * Correct \`button\` style inheritance in Firefox, IE 8/9/10/11, and Opera.
 * Correct \`select\` style inheritance in Firefox.
 */

button,
select {
  text-transform: none;
}

/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native \`audio\`
 *    and \`video\` controls.
 * 2. Correct inability to style clickable \`input\` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    \`input\` and others.
 */

button,
html input[type="button"], /* 1 */
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button; /* 2 */
  appearance: button; /* Add the standard property 'appearance' */
  cursor: pointer; /* 3 */
}

/**
 * Re-set default cursor for disabled elements.
 */

button[disabled],
html input[disabled] {
  cursor: default;
}

/**
 * Remove inner padding and border in Firefox 4+.
 */

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/**
 * Address Firefox 4+ setting \`line-height\` on \`input\` using \`!important\` in
 * the UA stylesheet.
 */

input {
  line-height: normal;
}

/**
 * It's recommended that you don't attempt to style these elements.
 * Firefox's implementation doesn't respect box-sizing, padding, or width.
 *
 * 1. Address box sizing set to \`content-box\` in IE 8/9/10.
 * 2. Remove excess padding in IE 8/9/10.
 */

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Fix the cursor style for Chrome's increment/decrement buttons. For certain
 * \`font-size\` values of the \`input\`, it causes the cursor style of the
 * decrement button to change from \`default\` to \`text\`.
 */

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Address \`appearance\` set to \`searchfield\` in Safari and Chrome.
 * 2. Address \`box-sizing\` set to \`border-box\` in Safari and Chrome
 *    (include \`-moz\` to future-proof).
 */

input[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  appearance: textfield; /* Add the standard property 'appearance' */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box; /* 2 */
  box-sizing: content-box;
}

/**
 * Remove inner padding and search cancel button in Safari and Chrome on OS X.
 * Safari (but not Chrome) clips the cancel button when the search input has
 * padding (and \`textfield\` appearance).
 */

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * Define consistent border, margin, and padding.
 */

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct \`color\` not being inherited in IE 8/9/10/11.
 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
 */

legend {
  border: 0; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Remove default vertical scrollbar in IE 8/9/10/11.
 */

textarea {
  overflow: auto;
}

/**
 * Don't inherit the \`font-weight\` (applied by a rule above).
 * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
 */

optgroup {
  font-weight: bold;
}

/* Tables
   ========================================================================== */

/**
 * Remove most spacing between table cells.
 */

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}`, "",{"version":3,"sources":["webpack://./src/stylesheet/normalize.css"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  appearance: button; /* Add the standard property 'appearance' */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  appearance: textfield; /* Add the standard property 'appearance' */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/variables.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/form.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Roboto:ital@0;1&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body{
    height: 100%;
    background: var(--clr-bg-primary) no-repeat center center fixed;
    font-family: var(--playfair-font);
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Styling the main container */
div.main-container {
    border: 1px solid transparent;
    border-radius: 1.5rem;
    width: 60%;
    min-height: 75%;
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    overflow: auto;
    box-shadow: var(--shadow-primary);
}
div.main-container h1{
    text-align: center;
    margin: 0;
    margin-top: 0.67em;

}

/* Styling the left container */ 
.left-container{
    background-color: var(--clr-bg-accent);
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.left-container div.home-actions, 
.left-container div.projects{
    margin-left: 1rem;
}
.left-container div.home-actions a,
.left-container div.projects a{
    text-decoration: none;
    color: var(--font-clr-primary);
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
}
.left-container div.home-actions a:hover,
.left-container div.projects a:hover,
div.projects .projects-sections .project-item:hover{
    background-color: var(--clr-btn-primary);
    box-shadow: var(--shadow-primary);
    border-radius: 0.75rem;
    width: 90%;
}

div.home-actions div.collections{
    margin-top: 1.5rem;
}
div.event-sections,
div.collections{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

div.left-container div.projects{
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
div.projects .projects-sections .project-item{
    display: flex;
    align-items: flex-start;
}

button{
    display: flex;
    place-items: center;
    justify-content: center;
    font-weight: var(--fw-700);
    border: none;
    padding: 0.15rem 0.5rem;
    border-radius: 0.75rem;
    color: var(--font-clr-btn);
}
div.left-container button.create-project,
.form-container button[type="submit"]{
    background-color: var(--clr-btn-primary);
    margin: 0 0.75rem 1rem 0.67rem;
}
div.action-buttons button:hover{
    background-color: var(--clr-btn-secondary);
    box-shadow: var(--shadow-primary);
}
div.left-container button.create-project:hover,
.form-container button[type="submit"]:hover{
    background-color: var(--clr-btn-accent);
    box-shadow: var(--shadow-primary);
}

/* Styling the right container */ 
div.right-container{
    background-color: var(--clr-bg-secondary);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
}
div.main-container .right-container h1{
    text-align: left;
    margin: 0;
}
div.action-buttons{
    display: flex;
    justify-content: space-between;
}
div.task-lists{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
div.task-lists .task{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: var(--clr-bg-secondary-xl);
    box-shadow: var(--shadow-secondary);
}
/* div.task-lists .task:hover{
    background-color: var(--clr-bg-secondary);
    box-shadow: var(--shadow-primary);
} */

.display-none{
    display: none;
}


`, "",{"version":3,"sources":["webpack://./src/stylesheet/style.css"],"names":[],"mappings":"AAIA;IACI,YAAY;IACZ,+DAA+D;IAC/D,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,+BAA+B;AAC/B;IACI,6BAA6B;IAC7B,qBAAqB;IACrB,UAAU;IACV,eAAe;IACf,aAAa;IACb,gCAAgC;IAChC,cAAc;IACd,iCAAiC;AACrC;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,kBAAkB;;AAEtB;;AAEA,+BAA+B;AAC/B;IACI,sCAAsC;IACtC,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;;IAEI,iBAAiB;AACrB;AACA;;IAEI,qBAAqB;IACrB,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;AACA;;;IAGI,wCAAwC;IACxC,iCAAiC;IACjC,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,0BAA0B;IAC1B,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;IACtB,0BAA0B;AAC9B;AACA;;IAEI,wCAAwC;IACxC,8BAA8B;AAClC;AACA;IACI,0CAA0C;IAC1C,iCAAiC;AACrC;AACA;;IAEI,uCAAuC;IACvC,iCAAiC;AACrC;;AAEA,gCAAgC;AAChC;IACI,yCAAyC;IACzC,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,SAAS;AACb;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;IAChB,qBAAqB;IACrB,4CAA4C;IAC5C,mCAAmC;AACvC;AACA;;;GAGG;;AAEH;IACI,aAAa;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Roboto:ital@0;1&display=swap');\n@import '../stylesheet/variables.css';\n@import '../stylesheet/form.css';\n\nhtml, body{\n    height: 100%;\n    background: var(--clr-bg-primary) no-repeat center center fixed;\n    font-family: var(--playfair-font);\n}\n\nbody{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Styling the main container */\ndiv.main-container {\n    border: 1px solid transparent;\n    border-radius: 1.5rem;\n    width: 60%;\n    min-height: 75%;\n    display: grid;\n    grid-template-columns: 0.5fr 2fr;\n    overflow: auto;\n    box-shadow: var(--shadow-primary);\n}\ndiv.main-container h1{\n    text-align: center;\n    margin: 0;\n    margin-top: 0.67em;\n\n}\n\n/* Styling the left container */ \n.left-container{\n    background-color: var(--clr-bg-accent);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n.left-container div.home-actions, \n.left-container div.projects{\n    margin-left: 1rem;\n}\n.left-container div.home-actions a,\n.left-container div.projects a{\n    text-decoration: none;\n    color: var(--font-clr-primary);\n    margin-left: 0.5rem;\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n}\n.left-container div.home-actions a:hover,\n.left-container div.projects a:hover,\ndiv.projects .projects-sections .project-item:hover{\n    background-color: var(--clr-btn-primary);\n    box-shadow: var(--shadow-primary);\n    border-radius: 0.75rem;\n    width: 90%;\n}\n\ndiv.home-actions div.collections{\n    margin-top: 1.5rem;\n}\ndiv.event-sections,\ndiv.collections{\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\ndiv.left-container div.projects{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\ndiv.projects .projects-sections .project-item{\n    display: flex;\n    align-items: flex-start;\n}\n\nbutton{\n    display: flex;\n    place-items: center;\n    justify-content: center;\n    font-weight: var(--fw-700);\n    border: none;\n    padding: 0.15rem 0.5rem;\n    border-radius: 0.75rem;\n    color: var(--font-clr-btn);\n}\ndiv.left-container button.create-project,\n.form-container button[type=\"submit\"]{\n    background-color: var(--clr-btn-primary);\n    margin: 0 0.75rem 1rem 0.67rem;\n}\ndiv.action-buttons button:hover{\n    background-color: var(--clr-btn-secondary);\n    box-shadow: var(--shadow-primary);\n}\ndiv.left-container button.create-project:hover,\n.form-container button[type=\"submit\"]:hover{\n    background-color: var(--clr-btn-accent);\n    box-shadow: var(--shadow-primary);\n}\n\n/* Styling the right container */ \ndiv.right-container{\n    background-color: var(--clr-bg-secondary);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n}\ndiv.main-container .right-container h1{\n    text-align: left;\n    margin: 0;\n}\ndiv.action-buttons{\n    display: flex;\n    justify-content: space-between;\n}\ndiv.task-lists{\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\ndiv.task-lists .task{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0.75rem;\n    border-radius: 0.5rem;\n    background-color: var(--clr-bg-secondary-xl);\n    box-shadow: var(--shadow-secondary);\n}\n/* div.task-lists .task:hover{\n    background-color: var(--clr-bg-secondary);\n    box-shadow: var(--shadow-primary);\n} */\n\n.display-none{\n    display: none;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/variables.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet/variables.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --fs-300: 0.7rem;
    --fs-400: 1rem;
    --fs-500: 1.3rem;
    --fs-700: 2rem;
    --fw-300: 300;
    --fw-400: 400;
    --fw-700: 700;
    --font-clr-primary: #002927;
    --font-clr-btn: #002927;
    --clr-bg-accent: hsla(0,0%,100%,.5);
    --clr-bg-secondary: hsla(0,0%,100%,.1);
    --clr-bg-secondary-xl: hsla(0,0%,100%,.3);
    --clr-bg-primary: linear-gradient(to right top,#d16ba5,#c777b9,#ba83ca,#aa8fd8,#9a9ae1,#88a4e8,#77aeeb,#68b6eb,#56bfe8,#4ec7e2,#54cdd8,#65d3cc);
    --clr-btn-primary: rgba(0,0,0,.15);
    --clr-btn-accent: rgba(0,0,0,.3);
    --clr-btn-secondary: #fff;
    --clr-btn-focus: #64d3cc;
    --clr-btn-checkbox: #1fc11f;
    --clr-form-bg: rgba(0,0,0,.15);
    --clr-form-accent: rgba(0,0,0,.3);
    --clr-important: rgba(255,0,0,.35);
    --shadow-primary: 0 0 10px rgba(0,0,0,.2);
    --shadow-secondary: 0 0 10px rgba(0,0,0,.1);
    --playfair-font: 'Playfair Display', serif;
    --roboto-font: 'Roboto', sans-serif;
}`, "",{"version":3,"sources":["webpack://./src/stylesheet/variables.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,cAAc;IACd,aAAa;IACb,aAAa;IACb,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,mCAAmC;IACnC,sCAAsC;IACtC,yCAAyC;IACzC,+IAA+I;IAC/I,kCAAkC;IAClC,gCAAgC;IAChC,yBAAyB;IACzB,wBAAwB;IACxB,2BAA2B;IAC3B,8BAA8B;IAC9B,iCAAiC;IACjC,kCAAkC;IAClC,yCAAyC;IACzC,2CAA2C;IAC3C,0CAA0C;IAC1C,mCAAmC;AACvC","sourcesContent":[":root {\n    --fs-300: 0.7rem;\n    --fs-400: 1rem;\n    --fs-500: 1.3rem;\n    --fs-700: 2rem;\n    --fw-300: 300;\n    --fw-400: 400;\n    --fw-700: 700;\n    --font-clr-primary: #002927;\n    --font-clr-btn: #002927;\n    --clr-bg-accent: hsla(0,0%,100%,.5);\n    --clr-bg-secondary: hsla(0,0%,100%,.1);\n    --clr-bg-secondary-xl: hsla(0,0%,100%,.3);\n    --clr-bg-primary: linear-gradient(to right top,#d16ba5,#c777b9,#ba83ca,#aa8fd8,#9a9ae1,#88a4e8,#77aeeb,#68b6eb,#56bfe8,#4ec7e2,#54cdd8,#65d3cc);\n    --clr-btn-primary: rgba(0,0,0,.15);\n    --clr-btn-accent: rgba(0,0,0,.3);\n    --clr-btn-secondary: #fff;\n    --clr-btn-focus: #64d3cc;\n    --clr-btn-checkbox: #1fc11f;\n    --clr-form-bg: rgba(0,0,0,.15);\n    --clr-form-accent: rgba(0,0,0,.3);\n    --clr-important: rgba(255,0,0,.35);\n    --shadow-primary: 0 0 10px rgba(0,0,0,.2);\n    --shadow-secondary: 0 0 10px rgba(0,0,0,.1);\n    --playfair-font: 'Playfair Display', serif;\n    --roboto-font: 'Roboto', sans-serif;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/stylesheet/normalize.css":
/*!**************************************!*\
  !*** ./src/stylesheet/normalize.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stylesheet/style.css":
/*!**********************************!*\
  !*** ./src/stylesheet/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/form.js":
/*!*****************************!*\
  !*** ./src/scripts/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectFunction: () => (/* binding */ projectFunction),
/* harmony export */   todoFunction: () => (/* binding */ todoFunction)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/scripts/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/scripts/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/scripts/task.js");



// Manages form interactions for creating/editing to-dos and projects.
// Validates user input and triggers actions accordingly.

// template for generating forms
function generateFormTemplate(){
    const generateTodoForm = () => {
        return generateForm(
            'Create New Todo',
            [
                { id: 'todo-name', label: 'Name', type: 'text' },
                { id: 'todo-date', label: 'Date', type: 'date' },
                { id: 'todo-priority', label: 'Important?', type: 'checkbox' }
            ],
            'Submit',
            'todo'
        );
    }
    
    const generateProjectForm = () => {
        return generateForm(
            'Create New Project',
            [
                { id: 'project-name', label: 'Project Name', type: 'text' },
                { id: 'project-description', label: 'Project Description', type: 'textarea' }
            ],
            'Submit',
            'project'
        );
    }
    return { generateTodoForm, generateProjectForm };
}
// function to generate a form element based on the given parameters
function generateForm(title, fields, submitButtonText, formType) {
    const newForm = document.createElement('form');
    newForm.setAttribute('data-form', '');
    newForm.setAttribute('id', `new-${formType}`);
    newForm.setAttribute('class', 'form-container');

    // form title
    const formTitle = document.createElement('h2');
    formTitle.setAttribute('class', 'form-title');
    formTitle.textContent = title;

    newForm.appendChild(formTitle);

    // form input fields
    fields.forEach((field) => {
        const fieldDiv = document.createElement('div');
        fieldDiv.setAttribute('class', 'input-fields');
        if (field.type === 'checkbox') fieldDiv.classList.add('priority');

        const fieldLabel = document.createElement('label');
        fieldLabel.setAttribute('for', field.id);
        fieldLabel.textContent = field.label;

        const fieldInput = document.createElement(field.type === 'textarea' ? 'textarea' : 'input');
        fieldInput.setAttribute('id', field.id);

        if (field.type === 'date') {
            fieldInput.setAttribute('type', 'date');
            fieldInput.setAttribute('placeholder', 'mm/dd/yyyy');
        } else if (field.type === 'checkbox') {
            fieldInput.setAttribute('type', 'checkbox');
        }

        fieldDiv.appendChild(fieldLabel);
        fieldDiv.appendChild(fieldInput);
        newForm.appendChild(fieldDiv);
    });

    // form submission
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('data-btn-submit', '');
    submitButton.textContent = submitButtonText;

    const buttonClose = document.createElement('button');
    buttonClose.setAttribute('type', 'button');
    buttonClose.setAttribute('class', 'btn-close');
    buttonClose.setAttribute('data-btn-close', '');
    buttonClose.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z"></path></svg>
    `;
    newForm.appendChild(submitButton);
    newForm.appendChild(buttonClose);

    return newForm;
}

// function to perform actions based on the form that was submitted
function performAction(formElement) {
    const modal = document.querySelector('.modal');
    modal.classList.remove('display-none');
    document.querySelector('.modal').appendChild(formElement);

    const xButton = document.querySelector('[data-btn-close]');
    xButton.addEventListener('click', () => {
        modal.classList.add('display-none');
        document.querySelector('.modal').removeChild(formElement);
    });

    // listen for form submission
    const submitButton = document.querySelector('[data-btn-submit]');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.querySelector('[data-form]');
        if (form.id === 'new-todo') {
            const todoName = document.getElementById('todo-name').value;
            const todoDate = document.getElementById('todo-date').value;
            const todoPriority = document.getElementById('todo-priority').checked;

            // validate user input
            if (todoName === '' || todoDate === '') {
                alert('Please fill out all fields.');
                return;
            }else{
                // create new todo
                const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](todoName, todoDate, todoPriority);
                const newTodoItem = (0,_task_js__WEBPACK_IMPORTED_MODULE_2__.makeTodoItem)(newTodo);
                const todoList = document.querySelector('[data-task-list]');
                todoList.appendChild(newTodoItem);

            }
           
        }else{
            const projectName = document.getElementById('project-name').value;
            const projectDescription = document.getElementById('project-description').value;

            // validate user input
            if (projectName === '' || projectDescription === '') {
                alert('Please fill out all fields.');
                return;
            }else{
                // create new project
                const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](projectName, projectDescription);
                const newProjectItem = (0,_task_js__WEBPACK_IMPORTED_MODULE_2__.makeProjectItem)(newProject);
                const projectList = document.querySelector('[data-project-list]');
                projectList.appendChild(newProjectItem);
            }
        }
        modal.classList.add('display-none');
        document.querySelector('.modal').removeChild(formElement);
    });
}

// function to handle event listeners for the form
function eventFunctions() {
    const projectFunction = () => {
        const newProject = generateFormTemplate().generateProjectForm();
        performAction(newProject);
    }

    const todoFunction = () => {
        // show the form for creating a new todo
        const newForm = generateFormTemplate().generateTodoForm();
        performAction(newForm);
    }
    return { projectFunction, todoFunction };
}

const { projectFunction, todoFunction } = eventFunctions();



/***/ }),

/***/ "./src/scripts/project.js":
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
// Defines a Project class to represent projects or separate lists of to-dos.
// Manages the collection of to-dos within a project.
// Includes methods for adding, updating, and deleting to-dos within the project.
class Project{
    constructor (title, description){
        this.title = title
        this.description = description
        
    }
    addTodo (todo){
        this.todos.push(todo)
    }
    removeTodo (todo){
        this.todos.splice(this.todos.indexOf(todo), 1)
    }
    editTitle(title){
        this.title = title
    }
    editDescription(description){
        this.description = description
    }
    getTitle(){
        return this.title
    }
    getTodos(){
        return this.todos
    }
    getDescription(){
        return this.description
    }
}

/***/ }),

/***/ "./src/scripts/storage.js":
/*!********************************!*\
  !*** ./src/scripts/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveProjects: () => (/* binding */ saveProjects)
/* harmony export */ });
// Handles local storage interactions to persist projects and to-dos.
// Provides functions to save and retrieve data from local storage.

function saveProjects(projects){
    localStorage.projects = JSON.stringify(projects);
}


/***/ }),

/***/ "./src/scripts/task.js":
/*!*****************************!*\
  !*** ./src/scripts/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeProjectItem: () => (/* binding */ makeProjectItem),
/* harmony export */   makeTodoItem: () => (/* binding */ makeTodoItem)
/* harmony export */ });

function makeTodoItem(todoObj){
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('task');
    todoDiv.setAttribute('data-task', '');

    const todoTitle = document.createElement('p');
    todoTitle.textContent = todoObj.getTitle();

    const todoDueDate = document.createElement('p');
    todoDueDate.textContent = todoObj.getDueDate();

    const todoPriority = document.createElement('p');
    todoPriority.textContent = (todoObj.getPriority() ? 'Important' : 'Not Important');

    todoDiv.appendChild(todoTitle);
    todoDiv.appendChild(todoDueDate);
    todoDiv.appendChild(todoPriority);

    return todoDiv;

}

function makeProjectItem(projectObj){
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-item');
    projectDiv.setAttribute('data-project-item', '');

    const miniArrow = document.createElement('p');
    miniArrow.innerHTML = `
    <svg width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M11.7 15.3q-.475.475-1.087.212Q10 15.25 10 14.575v-5.15q0-.675.613-.937q.612-.263 1.087.212l2.6 2.6q.15.15.225.325q.075.175.075.375t-.075.375q-.075.175-.225.325Z"></path></svg>
    `

    const projectTitle = document.createElement('p');
    projectTitle.textContent = projectObj.getTitle();

    projectDiv.appendChild(miniArrow);
    projectDiv.appendChild(projectTitle);
    
    return projectDiv;
}


/***/ }),

/***/ "./src/scripts/todo.js":
/*!*****************************!*\
  !*** ./src/scripts/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
// Defines a Todo class to represent individual to-do items.
// Includes properties like title, dueDate, priority, notes, and checklist.
// Also includes methods to edit any of these properties.

class Todo {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    editTitle(newTitle) {
        this.title = newTitle;
    }

    editDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    editPriority(newPriority) {
        this.priority = newPriority;
    }

    getTitle() {
        return this.title;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }
}




/***/ }),

/***/ "./src/scripts/ui.js":
/*!***************************!*\
  !*** ./src/scripts/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAction)
/* harmony export */ });
// Manages the user interface, including DOM manipulation.
// Handles dynamic rendering of projects, to-dos, and forms.
// Listens for user interactions (e.g., button clicks) and triggers corresponding actions.

// Function to handle user actions and navigate the page
function getAction() {
    // adds event listener to the divs in the home-actions container
    const mainActions = document.querySelectorAll('[data-actions]');
    mainActions.forEach(action => {
        action.addEventListener('click', (event) => {
            event.preventDefault();
            const actionClicked = event.currentTarget.querySelector('p').innerHTML;
            navigatePage(actionClicked);
        });
    });
}

// Function to update the screen based on user action
function navigatePage(clicked){
    const title = document.querySelector('[data-title]');
    title.innerHTML = clicked;
    title.setAttribute('data-title', clicked);
    const screen = renderScreen();

    switch (clicked) {
        case 'General':
            screen.renderGeneral();
            break;
        case 'Today':
            screen.renderToday();
            break;
        case 'Upcoming':
            screen.renderUpcoming();
            break;
        case 'Completed':
            screen.renderCompleted();
            break;
        case 'Trash':
            screen.renderTrash();
            break;
        default:
            console.error(`Unhandled action: ${clicked}`);
            break;
    }
}

// Function to render different screens
function renderScreen(){
    const mainContainer = document.querySelector('[data-right-container]');
    const pTag = mainContainer.querySelector('[data-description]');
    const getActionButtons = mainContainer.querySelector('[data-action-buttons]');

    const renderGeneral = () => {
        pTag.innerHTML = 'A general list of tasks';
        if (!getActionButtons) {
            // need to make a new div and generate the buttons, then append it before task-list in main-container div
            const actionButtons = document.createElement('div');
            actionButtons.setAttribute('data-action-buttons', '');
            actionButtons.classList.add('action-buttons');

            // make the buttons
            const allButton = document.createElement('button');
            allButton.classList.add('toggle');
            allButton.textContent = 'All';

            // make create to do button
            const createButton = document.createElement('button');
            createButton.classList.add('create-tasks');
            createButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"></path></svg>
                Create Todo
            `
            // append to the actionButtons div
            actionButtons.appendChild(allButton);
            actionButtons.appendChild(createButton);

            // append to the main container
            mainContainer.insertBefore(actionButtons, mainContainer.querySelector('[data-task-list]'));
        }
        // Render all tasks to be done
    }
    
    const renderToday = () =>{
        pTag.innerHTML = 'A list of tasks for today';
        if (getActionButtons){
            mainContainer.removeChild(getActionButtons);
        }
         
        // render task to be done today
    }
    const renderUpcoming = () =>{
        pTag.innerHTML = 'A list of tasks for the future';
        //  = mainContainer.querySelector('[data-action-buttons]');
        if (getActionButtons){
            mainContainer.removeChild(getActionButtons);
        }
        // render task to be done in the future
    }
    const renderCompleted = () =>{
        pTag.innerHTML = 'A list of completed tasks';
        if (getActionButtons){
            mainContainer.removeChild(getActionButtons);
        }
        // render task done
    }
    const renderTrash = () =>{
        pTag.innerHTML = 'A list of deleted tasks';
       if (getActionButtons){
            mainContainer.removeChild(getActionButtons);
        }
        // render task deleted
    }

    return {renderGeneral, renderToday, renderUpcoming, renderCompleted, renderTrash}
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheet_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheet/normalize.css */ "./src/stylesheet/normalize.css");
/* harmony import */ var _stylesheet_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheet/style.css */ "./src/stylesheet/style.css");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ "./src/scripts/ui.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.js */ "./src/scripts/form.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.js */ "./src/scripts/storage.js");
// Acts as the main application module.
// Coordinates interactions between different parts of the application.
// Initializes event listeners and sets up the overall application structure.






// Function to initialize the application
// function initApp() {
//     const createProject = document.querySelector('[data-create-project-btn]');
//     const createTodo = document.querySelector('[data-create-todo]');
//     // need to add function that creates a new project and todo when the buttons are clicked
//     createProject.addEventListener('click', projectFunction);
//     createTodo.addEventListener('click', todoFunction);
// }
// initApp();
// getAction();


(0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveProjects)([1, 2, 3]);
console.log(localStorage.projects)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxXQUFXLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLE1BQU0sU0FBUyxvQkFBb0IscUJBQXFCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxTQUFTLE1BQU0sTUFBTSxZQUFZLE9BQU8sVUFBVSxNQUFNLFFBQVEsc0JBQXNCLHlCQUF5QixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsTUFBTSxNQUFNLHNCQUFzQixxQkFBcUIsT0FBTyxRQUFRLE1BQU0sTUFBTSxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssc0JBQXNCLHlCQUF5QixhQUFhLHVCQUF1QixhQUFhLE9BQU8sUUFBUSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLE9B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Qjs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlDO0FBQ3pDLHlEQUFZO0FBQ1osa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXNoZWV0L2Zvcm0uY3NzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlc2hlZXQvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXNoZWV0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXNoZWV0L3ZhcmlhYmxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzaGVldC9ub3JtYWxpemUuY3NzP2I3M2QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzaGVldC9zdHlsZS5jc3M/NDc2NCIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NjcmlwdHMvZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zY3JpcHRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2NyaXB0cy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NjcmlwdHMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zY3JpcHRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2NyaXB0cy91aS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zY3JpcHRzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi92YXJpYWJsZXMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tb2RhbHtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBpbnNldDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiA0NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1wcmltYXJ5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciAuZm9ybS10aXRsZXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNzAwKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jbHItcHJpbWFyeSk7XG59XG5cbi5mb3JtLWNvbnRhaW5lciAuaW5wdXQtZmllbGRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cbi5mb3JtLWNvbnRhaW5lciAucHJpb3JpdHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb3JtLWNvbnRhaW5lciBpbnB1dCxcbi5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZm9ybS1hY2NlbnQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc2Vjb25kYXJ5KTtcbiAgICBwYWRkaW5nOiAwLjJyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNTAwKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jbHItcHJpbWFyeSk7XG59XG4uZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMsXG4uZm9ybS1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWJ0bi1mb2N1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXByaW1hcnkpO1xufVxuXG4uZm9ybS1jb250YWluZXIgLmJ0bi1jbG9zZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwLjVyZW07XG4gICAgcmlnaHQ6IDAuNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY2xyLXByaW1hcnkpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0L2Zvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7QUFDQTs7SUFFSSx3Q0FBd0M7SUFDeEMscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiw4QkFBOEI7QUFDbEM7QUFDQTs7SUFFSSxzQ0FBc0M7SUFDdEMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3ZhcmlhYmxlcy5jc3MnO1xcblxcblxcbi5tb2RhbHtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBpbnNldDogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiA0NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1wcmltYXJ5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciAuZm9ybS10aXRsZXtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy03MDApO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jbHItcHJpbWFyeSk7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciAuaW5wdXQtZmllbGRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuLmZvcm0tY29udGFpbmVyIC5wcmlvcml0eXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvcm0tY29udGFpbmVyIGlucHV0LFxcbi5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYXtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWZvcm0tYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc2Vjb25kYXJ5KTtcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNTAwKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY2xyLXByaW1hcnkpO1xcbn1cXG4uZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMsXFxuLmZvcm0tY29udGFpbmVyIHRleHRhcmVhOmZvY3Vze1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItYnRuLWZvY3VzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXByaW1hcnkpO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgLmJ0bi1jbG9zZXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDAuNXJlbTtcXG4gICAgcmlnaHQ6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY2xyLXByaW1hcnkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4yIHwgTUlUIExpY2Vuc2UgfCBnaXQuaW8vbm9ybWFsaXplICovXG5cbi8qKlxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xuICogICAgdXNlciB6b29tLlxuICovXG4gKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmh0bWwge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXG4gKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBDb3JyZWN0IFxcYGJsb2NrXFxgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGFueSBIVE1MNSBlbGVtZW50IGluIElFIDgvOS5cbiAqIENvcnJlY3QgXFxgYmxvY2tcXGAgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgXFxgZGV0YWlsc1xcYCBvciBcXGBzdW1tYXJ5XFxgIGluIElFIDEwLzExXG4gKiBhbmQgRmlyZWZveC5cbiAqIENvcnJlY3QgXFxgYmxvY2tcXGAgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgXFxgbWFpblxcYCBpbiBJRSAxMS5cbiAqL1xuXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1haW4sXG5tZW51LFxubmF2LFxuc2VjdGlvbixcbnN1bW1hcnkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IFxcYGlubGluZS1ibG9ja1xcYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cbiAqIDIuIE5vcm1hbGl6ZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgXFxgcHJvZ3Jlc3NcXGAgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cblxuYXVkaW8sXG5jYW52YXMsXG5wcm9ncmVzcyxcbnZpZGVvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMiAqL1xufVxuXG4vKipcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBcXGBhdWRpb1xcYCB3aXRob3V0IGNvbnRyb2xzLlxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cbiAqL1xuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qKlxuICogQWRkcmVzcyBcXGBbaGlkZGVuXVxcYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC5cbiAqIEhpZGUgdGhlIFxcYHRlbXBsYXRlXFxgIGVsZW1lbnQgaW4gSUUgOC85LzExLCBTYWZhcmksIGFuZCBGaXJlZm94IDwgMjIuXG4gKi9cblxuW2hpZGRlbl0sXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIExpbmtzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyoqXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5hOmFjdGl2ZSxcbmE6aG92ZXIge1xuICBvdXRsaW5lOiAwO1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4gKi9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xufVxuXG4vKipcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIFxcYGJvbGRlclxcYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4gKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKipcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cbiAqL1xuXG5kZm4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8qKlxuICogQWRkcmVzcyB2YXJpYWJsZSBcXGBoMVxcYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gXFxgc2VjdGlvblxcYCBhbmQgXFxgYXJ0aWNsZVxcYFxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuICovXG5cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7XG59XG5cbi8qKlxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cbiAqL1xuXG5tYXJrIHtcbiAgYmFja2dyb3VuZDogI2ZmMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8qKlxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGFmZmVjdGluZyBcXGBsaW5lLWhlaWdodFxcYCBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIFxcYGFcXGAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXG4gKi9cblxuaW1nIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4vKipcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxuICovXG5cbnN2Zzpub3QoOnJvb3QpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cbiAqL1xuXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuXG4vKipcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cbiAqL1xuXG5ociB7XG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qKlxuICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qKlxuICogQWRkcmVzcyBvZGQgXFxgZW1cXGAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEtub3duIGxpbWl0YXRpb246IGJ5IGRlZmF1bHQsIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFggYWxsb3cgdmVyeSBsaW1pdGVkXG4gKiBzdHlsaW5nIG9mIFxcYHNlbGVjdFxcYCwgdW5sZXNzIGEgXFxgYm9yZGVyXFxgIHByb3BlcnR5IGlzIHNldC5cbiAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cbiAqICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cbiAqIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuICovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbiAgbWFyZ2luOiAwOyAvKiAzICovXG59XG5cbi8qKlxuICogQWRkcmVzcyBcXGBvdmVyZmxvd1xcYCBzZXQgdG8gXFxgaGlkZGVuXFxgIGluIElFIDgvOS8xMC8xMS5cbiAqL1xuXG5idXR0b24ge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBcXGB0ZXh0LXRyYW5zZm9ybVxcYCBpbmhlcml0YW5jZSBmb3IgXFxgYnV0dG9uXFxgIGFuZCBcXGBzZWxlY3RcXGAuXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IFxcYHRleHQtdHJhbnNmb3JtXFxgIHZhbHVlcy5cbiAqIENvcnJlY3QgXFxgYnV0dG9uXFxgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxuICogQ29ycmVjdCBcXGBzZWxlY3RcXGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgXFxgYXVkaW9cXGBcbiAqICAgIGFuZCBcXGB2aWRlb1xcYCBjb250cm9scy5cbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBcXGBpbnB1dFxcYCB0eXBlcyBpbiBpT1MuXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxuICogICAgXFxgaW5wdXRcXGAgYW5kIG90aGVycy5cbiAqL1xuXG5idXR0b24sXG5odG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIC8qIDEgKi9cbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xuICBhcHBlYXJhbmNlOiBidXR0b247IC8qIEFkZCB0aGUgc3RhbmRhcmQgcHJvcGVydHkgJ2FwcGVhcmFuY2UnICovXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xufVxuXG4vKipcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXG4gKi9cblxuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKipcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cbiAqL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBcXGBsaW5lLWhlaWdodFxcYCBvbiBcXGBpbnB1dFxcYCB1c2luZyBcXGAhaW1wb3J0YW50XFxgIGluXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cbiAqL1xuXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8qKlxuICogSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cbiAqXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIFxcYGNvbnRlbnQtYm94XFxgIGluIElFIDgvOS8xMC5cbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXG4gKi9cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cbiAqIFxcYGZvbnQtc2l6ZVxcYCB2YWx1ZXMgb2YgdGhlIFxcYGlucHV0XFxgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcbiAqIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gXFxgZGVmYXVsdFxcYCB0byBcXGB0ZXh0XFxgLlxuICovXG5cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZHJlc3MgXFxgYXBwZWFyYW5jZVxcYCBzZXQgdG8gXFxgc2VhcmNoZmllbGRcXGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXG4gKiAyLiBBZGRyZXNzIFxcYGJveC1zaXppbmdcXGAgc2V0IHRvIFxcYGJvcmRlci1ib3hcXGAgaW4gU2FmYXJpIGFuZCBDaHJvbWVcbiAqICAgIChpbmNsdWRlIFxcYC1tb3pcXGAgdG8gZnV0dXJlLXByb29mKS5cbiAqL1xuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiBBZGQgdGhlIHN0YW5kYXJkIHByb3BlcnR5ICdhcHBlYXJhbmNlJyAqL1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAyICovXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4vKipcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxuICogU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xuICogcGFkZGluZyAoYW5kIFxcYHRleHRmaWVsZFxcYCBhcHBlYXJhbmNlKS5cbiAqL1xuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXG4gKi9cblxuZmllbGRzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICBtYXJnaW46IDAgMnB4O1xuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCBcXGBjb2xvclxcYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cbiAqIDIuIFJlbW92ZSBwYWRkaW5nIHNvIHBlb3BsZSBhcmVuJ3QgY2F1Z2h0IG91dCBpZiB0aGV5IHplcm8gb3V0IGZpZWxkc2V0cy5cbiAqL1xuXG5sZWdlbmQge1xuICBib3JkZXI6IDA7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkvMTAvMTEuXG4gKi9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiBEb24ndCBpbmhlcml0IHRoZSBcXGBmb250LXdlaWdodFxcYCAoYXBwbGllZCBieSBhIHJ1bGUgYWJvdmUpLlxuICogTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXG4gKi9cblxub3B0Z3JvdXAge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogVGFibGVzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cbiAqL1xuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0L25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkRBQTJEOztBQUUzRDs7OztFQUlFO0NBQ0Q7RUFDQyxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7K0VBQytFOztBQUUvRTs7Ozs7RUFLRTs7QUFFRjs7Ozs7Ozs7Ozs7OztFQWFFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOzs7O0VBSUUscUJBQXFCLEVBQUUsTUFBTTtFQUM3Qix3QkFBd0IsRUFBRSxNQUFNO0FBQ2xDOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLGFBQWE7QUFDZjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFOztBQUVGOztFQUVFLFVBQVU7QUFDWjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxpQ0FBaUM7RUFDakMsY0FBYztBQUNoQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7RUFLRTs7QUFFRjs7Ozs7RUFLRSxjQUFjLEVBQUUsTUFBTTtFQUN0QixhQUFhLEVBQUUsTUFBTTtFQUNyQixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7RUFLRTs7QUFFRjs7RUFFRSxvQkFBb0I7QUFDdEI7O0FBRUE7Ozs7OztFQU1FOztBQUVGOzs7O0VBSUUsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxrQkFBa0IsRUFBRSwyQ0FBMkM7RUFDL0QsZUFBZSxFQUFFLE1BQU07QUFDekI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7O0VBTUU7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7OztFQUlFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7OztFQUlFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxxQkFBcUIsRUFBRSwyQ0FBMkM7RUFDbEUsNEJBQTRCO0VBQzVCLCtCQUErQixFQUFFLE1BQU07RUFDdkMsdUJBQXVCO0FBQ3pCOztBQUVBOzs7O0VBSUU7O0FBRUY7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsU0FBUyxFQUFFLE1BQU07RUFDakIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4yIHwgTUlUIExpY2Vuc2UgfCBnaXQuaW8vbm9ybWFsaXplICovXFxuXFxuLyoqXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuICoge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYW55IEhUTUw1IGVsZW1lbnQgaW4gSUUgOC85LlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgZGV0YWlsc2Agb3IgYHN1bW1hcnlgIGluIElFIDEwLzExXFxuICogYW5kIEZpcmVmb3guXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBtYWluYCBpbiBJRSAxMS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWFpbixcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXFxuICogMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5wcm9ncmVzcyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC5cXG4gKiBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUgOC85LzExLCBTYWZhcmksIGFuZCBGaXJlZm94IDwgMjIuXFxuICovXFxuXFxuW2hpZGRlbl0sXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTGlua3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXFxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQ6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5ociB7XFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBvZGQgYGVtYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnByZSxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcXG4gKiBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXFxuICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxcbiAqICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgbWFyZ2luOiAwOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbmJ1dHRvbiB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LCBJRSA4LzkvMTAvMTEsIGFuZCBPcGVyYS5cXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxuICBhcHBlYXJhbmNlOiBidXR0b247IC8qIEFkZCB0aGUgc3RhbmRhcmQgcHJvcGVydHkgJ2FwcGVhcmFuY2UnICovXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuXFxuaW5wdXQge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyoqXFxuICogSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxcbiAqIEZpcmVmb3gncyBpbXBsZW1lbnRhdGlvbiBkb2Vzbid0IHJlc3BlY3QgYm94LXNpemluZywgcGFkZGluZywgb3Igd2lkdGguXFxuICpcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cXG4gKiBgZm9udC1zaXplYCB2YWx1ZXMgb2YgdGhlIGBpbnB1dGAsIGl0IGNhdXNlcyB0aGUgY3Vyc29yIHN0eWxlIG9mIHRoZVxcbiAqIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiBBZGQgdGhlIHN0YW5kYXJkIHByb3BlcnR5ICdhcHBlYXJhbmNlJyAqL1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cXG4gKiBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXFxuICogcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkvMTAvMTEuXFxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS8xMC8xMS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogRG9uJ3QgaW5oZXJpdCB0aGUgYGZvbnQtd2VpZ2h0YCAoYXBwbGllZCBieSBhIHJ1bGUgYWJvdmUpLlxcbiAqIE5PVEU6IHRoZSBkZWZhdWx0IGNhbm5vdCBzYWZlbHkgYmUgY2hhbmdlZCBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYLlxcbiAqL1xcblxcbm9wdGdyb3VwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBUYWJsZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXG4gKi9cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbnRkLFxcbnRoIHtcXG4gIHBhZGRpbmc6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi92YXJpYWJsZXMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbEAwOzEmZmFtaWx5PVJvYm90bzppdGFsQDA7MSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsIGJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1iZy1wcmltYXJ5KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tcGxheWZhaXItZm9udCk7XG59XG5cbmJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBTdHlsaW5nIHRoZSBtYWluIGNvbnRhaW5lciAqL1xuZGl2Lm1haW4tY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtaW4taGVpZ2h0OiA3NSU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctcHJpbWFyeSk7XG59XG5kaXYubWFpbi1jb250YWluZXIgaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiAwLjY3ZW07XG5cbn1cblxuLyogU3R5bGluZyB0aGUgbGVmdCBjb250YWluZXIgKi8gXG4ubGVmdC1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJnLWFjY2VudCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cbi5sZWZ0LWNvbnRhaW5lciBkaXYuaG9tZS1hY3Rpb25zLCBcbi5sZWZ0LWNvbnRhaW5lciBkaXYucHJvamVjdHN7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG4ubGVmdC1jb250YWluZXIgZGl2LmhvbWUtYWN0aW9ucyBhLFxuLmxlZnQtY29udGFpbmVyIGRpdi5wcm9qZWN0cyBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jbHItcHJpbWFyeSk7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjI1cmVtO1xufVxuLmxlZnQtY29udGFpbmVyIGRpdi5ob21lLWFjdGlvbnMgYTpob3Zlcixcbi5sZWZ0LWNvbnRhaW5lciBkaXYucHJvamVjdHMgYTpob3ZlcixcbmRpdi5wcm9qZWN0cyAucHJvamVjdHMtc2VjdGlvbnMgLnByb2plY3QtaXRlbTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYnRuLXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbmRpdi5ob21lLWFjdGlvbnMgZGl2LmNvbGxlY3Rpb25ze1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbmRpdi5ldmVudC1zZWN0aW9ucyxcbmRpdi5jb2xsZWN0aW9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbmRpdi5sZWZ0LWNvbnRhaW5lciBkaXYucHJvamVjdHN7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cbmRpdi5wcm9qZWN0cyAucHJvamVjdHMtc2VjdGlvbnMgLnByb2plY3QtaXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG5idXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy03MDApO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNsci1idG4pO1xufVxuZGl2LmxlZnQtY29udGFpbmVyIGJ1dHRvbi5jcmVhdGUtcHJvamVjdCxcbi5mb3JtLWNvbnRhaW5lciBidXR0b25bdHlwZT1cInN1Ym1pdFwiXXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYnRuLXByaW1hcnkpO1xuICAgIG1hcmdpbjogMCAwLjc1cmVtIDFyZW0gMC42N3JlbTtcbn1cbmRpdi5hY3Rpb24tYnV0dG9ucyBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJ0bi1zZWNvbmRhcnkpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1wcmltYXJ5KTtcbn1cbmRpdi5sZWZ0LWNvbnRhaW5lciBidXR0b24uY3JlYXRlLXByb2plY3Q6aG92ZXIsXG4uZm9ybS1jb250YWluZXIgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJ0bi1hY2NlbnQpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1wcmltYXJ5KTtcbn1cblxuLyogU3R5bGluZyB0aGUgcmlnaHQgY29udGFpbmVyICovIFxuZGl2LnJpZ2h0LWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmctc2Vjb25kYXJ5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5kaXYubWFpbi1jb250YWluZXIgLnJpZ2h0LWNvbnRhaW5lciBoMXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcbn1cbmRpdi5hY3Rpb24tYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmRpdi50YXNrLWxpc3Rze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cbmRpdi50YXNrLWxpc3RzIC50YXNre1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJnLXNlY29uZGFyeS14bCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNlY29uZGFyeSk7XG59XG4vKiBkaXYudGFzay1saXN0cyAudGFzazpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmctc2Vjb25kYXJ5KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctcHJpbWFyeSk7XG59ICovXG5cbi5kaXNwbGF5LW5vbmV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtJQUNJLFlBQVk7SUFDWiwrREFBK0Q7SUFDL0QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUEsK0JBQStCO0FBQy9CO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0I7O0FBRXRCOztBQUVBLCtCQUErQjtBQUMvQjtJQUNJLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBOzs7SUFHSSx3Q0FBd0M7SUFDeEMsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QiwwQkFBMEI7QUFDOUI7QUFDQTs7SUFFSSx3Q0FBd0M7SUFDeEMsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsaUNBQWlDO0FBQ3JDO0FBQ0E7O0lBRUksdUNBQXVDO0lBQ3ZDLGlDQUFpQztBQUNyQzs7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsNENBQTRDO0lBQzVDLG1DQUFtQztBQUN2QztBQUNBOzs7R0FHRzs7QUFFSDtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsQDA7MSZmYW1pbHk9Um9ib3RvOml0YWxAMDsxJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgJy4uL3N0eWxlc2hlZXQvdmFyaWFibGVzLmNzcyc7XFxuQGltcG9ydCAnLi4vc3R5bGVzaGVldC9mb3JtLmNzcyc7XFxuXFxuaHRtbCwgYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItYmctcHJpbWFyeSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wbGF5ZmFpci1mb250KTtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFN0eWxpbmcgdGhlIG1haW4gY29udGFpbmVyICovXFxuZGl2Lm1haW4tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWluLWhlaWdodDogNzUlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1wcmltYXJ5KTtcXG59XFxuZGl2Lm1haW4tY29udGFpbmVyIGgxe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogMC42N2VtO1xcblxcbn1cXG5cXG4vKiBTdHlsaW5nIHRoZSBsZWZ0IGNvbnRhaW5lciAqLyBcXG4ubGVmdC1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZy1hY2NlbnQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbi5sZWZ0LWNvbnRhaW5lciBkaXYuaG9tZS1hY3Rpb25zLCBcXG4ubGVmdC1jb250YWluZXIgZGl2LnByb2plY3Rze1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLmxlZnQtY29udGFpbmVyIGRpdi5ob21lLWFjdGlvbnMgYSxcXG4ubGVmdC1jb250YWluZXIgZGl2LnByb2plY3RzIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY2xyLXByaW1hcnkpO1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuMjVyZW07XFxufVxcbi5sZWZ0LWNvbnRhaW5lciBkaXYuaG9tZS1hY3Rpb25zIGE6aG92ZXIsXFxuLmxlZnQtY29udGFpbmVyIGRpdi5wcm9qZWN0cyBhOmhvdmVyLFxcbmRpdi5wcm9qZWN0cyAucHJvamVjdHMtc2VjdGlvbnMgLnByb2plY3QtaXRlbTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJ0bi1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXByaW1hcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG5kaXYuaG9tZS1hY3Rpb25zIGRpdi5jb2xsZWN0aW9uc3tcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG5kaXYuZXZlbnQtc2VjdGlvbnMsXFxuZGl2LmNvbGxlY3Rpb25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuZGl2LmxlZnQtY29udGFpbmVyIGRpdi5wcm9qZWN0c3tcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuZGl2LnByb2plY3RzIC5wcm9qZWN0cy1zZWN0aW9ucyAucHJvamVjdC1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTcwMCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNsci1idG4pO1xcbn1cXG5kaXYubGVmdC1jb250YWluZXIgYnV0dG9uLmNyZWF0ZS1wcm9qZWN0LFxcbi5mb3JtLWNvbnRhaW5lciBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl17XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1idG4tcHJpbWFyeSk7XFxuICAgIG1hcmdpbjogMCAwLjc1cmVtIDFyZW0gMC42N3JlbTtcXG59XFxuZGl2LmFjdGlvbi1idXR0b25zIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJ0bi1zZWNvbmRhcnkpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctcHJpbWFyeSk7XFxufVxcbmRpdi5sZWZ0LWNvbnRhaW5lciBidXR0b24uY3JlYXRlLXByb2plY3Q6aG92ZXIsXFxuLmZvcm0tY29udGFpbmVyIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJ0bi1hY2NlbnQpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctcHJpbWFyeSk7XFxufVxcblxcbi8qIFN0eWxpbmcgdGhlIHJpZ2h0IGNvbnRhaW5lciAqLyBcXG5kaXYucmlnaHQtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmctc2Vjb25kYXJ5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5kaXYubWFpbi1jb250YWluZXIgLnJpZ2h0LWNvbnRhaW5lciBoMXtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5kaXYuYWN0aW9uLWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuZGl2LnRhc2stbGlzdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5kaXYudGFzay1saXN0cyAudGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZy1zZWNvbmRhcnkteGwpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc2Vjb25kYXJ5KTtcXG59XFxuLyogZGl2LnRhc2stbGlzdHMgLnRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZy1zZWNvbmRhcnkpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctcHJpbWFyeSk7XFxufSAqL1xcblxcbi5kaXNwbGF5LW5vbmV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tZnMtMzAwOiAwLjdyZW07XG4gICAgLS1mcy00MDA6IDFyZW07XG4gICAgLS1mcy01MDA6IDEuM3JlbTtcbiAgICAtLWZzLTcwMDogMnJlbTtcbiAgICAtLWZ3LTMwMDogMzAwO1xuICAgIC0tZnctNDAwOiA0MDA7XG4gICAgLS1mdy03MDA6IDcwMDtcbiAgICAtLWZvbnQtY2xyLXByaW1hcnk6ICMwMDI5Mjc7XG4gICAgLS1mb250LWNsci1idG46ICMwMDI5Mjc7XG4gICAgLS1jbHItYmctYWNjZW50OiBoc2xhKDAsMCUsMTAwJSwuNSk7XG4gICAgLS1jbHItYmctc2Vjb25kYXJ5OiBoc2xhKDAsMCUsMTAwJSwuMSk7XG4gICAgLS1jbHItYmctc2Vjb25kYXJ5LXhsOiBoc2xhKDAsMCUsMTAwJSwuMyk7XG4gICAgLS1jbHItYmctcHJpbWFyeTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwjZDE2YmE1LCNjNzc3YjksI2JhODNjYSwjYWE4ZmQ4LCM5YTlhZTEsIzg4YTRlOCwjNzdhZWViLCM2OGI2ZWIsIzU2YmZlOCwjNGVjN2UyLCM1NGNkZDgsIzY1ZDNjYyk7XG4gICAgLS1jbHItYnRuLXByaW1hcnk6IHJnYmEoMCwwLDAsLjE1KTtcbiAgICAtLWNsci1idG4tYWNjZW50OiByZ2JhKDAsMCwwLC4zKTtcbiAgICAtLWNsci1idG4tc2Vjb25kYXJ5OiAjZmZmO1xuICAgIC0tY2xyLWJ0bi1mb2N1czogIzY0ZDNjYztcbiAgICAtLWNsci1idG4tY2hlY2tib3g6ICMxZmMxMWY7XG4gICAgLS1jbHItZm9ybS1iZzogcmdiYSgwLDAsMCwuMTUpO1xuICAgIC0tY2xyLWZvcm0tYWNjZW50OiByZ2JhKDAsMCwwLC4zKTtcbiAgICAtLWNsci1pbXBvcnRhbnQ6IHJnYmEoMjU1LDAsMCwuMzUpO1xuICAgIC0tc2hhZG93LXByaW1hcnk6IDAgMCAxMHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgIC0tc2hhZG93LXNlY29uZGFyeTogMCAwIDEwcHggcmdiYSgwLDAsMCwuMSk7XG4gICAgLS1wbGF5ZmFpci1mb250OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICAgIC0tcm9ib3RvLWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXQvdmFyaWFibGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMseUNBQXlDO0lBQ3pDLCtJQUErSTtJQUMvSSxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0MsMENBQTBDO0lBQzFDLG1DQUFtQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tZnMtMzAwOiAwLjdyZW07XFxuICAgIC0tZnMtNDAwOiAxcmVtO1xcbiAgICAtLWZzLTUwMDogMS4zcmVtO1xcbiAgICAtLWZzLTcwMDogMnJlbTtcXG4gICAgLS1mdy0zMDA6IDMwMDtcXG4gICAgLS1mdy00MDA6IDQwMDtcXG4gICAgLS1mdy03MDA6IDcwMDtcXG4gICAgLS1mb250LWNsci1wcmltYXJ5OiAjMDAyOTI3O1xcbiAgICAtLWZvbnQtY2xyLWJ0bjogIzAwMjkyNztcXG4gICAgLS1jbHItYmctYWNjZW50OiBoc2xhKDAsMCUsMTAwJSwuNSk7XFxuICAgIC0tY2xyLWJnLXNlY29uZGFyeTogaHNsYSgwLDAlLDEwMCUsLjEpO1xcbiAgICAtLWNsci1iZy1zZWNvbmRhcnkteGw6IGhzbGEoMCwwJSwxMDAlLC4zKTtcXG4gICAgLS1jbHItYmctcHJpbWFyeTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwjZDE2YmE1LCNjNzc3YjksI2JhODNjYSwjYWE4ZmQ4LCM5YTlhZTEsIzg4YTRlOCwjNzdhZWViLCM2OGI2ZWIsIzU2YmZlOCwjNGVjN2UyLCM1NGNkZDgsIzY1ZDNjYyk7XFxuICAgIC0tY2xyLWJ0bi1wcmltYXJ5OiByZ2JhKDAsMCwwLC4xNSk7XFxuICAgIC0tY2xyLWJ0bi1hY2NlbnQ6IHJnYmEoMCwwLDAsLjMpO1xcbiAgICAtLWNsci1idG4tc2Vjb25kYXJ5OiAjZmZmO1xcbiAgICAtLWNsci1idG4tZm9jdXM6ICM2NGQzY2M7XFxuICAgIC0tY2xyLWJ0bi1jaGVja2JveDogIzFmYzExZjtcXG4gICAgLS1jbHItZm9ybS1iZzogcmdiYSgwLDAsMCwuMTUpO1xcbiAgICAtLWNsci1mb3JtLWFjY2VudDogcmdiYSgwLDAsMCwuMyk7XFxuICAgIC0tY2xyLWltcG9ydGFudDogcmdiYSgyNTUsMCwwLC4zNSk7XFxuICAgIC0tc2hhZG93LXByaW1hcnk6IDAgMCAxMHB4IHJnYmEoMCwwLDAsLjIpO1xcbiAgICAtLXNoYWRvdy1zZWNvbmRhcnk6IDAgMCAxMHB4IHJnYmEoMCwwLDAsLjEpO1xcbiAgICAtLXBsYXlmYWlyLWZvbnQ6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XFxuICAgIC0tcm9ib3RvLWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IG1ha2VUb2RvSXRlbSwgbWFrZVByb2plY3RJdGVtIH0gZnJvbSAnLi90YXNrLmpzJztcbi8vIE1hbmFnZXMgZm9ybSBpbnRlcmFjdGlvbnMgZm9yIGNyZWF0aW5nL2VkaXRpbmcgdG8tZG9zIGFuZCBwcm9qZWN0cy5cbi8vIFZhbGlkYXRlcyB1c2VyIGlucHV0IGFuZCB0cmlnZ2VycyBhY3Rpb25zIGFjY29yZGluZ2x5LlxuXG4vLyB0ZW1wbGF0ZSBmb3IgZ2VuZXJhdGluZyBmb3Jtc1xuZnVuY3Rpb24gZ2VuZXJhdGVGb3JtVGVtcGxhdGUoKXtcbiAgICBjb25zdCBnZW5lcmF0ZVRvZG9Gb3JtID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2VuZXJhdGVGb3JtKFxuICAgICAgICAgICAgJ0NyZWF0ZSBOZXcgVG9kbycsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgeyBpZDogJ3RvZG8tbmFtZScsIGxhYmVsOiAnTmFtZScsIHR5cGU6ICd0ZXh0JyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICd0b2RvLWRhdGUnLCBsYWJlbDogJ0RhdGUnLCB0eXBlOiAnZGF0ZScgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAndG9kby1wcmlvcml0eScsIGxhYmVsOiAnSW1wb3J0YW50PycsIHR5cGU6ICdjaGVja2JveCcgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdTdWJtaXQnLFxuICAgICAgICAgICAgJ3RvZG8nXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdlbmVyYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZUZvcm0oXG4gICAgICAgICAgICAnQ3JlYXRlIE5ldyBQcm9qZWN0JyxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7IGlkOiAncHJvamVjdC1uYW1lJywgbGFiZWw6ICdQcm9qZWN0IE5hbWUnLCB0eXBlOiAndGV4dCcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAncHJvamVjdC1kZXNjcmlwdGlvbicsIGxhYmVsOiAnUHJvamVjdCBEZXNjcmlwdGlvbicsIHR5cGU6ICd0ZXh0YXJlYScgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdTdWJtaXQnLFxuICAgICAgICAgICAgJ3Byb2plY3QnXG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB7IGdlbmVyYXRlVG9kb0Zvcm0sIGdlbmVyYXRlUHJvamVjdEZvcm0gfTtcbn1cbi8vIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgZm9ybSBlbGVtZW50IGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzXG5mdW5jdGlvbiBnZW5lcmF0ZUZvcm0odGl0bGUsIGZpZWxkcywgc3VibWl0QnV0dG9uVGV4dCwgZm9ybVR5cGUpIHtcbiAgICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld0Zvcm0uc2V0QXR0cmlidXRlKCdkYXRhLWZvcm0nLCAnJyk7XG4gICAgbmV3Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgYG5ldy0ke2Zvcm1UeXBlfWApO1xuICAgIG5ld0Zvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gZm9ybSB0aXRsZVxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZm9ybVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS10aXRsZScpO1xuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgLy8gZm9ybSBpbnB1dCBmaWVsZHNcbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgZmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmllbGREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dC1maWVsZHMnKTtcbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIGZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG5cbiAgICAgICAgY29uc3QgZmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGZpZWxkTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBmaWVsZC5pZCk7XG4gICAgICAgIGZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBmaWVsZC5sYWJlbDtcblxuICAgICAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChmaWVsZC50eXBlID09PSAndGV4dGFyZWEnID8gJ3RleHRhcmVhJyA6ICdpbnB1dCcpO1xuICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBmaWVsZC5pZCk7XG5cbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgZmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgZmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ21tL2RkL3l5eXknKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmllbGREaXYuYXBwZW5kQ2hpbGQoZmllbGRMYWJlbCk7XG4gICAgICAgIGZpZWxkRGl2LmFwcGVuZENoaWxkKGZpZWxkSW5wdXQpO1xuICAgICAgICBuZXdGb3JtLmFwcGVuZENoaWxkKGZpZWxkRGl2KTtcbiAgICB9KTtcblxuICAgIC8vIGZvcm0gc3VibWlzc2lvblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1idG4tc3VibWl0JywgJycpO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IHN1Ym1pdEJ1dHRvblRleHQ7XG5cbiAgICBjb25zdCBidXR0b25DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbkNsb3NlLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBidXR0b25DbG9zZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J0bi1jbG9zZScpO1xuICAgIGJ1dHRvbkNsb3NlLnNldEF0dHJpYnV0ZSgnZGF0YS1idG4tY2xvc2UnLCAnJyk7XG4gICAgYnV0dG9uQ2xvc2UuaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTEyIDEzLjRsLTQuOSA0LjlxLS4yNzUuMjc1LS43LjI3NXEtLjQyNSAwLS43LS4yNzVxLS4yNzUtLjI3NS0uMjc1LS43cTAtLjQyNS4yNzUtLjdsNC45LTQuOWwtNC45LTQuOXEtLjI3NS0uMjc1LS4yNzUtLjdxMC0uNDI1LjI3NS0uN3EuMjc1LS4yNzUuNy0uMjc1cS40MjUgMCAuNy4yNzVsNC45IDQuOWw0LjktNC45cS4yNzUtLjI3NS43LS4yNzVxLjQyNSAwIC43LjI3NXEuMjc1LjI3NS4yNzUuN3EwIC40MjUtLjI3NS43TDEzLjQgMTJsNC45IDQuOXEuMjc1LjI3NS4yNzUuN3EwIC40MjUtLjI3NS43cS0uMjc1LjI3NS0uNy4yNzVxLS40MjUgMC0uNy0uMjc1WlwiPjwvcGF0aD48L3N2Zz5cbiAgICBgO1xuICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICBuZXdGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkNsb3NlKTtcblxuICAgIHJldHVybiBuZXdGb3JtO1xufVxuXG4vLyBmdW5jdGlvbiB0byBwZXJmb3JtIGFjdGlvbnMgYmFzZWQgb24gdGhlIGZvcm0gdGhhdCB3YXMgc3VibWl0dGVkXG5mdW5jdGlvbiBwZXJmb3JtQWN0aW9uKGZvcm1FbGVtZW50KSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudCk7XG5cbiAgICBjb25zdCB4QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnRuLWNsb3NlXScpO1xuICAgIHhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5yZW1vdmVDaGlsZChmb3JtRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICAvLyBsaXN0ZW4gZm9yIGZvcm0gc3VibWlzc2lvblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJ0bi1zdWJtaXRdJyk7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZm9ybV0nKTtcbiAgICAgICAgaWYgKGZvcm0uaWQgPT09ICduZXctdG9kbycpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbmFtZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kYXRlJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpLmNoZWNrZWQ7XG5cbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHVzZXIgaW5wdXRcbiAgICAgICAgICAgIGlmICh0b2RvTmFtZSA9PT0gJycgfHwgdG9kb0RhdGUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBmaWxsIG91dCBhbGwgZmllbGRzLicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgdG9kb1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyh0b2RvTmFtZSwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VG9kb0l0ZW0gPSBtYWtlVG9kb0l0ZW0obmV3VG9kbyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrLWxpc3RdJyk7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobmV3VG9kb0l0ZW0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZGVzY3JpcHRpb24nKS52YWx1ZTtcblxuICAgICAgICAgICAgLy8gdmFsaWRhdGUgdXNlciBpbnB1dFxuICAgICAgICAgICAgaWYgKHByb2plY3ROYW1lID09PSAnJyB8fCBwcm9qZWN0RGVzY3JpcHRpb24gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBmaWxsIG91dCBhbGwgZmllbGRzLicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgcHJvamVjdFxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0SXRlbSA9IG1ha2VQcm9qZWN0SXRlbShuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3QtbGlzdF0nKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLnJlbW92ZUNoaWxkKGZvcm1FbGVtZW50KTtcbiAgICB9KTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gaGFuZGxlIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIGZvcm1cbmZ1bmN0aW9uIGV2ZW50RnVuY3Rpb25zKCkge1xuICAgIGNvbnN0IHByb2plY3RGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGdlbmVyYXRlRm9ybVRlbXBsYXRlKCkuZ2VuZXJhdGVQcm9qZWN0Rm9ybSgpO1xuICAgICAgICBwZXJmb3JtQWN0aW9uKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9GdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgLy8gc2hvdyB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgdG9kb1xuICAgICAgICBjb25zdCBuZXdGb3JtID0gZ2VuZXJhdGVGb3JtVGVtcGxhdGUoKS5nZW5lcmF0ZVRvZG9Gb3JtKCk7XG4gICAgICAgIHBlcmZvcm1BY3Rpb24obmV3Rm9ybSk7XG4gICAgfVxuICAgIHJldHVybiB7IHByb2plY3RGdW5jdGlvbiwgdG9kb0Z1bmN0aW9uIH07XG59XG5cbmV4cG9ydCBjb25zdCB7IHByb2plY3RGdW5jdGlvbiwgdG9kb0Z1bmN0aW9uIH0gPSBldmVudEZ1bmN0aW9ucygpO1xuXG4iLCIvLyBEZWZpbmVzIGEgUHJvamVjdCBjbGFzcyB0byByZXByZXNlbnQgcHJvamVjdHMgb3Igc2VwYXJhdGUgbGlzdHMgb2YgdG8tZG9zLlxuLy8gTWFuYWdlcyB0aGUgY29sbGVjdGlvbiBvZiB0by1kb3Mgd2l0aGluIGEgcHJvamVjdC5cbi8vIEluY2x1ZGVzIG1ldGhvZHMgZm9yIGFkZGluZywgdXBkYXRpbmcsIGFuZCBkZWxldGluZyB0by1kb3Mgd2l0aGluIHRoZSBwcm9qZWN0LlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICBcbiAgICB9XG4gICAgYWRkVG9kbyAodG9kbyl7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKVxuICAgIH1cbiAgICByZW1vdmVUb2RvICh0b2RvKXtcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UodGhpcy50b2Rvcy5pbmRleE9mKHRvZG8pLCAxKVxuICAgIH1cbiAgICBlZGl0VGl0bGUodGl0bGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB9XG4gICAgZWRpdERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKXtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgfVxuICAgIGdldFRpdGxlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlXG4gICAgfVxuICAgIGdldFRvZG9zKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zXG4gICAgfVxuICAgIGdldERlc2NyaXB0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgfVxufSIsIi8vIEhhbmRsZXMgbG9jYWwgc3RvcmFnZSBpbnRlcmFjdGlvbnMgdG8gcGVyc2lzdCBwcm9qZWN0cyBhbmQgdG8tZG9zLlxuLy8gUHJvdmlkZXMgZnVuY3Rpb25zIHRvIHNhdmUgYW5kIHJldHJpZXZlIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlLlxuXG5mdW5jdGlvbiBzYXZlUHJvamVjdHMocHJvamVjdHMpe1xuICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbn1cbmV4cG9ydCB7c2F2ZVByb2plY3RzfSIsIlxuZnVuY3Rpb24gbWFrZVRvZG9JdGVtKHRvZG9PYmope1xuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICB0b2RvRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrJywgJycpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG9PYmouZ2V0VGl0bGUoKTtcblxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gdG9kb09iai5nZXREdWVEYXRlKCk7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gKHRvZG9PYmouZ2V0UHJpb3JpdHkoKSA/ICdJbXBvcnRhbnQnIDogJ05vdCBJbXBvcnRhbnQnKTtcblxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG5cbiAgICByZXR1cm4gdG9kb0RpdjtcblxufVxuXG5mdW5jdGlvbiBtYWtlUHJvamVjdEl0ZW0ocHJvamVjdE9iail7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pdGVtJywgJycpO1xuXG4gICAgY29uc3QgbWluaUFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1pbmlBcnJvdy5pbm5lckhUTUwgPSBgXG4gICAgPHN2ZyB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTEuNyAxNS4zcS0uNDc1LjQ3NS0xLjA4Ny4yMTJRMTAgMTUuMjUgMTAgMTQuNTc1di01LjE1cTAtLjY3NS42MTMtLjkzN3EuNjEyLS4yNjMgMS4wODcuMjEybDIuNiAyLjZxLjE1LjE1LjIyNS4zMjVxLjA3NS4xNzUuMDc1LjM3NXQtLjA3NS4zNzVxLS4wNzUuMTc1LS4yMjUuMzI1WlwiPjwvcGF0aD48L3N2Zz5cbiAgICBgXG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE9iai5nZXRUaXRsZSgpO1xuXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChtaW5pQXJyb3cpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBcbiAgICByZXR1cm4gcHJvamVjdERpdjtcbn1cbmV4cG9ydCB7IG1ha2VUb2RvSXRlbSwgbWFrZVByb2plY3RJdGVtIH07IiwiLy8gRGVmaW5lcyBhIFRvZG8gY2xhc3MgdG8gcmVwcmVzZW50IGluZGl2aWR1YWwgdG8tZG8gaXRlbXMuXG4vLyBJbmNsdWRlcyBwcm9wZXJ0aWVzIGxpa2UgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgYW5kIGNoZWNrbGlzdC5cbi8vIEFsc28gaW5jbHVkZXMgbWV0aG9kcyB0byBlZGl0IGFueSBvZiB0aGVzZSBwcm9wZXJ0aWVzLlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZWRpdFRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICBlZGl0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgfVxuXG4gICAgZWRpdFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXRQcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfVxufVxuXG5cbiIsIi8vIE1hbmFnZXMgdGhlIHVzZXIgaW50ZXJmYWNlLCBpbmNsdWRpbmcgRE9NIG1hbmlwdWxhdGlvbi5cbi8vIEhhbmRsZXMgZHluYW1pYyByZW5kZXJpbmcgb2YgcHJvamVjdHMsIHRvLWRvcywgYW5kIGZvcm1zLlxuLy8gTGlzdGVucyBmb3IgdXNlciBpbnRlcmFjdGlvbnMgKGUuZy4sIGJ1dHRvbiBjbGlja3MpIGFuZCB0cmlnZ2VycyBjb3JyZXNwb25kaW5nIGFjdGlvbnMuXG5cbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSB1c2VyIGFjdGlvbnMgYW5kIG5hdmlnYXRlIHRoZSBwYWdlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBY3Rpb24oKSB7XG4gICAgLy8gYWRkcyBldmVudCBsaXN0ZW5lciB0byB0aGUgZGl2cyBpbiB0aGUgaG9tZS1hY3Rpb25zIGNvbnRhaW5lclxuICAgIGNvbnN0IG1haW5BY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWN0aW9uc10nKTtcbiAgICBtYWluQWN0aW9ucy5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgIGFjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbkNsaWNrZWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ3AnKS5pbm5lckhUTUw7XG4gICAgICAgICAgICBuYXZpZ2F0ZVBhZ2UoYWN0aW9uQ2xpY2tlZCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIHNjcmVlbiBiYXNlZCBvbiB1c2VyIGFjdGlvblxuZnVuY3Rpb24gbmF2aWdhdGVQYWdlKGNsaWNrZWQpe1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGl0bGVdJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gY2xpY2tlZDtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCBjbGlja2VkKTtcbiAgICBjb25zdCBzY3JlZW4gPSByZW5kZXJTY3JlZW4oKTtcblxuICAgIHN3aXRjaCAoY2xpY2tlZCkge1xuICAgICAgICBjYXNlICdHZW5lcmFsJzpcbiAgICAgICAgICAgIHNjcmVlbi5yZW5kZXJHZW5lcmFsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVG9kYXknOlxuICAgICAgICAgICAgc2NyZWVuLnJlbmRlclRvZGF5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVXBjb21pbmcnOlxuICAgICAgICAgICAgc2NyZWVuLnJlbmRlclVwY29taW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQ29tcGxldGVkJzpcbiAgICAgICAgICAgIHNjcmVlbi5yZW5kZXJDb21wbGV0ZWQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdUcmFzaCc6XG4gICAgICAgICAgICBzY3JlZW4ucmVuZGVyVHJhc2goKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVW5oYW5kbGVkIGFjdGlvbjogJHtjbGlja2VkfWApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byByZW5kZXIgZGlmZmVyZW50IHNjcmVlbnNcbmZ1bmN0aW9uIHJlbmRlclNjcmVlbigpe1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yaWdodC1jb250YWluZXJdJyk7XG4gICAgY29uc3QgcFRhZyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtZGVzY3JpcHRpb25dJyk7XG4gICAgY29uc3QgZ2V0QWN0aW9uQnV0dG9ucyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtYWN0aW9uLWJ1dHRvbnNdJyk7XG5cbiAgICBjb25zdCByZW5kZXJHZW5lcmFsID0gKCkgPT4ge1xuICAgICAgICBwVGFnLmlubmVySFRNTCA9ICdBIGdlbmVyYWwgbGlzdCBvZiB0YXNrcyc7XG4gICAgICAgIGlmICghZ2V0QWN0aW9uQnV0dG9ucykge1xuICAgICAgICAgICAgLy8gbmVlZCB0byBtYWtlIGEgbmV3IGRpdiBhbmQgZ2VuZXJhdGUgdGhlIGJ1dHRvbnMsIHRoZW4gYXBwZW5kIGl0IGJlZm9yZSB0YXNrLWxpc3QgaW4gbWFpbi1jb250YWluZXIgZGl2XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhY3Rpb25CdXR0b25zLnNldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24tYnV0dG9ucycsICcnKTtcbiAgICAgICAgICAgIGFjdGlvbkJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYWN0aW9uLWJ1dHRvbnMnKTtcblxuICAgICAgICAgICAgLy8gbWFrZSB0aGUgYnV0dG9uc1xuICAgICAgICAgICAgY29uc3QgYWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBhbGxCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG4gICAgICAgICAgICBhbGxCdXR0b24udGV4dENvbnRlbnQgPSAnQWxsJztcblxuICAgICAgICAgICAgLy8gbWFrZSBjcmVhdGUgdG8gZG8gYnV0dG9uXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtdGFza3MnKTtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOCAxMi45OThoLTV2NWExIDEgMCAwIDEtMiAwdi01SDZhMSAxIDAgMCAxIDAtMmg1di01YTEgMSAwIDAgMSAyIDB2NWg1YTEgMSAwIDAgMSAwIDJ6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBUb2RvXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAvLyBhcHBlbmQgdG8gdGhlIGFjdGlvbkJ1dHRvbnMgZGl2XG4gICAgICAgICAgICBhY3Rpb25CdXR0b25zLmFwcGVuZENoaWxkKGFsbEJ1dHRvbik7XG4gICAgICAgICAgICBhY3Rpb25CdXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbik7XG5cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0byB0aGUgbWFpbiBjb250YWluZXJcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuaW5zZXJ0QmVmb3JlKGFjdGlvbkJ1dHRvbnMsIG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtdGFzay1saXN0XScpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW5kZXIgYWxsIHRhc2tzIHRvIGJlIGRvbmVcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVuZGVyVG9kYXkgPSAoKSA9PntcbiAgICAgICAgcFRhZy5pbm5lckhUTUwgPSAnQSBsaXN0IG9mIHRhc2tzIGZvciB0b2RheSc7XG4gICAgICAgIGlmIChnZXRBY3Rpb25CdXR0b25zKXtcbiAgICAgICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoZ2V0QWN0aW9uQnV0dG9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAvLyByZW5kZXIgdGFzayB0byBiZSBkb25lIHRvZGF5XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlclVwY29taW5nID0gKCkgPT57XG4gICAgICAgIHBUYWcuaW5uZXJIVE1MID0gJ0EgbGlzdCBvZiB0YXNrcyBmb3IgdGhlIGZ1dHVyZSc7XG4gICAgICAgIC8vICA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtYWN0aW9uLWJ1dHRvbnNdJyk7XG4gICAgICAgIGlmIChnZXRBY3Rpb25CdXR0b25zKXtcbiAgICAgICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoZ2V0QWN0aW9uQnV0dG9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVuZGVyIHRhc2sgdG8gYmUgZG9uZSBpbiB0aGUgZnV0dXJlXG4gICAgfVxuICAgIGNvbnN0IHJlbmRlckNvbXBsZXRlZCA9ICgpID0+e1xuICAgICAgICBwVGFnLmlubmVySFRNTCA9ICdBIGxpc3Qgb2YgY29tcGxldGVkIHRhc2tzJztcbiAgICAgICAgaWYgKGdldEFjdGlvbkJ1dHRvbnMpe1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChnZXRBY3Rpb25CdXR0b25zKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZW5kZXIgdGFzayBkb25lXG4gICAgfVxuICAgIGNvbnN0IHJlbmRlclRyYXNoID0gKCkgPT57XG4gICAgICAgIHBUYWcuaW5uZXJIVE1MID0gJ0EgbGlzdCBvZiBkZWxldGVkIHRhc2tzJztcbiAgICAgICBpZiAoZ2V0QWN0aW9uQnV0dG9ucyl7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKGdldEFjdGlvbkJ1dHRvbnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbmRlciB0YXNrIGRlbGV0ZWRcbiAgICB9XG5cbiAgICByZXR1cm4ge3JlbmRlckdlbmVyYWwsIHJlbmRlclRvZGF5LCByZW5kZXJVcGNvbWluZywgcmVuZGVyQ29tcGxldGVkLCByZW5kZXJUcmFzaH1cbn1cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBBY3RzIGFzIHRoZSBtYWluIGFwcGxpY2F0aW9uIG1vZHVsZS5cbi8vIENvb3JkaW5hdGVzIGludGVyYWN0aW9ucyBiZXR3ZWVuIGRpZmZlcmVudCBwYXJ0cyBvZiB0aGUgYXBwbGljYXRpb24uXG4vLyBJbml0aWFsaXplcyBldmVudCBsaXN0ZW5lcnMgYW5kIHNldHMgdXAgdGhlIG92ZXJhbGwgYXBwbGljYXRpb24gc3RydWN0dXJlLlxuXG5pbXBvcnQgbm9ybWFsaXplIGZyb20gJy4uL3N0eWxlc2hlZXQvbm9ybWFsaXplLmNzcydcbmltcG9ydCBzdHlsZSBmcm9tICAnLi4vc3R5bGVzaGVldC9zdHlsZS5jc3MnXG5pbXBvcnQgZ2V0QWN0aW9uIGZyb20gJy4vdWkuanMnO1xuaW1wb3J0IHsgcHJvamVjdEZ1bmN0aW9uLCB0b2RvRnVuY3Rpb24gfSBmcm9tICcuL2Zvcm0uanMnO1xuXG4vLyBGdW5jdGlvbiB0byBpbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuLy8gZnVuY3Rpb24gaW5pdEFwcCgpIHtcbi8vICAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY3JlYXRlLXByb2plY3QtYnRuXScpO1xuLy8gICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jcmVhdGUtdG9kb10nKTtcbi8vICAgICAvLyBuZWVkIHRvIGFkZCBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgcHJvamVjdCBhbmQgdG9kbyB3aGVuIHRoZSBidXR0b25zIGFyZSBjbGlja2VkXG4vLyAgICAgY3JlYXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RGdW5jdGlvbik7XG4vLyAgICAgY3JlYXRlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZG9GdW5jdGlvbik7XG4vLyB9XG4vLyBpbml0QXBwKCk7XG4vLyBnZXRBY3Rpb24oKTtcblxuaW1wb3J0IHtzYXZlUHJvamVjdHN9IGZyb20gJy4vc3RvcmFnZS5qcydcbnNhdmVQcm9qZWN0cyhbMSwgMiwgM10pO1xuY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLnByb2plY3RzKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==