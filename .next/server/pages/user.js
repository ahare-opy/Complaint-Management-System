"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/user";
exports.ids = ["pages/user"];
exports.modules = {

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ \"./utils/baseUrl.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_5__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction User() {\n    const { 0: users , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                const token = js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"token\");\n                const res = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}/api/v1/user`, {\n                    headers: {\n                        Authorization: token\n                    }\n                });\n                setUser(res.data.user);\n            } catch (error) {\n                console.log(error);\n                \"Error Searching Users\";\n            }\n        })();\n    }, [\n        users\n    ]);\n    if (users) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Group, {\n                children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: user.image,\n                                width: \"290px\",\n                                height: \"300px\",\n                                class: \"center\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tanviropy/MyGit/CSE299/CSE299/pages/user.js\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {\n                                        children: user.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tanviropy/MyGit/CSE299/CSE299/pages/user.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {\n                                        children: user.typeOfUser\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tanviropy/MyGit/CSE299/CSE299/pages/user.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tanviropy/MyGit/CSE299/CSE299/pages/user.js\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {\n                                children: [\n                                    \"Email: \",\n                                    user.email\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tanviropy/MyGit/CSE299/CSE299/pages/user.js\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {\n                                children: [\n                                    \"RFID: \",\n                                    user.RFID\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tanviropy/MyGit/CSE299/CSE299/pages/user.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {\n                                children: [\n                                    \"P. NO: \",\n                                    user.phoneNumber\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tanviropy/MyGit/CSE299/CSE299/pages/user.js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tanviropy/MyGit/CSE299/CSE299/pages/user.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this)\n                )\n            }, void 0, false, {\n                fileName: \"/Users/tanviropy/MyGit/CSE299/CSE299/pages/user.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/tanviropy/MyGit/CSE299/CSE299/pages/user.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"No User\"\n        }, void 0, false, {\n            fileName: \"/Users/tanviropy/MyGit/CSE299/CSE299/pages/user.js\",\n            lineNumber: 48,\n            columnNumber: 12\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDa0I7QUFFOUI7QUFDYjtBQUNLO0FBRS9CLFNBQVNXLElBQUksR0FBRztJQUNkLE1BQU0sRUFSUixHQVFTQyxLQUFLLEdBUmQsR0FRZ0JDLE9BQU8sTUFBSVgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFckNELGdEQUFTLENBQUMsSUFBTTtRQUNkLENBQUMsVUFBWTtZQUNYLElBQUk7Z0JBQ0YsTUFBTWEsS0FBSyxHQUFHSixxREFBVSxDQUFDLE9BQU8sQ0FBQztnQkFFakMsTUFBTU0sR0FBRyxHQUFHLE1BQU1QLGdEQUFTLENBQUMsQ0FBQyxFQUFFRCxzREFBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNwRFMsT0FBTyxFQUFFO3dCQUFFQyxhQUFhLEVBQUVKLEtBQUs7cUJBQUU7aUJBQ2xDLENBQUM7Z0JBRUZELE9BQU8sQ0FBQ0csR0FBRyxDQUFDRyxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO2FBQ3hCLENBQUMsT0FBT0MsS0FBSyxFQUFFO2dCQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7Z0JBQ2xCLHVCQUF1QixDQUFFO2FBQzNCO1NBQ0YsQ0FBQyxFQUFFLENBQUM7S0FDTixFQUFFO1FBQUNULEtBQUs7S0FBQyxDQUFDLENBQUM7SUFFWixJQUFJQSxLQUFLLEVBQUU7UUFDVCxxQkFDRSw4REFBQ1ksS0FBRztzQkFDRiw0RUFBQ3JCLHlEQUFVOzBCQUNSUyxLQUFLLENBQUNjLEdBQUcsQ0FBQyxDQUFDTixJQUFJLGlCQUNkLDhEQUFDakIsbURBQUk7OzBDQUNILDhEQUFDd0IsS0FBRztnQ0FBQ0MsR0FBRyxFQUFFUixJQUFJLENBQUNTLEtBQUs7Z0NBQUVDLEtBQUssRUFBQyxPQUFPO2dDQUFDQyxNQUFNLEVBQUMsT0FBTztnQ0FBQ0MsS0FBSyxFQUFDLFFBQVE7Ozs7O29DQUFFOzBDQUNuRSw4REFBQzdCLDJEQUFZOztrREFDWCw4REFBQ0EsMERBQVc7a0RBQUVpQixJQUFJLENBQUNjLElBQUk7Ozs7OzRDQUFlO2tEQUN0Qyw4REFBQy9CLHdEQUFTO2tEQUFFaUIsSUFBSSxDQUFDZ0IsVUFBVTs7Ozs7NENBQWE7Ozs7OztvQ0FDM0I7MENBQ2YsOERBQUNqQywyREFBWTs7b0NBQUMsU0FBTztvQ0FBQ2lCLElBQUksQ0FBQ2lCLEtBQUs7Ozs7OztvQ0FBZ0I7MENBQ2hELDhEQUFDbEMsMkRBQVk7O29DQUFDLFFBQU07b0NBQUNpQixJQUFJLENBQUNrQixJQUFJOzs7Ozs7b0NBQWdCOzBDQUM5Qyw4REFBQ25DLDJEQUFZOztvQ0FBQyxTQUFPO29DQUFDaUIsSUFBSSxDQUFDbUIsV0FBVzs7Ozs7O29DQUFnQjs7Ozs7OzRCQUNqRDtnQkFDUixDQUFDOzs7OztvQkFDUzs7Ozs7Z0JBQ1QsQ0FDTjtLQUNILE1BQU07UUFDTCxxQkFBTyw4REFBQ2YsS0FBRztzQkFBQyxTQUFPOzs7OztnQkFBTSxDQUFDO0tBQzNCO0NBQ0Y7QUFFRCxpRUFBZWIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnN1X292aWpvZy8uL3BhZ2VzL3VzZXIuanM/YWEzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEdyaWQsIEltYWdlLCBIZWFkZXIsIExhYmVsIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi91dGlscy9iYXNlVXJsJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmZ1bmN0aW9uIFVzZXIoKSB7XG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KCd0b2tlbicpO1xuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvdjEvdXNlcmAsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFVzZXIocmVzLmRhdGEudXNlcik7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICgnRXJyb3IgU2VhcmNoaW5nIFVzZXJzJyk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSwgW3VzZXJzXSk7XG5cbiAgaWYgKHVzZXJzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDYXJkLkdyb3VwPlxuICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5pbWFnZX0gd2lkdGg9XCIyOTBweFwiIGhlaWdodD1cIjMwMHB4XCIgY2xhc3M9XCJjZW50ZXJcIi8+XG4gICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPnt1c2VyLm5hbWV9PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPnt1c2VyLnR5cGVPZlVzZXJ9PC9DYXJkLk1ldGE+XG4gICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PkVtYWlsOiB7dXNlci5lbWFpbH08L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5SRklEOiB7dXNlci5SRklEfTwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlAuIE5POiB7dXNlci5waG9uZU51bWJlcn08L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJkLkdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPGRpdj5ObyBVc2VyPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJHcmlkIiwiSW1hZ2UiLCJIZWFkZXIiLCJMYWJlbCIsImJhc2VVcmwiLCJheGlvcyIsImNvb2tpZSIsIlVzZXIiLCJ1c2VycyIsInNldFVzZXIiLCJ0b2tlbiIsImdldCIsInJlcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsInVzZXIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJHcm91cCIsIm1hcCIsImltZyIsInNyYyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzcyIsIkNvbnRlbnQiLCJuYW1lIiwiTWV0YSIsInR5cGVPZlVzZXIiLCJlbWFpbCIsIlJGSUQiLCJwaG9uZU51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user.js\n");

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst baseUrl = \"http://localhost:3000\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9iYXNlVXJsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxPQUFPLEdBQUUsdUJBQXVCO0FBRXRDLGlFQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uc3Vfb3Zpam9nLy4vdXRpbHMvYmFzZVVybC5qcz8wN2FmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7XG4iXSwibmFtZXMiOlsiYmFzZVVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/baseUrl.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user.js"));
module.exports = __webpack_exports__;

})();