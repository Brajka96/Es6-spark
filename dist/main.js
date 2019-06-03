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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/js/apiService */ \"./src/js/apiService.js\");\n/* harmony import */ var _src_js_dataParse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/dataParse */ \"./src/js/dataParse.js\");\n/* harmony import */ var _src_js_dataInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/js/dataInfo */ \"./src/js/dataInfo.js\");\n\r\n\r\n\r\n\r\nconst streetsFilterBtn = document.getElementById('ulice-80');\r\nconst streetsLengthBtn = document.getElementById('duzina-ulica');\r\nconst parksAgeBtn = document.getElementById('starost');\r\nconst parksAreaSortBtn = document.getElementById('povrsina');\r\nconst parksTreesSortBtn = document.getElementById('stabla');\r\nconst allStreets = document.getElementById('sve-ulice');\r\nconst allParks = document.getElementById('svi-parkovi');\r\n\r\nObject(_src_js_apiService__WEBPACK_IMPORTED_MODULE_0__[\"fetchData\"])()\r\n  .then(data => {\r\n\r\n    const podaci = Object(_src_js_dataParse__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n    const parkovi = podaci.parkovi;\r\n    const ulice = podaci.ulice;\r\n    const izvjestajPark = _src_js_dataInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"].parks;\r\n    const izvjestajUlica = _src_js_dataInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"].streets;\r\n\r\n    izvjestajPark.printParks(parkovi);\r\n    izvjestajUlica.printStreets(ulice);\r\n\r\n    allParks.addEventListener('click', function() {\r\n      izvjestajPark.printParks(parkovi);\r\n    })\r\n\r\n    allStreets.addEventListener('click', function() {\r\n      izvjestajUlica.printStreets(ulice);\r\n    })\r\n\r\n    parksAgeBtn.addEventListener('click', function() {\r\n      izvjestajPark.prosjecnaStarost(parkovi);\r\n    })\r\n\r\n    parksAreaSortBtn.addEventListener('click', function() {\r\n      izvjestajPark.parkoviPoVelicini(parkovi);\r\n    })\r\n\r\n    parksTreesSortBtn.addEventListener('click', function() {\r\n      izvjestajPark.parkoviPoBrojuDrveca(parkovi);\r\n    })\r\n\r\n    streetsFilterBtn.addEventListener('click', function () {\r\n      izvjestajUlica.streets80(ulice);\r\n    });\r\n\r\n    streetsLengthBtn.addEventListener('click', function () {\r\n      izvjestajUlica.streetsLength(ulice);\r\n    })\r\n\r\n  });\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./model/GradskiElement.js":
/*!*********************************!*\
  !*** ./model/GradskiElement.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GradskiElement {\r\n  constructor(naziv, godina) {\r\n    this.naziv = naziv;\r\n    this.godina = godina;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GradskiElement);\n\n//# sourceURL=webpack:///./model/GradskiElement.js?");

/***/ }),

/***/ "./model/Park.js":
/*!***********************!*\
  !*** ./model/Park.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GradskiElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradskiElement */ \"./model/GradskiElement.js\");\n\r\n\r\nclass Park extends _GradskiElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n  constructor(naziv, godina, povrsina, drvece) {\r\n    super(naziv, godina);\r\n    this.povrsina = povrsina;\r\n    this.drvece = drvece;\r\n    this.gustoca = this.drvece / this.povrsina;\r\n  }\r\n  \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Park);\n\n//# sourceURL=webpack:///./model/Park.js?");

/***/ }),

/***/ "./model/Ulica.js":
/*!************************!*\
  !*** ./model/Ulica.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GradskiElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradskiElement */ \"./model/GradskiElement.js\");\n\r\n\r\nclass Ulica extends _GradskiElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n  constructor(naziv, godina, duzina, klasifikacija = 3) {\r\n    super(naziv, godina);\r\n    this.duzina = duzina;\r\n    this.klasifikacija = klasifikacija;\r\n  }\r\n \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ulica);\n\n//# sourceURL=webpack:///./model/Ulica.js?");

