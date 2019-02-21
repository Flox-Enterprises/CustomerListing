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

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = "/api/product/";
var custApi = "/api/customer/";
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ApiService.prototype.getProducts = function () {
        return this.http.get(apiUrl + "getAll")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (heroes) { return console.log('fetched products'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProducts', [])));
    };
    ApiService.prototype.getProduct = function (id) {
        // const url = `${apiUrl}/${id}`;
        return this.http.get(apiUrl + "get/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("fetched product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getProduct id=" + id)));
    };
    ApiService.prototype.addProduct = function (product) {
        return this.http.post(apiUrl + "addNew", product, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (product) { return console.log("added product w/ id=" + product.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addProduct')));
    };
    ApiService.prototype.updateProduct = function (id, product) {
        // const url = `${apiUrl}/${id}`;
        return this.http.put(apiUrl + "update/" + id, product, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateProduct')));
    };
    ApiService.prototype.deleteProduct = function (id) {
        // const url = `${apiUrl}/${id}`;
        return this.http.delete(apiUrl + "delete/" + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteProduct')));
    };
    ApiService.prototype.getCustomers = function () {
        return this.http.get(custApi + "getAll")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (heroes) { return console.log('fetched customers'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCustomers', [])));
    };
    ApiService.prototype.getCustomer = function (id) {
        // const url = `${apiUrl}/${id}`;
        return this.http.get(custApi + "get/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("fetched customer id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getCustomer id=" + id)));
    };
    ApiService.prototype.addCustomer = function (cust) {
        return this.http.post(custApi + "addNew", cust, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (product) { return console.log("added customer w/ id=" + cust.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addCustomer')));
    };
    ApiService.prototype.deleteCustomer = function (id) {
        // const url = `${apiUrl}/${id}`;
        return this.http.delete(custApi + "delete/" + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted customer id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteCustomer')));
    };
    ApiService.prototype.updateCustomer = function (id, cust) {
        // const url = `${apiUrl}/${id}`;
        return this.http.put(custApi + "update/" + id, cust, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated customer id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateCustomer')));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");





var routes = [
    {
        path: 'products',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    },
    {
        path: 'customers',
        component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"100\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div> -->\n\n<div style=\"text-align:center; display: flex;\">\n  <!-- <button [routerLink]=\"['/products']\">PRODUCT</button> -->\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/products']\">\n      PRODUCT\n    </a>\n  </div>\n\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/customers']\">\n      CUSTOMER\n    </a>\n  </div>\n  <!-- <button [routerLink]=\"['/customers']\">CUSTOMER</button> -->\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 20px; }\n\n.button-row {\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxEZWxsXFxEZXNrdG9wXFxOZzdBcHBzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7O0FBR2I7RUFDQSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAgIC5idXR0b24tcm93IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Demo4AUS';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_custom_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-custom-modal */ "./node_modules/angular-custom-modal/angular-custom-modal.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
                _customers_customers_component__WEBPACK_IMPORTED_MODULE_10__["CustomersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                angular_custom_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customers/customers.component.html":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <!-- <a mat-flat-button color=\"primary\" [routerLink]=\"['/product-add']\"><mat-icon>add</mat-icon></a> -->\n    <a mat-flat-button color=\"primary\" (click)=\"addCustomer.open()\">\n      <mat-icon>add</mat-icon>\n    </a>\n\n  </div>\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"data\" class=\"example-table\" matSort matSortActive=\"cust_name\" matSortDisableClear\n      matSortDirection=\"asc\">\n\n      <!-- Cust Name Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef>Id</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n      </ng-container>\n\n      <!-- Cust Name Column -->\n      <ng-container matColumnDef=\"cust_name\">\n        <th mat-header-cell *matHeaderCellDef>Customer Name</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n      </ng-container>\n\n      <!-- Cust Address Column -->\n      <ng-container matColumnDef=\"cust_address\">\n        <th mat-header-cell *matHeaderCellDef>Address</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.address}}</td>\n      </ng-container>\n\n      <!-- Actions Column -->\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef>Actions</th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-icon (click)=\"editCust(row.id); editCustomer.open()\">create</mat-icon>\n          <mat-icon (click)=\"deleteCust(row.id)\">delete_forever</mat-icon>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n</div>\n\n<modal #addCustomer>\n  <ng-template #modalHeader>\n    <h2>ADD CUSTOMER</h2>\n  </ng-template>\n  <ng-template #modalBody>\n    <div class=\"example-container mat-elevation-z8\">\n      <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n      </div>\n      <!-- <div class=\"button-row\">\n        <a mat-flat-button color=\"primary\" [routerLink]=\"['/products']\">\n          <mat-icon>list</mat-icon>\n        </a>\n      </div> -->\n      <mat-card class=\"example-card\">\n        <form [formGroup]=\"customerForm\" (ngSubmit)=\"onFormSubmit(customerForm.value)\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Customer Name\" formControlName=\"cust_name\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!customerForm.get('cust_name').valid && customerForm.get('cust_name').touched\">Please enter\n                Customer Name</span>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Address\" formControlName=\"cust_address\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!customerForm.get('cust_address').valid && customerForm.get('cust_address').touched\">Address</span>\n            </mat-error>\n          </mat-form-field>\n\n          <div class=\"button-row\">\n            <button type=\"submit\" *ngIf=\"!customerForm.valid\" [disabled]=\"!customerForm.valid\" mat-flat-button color=\"primary\">\n              <mat-icon>save</mat-icon>\n            </button>\n\n            <button type=\"submit\" *ngIf=\"customerForm.valid\" [disabled]=\"!customerForm.valid\" mat-flat-button color=\"primary\">\n              <mat-icon (click)=\"addCustomer.close()\">save</mat-icon>\n            </button>\n          </div>\n        </form>\n      </mat-card>\n    </div>\n  </ng-template>\n</modal>\n\n<modal #editCustomer>\n  <ng-template #modalHeader>\n    <h2>EDIT CUSTOMER</h2>\n  </ng-template>\n  <ng-template #modalBody>\n    <div class=\"example-container mat-elevation-z8\">\n      <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n      </div>\n      <!-- <div class=\"button-row\">\n        <a mat-flat-button color=\"primary\" [routerLink]=\"['/products']\">\n          <mat-icon>list</mat-icon>\n        </a>\n      </div> -->\n      <mat-card class=\"example-card\">\n        <form [formGroup]=\"editCustomerForm\" (ngSubmit)=\"onFormSubmit(editCustomerForm.value, editId)\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Customer Name\" formControlName=\"cust_name\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!editCustomerForm.get('cust_name').valid && editCustomerForm.get('cust_name').touched\">Please\n                enter\n                Customer Name</span>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Address\" formControlName=\"cust_address\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!editCustomerForm.get('cust_address').valid && editCustomerForm.get('cust_address').touched\">Address</span>\n            </mat-error>\n          </mat-form-field>\n\n          <div class=\"button-row\">\n            <button type=\"submit\" *ngIf=\"!editCustomerForm.valid\" [disabled]=\"!editCustomerForm.valid\" mat-flat-button color=\"primary\">\n              <mat-icon>save</mat-icon>\n            </button>\n\n            <button type=\"submit\" *ngIf=\"editCustomerForm.valid\" [disabled]=\"!editCustomerForm.valid\" mat-flat-button color=\"primary\">\n              <mat-icon (click)=\"editCustomer.close()\">save</mat-icon>\n            </button>\n          </div>\n        </form>\n      </mat-card>\n    </div>\n  </ng-template>\n</modal>"

/***/ }),

/***/ "./src/app/customers/customers.component.scss":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.example-container {\n  position: relative;\n  padding: 5px; }\n.example-table-container {\n  position: relative;\n  max-height: 400px;\n  overflow: auto; }\ntable {\n  width: 100%; }\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px; }\n.mat-column-created {\n  max-width: 124px; }\n.mat-flat-button {\n  margin: 5px; }\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n.example-full-width {\n  width: 100%; }\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px; }\n.button-row {\n  margin: 10px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL0M6XFxVc2Vyc1xcRGVsbFxcRGVza3RvcFxcTmc3QXBwcy9zcmNcXGFwcFxcY3VzdG9tZXJzXFxjdXN0b21lcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7QUFHaEI7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixRQUFRO0VBQ1IsK0JBQStCO0VBQy9CLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBO0FBR3pCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtBQUdwQixrQkFBQTtBQUNBOztFQUVFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUdiO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtdGFibGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1sb2FkaW5nLXNoYWRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDU2cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtcmF0ZS1saW1pdC1yZWFjaGVkIHtcclxuICAgIGNvbG9yOiAjOTgwMDAwO1xyXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLyogQ29sdW1uIFdpZHRocyAqL1xyXG4gIC5tYXQtY29sdW1uLW51bWJlcixcclxuICAubWF0LWNvbHVtbi1zdGF0ZSB7XHJcbiAgICBtYXgtd2lkdGg6IDY0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY29sdW1uLWNyZWF0ZWQge1xyXG4gICAgbWF4LXdpZHRoOiAxMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mbGF0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoOm50aC1sYXN0LWNoaWxkKCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi1yb3cge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");





var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['id', 'cust_name', 'cust_address', 'action'];
        this.isLoadingResults = true;
        this.prod_name = '';
        this.prod_desc = '';
        this.prod_price = null;
        this.updated_at = null;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerForm = this.formBuilder.group({
            'cust_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'cust_address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.editCustomerForm = this.formBuilder.group({
            'cust_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'cust_address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.api.getCustomers()
            .subscribe(function (res) {
            _this.data = res['data'];
            // console.log(this.data);
            _this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    CustomersComponent.prototype.onFormSubmit = function (form, id) {
        // console.log(form);
        var _this = this;
        if (id) {
            // this.isLoadingResults = true;
            this.api.updateCustomer(id, form)
                .subscribe(function (res) {
                // let id = res['_id'];
                // console.log(res);
                // this.isLoadingResults = false;
                _this.getCusts();
                // this.router.navigate(['/products']);
            }, function (err) {
                console.log(err);
                // this.isLoadingResults = false;
            });
        }
        else {
            // this.isLoadingResults = true;
            this.api.addCustomer(form)
                .subscribe(function (res) {
                // let id = res['_id'];
                // console.log(res);
                // this.isLoadingResults = false;
                _this.getCusts();
                _this.customerForm.reset();
                // $("#addProduct").hide();
                // this.router.navigate(['/products']);
            }, function (err) {
                console.log(err);
                // this.isLoadingResults = false;
            });
        }
    };
    CustomersComponent.prototype.getCusts = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.api.getCustomers()
            .subscribe(function (res) {
            _this.data = res['data'];
            // console.log(this.data);
            _this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    CustomersComponent.prototype.editCust = function (id) {
        var _this = this;
        this.api.getCustomer(id)
            .subscribe(function (res) {
            _this.singleData = res['data'][0];
            _this.editId = id;
            // console.log(this.singleData);
            _this.editCustomerForm = _this.formBuilder.group({
                'cust_name': [_this.singleData.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                'cust_address': [_this.singleData.address, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            // this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            // this.isLoadingResults = false;
        });
    };
    CustomersComponent.prototype.deleteCust = function (id) {
        var _this = this;
        // console.log(id);
        this.api.deleteCustomer(id)
            .subscribe(function (res) {
            // console.log(res);
            _this.getCusts();
        }, function (err) {
            console.log(err);
        });
    };
    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.scss */ "./src/app/customers/customers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <!-- <a mat-flat-button color=\"primary\" [routerLink]=\"['/product-add']\"><mat-icon>add</mat-icon></a> -->\n    <a mat-flat-button color=\"primary\" (click)=\"addProduct.open()\">\n      <mat-icon>add</mat-icon>\n    </a>\n\n  </div>\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"data\" class=\"example-table\" matSort matSortActive=\"prod_name\" matSortDisableClear\n      matSortDirection=\"asc\">\n\n      <!-- Product Id Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef>ID</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n      </ng-container>\n\n      <!-- Product Name Column -->\n      <ng-container matColumnDef=\"prod_name\">\n        <th mat-header-cell *matHeaderCellDef>Product Name</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n      </ng-container>\n\n      <!-- Product Desc. Column -->\n      <ng-container matColumnDef=\"prod_desc\">\n        <th mat-header-cell *matHeaderCellDef>Product Description</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.description}}</td>\n      </ng-container>\n\n      <!-- Product Price Column -->\n      <ng-container matColumnDef=\"prod_price\">\n        <th mat-header-cell *matHeaderCellDef>Product Price</th>\n        <td mat-cell *matCellDef=\"let row\">Rs. {{row.price}}</td>\n      </ng-container>\n\n      <!-- Actions Column -->\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef>Actions</th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-icon (click)=\"editProd(row.id); editProduct.open()\">create</mat-icon>\n          <mat-icon (click)=\"deleteProd(row.id)\">delete_forever</mat-icon>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n</div>\n\n<modal #addProduct>\n  <ng-template #modalHeader>\n    <h2>ADD PRODUCT</h2>\n  </ng-template>\n  <ng-template #modalBody>\n    <div class=\"example-container mat-elevation-z8\">\n      <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n      </div>\n      <!-- <div class=\"button-row\">\n        <a mat-flat-button color=\"primary\" [routerLink]=\"['/products']\">\n          <mat-icon>list</mat-icon>\n        </a>\n      </div> -->\n      <mat-card class=\"example-card\">\n        <form [formGroup]=\"productForm\" (ngSubmit)=\"onFormSubmit(productForm.value)\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Product Name\" formControlName=\"prod_name\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!productForm.get('prod_name').valid && productForm.get('prod_name').touched\">Please enter\n                Product Name</span>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Product Desc\" formControlName=\"prod_desc\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!productForm.get('prod_desc').valid && productForm.get('prod_desc').touched\">Please enter\n                Product Description</span>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Product Price\" formControlName=\"prod_price\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!productForm.get('prod_price').valid && productForm.get('prod_price').touched\">Please enter\n                Product Price</span>\n            </mat-error>\n          </mat-form-field>\n          <div class=\"button-row\">\n            <button type=\"submit\" *ngIf=\"!productForm.valid\" [disabled]=\"!productForm.valid\" mat-flat-button color=\"primary\">\n              <mat-icon>save</mat-icon>\n            </button>\n\n            <button type=\"submit\" *ngIf=\"productForm.valid\" [disabled]=\"!productForm.valid\" mat-flat-button color=\"primary\">\n              <mat-icon (click)=\"addProduct.close()\">save</mat-icon>\n            </button>\n          </div>\n        </form>\n      </mat-card>\n    </div>\n  </ng-template>\n</modal>\n\n<modal #editProduct>\n  <ng-template #modalHeader>\n    <h2>EDIT PRODUCT</h2>\n  </ng-template>\n  <ng-template #modalBody>\n    <div class=\"example-container mat-elevation-z8\">\n      <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n      </div>\n      <!-- <div class=\"button-row\">\n        <a mat-flat-button color=\"primary\" [routerLink]=\"['/products']\">\n          <mat-icon>list</mat-icon>\n        </a>\n      </div> -->\n      <mat-card class=\"example-card\">\n        <form [formGroup]=\"editProductForm\" (ngSubmit)=\"onFormSubmit(editProductForm.value, editId)\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Product Name\" formControlName=\"prod_name\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!productForm.get('prod_name').valid && productForm.get('prod_name').touched\">Please enter\n                Product Name</span>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Product Desc\" formControlName=\"prod_desc\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!productForm.get('prod_desc').valid && productForm.get('prod_desc').touched\">Please enter\n                Product Description</span>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Product Price\" formControlName=\"prod_price\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!productForm.get('prod_price').valid && productForm.get('prod_price').touched\">Please enter\n                Product Price</span>\n            </mat-error>\n          </mat-form-field>\n          <div class=\"button-row\">\n            <button type=\"submit\" *ngIf=\"!editProductForm.valid\" [disabled]=\"!editProductForm.valid\" mat-flat-button color=\"primary\">\n              <mat-icon>save</mat-icon>\n            </button>\n\n            <button type=\"submit\" *ngIf=\"editProductForm.valid\" [disabled]=\"!editProductForm.valid\" mat-flat-button\n              color=\"primary\">\n              <mat-icon (click)=\"editProduct.close()\">save</mat-icon>\n            </button>\n          </div>\n        </form>\n      </mat-card>\n    </div>\n  </ng-template>\n</modal>"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.example-container {\n  position: relative;\n  padding: 5px; }\n.example-table-container {\n  position: relative;\n  max-height: 400px;\n  overflow: auto; }\ntable {\n  width: 100%; }\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px; }\n.mat-column-created {\n  max-width: 124px; }\n.mat-flat-button {\n  margin: 5px; }\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n.example-full-width {\n  width: 100%; }\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px; }\n.button-row {\n  margin: 10px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvQzpcXFVzZXJzXFxEZWxsXFxEZXNrdG9wXFxOZzdBcHBzL3NyY1xcYXBwXFxwcm9kdWN0c1xccHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7QUFHaEI7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixRQUFRO0VBQ1IsK0JBQStCO0VBQy9CLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBO0FBR3pCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtBQUdwQixrQkFBQTtBQUNBOztFQUVFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUdiO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RydWN0dXJlICovXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbG9hZGluZy1zaGFkZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiA1NnB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXJhdGUtbGltaXQtcmVhY2hlZCB7XHJcbiAgICBjb2xvcjogIzk4MDAwMDtcclxuICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENvbHVtbiBXaWR0aHMgKi9cclxuICAubWF0LWNvbHVtbi1udW1iZXIsXHJcbiAgLm1hdC1jb2x1bW4tc3RhdGUge1xyXG4gICAgbWF4LXdpZHRoOiA2NHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWNvbHVtbi1jcmVhdGVkIHtcclxuICAgIG1heC13aWR0aDogMTI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZmxhdC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aDpudGgtbGFzdC1jaGlsZCgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24tcm93IHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





// import * as $ from "jquery";
// declare var $:any;
var ProductsComponent = /** @class */ (function () {
    // isLoadingResults = false;
    function ProductsComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['id', 'prod_name', 'prod_desc', 'prod_price', 'action'];
        this.isLoadingResults = true;
        this.prod_name = '';
        this.prod_desc = '';
        this.prod_price = null;
        this.updated_at = null;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productForm = this.formBuilder.group({
            'prod_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'prod_desc': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'prod_price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.editProductForm = this.formBuilder.group({
            'prod_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'prod_desc': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'prod_price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.api.getProducts()
            .subscribe(function (res) {
            _this.data = res['data'];
            // console.log(this.data);
            _this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    ProductsComponent.prototype.getProds = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.api.getProducts()
            .subscribe(function (res) {
            _this.data = res['data'];
            // console.log(this.data);
            _this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    ProductsComponent.prototype.onFormSubmit = function (form, id) {
        // console.log(form);
        var _this = this;
        if (id) {
            // this.isLoadingResults = true;
            this.api.updateProduct(id, form)
                .subscribe(function (res) {
                // let id = res['_id'];
                // console.log(res);
                // this.isLoadingResults = false;
                _this.getProds();
                // this.router.navigate(['/products']);
            }, function (err) {
                console.log(err);
                // this.isLoadingResults = false;
            });
        }
        else {
            // this.isLoadingResults = true;
            this.api.addProduct(form)
                .subscribe(function (res) {
                // let id = res['_id'];
                // console.log(res);
                // this.isLoadingResults = false;
                _this.getProds();
                _this.productForm.reset();
                // $("#addProduct").hide();
                // this.router.navigate(['/products']);
            }, function (err) {
                console.log(err);
                // this.isLoadingResults = false;
            });
        }
    };
    ProductsComponent.prototype.editProd = function (id) {
        var _this = this;
        this.api.getProduct(id)
            .subscribe(function (res) {
            _this.singleData = res['data'][0];
            _this.editId = id;
            // console.log(this.singleData);
            _this.editProductForm = _this.formBuilder.group({
                'prod_name': [_this.singleData.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'prod_desc': [_this.singleData.description, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'prod_price': [_this.singleData.price, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            // this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            // this.isLoadingResults = false;
        });
    };
    ProductsComponent.prototype.deleteProd = function (id) {
        var _this = this;
        // console.log(id);
        this.api.deleteProduct(id)
            .subscribe(function (res) {
            // console.log(res);
            _this.getProds();
        }, function (err) {
            console.log(err);
        });
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ProductsComponent);
    return ProductsComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\Desktop\Ng7Apps\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map