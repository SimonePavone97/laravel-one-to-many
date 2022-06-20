/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/deleteConfirm.js":
/*!***************************************!*\
  !*** ./resources/js/deleteConfirm.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var deleteForms = document.querySelectorAll('.deleteForm');\nconsole.log(deleteForms);\ndeleteForms.forEach(function (form) {\n  var title = form.getAttribute('data-name');\n  form.addEventListener('submit', function (el) {\n    el.preventDefault();\n    var accept = confirm(\"Sei sicuro di eliminare \".concat(title, \"?\"));\n\n    if (accept) {\n      el.target.submit();\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlQ29uZmlybS5qcz9hMTc0Il0sIm5hbWVzIjpbImRlbGV0ZUZvcm1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJmb3JtIiwidGl0bGUiLCJnZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZWwiLCJwcmV2ZW50RGVmYXVsdCIsImFjY2VwdCIsImNvbmZpcm0iLCJ0YXJnZXQiLCJzdWJtaXQiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixDQUFwQjtBQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosV0FBWjtBQUVBQSxXQUFXLENBQUNLLE9BQVosQ0FBb0IsVUFBQUMsSUFBSSxFQUFJO0VBRXhCLElBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxZQUFMLENBQWtCLFdBQWxCLENBQWQ7RUFFQUYsSUFBSSxDQUFDRyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxVQUFDQyxFQUFELEVBQU87SUFDbkNBLEVBQUUsQ0FBQ0MsY0FBSDtJQUVBLElBQU1DLE1BQU0sR0FBR0MsT0FBTyxtQ0FBNEJOLEtBQTVCLE9BQXRCOztJQUVBLElBQUlLLE1BQUosRUFBWTtNQUNSRixFQUFFLENBQUNJLE1BQUgsQ0FBVUMsTUFBVjtJQUNIO0VBQ0osQ0FSRDtBQVNILENBYkQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVsZXRlQ29uZmlybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlbGV0ZUZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZUZvcm0nKTtcclxuY29uc29sZS5sb2coZGVsZXRlRm9ybXMpXHJcblxyXG5kZWxldGVGb3Jtcy5mb3JFYWNoKGZvcm0gPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB0aXRsZSA9IGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlbCk9PiB7XHJcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWNjZXB0ID0gY29uZmlybShgU2VpIHNpY3VybyBkaSBlbGltaW5hcmUgJHt0aXRsZX0/YCk7XHJcblxyXG4gICAgICAgIGlmIChhY2NlcHQpIHtcclxuICAgICAgICAgICAgZWwudGFyZ2V0LnN1Ym1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/deleteConfirm.js\n");

/***/ }),

/***/ 2:
/*!*********************************************!*\
  !*** multi ./resources/js/deleteConfirm.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\simon\Desktop\Boolean\laravel-one-to-many\resources\js\deleteConfirm.js */"./resources/js/deleteConfirm.js");


/***/ })

/******/ });