/***/ }),

/***/ "./src/js/apiService.js":
/*!******************************!*\
  !*** ./src/js/apiService.js ***!
  \******************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchData\", function() { return fetchData; });\nconst fetchData = () => fetch('https://cityscapes-masters.herokuapp.com/cityElements')\r\n        .then(resp => resp.json())\r\n        .then(response => response);\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/apiService.js?");

/***/ }),

/***/ "./src/js/dataInfo.js":
/*!****************************!*\
  !*** ./src/js/dataInfo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst parks = (function () {\r\n\r\n    function showParkInfo(park, i) {\r\n        const {naziv, godina, povrsina, drvece, gustoca} = park;\r\n\r\n        const info =\r\n            `<div class=\"card\">\r\n          <div class=\"card-header\">\r\n           <h2 class=\"mb-0\">\r\n           <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#park-${i}\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n              ${naziv}\r\n           </button>\r\n           <span id=\"parks-info-badge\" class=\"badge badge-primary badge-pill park-badge\">${povrsina}km<sup>2</sup></span>\r\n           <span id=\"parks-info-badge\" class=\"badge badge-danger badge-pill park-badge\">drvece: ${drvece}</span>\r\n           </h2>\r\n           </div>\r\n    \r\n           <div id=\"park-${i}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#parkovi\">\r\n           <div class=\"card-body\">\r\n               Park '${naziv}' izgrađen je ${godina} godine. Park je površine ${povrsina}km<sup>2</sup> i ima \r\n               ${drvece} drveca. Gustoća drveća je ${gustoca}\r\n             </div>\r\n            </div>\r\n           </div>`\r\n\r\n        return info;\r\n    }\r\n\r\n    function showParksAvgAge(average) {\r\n        const output = `\r\n          <div class=\"jumbotron jumbotron-fluid\">\r\n           <div class=\"container\">\r\n            <h2 class=\"display-4\">Prosječna starost parkova</h2>\r\n            <p class=\"lead\">${average} godina</p>\r\n           </div>\r\n          </div>`;\r\n\r\n        return output;\r\n    }\r\n\r\n    function izracunajStarost(godina) {\r\n        return new Date().getFullYear() - parseInt(godina);\r\n    }\r\n\r\n    function prosjecnaStarost(parkovi) {\r\n        const average = parkovi.reduce((acc, park) => acc + izracunajStarost(park.godina), 0) / parkovi.length;\r\n\r\n        document.getElementById('parkovi').innerHTML = showParksAvgAge(average)\r\n    }\r\n\r\n    function parkoviPoBrojuDrveca(parkovi) {\r\n        const sorted = [...parkovi].sort((a, b) => b.drvece - a.drvece);\r\n        \r\n        printParks(sorted);\r\n    }\r\n\r\n    function parkoviPoVelicini(parkovi) {\r\n        const sorted = [...parkovi].sort((a, b) => b.povrsina - a.povrsina);\r\n\r\n        printParks(sorted);\r\n    }\r\n\r\n    function printParks(parkovi = []) {\r\n        let output = '';\r\n\r\n        parkovi.forEach((park, i) => output += showParkInfo(park, i))\r\n\r\n        document.getElementById('parkovi').innerHTML = output;\r\n    };\r\n\r\n    return {\r\n        printParks,\r\n        parkoviPoVelicini,\r\n        parkoviPoBrojuDrveca,\r\n        prosjecnaStarost\r\n    }\r\n\r\n})();\r\n\r\nconst streets = (function () {\r\n\r\n    const klasifikacijaUlice = new Map();\r\n    klasifikacijaUlice.set(1, 'prolaz');\r\n    klasifikacijaUlice.set(2, 'mala');\r\n    klasifikacijaUlice.set(3, 'normalna');\r\n    klasifikacijaUlice.set(4, 'velika');\r\n\r\n    function getType(klas) {\r\n        return klasifikacijaUlice.get(klas);\r\n    }\r\n\r\n    function showStreetLengthInfo(ukupna, prosjecna) {\r\n        const output = `\r\n          <div class=\"jumbotron jumbotron-fluid\">\r\n           <div class=\"container\">\r\n            <h2 class=\"display-4\">Dužina ulica</h2>\r\n            <p class=\"lead\">Prosječna: ${prosjecna.toFixed(2)}km</p>\r\n            <p class=\"lead\">UKUPNA: ${ukupna}km</p>\r\n           </div>\r\n          </div>`;\r\n\r\n        return output;\r\n    }\r\n\r\n    function showStreetInfo(ulica, i) {\r\n        const { naziv, godina, duzina, klasifikacija } = ulica;\r\n\r\n        const info =\r\n            `<div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ulica-${i}\"\r\n                  aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                  ${naziv}\r\n                </button>\r\n                </h2>\r\n              </div>\r\n    \r\n              <div id=\"ulica-${i}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#ulice\">\r\n                <div class=\"card-body\">\r\n                 Ulica '${naziv}' izgrađena je ${godina} godine. Ulica je dužine ${duzina}km. \r\n                 Tip ulice: \"${getType(klasifikacija)}\" \r\n                </div>\r\n              </div>\r\n             </div>`\r\n\r\n        return info;\r\n    }\r\n\r\n    function streetsLength(ulice) {\r\n        const ukupna = ulice.reduce((acc, ulica) => acc + ulica.duzina, 0);\r\n        const prosjecna = ukupna / ulice.length;\r\n\r\n        document.getElementById('ulice').innerHTML = showStreetLengthInfo(ukupna, prosjecna);\r\n    }\r\n\r\n    function streets80(ulice) {\r\n        const streets_80 = ulice.filter(ulica => ulica.godina < 1990 && ulica.godina > 1979);\r\n\r\n        printStreets(streets_80);\r\n    }\r\n\r\n    function printStreets(ulice = []) {\r\n        let output = '';\r\n\r\n        ulice.forEach((ulica, i) => output += showStreetInfo(ulica, i));\r\n\r\n        document.getElementById('ulice').innerHTML = output;\r\n    };\r\n\r\n    return {\r\n        printStreets,\r\n        streets80,\r\n        streetsLength\r\n    }\r\n})()\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    parks,\r\n    streets\r\n});\n\n//# sourceURL=webpack:///./src/js/dataInfo.js?");

/***/ }),

