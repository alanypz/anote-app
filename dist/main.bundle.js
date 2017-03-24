webpackJsonp([1,4],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoteService = (function () {
    function NoteService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    NoteService.prototype.getNotes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        var requestUrl = 'users/notes';
        var authToken = this.authService.lendToken();
        headers.append('Authorization', authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(requestUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NoteService.prototype.createNote = function (note) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        var requestUrl = 'users/notes';
        var authToken = this.authService.lendToken();
        headers.append('Authorization', authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(requestUrl, note, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NoteService.prototype.deleteNote = function (noteId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        var requestUrl = 'users/notes' + '/' + noteId;
        var authToken = this.authService.lendToken();
        headers.append('Authorization', authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(requestUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NoteService.prototype.updateNote = function (note) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        var requestUrl = 'users/notes';
        var authToken = this.authService.lendToken();
        headers.append('Authorization', authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(requestUrl, note, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NoteService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _b) || Object])
    ], NoteService);
    return NoteService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/note.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (this.isInvalid(user.name) ||
            this.isInvalid(user.email) ||
            this.isInvalid(user.username) ||
            this.isInvalid(user.password)) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        // Regex for valid email address
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.isInvalid = function (field) {
        if (field == undefined || field == "") {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/validate.service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(509);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/main.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(688),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_note_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_note_list_note_list_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dashboard_note_details_note_details_component__ = __webpack_require__(511);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_dashboard_note_list_note_list_component__["a" /* NoteListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_dashboard_note_details_note_details_component__["a" /* NoteDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__services_note_service__["a" /* NoteService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_note_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(authService, noteService, router) {
        this.authService = authService;
        this.noteService = noteService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.notes = profile.user.notes;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(689),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_note_service__["a" /* NoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_note_service__["a" /* NoteService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/dashboard.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__note__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_note_service__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoteDetailsComponent = (function () {
    function NoteDetailsComponent(noteService) {
        this.noteService = noteService;
    }
    NoteDetailsComponent.prototype.createNote = function (note) {
        var _this = this;
        this.noteService.createNote(note).subscribe(function (newNote) {
            _this.createHandler(newNote);
        });
    };
    NoteDetailsComponent.prototype.updateNote = function (note) {
        var _this = this;
        this.noteService.updateNote(note).subscribe(function (updatedNote) {
            _this.updateHandler(updatedNote);
        });
    };
    NoteDetailsComponent.prototype.deleteNote = function (noteId) {
        var _this = this;
        this.noteService.deleteNote(noteId).subscribe(function (deletedNoteId) {
            _this.deleteHandler(deletedNoteId);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__note__["a" /* Note */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__note__["a" /* Note */]) === 'function' && _a) || Object)
    ], NoteDetailsComponent.prototype, "note", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], NoteDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], NoteDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], NoteDetailsComponent.prototype, "deleteHandler", void 0);
    NoteDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-note-details',
            template: __webpack_require__(690),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_note_service__["a" /* NoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_note_service__["a" /* NoteService */]) === 'function' && _b) || Object])
    ], NoteDetailsComponent);
    return NoteDetailsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/note-details.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_note_service__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteListComponent = (function () {
    function NoteListComponent(noteService) {
        var _this = this;
        this.noteService = noteService;
        this.getIndexOfNote = function (noteId) {
            return _this.notes.findIndex(function (note) {
                return note._id === noteId;
            });
        };
        this.deleteNote = function (noteId) {
            var idx = _this.getIndexOfNote(noteId);
            if (idx !== -1) {
                _this.notes.splice(idx, 1);
                _this.selectNote(null);
            }
            return _this.notes;
        };
        this.addNote = function (note) {
            _this.notes.push(note);
            _this.selectNote(note);
            return _this.notes;
        };
        this.updateNote = function (note) {
            var idx = _this.getIndexOfNote(note._id);
            if (idx !== -1) {
                _this.notes[idx] = note;
                _this.selectNote(note);
            }
            return _this.notes;
        };
    }
    NoteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noteService.getNotes().subscribe(function (res) {
            _this.notes = res.notes;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NoteListComponent.prototype.selectNote = function (note) {
        this.selectedNote = note;
    };
    NoteListComponent.prototype.createNewNote = function () {
        var newNote = {
            title: '',
            description: ''
        };
        // By default, a newly-created note will have the selected state.
        this.selectNote(newNote);
    };
    NoteListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-note-list',
            template: __webpack_require__(691),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_note_service__["a" /* NoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_note_service__["a" /* NoteService */]) === 'function' && _a) || Object])
    ], NoteListComponent);
    return NoteListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/note-list.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Note; });
