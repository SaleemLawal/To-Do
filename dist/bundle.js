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
    width: 15%;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: var(--shadow-primary);
    display: flex;
    flex-direction: column;
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
    align-items: baseline;
    gap: 0.5rem;
}
.form-container input{
    border: 1px solid var(--clr-form-accent);
    border-radius: 0.5rem;
    box-shadow: var(--shadow-secondary);
    padding: 0.2rem;
    outline: none;
    font-weight: var(--fw-500);
    color: var(--font-clr-primary);
}
.form-container input:focus{
    border: 1px solid var(--clr-form-accent);
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


`, "",{"version":3,"sources":["webpack://./src/stylesheet/form.css"],"names":[],"mappings":"AAGA;IACI,2BAA2B;IAC3B,6BAA6B;IAC7B,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,QAAQ;IACR,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,sBAAsB;IACtB,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,WAAW;AACf;AACA;IACI,wCAAwC;IACxC,qBAAqB;IACrB,mCAAmC;IACnC,eAAe;IACf,aAAa;IACb,0BAA0B;IAC1B,8BAA8B;AAClC;AACA;IACI,wCAAwC;IACxC,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,YAAY;IACZ,6BAA6B;IAC7B,8BAA8B;IAC9B,eAAe;AACnB","sourcesContent":["@import './variables.css';\n\n\n.modal{\n    backdrop-filter: blur(2rem);\n    background-color: transparent;\n    align-items: center;\n    display: flex;\n    height: 100%;\n    inset: 0;\n    justify-content: center;\n    position: absolute;\n    width: 100%;\n    z-index: 100;\n}\n\n.form-container {\n    width: 15%;\n    background-color: #fff;\n    border-radius: 1rem;\n    box-shadow: var(--shadow-primary);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1.5rem;\n    position: relative;\n}\n\n.form-container .form-title{\n    font-size: 1.5rem;\n    font-weight: var(--fw-700);\n    color: var(--font-clr-primary);\n}\n\n.form-container .input-fields{\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n.form-container .priority{\n    display: flex;\n    align-items: baseline;\n    gap: 0.5rem;\n}\n.form-container input{\n    border: 1px solid var(--clr-form-accent);\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow-secondary);\n    padding: 0.2rem;\n    outline: none;\n    font-weight: var(--fw-500);\n    color: var(--font-clr-primary);\n}\n.form-container input:focus{\n    border: 1px solid var(--clr-form-accent);\n    box-shadow: var(--shadow-primary);\n}\n\n.form-container .btn-close{\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    border: none;\n    background-color: transparent;\n    color: var(--font-clr-primary);\n    cursor: pointer;\n}\n\n\n"],"sourceRoot":""}]);
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
    align-items: flex-start;
    font-weight: var(--fw-700);
    justify-content: center;
    border: none;
    color: var(--font-clr-btn);
    padding: 0.15rem 0.5rem;
    border-radius: 0.75rem
}
div.left-container button.create-project{
    background-color: var(--clr-btn-primary);
    margin: 0 0.75rem 1rem 0.67rem;
}
div.left-container button.create-project:hover,
div.action-buttons button:hover{
    background-color: var(--clr-btn-focus);
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
div.task-lists .task:hover{
    background-color: var(--clr-bg-secondary);
    box-shadow: var(--shadow-primary);
}

.display-none{
    display: none;
}


`, "",{"version":3,"sources":["webpack://./src/stylesheet/style.css"],"names":[],"mappings":"AAIA;IACI,YAAY;IACZ,+DAA+D;IAC/D,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,+BAA+B;AAC/B;IACI,6BAA6B;IAC7B,qBAAqB;IACrB,UAAU;IACV,eAAe;IACf,aAAa;IACb,gCAAgC;IAChC,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,kBAAkB;;AAEtB;;AAEA,+BAA+B;AAC/B;IACI,sCAAsC;IACtC,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;;IAEI,iBAAiB;AACrB;AACA;;IAEI,qBAAqB;IACrB,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;AACA;;;IAGI,wCAAwC;IACxC,iCAAiC;IACjC,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,0BAA0B;IAC1B,uBAAuB;IACvB,YAAY;IACZ,0BAA0B;IAC1B,uBAAuB;IACvB;AACJ;AACA;IACI,wCAAwC;IACxC,8BAA8B;AAClC;AACA;;IAEI,sCAAsC;AAC1C;;AAEA,gCAAgC;AAChC;IACI,yCAAyC;IACzC,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,SAAS;AACb;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;IAChB,qBAAqB;IACrB,4CAA4C;IAC5C,mCAAmC;AACvC;AACA;IACI,yCAAyC;IACzC,iCAAiC;AACrC;;AAEA;IACI,aAAa;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Roboto:ital@0;1&display=swap');\n@import '../stylesheet/variables.css';\n@import '../stylesheet/form.css';\n\nhtml, body{\n    height: 100%;\n    background: var(--clr-bg-primary) no-repeat center center fixed;\n    font-family: var(--playfair-font);\n}\n\nbody{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Styling the main container */\ndiv.main-container {\n    border: 1px solid transparent;\n    border-radius: 1.5rem;\n    width: 60%;\n    min-height: 75%;\n    display: grid;\n    grid-template-columns: 0.5fr 2fr;\n    overflow: auto;\n}\ndiv.main-container h1{\n    text-align: center;\n    margin: 0;\n    margin-top: 0.67em;\n\n}\n\n/* Styling the left container */ \n.left-container{\n    background-color: var(--clr-bg-accent);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n.left-container div.home-actions, \n.left-container div.projects{\n    margin-left: 1rem;\n}\n.left-container div.home-actions a,\n.left-container div.projects a{\n    text-decoration: none;\n    color: var(--font-clr-primary);\n    margin-left: 0.5rem;\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n}\n.left-container div.home-actions a:hover,\n.left-container div.projects a:hover,\ndiv.projects .projects-sections .project-item:hover{\n    background-color: var(--clr-btn-primary);\n    box-shadow: var(--shadow-primary);\n    border-radius: 0.75rem;\n    width: 90%;\n}\n\ndiv.home-actions div.collections{\n    margin-top: 1.5rem;\n}\ndiv.event-sections,\ndiv.collections{\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\ndiv.left-container div.projects{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\ndiv.projects .projects-sections .project-item{\n    display: flex;\n    align-items: flex-start;\n}\n\nbutton{\n    display: flex;\n    align-items: flex-start;\n    font-weight: var(--fw-700);\n    justify-content: center;\n    border: none;\n    color: var(--font-clr-btn);\n    padding: 0.15rem 0.5rem;\n    border-radius: 0.75rem\n}\ndiv.left-container button.create-project{\n    background-color: var(--clr-btn-primary);\n    margin: 0 0.75rem 1rem 0.67rem;\n}\ndiv.left-container button.create-project:hover,\ndiv.action-buttons button:hover{\n    background-color: var(--clr-btn-focus);\n}\n\n/* Styling the right container */ \ndiv.right-container{\n    background-color: var(--clr-bg-secondary);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n}\ndiv.main-container .right-container h1{\n    text-align: left;\n    margin: 0;\n}\ndiv.action-buttons{\n    display: flex;\n    justify-content: space-between;\n}\ndiv.task-lists{\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\ndiv.task-lists .task{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0.75rem;\n    border-radius: 0.5rem;\n    background-color: var(--clr-bg-secondary-xl);\n    box-shadow: var(--shadow-secondary);\n}\ndiv.task-lists .task:hover{\n    background-color: var(--clr-bg-secondary);\n    box-shadow: var(--shadow-primary);\n}\n\n.display-none{\n    display: none;\n}\n\n\n"],"sourceRoot":""}]);
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
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   createNewTodo: () => (/* binding */ createNewTodo)
/* harmony export */ });
// Manages form interactions for creating/editing to-dos and projects.
// Validates user input and triggers actions accordingly.
function GenerateForm(){
    // form creation 
    const newForm = document.createElement('form');
    newForm.setAttribute('id', 'new-form');
    newForm.setAttribute('class', 'form-container');

    // form title
    const formTitle = document.createElement('h2');
    formTitle.setAttribute('class', 'form-title');
    formTitle.textContent = 'Create New Todo';

    // Name Div
    const nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'input-fields');
    // name
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name';

    const inputName = document.createElement('input');
    inputName.setAttribute('id', 'todo-name');
    
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(inputName);

    // date
    const dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'input-fields');

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Date';

    const inputDate = document.createElement('input');
    inputDate.setAttribute('id', 'todo-date');
    inputDate.setAttribute('type', 'date');
    inputDate.setAttribute('placeholder', 'mm/dd/yyyy');

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(inputDate);

    // priority
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priority');

    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Important?';

    const inputPriority = document.createElement('input');
    inputPriority.setAttribute('type', 'checkbox');
    inputPriority.setAttribute('id', 'todo-priority');


    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(inputPriority);

    // form submission
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('data-btn-submit', '');
    submitButton.textContent = 'Submit';

    const buttonClose = document.createElement('button');
    buttonClose.setAttribute('type', 'button');
    buttonClose.setAttribute('class', 'btn-close');
    buttonClose.setAttribute('data-btn-close', '');
    buttonClose.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z"></path></svg>
    `

    // append all elements to the form
    newForm.appendChild(formTitle);
    newForm.appendChild(nameDiv);
    newForm.appendChild(dateDiv);
    newForm.appendChild(priorityDiv);
    newForm.appendChild(submitButton);
    newForm.appendChild(buttonClose);

    return newForm;
}

function GenerateProject(){
    const newProject = document.createElement('form');
    newProject.setAttribute('id', 'new-project');
    newProject.setAttribute('class', 'form-container');

    // form title
    const formTitle = document.createElement('h2');
    formTitle.setAttribute('class', 'form-title');
    formTitle.textContent = 'Create New Project';

    // form input fields
    const nameDiv = document.createElement('div');
    inputFields.setAttribute('class', 'input-fields');
    // name
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Project Name';

    const inputName = document.createElement('input');
    inputName.setAttribute('id', 'project-name');

    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(inputName);

    // project description
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'input-fields');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'Project Description';

    const inputDescription = document.createElement('textarea');
    inputDescription.setAttribute('id', 'project-description');

    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(inputDescription);

    // form submission
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('data-btn-submit', '');
    submitButton.textContent = 'Submit';

    const buttonClose = document.createElement('button');
    buttonClose.setAttribute('type', 'button');
    buttonClose.setAttribute('class', 'btn-close');
    buttonClose.setAttribute('data-btn-close', '');
    buttonClose.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z"></path></svg>
    `
    // append all elements to the form
    newProject.appendChild(formTitle);
    newProject.appendChild(nameDiv);
    newProject.appendChild(descriptionDiv);
    newProject.appendChild(submitButton);
    newProject.appendChild(buttonClose);

    return newProject;

}

