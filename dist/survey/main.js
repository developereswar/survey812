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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return Components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_typetest_typetest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/typetest/typetest.component */ "./src/app/pages/typetest/typetest.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/default/default.component */ "./src/app/layouts/default/default.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// loyout

var routes = [
    {
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_9__["DefaultComponent"],
        path: '',
        children: [
            {
                path: '',
                component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            },
            {
                path: 'surveytest',
                component: _pages_typetest_typetest_component__WEBPACK_IMPORTED_MODULE_4__["TypetestComponent"]
            },
            {
                path: 'dashboard',
                component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
            }
        ]
    },
    {
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        path: 'register'
    },
    {
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        path: 'login'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var Components = [
    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_9__["DefaultComponent"],
    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
    _pages_typetest_typetest_component__WEBPACK_IMPORTED_MODULE_4__["TypetestComponent"],
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
    _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app {\n  position: relative;\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vzd2FyL1Byb2plY3Qvc3J1dmV5LW1hc3Rlci9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59Il19 */"

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["Components"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-dark\">\n        <p> We have {{workers}} peoples</p>\n        <p class=\"h6\"> &copy; All right Reversed.<span class=\"text-green ml-2\" >Survey</span></p>\n      </div>\n    </div>\t\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: relative;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vzd2FyL1Byb2plY3Qvc3J1dmV5LW1hc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQjtFQUNsQixlQUFhO0VBQ2IsUUFBTTtFQUNOLFNBQU87RUFDUCxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIGxlZnQ6MDtcbiAgICByaWdodDowO1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        var a = (Math.floor(100000 + Math.random() * 900000)).toString();
        a = a.substring(-2);
        this.workers = a;
    };
    FooterComponent.prototype.onRightClick = function () {
        return false;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\" (contextmenu)=\"onRightClick($event)\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <!-- <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li> -->\n    </ul>\n    <ul  class=\"navbar-nav my-2 my-lg-0\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\"><button class=\"btn btn-secondary my-2 my-sm-0\" [routerLink]=\"['/login']\"  type=\"button\">Login</button></a>\n    </li>\n    <!-- <li class=\"nav-item\">\n      <a class=\"nav-link\"><button class=\"btn btn-secondary my-2 my-sm-0\"  [routerLink]=\"['/register']\" type=\"button\">Regsiter</button></a>\n    </li> -->\n  </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onRightClick = function () {
        return false;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layouts/default/default.component.html":
/*!********************************************************!*\
  !*** ./src/app/layouts/default/default.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"content\" (contextmenu)=\"onRightClick($event)\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layouts/default/default.component.scss":
/*!********************************************************!*\
  !*** ./src/app/layouts/default/default.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  position: relative;\n  width: 100%;\n  padding: 15px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vzd2FyL1Byb2plY3Qvc3J1dmV5LW1hc3Rlci9zcmMvYXBwL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxrQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOjE1cHggMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layouts/default/default.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
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

var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent.prototype.onRightClick = function () {
        return false;
    };
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/layouts/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.scss */ "./src/app/layouts/default/default.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <!-- Nav tabs -->\n        <div class=\"card border-primary colms\">\n            <div class=\"card-header \">\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link \" data-toggle=\"tab\" href=\"#home\">Your Account</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#menu1\">Hits</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu2\">Qualifications</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane \" id=\"home\">\n                        <div class=\" emp-profile\">\n                            <div class=\"card border-secondary mb-3\">\n                                <div class=\"card-header\">Total Earnings</div>\n                                <div class=\"card-body\">\n                                    <table class=\"table table-hover\">\n                                        <thead>\n                                            <tr class=\"table-info\">\n                                                <th>\n                                                    Rewards You Have Earned\n                                                </th>\n                                                <th>\n                                                    Value\n                                                </th>\n                                            </tr>\n\n                                        </thead>\n                                        <tr class=\"table-light\">\n                                            <td>\n                                                Approved\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n\n                                        </tr>\n                                        <tr class=\"table-light\">\n                                            <td>\n                                                Approved\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n\n                                        </tr>\n                                        <tr class=\"table-light\">\n                                            <td>\n                                                Approved\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n\n                                        </tr>\n\n                                    </table>\n                                </div>\n                            </div>\n                            <div class=\"card border-secondary mb-3\">\n                                <div class=\"card-header\">Your Hit Status</div>\n                                <div class=\"card-body\">\n                                    <table class=\"table table-hover\">\n                                        <thead>\n                                            <tr class=\"table-info\">\n                                                <th>\n                                                    Date\n                                                </th>\n                                                <th>\n                                                    Submitted\n                                                </th>\n                                                <th>\n                                                    Approved\n                                                </th>\n                                                <th>\n                                                    Rejected\n                                                </th>\n                                                <th>\n                                                    Pending\n                                                </th>\n                                                <th>\n                                                    Earnings\n                                                </th>\n                                            </tr>\n\n                                        </thead>\n                                        <tr class=\"table-light\">\n                                            <td>\n                                                Approved\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                        </tr>\n                                        <tr class=\"table-light\">\n                                            <td>\n                                                Approved\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                        </tr>\n                                        <tr class=\"table-light\">\n                                            <td>\n                                                Approved\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                            <td>\n                                                120\n                                            </td>\n                                        </tr>\n\n                                    </table>\n                                </div>\n                            </div>\n\n\n                        </div>\n                    </div>\n                    <div class=\"tab-pane  active\" id=\"menu1\">\n\n                        <div class=\"col-one\">\n                            <table class=\"table table-bordered\">\n                                <thead class=\"table-dark\">\n                                    <tr>\n                                        <th>Date</th>\n                                        <th>Submitted</th>\n                                        <th>Approved</th>\n                                        <th>Rejected</th>\n                                        <th>Pending</th>\n                                        <th>Earnings</th>\n                                    </tr>\n                                </thead>\n                                <tbody class=\"table-light\">\n                                    <tr>\n                                        <td colspan=\"6\" class=\"text-center\">\n                                            You have no HIT activity within the last 45 days\n                                        </td>\n                                    </tr>\n                                    <!-- <tr>\n                                            <td>John</td>\n                                            <td>Doe</td>\n                                            <td>john@example.com</td>\n                                            <td>john@example.com</td>\n                                            <td>john@example.com</td>\n                                            <td>john@example.com</td>\n                                          </tr> -->\n\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"col-two\">\n                            <h4>\n                                HITs Overview\n                            </h4>\n                            <ul class=\"list-group\">\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                    Approved\n                                    <span class=\"badge badge-primary badge-pill\">0</span>\n                                </li>\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                    Approval Rate\n                                    <span class=\"badge badge-primary badge-pill\">0.00%</span>\n                                </li>\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                    Pending\n                                    <span class=\"badge badge-primary badge-pill\">0</span>\n                                </li>\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                    Rejected\n                                    <span class=\"badge badge-primary badge-pill\">0</span>\n                                </li>\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                    Rejection Rate\n                                    <span class=\"badge badge-primary badge-pill\">0.00%</span>\n                                </li>\n                            </ul>\n\n                        </div>\n                    </div>\n                    <div class=\"tab-pane \" id=\"menu2\">\n                        <table class=\"table table-bordered\">\n                            <thead class=\"table-dark\">\n                                <tr>\n                                    <th>Qualification</th>\n                                    <th>Your value</th>\n                                    <th>Author</th>\n                                </tr>\n                            </thead>\n                            <tbody class=\"table-light\">\n                                <tr>\n                                    <td>\n                                        <span style=\"cursor:pointer\" data-toggle=\"collapse\" data-target=\"#demo\">\n                                                HIT abandonment rate (%)\n                                            </span>\n                                    </td>\n                                    <td>\n                                        <span style=\"cursor:pointer\" data-toggle=\"collapse\" data-target=\"#demo\">\n                                        0\n                                    </span>\n                                    </td>\n                                    <td>\n                                        <span style=\"cursor:pointer\" data-toggle=\"collapse\" data-target=\"#demo\">\n                                                Amazon Mechanical Turk\n                                            </span>\n                                    </td>\n\n                                </tr>\n                                <tr id=\"demo\" class=\"collapse cols\">\n                                    <td > \n                                            Description\n                                            This Qualification is generated automatically and reflects the percentage of HITs which you have accepted but which have expired before you submitted an answer divided by the total number of HITs you have accepted. Your score is a value between 0 and 100. A score of 0 indicates that you have not allowed any HITs to expire before you have submitted an answer for them.\n                                    </td>\n                                    <td>\n                                            Assigned Date\n                                            12/03/2018\n                                          \n                                    </td>\n                                    <td>\n                                          \n                                            Retry Available\n                                            No\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <!-- Tab panes -->\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-content {\n  width: 100%; }\n\n.colms {\n  width: 100%;\n  margin: 0;\n  background: #f9f9f9; }\n\n.active {\n  background: transparent !important;\n  border-top: 0px;\n  border-left: 0;\n  border-right: 0; }\n\n.nav-tabs {\n  border-bottom: none !important; }\n\n.nav-tabs li a {\n  border: none !important; }\n\n.profile-img {\n  text-align: center; }\n\n.profile-img img {\n  width: 70%;\n  height: 100%; }\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  margin-top: -20%;\n  width: 70%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background: #212529b8; }\n\n.profile-img .file input {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n  top: 0; }\n\n.profile-head h5 {\n  color: #333; }\n\n.profile-head h6 {\n  color: #0062cc; }\n\n.profile-edit-btn {\n  border: none;\n  border-radius: 1.5rem;\n  width: 70%;\n  padding: 2%;\n  font-weight: 600;\n  color: #6c757d;\n  cursor: pointer; }\n\n.proile-rating {\n  font-size: 12px;\n  color: #818182;\n  margin-top: 5%; }\n\n.proile-rating span {\n  color: #495057;\n  font-size: 15px;\n  font-weight: 600; }\n\n.profile-head .nav-tabs {\n  margin-bottom: 5%; }\n\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none; }\n\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #0062cc; }\n\n.profile-work {\n  padding: 14%;\n  margin-top: -15%; }\n\n.profile-work p {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin-top: 10%; }\n\n.profile-work a {\n  text-decoration: none;\n  color: #495057;\n  font-weight: 600;\n  font-size: 14px; }\n\n.profile-work ul {\n  list-style: none; }\n\n.profile-tab label {\n  font-weight: 600; }\n\n.profile-tab p {\n  font-weight: 600;\n  color: #0062cc; }\n\n.container-fluid {\n  width: 90%;\n  margin: 0 auto; }\n\n.col-one {\n  float: left;\n  width: 70%;\n  padding: 0px 15px; }\n\n.col-two {\n  float: left;\n  width: 30%; }\n\n.badge {\n  padding: 7px;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vzd2FyL1Byb2plY3Qvc3J1dmV5LW1hc3Rlci9zcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSxZQUFXLEVBQUc7O0FBRTNCO0VBQ0ksWUFBVztFQUNYLFVBQVM7RUFDVCxvQkFBbUIsRUFFdEI7O0FBQ0Q7RUFFSSxtQ0FBa0M7RUFDbEMsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSwrQkFBOEIsRUFDakM7O0FBRUQ7RUFDSSx3QkFBc0IsRUFDekI7O0FBVUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxXQUFVO0VBQ1YsYUFBWSxFQUNmOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsV0FBVTtFQUNWLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixzQkFBcUIsRUFDeEI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFNBQVE7RUFDUixPQUFNLEVBQ1Q7O0FBQ0Q7RUFDSSxZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixXQUFVO0VBQ1YsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGVBQWM7RUFDZCxlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksZUFBYztFQUNkLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksa0JBQWdCLEVBQ25COztBQUNEO0VBQ0ksaUJBQWU7RUFDZixhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osaUNBQStCLEVBQ2xDOztBQUNEO0VBQ0ksYUFBWTtFQUNaLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGlCQUFnQjtFQUNoQixnQkFBZSxFQUNsQjs7QUFDRDtFQUNJLHNCQUFxQjtFQUNyQixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLGVBQWMsRUFDakI7O0FBRUQ7RUFFSSxXQUFVO0VBQ1YsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxXQUFVO0VBQ1Ysa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVztFQUNYLFdBQVUsRUFDYjs7QUFFRDtFQUNJLGFBQVk7RUFDWixnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLWNvbnRlbnR7d2lkdGg6IDEwMCU7fVxuXG4uY29sbXN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgXG59XG4uYWN0aXZle1xuICAgXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wOiAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuXG4ubmF2LXRhYnN7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmF2LXRhYnMgbGkgYXtcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xufVxuXG5cbi5lbXAtcHJvZmlsZXtcbiAgICAvLyBwYWRkaW5nOiAzJTtcbiAgICAvLyBtYXJnaW4tdG9wOiAzJTtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5wcm9maWxlLWltZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWcgaW1ne1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnByb2ZpbGUtaW1nIC5maWxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAtMjAlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICMyMTI1MjliODtcbn1cbi5wcm9maWxlLWltZyAuZmlsZSBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xufVxuLnByb2ZpbGUtaGVhZCBoNXtcbiAgICBjb2xvcjogIzMzMztcbn1cbi5wcm9maWxlLWhlYWQgaDZ7XG4gICAgY29sb3I6ICMwMDYyY2M7XG59XG4ucHJvZmlsZS1lZGl0LWJ0bntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvaWxlLXJhdGluZ3tcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM4MTgxODI7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG4ucHJvaWxlLXJhdGluZyBzcGFue1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnN7XG4gICAgbWFyZ2luLWJvdHRvbTo1JTtcbn1cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIC5uYXYtbGlua3tcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZXtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzAwNjJjYztcbn1cbi5wcm9maWxlLXdvcmt7XG4gICAgcGFkZGluZzogMTQlO1xuICAgIG1hcmdpbi10b3A6IC0xNSU7XG59XG4ucHJvZmlsZS13b3JrIHB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjODE4MTgyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuLnByb2ZpbGUtd29yayBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm9maWxlLXdvcmsgdWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5wcm9maWxlLXRhYiBsYWJlbHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnByb2ZpbGUtdGFiIHB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwNjJjYztcbn1cblxuLmNvbnRhaW5lci1mbHVpZHtcbiAgICAvLyBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29sLW9uZXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4uY29sLXR3b3tcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMzAlO1xufVxuXG4uYmFkZ2V7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-404\">\n  <div class=\"error-code m-b-10 m-t-20\">Get the answers you need <i class=\"fa fa-warning\"></i></div>\n  <h2 class=\"font-bold\">Oops 404! That page can’t be found.</h2>\n\n  <div class=\"error-desc\">\n      Sorry, but the page you are looking for was either not found or does not exist. .\n      <div><br/>\n      \n          <a [routerLink]=\"['/surveytest']\"  class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-home\"></span> Go back to Homepage</a>\n          &nbsp;\n          <a  [routerLink]=\"['/surveytest']\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-home\"></span> Let's Start Test</a>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-404 {\n  margin: 26.7vh auto;\n  text-align: center; }\n\n.error-404 .error-code {\n  bottom: 60%;\n  color: #313E52;\n  font-size: 5rem;\n  line-height: 100px;\n  font-weight: bold; }\n\n.error-404 .error-desc {\n  font-size: 1rem;\n  color: #647788; }\n\n.error-404 .m-b-10 {\n  margin-bottom: 10px !important; }\n\n.error-404 .m-b-20 {\n  margin-bottom: 20px !important; }\n\n.error-404 .m-t-20 {\n  margin-top: 20px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vzd2FyL1Byb2plY3Qvc3J1dmV5LW1hc3Rlci9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsZUFBYztFQUNkLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsZUFBYyxFQUNmOztBQUNEO0VBQ0UsK0JBQTZCLEVBQzlCOztBQUNEO0VBQ0UsK0JBQTZCLEVBQzlCOztBQUNEO0VBQ0UsNEJBQTBCLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLTQwNCB7XG4gICAgbWFyZ2luOiAyNi43dmggYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmVycm9yLTQwNCAuZXJyb3ItY29kZSB7XG4gICAgYm90dG9tOiA2MCU7XG4gICAgY29sb3I6ICMzMTNFNTI7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuZXJyb3ItNDA0IC5lcnJvci1kZXNjIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICM2NDc3ODg7XG4gIH1cbiAgLmVycm9yLTQwNCAubS1iLTEwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4IWltcG9ydGFudDtcbiAgfVxuICAuZXJyb3ItNDA0IC5tLWItMjAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHghaW1wb3J0YW50O1xuICB9XG4gIC5lcnJvci00MDQgLm0tdC0yMCB7XG4gICAgbWFyZ2luLXRvcDogMjBweCFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\n  </app-header>\n  <div class=\"reg bg-success\">\n    <div class=\"container\">\n      <div class=\"row main\">\n        <div class=\"main-login main-center\">\n          <h5>Sign up Your Account.</h5>\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n              <div class=\"form-group\">\n                <label class=\"label\">Email Id</label>\n                <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" name=\"email\" placeholder=\"Username/Email\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">\n                      <i class=\"mdi mdi-check-circle-outline\"></i>\n                    </span>\n                  </div>\n                </div>\n                <span class=\"alerts\" *ngIf=\"!loginForm.controls['email'].valid && loginForm.controls['email'].touched\">Email\n                  or Username is required!</span><br />\n              </div>\n              <div class=\"form-group\">\n                <label class=\"label\">Password</label>\n                <div class=\"input-group\">\n                  <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" placeholder=\"*********\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">\n                      <i class=\"mdi mdi-check-circle-outline\"></i>\n                    </span>\n                  </div>\n                </div>\n                <span class=\"alerts\" *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].touched\">Password\n                  is required!</span>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"submit\" name=\"submit\" [disabled]=\"!loginForm.valid\"  data-dismiss=\"modalclose\"\n                  class=\"btn btn-primary submit-btn btn-block\" value=\"Login\">\n              </div>\n    \n              <div class=\"text-block text-center my-3\">\n                <span class=\"text-small font-weight-semibold\">Not a member ?</span>\n                <a [routerLink]=\"['/register']\" data-dismiss=\"modal\" class=\"text-black text-small\">Create new account</a>\n                <P>\n                  <span class=\"alerts\">{{error}}</span> <br />\n    \n                </P>\n              </div>\n            </form>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reg {\n  height: 100vh; }\n\n.main {\n  padding: 10% 15px;\n  margin: auto; }\n\nh1.title {\n  font-size: 50px;\n  font-family: 'Passion One', cursive;\n  font-weight: 400; }\n\nhr {\n  width: 10%;\n  color: #fff; }\n\n.form-group {\n  margin-bottom: 15px; }\n\nlabel {\n  margin-bottom: 15px; }\n\ninput,\ninput::-webkit-input-placeholder {\n  font-size: 11px;\n  padding-top: 3px; }\n\n.form-control {\n  height: auto !important;\n  padding: 8px 12px !important; }\n\n.input-group {\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.21) !important; }\n\n#button {\n  border: 1px solid #ccc;\n  margin-top: 28px;\n  padding: 6px 12px;\n  text-shadow: 0 1px #fff;\n  cursor: pointer;\n  border-radius: 3px 3px;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0); }\n\n.main-center {\n  width: 400px;\n  margin-top: 30px;\n  margin: 0 auto;\n  padding: 10px 40px;\n  background: #ececec;\n  color: #333;\n  text-shadow: none;\n  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.31); }\n\nspan.input-group-addon i {\n  color: #009edf;\n  font-size: 17px; }\n\n.login-button {\n  margin-top: 5px; }\n\n.login-register {\n  font-size: 11px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vzd2FyL1Byb2plY3Qvc3J1dmV5LW1hc3Rlci9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBYSxFQUtoQjs7QUFFRDtFQUNJLGtCQUFnQjtFQUVoQixhQUFXLEVBQ2Q7O0FBRUQ7RUFDRyxnQkFBZTtFQUNmLG9DQUFtQztFQUNuQyxpQkFBZ0IsRUFDbEI7O0FBRUQ7RUFDRyxXQUFVO0VBQ1YsWUFBVyxFQUNiOztBQUVEO0VBQ0csb0JBQW1CLEVBQ3JCOztBQUVEO0VBQ0csb0JBQW1CLEVBQ3JCOztBQUVEOztFQUVHLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ2xCOztBQWFEO0VBQ0csd0JBQXNCO0VBQ3pCLDZCQUE0QixFQUMzQjs7QUFDRDtFQUdHLDJEQUFzRCxFQUN4RDs7QUFDRDtFQUNHLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBRWpCLHdCQUF1QjtFQUN2QixnQkFBZTtFQUdmLHVCQUFzQjtFQVd0QixtSEFBa0gsRUFDcEg7O0FBQ0Q7RUFDRyxhQUFXO0VBQ1YsaUJBQWdCO0VBQ2hCLGVBQWM7RUFFZixtQkFBa0I7RUFDbEIsb0JBQWtCO0VBQ2QsWUFBVztFQUNmLGtCQUFpQjtFQUdwQixnREFBNEMsRUFFM0M7O0FBQ0Q7RUFDRyxlQUFjO0VBQ2QsZ0JBQWUsRUFDakI7O0FBRUQ7RUFDRyxnQkFBZSxFQUNqQjs7QUFFRDtFQUNHLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yZWd7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vIGJhY2tncm91bmQ6dXJsKGh0dHBzOi8vaS55dGltZy5jb20vdmkvNGtmWGphdGdlRVUvbWF4cmVzZGVmYXVsdC5qcGcpO1xuICAgIC8vIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgIC8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWFpbntcbiAgICBwYWRkaW5nOjEwJSAxNXB4O1xuICAgXG4gICAgbWFyZ2luOmF1dG87XG59XG5cbmgxLnRpdGxlIHsgXG4gICBmb250LXNpemU6IDUwcHg7XG4gICBmb250LWZhbWlseTogJ1Bhc3Npb24gT25lJywgY3Vyc2l2ZTsgXG4gICBmb250LXdlaWdodDogNDAwOyBcbn1cblxuaHJ7XG4gICB3aWR0aDogMTAlO1xuICAgY29sb3I6ICNmZmY7XG59XG5cbi5mb3JtLWdyb3Vwe1xuICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxubGFiZWx7XG4gICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5pbnB1dCxcbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgIGZvbnQtc2l6ZTogMTFweDtcbiAgIHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbi8vIC5tYWluLWxvZ2lue1xuLy8gIFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgICAvKiBzaGFkb3dzIGFuZCByb3VuZGVkIGJvcmRlcnMgKi9cbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbi8vICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4vLyAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4vLyAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuXG4vLyB9XG4uZm9ybS1jb250cm9sIHtcbiAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XG5wYWRkaW5nOiA4cHggMTJweCAhaW1wb3J0YW50O1xufVxuLmlucHV0LWdyb3VwIHtcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4yMSkhaW1wb3J0YW50O1xuICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjIxKSFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjIxKSFpbXBvcnRhbnQ7XG59XG4jYnV0dG9uIHtcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAvLyBjb2xvcjogIzY2NjtcbiAgIHRleHQtc2hhZG93OiAwIDFweCAjZmZmO1xuICAgY3Vyc29yOiBwb2ludGVyO1xuICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHggM3B4O1xuICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHggM3B4O1xuICAgYm9yZGVyLXJhZGl1czogM3B4IDNweDtcbiAgIC8vIC1tb3otYm94LXNoYWRvdzogMCAxcHggI2ZmZiBpbnNldCwgMCAxcHggI2RkZDtcbiAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggI2ZmZiBpbnNldCwgMCAxcHggI2RkZDtcbiAgIC8vIGJveC1zaGFkb3c6IDAgMXB4ICNmZmYgaW5zZXQsIDAgMXB4ICNkZGQ7XG4gICAvLyBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgLy8gYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1IDAlLCAjZWVlZWVlIDEwMCUpO1xuICAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgI2Y1ZjVmNSksIGNvbG9yLXN0b3AoMTAwJSwgI2VlZWVlZSkpO1xuICAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1IDAlLCAjZWVlZWVlIDEwMCUpO1xuICAgLy8gYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSAwJSwgI2VlZWVlZSAxMDAlKTtcbiAgIC8vIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1IDAlLCAjZWVlZWVlIDEwMCUpO1xuICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSAwJSwgI2VlZWVlZSAxMDAlKTtcbiAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmNWY1ZjUnLCBlbmRDb2xvcnN0cj0nI2VlZWVlZScsIEdyYWRpZW50VHlwZT0wKTtcbn1cbi5tYWluLWNlbnRlcntcbiAgIHdpZHRoOjQwMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLy8gbWF4LXdpZHRoOiAxMHJlbTs7XG4gICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gICBiYWNrZ3JvdW5kOiNlY2VjZWM7XG4gICAgICAgY29sb3I6ICMzMzM7XG4gICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4zMSk7XG4tbW96LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMzEpO1xuYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4zMSk7XG5cbn1cbnNwYW4uaW5wdXQtZ3JvdXAtYWRkb24gaSB7XG4gICBjb2xvcjogIzAwOWVkZjtcbiAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmxvZ2luLWJ1dHRvbntcbiAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmxvZ2luLXJlZ2lzdGVye1xuICAgZm9udC1zaXplOiAxMXB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services.service */ "./src/app/services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, serv) {
        this.fb = fb;
        this.serv = serv;
        this.loginForm = this.fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var authorData = this.loginForm.value;
        this.serv.login(authorData).subscribe(function (data) {
            console.log(data);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\n</app-header>\n<div class=\"reg bg-success\">\n\t<div class=\"container\">\n\t\t<div class=\"row main\">\n\t\t\t<div class=\"main-login main-center\">\n\t\t\t\t<h5>Sign up Your Account.</h5>\n\t\t\t\t<form class=\"\" [formGroup]=\"RegisterForm\" (ngSubmit)=\"register()\">\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\" class=\"cols-sm-2 control-label\">Your Name</label>\n\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" id=\"name\" placeholder=\"Enter your Name\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"alerts\" *ngIf=\"!RegisterForm.controls['name'].valid && RegisterForm.controls['name'].touched\">Name is required!</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email\" class=\"cols-sm-2 control-label\">Your Email</label>\n\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"email\" name=\"email\" id=\"emailId\" placeholder=\"Enter your Email\"\n\t\t\t\t\t\t\t\t/>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"alerts\" *ngIf=\"!RegisterForm.controls['email'].valid && RegisterForm.controls['email'].touched\">Email is required!</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"username\" class=\"cols-sm-2 control-label\">Username</label>\n\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"username\" name=\"username\" id=\"username\" placeholder=\"Enter your Username\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t <span class=\"alerts\" *ngIf=\"!RegisterForm.controls['username'].valid && RegisterForm.controls['username'].touched\">Username is required!</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\n\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"password\" id=\"password\" placeholder=\"Enter your Password\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t <span class=\"alerts\" *ngIf=\"!RegisterForm.controls['password'].valid && RegisterForm.controls['password'].touched\">Password is required!</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"confirm\" class=\"cols-sm-2 control-label\">Confirm Password</label>\n\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"cpassword\" name=\"cpassword\" id=\"confirm\" placeholder=\"Confirm your Password\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"alerts\" *ngIf=\"!RegisterForm.controls['cpassword'].valid && RegisterForm.controls['cpassword'].touched\">Confirm Password is required!</span>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"confirm\" class=\"cols-sm-2 control-label\">Address</label>\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t<textarea type=\"text\" class=\"form-control\" formControlName=\"address\" name=\"address\" id=\"address\" placeholder=\"Address\">\n\n\t\t\t\t\t\t\t\t\t</textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class=\"alerts\" *ngIf=\"!RegisterForm.controls['address'].valid && RegisterForm.controls['address'].touched\">Address required!</span>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t<button type=\"submit\" id=\"button\" [disabled]=\"!RegisterForm.valid\" [routerLink]=\"['/dashboard']\" class=\"btn btn-primary btn-lg btn-block login-button\">Register</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reg {\n  height: 100vh; }\n\n.main {\n  padding: 10% 15px;\n  margin: auto; }\n\nh1.title {\n  font-size: 50px;\n  font-family: 'Passion One', cursive;\n  font-weight: 400; }\n\nhr {\n  width: 10%;\n  color: #fff; }\n\n.form-group {\n  margin-bottom: 15px; }\n\nlabel {\n  margin-bottom: 15px; }\n\ninput,\ninput::-webkit-input-placeholder {\n  font-size: 11px;\n  padding-top: 3px; }\n\n.form-control {\n  height: auto !important;\n  padding: 8px 12px !important; }\n\n.input-group {\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.21) !important; }\n\n#button {\n  border: 1px solid #ccc;\n  margin-top: 28px;\n  padding: 6px 12px;\n  text-shadow: 0 1px #fff;\n  cursor: pointer;\n  border-radius: 3px 3px;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0); }\n\n.main-center {\n  width: 400px;\n  margin-top: 30px;\n  margin: 0 auto;\n  padding: 10px 40px;\n  background: #ececec;\n  color: #333;\n  text-shadow: none;\n  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.31); }\n\nspan.input-group-addon i {\n  color: #009edf;\n  font-size: 17px; }\n\n.login-button {\n  margin-top: 5px; }\n\n.login-register {\n  font-size: 11px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vzd2FyL1Byb2plY3Qvc3J1dmV5LW1hc3Rlci9zcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ssY0FBYSxFQUtqQjs7QUFFRDtFQUNLLGtCQUFnQjtFQUVoQixhQUFXLEVBQ2Y7O0FBRUQ7RUFDQyxnQkFBZTtFQUNmLG9DQUFtQztFQUNuQyxpQkFBZ0IsRUFDaEI7O0FBRUQ7RUFDQyxXQUFVO0VBQ1YsWUFBVyxFQUNYOztBQUVEO0VBQ0Msb0JBQW1CLEVBQ25COztBQUVEO0VBQ0Msb0JBQW1CLEVBQ25COztBQUVEOztFQUVJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQWFEO0VBQ0ksd0JBQXNCO0VBQzFCLDZCQUE0QixFQUMzQjs7QUFDRDtFQUdJLDJEQUFzRCxFQUN6RDs7QUFDRDtFQUNJLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBRWpCLHdCQUF1QjtFQUN2QixnQkFBZTtFQUdmLHVCQUFzQjtFQVd0QixtSEFBa0gsRUFDckg7O0FBQ0Q7RUFDSSxhQUFXO0VBQ2IsaUJBQWdCO0VBQ2hCLGVBQWM7RUFFWixtQkFBa0I7RUFDckIsb0JBQWtCO0VBQ2QsWUFBVztFQUNaLGtCQUFpQjtFQUdyQixnREFBNEMsRUFFM0M7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDQyxnQkFBZSxFQUNmOztBQUVEO0VBQ0MsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnJlZ3tcbiAgICAgaGVpZ2h0OiAxMDB2aDtcbiBcdC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gXHQvLyBiYWNrZ3JvdW5kOnVybChodHRwczovL2kueXRpbWcuY29tL3ZpLzRrZlhqYXRnZUVVL21heHJlc2RlZmF1bHQuanBnKTtcbiBcdC8vIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcblx0Ly8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5tYWlue1xuICAgICBwYWRkaW5nOjEwJSAxNXB4O1xuICAgIFxuICAgICBtYXJnaW46YXV0bztcbn1cblxuaDEudGl0bGUgeyBcblx0Zm9udC1zaXplOiA1MHB4O1xuXHRmb250LWZhbWlseTogJ1Bhc3Npb24gT25lJywgY3Vyc2l2ZTsgXG5cdGZvbnQtd2VpZ2h0OiA0MDA7IFxufVxuXG5ocntcblx0d2lkdGg6IDEwJTtcblx0Y29sb3I6ICNmZmY7XG59XG5cbi5mb3JtLWdyb3Vwe1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5sYWJlbHtcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuaW5wdXQsXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbi8vIC5tYWluLWxvZ2lue1xuLy8gIFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgICAvKiBzaGFkb3dzIGFuZCByb3VuZGVkIGJvcmRlcnMgKi9cbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbi8vICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4vLyAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4vLyAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuXG4vLyB9XG4uZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IGF1dG8haW1wb3J0YW50O1xucGFkZGluZzogOHB4IDEycHggIWltcG9ydGFudDtcbn1cbi5pbnB1dC1ncm91cCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjIxKSFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjIxKSFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4yMSkhaW1wb3J0YW50O1xufVxuI2J1dHRvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIC8vIGNvbG9yOiAjNjY2O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweCAzcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHggM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHg7XG4gICAgLy8gLW1vei1ib3gtc2hhZG93OiAwIDFweCAjZmZmIGluc2V0LCAwIDFweCAjZGRkO1xuICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggI2ZmZiBpbnNldCwgMCAxcHggI2RkZDtcbiAgICAvLyBib3gtc2hhZG93OiAwIDFweCAjZmZmIGluc2V0LCAwIDFweCAjZGRkO1xuICAgIC8vIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLy8gYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1IDAlLCAjZWVlZWVlIDEwMCUpO1xuICAgIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICNmNWY1ZjUpLCBjb2xvci1zdG9wKDEwMCUsICNlZWVlZWUpKTtcbiAgICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY1ZjUgMCUsICNlZWVlZWUgMTAwJSk7XG4gICAgLy8gYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSAwJSwgI2VlZWVlZSAxMDAlKTtcbiAgICAvLyBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSAwJSwgI2VlZWVlZSAxMDAlKTtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1IDAlLCAjZWVlZWVlIDEwMCUpO1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmNWY1ZjUnLCBlbmRDb2xvcnN0cj0nI2VlZWVlZScsIEdyYWRpZW50VHlwZT0wKTtcbn1cbi5tYWluLWNlbnRlcntcbiAgICB3aWR0aDo0MDBweDtcbiBcdG1hcmdpbi10b3A6IDMwcHg7XG4gXHRtYXJnaW46IDAgYXV0bztcbiBcdC8vIG1heC13aWR0aDogMTByZW07O1xuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcblx0YmFja2dyb3VuZDojZWNlY2VjO1xuXHQgICAgY29sb3I6ICMzMzM7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4zMSk7XG4tbW96LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMzEpO1xuYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4zMSk7XG5cbn1cbnNwYW4uaW5wdXQtZ3JvdXAtYWRkb24gaSB7XG4gICAgY29sb3I6ICMwMDllZGY7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubG9naW4tYnV0dG9ue1xuXHRtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5sb2dpbi1yZWdpc3Rlcntcblx0Zm9udC1zaXplOiAxMXB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services.service */ "./src/app/services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, serv, router) {
        this.fb = fb;
        this.serv = serv;
        this.router = router;
        this.RegisterForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        var authorData = this.RegisterForm.value;
        this.serv.register(authorData).subscribe(function (data) {
            //  data.status ='
            if (data) {
                var e = data;
                // console.log(e.status)
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/typetest/typetest.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/typetest/typetest.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 card\">\n      <div class=\"card-body\">\n        <p>{{text}}</p>\n      </div>\n    </div>\n    <div class=\"col-md-12 card\" style=\"padding:0;\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-md-10\" *ngIf=\"timeout\">\n              <h5>\n                Press Start Button TO Start Your Test\n              </h5>\n            </div>\n              <div class=\"col-md-2\" *ngIf=\"timeout\">\n                  <button class=\"btn btn-success\" (click)=\"testfunc('start')\" >Start Test</button>\n                </div>\n          <div class=\"col-md-6\"  *ngIf=\"!timeout\">\n              <button type=\"button\" class=\"btn btn-primary btn-lg\">\n                  Timer :  <span class=\"badge badge-light\">{{sec}}</span>\n                </button>\n          </div>\n          <div class=\"col-md-6 float-right text-right\"  *ngIf=\"!timeout\">\n            <button class=\"btn btn-success\" (click)=\"submitTest()\" *ngIf=\"!timeout\">Submit</button> &nbsp;\n            <button class=\"btn btn-danger\" (click)=\"testfunc('stop')\" *ngIf=\"!timeout\">Cancel Test</button>\n          </div>\n        </div>\n      </div>\n      <textarea rows=\"15\" name=\"text\" style=\"height:100%;\" [disabled]=\"timeout\" [(ngModel)]=\"comparetext\">\n     </textarea>\n    </div>\n    <div class=\"mt-2 col-md-12 alert alert-dismissible alert-danger\" *ngIf=\"result === 'fail'\">\n      {{error}} <button class=\"float-right btn btn-sm btn-light\" onClick=\"window.location.reload()\">Restart</button>\n    </div>\n    <div class=\"mt-2 col-md-12 alert alert-dismissible alert-success\" *ngIf=\"result === 'success'\">\n      {{error}}\n    </div>\n  </div>\n</div>\n\n\n<!-- The Modal -->\n<div class=\"modal\" [ngClass]=\"{'show':showmodal, 'modal-back':showmodal}\" [style.display]=\"showmodal ? 'block' : 'none'\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <!-- <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Mo</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div> -->\n\n      <!-- Modal body -->\n      <div class=\"modal-body text-center\">\n        <h4>\n          Your ranking in last 24h\n        </h4>\n        <p class=\"text-success\">\n          {{message.ranking}}\n        </p>\n        <h3>\n          You're better than\n        </h3>\n        <h2 class=\"text-success\">\n          {{message.score}}\n        </h2>\n        <p>\n          of all users\n          </p>\n          <p *ngIf=\"message.showReg\">\n            To Register Click Here...\n          </p>\n          <button *ngIf=\"message.showReg\" [routerLink]=\"['/register']\"  class=\"btn btn-success\">\n            Register\n          </button>\n      \n            <button *ngIf=\"!message.showReg\" [routerLink]=\"['/']\"  class=\"btn btn-danger\">\n              Try Again\n            </button>\n      </div>\n\n      <!-- Modal footer -->\n      <!-- <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" onClick=\"window.location.reload()\" data-dismiss=\"modal\">Close</button>\n      </div> -->\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/typetest/typetest.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/typetest/typetest.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                    supported by Chrome and Opera */ }\n\n.show {\n  display: block;\n  padding-right: 15px; }\n\n.modal-back {\n  background-color: rgba(0, 0, 0, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vzd2FyL1Byb2plY3Qvc3J1dmV5LW1hc3Rlci9zcmMvYXBwL3BhZ2VzL3R5cGV0ZXN0L3R5cGV0ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTJCO0VBQUUsZ0JBQWdCO0VBQzNDLDBCQUF5QjtFQUFFLFlBQVk7RUFDWixvQkFBb0I7RUFDNUMsdUJBQXNCO0VBQUUsYUFBYTtFQUNwQyxzQkFBcUI7RUFBRSw0QkFBNEI7RUFDL0Msa0JBQWlCO0VBQUU7b0VBQ21DLEVBQ2pFOztBQUVEO0VBQVUsZUFBYztFQUN0QixvQkFBbUIsRUFFbEI7O0FBRUQ7RUFDSixxQ0FBaUMsRUFDNUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90eXBldGVzdC90eXBldGVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHkge1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbiAgfVxuXG4gIC5zaG93eyAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIFxuICAgIH1cblxuICAgIC5tb2RhbC1iYWNrIHtcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/typetest/typetest.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/typetest/typetest.component.ts ***!
  \******************************************************/
/*! exports provided: TypetestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypetestComponent", function() { return TypetestComponent; });
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


var TypetestComponent = /** @class */ (function () {
    function TypetestComponent(router) {
        this.router = router;
        this.showmodal = false;
        this.tmp = 2 * 60;
        this.time = this.tmp;
        this.timeout = true;
        this.message = { "ranking": 'knwe', "score": 12, "showReg": 12.12 };
        this.text = 'Aesop was one of the great Greek writers. He is best known for his fables, stories that have a moral. They teach us something about how we should live our lives. Aesop wrote thousands of these stories. Here are a few.The Wolf in Sheep Clothing.Once upon a time, a Wolf decided to disguise the way he looked.He thought it would help him get food more easily.He put on the skin of a sheep, then he went out with the flock into the pasture.Even the shepherd was fooled by his clever costume.In the evening, the shepherd put him in with the rest of the sheep.He closed the gate and made sure it was secure before he went to bed.In the middle of the night, he came back to the fold to get some meat for the next day.Instead of a sheep, though, he grabbed the Wolf, killing him instantly.Those who look to harm others will be harmed themselves.The Bat and the Weasel.A Bat fell on the ground and was caught by a Weasel.It begged the Weasel to spare its life, but the Weasel refused.It told the Bat that birds, by nature, were its enemy.The Bat assured him that it was not a bird, it was a mouse.The Weasel thought a moment, then set it free.A while later, the Bat fell again to the ground, and it was caught by another Weasel.It begged this Weasel not to eat him, either.The Weasel, though, said it did not like mice at all and would eat it.The Bat told the Weasel that it was not a mouse, but a bat.The second Weasel had no good answer, so he let it go.The Bat knew it is always wise to turn events to your advantage.The Lion and the Mouse.A sleeping Lion was woken up by a Mouse running over his face.He got up angrily and caught the scared little Mouse.He was about to kill the Mouse, but it said in its squeaky little voice, "If you would only spare my life, I would be sure to repay your kindness." The Lion laughed at such nonsense, but he let him go.A short time later, though, the Lion was caught by some hunters.They bound him by ropes to the ground.The Mouse recognized his roar, and he rushed over and gnawed the rope with his teeth, setting the Lion free.The Mouse said "You laughed at the idea of my ever being able to help you. Now you know that it is possible for even a small little Mouse to help a great big Lion.';
    }
    TypetestComponent.prototype.ngOnInit = function () { };
    TypetestComponent.prototype.intervalInitator = function () {
        var _this = this;
        this.intervalInitiator = setInterval(function () {
            _this.loadingCount();
        }, 1000);
    };
    TypetestComponent.prototype.loadingCount = function () {
        var c = this.time--;
        var m = (c / 60) >> 0;
        var s = (c - m * 60) + '';
        console.log(m);
        if (c != 0) {
            this.sec = m + ':' + (s.length > 1 ? '' : '0') + s;
        }
        else {
            this.showmodal = true;
            this.timeout = false;
            clearInterval(this.intervalInitiator);
            this.timeout = true;
        }
    };
    TypetestComponent.prototype.testfunc = function (e) {
        if ("start" === e) {
            this.timeout = false;
            this.intervalInitator();
        }
        if ("stop" === e) {
            this.submitTest();
            this.timeout = true;
            clearInterval(this.intervalInitiator);
        }
    };
    TypetestComponent.prototype.submitTest = function () {
        var len = this.text.split(" ").length;
        clearInterval(this.intervalInitiator);
        this.showmodal = true;
        if (this.comparetext == undefined) {
            this.showmodal = true;
            this.message.ranking = Math.floor(Math.random() * 0) + 0;
            this.message.score = 0;
            this.message.showReg = false;
        }
        else {
            var ans = this.comparetext.split(" ").length;
            if (ans <= 200) {
                this.message.ranking = Math.floor(Math.random() * 10) + 0;
                this.message.score = Math.floor(Math.random() * 60) + 50;
                this.message.showReg = true;
            }
            else {
                this.message.ranking = Math.floor(Math.random() * 20) + 30;
                this.message.score = Math.random() * 10 + 50;
                this.message.showReg = false;
            }
        }
    };
    TypetestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-typetest",
            template: __webpack_require__(/*! ./typetest.component.html */ "./src/app/pages/typetest/typetest.component.html"),
            styles: [__webpack_require__(/*! ./typetest.component.scss */ "./src/app/pages/typetest/typetest.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TypetestComponent);
    return TypetestComponent;
}());



/***/ }),

/***/ "./src/app/services.service.ts":
/*!*************************************!*\
  !*** ./src/app/services.service.ts ***!
  \*************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesService = /** @class */ (function () {
    function ServicesService(http) {
        this.http = http;
    }
    ServicesService.prototype.login = function (data) {
        var url = "https://survey8122.herokuapp.com/api/user/login";
        return this.http.post(url, data);
    };
    ServicesService.prototype.register = function (data) {
        var url = "https://survey8122.herokuapp.com/api/user/register";
        return this.http.post(url, data);
    };
    ServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServicesService);
    return ServicesService;
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

module.exports = __webpack_require__(/*! /home/eswar/Project/sruvey-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map