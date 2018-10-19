(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Features</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Auditorias\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <a class=\"dropdown-item\" [routerLink]=\"['audits/areas']\">areas</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n  </div>\r\n</nav>\r\n<!--CONTENIDO-->\r\n<div class=\"container\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'controlinterno-cliente';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_audits_areas_detail_areas_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/audits/areas-detail/areas-detail.component */ "./src/app/components/audits/areas-detail/areas-detail.component.ts");
/* harmony import */ var _components_audits_question_new_question_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/audits/question-new/question-new.component */ "./src/app/components/audits/question-new/question-new.component.ts");
/* harmony import */ var _components_audits_question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/audits/question-detail/question-detail.component */ "./src/app/components/audits/question-detail/question-detail.component.ts");
/* harmony import */ var _components_audits_question_update_question_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/audits/question-update/question-update.component */ "./src/app/components/audits/question-update/question-update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_audits_areas_detail_areas_detail_component__WEBPACK_IMPORTED_MODULE_5__["AreasDetailComponent"],
                _components_audits_question_new_question_new_component__WEBPACK_IMPORTED_MODULE_6__["QuestionNewComponent"],
                _components_audits_question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_7__["QuestionDetailComponent"],
                _components_audits_question_update_question_update_component__WEBPACK_IMPORTED_MODULE_8__["QuestionUpdateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["APP_ROUTING"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutingProviders, APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_audits_areas_detail_areas_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/audits/areas-detail/areas-detail.component */ "./src/app/components/audits/areas-detail/areas-detail.component.ts");
/* harmony import */ var _components_audits_question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/audits/question-detail/question-detail.component */ "./src/app/components/audits/question-detail/question-detail.component.ts");
/* harmony import */ var _components_audits_question_update_question_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/audits/question-update/question-update.component */ "./src/app/components/audits/question-update/question-update.component.ts");
/* harmony import */ var _components_audits_question_new_question_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/audits/question-new/question-new.component */ "./src/app/components/audits/question-new/question-new.component.ts");

//component




var appRoutes = [
    { path: 'audits/areas', component: _components_audits_areas_detail_areas_detail_component__WEBPACK_IMPORTED_MODULE_1__["AreasDetailComponent"] },
    { path: 'audits/question-new', component: _components_audits_question_new_question_new_component__WEBPACK_IMPORTED_MODULE_4__["QuestionNewComponent"] },
    { path: 'audits/question/:id', component: _components_audits_question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_2__["QuestionDetailComponent"] },
    { path: 'audits/question-update/:id', component: _components_audits_question_update_question_update_component__WEBPACK_IMPORTED_MODULE_3__["QuestionUpdateComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
var appRoutingProviders = [];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/audits/areas-detail/areas-detail.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/audits/areas-detail/areas-detail.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/audits/areas-detail/areas-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/audits/areas-detail/areas-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  areas-detail works!\r\n</p>\r\nasdasadsadas<br>\r\nasdasadsadas<br>\r\nasdasadsadas<br>\r\nasdasadsadas<br>\r\nasdasadsadas<br>\r\nasdasadsadas<br>\r\n"

/***/ }),

/***/ "./src/app/components/audits/areas-detail/areas-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/audits/areas-detail/areas-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: AreasDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreasDetailComponent", function() { return AreasDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AreasDetailComponent = /** @class */ (function () {
    function AreasDetailComponent() {
    }
    AreasDetailComponent.prototype.ngOnInit = function () {
    };
    AreasDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-areas-detail',
            template: __webpack_require__(/*! ./areas-detail.component.html */ "./src/app/components/audits/areas-detail/areas-detail.component.html"),
            styles: [__webpack_require__(/*! ./areas-detail.component.css */ "./src/app/components/audits/areas-detail/areas-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AreasDetailComponent);
    return AreasDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/audits/question-detail/question-detail.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/audits/question-detail/question-detail.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/audits/question-detail/question-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/audits/question-detail/question-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  question-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/audits/question-detail/question-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/audits/question-detail/question-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: QuestionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDetailComponent", function() { return QuestionDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionDetailComponent = /** @class */ (function () {
    function QuestionDetailComponent() {
    }
    QuestionDetailComponent.prototype.ngOnInit = function () {
    };
    QuestionDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-detail',
            template: __webpack_require__(/*! ./question-detail.component.html */ "./src/app/components/audits/question-detail/question-detail.component.html"),
            styles: [__webpack_require__(/*! ./question-detail.component.css */ "./src/app/components/audits/question-detail/question-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionDetailComponent);
    return QuestionDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/audits/question-new/question-new.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/audits/question-new/question-new.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/audits/question-new/question-new.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/audits/question-new/question-new.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  question-new works!\r\n  {{page_title}}\r\n</p>\r\n\r\n<form #quetionNew=\"ngForm\" (ngSubmit)=\"onSubmit(questionNew)\" class=\"col-md5\">\r\n  <p>\r\n    <span for=\"name\" >{{page_name}}</span>\r\n    <input type=\"text\" id=\"name\" name=\"name\" #title=\"ngModel\" [(ngModel)]=\"auditquestion.name\" class=\"form-control\" required/>\r\n    <span *ngIf=\"!name.valid && name.touched\"> Nombre Invalido</span>\r\n\r\n  </p>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/audits/question-new/question-new.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/audits/question-new/question-new.component.ts ***!
  \**************************************************************************/
/*! exports provided: QuestionNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionNewComponent", function() { return QuestionNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionNewComponent = /** @class */ (function () {
    function QuestionNewComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.page_title = 'Nueva pregunta';
        this.page_name = 'Nueva pregunta 1';
    }
    QuestionNewComponent.prototype.ngOnInit = function () {
    };
    QuestionNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-new',
            template: __webpack_require__(/*! ./question-new.component.html */ "./src/app/components/audits/question-new/question-new.component.html"),
            styles: [__webpack_require__(/*! ./question-new.component.css */ "./src/app/components/audits/question-new/question-new.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QuestionNewComponent);
    return QuestionNewComponent;
}());



/***/ }),

/***/ "./src/app/components/audits/question-update/question-update.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/audits/question-update/question-update.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/audits/question-update/question-update.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/audits/question-update/question-update.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  question-update works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/audits/question-update/question-update.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/audits/question-update/question-update.component.ts ***!
  \********************************************************************************/
/*! exports provided: QuestionUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionUpdateComponent", function() { return QuestionUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionUpdateComponent = /** @class */ (function () {
    function QuestionUpdateComponent() {
    }
    QuestionUpdateComponent.prototype.ngOnInit = function () {
    };
    QuestionUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-update',
            template: __webpack_require__(/*! ./question-update.component.html */ "./src/app/components/audits/question-update/question-update.component.html"),
            styles: [__webpack_require__(/*! ./question-update.component.css */ "./src/app/components/audits/question-update/question-update.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionUpdateComponent);
    return QuestionUpdateComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\control_cliente\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map