function eventFunctions() {
    const createNewProject = () => {
        const newProject = GenerateProject();
        const modal = document.querySelector('.modal');
        modal.classList.remove('display-none');
        document.querySelector('.modal').appendChild(newProject);

        const xButton = document.querySelector('[data-btn-close]');
        xButton.addEventListener('click', () => {
            modal.classList.add('display-none');
            document.querySelector('.modal').removeChild(newForm);
        });
    }

    const createNewTodo = () => {

        // show the form for creating a new todo
        const newForm = GenerateForm();
        const modal = document.querySelector('.modal');
        modal.classList.remove('display-none');
        document.querySelector('.modal').appendChild(newForm);

        // add event listener to the submit button
        const submitButton = document.querySelector('[data-btn-submit]');
        submitButton.addEventListener('click', () => {
            // get the values from the form
            const name = document.querySelector('#todo-name').value;
            const date = document.querySelector('#todo-date').value;
            const priority = document.querySelector('#todo-priority').checked;

            // create a new todo object
            const newTodo = TodoItem(name, date, priority);
            // add it to the todo list
            todoList.push(newTodo);
            // update the screen
            const updateScreen = renderScreen();
            updateScreen.renderGeneral();
        });

        // add event listener to the x button
        const xButton = document.querySelector('[data-btn-close]');
        xButton.addEventListener('click', () => {
            modal.classList.add('display-none');
            document.querySelector('.modal').removeChild(newForm);
        });

    }
    return { createNewProject, createNewTodo };
}

