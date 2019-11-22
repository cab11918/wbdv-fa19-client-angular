(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-users/admin-users.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-users/admin-users.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--<h1>User Admin</h1>-->\n\n<!--<ul class=\"list-group\">-->\n<!--  <li class=\"list-group-item\" *ngFor=\"let user of users\">-->\n<!--    {{user.username}}-->\n<!--    <button (click)=\"deleteUser(user)\">Delete</button>-->\n<!--  </li>-->\n<!--</ul>-->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-dark bg-dark col-12\">\n  <span class=\"navbar-brand mb-0 h1\">Student</span>\n</nav>\n\n\n<div class=\"container-fluid\">\n\n\n\n  <router-outlet></router-outlet>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/course-grid/course-grid.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/course-grid/course-grid.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <h1>Course List</h1>\n  <p>All your courses will be shown here</p>\n  <div class=\"wbdv-link wbdv-courseList\">\n\n\n    <div class=\"wbdv-link wbdv-course\" routerLink=\"/courses/{{course.id}}/modules\"\n        *ngFor=\"let course of\n      courses\"\n        class=\"list-group-item list-group-item-action text-primary center\">\n\n\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{course.title}}</h5>\n          <p class=\"card-text\">A Course Is A Course</p>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/course-viewer/course-viewer.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/course-viewer/course-viewer.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>Course Viewer</h3>\n\n<app-course-grid></app-course-grid>\n<app-module-list></app-module-list>\n<app-lesson-tabs></app-lesson-tabs>\n<app-topic-pills></app-topic-pills>\n<app-widget-list></app-widget-list>\n\n\n<!--<div class=\"container-fluid\">-->\n\n\n<!--  <h1>Course Viewer</h1>-->\n<!--  <p>All your courses will be shown here</p>-->\n\n<!--&lt;!&ndash;  <app-course-grid></app-course-grid>&ndash;&gt;-->\n\n\n<!--  <div class=\"row\">-->\n<!--    <div class=\"col\">-->\n\n<!--      <ul class=\"list-group\">-->\n\n\n<!--        <li (click)=\"selectCourse(course)\" *ngFor=\"let course of courses\"-->\n<!--            class=\"list-group-item list-group-item-action text-primary center\">-->\n<!--          {{course.title}}-->\n<!--        </li>-->\n\n<!--      </ul>-->\n<!--    </div>-->\n\n<!--    <div class=\"col\">-->\n\n<!--      <ul class=\"list-group\">-->\n\n\n<!--        <li (click)=\"selectModule(module)\" *ngFor=\"let module of modules\"-->\n<!--            class=\"list-group-item list-group-item-action text-secondary col-11\">-->\n<!--          {{module.title}}-->\n<!--        </li>-->\n\n\n<!--      </ul>-->\n\n<!--    </div>-->\n\n<!--    <div class=\"col\">-->\n\n<!--      <ul class=\"list-group\">-->\n\n\n<!--        <li (click)=\"selectLesson(lesson)\" *ngFor=\"let lesson of lessons\"-->\n<!--            class=\"list-group-item list-group-item-action text-success col-10\">-->\n<!--          {{lesson.title}}-->\n<!--        </li>-->\n\n\n<!--      </ul>-->\n\n<!--    </div>-->\n\n<!--    <div class=\"col\">-->\n\n<!--      <ul class=\"list-group\">-->\n\n\n<!--        <li (click)=\"selectTopic(topic)\" *ngFor=\"let topic of topics\"-->\n<!--            class=\"list-group-item list-group-item-action text-danger col-9\">-->\n<!--          {{topic.title}}-->\n<!--        </li>-->\n\n\n<!--      </ul>-->\n\n\n<!--    </div>-->\n\n<!--    <div class=\"col\">-->\n\n\n<!--      <ul class=\"list-group\">-->\n\n\n<!--        <li *ngFor=\"let widget of widgets\"-->\n<!--            class=\"list-group-item list-group-item-action text-warning col-8\">-->\n<!--          {{widget.widgetType}}-->\n<!--        </li>-->\n\n\n<!--      </ul>-->\n\n<!--    </div>-->\n<!--  </div>-->\n\n\n<!--</div>-->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lesson-tabs/lesson-tabs.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lesson-tabs/lesson-tabs.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"container-fluid\">\n  <h1>Lesson Tab</h1>\n  <p>All your lessons for that module will be shown here</p>\n  <ul class=\"nav nav-tabs\">\n\n    <li class=\"wbdv-link wbdv-lesson nav-item\"\n        *ngFor=\"let lesson of lessons\">\n      <a class=\"nav-link\"\n         [ngClass]=\"{'active': lesson.id == lessonId}\"\n         routerLink=\"/courses/{{courseId}}/modules/{{moduleId}}/lessons/{{lesson.id}}/topics\">\n        {{lesson.title}}\n      </a>\n    </li>\n  </ul>\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <h1>Login</h1>\n\n  <div class=\"input-group col-4\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Username</span>\n    </div>\n    <input class=\"wbdv-field wbdv-username\" [(ngModel)]=\"username\"/>\n  </div>\n\n  <br/>\n\n  <div class=\"input-group col-4\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Password</span>\n    </div>\n    <input class=\"wbdv-field wbdv-password\" [(ngModel)]=\"password\" type=\"password\"/>\n  </div>\n\n  <br/>\n\n\n  <button (click)=\"login()\" type=\"button\" class=\"wbdv-button wbdv-login btn btn-primary\">Log In\n  </button>\n  &nbsp;\n  <a routerLink=\"/register\">sign up !</a>\n\n\n  <div class=\"wbdv-message\">\n    {{message}}\n\n  </div>\n\n\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/module-list/module-list.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/module-list/module-list.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n\n\n  <h1>Module List</h1>\n  <p>All your modules for that course will be shown here</p>\n\n<div class=\"container-fluid\">\n\n  <ul class=\"list-group\">\n    <li class=\"wbdv-link wbdv-module list-group-item action\"\n        [ngClass]=\"{'active' : module.id == moduleId}\"\n        *ngFor=\"let module of modules\">\n      <a routerLink=\"/courses/{{courseId}}/modules/{{module.id}}/lessons\">\n        {{module.title}}\n      </a>\n    </li>\n  </ul>\n\n</div>\n\n\n\n\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <h1>Profile</h1>\n\n  <div class=\"input-group col-4\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Username</span>\n    </div>\n    <input class=\"wbdv-field wbdv-username\"/>\n  </div>\n\n  <br/>\n\n  <div class=\"input-group col-4\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Password</span>\n    </div>\n    <input class=\"wbdv-field wbdv-password\" type=\"password\"/>\n  </div>\n\n\n  <br/>\n\n  <div class=\"input-group col-4\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">First Name</span>\n    </div>\n    <input class=\"wbdv-field wbdv-firstname\n\"/>\n  </div>\n\n\n  <br/>\n\n  <div class=\"input-group col-4\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Last Name</span>\n    </div>\n    <input class=\"wbdv-field wbdv-lastname\n\"/>\n  </div>\n\n\n  <br/>\n\n\n  <div class=\"input-group col-4\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Date of Birth</span>\n    </div>\n    <input type=\"date\"/>\n  </div>\n\n  <br/>\n\n  <div class=\"input-group col-4\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Email</span>\n    </div>\n    <input class=\"wbdv-field wbdv-email\" type=\"email\"/>\n  </div>\n\n  <br/>\n\n  <div class=\"input-group col-4\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Phone</span>\n    </div>\n    <input class=\"wbdv-field wbdv-phone\" type=\"phone\"/>\n  </div>\n\n\n  <br/>\n\n\n  <button type=\"button\" class=\"wbdv-button wbdv-update btn btn-primary\">Update Profile\n  </button>\n  &nbsp;\n  <a routerLink=\"/login\" class=\"wbdv-button wbdv-logout\n\">Log out</a>\n\n\n</div>\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container-fluid\">\n  <h1>Reigister</h1>\n\n  <div class=\"input-group col-4\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Username</span>\n    </div>\n    <input class=\"wbdv-field wbdv-username\"/>\n  </div>\n\n  <br/>\n\n  <div class=\"input-group col-4\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Password</span>\n    </div>\n    <input class=\"wbdv-field wbdv-password\" type=\"password\"/>\n  </div>\n\n  <br/>\n\n  <div class=\"input-group col-4\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Verify Password</span>\n    </div>\n    <input class=\"wbdv-field wbdv-verifyPassword wbdv-field wbdv-password\" type=\"password\"/>\n  </div>\n\n  <br/>\n\n\n  <button type=\"button\" class=\"\nwbdv-button wbdv-register\n btn btn-primary\">Register</button>\n  &nbsp;\n  <a routerLink=\"/login\">Sign in!</a>\n\n\n\n\n\n</div>\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/topic-pills/topic-pills.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topic-pills/topic-pills.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <h1>Topic Pills</h1>\n  <p>All your topics for that lesson will be shown here</p>\n  <ul class=\"nav nav-tabs\">\n\n    <li class=\"wbdv-link wbdv-lesson nav-item\"\n        *ngFor=\"let topic of topics\">\n      <a class=\"nav-link\"\n         [ngClass]=\"{'active': topic.id == topicId}\"\n         routerLink=\"/courses/{{courseId}}/modules/{{moduleId}}/lessons/{{lessonId}}/topics/{{topic.id}}/widgets\">\n        {{topic.title}}\n      </a>\n    </li>\n  </ul>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/widget-list/widget-list.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widget-list/widget-list.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <h1>Widgets</h1>\n  <p>All your widgets for that topic will be shown here</p>\n  <ul class=\"list-group\">\n  <li class=\"wbdv-link wbdv-lesson list-group-item list-group-item-action\"\n      *ngFor=\"let widget of widgets\">\n    <a class=\"nav-link\"\n       [ngClass]=\"{'active': widget.id == topicId}\"\n       routerLink=\"/courses/{{courseId}}/modules/{{moduleId}}/lessons/{{lessonId}}/topics/{{topicId}}/widgets/\">\n      {{widget.widgetType}}\n    </a>\n  </li>\n  </ul>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/admin-users/admin-users.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/admin-users/admin-users.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXVzZXJzL2FkbWluLXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/admin-users/admin-users.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/admin-users/admin-users.component.ts ***!
          \******************************************************/
        /*! exports provided: AdminUsersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function () { return AdminUsersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/UserService */ "./src/app/services/UserService.ts");
            var AdminUsersComponent = /** @class */ (function () {
                function AdminUsersComponent(userService) {
                    this.userService = userService;
                }
                AdminUsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.findAllUsers()
                        .then(function (users) { return _this.users = users; });
                };
                AdminUsersComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    this.userService.deleteUser(user)
                        .then(function (users) { return _this.users = users; });
                };
                return AdminUsersComponent;
            }());
            AdminUsersComponent.ctorParameters = function () { return [
                { type: _services_UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            AdminUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-users',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-users/admin-users.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-users.component.css */ "./src/app/admin-users/admin-users.component.css")).default]
                })
            ], AdminUsersComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            /* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
            /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
            /* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/admin-users/admin-users.component.ts");
            /* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");
            /* harmony import */ var _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module-list/module-list.component */ "./src/app/module-list/module-list.component.ts");
            /* harmony import */ var _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lesson-tabs/lesson-tabs.component */ "./src/app/lesson-tabs/lesson-tabs.component.ts");
            /* harmony import */ var _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topic-pills/topic-pills.component */ "./src/app/topic-pills/topic-pills.component.ts");
            /* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
            var routes = [
                { path: '', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_5__["CourseViewerComponent"] },
                { path: 'courses', component: _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_8__["CourseGridComponent"] },
                { path: 'courses/:cid/modules', component: _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_9__["ModuleListComponent"] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
                { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
                { path: 'admin-users', component: _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_7__["AdminUsersComponent"] },
                { path: 'courses/:cid/modules/:mid/lessons', component: _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_10__["LessonTabsComponent"] },
                { path: 'courses/:cid/modules/:mid/lessons/:lid/topics', component: _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_11__["TopicPillsComponent"] },
                { path: 'courses/:cid/modules/:mid/lessons/:lid/topics/:tid/widgets', component: _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'wbdv-fa19-client-angular';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
            /* harmony import */ var _services_CourseServiceClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/CourseServiceClient */ "./src/app/services/CourseServiceClient.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/admin-users/admin-users.component.ts");
            /* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");
            /* harmony import */ var _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./module-list/module-list.component */ "./src/app/module-list/module-list.component.ts");
            /* harmony import */ var _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lesson-tabs/lesson-tabs.component */ "./src/app/lesson-tabs/lesson-tabs.component.ts");
            /* harmony import */ var _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./topic-pills/topic-pills.component */ "./src/app/topic-pills/topic-pills.component.ts");
            /* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
            /* harmony import */ var _services_ModuleServiceClient__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/ModuleServiceClient */ "./src/app/services/ModuleServiceClient.ts");
            /* harmony import */ var _services_LessonServiceClient__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/LessonServiceClient */ "./src/app/services/LessonServiceClient.ts");
            /* harmony import */ var _services_TopicServiceClient__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/TopicServiceClient */ "./src/app/services/TopicServiceClient.ts");
            /* harmony import */ var _services_WidgetServiceClient__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/WidgetServiceClient */ "./src/app/services/WidgetServiceClient.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_5__["CourseViewerComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                        _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                        _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_11__["AdminUsersComponent"],
                        _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_12__["CourseGridComponent"],
                        _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_13__["ModuleListComponent"],
                        _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_14__["LessonTabsComponent"],
                        _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_15__["TopicPillsComponent"],
                        _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_16__["WidgetListComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
                    ],
                    providers: [
                        _services_CourseServiceClient__WEBPACK_IMPORTED_MODULE_6__["default"],
                        _services_ModuleServiceClient__WEBPACK_IMPORTED_MODULE_17__["default"],
                        _services_LessonServiceClient__WEBPACK_IMPORTED_MODULE_18__["default"],
                        _services_TopicServiceClient__WEBPACK_IMPORTED_MODULE_19__["default"],
                        _services_WidgetServiceClient__WEBPACK_IMPORTED_MODULE_20__["default"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/course-grid/course-grid.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/course-grid/course-grid.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1ncmlkL2NvdXJzZS1ncmlkLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/course-grid/course-grid.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/course-grid/course-grid.component.ts ***!
          \******************************************************/
        /*! exports provided: CourseGridComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponent", function () { return CourseGridComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_CourseServiceClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/CourseServiceClient */ "./src/app/services/CourseServiceClient.ts");
            var CourseGridComponent = /** @class */ (function () {
                function CourseGridComponent(router, service) {
                    this.router = router;
                    this.service = service;
                    this.courseId = '';
                    this.courses = [];
                }
                CourseGridComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.router.paramMap.subscribe(function (params) {
                        _this.courseId = params.get('cid');
                        _this.service.findAllCourses()
                            .then(function (courses) { return _this.courses = courses; });
                    });
                };
                return CourseGridComponent;
            }());
            CourseGridComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_CourseServiceClient__WEBPACK_IMPORTED_MODULE_3__["default"] }
            ]; };
            CourseGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-course-grid',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./course-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/course-grid/course-grid.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./course-grid.component.css */ "./src/app/course-grid/course-grid.component.css")).default]
                })
            ], CourseGridComponent);
            /***/ 
        }),
        /***/ "./src/app/course-viewer/course-viewer.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/course-viewer/course-viewer.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS12aWV3ZXIvY291cnNlLXZpZXdlci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/course-viewer/course-viewer.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/course-viewer/course-viewer.component.ts ***!
          \**********************************************************/
        /*! exports provided: CourseViewerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function () { return CourseViewerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_CourseServiceClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/CourseServiceClient */ "./src/app/services/CourseServiceClient.ts");
            var CourseViewerComponent = /** @class */ (function () {
                //
                // courses = [];
                // modules = [];
                // lessons = [];
                // topics = [];
                // widgets = [];
                function CourseViewerComponent(service) {
                    this.service = service;
                }
                //
                // selectCourse(course) {
                //   this.modules = [];
                //   this.lessons = [];
                //   this.topics = [];
                //   this.widgets = [];
                //
                //   fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/courses/${course.id}/modules`)
                //   .then(response => response.json())
                //   .then(modules => this.modules = modules);
                // }
                //
                //
                // selectModule(module) {
                //   fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/modules/${module.id}/lessons`)
                //   .then(response => response.json())
                //   .then(lessons => this.lessons = lessons);
                // }
                //
                //
                // selectLesson(lesson) {
                //   fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/lessons/${lesson.id}/topics`)
                //   .then(response => response.json())
                //   .then(topics => this.topics = topics);
                // }
                //
                // selectTopic(topic) {
                //   fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/topics/${topic.id}/widgets`)
                //   .then(response => response.json())
                //   .then(widgets => this.widgets = widgets);
                // }
                CourseViewerComponent.prototype.ngOnInit = function () {
                    // this.service.findAllCourses().then(courses => this.courses = courses);
                    // fetch('https://tranquil-hamlet-37825.herokuapp.com/api/courses')
                    // .then(response => response.json())
                    // .then(courses => this.courses = courses);
                };
                return CourseViewerComponent;
            }());
            CourseViewerComponent.ctorParameters = function () { return [
                { type: _services_CourseServiceClient__WEBPACK_IMPORTED_MODULE_2__["default"] }
            ]; };
            CourseViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-course-viewer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./course-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/course-viewer/course-viewer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")).default]
                })
            ], CourseViewerComponent);
            /***/ 
        }),
        /***/ "./src/app/lesson-tabs/lesson-tabs.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/lesson-tabs/lesson-tabs.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlc3Nvbi10YWJzL2xlc3Nvbi10YWJzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/lesson-tabs/lesson-tabs.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/lesson-tabs/lesson-tabs.component.ts ***!
          \******************************************************/
        /*! exports provided: LessonTabsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponent", function () { return LessonTabsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_LessonServiceClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/LessonServiceClient */ "./src/app/services/LessonServiceClient.ts");
            var LessonTabsComponent = /** @class */ (function () {
                function LessonTabsComponent(router, service) {
                    this.router = router;
                    this.service = service;
                    this.courseId = '';
                    this.moduleId = '';
                    this.lessonId = '';
                    this.lessons = [];
                }
                LessonTabsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.router.paramMap.subscribe(function (params) {
                        _this.courseId = params.get('cid');
                        _this.moduleId = params.get('mid');
                        _this.lessonId = params.get('lid');
                        _this.service.findAllLessonsForModule(_this.moduleId)
                            .then(function (lessons) { return _this.lessons = lessons; });
                    });
                };
                return LessonTabsComponent;
            }());
            LessonTabsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_LessonServiceClient__WEBPACK_IMPORTED_MODULE_3__["default"] }
            ]; };
            LessonTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lesson-tabs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lesson-tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lesson-tabs/lesson-tabs.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lesson-tabs.component.css */ "./src/app/lesson-tabs/lesson-tabs.component.css")).default]
                })
            ], LessonTabsComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            // import {UserService} from '../services/UserService';
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(
                // private userService: UserService,
                router) {
                    this.router = router;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.login = function () {
                    // console.log(this.username);
                    // console.log(this.password);
                    // this.userService.login(this.username, this.password)
                    // .then(user => {
                    //   this.router.navigate(['profile']);
                    // });
                    // JOSE IGNORED
                    // if (this.username === 'bob' && this.password === 'hope') {
                    //   this.router.navigate(['profile']);
                    // } else {
                    //   this.message = 'Sorry, try again';
                    // }
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/module-list/module-list.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/module-list/module-list.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1saXN0L21vZHVsZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/module-list/module-list.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/module-list/module-list.component.ts ***!
          \******************************************************/
        /*! exports provided: ModuleListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function () { return ModuleListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_ModuleServiceClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ModuleServiceClient */ "./src/app/services/ModuleServiceClient.ts");
            // import {ModuleServiceClient} from '../services/ModuleServiceClient';
            var ModuleListComponent = /** @class */ (function () {
                function ModuleListComponent(route, service) {
                    this.route = route;
                    this.service = service;
                    this.courseId = '';
                    this.moduleId = '';
                    this.modules = [];
                }
                ModuleListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.paramMap.subscribe(function (params) {
                        _this.courseId = params.get('cid');
                        _this.service.findAllModulesForCourse(_this.courseId)
                            .then(function (modules) { return _this.modules = modules; });
                    });
                };
                return ModuleListComponent;
            }());
            ModuleListComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_ModuleServiceClient__WEBPACK_IMPORTED_MODULE_3__["default"] }
            ]; };
            ModuleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-module-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./module-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/module-list/module-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./module-list.component.css */ "./src/app/module-list/module-list.component.css")).default]
                })
            ], ModuleListComponent);
            /***/ 
        }),
        /***/ "./src/app/profile/profile.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/profile/profile.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/profile/profile.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/profile/profile.component.ts ***!
          \**********************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent() {
                }
                ProfileComponent.prototype.ngOnInit = function () {
                };
                return ProfileComponent;
            }());
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
                })
            ], ProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/register/register.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/register/register.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/register/register.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/register/register.component.ts ***!
          \************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent() {
                }
                RegisterComponent.prototype.ngOnInit = function () {
                };
                return RegisterComponent;
            }());
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/services/CourseServiceClient.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/CourseServiceClient.ts ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CourseServiceClient = /** @class */ (function () {
                function CourseServiceClient() {
                    this.findAllCourses = function () { return fetch('https://tranquil-hamlet-37825.herokuapp.com/api/courses')
                        .then(function (response) { return response.json(); }); };
                    // findLessonForModule = (moduleId) => fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/modules/${moduleId}/lessons`)
                    // .then(response => response.json())
                }
                return CourseServiceClient;
            }());
            CourseServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], CourseServiceClient);
            /* harmony default export */ __webpack_exports__["default"] = (CourseServiceClient);
            /***/ 
        }),
        /***/ "./src/app/services/LessonServiceClient.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/LessonServiceClient.ts ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LessonServiceClient = /** @class */ (function () {
                function LessonServiceClient() {
                    this.findAllLessonsForModule = function (moduleId) { return fetch("https://tranquil-hamlet-37825.herokuapp.com/api/modules/" + moduleId + "/lessons")
                        .then(function (response) { return response.json(); }); };
                    this.findLessonsById = function (lessonId) { return fetch("https://tranquil-hamlet-37825.herokuapp.com/api/lessons/" + lessonId)
                        .then(function (response) { return response.json(); }); };
                }
                return LessonServiceClient;
            }());
            LessonServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], LessonServiceClient);
            /* harmony default export */ __webpack_exports__["default"] = (LessonServiceClient);
            /***/ 
        }),
        /***/ "./src/app/services/ModuleServiceClient.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/ModuleServiceClient.ts ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModuleServiceClient = /** @class */ (function () {
                function ModuleServiceClient() {
                    this.findAllModulesForCourse = function (courseId) { return fetch("https://tranquil-hamlet-37825.herokuapp.com/api/courses/" + courseId + "/modules")
                        .then(function (response) { return response.json(); }); };
                }
                return ModuleServiceClient;
            }());
            ModuleServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ModuleServiceClient);
            /* harmony default export */ __webpack_exports__["default"] = (ModuleServiceClient);
            /***/ 
        }),
        /***/ "./src/app/services/TopicServiceClient.ts": 
        /*!************************************************!*\
          !*** ./src/app/services/TopicServiceClient.ts ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TopicServiceClient = /** @class */ (function () {
                function TopicServiceClient() {
                    this.findTopicsForLesson = function (lessonId) { return fetch("https://tranquil-hamlet-37825.herokuapp.com/api/lessons/" + lessonId + "/topics")
                        .then(function (response) { return response.json(); }); };
                    this.findTopicById = function (topicId) { return fetch("https://tranquil-hamlet-37825.herokuapp.com/api/topics/" + topicId)
                        .then(function (response) { return response.json(); }); };
                }
                return TopicServiceClient;
            }());
            TopicServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], TopicServiceClient);
            /* harmony default export */ __webpack_exports__["default"] = (TopicServiceClient);
            /***/ 
        }),
        /***/ "./src/app/services/UserService.ts": 
        /*!*****************************************!*\
          !*** ./src/app/services/UserService.ts ***!
          \*****************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UserService = /** @class */ (function () {
                function UserService() {
                }
                UserService.prototype.logout = function () {
                };
                UserService.prototype.register = function () {
                };
                UserService.prototype.findAllUsers = function () {
                    return fetch('http://localhost:4000/api/users')
                        .then(function (response) { return response.json(); });
                };
                UserService.prototype.deleteUser = function (user) {
                    return fetch("http://localhost:4000/api/users/" + user.id, {
                        method: 'delete'
                    })
                        .then(function (response) { return response.json(); });
                };
                UserService.prototype.createUser = function () {
                };
                UserService.prototype.login = function (username, password) {
                    return fetch("http://localhost:4000/login", {
                        method: 'post',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                        // username: username,
                        // password: password
                        })
                    })
                        .then(function (response) { return response.json(); });
                };
                return UserService;
            }());
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/services/WidgetServiceClient.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/WidgetServiceClient.ts ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WidgetServiceClient = /** @class */ (function () {
                function WidgetServiceClient() {
                    this.findWidgetsForTopic = function (topicId) { return fetch("https://tranquil-hamlet-37825.herokuapp.com/api/topics/" + topicId + "/widgets")
                        .then(function (response) { return response.json(); }); };
                }
                return WidgetServiceClient;
            }());
            WidgetServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], WidgetServiceClient);
            /* harmony default export */ __webpack_exports__["default"] = (WidgetServiceClient);
            /***/ 
        }),
        /***/ "./src/app/topic-pills/topic-pills.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/topic-pills/topic-pills.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGljLXBpbGxzL3RvcGljLXBpbGxzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/topic-pills/topic-pills.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/topic-pills/topic-pills.component.ts ***!
          \******************************************************/
        /*! exports provided: TopicPillsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPillsComponent", function () { return TopicPillsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_TopicServiceClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/TopicServiceClient */ "./src/app/services/TopicServiceClient.ts");
            var TopicPillsComponent = /** @class */ (function () {
                function TopicPillsComponent(router, service) {
                    this.router = router;
                    this.service = service;
                    this.courseId = '';
                    this.moduleId = '';
                    this.lessonId = '';
                    this.topicId = '';
                    this.topics = [];
                }
                TopicPillsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.router.paramMap.subscribe(function (params) {
                        _this.courseId = params.get('cid');
                        _this.moduleId = params.get('mid');
                        _this.lessonId = params.get('lid');
                        _this.topicId = params.get('tid');
                        _this.service.findTopicsForLesson(_this.lessonId)
                            .then(function (topics) { return _this.topics = topics; });
                    });
                };
                return TopicPillsComponent;
            }());
            TopicPillsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_TopicServiceClient__WEBPACK_IMPORTED_MODULE_3__["default"] }
            ]; };
            TopicPillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-topic-pills',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topic-pills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/topic-pills/topic-pills.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topic-pills.component.css */ "./src/app/topic-pills/topic-pills.component.css")).default]
                })
            ], TopicPillsComponent);
            /***/ 
        }),
        /***/ "./src/app/widget-list/widget-list.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/widget-list/widget-list.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/widget-list/widget-list.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/widget-list/widget-list.component.ts ***!
          \******************************************************/
        /*! exports provided: WidgetListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function () { return WidgetListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_WidgetServiceClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/WidgetServiceClient */ "./src/app/services/WidgetServiceClient.ts");
            var WidgetListComponent = /** @class */ (function () {
                function WidgetListComponent(router, service) {
                    this.router = router;
                    this.service = service;
                    this.courseId = '';
                    this.moduleId = '';
                    this.lessonId = '';
                    this.topicId = '';
                    this.widgetId = '';
                    this.widgets = [];
                }
                WidgetListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.router.paramMap.subscribe(function (params) {
                        _this.courseId = params.get('cid');
                        _this.moduleId = params.get('mid');
                        _this.lessonId = params.get('lid');
                        _this.topicId = params.get('tid');
                        _this.widgetId = params.get('wid');
                        _this.service.findWidgetsForTopic(_this.topicId)
                            .then(function (widgets) { return _this.widgets = widgets; });
                    });
                };
                return WidgetListComponent;
            }());
            WidgetListComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_WidgetServiceClient__WEBPACK_IMPORTED_MODULE_3__["default"] }
            ]; };
            WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-widget-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/widget-list/widget-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-list.component.css */ "./src/app/widget-list/widget-list.component.css")).default]
                })
            ], WidgetListComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/minghhaoyu/wbdv-fa19-client-angular/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map