var Note = (function () {
    function Note() {
    }
    return Note;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/note.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(692),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/home.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessagesService.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessagesService.show(data.message, {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(693),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/login.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.isIn = false; // store state
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are now logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(694),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/navbar.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(695),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/profile.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, flashMessagesService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Fill in all fields to proceed.', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessagesService.show('Valid email required.', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('You have been registered! You can now log on.', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show('Unable to register user.', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(696),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/register.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/auth.guard.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/environment.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var requestUrl = 'users/register';
        headers.append('Content-Type', 'application/json');
        return this.http.post(requestUrl, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var requestUrl = 'users/authenticate';
        headers.append('Content-Type', 'application/json');
        return this.http.post(requestUrl, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var requestUrl = 'users/profile';
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(requestUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.lendToken = function () {
        return localStorage.getItem('id_token');
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/alan/dev/anote-app/app/src/auth.service.js.map

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <ul class=\"footer-row\">\n      <li><a href=\"http://anyz.me/github\">GitHub</a></li>\n      <li><a href=\"http://anyz.me/linkdn\">LinkedIn</a></li>\n      <li><a href=\"http://alanypz.com\">Personal</a></li>\n      <li><a href=\"mailto:alanypz@gmail.com?Subject=Hi%20\">Email</a></li>\n    </ul>\n  </div>\n</footer>\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n\n<div>\n  <app-note-list></app-note-list>\n</div>\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"note\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h3 *ngIf=\"note._id\">Note Info</h3>\n    <h3 *ngIf=\"!note._id\">New Note</h3>\n  </div>\n</div>\n<div *ngIf=\"note\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"note-title\">Name</label>\n      <input class=\"form-control\" name=\"note-title\" [(ngModel)]=\"note.title\" placeholder=\"Title\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"note-description\">Description</label>\n      <textarea class=\"form-control\" rows=\"3\" name=\"note-description\" [(ngModel)]=\"note.description\" placeholder=\"Note details\"></textarea>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!note._id\" (click)=\"createNote(note)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"note._id\" (click)=\"updateNote(note)\">Update</button>\n    <button class=\"btn btn-danger\" *ngIf=\"note._id\" (click)=\"deleteNote(note._id)\">Delete</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h3>My Notes</h3>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n        *ngFor=\"let note of notes\"\n        (click)=\"selectNote(note)\"\n        [class.active]=\"note === selectedNote\">\n        {{note.title}}\n      </li>\n    </ul>\n    <button class=\"btn btn-warning\" (click)=\"createNewNote()\">New</button>\n  </div>\n  <div class=\"col-md-5 col-md-offset-2\">\n    <app-note-details\n      [note]=\"selectedNote\"\n      [createHandler]=\"addNote\"\n      [updateHandler]=\"updateNote\"\n      [deleteHandler]=\"deleteNote\">\n    </app-note-details>\n  </div>\n</div>\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>aNote App</h1>\n  <p class=\"lead\">\n    A MEAN note taking application, from scratch.\n  </p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Node.js Backend</h3>\n    <p>\n      Node.js server-side with Express.js framework.\n      Manages routing, RESTful API, and MongoDB models.\n    </p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular Frontend</h3>\n    <p>\n      Angular 2 generates components and services client-side.\n      Angular CLI for simple local development and compilation.\n    </p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT & User Security</h3>\n    <p>\n      Full authentication with JSON web tokens. User accounts\n      are secured using salted password hashing.\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<div class=\"row\">\n  <div class=\"col-md-5\">\n    <form (submit)=\"onLoginSubmit()\">\n      <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggleState()\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">aNote</a>\n    </div>\n      <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'in': isIn }\">\n        <ul class=\"nav navbar-nav navbar-left\" (click)=\"toggleState()\">\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\" (click)=\"toggleState()\">\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n          <li *ngIf=\"!authService.loggedIn()\"[routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n          <li *ngIf=\"!authService.loggedIn()\"[routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n          <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n        </ul>\n  </div><!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2>{{user.name}}</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <strong>Username:</strong> {{user.username}}\n      </li>\n      <li class=\"list-group-item\">\n        <strong>Email:</strong> {{user.email}}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<div class=\"row\">\n  <div class=\"col-md-5\">\n    <form (submit)=\"onRegisterSubmit()\">\n      <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ })

},[716]);
//# sourceMappingURL=main.bundle.map