/***/ "./src/js/dataParse.js":
/*!*****************************!*\
  !*** ./src/js/dataParse.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_Park__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/Park */ \"./model/Park.js\");\n/* harmony import */ var _model_Ulica__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/Ulica */ \"./model/Ulica.js\");\n\r\n\r\n\r\nconst parseParks = (data = []) => {\r\n    const parks = [];\r\n    data.forEach(element => {\r\n        parks.push(new _model_Park__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element.name, element.year, element.area, element.treesCount));\r\n    });\r\n    return parks;\r\n};\r\n\r\nconst parseStreets = (data = []) => {\r\n    const streets = [];\r\n    data.forEach(element => {\r\n        streets.push(new _model_Ulica__WEBPACK_IMPORTED_MODULE_1__[\"default\"](element.name, element.year, element.streetLength, element.size))\r\n    });\r\n    return streets;\r\n};\r\n\r\nconst parseData = (data = {}) => {\r\n    const parsedData = {};\r\n\r\n    if (data.parkovi) {\r\n        parsedData.parkovi = parseParks(data.parkovi);\r\n    }\r\n    if (data.ulice) {\r\n        parsedData.ulice = parseStreets(data.ulice);\r\n    }\r\n\r\n    return parsedData;\r\n};\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseData);\n\n//# sourceURL=webpack:///./src/js/dataParse.js?");

/***/ })

/******/ });