const { createNewProject, createNewTodo } = eventFunctions();



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
    const updateScreen = renderScreen();

    switch (clicked) {
        case 'General':
            updateScreen.renderGeneral();
            break;
        case 'Today':
            updateScreen.renderToday();
            break;
        case 'Upcoming':
            updateScreen.renderUpcoming();
            break;
        case 'Completed':
            updateScreen.renderCompleted();
            break;
        case 'Trash':
            updateScreen.renderTrash();
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
// Acts as the main application module.
// Coordinates interactions between different parts of the application.
// Initializes event listeners and sets up the overall application structure.






// Function to initialize the application
function initApp() {
    const createProject = document.querySelector('[data-create-project-btn]');
    // need to add function that creates a new project
    createProject.addEventListener('click', createProject);

    // data action buttons
    // const actionButtons = document.querySelector('[data-action-buttons]');

    // toggle between all todo and important todo
    // const toggle = document.querySelector('[data-btn-toggle]');
    // toggle.addEventListener('click', );

    // create todo
    const createTodo = document.querySelector('[data-create-todo]');

    createTodo.addEventListener('click', _form_js__WEBPACK_IMPORTED_MODULE_3__.createNewTodo);

}
initApp();
(0,_ui_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakMseUJBQXlCO0FBQ3pCO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYixjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVHQUF1RyxTQUFTLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLFVBQVUsTUFBTSxpQkFBaUIsVUFBVSxPQUFPLE9BQU8sTUFBTSxRQUFRLHNCQUFzQix1QkFBdUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLFdBQVcsT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsTUFBTSxTQUFTLG9CQUFvQixxQkFBcUIscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxNQUFNLFlBQVksT0FBTyxVQUFVLE1BQU0sUUFBUSxzQkFBc0IseUJBQXlCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sVUFBVSxNQUFNLE1BQU0sc0JBQXNCLHFCQUFxQixPQUFPLFFBQVEsTUFBTSxNQUFNLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxzQkFBc0IseUJBQXlCLGFBQWEsdUJBQXVCLGFBQWEsT0FBTyxRQUFRLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLHVQQUF1UCxl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QTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsYUFBYTtBQUNiOztBQUVPLFFBQVEsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcE1qRDtBQUNBO0FBQ0E7O0FBRUE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7OztVQ2xIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOztBQUVtRDtBQUNQO0FBQ1o7QUFDNEI7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Q0FBeUMsbURBQWE7O0FBRXREO0FBQ0E7QUFDQSxrREFBUyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzaGVldC9mb3JtLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXNoZWV0L25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzaGVldC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzaGVldC92YXJpYWJsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlc2hlZXQvbm9ybWFsaXplLmNzcz9iNzNkIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlc2hlZXQvc3R5bGUuY3NzPzQ3NjQiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zY3JpcHRzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2NyaXB0cy91aS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zY3JpcHRzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi92YXJpYWJsZXMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tb2RhbHtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBpbnNldDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1wcmltYXJ5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciAuZm9ybS10aXRsZXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNzAwKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jbHItcHJpbWFyeSk7XG59XG5cbi5mb3JtLWNvbnRhaW5lciAuaW5wdXQtZmllbGRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cbi5mb3JtLWNvbnRhaW5lciAucHJpb3JpdHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgZ2FwOiAwLjVyZW07XG59XG4uZm9ybS1jb250YWluZXIgaW5wdXR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWZvcm0tYWNjZW50KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNlY29uZGFyeSk7XG4gICAgcGFkZGluZzogMC4ycmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTUwMCk7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY2xyLXByaW1hcnkpO1xufVxuLmZvcm0tY29udGFpbmVyIGlucHV0OmZvY3Vze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1mb3JtLWFjY2VudCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXByaW1hcnkpO1xufVxuXG4uZm9ybS1jb250YWluZXIgLmJ0bi1jbG9zZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwLjVyZW07XG4gICAgcmlnaHQ6IDAuNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY2xyLXByaW1hcnkpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0L2Zvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHdDQUF3QztJQUN4QyxxQkFBcUI7SUFDckIsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi92YXJpYWJsZXMuY3NzJztcXG5cXG5cXG4ubW9kYWx7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1wcmltYXJ5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIC5mb3JtLXRpdGxle1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTcwMCk7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNsci1wcmltYXJ5KTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIC5pbnB1dC1maWVsZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG4uZm9ybS1jb250YWluZXIgLnByaW9yaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG4uZm9ybS1jb250YWluZXIgaW5wdXR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1mb3JtLWFjY2VudCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNlY29uZGFyeSk7XFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTUwMCk7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNsci1wcmltYXJ5KTtcXG59XFxuLmZvcm0tY29udGFpbmVyIGlucHV0OmZvY3Vze1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZm9ybS1hY2NlbnQpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctcHJpbWFyeSk7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciAuYnRuLWNsb3Nle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMC41cmVtO1xcbiAgICByaWdodDogMC41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jbHItcHJpbWFyeSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbm9ybWFsaXplLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9cblxuLyoqXG4gKiAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXG4gKiAgICB1c2VyIHpvb20uXG4gKi9cbiAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSBkZWZhdWx0IG1hcmdpbi5cbiAqL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIENvcnJlY3QgXFxgYmxvY2tcXGAgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYW55IEhUTUw1IGVsZW1lbnQgaW4gSUUgOC85LlxuICogQ29ycmVjdCBcXGBibG9ja1xcYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBcXGBkZXRhaWxzXFxgIG9yIFxcYHN1bW1hcnlcXGAgaW4gSUUgMTAvMTFcbiAqIGFuZCBGaXJlZm94LlxuICogQ29ycmVjdCBcXGBibG9ja1xcYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBcXGBtYWluXFxgIGluIElFIDExLlxuICovXG5cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWFpbixcbm1lbnUsXG5uYXYsXG5zZWN0aW9uLFxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgXFxgaW5saW5lLWJsb2NrXFxgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxuICogMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBcXGBwcm9ncmVzc1xcYCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5hdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXG59XG5cbi8qKlxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIFxcYGF1ZGlvXFxgIHdpdGhvdXQgY29udHJvbHMuXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxuICovXG5cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuLyoqXG4gKiBBZGRyZXNzIFxcYFtoaWRkZW5dXFxgIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxuICogSGlkZSB0aGUgXFxgdGVtcGxhdGVcXGAgZWxlbWVudCBpbiBJRSA4LzkvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cbiAqL1xuXG5baGlkZGVuXSxcbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogTGlua3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmE6YWN0aXZlLFxuYTpob3ZlciB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cbiAqL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XG59XG5cbi8qKlxuICogQWRkcmVzcyBzdHlsZSBzZXQgdG8gXFxgYm9sZGVyXFxgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cbiAqL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qKlxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxuICovXG5cbmRmbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLyoqXG4gKiBBZGRyZXNzIHZhcmlhYmxlIFxcYGgxXFxgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBcXGBzZWN0aW9uXFxgIGFuZCBcXGBhcnRpY2xlXFxgXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyoqXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxuICovXG5cbm1hcmsge1xuICBiYWNrZ3JvdW5kOiAjZmYwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyoqXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgYWZmZWN0aW5nIFxcYGxpbmUtaGVpZ2h0XFxgIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgXFxgYVxcYCBlbGVtZW50IGluIElFIDgvOS8xMC5cbiAqL1xuXG5pbWcge1xuICBib3JkZXI6IDA7XG59XG5cbi8qKlxuICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXG4gKi9cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxuICovXG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMWVtIDQwcHg7XG59XG5cbi8qKlxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxuICovXG5cbmhyIHtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGhlaWdodDogMDtcbn1cblxuLyoqXG4gKiBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiBBZGRyZXNzIG9kZCBcXGBlbVxcYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcbiAqIHN0eWxpbmcgb2YgXFxgc2VsZWN0XFxgLCB1bmxlc3MgYSBcXGBib3JkZXJcXGAgcHJvcGVydHkgaXMgc2V0LlxuICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXG4gKiAyLiBDb3JyZWN0IGZvbnQgcHJvcGVydGllcyBub3QgYmVpbmcgaW5oZXJpdGVkLlxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xuICBtYXJnaW46IDA7IC8qIDMgKi9cbn1cblxuLyoqXG4gKiBBZGRyZXNzIFxcYG92ZXJmbG93XFxgIHNldCB0byBcXGBoaWRkZW5cXGAgaW4gSUUgOC85LzEwLzExLlxuICovXG5cbmJ1dHRvbiB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IFxcYHRleHQtdHJhbnNmb3JtXFxgIGluaGVyaXRhbmNlIGZvciBcXGBidXR0b25cXGAgYW5kIFxcYHNlbGVjdFxcYC5cbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgXFxgdGV4dC10cmFuc2Zvcm1cXGAgdmFsdWVzLlxuICogQ29ycmVjdCBcXGBidXR0b25cXGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXG4gKiBDb3JyZWN0IFxcYHNlbGVjdFxcYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBcXGBhdWRpb1xcYFxuICogICAgYW5kIFxcYHZpZGVvXFxgIGNvbnRyb2xzLlxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIFxcYGlucHV0XFxgIHR5cGVzIGluIGlPUy5cbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXG4gKiAgICBcXGBpbnB1dFxcYCBhbmQgb3RoZXJzLlxuICovXG5cbmJ1dHRvbixcbmh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgLyogMSAqL1xuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXG4gIGFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogQWRkIHRoZSBzdGFuZGFyZCBwcm9wZXJ0eSAnYXBwZWFyYW5jZScgKi9cbiAgY3Vyc29yOiBwb2ludGVyOyAvKiAzICovXG59XG5cbi8qKlxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cbiAqL1xuXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qKlxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxuICovXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIFxcYGxpbmUtaGVpZ2h0XFxgIG9uIFxcYGlucHV0XFxgIHVzaW5nIFxcYCFpbXBvcnRhbnRcXGAgaW5cbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxuICovXG5cbmlucHV0IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLyoqXG4gKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXG4gKiBGaXJlZm94J3MgaW1wbGVtZW50YXRpb24gZG9lc24ndCByZXNwZWN0IGJveC1zaXppbmcsIHBhZGRpbmcsIG9yIHdpZHRoLlxuICpcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gXFxgY29udGVudC1ib3hcXGAgaW4gSUUgOC85LzEwLlxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cbiAqL1xuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxuICogXFxgZm9udC1zaXplXFxgIHZhbHVlcyBvZiB0aGUgXFxgaW5wdXRcXGAsIGl0IGNhdXNlcyB0aGUgY3Vyc29yIHN0eWxlIG9mIHRoZVxuICogZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBcXGBkZWZhdWx0XFxgIHRvIFxcYHRleHRcXGAuXG4gKi9cblxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQWRkcmVzcyBcXGBhcHBlYXJhbmNlXFxgIHNldCB0byBcXGBzZWFyY2hmaWVsZFxcYCBpbiBTYWZhcmkgYW5kIENocm9tZS5cbiAqIDIuIEFkZHJlc3MgXFxgYm94LXNpemluZ1xcYCBzZXQgdG8gXFxgYm9yZGVyLWJveFxcYCBpbiBTYWZhcmkgYW5kIENocm9tZVxuICogICAgKGluY2x1ZGUgXFxgLW1velxcYCB0byBmdXR1cmUtcHJvb2YpLlxuICovXG5cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIEFkZCB0aGUgc3RhbmRhcmQgcHJvcGVydHkgJ2FwcGVhcmFuY2UnICovXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi8qKlxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSBhbmQgQ2hyb21lIG9uIE9TIFguXG4gKiBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXG4gKiBwYWRkaW5nIChhbmQgXFxgdGV4dGZpZWxkXFxgIGFwcGVhcmFuY2UpLlxuICovXG5cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cbiAqL1xuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gIG1hcmdpbjogMCAycHg7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IFxcYGNvbG9yXFxgIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgOC85LzEwLzExLlxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxuICovXG5cbmxlZ2VuZCB7XG4gIGJvcmRlcjogMDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS8xMC8xMS5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIERvbid0IGluaGVyaXQgdGhlIFxcYGZvbnQtd2VpZ2h0XFxgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXG4gKiBOT1RFOiB0aGUgZGVmYXVsdCBjYW5ub3Qgc2FmZWx5IGJlIGNoYW5nZWQgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWC5cbiAqL1xuXG5vcHRncm91cCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKiBUYWJsZXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxuICovXG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnRkLFxudGgge1xuICBwYWRkaW5nOiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXQvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyREFBMkQ7O0FBRTNEOzs7O0VBSUU7Q0FDRDtFQUNDLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7OztFQUtFOztBQUVGOzs7Ozs7Ozs7Ozs7O0VBYUUsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7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OztBQUVBOztFQUVFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9cXG5cXG4vKipcXG4gKiAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xcbiAqICAgIHVzZXIgem9vbS5cXG4gKi9cXG4gKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcXG4gKiBhbmQgRmlyZWZveC5cXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKiAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxuYXVkaW8sXFxuY2FudmFzLFxcbnByb2dyZXNzLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZDogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmhyIHtcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxcbiAqIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXFxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICBtYXJnaW46IDA7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3ZlcmZsb3dgIHNldCB0byBgaGlkZGVuYCBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxuYnV0dG9uIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG4gIGFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogQWRkIHRoZSBzdGFuZGFyZCBwcm9wZXJ0eSAnYXBwZWFyYW5jZScgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXFxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cXG4gKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxcbiAqIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXFxuICogZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZVxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIEFkZCB0aGUgc3RhbmRhcmQgcHJvcGVydHkgJ2FwcGVhcmFuY2UnICovXFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxcbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcXG4gKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXFxuICogTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXFxuICovXFxuXFxub3B0Z3JvdXAge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgcGFkZGluZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZhcmlhYmxlcy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsQDA7MSZmYW1pbHk9Um9ib3RvOml0YWxAMDsxJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWJnLXByaW1hcnkpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wbGF5ZmFpci1mb250KTtcbn1cblxuYm9keXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIFN0eWxpbmcgdGhlIG1haW4gY29udGFpbmVyICovXG5kaXYubWFpbi1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1pbi1oZWlnaHQ6IDc1JTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMmZyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuZGl2Lm1haW4tY29udGFpbmVyIGgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogMC42N2VtO1xuXG59XG5cbi8qIFN0eWxpbmcgdGhlIGxlZnQgY29udGFpbmVyICovIFxuLmxlZnQtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZy1hY2NlbnQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG4ubGVmdC1jb250YWluZXIgZGl2LmhvbWUtYWN0aW9ucywgXG4ubGVmdC1jb250YWluZXIgZGl2LnByb2plY3Rze1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmxlZnQtY29udGFpbmVyIGRpdi5ob21lLWFjdGlvbnMgYSxcbi5sZWZ0LWNvbnRhaW5lciBkaXYucHJvamVjdHMgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY2xyLXByaW1hcnkpO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC4yNXJlbTtcbn1cbi5sZWZ0LWNvbnRhaW5lciBkaXYuaG9tZS1hY3Rpb25zIGE6aG92ZXIsXG4ubGVmdC1jb250YWluZXIgZGl2LnByb2plY3RzIGE6aG92ZXIsXG5kaXYucHJvamVjdHMgLnByb2plY3RzLXNlY3Rpb25zIC5wcm9qZWN0LWl0ZW06aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJ0bi1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgICB3aWR0aDogOTAlO1xufVxuXG5kaXYuaG9tZS1hY3Rpb25zIGRpdi5jb2xsZWN0aW9uc3tcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5kaXYuZXZlbnQtc2VjdGlvbnMsXG5kaXYuY29sbGVjdGlvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG5kaXYubGVmdC1jb250YWluZXIgZGl2LnByb2plY3Rze1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG59XG5kaXYucHJvamVjdHMgLnByb2plY3RzLXNlY3Rpb25zIC5wcm9qZWN0LWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuYnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTcwMCk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNsci1idG4pO1xuICAgIHBhZGRpbmc6IDAuMTVyZW0gMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW1cbn1cbmRpdi5sZWZ0LWNvbnRhaW5lciBidXR0b24uY3JlYXRlLXByb2plY3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJ0bi1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDAgMC43NXJlbSAxcmVtIDAuNjdyZW07XG59XG5kaXYubGVmdC1jb250YWluZXIgYnV0dG9uLmNyZWF0ZS1wcm9qZWN0OmhvdmVyLFxuZGl2LmFjdGlvbi1idXR0b25zIGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYnRuLWZvY3VzKTtcbn1cblxuLyogU3R5bGluZyB0aGUgcmlnaHQgY29udGFpbmVyICovIFxuZGl2LnJpZ2h0LWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmctc2Vjb25kYXJ5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5kaXYubWFpbi1jb250YWluZXIgLnJpZ2h0LWNvbnRhaW5lciBoMXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcbn1cbmRpdi5hY3Rpb24tYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmRpdi50YXNrLWxpc3Rze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cbmRpdi50YXNrLWxpc3RzIC50YXNre1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJnLXNlY29uZGFyeS14bCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNlY29uZGFyeSk7XG59XG5kaXYudGFzay1saXN0cyAudGFzazpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmctc2Vjb25kYXJ5KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctcHJpbWFyeSk7XG59XG5cbi5kaXNwbGF5LW5vbmV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtJQUNJLFlBQVk7SUFDWiwrREFBK0Q7SUFDL0QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUEsK0JBQStCO0FBQy9CO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0I7O0FBRXRCOztBQUVBLCtCQUErQjtBQUMvQjtJQUNJLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBOzs7SUFHSSx3Q0FBd0M7SUFDeEMsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QjtBQUNKO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsOEJBQThCO0FBQ2xDO0FBQ0E7O0lBRUksc0NBQXNDO0FBQzFDOztBQUVBLGdDQUFnQztBQUNoQztJQUNJLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiw0Q0FBNEM7SUFDNUMsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWxAMDsxJmZhbWlseT1Sb2JvdG86aXRhbEAwOzEmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCAnLi4vc3R5bGVzaGVldC92YXJpYWJsZXMuY3NzJztcXG5AaW1wb3J0ICcuLi9zdHlsZXNoZWV0L2Zvcm0uY3NzJztcXG5cXG5odG1sLCBib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1iZy1wcmltYXJ5KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXBsYXlmYWlyLWZvbnQpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogU3R5bGluZyB0aGUgbWFpbiBjb250YWluZXIgKi9cXG5kaXYubWFpbi1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBtaW4taGVpZ2h0OiA3NSU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMmZyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuZGl2Lm1haW4tY29udGFpbmVyIGgxe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogMC42N2VtO1xcblxcbn1cXG5cXG4vKiBTdHlsaW5nIHRoZSBsZWZ0IGNvbnRhaW5lciAqLyBcXG4ubGVmdC1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZy1hY2NlbnQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbi5sZWZ0LWNvbnRhaW5lciBkaXYuaG9tZS1hY3Rpb25zLCBcXG4ubGVmdC1jb250YWluZXIgZGl2LnByb2plY3Rze1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLmxlZnQtY29udGFpbmVyIGRpdi5ob21lLWFjdGlvbnMgYSxcXG4ubGVmdC1jb250YWluZXIgZGl2LnByb2plY3RzIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY2xyLXByaW1hcnkpO1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuMjVyZW07XFxufVxcbi5sZWZ0LWNvbnRhaW5lciBkaXYuaG9tZS1hY3Rpb25zIGE6aG92ZXIsXFxuLmxlZnQtY29udGFpbmVyIGRpdi5wcm9qZWN0cyBhOmhvdmVyLFxcbmRpdi5wcm9qZWN0cyAucHJvamVjdHMtc2VjdGlvbnMgLnByb2plY3QtaXRlbTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJ0bi1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXByaW1hcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG5kaXYuaG9tZS1hY3Rpb25zIGRpdi5jb2xsZWN0aW9uc3tcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG5kaXYuZXZlbnQtc2VjdGlvbnMsXFxuZGl2LmNvbGxlY3Rpb25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuZGl2LmxlZnQtY29udGFpbmVyIGRpdi5wcm9qZWN0c3tcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuZGl2LnByb2plY3RzIC5wcm9qZWN0cy1zZWN0aW9ucyAucHJvamVjdC1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTcwMCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNsci1idG4pO1xcbiAgICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbVxcbn1cXG5kaXYubGVmdC1jb250YWluZXIgYnV0dG9uLmNyZWF0ZS1wcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYnRuLXByaW1hcnkpO1xcbiAgICBtYXJnaW46IDAgMC43NXJlbSAxcmVtIDAuNjdyZW07XFxufVxcbmRpdi5sZWZ0LWNvbnRhaW5lciBidXR0b24uY3JlYXRlLXByb2plY3Q6aG92ZXIsXFxuZGl2LmFjdGlvbi1idXR0b25zIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJ0bi1mb2N1cyk7XFxufVxcblxcbi8qIFN0eWxpbmcgdGhlIHJpZ2h0IGNvbnRhaW5lciAqLyBcXG5kaXYucmlnaHQtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmctc2Vjb25kYXJ5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5kaXYubWFpbi1jb250YWluZXIgLnJpZ2h0LWNvbnRhaW5lciBoMXtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5kaXYuYWN0aW9uLWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuZGl2LnRhc2stbGlzdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5kaXYudGFzay1saXN0cyAudGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZy1zZWNvbmRhcnkteGwpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc2Vjb25kYXJ5KTtcXG59XFxuZGl2LnRhc2stbGlzdHMgLnRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZy1zZWNvbmRhcnkpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctcHJpbWFyeSk7XFxufVxcblxcbi5kaXNwbGF5LW5vbmV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tZnMtMzAwOiAwLjdyZW07XG4gICAgLS1mcy00MDA6IDFyZW07XG4gICAgLS1mcy01MDA6IDEuM3JlbTtcbiAgICAtLWZzLTcwMDogMnJlbTtcbiAgICAtLWZ3LTMwMDogMzAwO1xuICAgIC0tZnctNDAwOiA0MDA7XG4gICAgLS1mdy03MDA6IDcwMDtcbiAgICAtLWZvbnQtY2xyLXByaW1hcnk6ICMwMDI5Mjc7XG4gICAgLS1mb250LWNsci1idG46ICMwMDI5Mjc7XG4gICAgLS1jbHItYmctYWNjZW50OiBoc2xhKDAsMCUsMTAwJSwuNSk7XG4gICAgLS1jbHItYmctc2Vjb25kYXJ5OiBoc2xhKDAsMCUsMTAwJSwuMSk7XG4gICAgLS1jbHItYmctc2Vjb25kYXJ5LXhsOiBoc2xhKDAsMCUsMTAwJSwuMyk7XG4gICAgLS1jbHItYmctcHJpbWFyeTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwjZDE2YmE1LCNjNzc3YjksI2JhODNjYSwjYWE4ZmQ4LCM5YTlhZTEsIzg4YTRlOCwjNzdhZWViLCM2OGI2ZWIsIzU2YmZlOCwjNGVjN2UyLCM1NGNkZDgsIzY1ZDNjYyk7XG4gICAgLS1jbHItYnRuLXByaW1hcnk6IHJnYmEoMCwwLDAsLjE1KTtcbiAgICAtLWNsci1idG4tYWNjZW50OiByZ2JhKDAsMCwwLC4zKTtcbiAgICAtLWNsci1idG4tc2Vjb25kYXJ5OiAjZmZmO1xuICAgIC0tY2xyLWJ0bi1mb2N1czogIzY0ZDNjYztcbiAgICAtLWNsci1idG4tY2hlY2tib3g6ICMxZmMxMWY7XG4gICAgLS1jbHItZm9ybS1iZzogcmdiYSgwLDAsMCwuMTUpO1xuICAgIC0tY2xyLWZvcm0tYWNjZW50OiByZ2JhKDAsMCwwLC4zKTtcbiAgICAtLWNsci1pbXBvcnRhbnQ6IHJnYmEoMjU1LDAsMCwuMzUpO1xuICAgIC0tc2hhZG93LXByaW1hcnk6IDAgMCAxMHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgIC0tc2hhZG93LXNlY29uZGFyeTogMCAwIDEwcHggcmdiYSgwLDAsMCwuMSk7XG4gICAgLS1wbGF5ZmFpci1mb250OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICAgIC0tcm9ib3RvLWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXQvdmFyaWFibGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMseUNBQXlDO0lBQ3pDLCtJQUErSTtJQUMvSSxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0MsMENBQTBDO0lBQzFDLG1DQUFtQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tZnMtMzAwOiAwLjdyZW07XFxuICAgIC0tZnMtNDAwOiAxcmVtO1xcbiAgICAtLWZzLTUwMDogMS4zcmVtO1xcbiAgICAtLWZzLTcwMDogMnJlbTtcXG4gICAgLS1mdy0zMDA6IDMwMDtcXG4gICAgLS1mdy00MDA6IDQwMDtcXG4gICAgLS1mdy03MDA6IDcwMDtcXG4gICAgLS1mb250LWNsci1wcmltYXJ5OiAjMDAyOTI3O1xcbiAgICAtLWZvbnQtY2xyLWJ0bjogIzAwMjkyNztcXG4gICAgLS1jbHItYmctYWNjZW50OiBoc2xhKDAsMCUsMTAwJSwuNSk7XFxuICAgIC0tY2xyLWJnLXNlY29uZGFyeTogaHNsYSgwLDAlLDEwMCUsLjEpO1xcbiAgICAtLWNsci1iZy1zZWNvbmRhcnkteGw6IGhzbGEoMCwwJSwxMDAlLC4zKTtcXG4gICAgLS1jbHItYmctcHJpbWFyeTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwjZDE2YmE1LCNjNzc3YjksI2JhODNjYSwjYWE4ZmQ4LCM5YTlhZTEsIzg4YTRlOCwjNzdhZWViLCM2OGI2ZWIsIzU2YmZlOCwjNGVjN2UyLCM1NGNkZDgsIzY1ZDNjYyk7XFxuICAgIC0tY2xyLWJ0bi1wcmltYXJ5OiByZ2JhKDAsMCwwLC4xNSk7XFxuICAgIC0tY2xyLWJ0bi1hY2NlbnQ6IHJnYmEoMCwwLDAsLjMpO1xcbiAgICAtLWNsci1idG4tc2Vjb25kYXJ5OiAjZmZmO1xcbiAgICAtLWNsci1idG4tZm9jdXM6ICM2NGQzY2M7XFxuICAgIC0tY2xyLWJ0bi1jaGVja2JveDogIzFmYzExZjtcXG4gICAgLS1jbHItZm9ybS1iZzogcmdiYSgwLDAsMCwuMTUpO1xcbiAgICAtLWNsci1mb3JtLWFjY2VudDogcmdiYSgwLDAsMCwuMyk7XFxuICAgIC0tY2xyLWltcG9ydGFudDogcmdiYSgyNTUsMCwwLC4zNSk7XFxuICAgIC0tc2hhZG93LXByaW1hcnk6IDAgMCAxMHB4IHJnYmEoMCwwLDAsLjIpO1xcbiAgICAtLXNoYWRvdy1zZWNvbmRhcnk6IDAgMCAxMHB4IHJnYmEoMCwwLDAsLjEpO1xcbiAgICAtLXBsYXlmYWlyLWZvbnQ6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XFxuICAgIC0tcm9ib3RvLWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBNYW5hZ2VzIGZvcm0gaW50ZXJhY3Rpb25zIGZvciBjcmVhdGluZy9lZGl0aW5nIHRvLWRvcyBhbmQgcHJvamVjdHMuXG4vLyBWYWxpZGF0ZXMgdXNlciBpbnB1dCBhbmQgdHJpZ2dlcnMgYWN0aW9ucyBhY2NvcmRpbmdseS5cbmZ1bmN0aW9uIEdlbmVyYXRlRm9ybSgpe1xuICAgIC8vIGZvcm0gY3JlYXRpb24gXG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LWZvcm0nKTtcbiAgICBuZXdGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1jb250YWluZXInKTtcblxuICAgIC8vIGZvcm0gdGl0bGVcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGZvcm1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0tdGl0bGUnKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSAnQ3JlYXRlIE5ldyBUb2RvJztcblxuICAgIC8vIE5hbWUgRGl2XG4gICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dC1maWVsZHMnKTtcbiAgICAvLyBuYW1lXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lJztcblxuICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1uYW1lJyk7XG4gICAgXG4gICAgbmFtZURpdi5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIG5hbWVEaXYuYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcblxuICAgIC8vIGRhdGVcbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0LWZpZWxkcycpO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZScpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlJztcblxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1kYXRlJyk7XG4gICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnbW0vZGQveXl5eScpO1xuXG4gICAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGRhdGVEaXYuYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcblxuICAgIC8vIHByaW9yaXR5XG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50Pyc7XG5cbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLXByaW9yaXR5Jyk7XG5cblxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHkpO1xuXG4gICAgLy8gZm9ybSBzdWJtaXNzaW9uXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWJ0bi1zdWJtaXQnLCAnJyk7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgICBjb25zdCBidXR0b25DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbkNsb3NlLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBidXR0b25DbG9zZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J0bi1jbG9zZScpO1xuICAgIGJ1dHRvbkNsb3NlLnNldEF0dHJpYnV0ZSgnZGF0YS1idG4tY2xvc2UnLCAnJyk7XG4gICAgYnV0dG9uQ2xvc2UuaW5uZXJIVE1MID0gYFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMTIgMTMuNGwtNC45IDQuOXEtLjI3NS4yNzUtLjcuMjc1cS0uNDI1IDAtLjctLjI3NXEtLjI3NS0uMjc1LS4yNzUtLjdxMC0uNDI1LjI3NS0uN2w0LjktNC45bC00LjktNC45cS0uMjc1LS4yNzUtLjI3NS0uN3EwLS40MjUuMjc1LS43cS4yNzUtLjI3NS43LS4yNzVxLjQyNSAwIC43LjI3NWw0LjkgNC45bDQuOS00LjlxLjI3NS0uMjc1LjctLjI3NXEuNDI1IDAgLjcuMjc1cS4yNzUuMjc1LjI3NS43cTAgLjQyNS0uMjc1LjdMMTMuNCAxMmw0LjkgNC45cS4yNzUuMjc1LjI3NS43cTAgLjQyNS0uMjc1LjdxLS4yNzUuMjc1LS43LjI3NXEtLjQyNSAwLS43LS4yNzVaXCI+PC9wYXRoPjwvc3ZnPlxuICAgIGBcblxuICAgIC8vIGFwcGVuZCBhbGwgZWxlbWVudHMgdG8gdGhlIGZvcm1cbiAgICBuZXdGb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG4gICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICBuZXdGb3JtLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICBuZXdGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkNsb3NlKTtcblxuICAgIHJldHVybiBuZXdGb3JtO1xufVxuXG5mdW5jdGlvbiBHZW5lcmF0ZVByb2plY3QoKXtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICduZXctcHJvamVjdCcpO1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gZm9ybSB0aXRsZVxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZm9ybVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS10aXRsZScpO1xuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdDcmVhdGUgTmV3IFByb2plY3QnO1xuXG4gICAgLy8gZm9ybSBpbnB1dCBmaWVsZHNcbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRGaWVsZHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dC1maWVsZHMnKTtcbiAgICAvLyBuYW1lXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWUnO1xuXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LW5hbWUnKTtcblxuICAgIG5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBuYW1lRGl2LmFwcGVuZENoaWxkKGlucHV0TmFtZSk7XG5cbiAgICAvLyBwcm9qZWN0IGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbkRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0LWZpZWxkcycpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBEZXNjcmlwdGlvbic7XG5cbiAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG5cbiAgICAvLyBmb3JtIHN1Ym1pc3Npb25cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnRuLXN1Ym1pdCcsICcnKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgIGNvbnN0IGJ1dHRvbkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uQ2xvc2Uuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGJ1dHRvbkNsb3NlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnRuLWNsb3NlJyk7XG4gICAgYnV0dG9uQ2xvc2Uuc2V0QXR0cmlidXRlKCdkYXRhLWJ0bi1jbG9zZScsICcnKTtcbiAgICBidXR0b25DbG9zZS5pbm5lckhUTUwgPSBgXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0xMiAxMy40bC00LjkgNC45cS0uMjc1LjI3NS0uNy4yNzVxLS40MjUgMC0uNy0uMjc1cS0uMjc1LS4yNzUtLjI3NS0uN3EwLS40MjUuMjc1LS43bDQuOS00LjlsLTQuOS00LjlxLS4yNzUtLjI3NS0uMjc1LS43cTAtLjQyNS4yNzUtLjdxLjI3NS0uMjc1LjctLjI3NXEuNDI1IDAgLjcuMjc1bDQuOSA0LjlsNC45LTQuOXEuMjc1LS4yNzUuNy0uMjc1cS40MjUgMCAuNy4yNzVxLjI3NS4yNzUuMjc1LjdxMCAuNDI1LS4yNzUuN0wxMy40IDEybDQuOSA0LjlxLjI3NS4yNzUuMjc1LjdxMCAuNDI1LS4yNzUuN3EtLjI3NS4yNzUtLjcuMjc1cS0uNDI1IDAtLjctLjI3NVpcIj48L3BhdGg+PC9zdmc+XG4gICAgYFxuICAgIC8vIGFwcGVuZCBhbGwgZWxlbWVudHMgdG8gdGhlIGZvcm1cbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChidXR0b25DbG9zZSk7XG5cbiAgICByZXR1cm4gbmV3UHJvamVjdDtcblxufVxuXG5mdW5jdGlvbiBldmVudEZ1bmN0aW9ucygpIHtcbiAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gR2VuZXJhdGVQcm9qZWN0KCk7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICAgICAgICBjb25zdCB4QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnRuLWNsb3NlXScpO1xuICAgICAgICB4QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5yZW1vdmVDaGlsZChuZXdGb3JtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTmV3VG9kbyA9ICgpID0+IHtcblxuICAgICAgICAvLyBzaG93IHRoZSBmb3JtIGZvciBjcmVhdGluZyBhIG5ldyB0b2RvXG4gICAgICAgIGNvbnN0IG5ld0Zvcm0gPSBHZW5lcmF0ZUZvcm0oKTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLmFwcGVuZENoaWxkKG5ld0Zvcm0pO1xuXG4gICAgICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgc3VibWl0IGJ1dHRvblxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1idG4tc3VibWl0XScpO1xuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIHZhbHVlcyBmcm9tIHRoZSBmb3JtXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbmFtZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRhdGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJpb3JpdHknKS5jaGVja2VkO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgdG9kbyBvYmplY3RcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBUb2RvSXRlbShuYW1lLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgICAgICAgICAvLyBhZGQgaXQgdG8gdGhlIHRvZG8gbGlzdFxuICAgICAgICAgICAgdG9kb0xpc3QucHVzaChuZXdUb2RvKTtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgc2NyZWVuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVTY3JlZW4gPSByZW5kZXJTY3JlZW4oKTtcbiAgICAgICAgICAgIHVwZGF0ZVNjcmVlbi5yZW5kZXJHZW5lcmFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgeCBidXR0b25cbiAgICAgICAgY29uc3QgeEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJ0bi1jbG9zZV0nKTtcbiAgICAgICAgeEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykucmVtb3ZlQ2hpbGQobmV3Rm9ybSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIHJldHVybiB7IGNyZWF0ZU5ld1Byb2plY3QsIGNyZWF0ZU5ld1RvZG8gfTtcbn1cblxuZXhwb3J0IGNvbnN0IHsgY3JlYXRlTmV3UHJvamVjdCwgY3JlYXRlTmV3VG9kbyB9ID0gZXZlbnRGdW5jdGlvbnMoKTtcblxuIiwiLy8gTWFuYWdlcyB0aGUgdXNlciBpbnRlcmZhY2UsIGluY2x1ZGluZyBET00gbWFuaXB1bGF0aW9uLlxuLy8gSGFuZGxlcyBkeW5hbWljIHJlbmRlcmluZyBvZiBwcm9qZWN0cywgdG8tZG9zLCBhbmQgZm9ybXMuXG4vLyBMaXN0ZW5zIGZvciB1c2VyIGludGVyYWN0aW9ucyAoZS5nLiwgYnV0dG9uIGNsaWNrcykgYW5kIHRyaWdnZXJzIGNvcnJlc3BvbmRpbmcgYWN0aW9ucy5cblxuLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHVzZXIgYWN0aW9ucyBhbmQgbmF2aWdhdGUgdGhlIHBhZ2VcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFjdGlvbigpIHtcbiAgICAvLyBhZGRzIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkaXZzIGluIHRoZSBob21lLWFjdGlvbnMgY29udGFpbmVyXG4gICAgY29uc3QgbWFpbkFjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY3Rpb25zXScpO1xuICAgIG1haW5BY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgYWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uQ2xpY2tlZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcigncCcpLmlubmVySFRNTDtcbiAgICAgICAgICAgIG5hdmlnYXRlUGFnZShhY3Rpb25DbGlja2VkKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc2NyZWVuIGJhc2VkIG9uIHVzZXIgYWN0aW9uXG5mdW5jdGlvbiBuYXZpZ2F0ZVBhZ2UoY2xpY2tlZCl7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10aXRsZV0nKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBjbGlja2VkO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScsIGNsaWNrZWQpO1xuICAgIGNvbnN0IHVwZGF0ZVNjcmVlbiA9IHJlbmRlclNjcmVlbigpO1xuXG4gICAgc3dpdGNoIChjbGlja2VkKSB7XG4gICAgICAgIGNhc2UgJ0dlbmVyYWwnOlxuICAgICAgICAgICAgdXBkYXRlU2NyZWVuLnJlbmRlckdlbmVyYWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdUb2RheSc6XG4gICAgICAgICAgICB1cGRhdGVTY3JlZW4ucmVuZGVyVG9kYXkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdVcGNvbWluZyc6XG4gICAgICAgICAgICB1cGRhdGVTY3JlZW4ucmVuZGVyVXBjb21pbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDb21wbGV0ZWQnOlxuICAgICAgICAgICAgdXBkYXRlU2NyZWVuLnJlbmRlckNvbXBsZXRlZCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1RyYXNoJzpcbiAgICAgICAgICAgIHVwZGF0ZVNjcmVlbi5yZW5kZXJUcmFzaCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBVbmhhbmRsZWQgYWN0aW9uOiAke2NsaWNrZWR9YCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHJlbmRlciBkaWZmZXJlbnQgc2NyZWVuc1xuZnVuY3Rpb24gcmVuZGVyU2NyZWVuKCl7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJpZ2h0LWNvbnRhaW5lcl0nKTtcbiAgICBjb25zdCBwVGFnID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kZXNjcmlwdGlvbl0nKTtcbiAgICBjb25zdCBnZXRBY3Rpb25CdXR0b25zID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hY3Rpb24tYnV0dG9uc10nKTtcblxuICAgIGNvbnN0IHJlbmRlckdlbmVyYWwgPSAoKSA9PiB7XG4gICAgICAgIHBUYWcuaW5uZXJIVE1MID0gJ0EgZ2VuZXJhbCBsaXN0IG9mIHRhc2tzJztcbiAgICAgICAgaWYgKCFnZXRBY3Rpb25CdXR0b25zKSB7XG4gICAgICAgICAgICAvLyBuZWVkIHRvIG1ha2UgYSBuZXcgZGl2IGFuZCBnZW5lcmF0ZSB0aGUgYnV0dG9ucywgdGhlbiBhcHBlbmQgaXQgYmVmb3JlIHRhc2stbGlzdCBpbiBtYWluLWNvbnRhaW5lciBkaXZcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGFjdGlvbkJ1dHRvbnMuc2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbi1idXR0b25zJywgJycpO1xuICAgICAgICAgICAgYWN0aW9uQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb24tYnV0dG9ucycpO1xuXG4gICAgICAgICAgICAvLyBtYWtlIHRoZSBidXR0b25zXG4gICAgICAgICAgICBjb25zdCBhbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGFsbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcbiAgICAgICAgICAgIGFsbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBbGwnO1xuXG4gICAgICAgICAgICAvLyBtYWtlIGNyZWF0ZSB0byBkbyBidXR0b25cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS10YXNrcycpO1xuICAgICAgICAgICAgY3JlYXRlQnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE4IDEyLjk5OGgtNXY1YTEgMSAwIDAgMS0yIDB2LTVINmExIDEgMCAwIDEgMC0yaDV2LTVhMSAxIDAgMCAxIDIgMHY1aDVhMSAxIDAgMCAxIDAgMnpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIFRvZG9cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIC8vIGFwcGVuZCB0byB0aGUgYWN0aW9uQnV0dG9ucyBkaXZcbiAgICAgICAgICAgIGFjdGlvbkJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWxsQnV0dG9uKTtcbiAgICAgICAgICAgIGFjdGlvbkJ1dHRvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKTtcblxuICAgICAgICAgICAgLy8gYXBwZW5kIHRvIHRoZSBtYWluIGNvbnRhaW5lclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5pbnNlcnRCZWZvcmUoYWN0aW9uQnV0dG9ucywgbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrLWxpc3RdJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbmRlciBhbGwgdGFza3MgdG8gYmUgZG9uZVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW5kZXJUb2RheSA9ICgpID0+e1xuICAgICAgICBwVGFnLmlubmVySFRNTCA9ICdBIGxpc3Qgb2YgdGFza3MgZm9yIHRvZGF5JztcbiAgICAgICAgaWYgKGdldEFjdGlvbkJ1dHRvbnMpe1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChnZXRBY3Rpb25CdXR0b25zKTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIC8vIHJlbmRlciB0YXNrIHRvIGJlIGRvbmUgdG9kYXlcbiAgICB9XG4gICAgY29uc3QgcmVuZGVyVXBjb21pbmcgPSAoKSA9PntcbiAgICAgICAgcFRhZy5pbm5lckhUTUwgPSAnQSBsaXN0IG9mIHRhc2tzIGZvciB0aGUgZnV0dXJlJztcbiAgICAgICAgLy8gID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hY3Rpb24tYnV0dG9uc10nKTtcbiAgICAgICAgaWYgKGdldEFjdGlvbkJ1dHRvbnMpe1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChnZXRBY3Rpb25CdXR0b25zKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZW5kZXIgdGFzayB0byBiZSBkb25lIGluIHRoZSBmdXR1cmVcbiAgICB9XG4gICAgY29uc3QgcmVuZGVyQ29tcGxldGVkID0gKCkgPT57XG4gICAgICAgIHBUYWcuaW5uZXJIVE1MID0gJ0EgbGlzdCBvZiBjb21wbGV0ZWQgdGFza3MnO1xuICAgICAgICBpZiAoZ2V0QWN0aW9uQnV0dG9ucyl7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKGdldEFjdGlvbkJ1dHRvbnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbmRlciB0YXNrIGRvbmVcbiAgICB9XG4gICAgY29uc3QgcmVuZGVyVHJhc2ggPSAoKSA9PntcbiAgICAgICAgcFRhZy5pbm5lckhUTUwgPSAnQSBsaXN0IG9mIGRlbGV0ZWQgdGFza3MnO1xuICAgICAgIGlmIChnZXRBY3Rpb25CdXR0b25zKXtcbiAgICAgICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoZ2V0QWN0aW9uQnV0dG9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVuZGVyIHRhc2sgZGVsZXRlZFxuICAgIH1cblxuICAgIHJldHVybiB7cmVuZGVyR2VuZXJhbCwgcmVuZGVyVG9kYXksIHJlbmRlclVwY29taW5nLCByZW5kZXJDb21wbGV0ZWQsIHJlbmRlclRyYXNofVxufVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIEFjdHMgYXMgdGhlIG1haW4gYXBwbGljYXRpb24gbW9kdWxlLlxuLy8gQ29vcmRpbmF0ZXMgaW50ZXJhY3Rpb25zIGJldHdlZW4gZGlmZmVyZW50IHBhcnRzIG9mIHRoZSBhcHBsaWNhdGlvbi5cbi8vIEluaXRpYWxpemVzIGV2ZW50IGxpc3RlbmVycyBhbmQgc2V0cyB1cCB0aGUgb3ZlcmFsbCBhcHBsaWNhdGlvbiBzdHJ1Y3R1cmUuXG5cbmltcG9ydCBub3JtYWxpemUgZnJvbSAnLi4vc3R5bGVzaGVldC9ub3JtYWxpemUuY3NzJ1xuaW1wb3J0IHN0eWxlIGZyb20gICcuLi9zdHlsZXNoZWV0L3N0eWxlLmNzcydcbmltcG9ydCBnZXRBY3Rpb24gZnJvbSAnLi91aS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0LCBjcmVhdGVOZXdUb2RvIH0gZnJvbSAnLi9mb3JtLmpzJztcblxuLy8gRnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbmZ1bmN0aW9uIGluaXRBcHAoKSB7XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNyZWF0ZS1wcm9qZWN0LWJ0bl0nKTtcbiAgICAvLyBuZWVkIHRvIGFkZCBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgcHJvamVjdFxuICAgIGNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0KTtcblxuICAgIC8vIGRhdGEgYWN0aW9uIGJ1dHRvbnNcbiAgICAvLyBjb25zdCBhY3Rpb25CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYWN0aW9uLWJ1dHRvbnNdJyk7XG5cbiAgICAvLyB0b2dnbGUgYmV0d2VlbiBhbGwgdG9kbyBhbmQgaW1wb3J0YW50IHRvZG9cbiAgICAvLyBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1idG4tdG9nZ2xlXScpO1xuICAgIC8vIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICk7XG5cbiAgICAvLyBjcmVhdGUgdG9kb1xuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jcmVhdGUtdG9kb10nKTtcblxuICAgIGNyZWF0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdUb2RvKTtcblxufVxuaW5pdEFwcCgpO1xuZ2V0QWN0aW9uKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9