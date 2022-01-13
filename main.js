(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "../../../node_modules/@emotion/styled/dist/styled.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledApp = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  /*\n * Remove template code below\n */\n\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n\n  .gutter-left {\n    margin-left: 9px;\n  }\n\n  .col-span-2 {\n    grid-column: span 2;\n  }\n\n  .flex {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  header {\n    background-color: #143055;\n    color: white;\n    padding: 5px;\n    border-radius: 3px;\n  }\n\n  main {\n    padding: 0 36px;\n  }\n\n  p {\n    text-align: center;\n  }\n\n  h1 {\n    text-align: center;\n    margin-left: 18px;\n    font-size: 24px;\n  }\n\n  h2 {\n    text-align: center;\n    font-size: 20px;\n    margin: 40px 0 10px 0;\n  }\n\n  .resources {\n    text-align: center;\n    list-style: none;\n    padding: 0;\n    display: grid;\n    grid-gap: 9px;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .resource {\n    color: #0094ba;\n    height: 36px;\n    background-color: rgba(0, 0, 0, 0);\n    border: 1px solid rgba(0, 0, 0, 0.12);\n    border-radius: 4px;\n    padding: 3px 9px;\n    text-decoration: none;\n  }\n\n  .resource:hover {\n    background-color: rgba(68, 138, 255, 0.04);\n  }\n\n  pre {\n    padding: 9px;\n    border-radius: 4px;\n    background-color: black;\n    color: #eee;\n  }\n\n  details {\n    border-radius: 4px;\n    color: #333;\n    background-color: rgba(0, 0, 0, 0);\n    border: 1px solid rgba(0, 0, 0, 0.12);\n    padding: 3px 9px;\n    margin-bottom: 9px;\n  }\n\n  summary {\n    outline: none;\n    height: 36px;\n    line-height: 36px;\n  }\n\n  .github-star-container {\n    margin-top: 12px;\n    line-height: 20px;\n  }\n\n  .github-star-container a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: #333;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, 0.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, 0.35);\n    background-position: -0.5em;\n  }\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n"])));
var App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledApp, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "",
    width: "75",
    src: "https://nx.dev/assets/images/nx-logo-white.svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to my-app!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Resources & Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Thank you for using and showing some \u2665 for Nx."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex github-star-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/nrwl/nx",
    target: "_blank",
    rel: "noopener noreferrer"
  }, ' ', "If you like Nx, please give it a star:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "github-star-badge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "material-icons",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
  })), "Star"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here are some links to help you get started."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "resources"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "resource flex",
    href: "https://nx.dev/react/getting-started/what-is-nx"
  }, "Nx video tutorial")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "resource flex",
    href: "https://nx.dev/react/tutorial/01-create-application"
  }, "Interactive tutorial")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "resource flex",
    href: "https://connect.nrwl.io/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    height: "36",
    alt: "Nrwl Connect",
    src: "https://connect.nrwl.io/assets/img/CONNECT_ColorIcon.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "gutter-left"
  }, "Nrwl Connect")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Next Steps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here are some things you can do with Nx."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
    open: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "Add UI library"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, "# Generate UI lib\nnx g @nrwl/react:lib ui\n\n# Add a component\nnx g @nrwl/react:component xyz --project ui")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "View dependency graph"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, "nx dep-graph")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "Run affected commands"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, "# see what's been affected by changes\nnx affected:dep-graph\n\n# run tests for current changes\nnx affected:test\n\n# run e2e tests for current changes\nnx affected:e2e\n"))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");




if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Rikkeisoft\ForMe\nx-react-pwa-sample\apps\my-app\src\main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map