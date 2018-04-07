webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/pages/datepicker-page/datepicker-page.module": [
		"../../../../../src/app/pages/datepicker-page/datepicker-page.module.ts",
		"datepicker-page.module"
	],
	"app/pages/drag-and-drop-page/drag-and-drop-page.module": [
		"../../../../../src/app/pages/drag-and-drop-page/drag-and-drop-page.module.ts",
		"drag-and-drop-page.module"
	],
	"app/pages/editor-page/editor-page.module": [
		"../../../../../src/app/pages/editor-page/editor-page.module.ts",
		"editor-page.module"
	],
	"app/pages/google-map-page/google-map-page.module": [
		"../../../../../src/app/pages/google-map-page/google-map-page.module.ts",
		"google-map-page.module"
	],
	"app/pages/tree-page/tree-page.module": [
		"../../../../../src/app/pages/tree-page/tree-page.module.ts",
		"tree-page.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
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
    function AppComponent(mdIconRegistry, router, translateService) {
        this.router = router;
        this.loading = true;
        mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationEnd */]) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
        this.loading = false;
        // this language will be used as a fallback when a translation isn't found in the current language
        translateService.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translateService.use('en');
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.loading'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "loading", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatIconRegistry */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_page_dashboard_page_component__ = __webpack_require__("../../../../../src/app/pages/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_typography_page_typography_page_component__ = __webpack_require__("../../../../../src/app/pages/typography-page/typography-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_color_page_color_page_component__ = __webpack_require__("../../../../../src/app/pages/color-page/color-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_buttons_page_buttons_page_component__ = __webpack_require__("../../../../../src/app/pages/buttons-page/buttons-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_form_elements_page_form_elements_page_component__ = __webpack_require__("../../../../../src/app/pages/form-elements-page/form-elements-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_form_wizard_page_form_wizard_page_component__ = __webpack_require__("../../../../../src/app/pages/form-wizard-page/form-wizard-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_chips_page_chips_page_component__ = __webpack_require__("../../../../../src/app/pages/chips-page/chips-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_dialog_page_dialog_page_component__ = __webpack_require__("../../../../../src/app/pages/dialog-page/dialog-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_grid_list_page_grid_list_page_component__ = __webpack_require__("../../../../../src/app/pages/grid-list-page/grid-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_icons_page_icons_page_component__ = __webpack_require__("../../../../../src/app/pages/icons-page/icons-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_list_page_list_page_component__ = __webpack_require__("../../../../../src/app/pages/list-page/list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_menu_page_menu_page_component__ = __webpack_require__("../../../../../src/app/pages/menu-page/menu-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_progress_bar_page_progress_bar_page_component__ = __webpack_require__("../../../../../src/app/pages/progress-bar-page/progress-bar-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_spinner_page_spinner_page_component__ = __webpack_require__("../../../../../src/app/pages/spinner-page/spinner-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_snackbar_page_snackbar_page_component__ = __webpack_require__("../../../../../src/app/pages/snackbar-page/snackbar-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tab_page_tab_page_component__ = __webpack_require__("../../../../../src/app/pages/tab-page/tab-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_toolbar_page_toolbar_page_component__ = __webpack_require__("../../../../../src/app/pages/toolbar-page/toolbar-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_tooltip_page_tooltip_page_component__ = __webpack_require__("../../../../../src/app/pages/tooltip-page/tooltip-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_sidenav_page_sidenav_page_component__ = __webpack_require__("../../../../../src/app/pages/sidenav-page/sidenav-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_flex_layout_page_flex_layout_page_component__ = __webpack_require__("../../../../../src/app/pages/flex-layout-page/flex-layout-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_cards_page_cards_page_component__ = __webpack_require__("../../../../../src/app/pages/cards-page/cards-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_line_chart_page_line_chart_page_component__ = __webpack_require__("../../../../../src/app/pages/line-chart-page/line-chart-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_bar_chart_page_bar_chart_page_component__ = __webpack_require__("../../../../../src/app/pages/bar-chart-page/bar-chart-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_bubble_chart_page_bubble_chart_page_component__ = __webpack_require__("../../../../../src/app/pages/bubble-chart-page/bubble-chart-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_heatmap_page_heatmap_page_component__ = __webpack_require__("../../../../../src/app/pages/heatmap-page/heatmap-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_pie_chart_page_pie_chart_page_component__ = __webpack_require__("../../../../../src/app/pages/pie-chart-page/pie-chart-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_radar_page_radar_page_component__ = __webpack_require__("../../../../../src/app/pages/radar-page/radar-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_table_page_table_page_component__ = __webpack_require__("../../../../../src/app/pages/table-page/table-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_scroll_page_scroll_page_component__ = __webpack_require__("../../../../../src/app/pages/scroll-page/scroll-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_file_upload_page_file_upload_page_component__ = __webpack_require__("../../../../../src/app/pages/file-upload-page/file-upload-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_stepper_page_stepper_page_component__ = __webpack_require__("../../../../../src/app/pages/stepper-page/stepper-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_chat_page_chat_page_component__ = __webpack_require__("../../../../../src/app/pages/chat-page/chat-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_testimonials_page_testimonials_page_component__ = __webpack_require__("../../../../../src/app/pages/testimonials-page/testimonials-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_pricing_tables_page_pricing_tables_page_component__ = __webpack_require__("../../../../../src/app/pages/pricing-tables-page/pricing-tables-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_products_page_products_page_component__ = __webpack_require__("../../../../../src/app/pages/products-page/products-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_product_page_product_page_component__ = __webpack_require__("../../../../../src/app/pages/product-page/product-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_cart_page_cart_page_component__ = __webpack_require__("../../../../../src/app/pages/cart-page/cart-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_portfolio_page_portfolio_page_component__ = __webpack_require__("../../../../../src/app/pages/portfolio-page/portfolio-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_login_page_login_page_component__ = __webpack_require__("../../../../../src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_sign_up_page_sign_up_page_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/sign-up-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_sign_up_page_signing_up_dialog_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/signing-up-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_sign_up_page_account_exist_dialog_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/account-exist-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_sign_up_page_contact_support_dialog_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/contact-support-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_sign_up_page_password_expire_dialog_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/password-expire-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_sign_up_page_sign_in_dialog_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/sign-in-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_sign_up_page_error_dialog_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/error-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_color_page_palette_palette_component__ = __webpack_require__("../../../../../src/app/pages/color-page/palette/palette.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_dialog_page_dialog_example_component__ = __webpack_require__("../../../../../src/app/pages/dialog-page/dialog-example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__sidemenu_sidemenu_module__ = __webpack_require__("../../../../../src/app/sidemenu/sidemenu.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__resize_resize_module__ = __webpack_require__("../../../../../src/app/resize/resize.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__routes_app_routes_module__ = __webpack_require__("../../../../../src/app/routes/app-routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_multi_language_page_multi_language_page_component__ = __webpack_require__("../../../../../src/app/pages/multi-language-page/multi-language-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_register_page_register_page_component__ = __webpack_require__("../../../../../src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































































var PERFECT_SCROLLBAR_CONFIG = {};
// AoT requires an exported function for factories for translate module
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_68__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var firebaseConf = {
    apiKey: 'AIzaSyBuP6vTw0EJrmnY0o9-yVF5PIXH2nTA4BE',
    authDomain: 'web-app-a4b10.firebaseapp.com',
    databaseURL: 'https://web-app-a4b10.firebaseio.com',
    projectId: 'web-app-a4b10',
    storageBucket: 'web-app-a4b10.appspot.com',
    messagingSenderId: '1018721793832'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_10__pages_main_page_main_page_component__["a" /* MainPageComponent */], __WEBPACK_IMPORTED_MODULE_49__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_page_dashboard_page_component__["a" /* DashboardPageComponent */], __WEBPACK_IMPORTED_MODULE_12__pages_typography_page_typography_page_component__["a" /* TypographyPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_color_page_color_page_component__["a" /* ColorPageComponent */], __WEBPACK_IMPORTED_MODULE_58__pages_color_page_palette_palette_component__["a" /* PaletteComponent */], __WEBPACK_IMPORTED_MODULE_14__pages_buttons_page_buttons_page_component__["a" /* ButtonsPageComponent */], __WEBPACK_IMPORTED_MODULE_15__pages_form_elements_page_form_elements_page_component__["a" /* FormElementsPageComponent */], __WEBPACK_IMPORTED_MODULE_16__pages_form_wizard_page_form_wizard_page_component__["a" /* FormWizardPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_chips_page_chips_page_component__["a" /* ChipsPageComponent */], __WEBPACK_IMPORTED_MODULE_18__pages_dialog_page_dialog_page_component__["a" /* DialogPageComponent */], __WEBPACK_IMPORTED_MODULE_59__pages_dialog_page_dialog_example_component__["a" /* DialogExampleComponent */], __WEBPACK_IMPORTED_MODULE_19__pages_grid_list_page_grid_list_page_component__["a" /* GridListPageComponent */], __WEBPACK_IMPORTED_MODULE_20__pages_icons_page_icons_page_component__["a" /* IconsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_list_page_list_page_component__["a" /* ListPageComponent */], __WEBPACK_IMPORTED_MODULE_22__pages_menu_page_menu_page_component__["a" /* MenuPageComponent */], __WEBPACK_IMPORTED_MODULE_23__pages_progress_bar_page_progress_bar_page_component__["a" /* ProgressBarPageComponent */], __WEBPACK_IMPORTED_MODULE_24__pages_spinner_page_spinner_page_component__["a" /* SpinnerPageComponent */], __WEBPACK_IMPORTED_MODULE_25__pages_snackbar_page_snackbar_page_component__["a" /* SnackbarPageComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tab_page_tab_page_component__["a" /* TabPageComponent */], __WEBPACK_IMPORTED_MODULE_27__pages_toolbar_page_toolbar_page_component__["a" /* ToolbarPageComponent */], __WEBPACK_IMPORTED_MODULE_28__pages_tooltip_page_tooltip_page_component__["a" /* TooltipPageComponent */], __WEBPACK_IMPORTED_MODULE_29__pages_sidenav_page_sidenav_page_component__["a" /* SidenavPageComponent */], __WEBPACK_IMPORTED_MODULE_30__pages_flex_layout_page_flex_layout_page_component__["a" /* FlexLayoutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_cards_page_cards_page_component__["a" /* CardsPageComponent */], __WEBPACK_IMPORTED_MODULE_32__pages_line_chart_page_line_chart_page_component__["a" /* LineChartPageComponent */], __WEBPACK_IMPORTED_MODULE_33__pages_bar_chart_page_bar_chart_page_component__["a" /* BarChartPageComponent */], __WEBPACK_IMPORTED_MODULE_34__pages_bubble_chart_page_bubble_chart_page_component__["a" /* BubbleChartPageComponent */], __WEBPACK_IMPORTED_MODULE_35__pages_heatmap_page_heatmap_page_component__["a" /* HeatmapPageComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_pie_chart_page_pie_chart_page_component__["a" /* PieChartPageComponent */], __WEBPACK_IMPORTED_MODULE_37__pages_radar_page_radar_page_component__["a" /* RadarPageComponent */],
                __WEBPACK_IMPORTED_MODULE_38__pages_table_page_table_page_component__["a" /* TablePageComponent */], __WEBPACK_IMPORTED_MODULE_39__pages_scroll_page_scroll_page_component__["a" /* ScrollPageComponent */], __WEBPACK_IMPORTED_MODULE_40__pages_file_upload_page_file_upload_page_component__["a" /* FileUploadPageComponent */],
                __WEBPACK_IMPORTED_MODULE_41__pages_stepper_page_stepper_page_component__["a" /* StepperPageComponent */],
                __WEBPACK_IMPORTED_MODULE_50__pages_login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_51__pages_sign_up_page_sign_up_page_component__["a" /* SignUpPageComponent */],
                __WEBPACK_IMPORTED_MODULE_52__pages_sign_up_page_signing_up_dialog_component__["a" /* SigningUpDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_53__pages_sign_up_page_account_exist_dialog_component__["a" /* AccountExistDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_54__pages_sign_up_page_contact_support_dialog_component__["a" /* ContactSupportDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_55__pages_sign_up_page_password_expire_dialog_component__["a" /* PasswordExpireDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_56__pages_sign_up_page_sign_in_dialog_component__["a" /* SignInDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_57__pages_sign_up_page_error_dialog_component__["a" /* ErrorDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_42__pages_chat_page_chat_page_component__["a" /* ChatPageComponent */],
                __WEBPACK_IMPORTED_MODULE_43__pages_testimonials_page_testimonials_page_component__["a" /* TestimonialsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_44__pages_pricing_tables_page_pricing_tables_page_component__["a" /* PricingTablesPageComponent */],
                __WEBPACK_IMPORTED_MODULE_45__pages_products_page_products_page_component__["b" /* ProductsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_45__pages_products_page_products_page_component__["a" /* CartButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_47__pages_cart_page_cart_page_component__["a" /* CartPageComponent */],
                __WEBPACK_IMPORTED_MODULE_46__pages_product_page_product_page_component__["a" /* ProductPageComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pages_portfolio_page_portfolio_page_component__["a" /* PortfolioPageComponent */],
                __WEBPACK_IMPORTED_MODULE_65__pages_multi_language_page_multi_language_page_component__["a" /* MultiLanguagePageComponent */],
                __WEBPACK_IMPORTED_MODULE_76__pages_register_page_register_page_component__["a" /* RegisterPageComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_59__pages_dialog_page_dialog_example_component__["a" /* DialogExampleComponent */],
                __WEBPACK_IMPORTED_MODULE_45__pages_products_page_products_page_component__["a" /* CartButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_52__pages_sign_up_page_signing_up_dialog_component__["a" /* SigningUpDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_53__pages_sign_up_page_account_exist_dialog_component__["a" /* AccountExistDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_54__pages_sign_up_page_contact_support_dialog_component__["a" /* ContactSupportDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_55__pages_sign_up_page_password_expire_dialog_component__["a" /* PasswordExpireDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_56__pages_sign_up_page_sign_in_dialog_component__["a" /* SignInDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_57__pages_sign_up_page_error_dialog_component__["a" /* ErrorDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_63__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["e" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["i" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["m" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["p" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["q" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["t" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["u" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["v" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["y" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["z" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["B" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["C" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["D" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["F" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["H" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["G" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["J" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["L" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["M" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["N" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["o" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_70__angular_material__["K" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_69__angular_cdk_overlay__["d" /* OverlayModule */],
                __WEBPACK_IMPORTED_MODULE_71__angular_cdk_portal__["f" /* PortalModule */],
                __WEBPACK_IMPORTED_MODULE_60__sidemenu_sidemenu_module__["a" /* SidemenuModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forRoot(PERFECT_SCROLLBAR_CONFIG),
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_64_ngx_echarts__["a" /* AngularEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_9__covalent_core__["d" /* CovalentMediaModule */],
                __WEBPACK_IMPORTED_MODULE_9__covalent_core__["c" /* CovalentFileModule */],
                __WEBPACK_IMPORTED_MODULE_9__covalent_core__["h" /* CovalentStepsModule */],
                __WEBPACK_IMPORTED_MODULE_9__covalent_core__["b" /* CovalentDataTableModule */],
                __WEBPACK_IMPORTED_MODULE_9__covalent_core__["g" /* CovalentSearchModule */],
                __WEBPACK_IMPORTED_MODULE_9__covalent_core__["f" /* CovalentPagingModule */],
                __WEBPACK_IMPORTED_MODULE_9__covalent_core__["e" /* CovalentNotificationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__covalent_core__["a" /* CovalentCommonModule */],
                __WEBPACK_IMPORTED_MODULE_61__resize_resize_module__["a" /* ResizeModule */],
                __WEBPACK_IMPORTED_MODULE_67__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_66__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_66__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_67__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_62__routes_app_routes_module__["a" /* AppRoutesModule */],
                __WEBPACK_IMPORTED_MODULE_72_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConf),
                __WEBPACK_IMPORTED_MODULE_73_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_74_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_75__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_77__services_api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/bar-chart-page/bar-chart-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Bar Chart</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-title>Animated</mat-card-title>\r\n      <mat-card-content>\r\n        <div echarts [options]=\"animatedBarOption\" (chartInit)=\"chartInstances.push($event)\" class=\"bar-chart\"></div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"50\">\r\n        <mat-card>\r\n          <mat-card-title>Simple</mat-card-title>\r\n          <mat-card-content>\r\n            <div echarts [options]=\"simpleBarChartOption\" (chartInit)=\"chartInstances.push($event)\" class=\"bar-chart\"></div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"50\">\r\n        <mat-card>\r\n          <mat-card-title>Horizontal</mat-card-title>\r\n          <mat-card-content>\r\n            <div echarts [options]=\"horizontalBarChartOption\" (chartInit)=\"chartInstances.push($event)\" class=\"bar-chart large\"></div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/bar-chart-page/bar-chart-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bar-chart {\n  height: 350px; }\n  .bar-chart.large {\n    height: 600px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/bar-chart-page/bar-chart-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_colors__ = __webpack_require__("../../../../../src/app/utils/colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__ = __webpack_require__("../../../../../src/app/resize/resize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarChartPageComponent = (function () {
    function BarChartPageComponent(resizeService) {
        var _this = this;
        this.resizeService = resizeService;
        // Add router animation
        this.routerAnimation = true;
        // Chart instances used for resizing after layout changes
        this.chartInstances = [];
        // Chart models
        this.animatedBarOption = {
            legend: {
                data: ['Bar', 'Bar2'],
                align: 'left',
                bottom: 0,
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            },
            toolbox: {
                feature: {
                    magicType: {
                        type: ['stack', 'tiled'],
                        title: {
                            stack: 'Stack',
                            tiled: 'Tiled',
                            textStyle: {
                                color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                            }
                        }
                    },
                    saveAsImage: {
                        pixelRatio: 2,
                        title: 'Save',
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            },
            tooltip: {},
            xAxis: {
                data: this.getAnimatedBarXAxisData(),
                silent: false,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisTicks: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                }
            },
            yAxis: {
                axisLabel: {
                    textStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisTicks: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                }
            },
            series: [{
                    name: 'Bar',
                    type: 'bar',
                    stack: 'firstStack',
                    data: this.getAnimatedBarData(),
                    animationDelay: function (idx) {
                        return idx * 10;
                    },
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisTicks: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }, {
                    name: 'Bar2',
                    type: 'bar',
                    stack: 'firstStack',
                    data: this.getAnimatedBarData(),
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    },
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["b" /* MAT_DEEP_ORANGE */]._500
                        }
                    }
                }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        this.simpleBarChartOption = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Bar 1', 'Bar 2'],
                bottom: 0,
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            },
            toolbox: {
                show: true,
                feature: {
                    magicType: {
                        show: true,
                        type: ['line', 'bar'],
                        title: {
                            line: 'Line',
                            bar: 'Bar',
                            textStyle: {
                                color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                            }
                        }
                    },
                    saveAsImage: {
                        show: true,
                        title: 'Save',
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    axisLabel: {
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisTicks: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisTicks: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            ],
            series: [
                {
                    name: 'Bar 1',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'Average' }
                        ]
                    },
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                        }
                    }
                },
                {
                    name: 'Bar 2',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    markPoint: {
                        data: [
                            { name: 'Mark 1', value: 182.2, xAxis: 7, yAxis: 183 },
                            { name: 'Mark 2', value: 2.3, xAxis: 11, yAxis: 3 }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    },
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["b" /* MAT_DEEP_ORANGE */]._500
                        }
                    }
                }
            ]
        };
        this.horizontalBarChartOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Bar 1', 'Bar 2', 'Bar 3'],
                bottom: 0,
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisTicks: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'category',
                    axisTick: { show: false },
                    data: ['1', '2', '3', '4'],
                    axisLabel: {
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisTicks: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            ],
            series: [
                {
                    name: 'Bar 1',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["b" /* MAT_DEEP_ORANGE */]._500
                        }
                    },
                    data: [200, 170, 240, 244]
                },
                {
                    name: 'Bar 3',
                    type: 'bar',
                    stack: 'Stack',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                        }
                    },
                    data: [320, 302, 341, 374]
                },
                {
                    name: 'Bar 2',
                    type: 'bar',
                    stack: 'Stack',
                    label: {
                        normal: {
                            show: true,
                            position: 'left'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A700
                        }
                    },
                    data: [-120, -132, -101, -134]
                }
            ]
        };
        this.resizeSubscription = resizeService.resizeInformer$.subscribe(function () { return _this.chartInstances.forEach(function (chart) { return chart.resize(); }); });
    }
    BarChartPageComponent.prototype.ngOnInit = function () {
    };
    BarChartPageComponent.prototype.ngOnDestroy = function () {
        this.resizeSubscription.unsubscribe();
    };
    /**
     * Mock method for data generation
     * @returns {Array} data for charts
     */
    BarChartPageComponent.prototype.getAnimatedBarData = function () {
        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
        return data;
    };
    /**
     * Mock method for data generation
     * @returns {Array} data for charts
     */
    BarChartPageComponent.prototype.getAnimatedBarXAxisData = function () {
        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push('Label ' + i);
        }
        return data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], BarChartPageComponent.prototype, "routerAnimation", void 0);
    BarChartPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bar-chart-page',
            template: __webpack_require__("../../../../../src/app/pages/bar-chart-page/bar-chart-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/bar-chart-page/bar-chart-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */]) === "function" && _a || Object])
    ], BarChartPageComponent);
    return BarChartPageComponent;
    var _a;
}());

//# sourceMappingURL=bar-chart-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/bubble-chart-page/bubble-chart-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Bubble Chart</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-title>Simple</mat-card-title>\r\n      <mat-card-content>\r\n        <div echarts [options]=\"simpleBubbleOption\" (chartInit)=\"chartInstances.push($event)\" class=\"chart\"></div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-title>Single axis</mat-card-title>\r\n      <mat-card-content>\r\n        <div echarts [options]=\"singleAxisBubbleChartOption\" (chartInit)=\"chartInstances.push($event)\" class=\"chart\"></div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/bubble-chart-page/bubble-chart-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart {\n  height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/bubble-chart-page/bubble-chart-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BubbleChartPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_colors__ = __webpack_require__("../../../../../src/app/utils/colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__ = __webpack_require__("../../../../../src/app/resize/resize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BubbleChartPageComponent = (function () {
    function BubbleChartPageComponent(resizeService) {
        var _this = this;
        this.resizeService = resizeService;
        // Add router animation
        this.routerAnimation = true;
        // Chart instances used for resizing after layout changes
        this.chartInstances = [];
        // Data for chart model
        this.simpleBubbleData = [
            [
                [28604, 77, 17096869, 'Australia', 1990], [31163, 77.4, 27662440, 'Canada', 1990],
                [1516, 68, 1154605773, 'China', 1990], [13670, 74.7, 10582082, 'Cuba', 1990],
                [28599, 75, 4986705, 'Finland', 1990], [29476, 77.1, 56943299, 'France', 1990],
                [31476, 75.4, 78958237, 'Germany', 1990], [28666, 78.1, 254830, 'Iceland', 1990],
                [1777, 57.7, 870601776, 'India', 1990], [29550, 79.1, 122249285, 'Japan', 1990],
                [2076, 67.9, 20194354, 'North Korea', 1990], [12087, 72, 42972254, 'South Korea', 1990],
                [24021, 75.4, 3397534, 'New Zealand', 1990], [43296, 76.8, 4240375, 'Norway', 1990],
                [10088, 70.8, 38195258, 'Poland', 1990], [19349, 69.6, 147568552, 'Russia', 1990],
                [10670, 67.3, 53994605, 'Turkey', 1990], [26424, 75.7, 57110117, 'United Kingdom', 1990],
                [37062, 75.4, 252847810, 'United States', 1990]
            ],
            [
                [44056, 81.8, 23968973, 'Australia', 2015], [43294, 81.7, 35939927, 'Canada', 2015],
                [13334, 76.9, 1376048943, 'China', 2015], [21291, 78.5, 11389562, 'Cuba', 2015],
                [38923, 80.8, 5503457, 'Finland', 2015], [37599, 81.9, 64395345, 'France', 2015],
                [44053, 81.1, 80688545, 'Germany', 2015], [42182, 82.8, 329425, 'Iceland', 2015],
                [5903, 66.8, 1311050527, 'India', 2015], [36162, 83.5, 126573481, 'Japan', 2015],
                [1390, 71.4, 25155317, 'North Korea', 2015], [34644, 80.7, 50293439, 'South Korea', 2015],
                [34186, 80.6, 4528526, 'New Zealand', 2015], [64304, 81.6, 5210967, 'Norway', 2015],
                [24787, 77.3, 38611794, 'Poland', 2015], [23038, 73.13, 143456918, 'Russia', 2015],
                [19360, 76.5, 78665830, 'Turkey', 2015], [38225, 81.4, 64715810, 'United Kingdom', 2015],
                [53354, 79.1, 321773631, 'United States', 2015]
            ]
        ];
        // Chart model
        this.simpleBubbleOption = {
            legend: {
                right: 10,
                data: ['Data 1', 'Data 2'],
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisTicks: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                }
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisTicks: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                scale: true
            },
            series: [{
                    name: 'Data 1',
                    data: this.simpleBubbleData[0],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(255, 87, 34, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                    offset: 0,
                                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["b" /* MAT_DEEP_ORANGE */].A100
                                }, {
                                    offset: 1,
                                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["b" /* MAT_DEEP_ORANGE */].A700
                                }])
                        }
                    }
                }, {
                    name: 'Data 2',
                    data: this.simpleBubbleData[1],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(3, 169, 244, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                    offset: 0,
                                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A100
                                }, {
                                    offset: 1,
                                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A700
                                }])
                        }
                    }
                }]
        };
        // Chart model
        this.singleAxisBubbleChartOption = this.createSingleAxisBubbleChartOption();
        this.resizeSubscription = resizeService.resizeInformer$.subscribe(function () { return _this.chartInstances.forEach(function (chart) { return chart.resize(); }); });
    }
    BubbleChartPageComponent.prototype.ngOnInit = function () {
    };
    BubbleChartPageComponent.prototype.ngOnDestroy = function () {
        this.resizeSubscription.unsubscribe();
    };
    /**
     * Mock method for chart data generation
     * @returns {{tooltip: {position: string}, title: Array, singleAxis: Array, series: Array}}
     */
    BubbleChartPageComponent.prototype.createSingleAxisBubbleChartOption = function () {
        var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
            '7a', '8a', '9a', '10a', '11a',
            '12p', '1p', '2p', '3p', '4p', '5p',
            '6p', '7p', '8p', '9p', '10p', '11p'];
        var days = ['Saturday', 'Friday', 'Thursday',
            'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
        var data = [
            [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0],
            [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6],
            [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0],
            [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2],
            [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12],
            [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0],
            [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9],
            [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4],
            [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0],
            [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12],
            [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1],
            [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4],
            [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5],
            [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0],
            [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5],
            [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0],
            [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0],
            [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3],
            [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]
        ];
        var option = {
            tooltip: {
                position: 'top'
            },
            title: [],
            singleAxis: [],
            series: []
        };
        var colors = [__WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._300, __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._400, __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500, __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._600,
            __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._700, __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._800, __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._900];
        echarts.util.each(days, function (day, idx) {
            option.title.push({
                textBaseline: 'middle',
                top: (idx + 0.5) * 100 / 7 + '%',
                text: day,
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            });
            option.singleAxis.push({
                left: 150,
                type: 'category',
                boundaryGap: false,
                data: hours,
                top: (idx * 100 / 7 + 5) + '%',
                height: (100 / 7 - 10) + '%',
                axisLabel: {
                    interval: 2,
                    textStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisTicks: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                }
            });
            option.series.push({
                singleAxisIndex: idx,
                coordinateSystem: 'singleAxis',
                type: 'scatter',
                data: [],
                symbolSize: function (dataItem) {
                    return dataItem[1] * 4;
                },
                itemStyle: {
                    normal: {
                        color: colors[idx]
                    }
                }
            });
        });
        echarts.util.each(data, function (dataItem) {
            option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
        });
        return option;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], BubbleChartPageComponent.prototype, "routerAnimation", void 0);
    BubbleChartPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bubble-chart-page',
            template: __webpack_require__("../../../../../src/app/pages/bubble-chart-page/bubble-chart-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/bubble-chart-page/bubble-chart-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */]) === "function" && _a || Object])
    ], BubbleChartPageComponent);
    return BubbleChartPageComponent;
    var _a;
}());

//# sourceMappingURL=bubble-chart-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/buttons-page/buttons-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Buttons</h3>\r\n  </header>\r\n  <article>\r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"45\">\r\n        <mat-card>\r\n          <mat-card-title>Raised button</mat-card-title>\r\n          <mat-card-content class=\"text-center\">\r\n            <div>\r\n              <button mat-raised-button color=\"primary\">Primary button</button>\r\n            </div>\r\n            <div>\r\n              <button mat-raised-button color=\"accent\">Accent button</button>\r\n            </div>\r\n            <div>\r\n              <button mat-raised-button color=\"warn\">Warn button</button>\r\n            </div>\r\n            <div>\r\n              <button mat-raised-button>Raised button</button>\r\n            </div>\r\n            <div>\r\n              <button disableRipple=\"true\" mat-raised-button>No ripple effect</button>\r\n            </div>\r\n            <div>\r\n              <button mat-raised-button disabled>Disabled button</button>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Float button</mat-card-title>\r\n          <mat-card-content class=\"text-center\">\r\n            <div>\r\n              <button mat-button color=\"primary\">Primary button</button>\r\n            </div>\r\n            <div>\r\n              <button mat-button color=\"accent\">Accent button</button>\r\n            </div>\r\n            <div>\r\n              <button mat-button color=\"warn\">Warn button</button>\r\n            </div>\r\n            <div>\r\n              <button mat-button>Flat button</button>\r\n            </div>\r\n            <div>\r\n              <button disableRipple=\"true\" mat-button>No ripple effect</button>\r\n            </div>\r\n            <div>\r\n              <button mat-button disabled>Disabled button</button>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Icon button</mat-card-title>\r\n          <mat-card-content class=\"text-center\">\r\n            <div>\r\n              <button mat-icon-button color=\"primary\">\r\n                <mat-icon>network_wifi</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button mat-icon-button color=\"accent\">\r\n                <mat-icon>cloud</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button mat-icon-button color=\"warn\">\r\n                <mat-icon>folder</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button mat-icon-button>\r\n                <mat-icon>add_a_photo</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button mat-icon-button disabled>\r\n                <mat-icon>place</mat-icon>\r\n              </button>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"55\">\r\n        <mat-card>\r\n          <mat-card-title>Floating action button</mat-card-title>\r\n          <mat-card-content class=\"text-center\">\r\n            <div>\r\n              <button mat-fab color=\"primary\">\r\n                <mat-icon>check</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button mat-fab>\r\n                <mat-icon>thumb_up</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button mat-fab color=\"warn\">\r\n                <mat-icon>call</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button mat-fab disabled>\r\n                <mat-icon>home</mat-icon>\r\n              </button>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Mini FAB</mat-card-title>\r\n          <mat-card-content class=\"text-center\">\r\n            <div>\r\n              <button mat-mini-fab color=\"primary\">\r\n                <mat-icon>play_arrow</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button mat-mini-fab>\r\n                <mat-icon>chat_bubble</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button mat-mini-fab color=\"warn\">\r\n                <mat-icon>add</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button mat-mini-fab disabled>\r\n                <mat-icon>home</mat-icon>\r\n              </button>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <mat-card class=\"text-center\">\r\n          <mat-card-title>Button toggle</mat-card-title>\r\n          <mat-card-content>\r\n            <p>\r\n              <mat-checkbox (change)=\"isVertical = $event.checked\">Show Button Toggles Vertical</mat-checkbox>\r\n            </p>\r\n            <p>\r\n              <mat-checkbox (change)=\"isDisabled = $event.checked\">Disable Button Toggle Items</mat-checkbox>\r\n            </p>\r\n            <h6>Exclusive Selection</h6>\r\n            <div>\r\n              <mat-button-toggle-group name=\"alignment\" [vertical]=\"isVertical\">\r\n                <mat-button-toggle value=\"left\">\r\n                  <mat-icon>format_align_left</mat-icon>\r\n                </mat-button-toggle>\r\n                <mat-button-toggle value=\"center\">\r\n                  <mat-icon>format_align_center</mat-icon>\r\n                </mat-button-toggle>\r\n                <mat-button-toggle value=\"right\">\r\n                  <mat-icon>format_align_right</mat-icon>\r\n                </mat-button-toggle>\r\n              </mat-button-toggle-group>\r\n            </div>\r\n            <h6>Disabled Group</h6>\r\n            <div>\r\n              <mat-button-toggle-group name=\"checkbox\" [vertical]=\"isVertical\" [disabled]=\"true\">\r\n                <mat-button-toggle value=\"bold\">\r\n                  <mat-icon>format_bold</mat-icon>\r\n                </mat-button-toggle>\r\n                <mat-button-toggle value=\"italic\">\r\n                  <mat-icon>format_italic</mat-icon>\r\n                </mat-button-toggle>\r\n                <mat-button-toggle value=\"underline\">\r\n                  <mat-icon>format_underline</mat-icon>\r\n                </mat-button-toggle>\r\n              </mat-button-toggle-group>\r\n            </div>\r\n            <h6>Multiple Selection</h6>\r\n            <div>\r\n              <mat-button-toggle-group multiple [vertical]=\"isVertical\">\r\n                <mat-button-toggle>First</mat-button-toggle>\r\n                <mat-button-toggle>Second</mat-button-toggle>\r\n                <mat-button-toggle [disabled]=\"isDisabled\">Third</mat-button-toggle>\r\n              </mat-button-toggle-group>\r\n            </div>\r\n            <h6>Single Toggle</h6>\r\n            <mat-button-toggle>Yes</mat-button-toggle>\r\n            <h6>Dynamic Exclusive Selection</h6>\r\n            <div>\r\n              <mat-button-toggle-group [(ngModel)]=\"selected\" [vertical]=\"isVertical\">\r\n                <mat-button-toggle *ngFor=\"let item of options\" [value]=\"item\">\r\n                  {{item}}\r\n                </mat-button-toggle>\r\n              </mat-button-toggle-group>\r\n              <p>Your selected: {{selected}}</p>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/buttons-page/buttons-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  margin: 10px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/buttons-page/buttons-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonsPageComponent = (function () {
    function ButtonsPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        // Button toggle parameters
        this.isVertical = false;
        this.isDisabled = false;
        this.selected = 'First';
        this.options = [
            'First',
            'Second',
            'Third'
        ];
    }
    ButtonsPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], ButtonsPageComponent.prototype, "routerAnimation", void 0);
    ButtonsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buttons-page',
            template: __webpack_require__("../../../../../src/app/pages/buttons-page/buttons-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/buttons-page/buttons-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsPageComponent);
    return ButtonsPageComponent;
}());

//# sourceMappingURL=buttons-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/cards-page/cards-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Cards</h3>\r\n  </header>\r\n  <article>\r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutWrap>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"33\">\r\n        <mat-card class=\"card-type-first\">\r\n          <div class=\"img-wrap\"></div>\r\n          <mat-card-title>Content Title</mat-card-title>\r\n          <mat-card-subtitle>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, soluta.</p>\r\n          </mat-card-subtitle>\r\n          <button mat-button>READ MORE</button>\r\n          <button mat-button color=\"primary\">BUY NOW</button>\r\n        </mat-card>\r\n        <mat-card class=\"card-type-second\">\r\n          <mat-card-footer class=\"white-text-color\">\r\n            <h5 class=\"push-bottom-xs\">Title</h5>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n              <div fxFlex class=\"text-left\">+ Colors</div>\r\n              <div fxFlex class=\"text-right mat-headline\">$ 99.99</div>\r\n            </div>\r\n          </mat-card-footer>\r\n        </mat-card>\r\n        <mat-card class=\"card-type-third\">\r\n          <div class=\"img-wrap\"></div>\r\n          <div fxLayout=\"row\">\r\n            <div fxFlex=\"50\" fxLayoutAlign=\"start center\">\r\n              <span class=\"mat-title\">$ 58,00</span>\r\n            </div>\r\n            <div fxFlex=\"50\" class=\"icon-color\" fxLayoutAlign=\"end center\">\r\n              <button mat-icon-button>\r\n                <mat-icon>favorite</mat-icon>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"33\">\r\n        <mat-card class=\"card-type-fourth\">\r\n          <mat-card-title-group>\r\n            <mat-card-title>Card with title</mat-card-title>\r\n            <mat-card-subtitle>Subtitle</mat-card-subtitle>\r\n            <img mat-card-mat-image src=\"/assets/cards-demo/150150.png\">\r\n          </mat-card-title-group>\r\n          <button mat-button>ACTION 1</button>\r\n          <button mat-button>ACTION 2</button>\r\n        </mat-card>\r\n        <mat-card class=\"card-type-fifth\">\r\n          <div class=\"img-wrap\"></div>\r\n          <mat-card-actions align=\"end\" class=\"icon-color\">\r\n            <button mat-icon-button>\r\n              <mat-icon>favorite</mat-icon>\r\n            </button>\r\n            <button mat-icon-button>\r\n              <mat-icon>bookmark</mat-icon>\r\n            </button>\r\n            <button mat-icon-button>\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n        <mat-card class=\"card-type-sixth primary-background-color primary-contrast-color\">\r\n          <div class=\"img-wrap\"></div>\r\n          <button mat-fab color=\"accent\" class=\"float-fab\">\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n          <mat-card-title> Content Title</mat-card-title>\r\n          <mat-card-subtitle class=\"primary-contrast-color\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, soluta.</p>\r\n          </mat-card-subtitle>\r\n          <button mat-button>READ MORE</button>\r\n          <button mat-button>BUY NOW</button>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"100\" fxFlex.gt-md=\"33\">\r\n        <mat-card class=\"card-type-seventh\">\r\n          <mat-card-header>\r\n            <img matCardAvatar src=\"/assets/avatars-img/4040.png\">\r\n            <mat-card-title>Leo Di</mat-card-title>\r\n            <mat-card-subtitle>Castle</mat-card-subtitle>\r\n          </mat-card-header>\r\n          <div class=\"img-wrap\"></div>\r\n          <mat-card-content class=\"secondary-text-color\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolores et inventore placeat, provident\r\n              quisquam!</p>\r\n          </mat-card-content>\r\n          <button mat-button>ACTION 1</button>\r\n          <button mat-button>ACTION 2</button>\r\n        </mat-card>\r\n        <mat-card class=\"card-type-eighth\">\r\n          <mat-card-title-group>\r\n            <mat-card-title>Some title</mat-card-title>\r\n            <mat-card-subtitle>\r\n              <div class=\"push-bottom-xs\">Subtitle</div>\r\n              <div>\r\n                <mat-icon class=\"primary-text-color\">star</mat-icon>\r\n                <mat-icon class=\"primary-text-color\">star</mat-icon>\r\n                <mat-icon class=\"primary-text-color\">star</mat-icon>\r\n                <mat-icon class=\"primary-text-color\">star</mat-icon>\r\n                <mat-icon>star</mat-icon>\r\n              </div>\r\n            </mat-card-subtitle>\r\n          </mat-card-title-group>\r\n          <div class=\"img-wrap\"></div>\r\n        </mat-card>\r\n        <mat-card class=\"primary-background-color primary-contrast-color\">\r\n          <mat-card-header class=\"primary-contrast-color\">\r\n            <mat-card-title>Mary Om</mat-card-title>\r\n            <mat-card-subtitle class=\"primary-contrast-color\">April 15, 2017</mat-card-subtitle>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolores et inventore placeat, provident\r\n              quisquam!</p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n      </div>\r\n    </div>\r\n  </article>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/cards-page/cards-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .card-type-first {\n  padding-top: 200px; }\n  :host .card-type-first .img-wrap {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    height: 190px;\n    background: url(\"/assets/cards-demo/600400.png\") no-repeat center;\n    background-size: cover; }\n\n:host .card-type-second {\n  height: 270px;\n  box-sizing: border-box;\n  background: url(\"/assets/cards-demo/600400.png\") no-repeat center;\n  background-size: cover; }\n  :host .card-type-second /deep/ .mat-card-footer {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: 0;\n    padding: 0 50px 10px;\n    background-color: rgba(66, 66, 66, 0.5); }\n\n:host .card-type-third {\n  padding: 158px 12px 10px;\n  max-width: 170px;\n  box-sizing: border-box; }\n  :host .card-type-third .img-wrap {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    height: 150px;\n    background: url(\"/assets/cards-demo/170140.png\") no-repeat center;\n    background-size: cover; }\n\n:host .card-type-fifth {\n  padding-top: 265px; }\n  :host .card-type-fifth .img-wrap {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    height: 255px;\n    background: url(\"/assets/cards-demo/600400.png\") no-repeat center;\n    background-size: cover; }\n\n:host .card-type-sixth {\n  padding-top: 245px; }\n  :host .card-type-sixth .img-wrap {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    height: 230px;\n    background: url(\"/assets/cards-demo/600400.png\") no-repeat center;\n    background-size: cover; }\n  :host .card-type-sixth .mat-fab {\n    position: absolute;\n    top: 230px;\n    right: 20px;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%); }\n\n:host .card-type-seventh {\n  padding-top: 10px; }\n  :host .card-type-seventh .mat-card-header {\n    margin-bottom: 220px; }\n  :host .card-type-seventh .img-wrap {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 90px;\n    height: 200px;\n    background: url(\"/assets/cards-demo/600400.png\") no-repeat center;\n    background-size: cover; }\n\n:host .card-type-eighth {\n  height: 230px;\n  padding-right: 170px; }\n  :host .card-type-eighth .img-wrap {\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 40%;\n    max-width: 170px;\n    background: url(\"/assets/cards-demo/600400.png\") no-repeat center;\n    background-size: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/cards-page/cards-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsPageComponent = (function () {
    function CardsPageComponent() {
        // Add router animation
        this.routerAnimation = true;
    }
    CardsPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], CardsPageComponent.prototype, "routerAnimation", void 0);
    CardsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cards-page',
            template: __webpack_require__("../../../../../src/app/pages/cards-page/cards-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/cards-page/cards-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], CardsPageComponent);
    return CardsPageComponent;
}());

//# sourceMappingURL=cards-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/cart-page/cart-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper cart-page\">\r\n  <header class=\"text-center\">\r\n    <h5>Shopping Cart</h5>\r\n  </header>\r\n  <article fxLayout=\"column\" fxLayout.gt-md=\"row\" class=\"push-top-lg\">\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"65\">\r\n      <ng-container *ngFor=\"let item of productItems; let lastItem = last\">\r\n        <div class=\"product-item\" fxLayout=\"row\">\r\n          <div fxFlex class=\"product-img\">\r\n            <img src=\"{{item.image}}\">\r\n          </div>\r\n          <div fxFlex class=\"pad-left-lg\">\r\n            <div><strong>{{item.name}}</strong></div>\r\n            <div>EUR {{item.price}}</div>\r\n            <div class=\"details secondary-text-color push-top-xxl\">\r\n              <div class=\"\">Item code: {{item.code}}</div>\r\n              <div>Color: {{item.color}}</div>\r\n              <div class=\"quantity\">\r\n                <span>Quantity:</span>\r\n                <mat-select [(ngModel)]=\"item.quantity\">\r\n                  <mat-option *ngFor=\"let amount of orderQuantity\" [value]=\"amount\">\r\n                    {{amount}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </div>\r\n            </div>\r\n            <button class=\"remove-btn\" mat-icon-button (click)=\"productItems.splice(productItems.indexOf(item), 1)\">\r\n              <mat-icon>close</mat-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!lastItem\" class=\"divider background-color-4\"></div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"35\">\r\n      <div class=\"pad primary-background-color primary-contrast-color\">\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex>ORDER VALUE</div>\r\n          <div fxFlex class=\"text-right\">EUR {{getOrderSum()}}</div>\r\n        </div>\r\n        <div>{{productItems.length}} product(s)</div>\r\n        <div fxLayout=\"row\" class=\"push-top\">\r\n          <div fxFlex>Shipping</div>\r\n          <div fxFlex class=\"text-right\">EUR {{shippingCost}}</div>\r\n        </div>\r\n        <div>{{shippingType}}</div>\r\n        <div class=\"divider primary-light-background-color push-top\"></div>\r\n        <div fxLayout=\"row\" class=\"push-top\">\r\n          <div fxFlex>Total</div>\r\n          <div fxFlex class=\"text-right\">EUR {{getOrderSum() + shippingCost}}</div>\r\n        </div>\r\n        <div class=\"push-top\">\r\n          <button mat-raised-button color=\"accent\" fxFlexFill>CHECKOUT</button>\r\n        </div>\r\n        <div class=\"push-top mat-caption\">\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam commodi doloremque error esse eveniet\r\n            ex exercitationem nesciunt totam unde.</p>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab id maiores nemo qui quidem, totam.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"pad secondary-text-color\">\r\n        <div><strong>Lorem</strong></div>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus dolor inventore quas quod\r\n          reprehenderit.\r\n        </p>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et fugiat illo molestiae quis?</p>\r\n      </div>\r\n    </div>\r\n  </article>\r\n  <button mat-button routerLink=\"/main/products\">\r\n    <mat-icon class=\"push-right-sm\">arrow_back</mat-icon>BACK TO SHOPPING\r\n  </button>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/cart-page/cart-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cart-page .product-item {\n  position: relative;\n  padding: 40px 50px 40px 25px; }\n  .cart-page .product-item .product-img {\n    max-width: 130px; }\n    .cart-page .product-item .product-img img {\n      width: 100%; }\n  .cart-page .product-item .details {\n    line-height: 25px; }\n    .cart-page .product-item .details .quantity > * {\n      vertical-align: middle; }\n    .cart-page .product-item .details .quantity /deep/ .mat-select-trigger {\n      min-width: 30px; }\n    .cart-page .product-item .details .quantity /deep/ .mat-select-value {\n      color: inherit; }\n    .cart-page .product-item .details .quantity /deep/ .mat-select {\n      padding-top: 0; }\n  .cart-page .product-item .remove-btn {\n    position: absolute;\n    top: 10px;\n    right: 10px; }\n\n.cart-page .divider {\n  height: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/cart-page/cart-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartPageComponent = (function () {
    function CartPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        // Products added to the cart
        this.productItems = [
            {
                name: 'HEADPHONES',
                price: 29.99,
                code: 'QR199PK',
                color: 'Pink',
                quantity: 1,
                image: 'assets/products/600600.png'
            },
            {
                name: 'HEADPHONES',
                price: 29.99,
                code: 'QR199PK',
                color: 'Black',
                quantity: 1,
                image: 'assets/products/600600.png'
            }
        ];
        // Possible amount of items to
        this.orderQuantity = [1, 2, 3, 4, 5];
        this.shippingCost = 5.22;
        this.shippingType = 'Standard';
    }
    CartPageComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     * @returns {number} sum of item price and shipping cost
     */
    CartPageComponent.prototype.getOrderSum = function () {
        return this.productItems.reduce(function (prev, val) { return prev + val.price; }, 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], CartPageComponent.prototype, "routerAnimation", void 0);
    CartPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart-page',
            template: __webpack_require__("../../../../../src/app/pages/cart-page/cart-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/cart-page/cart-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], CartPageComponent);
    return CartPageComponent;
}());

//# sourceMappingURL=cart-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/chat-page/chat-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper chat-page\">\r\n  <header>\r\n    <h3 class=\"primary-color\">Chat</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-sidenav-container>\r\n          <mat-sidenav #sidenav mode=\"side\" [opened]=\"sideNavOpen\">\r\n            <mat-toolbar color=\"primary\">\r\n              <mat-select #groupSelect [ngModel]=\"'All'\" (change)=\"filter(search.value, $event.value)\">\r\n                <mat-option [value]=\"'All'\">All</mat-option>\r\n                <mat-option [value]=\"'Favourite'\">Favourite</mat-option>\r\n                <mat-option [value]=\"'Work'\">Work</mat-option>\r\n              </mat-select>\r\n              <td-search-box #search [alwaysVisible]=\"false\" fxFlex\r\n                             (searchDebounce)=\"filter($event, groupSelect.selected.value)\"></td-search-box>\r\n              <button mat-icon-button [matMenuTriggerFor]=\"contactMenu\">\r\n                <mat-icon>more_vert</mat-icon>\r\n              </button>\r\n              <mat-menu x-position=\"before\" y-position=\"below\" #contactMenu>\r\n                <button mat-menu-item>New contact</button>\r\n                <button mat-menu-item>New group</button>\r\n                <button mat-menu-item>Settings</button>\r\n              </mat-menu>\r\n            </mat-toolbar>\r\n            <perfect-scrollbar class=\"perfect-scrollbar\">\r\n              <mat-nav-list>\r\n                <div class=\"group\" *ngFor=\"let group of getGroups()\">\r\n                  <a mat-list-item *ngFor=\"let contact of filteredData[group].contacts; let i = index\"\r\n                     (click)=\"selectedContact = contact; loadMessages()\"\r\n                     [class.primary-light-background-color]=\"selectedContact === contact\">\r\n                    <div class=\"group-letter accent-color\">\r\n                      <mat-icon *ngIf=\"i == 0 && group == 'Favourite'\" color=\"accent\">star</mat-icon>\r\n                      <h5 *ngIf=\"i == 0 && group != 'Favourite'\">{{group}}</h5>\r\n                    </div>\r\n                    <img mat-list-avatar [src]=\"contact.imageUrl\" alt=\"Image of {{contact.name}}\">\r\n                    <span matLine>{{ contact.name }}</span>\r\n                    <span matLine class=\"secondary-text-color\">Lorem ipsum dolor sit.</span>\r\n                  </a>\r\n                </div>\r\n              </mat-nav-list>\r\n            </perfect-scrollbar>\r\n            <button mat-fab color=\"primary\" class=\"add-btn\">\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n          </mat-sidenav>\r\n\r\n          <mat-toolbar class=\"chat-toolbar\" color=\"primary\">\r\n            <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n              <mat-icon>menu</mat-icon>\r\n            </button>\r\n            <span>\r\n              <div>{{selectedContact?.name}}</div>\r\n              <div class=\"mat-body-1\">Online</div>\r\n            </span>\r\n            <span fxFlex></span>\r\n            <button mat-icon-button [matMenuTriggerFor]=\"chatMenu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu x-position=\"before\" y-position=\"below\" #chatMenu>\r\n              <button mat-menu-item>View contact</button>\r\n              <button mat-menu-item>Search</button>\r\n              <button mat-menu-item>Clear chat</button>\r\n            </mat-menu>\r\n          </mat-toolbar>\r\n          <div class=\"chat\" #chat>\r\n            <div *ngFor=\"let groupByDay of messages\">\r\n              <div class=\"text-center secondary-text-color\">{{groupByDay.date}}</div>\r\n              <div *ngFor=\"let message of groupByDay.messages\" [class.self]=\"!message.author\" fxLayout=\"row\"\r\n                   [fxLayoutAlign]=\"message.author ? 'start' : 'end'\">\r\n                <div class=\"push-right-sm\">\r\n                  <img *ngIf=\"message.author\" src=\"{{message.author?.imageUrl}}\">\r\n                </div>\r\n                <div class=\"message\">\r\n                  <div>{{message.text}}</div>\r\n                  <div class=\"text-right text-md\" [class.secondary-text-color]=\"message.author\">{{message.time}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"add-area\">\r\n            <mat-input-container fxFlex>\r\n              <textarea #messageInput matInput placeholder=\"Message...\" maxRows=\"2\"></textarea>\r\n            </mat-input-container>\r\n            <button mat-mini-fab color=\"primary\" (click)=\"sendMessage(messageInput.value); messageInput.value = null\">\r\n              <mat-icon>send</mat-icon>\r\n            </button>\r\n          </div>\r\n        </mat-sidenav-container>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/chat-page/chat-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/************************************** LIGHT THEME **************************************/\n/************************************** DARK THEME **************************************/\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/************************************** COLOR FUNCTION **************************************/\n:host .mat-card-content {\n  height: calc(100vh - 250px);\n  padding: 0; }\n  :host .mat-card-content .mat-sidenav {\n    width: 350px; }\n    @media screen and (max-width: 600px) {\n      :host .mat-card-content .mat-sidenav {\n        width: 300px; } }\n    :host .mat-card-content .mat-sidenav .group {\n      position: relative; }\n      :host .mat-card-content .mat-sidenav .group .group-letter {\n        position: absolute;\n        left: 20px;\n        top: 50%;\n        -webkit-transform: translateY(-50%);\n        transform: translateY(-50%); }\n      :host .mat-card-content .mat-sidenav .group /deep/ .mat-list-item-content {\n        padding-left: 66px; }\n    :host .mat-card-content .mat-sidenav .add-btn {\n      position: absolute;\n      bottom: 25px;\n      right: 30px; }\n    :host .mat-card-content .mat-sidenav td-search-box {\n      max-width: 170px; }\n      :host .mat-card-content .mat-sidenav td-search-box /deep/ input {\n        font-size: 16px; }\n      :host .mat-card-content .mat-sidenav td-search-box /deep/ [mat-icon-button] {\n        margin: 0; }\n    :host .mat-card-content .mat-sidenav .mat-select {\n      padding-top: 0;\n      margin-right: 50px; }\n      :host .mat-card-content .mat-sidenav .mat-select /deep/ .mat-select-underline {\n        display: none; }\n      :host .mat-card-content .mat-sidenav .mat-select /deep/ .mat-select-trigger {\n        min-width: 60px; }\n    :host .mat-card-content .mat-sidenav .perfect-scrollbar {\n      height: calc(100% - 70px); }\n  :host .mat-card-content .chat-toolbar {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0; }\n  :host .mat-card-content .chat {\n    box-sizing: border-box;\n    overflow: auto;\n    padding: 74px 20px 80px; }\n    :host .mat-card-content .chat .message {\n      padding: 10px 30px;\n      border-radius: 0 40px 40px 40px;\n      margin: 10px 50px 10px 0; }\n    :host .mat-card-content .chat .self .message {\n      margin: 10px 0 10px 50px;\n      border-radius: 40px 0 40px 40px; }\n  :host .mat-card-content .add-area {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    height: 80px;\n    text-align: center;\n    padding: 0 60px; }\n    @media screen and (max-width: 600px) {\n      :host .mat-card-content .add-area {\n        padding: 0 20px; } }\n    :host .mat-card-content .add-area .mat-input-container {\n      min-width: 60%; }\n    :host .mat-card-content .add-area textarea {\n      resize: none; }\n    :host .mat-card-content .add-area button {\n      margin: auto 0; }\n\n:host /deep/ .mat-drawer-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: visible;\n  margin-left: 350px; }\n  @media screen and (max-width: 600px) {\n    :host /deep/ .mat-drawer-content {\n      margin-left: 300px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/chat-page/chat-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatPageComponent = (function () {
    function ChatPageComponent(media) {
        this.media = media;
        // Add router animation
        this.routerAnimation = true;
        // Available contacts
        this.contactData = [
            { name: 'Ada	Allison', group: ['Favorite', 'Work'], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Adrienne	Drake', group: ['Work'], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Alberta	Wallace', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Alexandra	Elliott', group: ['Favourite'], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Alfredo	Gray', group: ['Work'], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Allan	Hansen', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Allan	Webster', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Alma	Russell', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Amos	Wong', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Andrea	Lloyd', group: ['Work'], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Angela	Moody', group: [''], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Angie	Ortega', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Ann	Watson', group: ['Work'], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Arthur	Freeman', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Ashley	Ward', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Austin	Garcia', group: ['Work'], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Benny	Holland', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Betsy	Gilbert', group: ['Work'], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Billy	Banks', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Blanche	Rodgers', group: [''], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Bob	Barber', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Boyd	Mcgee', group: [''], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Bradford	Jones', group: ['Work'], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Bradley	Romero', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Calvin	West', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Candice	Murphy', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Candice	Ellis', group: ['Work'], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Carla	Erickson', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Carlton	Schmidt', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Carol	Mathis', group: [''], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Carole	Taylor', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Carolyn	Floyd', group: ['Work', 'Favourite'], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Casey	Rowe', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Cassandra	Phillips', group: [], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Charlotte	Lopez', group: ['Work'], imageUrl: 'assets/avatars/4040.png' },
            { name: 'Chester	Ortiz', group: [], imageUrl: 'assets/avatars/4040.png' },
        ];
        // Available contacts after applying search filter
        this.filteredData = this.groupByLetter(this.contactData);
        // Selected contac to send message
        this.selectedContact = this.contactData[0];
        // Boolean flag to update chat scroll if needed
        this.updateScroll = true;
        // Side nav state
        this.sideNavOpen = false;
        this.loadMessages();
    }
    ChatPageComponent.prototype.ngOnInit = function () {
    };
    ChatPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.sideNavOpen = true; }, 0);
    };
    ChatPageComponent.prototype.ngAfterViewChecked = function () {
        if (this.updateScroll) {
            this.updateScroll = false;
            this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
        }
        this.media.broadcast();
    };
    /**
     * Serch method by string and group
     * @param search
     * @param group
     */
    ChatPageComponent.prototype.filter = function (search, group) {
        var tempData = this.contactData;
        if (search) {
            search = search.trim();
            tempData = this.contactData.filter(function (contact) { return contact.name.match(new RegExp("" + search, 'i')); });
        }
        if (group && group !== 'All') {
            tempData = tempData.filter(function (contact) { return contact.group.indexOf(group) >= 0; });
        }
        this.filteredData = this.groupByLetter(tempData);
    };
    /**
     * Method for grouping contacts by first letter
     * @param raw
     * @returns {any}
     */
    ChatPageComponent.prototype.groupByLetter = function (raw) {
        return raw.reduce(function (groups, val) {
            var firstChar = val.group.indexOf('Favourite') < 0 ? val.name.charAt(0) : 'Favourite';
            if (!groups[firstChar]) {
                groups[firstChar] = {
                    firstChar: firstChar,
                    contacts: []
                };
            }
            groups[firstChar].contacts.push(val);
            return groups;
        }, {
            'Favourite': {
                firstChar: 'Favourite',
                contacts: []
            }
        });
    };
    /**
     *
     * @returns {Array} groups of filtered data
     */
    ChatPageComponent.prototype.getGroups = function () {
        var keys = [];
        for (var key in this.filteredData) {
            if (key) {
                keys.push(key);
            }
        }
        return keys;
    };
    /**
     * Mock method for message generation
     */
    ChatPageComponent.prototype.loadMessages = function () {
        var groupsByDay = [];
        for (var i = 0; i < 3; i++) {
            var day = {
                date: '',
                messages: []
            };
            if (i !== 2) {
                day.date = "Mon, " + (i + 1) + " May";
            }
            else {
                day.date = 'Today';
            }
            groupsByDay.push(day);
            for (var j = 0; j < 5; j++) {
                day.messages.push({
                    text: Math.random() > 0.5 ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, ullam.' : 'Lorem' +
                        ' ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores, cupiditate deleniti dolore, hic' +
                        ' laudantium, maiores nam obcaecati omnis porro possimus praesentium provident quibusdam ratione sunt totam' +
                        ' unde voluptatem voluptatum.',
                    time: "0" + (1 + j) + ":15",
                    author: Math.random() > 0.5 ? this.selectedContact : null
                });
            }
        }
        this.messages = groupsByDay;
    };
    /**
     * Creates new message
     * @param message
     */
    ChatPageComponent.prototype.sendMessage = function (message) {
        var date = new Date();
        this.messages[this.messages.length - 1].messages.push({
            text: message,
            time: date.getHours() + ":" + (date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes()),
        });
        this.updateScroll = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], ChatPageComponent.prototype, "routerAnimation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], ChatPageComponent.prototype, "chatContainer", void 0);
    ChatPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat-page',
            template: __webpack_require__("../../../../../src/app/pages/chat-page/chat-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/chat-page/chat-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["l" /* TdMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["l" /* TdMediaService */]) === "function" && _b || Object])
    ], ChatPageComponent);
    return ChatPageComponent;
    var _a, _b;
}());

//# sourceMappingURL=chat-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/chips-page/chips-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Chips</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-chip-list>\r\n          <mat-chip>First</mat-chip>\r\n          <mat-chip color=\"primary\" selected=\"true\">Second</mat-chip>\r\n          <mat-chip color=\"accent\" selected=\"true\">Third</mat-chip>\r\n          <mat-chip color=\"warn\" selected=\"true\">Fourth</mat-chip>\r\n          <mat-chip [disabled]=\"true\">Disabled</mat-chip>\r\n        </mat-chip-list>\r\n        <br>\r\n        <div>Users can move through the chips using the arrow keys and select/deselect them with the space.</div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/chips-page/chips-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/chips-page/chips-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChipsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChipsPageComponent = (function () {
    function ChipsPageComponent() {
        // Add router animation
        this.routerAnimation = true;
    }
    ChipsPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], ChipsPageComponent.prototype, "routerAnimation", void 0);
    ChipsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chips-page',
            template: __webpack_require__("../../../../../src/app/pages/chips-page/chips-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/chips-page/chips-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], ChipsPageComponent);
    return ChipsPageComponent;
}());

//# sourceMappingURL=chips-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/color-page/color-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Color</h3>\r\n  </header>\r\n  <article>\r\n\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n      <div fxFlex=\"1 0 auto\"  fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Red</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matRed\" [contrastColors]=\"matRedContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\"  fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Pink</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matPink\" [contrastColors]=\"matPinkContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\"  fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Purple</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matPurple\" [contrastColors]=\"matPurpleContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Deep Purple</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matDeepPurple\" [contrastColors]=\"matDeepPurpleContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Indigo</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matIndigo\" [contrastColors]=\"matIndigoContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Blue</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matBlue\" [contrastColors]=\"matBlueContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Light Blue</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matLightBlue\" [contrastColors]=\"matLightBlueContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Cyan</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matCyan\" [contrastColors]=\"matCyanContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Teal</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matTeal\" [contrastColors]=\"matTealContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Green</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matGreen\" [contrastColors]=\"matGreenContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Light Green</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matLightGreen\" [contrastColors]=\"matLightGreenContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Lime</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matLime\" [contrastColors]=\"matLimeContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Yellow</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matYellow\" [contrastColors]=\"matYellowContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Amber</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matAmber\" [contrastColors]=\"matAmberContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Orange</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matOrange\" [contrastColors]=\"matOrangeContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Deep Orange</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matDeepOrange\" [contrastColors]=\"matDeepOrangeContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Brown</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matBrown\" [contrastColors]=\"matBrownContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Grey</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matGrey\" [contrastColors]=\"matGreyContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Blue Grey</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matBlueGrey\" [contrastColors]=\"matBlueGreyContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <mat-card>\r\n          <mat-card-title>Black White</mat-card-title>\r\n          <mat-card-content>\r\n            <app-palette [colors]=\"matBlackWhite\" [contrastColors]=\"matBlackContrast\"></app-palette>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/color-page/color-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/color-page/color-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorPageComponent = (function () {
    function ColorPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        // Palette color values
        this.matRed = {
            50: '#ffebee',
            100: '#ffcdd2',
            200: '#ef9a9a',
            300: '#e57373',
            400: '#ef5350',
            500: '#f44336',
            600: '#e53935',
            700: '#d32f2f',
            800: '#c62828',
            900: '#b71c1c',
            A100: '#ff8a80',
            A200: '#ff5252',
            A400: '#ff1744',
            A700: '#d50000'
        };
        this.matRedContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'rgba(255, 255, 255, 0.87)',
            900: 'rgba(255, 255, 255, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'white',
            A400: 'white',
            A700: 'white'
        };
        this.matPink = {
            50: '#fce4ec',
            100: '#f8bbd0',
            200: '#f48fb1',
            300: '#f06292',
            400: '#ec407a',
            500: '#e91e63',
            600: '#d81b60',
            700: '#c2185b',
            800: '#ad1457',
            900: '#880e4f',
            A100: '#ff80ab',
            A200: '#ff4081',
            A400: '#f50057',
            A700: '#c51162'
        };
        this.matPinkContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'white',
            600: 'white',
            700: 'rgba(255, 255, 255, 0.87)',
            800: 'rgba(255, 255, 255, 0.87)',
            900: 'rgba(255, 255, 255, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'white',
            A400: 'white',
            A700: 'white',
        };
        this.matPurple = {
            50: '#f3e5f5',
            100: '#e1bee7',
            200: '#ce93d8',
            300: '#ba68c8',
            400: '#ab47bc',
            500: '#9c27b0',
            600: '#8e24aa',
            700: '#7b1fa2',
            800: '#6a1b9a',
            900: '#4a148c',
            A100: '#ea80fc',
            A200: '#e040fb',
            A400: '#d500f9',
            A700: '#aa00ff'
        };
        this.matPurpleContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'white',
            400: 'white',
            500: 'rgba(255, 255, 255, 0.87)',
            600: 'rgba(255, 255, 255, 0.87)',
            700: 'rgba(255, 255, 255, 0.87)',
            800: 'rgba(255, 255, 255, 0.87)',
            900: 'rgba(255, 255, 255, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'white',
            A400: 'white',
            A700: 'white'
        };
        this.matDeepPurple = {
            50: '#ede7f6',
            100: '#d1c4e9',
            200: '#b39ddb',
            300: '#9575cd',
            400: '#7e57c2',
            500: '#673ab7',
            600: '#5e35b1',
            700: '#512da8',
            800: '#4527a0',
            900: '#311b92',
            A100: '#b388ff',
            A200: '#7c4dff',
            A400: '#651fff',
            A700: '#6200ea'
        };
        this.matDeepPurpleContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'white',
            400: 'white',
            500: 'rgba(255, 255, 255, 0.87)',
            600: 'rgba(255, 255, 255, 0.87)',
            700: 'rgba(255, 255, 255, 0.87)',
            800: 'rgba(255, 255, 255, 0.87)',
            900: 'rgba(255, 255, 255, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'white',
            A400: 'rgba(255, 255, 255, 0.87)',
            A700: 'rgba(255, 255, 255, 0.87)'
        };
        this.matIndigo = {
            50: '#e8eaf6',
            100: '#c5cae9',
            200: '#9fa8da',
            300: '#7986cb',
            400: '#5c6bc0',
            500: '#3f51b5',
            600: '#3949ab',
            700: '#303f9f',
            800: '#283593',
            900: '#1a237e',
            A100: '#8c9eff',
            A200: '#536dfe',
            A400: '#3d5afe',
            A700: '#304ffe'
        };
        this.matIndigoContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'white',
            400: 'white',
            500: 'rgba(255, 255, 255, 0.87)',
            600: 'rgba(255, 255, 255, 0.87)',
            700: 'rgba(255, 255, 255, 0.87)',
            800: 'rgba(255, 255, 255, 0.87)',
            900: 'rgba(255, 255, 255, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'white',
            A400: 'white',
            A700: 'rgba(255, 255, 255, 0.87)'
        };
        this.matBlue = {
            50: '#e3f2fd',
            100: '#bbdefb',
            200: '#90caf9',
            300: '#64b5f6',
            400: '#42a5f5',
            500: '#2196f3',
            600: '#1e88e5',
            700: '#1976d2',
            800: '#1565c0',
            900: '#0d47a1',
            A100: '#82b1ff',
            A200: '#448aff',
            A400: '#2979ff',
            A700: '#2962ff'
        };
        this.matBlueContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'rgba(255, 255, 255, 0.87)',
            900: 'rgba(255, 255, 255, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'white',
            A400: 'white',
            A700: 'white'
        };
        this.matLightBlue = {
            50: '#e1f5fe',
            100: '#b3e5fc',
            200: '#81d4fa',
            300: '#4fc3f7',
            400: '#29b6f6',
            500: '#03a9f4',
            600: '#039be5',
            700: '#0288d1',
            800: '#0277bd',
            900: '#01579b',
            A100: '#80d8ff',
            A200: '#40c4ff',
            A400: '#00b0ff',
            A700: '#0091ea'
        };
        this.matLightBlueContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: 'rgba(255, 255, 255, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'rgba(0, 0, 0, 0.87)',
            A400: 'rgba(0, 0, 0, 0.87)',
            A700: 'white'
        };
        this.matCyan = {
            50: '#e0f7fa',
            100: '#b2ebf2',
            200: '#80deea',
            300: '#4dd0e1',
            400: '#26c6da',
            500: '#00bcd4',
            600: '#00acc1',
            700: '#0097a7',
            800: '#00838f',
            900: '#006064',
            A100: '#84ffff',
            A200: '#18ffff',
            A400: '#00e5ff',
            A700: '#00b8d4'
        };
        this.matCyanContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: 'rgba(255, 255, 255, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'rgba(0, 0, 0, 0.87)',
            A400: 'rgba(0, 0, 0, 0.87)',
            A700: 'rgba(0, 0, 0, 0.87)'
        };
        this.matTeal = {
            50: '#e0f2f1',
            100: '#b2dfdb',
            200: '#80cbc4',
            300: '#4db6ac',
            400: '#26a69a',
            500: '#009688',
            600: '#00897b',
            700: '#00796b',
            800: '#00695c',
            900: '#004d40',
            A100: '#a7ffeb',
            A200: '#64ffda',
            A400: '#1de9b6',
            A700: '#00bfa5'
        };
        this.matTealContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'rgba(255, 255, 255, 0.87)',
            900: 'rgba(255, 255, 255, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'rgba(0, 0, 0, 0.87)',
            A400: 'rgba(0, 0, 0, 0.87)',
            A700: 'rgba(0, 0, 0, 0.87)'
        };
        this.matGreen = {
            50: '#e8f5e9',
            100: '#c8e6c9',
            200: '#a5d6a7',
            300: '#81c784',
            400: '#66bb6a',
            500: '#4caf50',
            600: '#43a047',
            700: '#388e3c',
            800: '#2e7d32',
            900: '#1b5e20',
            A100: '#b9f6ca',
            A200: '#69f0ae',
            A400: '#00e676',
            A700: '#00c853'
        };
        this.matGreenContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'rgba(255, 255, 255, 0.87)',
            900: 'rgba(255, 255, 255, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'rgba(0, 0, 0, 0.87)',
            A400: 'rgba(0, 0, 0, 0.87)',
            A700: 'rgba(0, 0, 0, 0.87)'
        };
        this.matLightGreen = {
            50: '#f1f8e9',
            100: '#dcedc8',
            200: '#c5e1a5',
            300: '#aed581',
            400: '#9ccc65',
            500: '#8bc34a',
            600: '#7cb342',
            700: '#689f38',
            800: '#558b2f',
            900: '#33691e',
            A100: '#ccff90',
            A200: '#b2ff59',
            A400: '#76ff03',
            A700: '#64dd17'
        };
        this.matLightGreenContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'rgba(0, 0, 0, 0.87)',
            600: 'rgba(0, 0, 0, 0.87)',
            700: 'rgba(0, 0, 0, 0.87)',
            800: 'white',
            900: 'white',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'rgba(0, 0, 0, 0.87)',
            A400: 'rgba(0, 0, 0, 0.87)',
            A700: 'rgba(0, 0, 0, 0.87)'
        };
        this.matLime = {
            50: '#f9fbe7',
            100: '#f0f4c3',
            200: '#e6ee9c',
            300: '#dce775',
            400: '#d4e157',
            500: '#cddc39',
            600: '#c0ca33',
            700: '#afb42b',
            800: '#9e9d24',
            900: '#827717',
            A100: '#f4ff81',
            A200: '#eeff41',
            A400: '#c6ff00',
            A700: '#aeea00'
        };
        this.matLimeContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'rgba(0, 0, 0, 0.87)',
            600: 'rgba(0, 0, 0, 0.87)',
            700: 'rgba(0, 0, 0, 0.87)',
            800: 'rgba(0, 0, 0, 0.87)',
            900: 'white',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'rgba(0, 0, 0, 0.87)',
            A400: 'rgba(0, 0, 0, 0.87)',
            A700: 'rgba(0, 0, 0, 0.87)'
        };
        this.matYellow = {
            50: '#fffde7',
            100: '#fff9c4',
            200: '#fff59d',
            300: '#fff176',
            400: '#ffee58',
            500: '#ffeb3b',
            600: '#fdd835',
            700: '#fbc02d',
            800: '#f9a825',
            900: '#f57f17',
            A100: '#ffff8d',
            A200: '#ffff00',
            A400: '#ffea00',
            A700: '#ffd600'
        };
        this.matYellowContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'rgba(0, 0, 0, 0.87)',
            600: 'rgba(0, 0, 0, 0.87)',
            700: 'rgba(0, 0, 0, 0.87)',
            800: 'rgba(0, 0, 0, 0.87)',
            900: 'rgba(0, 0, 0, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'rgba(0, 0, 0, 0.87)',
            A400: 'rgba(0, 0, 0, 0.87)',
            A700: 'rgba(0, 0, 0, 0.87)'
        };
        this.matAmber = {
            50: '#fff8e1',
            100: '#ffecb3',
            200: '#ffe082',
            300: '#ffd54f',
            400: '#ffca28',
            500: '#ffc107',
            600: '#ffb300',
            700: '#ffa000',
            800: '#ff8f00',
            900: '#ff6f00',
            A100: '#ffe57f',
            A200: '#ffd740',
            A400: '#ffc400',
            A700: '#ffab00'
        };
        this.matAmberContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'rgba(0, 0, 0, 0.87)',
            600: 'rgba(0, 0, 0, 0.87)',
            700: 'rgba(0, 0, 0, 0.87)',
            800: 'rgba(0, 0, 0, 0.87)',
            900: 'rgba(0, 0, 0, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'rgba(0, 0, 0, 0.87)',
            A400: 'rgba(0, 0, 0, 0.87)',
            A700: 'rgba(0, 0, 0, 0.87)'
        };
        this.matOrange = {
            50: '#fff3e0',
            100: '#ffe0b2',
            200: '#ffcc80',
            300: '#ffb74d',
            400: '#ffa726',
            500: '#ff9800',
            600: '#fb8c00',
            700: '#f57c00',
            800: '#ef6c00',
            900: '#e65100',
            A100: '#ffd180',
            A200: '#ffab40',
            A400: '#ff9100',
            A700: '#ff6d00'
        };
        this.matOrangeContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'rgba(0, 0, 0, 0.87)',
            600: 'rgba(0, 0, 0, 0.87)',
            700: 'rgba(0, 0, 0, 0.87)',
            800: 'white',
            900: 'white',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'rgba(0, 0, 0, 0.87)',
            A400: 'rgba(0, 0, 0, 0.87)',
            A700: 'black'
        };
        this.matDeepOrange = {
            50: '#fbe9e7',
            100: '#ffccbc',
            200: '#ffab91',
            300: '#ff8a65',
            400: '#ff7043',
            500: '#ff5722',
            600: '#f4511e',
            700: '#e64a19',
            800: '#d84315',
            900: '#bf360c',
            A100: '#ff9e80',
            A200: '#ff6e40',
            A400: '#ff3d00',
            A700: '#dd2c00'
        };
        this.matDeepOrangeContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: 'white',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'rgba(0, 0, 0, 0.87)',
            A400: 'white',
            A700: 'white'
        };
        this.matBrown = {
            50: '#efebe9',
            100: '#d7ccc8',
            200: '#bcaaa4',
            300: '#a1887f',
            400: '#8d6e63',
            500: '#795548',
            600: '#6d4c41',
            700: '#5d4037',
            800: '#4e342e',
            900: '#3e2723',
            A100: '#d7ccc8',
            A200: '#bcaaa4',
            A400: '#8d6e63',
            A700: '#5d4037'
        };
        this.matBrownContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'white',
            400: 'white',
            500: 'rgba(255, 255, 255, 0.87)',
            600: 'rgba(255, 255, 255, 0.87)',
            700: 'rgba(255, 255, 255, 0.87)',
            800: 'rgba(255, 255, 255, 0.87)',
            900: 'rgba(255, 255, 255, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'rgba(0, 0, 0, 0.87)',
            A400: 'white',
            A700: 'rgba(255, 255, 255, 0.87)'
        };
        this.matGrey = {
            0: '#ffffff',
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            1000: '#000000',
            A100: '#ffffff',
            A200: '#eeeeee',
            A400: '#bdbdbd',
            A700: '#616161'
        };
        this.matGreyContrast = {
            0: 'rgba(0, 0, 0, 0.87)',
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'rgba(0, 0, 0, 0.87)',
            500: 'rgba(0, 0, 0, 0.87)',
            600: 'rgba(255, 255, 255, 0.87)',
            700: 'rgba(255, 255, 255, 0.87)',
            800: 'rgba(255, 255, 255, 0.87)',
            900: 'rgba(255, 255, 255, 0.87)',
            1000: 'rgba(255, 255, 255, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'rgba(0, 0, 0, 0.87)',
            A400: 'rgba(0, 0, 0, 0.87)',
            A700: 'rgba(255, 255, 255, 0.87)'
        };
        this.matBlueGrey = {
            50: '#eceff1',
            100: '#cfd8dc',
            200: '#b0bec5',
            300: '#90a4ae',
            400: '#78909c',
            500: '#607d8b',
            600: '#546e7a',
            700: '#455a64',
            800: '#37474f',
            900: '#263238',
            A100: '#cfd8dc',
            A200: '#b0bec5',
            A400: '#78909c',
            A700: '#455a64'
        };
        this.matBlueGreyContrast = {
            50: 'rgba(0, 0, 0, 0.87)',
            100: 'rgba(0, 0, 0, 0.87)',
            200: 'rgba(0, 0, 0, 0.87)',
            300: 'rgba(0, 0, 0, 0.87)',
            400: 'white',
            500: 'white',
            600: 'rgba(255, 255, 255, 0.87)',
            700: 'rgba(255, 255, 255, 0.87)',
            800: 'rgba(255, 255, 255, 0.87)',
            900: 'rgba(255, 255, 255, 0.87)',
            A100: 'rgba(0, 0, 0, 0.87)',
            A200: 'rgba(0, 0, 0, 0.87)',
            A400: 'white',
            A700: 'rgba(255, 255, 255, 0.87)'
        };
        this.matBlackWhite = {
            black: '#000000',
            white: '#ffffff'
        };
        this.matBlackContrast = {
            black: '#ffffff',
            white: '#000000'
        };
    }
    ColorPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], ColorPageComponent.prototype, "routerAnimation", void 0);
    ColorPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-color-page',
            template: __webpack_require__("../../../../../src/app/pages/color-page/color-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/color-page/color-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], ColorPageComponent);
    return ColorPageComponent;
}());

//# sourceMappingURL=color-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/color-page/palette/palette.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngIf=\"colors[500]\" class=\"main\"\n      [style.background]=\"sanitize(colors[500])\" [style.color]=\"sanitize(contrastColors[500])\">\n    <span>{{500}}</span>\n    <span>{{colors[500]}}</span>\n  </li>\n  <li *ngFor=\"let key of keys(colors)\" [class.break]=\"key == 'A100'\"\n      [style.background]=\"sanitize(colors[key])\" [style.color]=\"sanitize(contrastColors[key])\">\n    <span>{{key}}</span>\n    <span>{{colors[key]}}</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/pages/color-page/palette/palette.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host li {\n  height: 15px;\n  padding: 15px 10px 15px 10px; }\n  :host li.break {\n    margin-top: 10px; }\n  :host li.main {\n    height: 45px;\n    line-height: 45px; }\n  :host li span:first-child {\n    float: left; }\n  :host li span:last-child {\n    float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/color-page/palette/palette.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaletteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaletteComponent = (function () {
    function PaletteComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    PaletteComponent.prototype.ngOnInit = function () {
    };
    PaletteComponent.prototype.keys = function (value) {
        return Object.keys(value);
    };
    PaletteComponent.prototype.sanitize = function (style) {
        return this.domSanitizer.bypassSecurityTrustStyle(style);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PaletteComponent.prototype, "colors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PaletteComponent.prototype, "contrastColors", void 0);
    PaletteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-palette',
            template: __webpack_require__("../../../../../src/app/pages/color-page/palette/palette.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/color-page/palette/palette.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
    ], PaletteComponent);
    return PaletteComponent;
    var _a;
}());

//# sourceMappingURL=palette.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard-page/chart-models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AREA_CHART_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AREA_CHART_WITH_LINE_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DOUGHNUT_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return INIDICATOR_ITEMS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_colors__ = __webpack_require__("../../../../../src/app/utils/colors.ts");

// Area chart model
var AREA_CHART_OPTION = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#d9dadc',
                type: 'dashed',
                shadowOffsetX: '-1',
                shadowColor: 'rgba(217, 218, 220, 0.5)'
            }
        }
    },
    grid: {
        top: '10%',
        left: '0',
        right: '20px',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 15,
                textStyle: {
                    color: '#a6a5a6',
                    fontFamily: 'Roboto',
                    fontSize: 14
                }
            },
            data: ['Jan', '', 'Mar', '', 'May', '', 'Jul', '', 'Sep', '', 'Nov', '']
        }],
    yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                margin: 24,
                textStyle: {
                    color: '#a6a5a6',
                    fontFamily: 'Roboto',
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#212121',
                    opacity: 0.2
                }
            }
        }],
    series: [{
            name: 'Business A',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 3,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#e44b8e'
                        }, {
                            offset: 1,
                            color: '#f6c1d8'
                        }], false),
                    opacity: 0.79
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffffff',
                    borderColor: '#e44b8e',
                    borderWidth: 2
                }
            },
            data: [50, 103, 75, 60, 98, 175, 88, 110, 121, 103, 75, 55]
        }, {
            name: 'Business B',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 3,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#3e9ace'
                        }, {
                            offset: 1,
                            color: '#9dcce6'
                        }], false),
                    opacity: 0.73
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffffff',
                    borderColor: '#3e9ace',
                    borderWidth: 2
                }
            },
            data: [25, 75, 158, 75, 50, 91, 30, 138, 81, 67, 110, 98]
        }]
};
// Area chart with line model
var AREA_CHART_WITH_LINE_OPTION = {
    grid: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: false
    },
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            offset: -55,
            z: 10,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(33, 33, 33, 0.67)',
                    fontFamily: 'Roboto',
                    fontSize: 14
                }
            },
            data: ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', '']
        }],
    yAxis: [{
            type: 'value',
            show: false,
        }],
    series: [{
            name: 'Business A',
            type: 'line',
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 4,
                    color: '#3e9ace'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#7cbbdd'
                        }, {
                            offset: 1,
                            color: '#aad3e9'
                        }], false),
                    opacity: 1
                }
            },
            data: [65, 85, 83, 105, 100, 130, 120]
        }]
};
// Model for doughnut chart
var DOUGHNUT_OPTION = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    series: [
        {
            name: 'Some contactData',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    formatter: '{d}%',
                    textStyle: {
                        color: 'rgba(33, 33, 33, 0.87)',
                        fontWeight: '300',
                        fontFamily: 'Roboto',
                        fontSize: '30'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: 'First', color: __WEBPACK_IMPORTED_MODULE_0__utils_colors__["c" /* MAT_LIGHT_BLUE */]._300 },
                { value: 310, name: 'Second', color: __WEBPACK_IMPORTED_MODULE_0__utils_colors__["c" /* MAT_LIGHT_BLUE */]._400 },
                { value: 234, name: 'Third', color: __WEBPACK_IMPORTED_MODULE_0__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500 },
                { value: 135, name: 'Fourth', color: __WEBPACK_IMPORTED_MODULE_0__utils_colors__["c" /* MAT_LIGHT_BLUE */]._600 },
                { value: 1548, name: 'Fifth', color: __WEBPACK_IMPORTED_MODULE_0__utils_colors__["c" /* MAT_LIGHT_BLUE */]._700 }
            ],
            itemStyle: {
                normal: {
                    color: function (val) { return val.data.color; },
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
        }
    ]
};
// Model for linecharts
var INIDICATOR_ITEMS = [
    {
        title: 'Clicks',
        value: '25%',
        increase: true,
        option: {
            grid: {
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                containLabel: false
            },
            xAxis: [{
                    type: 'category',
                    show: false,
                }],
            yAxis: [{
                    type: 'value',
                    min: 80,
                    max: 120,
                    show: false
                }],
            series: [{
                    name: 'Business A',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 2.5,
                            color: '#03a9f4',
                            shadowBlur: 7,
                            shadowColor: 'rgba(38, 183, 239, 0.5)',
                            shadowOffsetY: 12
                        }
                    },
                    data: [100, 120, 95, 115, 100]
                }]
        }
    },
    {
        title: 'Progress',
        value: '10%',
        increase: true,
        option: {
            grid: {
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                containLabel: false
            },
            xAxis: [{
                    type: 'category',
                    show: false,
                }],
            yAxis: [{
                    type: 'value',
                    min: 80,
                    max: 120,
                    show: false
                }],
            series: [{
                    name: 'Business A',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 2.5,
                            color: '#f05a9d',
                            shadowBlur: 7,
                            shadowColor: 'rgba(240, 90, 157, 0.5)',
                            shadowOffsetY: 12
                        }
                    },
                    data: [100, 105, 118, 97, 120]
                }]
        }
    },
    {
        title: 'Likes',
        value: '15%',
        increase: false,
        option: {
            grid: {
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                containLabel: false
            },
            xAxis: [{
                    type: 'category',
                    show: false,
                }],
            yAxis: [{
                    type: 'value',
                    min: 80,
                    max: 120,
                    show: false,
                }],
            series: [{
                    name: 'Business A',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 2.5,
                            color: '#7dbbdd',
                            shadowBlur: 7,
                            shadowColor: 'rgba(124, 186, 221, 0.5)',
                            shadowOffsetY: 12
                        }
                    },
                    data: [100, 115, 99, 102, 107]
                }]
        }
    },
    {
        title: 'Sales',
        value: '22%',
        increase: true,
        option: {
            grid: {
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                containLabel: false
            },
            xAxis: [{
                    type: 'category',
                    show: false,
                }],
            yAxis: [{
                    type: 'value',
                    min: 80,
                    max: 120,
                    show: false,
                }],
            series: [{
                    name: 'Business A',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 2.5,
                            color: '#ff561f',
                            shadowBlur: 7,
                            shadowColor: 'rgba(255, 102, 51, 0.5)',
                            shadowOffsetY: 12
                        }
                    },
                    data: [100, 106, 102, 112, 104]
                }]
        }
    }
];
//# sourceMappingURL=chart-models.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard-page/dashboard-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"20\">\r\n        <div>\r\n          <mat-card class=\"statistics-card sm-height\">\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                  <div fxFlex class=\"\">\r\n                    <h5 class=\"push-none wide-spacing font text-center\">Active Campaigns</h5>\r\n                  </div>\r\n                  <div fxFlexAlign=\"start\">\r\n                    <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                      <mat-icon class=\"secondary-text-color\">settings</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n            <td-data-table _ngcontent-c29=\"\" class=\"ng-tns-c29-89\" _nghost-c30=\"\"><table _ngcontent-c30=\"\" td-data-table=\"\" _nghost-c32=\"\" class=\"td-data-table\" style=\"left: 0px;\">\r\n                <thead _ngcontent-c30=\"\" class=\"td-data-table-head\">\r\n                  <tr _ngcontent-c30=\"\" td-data-table-column-row=\"\" _nghost-c33=\"\" class=\"td-data-table-column-row no-border bg-color\">\r\n                    <!---->\r\n                    <!----><th _ngcontent-c30=\"\" td-data-table-column=\"\" _nghost-c34=\"\" class=\"td-data-table-column mat-clickable mat-sortable mat-active ng-star-inserted\" style=\"min-width: 65.8438px; max-width: 65.8438px;\"><span _ngcontent-c34=\"\" class=\"td-data-table-heading\">\r\n                <!---->\r\n                <span _ngcontent-c34=\"\">\r\n                  \r\n                        <span _ngcontent-c30=\"\" style=\"touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\">Name</span>\r\n                    \r\n                </span>\r\n              </span>\r\n              </th>\r\n              <th _ngcontent-c30=\"\" td-data-table-column=\"\" _nghost-c34=\"\" class=\"td-data-table-column mat-clickable mat-sortable ng-star-inserted\" style=\"min-width: 82.2188px; max-width: 82.2188px;\"><span _ngcontent-c34=\"\" class=\"td-data-table-heading\">\r\n                <!---->\r\n                <span _ngcontent-c34=\"\">\r\n                  \r\n                        <span _ngcontent-c30=\"\" style=\"touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\">Buys</span>\r\n                    \r\n                </span>\r\n              </span>\r\n              </th>\r\n              <th _ngcontent-c30=\"\" td-data-table-column=\"\" _nghost-c34=\"\" class=\"td-data-table-column mat-clickable mat-sortable mat-numeric ng-star-inserted\" style=\"min-width: 100.469px; max-width: 100.469px;\"><span _ngcontent-c34=\"\" class=\"td-data-table-heading\">\r\n                <!---->\r\n                <span _ngcontent-c34=\"\">\r\n                  \r\n                        <span _ngcontent-c30=\"\" style=\"touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\">Remain</span>\r\n                    \r\n                </span>\r\n                <!---->\r\n              </span>\r\n              </th>\r\n                  </tr>\r\n                </thead>\r\n              </table>\r\n              <div _ngcontent-c30=\"\" class=\"td-data-table-scrollable\">\r\n                <div _ngcontent-c30=\"\"></div>\r\n                <table _ngcontent-c30=\"\" td-data-table=\"\" _nghost-c32=\"\" class=\"td-data-table\">\r\n                  <tbody _ngcontent-c30=\"\" class=\"td-data-table-body\">\r\n                    <!----><tr _ngcontent-c30=\"\" td-data-table-row=\"\" _nghost-c35=\"\" class=\"td-data-table-row ng-star-inserted no-border\" tabindex=\"-1\" style=\"\">\r\n                      <td _ngcontent-c30=\"\" td-data-table-cell=\"\" _nghost-c36=\"\" class=\"td-data-table-cell mat-numeric ng-star-inserted\">\r\n                        <div _ngcontent-c36=\"\" class=\"td-data-table-cell-content-wrapper td-data-table-cell-numeric\">\r\n                \r\n                        <!----><span _ngcontent-c30=\"\" class=\"ng-star-inserted\">NorCal Repeaters</span>\r\n                        <!---->\r\n                      \r\n                       </div>\r\n                     </td>\r\n\r\n                     <td _ngcontent-c30=\"\" td-data-table-cell=\"\" _nghost-c36=\"\" class=\"td-data-table-cell mat-numeric ng-star-inserted\">\r\n                        <div _ngcontent-c36=\"\" class=\"td-data-table-cell-content-wrapper td-data-table-cell-numeric\">\r\n                \r\n                        <!----><span _ngcontent-c30=\"\" class=\"ng-star-inserted green campaigns\">138</span>\r\n                        <!---->\r\n                      \r\n                       </div>\r\n                     </td>\r\n\r\n                     <td _ngcontent-c30=\"\" td-data-table-cell=\"\" _nghost-c36=\"\" class=\"td-data-table-cell mat-numeric ng-star-inserted\">\r\n                        <div _ngcontent-c36=\"\" class=\"td-data-table-cell-content-wrapper td-data-table-cell-numeric\">\r\n                \r\n                        <!----><span _ngcontent-c30=\"\" class=\"ng-star-inserted\">$4,590</span>\r\n                        <!---->\r\n                      \r\n                       </div>\r\n                     </td>\r\n                    </tr>\r\n\r\n                    <tr _ngcontent-c30=\"\" td-data-table-row=\"\" _nghost-c35=\"\" class=\"td-data-table-row ng-star-inserted no-border\" tabindex=\"-1\" style=\"\">\r\n                        <td _ngcontent-c30=\"\" td-data-table-cell=\"\" _nghost-c36=\"\" class=\"td-data-table-cell mat-numeric ng-star-inserted\">\r\n                          <div _ngcontent-c36=\"\" class=\"td-data-table-cell-content-wrapper td-data-table-cell-numeric\">\r\n                  \r\n                          <!----><span _ngcontent-c30=\"\" class=\"ng-star-inserted\">Active Moms</span>\r\n                          <!---->\r\n                        \r\n                         </div>\r\n                       </td>\r\n  \r\n                       <td _ngcontent-c30=\"\" td-data-table-cell=\"\" _nghost-c36=\"\" class=\"td-data-table-cell mat-numeric ng-star-inserted\">\r\n                          <div _ngcontent-c36=\"\" class=\"td-data-table-cell-content-wrapper td-data-table-cell-numeric\">\r\n                  \r\n                          <!----><span _ngcontent-c30=\"\" class=\"ng-star-inserted campaigns red\">25</span>\r\n                          <!---->\r\n                        \r\n                         </div>\r\n                       </td>\r\n  \r\n                       <td _ngcontent-c30=\"\" td-data-table-cell=\"\" _nghost-c36=\"\" class=\"td-data-table-cell mat-numeric ng-star-inserted\">\r\n                          <div _ngcontent-c36=\"\" class=\"td-data-table-cell-content-wrapper td-data-table-cell-numeric\">\r\n                  \r\n                          <!----><span _ngcontent-c30=\"\" class=\"ng-star-inserted\">500</span>\r\n                          <!---->\r\n                        \r\n                         </div>\r\n                       </td>\r\n                      </tr>\r\n\r\n                      <tr _ngcontent-c30=\"\" td-data-table-row=\"\" _nghost-c35=\"\" class=\"td-data-table-row ng-star-inserted no-border\" tabindex=\"-1\" style=\"\">\r\n                          <td _ngcontent-c30=\"\" td-data-table-cell=\"\" _nghost-c36=\"\" class=\"td-data-table-cell mat-numeric ng-star-inserted\">\r\n                            <div _ngcontent-c36=\"\" class=\"td-data-table-cell-content-wrapper td-data-table-cell-numeric\">\r\n                    \r\n                            <!----><span _ngcontent-c30=\"\" class=\"ng-star-inserted\">Followers Push</span>\r\n                            <!---->\r\n                          \r\n                           </div>\r\n                         </td>\r\n    \r\n                         <td _ngcontent-c30=\"\" td-data-table-cell=\"\" _nghost-c36=\"\" class=\"td-data-table-cell mat-numeric ng-star-inserted\">\r\n                            <div _ngcontent-c36=\"\" class=\"td-data-table-cell-content-wrapper td-data-table-cell-numeric\">\r\n                    \r\n                            <!----><span _ngcontent-c30=\"\" class=\"ng-star-inserted campaigns\">21</span>\r\n                            <!---->\r\n                          \r\n                           </div>\r\n                         </td>\r\n    \r\n                         <td _ngcontent-c30=\"\" td-data-table-cell=\"\" _nghost-c36=\"\" class=\"td-data-table-cell mat-numeric ng-star-inserted\">\r\n                            <div _ngcontent-c36=\"\" class=\"td-data-table-cell-content-wrapper td-data-table-cell-numeric\">\r\n                    \r\n                            <!----><span _ngcontent-c30=\"\" class=\"ng-star-inserted\">$10,000</span>\r\n                            <!---->\r\n                          \r\n                           </div>\r\n                         </td>\r\n                        </tr>\r\n\r\n                        <tr _ngcontent-c30=\"\" td-data-table-row=\"\" _nghost-c35=\"\" class=\"td-data-table-row ng-star-inserted no-border\" tabindex=\"-1\" style=\"\">\r\n                            <td _ngcontent-c30=\"\" td-data-table-cell=\"\" _nghost-c36=\"\" class=\"td-data-table-cell mat-numeric ng-star-inserted\">\r\n                              <div _ngcontent-c36=\"\" class=\"td-data-table-cell-content-wrapper td-data-table-cell-numeric\">\r\n                      \r\n                              <!----><span _ngcontent-c30=\"\" class=\"ng-star-inserted\">Wine with Sports</span>\r\n                              <!---->\r\n                            \r\n                             </div>\r\n                           </td>\r\n      \r\n                           <td _ngcontent-c30=\"\" td-data-table-cell=\"\" _nghost-c36=\"\" class=\"td-data-table-cell mat-numeric ng-star-inserted\">\r\n                              <div _ngcontent-c36=\"\" class=\"td-data-table-cell-content-wrapper td-data-table-cell-numeric\">\r\n                      \r\n                              <!----><span _ngcontent-c30=\"\" class=\"ng-star-inserted campaigns\">13</span>\r\n                              <!---->\r\n                            \r\n                             </div>\r\n                           </td>\r\n      \r\n                           <td _ngcontent-c30=\"\" td-data-table-cell=\"\" _nghost-c36=\"\" class=\"td-data-table-cell mat-numeric ng-star-inserted\">\r\n                              <div _ngcontent-c36=\"\" class=\"td-data-table-cell-content-wrapper td-data-table-cell-numeric\">\r\n                      \r\n                              <!----><span _ngcontent-c30=\"\" class=\"ng-star-inserted\">$7,300</span>\r\n                              <!---->\r\n                            \r\n                             </div>\r\n                           </td>\r\n                          </tr>\r\n                    \r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              \r\n                      \r\n              </td-data-table>\r\n          </mat-card>\r\n          \r\n          \r\n        </div>\r\n      </div>\r\n  <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"20\">\r\n      <div>\r\n        <mat-card class=\"statistics-card average-wine sm-height\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <div fxFlex class=\"\">\r\n                  <h5 class=\"push-none wide-spacing font text-center\">Average Wine Rank</h5>\r\n                </div>\r\n                <div fxFlexAlign=\"start\">\r\n                  <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                    <mat-icon class=\"secondary-text-color\">settings</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n          <mat-card-footer>\r\n            <div echarts [options]=\"areaChartWithLineOption\" (chartInit)=\"chartInstances.push($event)\"\r\n                 class=\"area-chart-with-line\"></div>\r\n          </mat-card-footer>\r\n        </mat-card>\r\n        \r\n      </div>\r\n    </div>\r\n  <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"60\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"50\">\r\n          <div>\r\n              <mat-card class=\"sm-height\">\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                      <div fxFlex class=\"\">\r\n                        <h5 class=\"push-none wide-spacing font text-center\">Top Wines Buys Today</h5>\r\n                      </div>\r\n                      <div fxFlexAlign=\"start\">\r\n                        <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                          <mat-icon class=\"secondary-text-color\">settings</mat-icon>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  <mat-card-content>\r\n                    <div echarts [options]=\"simpleBarChartOption\" (chartInit)=\"chartInstances.push($event)\" class=\"bar-chart\"></div>\r\n                  </mat-card-content>\r\n                </mat-card>\r\n            <!-- <mat-card>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <div>\r\n                  <h5 class=\"font-w-light secondary-text-color\">Web statistics</h5>\r\n                </div>\r\n                <div fxLayout=\"row\">\r\n                  <mat-tab-group fxHide.lt-md=\"true\">\r\n                    <mat-tab>\r\n                      <ng-template matTabLabel>All time</ng-template>\r\n                    </mat-tab>\r\n                    <mat-tab>\r\n                      <ng-template matTabLabel>2017</ng-template>\r\n                    </mat-tab>\r\n                    <mat-tab>\r\n                      <ng-template matTabLabel>2016</ng-template>\r\n                    </mat-tab>\r\n                  </mat-tab-group>\r\n                  <div>\r\n                    <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                      <mat-icon class=\"secondary-text-color\">more_vert</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div echarts [options]=\"areaChartOption\" (chartInit)=\"chartInstances.push($event)\" class=\"area-chart\"></div>\r\n            </mat-card> -->\r\n            <!--<mat-card class=\"rating-card\">\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <div>\r\n                  <h5 class=\"font-w-light secondary-text-color\">Rating</h5>\r\n                </div>\r\n                <mat-tab-group fxHide.lt-md=\"true\">\r\n                  <mat-tab>\r\n                    <ng-template matTabLabel>Week</ng-template>\r\n                  </mat-tab>\r\n                  <mat-tab>\r\n                    <ng-template matTabLabel>Month</ng-template>\r\n                  </mat-tab>\r\n                  <mat-tab>\r\n                    <ng-template matTabLabel>Year</ng-template>\r\n                  </mat-tab>\r\n                </mat-tab-group>\r\n              </div>\r\n              <mat-list>\r\n                <ng-container *ngFor=\"let item of ratingItems\">\r\n                  <mat-list-item>\r\n                    <img mat-list-avatar src=\"{{item.avatar}}\">\r\n                    <h6 matLine>{{item.name}}</h6>\r\n                    <p matLine>{{item.tag}}</p>\r\n                    <div class=\"val-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                      <mat-progress-bar fxFlex=\"70\" [mode]=\"'determinate'\" [value]=\"item.value\"></mat-progress-bar>\r\n                      <span fxFlex=\"30\" class=\"rating-val secondary-text-color text-right\">{{item.value}}%</span>\r\n                    </div>\r\n                    <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                      <mat-icon class=\"secondary-text-color\">more_vert</mat-icon>\r\n                    </button>\r\n                  </mat-list-item>\r\n                  <mat-divider></mat-divider>\r\n                </ng-container>\r\n              </mat-list>\r\n            </mat-card>-->\r\n          </div>\r\n\r\n          <div>\r\n              \r\n            <!-- <mat-card>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <div>\r\n                  <h5 class=\"font-w-light secondary-text-color\">Web statistics</h5>\r\n                </div>\r\n                <div fxLayout=\"row\">\r\n                  <mat-tab-group fxHide.lt-md=\"true\">\r\n                    <mat-tab>\r\n                      <ng-template matTabLabel>All time</ng-template>\r\n                    </mat-tab>\r\n                    <mat-tab>\r\n                      <ng-template matTabLabel>2017</ng-template>\r\n                    </mat-tab>\r\n                    <mat-tab>\r\n                      <ng-template matTabLabel>2016</ng-template>\r\n                    </mat-tab>\r\n                  </mat-tab-group>\r\n                  <div>\r\n                    <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                      <mat-icon class=\"secondary-text-color\">more_vert</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div echarts [options]=\"areaChartOption\" (chartInit)=\"chartInstances.push($event)\" class=\"area-chart\"></div>\r\n            </mat-card> -->\r\n          </div>\r\n\r\n        </div>\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"50\">\r\n      <div>\r\n          <mat-card class=\"sm-height\">\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                  <div fxFlex class=\"\">\r\n                    <h5 class=\"push-none wide-spacing font text-center\">Top Wines Buys Month</h5>\r\n                  </div>\r\n                  <div fxFlexAlign=\"start\">\r\n                    <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                      <mat-icon class=\"secondary-text-color\">settings</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              <mat-card-content>\r\n                <div echarts [options]=\"simpleBarChartOption\" (chartInit)=\"chartInstances.push($event)\" class=\"bar-chart\"></div>\r\n              </mat-card-content>\r\n            </mat-card>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n<section fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"20\">\r\n        <mat-card class=\"clients-card price-card sm-height\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n              <div fxFlex class=\"\">\r\n                <h5 class=\"push-none wide-spacing text-center font text-center\">Wine Tags</h5>\r\n              </div>\r\n              <div fxFlexAlign=\"start\">\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                  <mat-icon class=\"secondary-text-color\">settings</mat-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n    </div> \r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"20\">\r\n      <div>\r\n          <mat-card class=\"clients-card price-card sm-height\">\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <div fxFlex class=\"\">\r\n                  <h5 class=\"push-none wide-spacing font text-center\">Price Elasticity</h5>\r\n                </div>\r\n                <div fxFlexAlign=\"start\">\r\n                  <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                    <mat-icon class=\"secondary-text-color\">settings</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </mat-card>\r\n      </div>\r\n        \r\n    </div>\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"30\">\r\n      <div>\r\n        <mat-card class=\"sm-height\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <div fxFlex class=\"\">\r\n                  <h5 class=\"push-none wide-spacing font text-center\">Top Wines Drank Today</h5>\r\n                </div>\r\n                <div fxFlexAlign=\"start\">\r\n                  <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                    <mat-icon class=\"secondary-text-color\">settings</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n          <mat-card-content>\r\n            <div echarts [options]=\"simpleBarChartOption\" (chartInit)=\"chartInstances.push($event)\" class=\"bar-chart\"></div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n        \r\n    </div>\r\n\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"30\">\r\n        <div>\r\n            <mat-card class=\"sm-height\">\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex class=\"\">\r\n                      <h5 class=\"push-none wide-spacing font text-center\">Top Wines Drank Month</h5>\r\n                    </div>\r\n                    <div fxFlexAlign=\"start\">\r\n                      <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                        <mat-icon class=\"secondary-text-color\">settings</mat-icon>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                <mat-card-content>\r\n                  <div echarts [options]=\"simpleBarChartOption\" (chartInit)=\"chartInstances.push($event)\" class=\"bar-chart\"></div>\r\n                </mat-card-content>\r\n              </mat-card>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"20\">\r\n        <div>\r\n            <mat-card class=\"sm-height\">\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex class=\"\">\r\n                      <h5 class=\"push-none wide-spacing text-center font text-center\">Notifications</h5>\r\n                    </div>\r\n                    <div fxFlexAlign=\"start\">\r\n                      <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                        <mat-icon class=\"secondary-text-color\">settings</mat-icon>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                <mat-card-content class=\"notifications\">\r\n                  <ul class=\"notification-list\">\r\n                    <li><i class=\"material-icons notification\">chat</i> Ticket #27 Updated</li>\r\n                    <li><i class=\"material-icons notification\">chat</i> Pricing Upload Complete</li>\r\n                    <li><i class=\"material-icons notification\">chat</i> Customer Servey</li>\r\n                    <li><i class=\"material-icons notification\">chat</i> You're Invited</li>\r\n                  </ul>\r\n                </mat-card-content>\r\n              </mat-card>\r\n        </div>\r\n    </div> \r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"20\">\r\n      <div>\r\n          <mat-card class=\"consumer-grid sm-height\">\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                  <div fxFlex class=\"\">\r\n                    <h5 class=\"push-none wide-spacing text-center font text-center\">Most Likes Post</h5>\r\n                  </div>\r\n                  <div fxFlexAlign=\"start\">\r\n                    <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                      <mat-icon class=\"secondary-text-color\">settings</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n            </mat-card>\r\n      </div>\r\n        \r\n    </div>\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"30\">\r\n      <div>\r\n            \r\n      <mat-card class=\"clients-card price-card sm-height\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div fxFlex class=\"\">\r\n              <h5 class=\"push-none wide-spacing font text-center\">Most Shared Wines</h5>\r\n            </div>\r\n            <div fxFlexAlign=\"start\">\r\n              <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                <mat-icon class=\"secondary-text-color\">settings</mat-icon>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n          </div>\r\n        \r\n    </div>\r\n\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"30\">\r\n        <div>\r\n          <mat-card class=\"consumer-grid sm-height\">\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                  <div fxFlex class=\"\">\r\n                    <h5 class=\"push-none wide-spacing text-center font text-center\">Consumer Personas</h5>\r\n                  </div>\r\n                  <div fxFlexAlign=\"start\">\r\n                    <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n                      <mat-icon class=\"secondary-text-color\">settings</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              <mat-card-content class=\"notifications\">\r\n                <ul class=\"consumer-list\">\r\n                  <li> Name</li>\r\n                  <li> Buys </li>\r\n                  <li> Drinks</li>\r\n                </ul>\r\n              </mat-card-content>\r\n            </mat-card>\r\n      </div>\r\n    </div>\r\n</section>\r\n<mat-menu #menuAbove=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\r\n  <button mat-menu-item *ngFor=\"let item of menuItems\">\r\n    {{ item.text }}\r\n  </button>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard-page/dashboard-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/************************************** LIGHT THEME **************************************/\n/************************************** DARK THEME **************************************/\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/************************************** COLOR FUNCTION **************************************/\n:host {\n  letter-spacing: 0.03em; }\n  :host /deep/ .mat-card {\n    padding-top: 18px;\n    padding-bottom: 18px;\n    -ms-flex-preferred-size: auto !important;\n        flex-basis: auto !important; }\n  :host /deep/ .mat-tab-labels .mat-tab-label {\n    min-width: 62px;\n    height: 36px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n    font-weight: 400;\n    font-size: 16px; }\n    :host /deep/ .mat-tab-labels .mat-tab-label:focus {\n      background-color: inherit;\n      opacity: 0.6; }\n  :host /deep/ .mat-tab-header {\n    border: none; }\n  :host /deep/ .mat-ink-bar {\n    background-color: rgba(33, 33, 33, 0.54); }\n  :host /deep/ .mat-list {\n    padding-top: 0; }\n  :host /deep/ .mat-list-item .mat-list-item-content {\n    padding: 0; }\n  :host /deep/ .mat-list-item .mat-list-avatar {\n    width: 50px;\n    height: 50px; }\n  :host h5 {\n    margin: 5px 0; }\n  :host .area-chart {\n    height: 300px; }\n  :host .statistics-card .area-chart-with-line {\n    height: 250px; }\n  :host .clients-card {\n    height: 274px; }\n    :host .clients-card .mat-fab {\n      background: linear-gradient(-51deg, #3e9ace 0%, #03a9f4 100%); }\n  :host .doughnut-chart {\n    height: 240px; }\n  :host .notebook-card {\n    min-height: 220px;\n    box-sizing: border-box;\n    background: url(\"/assets/cards-demo/400300.png\") no-repeat center;\n    background-size: cover; }\n    :host .notebook-card .mat-card-footer {\n      height: 80px;\n      padding: 0 30px;\n      background-color: rgba(33, 33, 33, 0.87);\n      margin: 0;\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n  :host .indicator-card {\n    padding-left: 0;\n    padding-right: 0; }\n    :host .indicator-card .indicator-item p {\n      font-size: 30px;\n      font-weight: 300;\n      margin-top: 15px;\n      margin-bottom: 15px; }\n    :host .indicator-card .indicator-item .indicator-chart {\n      height: 60px;\n      margin: 0 30px; }\n    :host .indicator-card .indicator-item:nth-child(1) p {\n      color: #03a9f4; }\n    :host .indicator-card .indicator-item:nth-child(2) p {\n      color: #f05a9d; }\n    :host .indicator-card .indicator-item:nth-child(3) p {\n      color: #73b6db; }\n    :host .indicator-card .indicator-item:nth-child(4) p {\n      color: #ff561f; }\n  :host .rating-card .mat-divider:last-child {\n    display: none; }\n  :host .rating-card .val-wrap {\n    width: 200%; }\n    :host .rating-card .val-wrap .rating-val {\n      font-size: 14px; }\n    :host .rating-card .val-wrap /deep/ .mat-progress-bar-buffer {\n      background-color: #dddddd; }\n  :host .rating-card /deep/ .mat-list-item-content {\n    height: 100px; }\n  :host .rating-card /deep/ .mat-list-item:nth-child(1) .mat-progress-bar-fill::after {\n    background-color: #03a9f4; }\n  :host .rating-card /deep/ .mat-list-item:nth-child(3) .mat-progress-bar-fill::after {\n    background-color: #e44b8e; }\n  :host .rating-card /deep/ .mat-list-item:nth-child(5) .mat-progress-bar-fill::after {\n    background-color: #3e9ace; }\n  :host .todo-card {\n    background: linear-gradient(-54deg, #e44b8e 0%, #03a9f4 100%); }\n    :host .todo-card /deep/ .mat-checkbox-frame {\n      border-color: rgba(255, 255, 255, 0.87); }\n    :host .todo-card /deep/ .mat-checkbox-checkmark {\n      fill: rgba(255, 255, 255, 0.87); }\n    :host .todo-card /deep/ .mat-checkbox-checkmark-path {\n      stroke: rgba(255, 255, 255, 0.87) !important; }\n    :host .todo-card /deep/ .mat-checkbox-checked .mat-checkbox-background {\n      background-color: transparent; }\n    :host .todo-card /deep/ .mat-list-item-content {\n      height: 54px; }\n    :host .todo-card /deep/ .mat-input-placeholder {\n      font-weight: 300;\n      color: rgba(255, 255, 255, 0.5); }\n    :host .todo-card /deep/ .mat-input-container {\n      width: 100%;\n      color: rgba(255, 255, 255, 0.87); }\n      :host .todo-card /deep/ .mat-input-container input {\n        font-weight: 300;\n        font-size: 16px; }\n      :host .todo-card /deep/ .mat-input-container .mat-input-underline {\n        background-color: rgba(255, 255, 255, 0.25); }\n    :host .todo-card /deep/ .mat-divider {\n      border-top-color: rgba(255, 255, 255, 0.25); }\n    :host .todo-card .title {\n      font-size: 14px;\n      font-weight: 300;\n      color: rgba(255, 255, 255, 0.87); }\n    :host .todo-card .text {\n      font-size: 12px;\n      font-weight: 300;\n      color: rgba(255, 255, 255, 0.5) !important; }\n  :host .project-card /deep/ .mat-list .mat-list-item.mat-3-line .mat-list-item-content {\n    height: 75px; }\n\n.mat-toolbar.mat-primary {\n  background: red;\n  color: white; }\n\n.bar-chart {\n  height: 200px; }\n  .bar-chart.large {\n    height: 200px; }\n\n.graph-text {\n  display: inline-block;\n  font-size: 20px; }\n\n.setting-icon {\n  display: inline-block; }\n\n.notification {\n  vertical-align: middle; }\n\n.notification-list {\n  padding-left: 5px; }\n\n.notification-list li {\n  list-style-type: none;\n  margin: 5px; }\n\n.notifications {\n  padding: 20px 0;\n  background: #2e2f30;\n  margin-top: 20px; }\n\n.consumer-list li {\n  display: inline-block;\n  width: 30%; }\n\n.average-wine {\n  background: #54c242; }\n\n.font {\n  font-size: 18px; }\n\n.no-border {\n  border: 0; }\n\n.bg-color {\n  background: #2E2F30; }\n\n.green {\n  background: #54c242;\n  padding: 1px 4px; }\n\n.red {\n  background: #e20f00;\n  padding: 1px 8px !important; }\n\n.campaigns {\n  border: 1px solid #2e2f30;\n  padding: 0 7px; }\n\n.sm-height {\n  height: 274px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard-page/dashboard-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__ = __webpack_require__("../../../../../src/app/resize/resize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_models__ = __webpack_require__("../../../../../src/app/pages/dashboard-page/chart-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_colors__ = __webpack_require__("../../../../../src/app/utils/colors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardPageComponent = (function () {
    function DashboardPageComponent(dataTableService, resizeService) {
        var _this = this;
        this.dataTableService = dataTableService;
        this.resizeService = resizeService;
        // Add router animation
        this.routerAnimation = true;
        // Chart instances used for resizing after layout changes
        this.chartInstances = [];
        // Menu options
        this.menuItems = [
            { text: 'Refresh' },
            { text: 'Settings' },
            { text: 'Help' }
        ];
        // Project list items
        this.projectItems = [
            {
                avatar: '/assets/avatars-img/4040.png',
                title: 'Claudette Girard',
                text: 'Posted 2 photos in ',
                project: 'Project 1',
                date: 'Today'
            },
            {
                avatar: '/assets/avatars-img/4040.png',
                title: 'Michele Pitts',
                text: 'Left comment in ',
                project: 'Project 2',
                date: '2 May'
            },
            {
                avatar: '/assets/avatars-img/4040.png',
                title: 'Crystal Stewart',
                text: 'Upload one files in ',
                project: 'Project 3',
                date: '4 April'
            }
        ];
        // Items for card with linecharts
        this.indicatorItems = [];
        // Rating list items
        this.ratingItems = [
            {
                avatar: '/assets/avatars-img/4040.png',
                name: 'Marian Cannon',
                tag: '@mariancannon',
                value: 81.48
            },
            {
                avatar: '/assets/avatars-img/4040.png',
                name: 'John Lynch',
                tag: '@johnlynch',
                value: 68
            },
            {
                avatar: '/assets/avatars-img/4040.png',
                name: 'Isabella Watts',
                tag: '@isabellawatts',
                value: 36
            }
        ];
        // To do items
        this.todoItems = [
            {
                title: 'Sections 1.10.32',
                text: 'It is a long established fact',
                done: false
            },
            {
                title: 'It has roots',
                text: 'Many desktop publishing ',
                done: false
            },
            {
                title: 'Richard McClintock',
                text: 'Aldus PageMaker',
                done: false
            }
        ];
        this.doneItems = [
            {
                title: 'The first line of Lorem Ipsum',
                text: 'It has survived not only five centuries',
                done: true
            }
        ];
        this.simpleBarChartOption = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Bar 1'],
                bottom: 0,
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_5__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            },
            toolbox: {
                show: false,
                feature: {
                    magicType: {
                        show: false,
                        type: ['bar'],
                        title: {
                            bar: 'Bar',
                            textStyle: {
                                color: __WEBPACK_IMPORTED_MODULE_5__utils_colors__["a" /* CHART_TEXT_COLOR */]
                            }
                        }
                    },
                    saveAsImage: {
                        show: true,
                        title: 'Save',
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_5__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['AMDC 890', 'PIED 770', 'JKLI 748', 'DFWK 699', 'AAZE 365'],
                    axisLabel: {
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_5__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisTicks: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_5__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_5__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_5__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisTicks: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_5__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_5__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            ],
            series: [
                {
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'Average' }
                        ]
                    },
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_5__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                        }
                    }
                },
                {
                    type: 'bar',
                    //data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    markPoint: {
                        data: [
                            { name: 'Mark 1', value: 182.2, xAxis: 7, yAxis: 183 },
                            { name: 'Mark 2', value: 2.3, xAxis: 11, yAxis: 3 }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    },
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_5__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                        }
                    }
                }
            ]
        };
        this.resizeSubscription = resizeService.resizeInformer$.subscribe(function () { return _this.chartInstances.forEach(function (chart) { return chart.resize(); }); });
    }
    DashboardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.areaChartOption = __WEBPACK_IMPORTED_MODULE_4__chart_models__["a" /* AREA_CHART_OPTION */];
            _this.areaChartWithLineOption = __WEBPACK_IMPORTED_MODULE_4__chart_models__["b" /* AREA_CHART_WITH_LINE_OPTION */];
            _this.doughnutOption = __WEBPACK_IMPORTED_MODULE_4__chart_models__["c" /* DOUGHNUT_OPTION */];
            _this.indicatorItems = __WEBPACK_IMPORTED_MODULE_4__chart_models__["d" /* INIDICATOR_ITEMS */];
        }, 0);
    };
    DashboardPageComponent.prototype.ngOnDestroy = function () {
        this.resizeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], DashboardPageComponent.prototype, "routerAnimation", void 0);
    DashboardPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-page',
            template: __webpack_require__("../../../../../src/app/pages/dashboard-page/dashboard-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard-page/dashboard-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDataTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDataTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */]) === "function" && _b || Object])
    ], DashboardPageComponent);
    return DashboardPageComponent;
    var _a, _b;
}());

//# sourceMappingURL=dashboard-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dialog-page/dialog-example.component.html":
/***/ (function(module, exports) {

module.exports = "  <h4 mat-dialog-title>Dialog title</h4>\r\n  <div mat-dialog-content>Lorem ipsum dolor sit amet, consectetur</div>\r\n  <div mat-dialog-actions class=\"dialog-example-buttons\">\r\n    <button mat-button (click)=\"dialogRef.close('First option')\">First option</button>\r\n    <button mat-button (click)=\"dialogRef.close('Second option')\">Second option</button>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dialog-page/dialog-example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogExampleComponent = (function () {
    function DialogExampleComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogExampleComponent.prototype.ngOnInit = function () {
    };
    DialogExampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-example',
            template: __webpack_require__("../../../../../src/app/pages/dialog-page/dialog-example.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */]) === "function" && _a || Object])
    ], DialogExampleComponent);
    return DialogExampleComponent;
    var _a;
}());

//# sourceMappingURL=dialog-example.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dialog-page/dialog-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Dialog</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Open dialog</button>\r\n        <br>\r\n        <p>You selected: <mark *ngIf=\"selectedOption\">{{selectedOption}}</mark></p>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dialog-page/dialog-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .dialog-example-buttons {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dialog-page/dialog-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_example_component__ = __webpack_require__("../../../../../src/app/pages/dialog-page/dialog-example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogPageComponent = (function () {
    function DialogPageComponent(dialog) {
        this.dialog = dialog;
        // Add router animation
        this.routerAnimation = true;
    }
    DialogPageComponent.prototype.ngOnInit = function () {
    };
    DialogPageComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialog_example_component__["a" /* DialogExampleComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], DialogPageComponent.prototype, "routerAnimation", void 0);
    DialogPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-page',
            template: __webpack_require__("../../../../../src/app/pages/dialog-page/dialog-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dialog-page/dialog-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */]) === "function" && _a || Object])
    ], DialogPageComponent);
    return DialogPageComponent;
    var _a;
}());

//# sourceMappingURL=dialog-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/file-upload-page/file-upload-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">File upload</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-title>File Input</mat-card-title>\r\n      <mat-card-content>\r\n        <div fxLayout=\"row\">\r\n          <mat-input-container tdFileDrop\r\n                              (click)=\"fileInput.inputElement.click()\"\r\n                              (keyup.enter)=\"fileInput.inputElement.click()\"\r\n                              (keyup.delete)=\"fileInput.clear()\"\r\n                              (keyup.backspace)=\"fileInput.clear()\" fxFlex>\r\n            <input matInput\r\n                   placeholder=\"select or drop files\"\r\n                   [value]=\"files?.length ? (files?.length + ' files') : files?.name\"\r\n                   readonly/>\r\n          </mat-input-container>\r\n          <button mat-icon-button *ngIf=\"files\" (click)=\"fileInput.clear()\" (keyup.enter)=\"fileInput.clear()\">\r\n            <mat-icon class=\"icon-color\">cancel</mat-icon>\r\n          </button>\r\n          <td-file-input class=\"push-left-sm push-right-sm\" #fileInput [(ngModel)]=\"files\" multiple>\r\n            <mat-icon>folder</mat-icon>\r\n            <span class=\"text-upper\">Browse...</span>\r\n          </td-file-input>\r\n          <span>\r\n            <button mat-raised-button color=\"accent\" [disabled]=\"!files\" class=\"text-upper\">Submit</button>\r\n          </span>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-title>File Upload Button</mat-card-title>\r\n      <mat-card-content>\r\n        <td-file-upload #singleFileUpload>\r\n          <mat-icon>file_upload</mat-icon>\r\n          <span>{{ singleFileUpload.files?.name }}</span>\r\n          <ng-template td-file-input-label>\r\n            <mat-icon>attach_file</mat-icon>\r\n            <span>Choose a file...</span>\r\n          </ng-template>\r\n        </td-file-upload>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-title>Multiple File Upload Button</mat-card-title>\r\n      <mat-card-content>\r\n        <td-file-upload #fileMultipleUpload\r\n                        accept=\".sql\" defaultColor=\"primary\" activeColor=\"accent\" cancelColor=\"warn\" multiple>\r\n          <mat-icon>file_upload</mat-icon>\r\n          <span>\r\n            {{ fileMultipleUpload.files?.name || fileMultipleUpload.files?.length }}\r\n            <span *ngIf=\"fileMultipleUpload.files?.length\">files selected</span>\r\n          </span>\r\n          <ng-template td-file-input-label>\r\n            <mat-icon>attach_file</mat-icon>\r\n            <span>Choose multiple .sql files...</span>\r\n          </ng-template>\r\n        </td-file-upload>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/file-upload-page/file-upload-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/file-upload-page/file-upload-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileUploadPageComponent = (function () {
    function FileUploadPageComponent() {
        // Add router animation
        this.routerAnimation = true;
    }
    FileUploadPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], FileUploadPageComponent.prototype, "routerAnimation", void 0);
    FileUploadPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file-upload-page',
            template: __webpack_require__("../../../../../src/app/pages/file-upload-page/file-upload-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/file-upload-page/file-upload-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], FileUploadPageComponent);
    return FileUploadPageComponent;
}());

//# sourceMappingURL=file-upload-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/flex-layout-page/flex-layout-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Flex layout</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-title>Layout Children with 'layout-align'</mat-card-title>\r\n      <mat-card-content>\r\n        <div [fxLayout]=\"direction\" [fxLayoutAlign]=\"layoutAlign()\" class=\"blocks\">\r\n          <div class=\"block primary-light-background-color\" fxHide=\"lt-sm\"></div>\r\n          <div class=\"block primary-light-background-color\"></div>\r\n          <div class=\"block primary-light-background-color\"></div>\r\n          <div class=\"block primary-light-background-color\"></div>\r\n          <div class=\"block primary-light-background-color\" fxHide=\"lt-sm\"></div>\r\n        </div>\r\n        <br>\r\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n          <div>\r\n            <div>Layout Direction</div>\r\n            <mat-radio-group [(ngModel)]=\"direction\" fxLayout=\"column\">\r\n              <mat-radio-button value=\"row\">row</mat-radio-button>\r\n              <mat-radio-button value=\"column\">column</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n          <div>\r\n            <div>Alignment in Layout Direction ({{direction == 'row' ? 'horizontal' : 'vertical'}})</div>\r\n            <mat-radio-group name=\"mainAxisOptions\" [(ngModel)]=\"mainAxis\" fxLayout=\"column\">\r\n              <mat-radio-button value=\"\">none</mat-radio-button>\r\n              <mat-radio-button value=\"start\">start (default)</mat-radio-button>\r\n              <mat-radio-button value=\"center\">center</mat-radio-button>\r\n              <mat-radio-button value=\"end\">end</mat-radio-button>\r\n              <mat-radio-button value=\"space-around\">space-around</mat-radio-button>\r\n              <mat-radio-button value=\"space-between\">space-between</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n          <div>\r\n            <div>Alignment in Perpendicular Direction ({{direction == 'column' ? 'horizontal' : 'vertical'}})</div>\r\n            <mat-radio-group name=\"crossAxisOptions\" [(ngModel)]=\"crossAxis\" fxLayout=\"column\">\r\n              <mat-radio-button value=\"none\"><em>none</em></mat-radio-button>\r\n              <mat-radio-button value=\"start\">start</mat-radio-button>\r\n              <mat-radio-button value=\"center\">center</mat-radio-button>\r\n              <mat-radio-button value=\"end\">end</mat-radio-button>\r\n              <mat-radio-button value=\"stretch\">stretch (default)</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div>\r\n          <div class=\"secondary-text-color\">\r\n            &lt;div fxLayout=\"{{ direction }}\"\r\n            <span>fxLayoutAlign=\"{{ layoutAlign() }}\"</span>\r\n            &gt;\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n\r\n\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-title>Flex proportion</mat-card-title>\r\n      <mat-card-content>\r\n        <div fxLayout=\"row\" class=\"low-blocks\">\r\n          <div fxFlex=\"10\" class=\"block primary-light-background-color\">1</div>\r\n          <div fxFlex=\"20\" class=\"block primary-light-background-color\">2</div>\r\n          <div fxFlex=\"30\" class=\"block primary-light-background-color\">3</div>\r\n          <div fxFlex=\"40\" class=\"block primary-light-background-color\">4</div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/flex-layout-page/flex-layout-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.blocks {\n  height: 350px; }\n  .blocks.low {\n    height: 60px; }\n  .blocks > div {\n    padding-top: 10px;\n    text-align: center;\n    min-width: 75px;\n    min-height: 40px;\n    border-radius: 2px;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n    .blocks > div:nth-child(2) {\n      min-height: 55px; }\n    .blocks > div:nth-child(4) {\n      min-height: 55px; }\n\n.low-blocks {\n  height: 100px; }\n  .low-blocks .block {\n    margin: 5px;\n    line-height: 100px;\n    text-align: center; }\n\n.block {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\nmat-radio-group {\n  padding-top: 15px; }\n\n.mat-radio-button {\n  margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/flex-layout-page/flex-layout-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexLayoutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlexLayoutPageComponent = (function () {
    function FlexLayoutPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        this.direction = 'row';
        this.mainAxis = 'space-around';
        this.crossAxis = 'center';
    }
    FlexLayoutPageComponent.prototype.ngOnInit = function () {
    };
    FlexLayoutPageComponent.prototype.layoutAlign = function () {
        return this.mainAxis + " " + this.crossAxis;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], FlexLayoutPageComponent.prototype, "routerAnimation", void 0);
    FlexLayoutPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flex-layout-page',
            template: __webpack_require__("../../../../../src/app/pages/flex-layout-page/flex-layout-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/flex-layout-page/flex-layout-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], FlexLayoutPageComponent);
    return FlexLayoutPageComponent;
}());

//# sourceMappingURL=flex-layout-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements-page/form-elements-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Form elements</h3>\r\n  </header>\r\n  <article>\r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"100\">\r\n        <mat-card>\r\n          <mat-card-title>Input</mat-card-title>\r\n          <mat-card-content>\r\n            <mat-input-container>\r\n              <textarea matInput placeholder=\"Default textarea\"></textarea>\r\n            </mat-input-container>\r\n            <mat-input-container>\r\n              <textarea matInput matTextareaAutosize placeholder=\"Resizable textarea\" minRows=\"5\"></textarea>\r\n            </mat-input-container>\r\n            <mat-input-container>\r\n              <textarea matInput placeholder=\"Disabled textarea\" disabled></textarea>\r\n            </mat-input-container>\r\n            <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutGap.gt-sm=\"30px\">\r\n              <mat-input-container fxFlex>\r\n                <input matInput placeholder=\"Default\">\r\n              </mat-input-container>\r\n              <mat-input-container fxFlex>\r\n                <input matInput placeholder=\"Filled\" value=\"Lorem\">\r\n              </mat-input-container>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutGap.gt-sm=\"30px\">\r\n              <mat-input-container fxFlex hintLabel=\"Lorem\">\r\n                <input matInput placeholder=\"With hint\">\r\n              </mat-input-container>\r\n              <mat-input-container fxFlex>\r\n                <input matInput placeholder=\"Disabled\" disabled>\r\n              </mat-input-container>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutGap.gt-sm=\"30px\">\r\n              <mat-input-container fxFlex floatPlaceholder=\"never\">\r\n                <input matInput placeholder=\"Never float\">\r\n              </mat-input-container>\r\n              <mat-input-container fxFlex floatPlaceholder=\"always\">\r\n                <input matInput placeholder=\"Always float\">\r\n              </mat-input-container>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutGap.gt-sm=\"30px\">\r\n              <mat-input-container fxFlex dividerColor=\"accent\">\r\n                <input matInput placeholder=\"Accent\">\r\n              </mat-input-container>\r\n              <mat-input-container fxFlex dividerColor=\"warn\">\r\n                <input matInput placeholder=\"Warn\">\r\n              </mat-input-container>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutGap.gt-sm=\"30px\">\r\n              <mat-input-container fxFlex>\r\n                <input matInput #postalCode2 maxlength=\"5\" placeholder=\"Start hint\">\r\n                <mat-hint align=\"start\">{{postalCode2.value.length}} / 5</mat-hint>\r\n              </mat-input-container>\r\n              <mat-input-container fxFlex>\r\n                <input matInput #postalCode maxlength=\"5\" placeholder=\"End hint\">\r\n                <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n              </mat-input-container>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Autocomplete</mat-card-title>\r\n          <mat-card-content>\r\n            <mat-input-container>\r\n              <input matInput placeholder=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\r\n            </mat-input-container>\r\n\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state\">\r\n                {{ state }}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n            <div><strong>Keyboard interaction:</strong></div>\r\n            <ul>\r\n              <li><kbd>DOWN_ARROW</kbd>: Focus next option</li>\r\n              <li><kbd>UP_ARROW</kbd>: Focus previous option</li>\r\n              <li><kbd>ENTER</kbd> or <kbd>SPACE</kbd>: Select focused item</li>\r\n            </ul>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Slide toggle</mat-card-title>\r\n          <mat-card-content>\r\n            <div class=\"group\">\r\n              <div><label>Color:</label></div>\r\n              <mat-radio-group [(ngModel)]=\"toggleColor\" fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n                <mat-radio-button value=\"primary\">Primary</mat-radio-button>\r\n                <mat-radio-button value=\"accent\">Accent</mat-radio-button>\r\n                <mat-radio-button value=\"warn\">Warn</mat-radio-button>\r\n              </mat-radio-group>\r\n            </div>\r\n            <div class=\"group\">\r\n              <mat-checkbox [(ngModel)]=\"toggleDisabled\">Disabled</mat-checkbox>\r\n            </div>\r\n            <div>\r\n              <mat-slide-toggle [color]=\"toggleColor\" [disabled]=\"toggleDisabled\">\r\n                Slide toggle\r\n              </mat-slide-toggle>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"100\">\r\n        <mat-card>\r\n          <mat-card-title>Check box</mat-card-title>\r\n          <mat-card-content>\r\n            <div class=\"group\" fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n              <mat-checkbox [checked]=\"true\">Checked</mat-checkbox>\r\n              <mat-checkbox [indeterminate]=\"true\">Indeterminate</mat-checkbox>\r\n              <mat-checkbox [checked]=\"false\">Unchecked</mat-checkbox>\r\n            </div>\r\n            <div class=\"group\" fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n              <mat-checkbox [labelPosition]=\"'after'\">After</mat-checkbox>\r\n              <mat-checkbox [labelPosition]=\"'before'\">Before</mat-checkbox>\r\n              <mat-checkbox disabled [checked]=\"true\">Disabled</mat-checkbox>\r\n            </div>\r\n            <div class=\"group\" fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n              <mat-checkbox [disableRipple]=\"true\">No ripple</mat-checkbox>\r\n              <mat-checkbox color=\"primary\">Primary</mat-checkbox>\r\n              <mat-checkbox color=\"warn\">Warn</mat-checkbox>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Radio button</mat-card-title>\r\n          <mat-card-content>\r\n            <div class=\"group\">\r\n              <mat-radio-group [(ngModel)]=\"radioGroupValue\" fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n                <mat-radio-button [value]=\"'first'\">First</mat-radio-button>\r\n                <mat-radio-button [value]=\"'second'\">Second</mat-radio-button>\r\n                <mat-radio-button [value]=\"'third'\">Third</mat-radio-button>\r\n                <mat-radio-button [value]=\"'disabled'\" disabled>Disabled</mat-radio-button>\r\n              </mat-radio-group>\r\n              <div class=\"secondary-text-color\"><em>Your option is\r\n                <mark>{{radioGroupValue}}</mark>\r\n              </em></div>\r\n            </div>\r\n            <div class=\"group\">\r\n              <mat-radio-group [(ngModel)]=\"radioGroupValue2\" fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n                <mat-radio-button [value]=\"'before'\" [labelPosition]=\"'before'\">Before</mat-radio-button>\r\n                <mat-radio-button [value]=\"'after'\" [labelPosition]=\"'after'\">After</mat-radio-button>\r\n                <mat-radio-button [value]=\"'no ripple'\" disableRipple>No ripple</mat-radio-button>\r\n              </mat-radio-group>\r\n              <div class=\"secondary-text-color\"><em>Your option is\r\n                <mark>{{radioGroupValue2}}</mark>\r\n              </em></div>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Select</mat-card-title>\r\n          <mat-card-content>\r\n            <mat-select placeholder=\"Select value\" [(ngModel)]=\"selectValue\">\r\n              <mat-option [value]=\"'first'\">First</mat-option>\r\n              <mat-option [value]=\"'second'\">Second</mat-option>\r\n              <mat-option [value]=\"'third'\">Third</mat-option>\r\n            </mat-select>\r\n            <p class=\"secondary-text-color\"><em>Selected value:\r\n              <mark *ngIf=\"selectValue\">{{selectValue}}</mark>\r\n            </em></p>\r\n            <strong>Keyboard interaction:</strong>\r\n            <ul>\r\n              <li><kbd>DOWN_ARROW</kbd>: Focus next option</li>\r\n              <li><kbd>UP_ARROW</kbd>: Focus previous option</li>\r\n              <li><kbd>ENTER</kbd> or <kbd>SPACE</kbd>: Select focused item</li>\r\n            </ul>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Slider</mat-card-title>\r\n          <mat-card-content>\r\n            <div class=\"group\">\r\n              <mat-input-container>\r\n                <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"sliderValue\">\r\n              </mat-input-container>\r\n              <mat-input-container>\r\n                <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"sliderMin\">\r\n              </mat-input-container>\r\n              <mat-input-container>\r\n                <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"sliderMax\">\r\n              </mat-input-container>\r\n              <mat-input-container>\r\n                <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"sliderStep\">\r\n              </mat-input-container>\r\n            </div>\r\n\r\n            <div class=\"group\">\r\n              <mat-checkbox [(ngModel)]=\"sliderShowTicks\">Show ticks</mat-checkbox>\r\n              <mat-checkbox [(ngModel)]=\"sliderAutoTicks\" *ngIf=\"sliderShowTicks\">\r\n                Auto ticks\r\n              </mat-checkbox>\r\n              <mat-input-container *ngIf=\"sliderShowTicks && !sliderAutoTicks\">\r\n                <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"sliderTickInterval\">\r\n              </mat-input-container>\r\n            </div>\r\n\r\n            <div class=\"group\">\r\n              <mat-checkbox [(ngModel)]=\"sliderThumbLabel\">Show thumb label</mat-checkbox>\r\n            </div>\r\n\r\n            <div class=\"group\">\r\n              <mat-checkbox [(ngModel)]=\"sliderVertical\">Vertical</mat-checkbox>\r\n              <mat-checkbox [(ngModel)]=\"sliderInvert\">Inverted</mat-checkbox>\r\n            </div>\r\n\r\n            <div class=\"group\">\r\n              <mat-checkbox [(ngModel)]=\"sliderDisabled\">Disabled</mat-checkbox>\r\n            </div>\r\n\r\n            <mat-slider [disabled]=\"sliderDisabled\" [invert]=\"sliderInvert\" [max]=\"sliderMax\" [min]=\"sliderMin\" [step]=\"sliderStep\"\r\n                       [thumb-label]=\"sliderThumbLabel\" [tick-interval]=\"sliderTickInterval\" [value]=\"sliderValue\" [vertical]=\"sliderVertical\">\r\n            </mat-slider>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements-page/form-elements-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".group {\n  margin-bottom: 20px; }\n\n.mat-checkbox {\n  margin-right: 20px; }\n\n.mat-radio-button {\n  margin-right: 40px;\n  margin-bottom: 5px; }\n\n.mat-slider-horizontal {\n  width: 100%; }\n\n.mat-slider-vertical {\n  height: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-elements-page/form-elements-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormElementsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormElementsPageComponent = (function () {
    function FormElementsPageComponent() {
        var _this = this;
        // Add router animation
        this.routerAnimation = true;
        this.radioGroupValue = 'first';
        this.radioGroupValue2 = 'before';
        // Slider parameters
        this._sliderTickInterval = 1;
        this.sliderAutoTicks = false;
        this.sliderDisabled = false;
        this.sliderInvert = false;
        this.sliderMax = 100;
        this.sliderMin = 0;
        this.sliderShowTicks = false;
        this.sliderStep = 1;
        this.sliderThumbLabel = false;
        this.sliderValue = 0;
        this.sliderVertical = false;
        // Toggle options
        this.toggleColor = 'accent';
        this.toggleDisabled = false;
        // Autocomplete options
        this.states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
            'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
            'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
            'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
            'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
            'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterStates(name); });
    }
    FormElementsPageComponent.prototype.ngOnInit = function () {
    };
    FormElementsPageComponent.prototype.filterStates = function (val) {
        return val ? this.states.filter(function (s) { return new RegExp(val, 'gi').test(s); }) : this.states;
    };
    Object.defineProperty(FormElementsPageComponent.prototype, "sliderTickInterval", {
        get: function () {
            return this.sliderShowTicks ? (this.sliderAutoTicks ? 'auto' : this._sliderTickInterval) : null;
        },
        set: function (v) {
            this._sliderTickInterval = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], FormElementsPageComponent.prototype, "routerAnimation", void 0);
    FormElementsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-elements-page',
            template: __webpack_require__("../../../../../src/app/pages/form-elements-page/form-elements-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/form-elements-page/form-elements-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], FormElementsPageComponent);
    return FormElementsPageComponent;
}());

//# sourceMappingURL=form-elements-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-wizard-page/form-wizard-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Form wizard</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-tab-group #tabGroup dynamicHeight=\"true\">\r\n          <mat-tab label=\"Step 1\">\r\n            <h5>Login information</h5>\r\n            <form #loginForm=\"ngForm\">\r\n              <div>\r\n\r\n                <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"25\">\r\n                  <mat-input-container [dividerColor]=\"!userName.valid && !userName.pristine ? 'warn' : 'primary'\">\r\n                    <input type=\"text\" matInput placeholder=\"Username\" name=\"userName\" required ngModel\r\n                           #userName=\"ngModel\">\r\n                    <mat-hint *ngIf=\"!userName.valid && !userName.pristine\" class=\"warn-color\">Field is required\r\n                    </mat-hint>\r\n                  </mat-input-container>\r\n                  <mat-input-container [dividerColor]=\"!mail.valid && !mail.pristine ? 'warn' : 'primary'\">\r\n                    <input type=\"email\" email matInput placeholder=\"Email\" name=\"mail\" required ngModel #mail=\"ngModel\">\r\n                    <mat-hint *ngIf=\"!mail.valid && !mail.pristine\" class=\"warn-color\">Not match email pattern</mat-hint>\r\n                  </mat-input-container>\r\n                  <mat-input-container [dividerColor]=\"!password.valid && !password.pristine ? 'warn' : 'primary'\">\r\n                    <input type=\"password\" required matInput placeholder=\"Password\" name=\"password\" minlength=\"6\" ngModel\r\n                           #password=\"ngModel\">\r\n                    <mat-hint *ngIf=\"!password.valid && !password.pristine\" class=\"warn-color\">\r\n                      {{password.value.length}} / 6\r\n                    </mat-hint>\r\n                  </mat-input-container>\r\n                  <mat-input-container\r\n                    [dividerColor]=\"!checkPassword.valid && !checkPassword.pristine ? 'warn' : 'primary'\">\r\n                    <input type=\"password\" required matInput placeholder=\"Confirm password\" name=\"checkPassword\" ngModel\r\n                           #checkPassword=\"ngModel\" [equalTo]=\"password\">\r\n                    <mat-hint *ngIf=\"!checkPassword.valid && !checkPassword.pristine\" class=\"warn-color\">Password does\r\n                      not\r\n                      match\r\n                    </mat-hint>\r\n                  </mat-input-container>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <button mat-raised-button color=\"primary\" (click)=\"tabGroup.selectedIndex=1\"\r\n                        [disabled]=\"!loginForm.valid\">Next\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </mat-tab>\r\n          <mat-tab label=\"Step 2\" [disabled]=\"!loginForm.valid\">\r\n            <h5>Address</h5>\r\n            <form #addressForm=\"ngForm\">\r\n              <div>\r\n                <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"25\">\r\n                <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n                  <mat-input-container fxFlex [dividerColor]=\"!name.valid && !name.pristine ? 'warn' : 'primary'\">\r\n                    <input type=\"text\" matInput placeholder=\"Name\" name=\"name\" required ngModel\r\n                           #name=\"ngModel\">\r\n                    <mat-hint *ngIf=\"!name.valid && !name.pristine\" class=\"warn-color\">Field is required</mat-hint>\r\n                  </mat-input-container>\r\n                  <mat-input-container fxFlex\r\n                                      [dividerColor]=\"!lastName.valid && !lastName.pristine ? 'warn' : 'primary'\">\r\n                    <input type=\"text\" matInput placeholder=\"LastName\" name=\"lastName\" required ngModel\r\n                           #lastName=\"ngModel\">\r\n                    <mat-hint *ngIf=\"!lastName.valid && !lastName.pristine\" class=\"warn-color\">Field is required\r\n                    </mat-hint>\r\n                  </mat-input-container>\r\n                </div>\r\n                <mat-input-container>\r\n                  <input type=\"text\" matInput placeholder=\"Phone\" name=\"phone\" ngModel #phone=\"ngModel\">\r\n                </mat-input-container>\r\n                <mat-select placeholder=\"Select county\" ngModel name=\"country\" #country=\"ngModel\">\r\n                  <mat-option [value]=\"'First country'\">First country</mat-option>\r\n                  <mat-option [value]=\"'Second country'\">Second country</mat-option>\r\n                  <mat-option [value]=\"'Third country'\">Third country</mat-option>\r\n                </mat-select>\r\n                <mat-input-container>\r\n                  <input type=\"text\" matInput placeholder=\"Zip Code\" name=\"zipCode\" ngModel #zipCode=\"ngModel\">\r\n                </mat-input-container>\r\n                <mat-input-container>\r\n                  <textarea matInput matTextareaAutosize placeholder=\"Address\" minRows=\"5\"\r\n                            [ngModel]=\"\" #address=\"ngModel\"></textarea>\r\n                </mat-input-container>\r\n              </div>\r\n              </div>\r\n              <div>\r\n                <button mat-raised-button color=\"primary\" (click)=\"tabGroup.selectedIndex=0\">Previous</button>\r\n                <button mat-raised-button color=\"primary\" (click)=\"tabGroup.selectedIndex=2\"\r\n                        [disabled]=\"!addressForm.valid\">Next\r\n                </button>\r\n              </div>\r\n\r\n            </form>\r\n          </mat-tab>\r\n          <mat-tab label=\"Step 3\" [disabled]=\"!addressForm.valid\">\r\n            <h5>Confirmation</h5>\r\n            <mat-list>\r\n              <mat-list-item>\r\n                <h4 matLine>User name</h4>\r\n                <p matLine><em>{{userName.value}}</em></p>\r\n              </mat-list-item>\r\n              <mat-list-item>\r\n                <h4 matLine>Email</h4>\r\n                <p matLine><em>{{mail.value}}</em></p>\r\n              </mat-list-item>\r\n              <mat-divider></mat-divider>\r\n              <mat-list-item>\r\n                <h4 matLine>Name</h4>\r\n                <p matLine><em>{{name.value}}</em></p>\r\n              </mat-list-item>\r\n              <mat-list-item>\r\n                <h4 matLine>Last Name</h4>\r\n                <p matLine><em>{{lastName.value}}</em></p>\r\n              </mat-list-item>\r\n              <mat-list-item *ngIf=\"phone.value\">\r\n                <h4 matLine>Phone</h4>\r\n                <p matLine><em>{{phone.value}}</em></p>\r\n              </mat-list-item>\r\n              <mat-list-item *ngIf=\"country.value\">\r\n                <h4 matLine>Country</h4>\r\n                <p matLine><em>{{country.value}}</em></p>\r\n              </mat-list-item>\r\n              <mat-list-item *ngIf=\"address.value\">\r\n                <h4 matLine>Address</h4>\r\n                <p matLine><em>{{address.value}}</em></p>\r\n              </mat-list-item>\r\n              <mat-list-item *ngIf=\"zipCode.value\">\r\n                <h4 matLine>ZipCode</h4>\r\n                <p matLine><em>{{zipCode.value}}</em></p>\r\n              </mat-list-item>\r\n            </mat-list>\r\n            <button mat-raised-button color=\"primary\">Confirm</button>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/form-wizard-page/form-wizard-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  padding: 5px; }\n\nbutton {\n  margin-top: 20px;\n  margin-right: 10px; }\n\n.mat-input-container, .mat-select {\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-wizard-page/form-wizard-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormWizardPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormWizardPageComponent = (function () {
    function FormWizardPageComponent() {
        // Add router animation
        this.routerAnimation = true;
    }
    FormWizardPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], FormWizardPageComponent.prototype, "routerAnimation", void 0);
    FormWizardPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-wizard-page',
            template: __webpack_require__("../../../../../src/app/pages/form-wizard-page/form-wizard-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/form-wizard-page/form-wizard-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], FormWizardPageComponent);
    return FormWizardPageComponent;
}());

//# sourceMappingURL=form-wizard-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/grid-list-page/grid-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Grid list</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-title>Constant height</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-grid-list cols=\"4\" rowHeight=\"100px\" gutterSize=\"10px\">\r\n          <mat-grid-tile class=\"primary-light-background-color mat-whiteframe-6dp\"\r\n            *ngFor=\"let tile of tiles1\"\r\n            [colspan]=\"tile.cols\"\r\n            [rowspan]=\"tile.rows\">\r\n            {{tile.text}}\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-title>Ratio height</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-grid-list cols=\"4\" rowHeight=\"4:3\" gutterSize=\"10px\">\r\n          <mat-grid-tile class=\"primary-light-background-color mat-whiteframe-6dp\"\r\n                        *ngFor=\"let tile of tiles2\"\r\n                        [colspan]=\"tile.cols\"\r\n                        [rowspan]=\"tile.rows\">\r\n            {{tile.text}}\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-title>Custom gutter</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-grid-list cols=\"4\" rowHeight=\"100px\" gutterSize=\"30px\">\r\n\r\n          <mat-grid-tile class=\"primary-light-background-color mat-whiteframe-6dp\"\r\n                        *ngFor=\"let tile of tiles3\"\r\n                        [colspan]=\"tile.cols\"\r\n                        [rowspan]=\"tile.rows\">\r\n            {{tile.text}}\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-title>Header and footer</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-grid-list cols=\"4\" rowHeight=\"200px\" gutterSize=\"30px\">\r\n\r\n          <mat-grid-tile class=\"primary-light-background-color mat-whiteframe-6dp\"\r\n                        *ngFor=\"let tile of tiles4\"\r\n                        [colspan]=\"tile.cols\"\r\n                        [rowspan]=\"tile.rows\">\r\n            <mat-grid-tile-header>Header</mat-grid-tile-header>\r\n            {{tile.text}}\r\n            <mat-grid-tile-footer>Footer</mat-grid-tile-footer>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/grid-list-page/grid-list-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/grid-list-page/grid-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridListPageComponent = (function () {
    function GridListPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        // Grid lists proportions
        this.tiles1 = [
            { text: 'One', cols: 3, rows: 1 },
            { text: 'Two', cols: 1, rows: 2 },
            { text: 'Three', cols: 1, rows: 1 },
            { text: 'Four', cols: 2, rows: 1 },
        ];
        this.tiles2 = [
            { text: 'One', cols: 3, rows: 1 },
            { text: 'Two', cols: 1, rows: 2 },
            { text: 'Three', cols: 1, rows: 1 },
            { text: 'Four', cols: 1, rows: 2 },
            { text: 'Five', cols: 1, rows: 1 },
            { text: 'Six', cols: 1, rows: 1 },
            { text: 'Seven', cols: 2, rows: 1 },
        ];
        this.tiles3 = [
            { text: 'One', cols: 3, rows: 1 },
            { text: 'Two', cols: 1, rows: 3 },
            { text: 'Three', cols: 1, rows: 1 },
            { text: 'Four', cols: 2, rows: 2 },
            { text: 'Five', cols: 1, rows: 1 },
        ];
        this.tiles4 = [
            { text: 'One', cols: 3, rows: 1 },
            { text: 'Two', cols: 1, rows: 3 },
            { text: 'Three', cols: 3, rows: 2 },
        ];
    }
    GridListPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], GridListPageComponent.prototype, "routerAnimation", void 0);
    GridListPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grid-list-page',
            template: __webpack_require__("../../../../../src/app/pages/grid-list-page/grid-list-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/grid-list-page/grid-list-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], GridListPageComponent);
    return GridListPageComponent;
}());

//# sourceMappingURL=grid-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/heatmap-page/heatmap-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Heatmap</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <div echarts [options]=\"heatmapOption\" (chartInit)=\"chartInstances.push($event)\" class=\"chart\"></div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/heatmap-page/heatmap-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart {\n  height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/heatmap-page/heatmap-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatmapPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_colors__ = __webpack_require__("../../../../../src/app/utils/colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__ = __webpack_require__("../../../../../src/app/resize/resize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeatmapPageComponent = (function () {
    function HeatmapPageComponent(resizeService) {
        var _this = this;
        this.resizeService = resizeService;
        // Add router animation
        this.routerAnimation = true;
        // Chart instances used for resizing after layout changes
        this.chartInstances = [];
        // Chart model
        this.heatmapOption = this.createOption();
        this.resizeSubscription = resizeService.resizeInformer$.subscribe(function () { return _this.chartInstances.forEach(function (chart) { return chart.resize(); }); });
    }
    HeatmapPageComponent.prototype.ngOnInit = function () {
    };
    HeatmapPageComponent.prototype.ngOnDestroy = function () {
        this.resizeSubscription.unsubscribe();
    };
    // Mock method for chart model generation
    HeatmapPageComponent.prototype.createOption = function () {
        var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
            '7a', '8a', '9a', '10a', '11a',
            '12p', '1p', '2p', '3p', '4p', '5p',
            '6p', '7p', '8p', '9p', '10p', '11p'];
        var days = ['Saturday', 'Friday', 'Thursday',
            'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
        var raw = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0],
            [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6],
            [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0],
            [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2],
            [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5],
            [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0],
            [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6],
            [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3],
            [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4],
            [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6],
            [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0],
            [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14],
            [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2],
            [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4],
            [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5],
            [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0],
            [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3],
            [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];
        var data = raw.map(function (item) {
            return [item[1], item[0], item[2] || '-'];
        });
        var option = {
            tooltip: {
                position: 'top'
            },
            animation: false,
            grid: {
                height: '50%',
                y: '10%'
            },
            xAxis: {
                type: 'category',
                data: hours,
                splitArea: {
                    show: true
                },
                axisLabel: {
                    textStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisTicks: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: days,
                splitArea: {
                    show: true
                },
                axisLabel: {
                    textStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisTicks: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                }
            },
            visualMap: {
                min: 0,
                max: 10,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '15%',
                inRange: {
                    color: [__WEBPACK_IMPORTED_MODULE_1__utils_colors__["b" /* MAT_DEEP_ORANGE */]._100, __WEBPACK_IMPORTED_MODULE_1__utils_colors__["b" /* MAT_DEEP_ORANGE */]._500]
                },
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            },
            series: [{
                    name: 'Punch Card',
                    type: 'heatmap',
                    data: data,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
        };
        return option;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], HeatmapPageComponent.prototype, "routerAnimation", void 0);
    HeatmapPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-heatmap-page',
            template: __webpack_require__("../../../../../src/app/pages/heatmap-page/heatmap-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/heatmap-page/heatmap-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */]) === "function" && _a || Object])
    ], HeatmapPageComponent);
    return HeatmapPageComponent;
    var _a;
}());

//# sourceMappingURL=heatmap-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/icons-page/icons-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Icons</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-title>\r\n        Material Icons\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <mat-icon class=\"icon-color\" *ngFor=\"let iconName of materialIcons\">{{iconName}}</mat-icon>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-title>\r\n        Font Awesome\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <mat-icon class=\"icon-color\" *ngFor=\"let iconClass of fontAwesomeIcons\" fontSet=\"fontawesome\" [fontIcon]=\"iconClass\"></mat-icon>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/icons-page/icons-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-icon {\n  font-size: 25px;\n  margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/icons-page/icons-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconsPageComponent = (function () {
    function IconsPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        // Material icons values
        this.materialIcons = [
            '3d_rotation',
            'access_alarm',
            'access_alarms',
            'access_time',
            'accessibility',
            'account_balance',
            'account_balance_wallet',
            'account_box',
            'account_circle',
            'adb',
            'add',
            'add_alarm',
            'add_alert',
            'add_box',
            'add_circle',
            'add_circle_outline',
            'add_shopping_cart',
            'add_to_photos',
            'adjust',
            'airline_seat_flat',
            'airline_seat_flat_angled',
            'airline_seat_individual_suite',
            'airline_seat_legroom_extra',
            'airline_seat_legroom_normal',
            'airline_seat_legroom_reduced',
            'airline_seat_recline_extra',
            'airline_seat_recline_normal',
            'airplanemode_active',
            'airplanemode_inactive',
            'airplay',
            'alarm',
            'alarm_add',
            'alarm_off',
            'alarm_on',
            'album',
            'android',
            'announcement',
            'apps',
            'archive',
            'arrow_back',
            'arrow_drop_down',
            'arrow_drop_down_circle',
            'arrow_drop_up',
            'arrow_forward',
            'aspect_ratio',
            'assessment',
            'assignment',
            'assignment_ind',
            'assignment_late',
            'assignment_return',
            'assignment_returned',
            'assignment_turned_in',
            'assistant',
            'assistant_photo',
            'attach_file',
            'attach_money',
            'attachment',
            'audiotrack',
            'autorenew',
            'av_timer',
            'backspace',
            'backup',
            'battery_alert',
            'battery_charging_full',
            'battery_full',
            'battery_std',
            'battery_unknown',
            'beenhere',
            'block',
            'bluetooth',
            'bluetooth_audio',
            'bluetooth_connected',
            'bluetooth_disabled',
            'bluetooth_searching',
            'blur_circular',
            'blur_linear',
            'blur_off',
            'blur_on',
            'book',
            'bookmark',
            'bookmark_border',
            'border_all',
            'border_bottom',
            'border_clear',
            'border_color',
            'border_horizontal',
            'border_inner',
            'border_left',
            'border_outer',
            'border_right',
            'border_style',
            'border_top',
            'border_vertical',
            'brightness_1',
            'brightness_2',
            'brightness_3',
            'brightness_4',
            'brightness_5',
            'brightness_6',
            'brightness_7',
            'brightness_auto',
            'brightness_high',
            'brightness_low',
            'brightness_medium',
            'broken_image',
            'brush',
            'bug_report',
            'build',
            'business',
            'cached',
            'cake',
            'call',
            'call_end',
            'call_made',
            'call_merge',
            'call_missed',
            'call_received',
            'call_split',
            'camera',
            'camera_alt',
            'camera_enhance',
            'camera_front',
            'camera_rear',
            'camera_roll',
            'cancel',
            'card_giftcard',
            'card_membership',
            'card_travel',
            'cast',
            'cast_connected',
            'center_focus_strong',
            'center_focus_weak',
            'change_history',
            'chat',
            'chat_bubble',
            'chat_bubble_outline',
            'check',
            'check_box',
            'check_box_outline_blank',
            'check_circle',
            'chevron_left',
            'chevron_right',
            'chrome_reader_mode',
            'class',
            'clear',
            'clear_all',
            'close',
            'closed_caption',
            'cloud',
            'cloud_circle',
            'cloud_done',
            'cloud_download',
            'cloud_off',
            'cloud_queue',
            'cloud_upload',
            'code',
            'collections',
            'collections_bookmark',
            'color_lens',
            'colorize',
            'comment',
            'compare',
            'computer',
            'confirmation_number',
            'contact_phone',
            'contacts',
            'content_copy',
            'content_cut',
            'content_paste',
            'control_point',
            'control_point_duplicate',
            'create',
            'credit_card',
            'crop',
            'crop_16_9',
            'crop_3_2',
            'crop_5_4',
            'crop_7_5',
            'crop_din',
            'crop_free',
            'crop_landscape',
            'crop_original',
            'crop_portrait',
            'crop_square',
            'dashboard',
            'data_usage',
            'dehaze',
            'delete',
            'description',
            'desktop_mac',
            'desktop_windows',
            'details',
            'developer_board',
            'developer_mode',
            'device_hub',
            'devices',
            'dialer_sip',
            'dialpad',
            'directions',
            'directions_bike',
            'directions_boat',
            'directions_bus',
            'directions_car',
            'directions_railway',
            'directions_run',
            'directions_subway',
            'directions_transit',
            'directions_walk',
            'disc_full',
            'dns',
            'do_not_disturb',
            'do_not_disturb_alt',
            'dock',
            'domain',
            'done',
            'done_all',
            'drafts',
            'drive_eta',
            'dvr',
            'edit',
            'eject',
            'email',
            'equalizer',
            'error',
            'error_outline',
            'event',
            'event_available',
            'event_busy',
            'event_note',
            'event_seat',
            'exit_to_app',
            'expand_less',
            'expand_more',
            'explicit',
            'explore',
            'exposure',
            'exposure_neg_1',
            'exposure_neg_2',
            'exposure_plus_1',
            'exposure_plus_2',
            'exposure_zero',
            'extension',
            'face',
            'fast_forward',
            'fast_rewind',
            'favorite',
            'favorite_border',
            'feedback',
            'file_download',
            'file_upload',
            'filter',
            'filter_1',
            'filter_2',
            'filter_3',
            'filter_4',
            'filter_5',
            'filter_6',
            'filter_7',
            'filter_8',
            'filter_9',
            'filter_9_plus',
            'filter_b_and_w',
            'filter_center_focus',
            'filter_drama',
            'filter_frames',
            'filter_hdr',
            'filter_list',
            'filter_none',
            'filter_tilt_shift',
            'filter_vintage',
            'find_in_page',
            'find_replace',
            'flag',
            'flare',
            'flash_auto',
            'flash_off',
            'flash_on',
            'flight',
            'flight_land',
            'flight_takeoff',
            'flip',
            'flip_to_back',
            'flip_to_front',
            'folder',
            'folder_open',
            'folder_shared',
            'folder_special',
            'font_download',
            'format_align_center',
            'format_align_justify',
            'format_align_left',
            'format_align_right',
            'format_bold',
            'format_clear',
            'format_color_fill',
            'format_color_reset',
            'format_color_text',
            'format_indent_decrease',
            'format_indent_increase',
            'format_italic',
            'format_line_spacing',
            'format_list_bulleted',
            'format_list_numbered',
            'format_paint',
            'format_quote',
            'format_size',
            'format_strikethrough',
            'format_textdirection_l_to_r',
            'format_textdirection_r_to_l',
            'format_underlined',
            'forum',
            'forward',
            'forward_10',
            'forward_30',
            'forward_5',
            'fullscreen',
            'fullscreen_exit',
            'functions',
            'gamepad',
            'games',
            'gesture',
            'get_app',
            'gif',
            'gps_fixed',
            'gps_not_fixed',
            'gps_off',
            'grade',
            'gradient',
            'grain',
            'graphic_eq',
            'grid_off',
            'grid_on',
            'group',
            'group_add',
            'group_work',
            'hd',
            'hdr_off',
            'hdr_on',
            'hdr_strong',
            'hdr_weak',
            'headset',
            'headset_mic',
            'healing',
            'hearing',
            'help',
            'help_outline',
            'high_quality',
            'highlight_off',
            'history',
            'home',
            'hotel',
            'hourglass_empty',
            'hourglass_full',
            'http',
            'https',
            'image',
            'image_aspect_ratio',
            'import_export',
            'inbox',
            'indeterminate_check_box',
            'info',
            'info_outline',
            'input',
            'insert_chart',
            'insert_comment',
            'insert_drive_file',
            'insert_emoticon',
            'insert_invitation',
            'insert_link',
            'insert_photo',
            'invert_colors',
            'invert_colors_off',
            'iso',
            'keyboard',
            'keyboard_arrow_down',
            'keyboard_arrow_left',
            'keyboard_arrow_right',
            'keyboard_arrow_up',
            'keyboard_backspace',
            'keyboard_capslock',
            'keyboard_hide',
            'keyboard_return',
            'keyboard_tab',
            'keyboard_voice',
            'label',
            'label_outline',
            'landscape',
            'language',
            'laptop',
            'laptop_chromebook',
            'laptop_mac',
            'laptop_windows',
            'launch',
            'layers',
            'layers_clear',
            'leak_add',
            'leak_remove',
            'lens',
            'library_add',
            'library_books',
            'library_music',
            'link',
            'list',
            'live_help',
            'live_tv',
            'local_activity',
            'local_airport',
            'local_atm',
            'local_bar',
            'local_cafe',
            'local_car_wash',
            'local_convenience_store',
            'local_dining',
            'local_drink',
            'local_florist',
            'local_gas_station',
            'local_grocery_store',
            'local_hospital',
            'local_hotel',
            'local_laundry_service',
            'local_library',
            'local_mall',
            'local_movies',
            'local_offer',
            'local_parking',
            'local_pharmacy',
            'local_phone',
            'local_pizza',
            'local_play',
            'local_post_office',
            'local_printshop',
            'local_see',
            'local_shipping',
            'local_taxi',
            'location_city',
            'location_disabled',
            'location_off',
            'location_on',
            'location_searching',
            'lock',
            'lock_open',
            'lock_outline',
            'looks',
            'looks_3',
            'looks_4',
            'looks_5',
            'looks_6',
            'looks_one',
            'looks_two',
            'loop',
            'loupe',
            'loyalty',
            'mail',
            'map',
            'markunread',
            'markunread_mailbox',
            'memory',
            'menu',
            'merge_type',
            'message',
            'mic',
            'mic_none',
            'mic_off',
            'mms',
            'mode_comment',
            'mode_edit',
            'money_off',
            'monochrome_photos',
            'mood',
            'mood_bad',
            'more',
            'more_horiz',
            'more_vert',
            'mouse',
            'movie',
            'movie_creation',
            'music_note',
            'my_location',
            'nature',
            'nature_people',
            'navigate_before',
            'navigate_next',
            'navigation',
            'network_cell',
            'network_locked',
            'network_wifi',
            'new_releases',
            'nfc',
            'no_sim',
            'not_interested',
            'note_add',
            'notifications',
            'notifications_active',
            'notifications_none',
            'notifications_off',
            'notifications_paused',
            'offline_pin',
            'ondemand_video',
            'open_in_browser',
            'open_in_new',
            'open_with',
            'pages',
            'pageview',
            'palette',
            'panorama',
            'panorama_fish_eye',
            'panorama_horizontal',
            'panorama_vertical',
            'panorama_wide_angle',
            'party_mode',
            'pause',
            'pause_circle_filled',
            'pause_circle_outline',
            'payment',
            'people',
            'people_outline',
            'perm_camera_mic',
            'perm_contact_calendar',
            'perm_data_setting',
            'perm_device_information',
            'perm_identity',
            'perm_media',
            'perm_phone_msg',
            'perm_scan_wifi',
            'person',
            'person_add',
            'person_outline',
            'person_pin',
            'personal_video',
            'phone',
            'phone_android',
            'phone_bluetooth_speaker',
            'phone_forwarded',
            'phone_in_talk',
            'phone_iphone',
            'phone_locked',
            'phone_missed',
            'phone_paused',
            'phonelink',
            'phonelink_erase',
            'phonelink_lock',
            'phonelink_off',
            'phonelink_ring',
            'phonelink_setup',
            'photo',
            'photo_album',
            'photo_camera',
            'photo_library',
            'photo_size_select_actual',
            'photo_size_select_large',
            'photo_size_select_small',
            'picture_as_pdf',
            'picture_in_picture',
            'pin_drop',
            'place',
            'play_arrow',
            'play_circle_filled',
            'play_circle_outline',
            'play_for_work',
            'playlist_add',
            'plus_one',
            'poll',
            'polymer',
            'portable_wifi_off',
            'portrait',
            'power',
            'power_input',
            'power_settings_new',
            'present_to_all',
            'print',
            'public',
            'publish',
            'query_builder',
            'question_answer',
            'queue',
            'queue_music',
            'radio',
            'radio_button_checked',
            'radio_button_unchecked',
            'rate_review',
            'receipt',
            'recent_actors',
            'redeem',
            'redo',
            'refresh',
            'remove',
            'remove_circle',
            'remove_circle_outline',
            'remove_red_eye',
            'reorder',
            'repeat',
            'repeat_one',
            'replay',
            'replay_10',
            'replay_30',
            'replay_5',
            'reply',
            'reply_all',
            'report',
            'report_problem',
            'restaurant_menu',
            'restore',
            'ring_volume',
            'room',
            'rotate_90_degrees_ccw',
            'rotate_left',
            'rotate_right',
            'router',
            'satellite',
            'save',
            'scanner',
            'schedule',
            'school',
            'screen_lock_landscape',
            'screen_lock_portrait',
            'screen_lock_rotation',
            'screen_rotation',
            'sd_card',
            'sd_storage',
            'search',
            'security',
            'select_all',
            'send',
            'settings',
            'settings_applications',
            'settings_backup_restore',
            'settings_bluetooth',
            'settings_brightness',
            'settings_cell',
            'settings_ethernet',
            'settings_input_antenna',
            'settings_input_component',
            'settings_input_composite',
            'settings_input_hdmi',
            'settings_input_svideo',
            'settings_overscan',
            'settings_phone',
            'settings_power',
            'settings_remote',
            'settings_system_daydream',
            'settings_voice',
            'share',
            'shop',
            'shop_two',
            'shopping_basket',
            'shopping_cart',
            'shuffle',
            'signal_cellular_4_bar',
            'signal_cellular_connected_no_internet_4_bar',
            'signal_cellular_no_sim',
            'signal_cellular_null',
            'signal_cellular_off',
            'signal_wifi_4_bar',
            'signal_wifi_4_bar_lock',
            'signal_wifi_off',
            'sim_card',
            'sim_card_alert',
            'skip_next',
            'skip_previous',
            'slideshow',
            'smartphone',
            'sms',
            'sms_failed',
            'snooze',
            'sort',
            'sort_by_alpha',
            'space_bar',
            'speaker',
            'speaker_group',
            'speaker_notes',
            'speaker_phone',
            'spellcheck',
            'star',
            'star_border',
            'star_half',
            'stars',
            'stay_current_landscape',
            'stay_current_portrait',
            'stay_primary_landscape',
            'stay_primary_portrait',
            'stop',
            'storage',
            'store',
            'store_mall_directory',
            'straighten',
            'strikethrough_s',
            'style',
            'subject',
            'subtitles',
            'supervisor_account',
            'surround_sound',
            'swap_calls',
            'swap_horiz',
            'swap_vert',
            'swap_vertical_circle',
            'switch_camera',
            'switch_video',
            'sync',
            'sync_disabled',
            'sync_problem',
            'system_update',
            'system_update_alt',
            'tab',
            'tab_unselected',
            'tablet',
            'tablet_android',
            'tablet_mac',
            'tag_faces',
            'tap_and_play',
            'terrain',
            'text_format',
            'textsms',
            'texture',
            'theaters',
            'thumb_down',
            'thumb_up',
            'thumbs_up_down',
            'time_to_leave',
            'timelapse',
            'timer',
            'timer_10',
            'timer_3',
            'timer_off',
            'toc',
            'today',
            'toll',
            'tonality',
            'toys',
            'track_changes',
            'traffic',
            'transform',
            'translate',
            'trending_down',
            'trending_flat',
            'trending_up',
            'tune',
            'turned_in',
            'turned_in_not',
            'tv',
            'undo',
            'unfold_less',
            'unfold_more',
            'usb',
            'verified_user',
            'vertical_align_bottom',
            'vertical_align_center',
            'vertical_align_top',
            'vibration',
            'video_library',
            'videocam',
            'videocam_off',
            'view_agenda',
            'view_array',
            'view_carousel',
            'view_column',
            'view_comfy',
            'view_compact',
            'view_day',
            'view_headline',
            'view_list',
            'view_module',
            'view_quilt',
            'view_stream',
            'view_week',
            'vignette',
            'visibility',
            'visibility_off',
            'voice_chat',
            'voicemail',
            'volume_down',
            'volume_mute',
            'volume_off',
            'volume_up',
            'vpn_key',
            'vpn_lock',
            'wallpaper',
            'warning',
            'watch',
            'wb_auto',
            'wb_cloudy',
            'wb_incandescent',
            'wb_iridescent',
            'wb_sunny',
            'wc',
            'web',
            'whatshot',
            'widgets',
            'wifi',
            'wifi_lock',
            'wifi_tethering',
            'work',
            'wrap_text',
            'youtube_searched_for',
            'zoom_in',
            'zoom_out'
        ];
        // Font awesome icons class names
        this.fontAwesomeIcons = [
            'fa-glass',
            'fa-music',
            'fa-search',
            'fa-envelope-o',
            'fa-heart',
            'fa-star',
            'fa-star-o',
            'fa-user',
            'fa-film',
            'fa-th-large',
            'fa-th',
            'fa-th-list',
            'fa-check',
            'fa-remove',
            'fa-close',
            'fa-times',
            'fa-search-plus',
            'fa-search-minus',
            'fa-power-off',
            'fa-signal',
            'fa-gear',
            'fa-cog',
            'fa-trash-o',
            'fa-home',
            'fa-file-o',
            'fa-clock-o',
            'fa-road',
            'fa-download',
            'fa-arrow-circle-o-down',
            'fa-arrow-circle-o-up',
            'fa-inbox',
            'fa-play-circle-o',
            'fa-rotate-right',
            'fa-repeat',
            'fa-refresh',
            'fa-list-alt',
            'fa-lock',
            'fa-flag',
            'fa-headphones',
            'fa-volume-off',
            'fa-volume-down',
            'fa-volume-up',
            'fa-qrcode',
            'fa-barcode',
            'fa-tag',
            'fa-tags',
            'fa-book',
            'fa-bookmark',
            'fa-print',
            'fa-camera',
            'fa-font',
            'fa-bold',
            'fa-italic',
            'fa-text-height',
            'fa-text-width',
            'fa-align-left',
            'fa-align-center',
            'fa-align-right',
            'fa-align-justify',
            'fa-list',
            'fa-dedent',
            'fa-outdent',
            'fa-indent',
            'fa-video-camera',
            'fa-photo',
            'fa-image',
            'fa-picture-o',
            'fa-pencil',
            'fa-map-marker',
            'fa-adjust',
            'fa-tint',
            'fa-edit',
            'fa-pencil-square-o',
            'fa-share-square-o',
            'fa-check-square-o',
            'fa-arrows',
            'fa-step-backward',
            'fa-fast-backward',
            'fa-backward',
            'fa-play',
            'fa-pause',
            'fa-stop',
            'fa-forward',
            'fa-fast-forward',
            'fa-step-forward',
            'fa-eject',
            'fa-chevron-left',
            'fa-chevron-right',
            'fa-plus-circle',
            'fa-minus-circle',
            'fa-times-circle',
            'fa-check-circle',
            'fa-question-circle',
            'fa-info-circle',
            'fa-crosshairs',
            'fa-times-circle-o',
            'fa-check-circle-o',
            'fa-ban',
            'fa-arrow-left',
            'fa-arrow-right',
            'fa-arrow-up',
            'fa-arrow-down',
            'fa-mail-forward',
            'fa-share',
            'fa-expand',
            'fa-compress',
            'fa-plus',
            'fa-minus',
            'fa-asterisk',
            'fa-exclamation-circle',
            'fa-gift',
            'fa-leaf',
            'fa-fire',
            'fa-eye',
            'fa-eye-slash',
            'fa-warning',
            'fa-exclamation-triangle',
            'fa-plane',
            'fa-calendar',
            'fa-random',
            'fa-comment',
            'fa-magnet',
            'fa-chevron-up',
            'fa-chevron-down',
            'fa-retweet',
            'fa-shopping-cart',
            'fa-folder',
            'fa-folder-open',
            'fa-arrows-v',
            'fa-arrows-h',
            'fa-bar-chart-o',
            'fa-bar-chart',
            'fa-twitter-square',
            'fa-facebook-square',
            'fa-camera-retro',
            'fa-key',
            'fa-gears',
            'fa-cogs',
            'fa-comments',
            'fa-thumbs-o-up',
            'fa-thumbs-o-down',
            'fa-star-half',
            'fa-heart-o',
            'fa-sign-out',
            'fa-linkedin-square',
            'fa-thumb-tack',
            'fa-external-link',
            'fa-sign-in',
            'fa-trophy',
            'fa-github-square',
            'fa-upload',
            'fa-lemon-o',
            'fa-phone',
            'fa-square-o',
            'fa-bookmark-o',
            'fa-phone-square',
            'fa-twitter',
            'fa-facebook-f',
            'fa-facebook',
            'fa-github',
            'fa-unlock',
            'fa-credit-card',
            'fa-feed',
            'fa-rss',
            'fa-hdd-o',
            'fa-bullhorn',
            'fa-bell',
            'fa-certificate',
            'fa-hand-o-right',
            'fa-hand-o-left',
            'fa-hand-o-up',
            'fa-hand-o-down',
            'fa-arrow-circle-left',
            'fa-arrow-circle-right',
            'fa-arrow-circle-up',
            'fa-arrow-circle-down',
            'fa-globe',
            'fa-wrench',
            'fa-tasks',
            'fa-filter',
            'fa-briefcase',
            'fa-arrows-alt',
            'fa-group',
            'fa-users',
            'fa-chain',
            'fa-link',
            'fa-cloud',
            'fa-flask',
            'fa-cut',
            'fa-scissors',
            'fa-copy',
            'fa-files-o',
            'fa-paperclip',
            'fa-save',
            'fa-floppy-o',
            'fa-square',
            'fa-navicon',
            'fa-reorder',
            'fa-bars',
            'fa-list-ul',
            'fa-list-ol',
            'fa-strikethrough',
            'fa-underline',
            'fa-table',
            'fa-magic',
            'fa-truck',
            'fa-pinterest',
            'fa-pinterest-square',
            'fa-google-plus-square',
            'fa-google-plus',
            'fa-money',
            'fa-caret-down',
            'fa-caret-up',
            'fa-caret-left',
            'fa-caret-right',
            'fa-columns',
            'fa-unsorted',
            'fa-sort',
            'fa-sort-down',
            'fa-sort-desc',
            'fa-sort-up',
            'fa-sort-asc',
            'fa-envelope',
            'fa-linkedin',
            'fa-rotate-left',
            'fa-undo',
            'fa-legal',
            'fa-gavel',
            'fa-dashboard',
            'fa-tachometer',
            'fa-comment-o',
            'fa-comments-o',
            'fa-flash',
            'fa-bolt',
            'fa-sitemap',
            'fa-umbrella',
            'fa-paste',
            'fa-clipboard',
            'fa-lightbulb-o',
            'fa-exchange',
            'fa-cloud-download',
            'fa-cloud-upload',
            'fa-user-md',
            'fa-stethoscope',
            'fa-suitcase',
            'fa-bell-o',
            'fa-coffee',
            'fa-cutlery',
            'fa-file-text-o',
            'fa-building-o',
            'fa-hospital-o',
            'fa-ambulance',
            'fa-medkit',
            'fa-fighter-jet',
            'fa-beer',
            'fa-h-square',
            'fa-plus-square',
            'fa-angle-double-left',
            'fa-angle-double-right',
            'fa-angle-double-up',
            'fa-angle-double-down',
            'fa-angle-left',
            'fa-angle-right',
            'fa-angle-up',
            'fa-angle-down',
            'fa-desktop',
            'fa-laptop',
            'fa-tablet',
            'fa-mobile-phone',
            'fa-mobile',
            'fa-circle-o',
            'fa-quote-left',
            'fa-quote-right',
            'fa-spinner',
            'fa-circle',
            'fa-mail-reply',
            'fa-reply',
            'fa-github-alt',
            'fa-folder-o',
            'fa-folder-open-o',
            'fa-smile-o',
            'fa-frown-o',
            'fa-meh-o',
            'fa-gamepad',
            'fa-keyboard-o',
            'fa-flag-o',
            'fa-flag-checkered',
            'fa-terminal',
            'fa-code',
            'fa-mail-reply-all',
            'fa-reply-all',
            'fa-star-half-empty',
            'fa-star-half-full',
            'fa-star-half-o',
            'fa-location-arrow',
            'fa-crop',
            'fa-code-fork',
            'fa-unlink',
            'fa-chain-broken',
            'fa-question',
            'fa-info',
            'fa-exclamation',
            'fa-superscript',
            'fa-subscript',
            'fa-eraser',
            'fa-puzzle-piece',
            'fa-microphone',
            'fa-microphone-slash',
            'fa-shield',
            'fa-calendar-o',
            'fa-fire-extinguisher',
            'fa-rocket',
            'fa-maxcdn',
            'fa-chevron-circle-left',
            'fa-chevron-circle-right',
            'fa-chevron-circle-up',
            'fa-chevron-circle-down',
            'fa-html5',
            'fa-css3',
            'fa-anchor',
            'fa-unlock-alt',
            'fa-bullseye',
            'fa-ellipsis-h',
            'fa-ellipsis-v',
            'fa-rss-square',
            'fa-play-circle',
            'fa-ticket',
            'fa-minus-square',
            'fa-minus-square-o',
            'fa-level-up',
            'fa-level-down',
            'fa-check-square',
            'fa-pencil-square',
            'fa-external-link-square',
            'fa-share-square',
            'fa-compass',
            'fa-toggle-down',
            'fa-caret-square-o-down',
            'fa-toggle-up',
            'fa-caret-square-o-up',
            'fa-toggle-right',
            'fa-caret-square-o-right',
            'fa-euro',
            'fa-eur',
            'fa-gbp',
            'fa-dollar',
            'fa-usd',
            'fa-rupee',
            'fa-inr',
            'fa-cny',
            'fa-rmb',
            'fa-yen',
            'fa-jpy',
            'fa-ruble',
            'fa-rouble',
            'fa-rub',
            'fa-won',
            'fa-krw',
            'fa-bitcoin',
            'fa-btc',
            'fa-file',
            'fa-file-text',
            'fa-sort-alpha-asc',
            'fa-sort-alpha-desc',
            'fa-sort-amount-asc',
            'fa-sort-amount-desc',
            'fa-sort-numeric-asc',
            'fa-sort-numeric-desc',
            'fa-thumbs-up',
            'fa-thumbs-down',
            'fa-youtube-square',
            'fa-youtube',
            'fa-xing',
            'fa-xing-square',
            'fa-youtube-play',
            'fa-dropbox',
            'fa-stack-overflow',
            'fa-instagram',
            'fa-flickr',
            'fa-adn',
            'fa-bitbucket',
            'fa-bitbucket-square',
            'fa-tumblr',
            'fa-tumblr-square',
            'fa-long-arrow-down',
            'fa-long-arrow-up',
            'fa-long-arrow-left',
            'fa-long-arrow-right',
            'fa-apple',
            'fa-windows',
            'fa-android',
            'fa-linux',
            'fa-dribbble',
            'fa-skype',
            'fa-foursquare',
            'fa-trello',
            'fa-female',
            'fa-male',
            'fa-gittip',
            'fa-gratipay',
            'fa-sun-o',
            'fa-moon-o',
            'fa-archive',
            'fa-bug',
            'fa-vk',
            'fa-weibo',
            'fa-renren',
            'fa-pagelines',
            'fa-stack-exchange',
            'fa-arrow-circle-o-right',
            'fa-arrow-circle-o-left',
            'fa-toggle-left',
            'fa-caret-square-o-left',
            'fa-dot-circle-o',
            'fa-wheelchair',
            'fa-vimeo-square',
            'fa-turkish-lira',
            'fa-try',
            'fa-plus-square-o',
            'fa-space-shuttle',
            'fa-slack',
            'fa-envelope-square',
            'fa-wordpress',
            'fa-openid',
            'fa-institution',
            'fa-bank',
            'fa-university',
            'fa-mortar-board',
            'fa-graduation-cap',
            'fa-yahoo',
            'fa-google',
            'fa-reddit',
            'fa-reddit-square',
            'fa-stumbleupon-circle',
            'fa-stumbleupon',
            'fa-delicious',
            'fa-digg',
            'fa-pied-piper-pp',
            'fa-pied-piper-alt',
            'fa-drupal',
            'fa-joomla',
            'fa-language',
            'fa-fax',
            'fa-building',
            'fa-child',
            'fa-paw',
            'fa-spoon',
            'fa-cube',
            'fa-cubes',
            'fa-behance',
            'fa-behance-square',
            'fa-steam',
            'fa-steam-square',
            'fa-recycle',
            'fa-automobile',
            'fa-car',
            'fa-cab',
            'fa-taxi',
            'fa-tree',
            'fa-spotify',
            'fa-deviantart',
            'fa-soundcloud',
            'fa-database',
            'fa-file-pdf-o',
            'fa-file-word-o',
            'fa-file-excel-o',
            'fa-file-powerpoint-o',
            'fa-file-photo-o',
            'fa-file-picture-o',
            'fa-file-image-o',
            'fa-file-zip-o',
            'fa-file-archive-o',
            'fa-file-sound-o',
            'fa-file-audio-o',
            'fa-file-movie-o',
            'fa-file-video-o',
            'fa-file-code-o',
            'fa-vine',
            'fa-codepen',
            'fa-jsfiddle',
            'fa-life-bouy',
            'fa-life-buoy',
            'fa-life-saver',
            'fa-support',
            'fa-life-ring',
            'fa-circle-o-notch',
            'fa-ra',
            'fa-resistance',
            'fa-rebel',
            'fa-ge',
            'fa-empire',
            'fa-git-square',
            'fa-git',
            'fa-y-combinator-square',
            'fa-yc-square',
            'fa-hacker-news',
            'fa-tencent-weibo',
            'fa-qq',
            'fa-wechat',
            'fa-weixin',
            'fa-send',
            'fa-paper-plane',
            'fa-send-o',
            'fa-paper-plane-o',
            'fa-history',
            'fa-circle-thin',
            'fa-header',
            'fa-paragraph',
            'fa-sliders',
            'fa-share-alt',
            'fa-share-alt-square',
            'fa-bomb',
            'fa-soccer-ball-o',
            'fa-futbol-o',
            'fa-tty',
            'fa-binoculars',
            'fa-plug',
            'fa-slideshare',
            'fa-twitch',
            'fa-yelp',
            'fa-newspaper-o',
            'fa-wifi',
            'fa-calculator',
            'fa-paypal',
            'fa-google-wallet',
            'fa-cc-visa',
            'fa-cc-mastercard',
            'fa-cc-discover',
            'fa-cc-amex',
            'fa-cc-paypal',
            'fa-cc-stripe',
            'fa-bell-slash',
            'fa-bell-slash-o',
            'fa-trash',
            'fa-copyright',
            'fa-at',
            'fa-eyedropper',
            'fa-paint-brush',
            'fa-birthday-cake',
            'fa-area-chart',
            'fa-pie-chart',
            'fa-line-chart',
            'fa-lastfm',
            'fa-lastfm-square',
            'fa-toggle-off',
            'fa-toggle-on',
            'fa-bicycle',
            'fa-bus',
            'fa-ioxhost',
            'fa-angellist',
            'fa-cc',
            'fa-shekel',
            'fa-sheqel',
            'fa-ils',
            'fa-meanpath',
            'fa-buysellads',
            'fa-connectdevelop',
            'fa-dashcube',
            'fa-forumbee',
            'fa-leanpub',
            'fa-sellsy',
            'fa-shirtsinbulk',
            'fa-simplybuilt',
            'fa-skyatlas',
            'fa-cart-plus',
            'fa-cart-arrow-down',
            'fa-diamond',
            'fa-ship',
            'fa-user-secret',
            'fa-motorcycle',
            'fa-street-view',
            'fa-heartbeat',
            'fa-venus',
            'fa-mars',
            'fa-mercury',
            'fa-intersex',
            'fa-transgender',
            'fa-transgender-alt',
            'fa-venus-double',
            'fa-mars-double',
            'fa-venus-mars',
            'fa-mars-stroke',
            'fa-mars-stroke-v',
            'fa-mars-stroke-h',
            'fa-neuter',
            'fa-genderless',
            'fa-facebook-official',
            'fa-pinterest-p',
            'fa-whatsapp',
            'fa-server',
            'fa-user-plus',
            'fa-user-times',
            'fa-hotel',
            'fa-bed',
            'fa-viacoin',
            'fa-train',
            'fa-subway',
            'fa-medium',
            'fa-yc',
            'fa-y-combinator',
            'fa-optin-monster',
            'fa-opencart',
            'fa-expeditedssl',
            'fa-battery-4',
            'fa-battery',
            'fa-battery-full',
            'fa-battery-3',
            'fa-battery-three-quarters',
            'fa-battery-2',
            'fa-battery-half',
            'fa-battery-1',
            'fa-battery-quarter',
            'fa-battery-0',
            'fa-battery-empty',
            'fa-mouse-pointer',
            'fa-i-cursor',
            'fa-object-group',
            'fa-object-ungroup',
            'fa-sticky-note',
            'fa-sticky-note-o',
            'fa-cc-jcb',
            'fa-cc-diners-club',
            'fa-clone',
            'fa-balance-scale',
            'fa-hourglass-o',
            'fa-hourglass-1',
            'fa-hourglass-start',
            'fa-hourglass-2',
            'fa-hourglass-half',
            'fa-hourglass-3',
            'fa-hourglass-end',
            'fa-hourglass',
            'fa-hand-grab-o',
            'fa-hand-rock-o',
            'fa-hand-stop-o',
            'fa-hand-paper-o',
            'fa-hand-scissors-o',
            'fa-hand-lizard-o',
            'fa-hand-spock-o',
            'fa-hand-pointer-o',
            'fa-hand-peace-o',
            'fa-trademark',
            'fa-registered',
            'fa-creative-commons',
            'fa-gg',
            'fa-gg-circle',
            'fa-tripadvisor',
            'fa-odnoklassniki',
            'fa-odnoklassniki-square',
            'fa-get-pocket',
            'fa-wikipedia-w',
            'fa-safari',
            'fa-chrome',
            'fa-firefox',
            'fa-opera',
            'fa-internet-explorer',
            'fa-tv',
            'fa-television',
            'fa-contao',
            'fa-500px',
            'fa-amazon',
            'fa-calendar-plus-o',
            'fa-calendar-minus-o',
            'fa-calendar-times-o',
            'fa-calendar-check-o',
            'fa-industry',
            'fa-map-pin',
            'fa-map-signs',
            'fa-map-o',
            'fa-map',
            'fa-commenting',
            'fa-commenting-o',
            'fa-houzz',
            'fa-vimeo',
            'fa-black-tie',
            'fa-fonticons',
            'fa-reddit-alien',
            'fa-edge',
            'fa-credit-card-alt',
            'fa-codiepie',
            'fa-modx',
            'fa-fort-awesome',
            'fa-usb',
            'fa-product-hunt',
            'fa-mixcloud',
            'fa-scribd',
            'fa-pause-circle',
            'fa-pause-circle-o',
            'fa-stop-circle',
            'fa-stop-circle-o',
            'fa-shopping-bag',
            'fa-shopping-basket',
            'fa-hashtag',
            'fa-bluetooth',
            'fa-bluetooth-b',
            'fa-percent',
            'fa-gitlab',
            'fa-wpbeginner',
            'fa-wpforms',
            'fa-envira',
            'fa-universal-access',
            'fa-wheelchair-alt',
            'fa-question-circle-o',
            'fa-blind',
            'fa-audio-description',
            'fa-volume-control-phone',
            'fa-braille',
            'fa-assistive-listening-systems',
            'fa-asl-interpreting',
            'fa-american-sign-language-interpreting',
            'fa-deafness',
            'fa-hard-of-hearing',
            'fa-deaf',
            'fa-glide',
            'fa-glide-g',
            'fa-signing',
            'fa-sign-language',
            'fa-low-vision',
            'fa-viadeo',
            'fa-viadeo-square',
            'fa-snapchat',
            'fa-snapchat-ghost',
            'fa-snapchat-square',
            'fa-pied-piper',
            'fa-first-order',
            'fa-yoast',
            'fa-themeisle',
            'fa-google-plus-circle',
            'fa-google-plus-official',
            'fa-fa',
            'fa-font-awesome',
            'fa-handshake-o',
            'fa-envelope-open',
            'fa-envelope-open-o',
            'fa-linode',
            'fa-address-book',
            'fa-address-book-o',
            'fa-vcard',
            'fa-address-card',
            'fa-vcard-o',
            'fa-address-card-o',
            'fa-user-circle',
            'fa-user-circle-o',
            'fa-user-o',
            'fa-id-badge',
            'fa-drivers-license',
            'fa-id-card',
            'fa-drivers-license-o',
            'fa-id-card-o',
            'fa-quora',
            'fa-free-code-camp',
            'fa-telegram',
            'fa-thermometer-4',
            'fa-thermometer',
            'fa-thermometer-full',
            'fa-thermometer-3',
            'fa-thermometer-three-quarters',
            'fa-thermometer-2',
            'fa-thermometer-half',
            'fa-thermometer-1',
            'fa-thermometer-quarter',
            'fa-thermometer-0',
            'fa-thermometer-empty',
            'fa-shower',
            'fa-bathtub',
            'fa-s15',
            'fa-bath',
            'fa-podcast',
            'fa-window-maximize',
            'fa-window-minimize',
            'fa-window-restore',
            'fa-times-rectangle',
            'fa-window-close',
            'fa-times-rectangle-o',
            'fa-window-close-o',
            'fa-bandcamp',
            'fa-grav',
            'fa-etsy',
            'fa-imdb',
            'fa-ravelry',
            'fa-eercast',
            'fa-microchip',
            'fa-snowflake-o',
            'fa-superpowers',
            'fa-wpexplorer',
            'fa-meetup'
        ];
    }
    IconsPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], IconsPageComponent.prototype, "routerAnimation", void 0);
    IconsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-icons-page',
            template: __webpack_require__("../../../../../src/app/pages/icons-page/icons-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/icons-page/icons-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], IconsPageComponent);
    return IconsPageComponent;
}());

//# sourceMappingURL=icons-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/line-chart-page/line-chart-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Line Chart</h3>\r\n  </header>\r\n  <article>\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"50\">\r\n        <mat-card>\r\n          <mat-card-title>Simple</mat-card-title>\r\n          <mat-card-content>\r\n            <div class=\"parent\">\r\n              <div echarts [options]=\"lineChartOption\" (chartInit)=\"chartInstances.push($event)\" class=\"line-chart\"></div>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"50\">\r\n        <mat-card>\r\n          <mat-card-title>Multiple Axes</mat-card-title>\r\n          <mat-card-content>\r\n            <div echarts [options]=\"multipleAxesOption\" (chartInit)=\"chartInstances.push($event)\" class=\"line-chart\"></div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"50\">\r\n        <mat-card>\r\n          <mat-card-title>Area Chart</mat-card-title>\r\n          <mat-card-content>\r\n            <div echarts [options]=\"areaOption\" (chartInit)=\"chartInstances.push($event)\" class=\"line-chart\"></div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"50\">\r\n        <mat-card>\r\n          <mat-card-title>Stacked Area</mat-card-title>\r\n          <mat-card-content>\r\n            <div echarts [options]=\"stackedAreaOption\" (chartInit)=\"chartInstances.push($event)\" class=\"line-chart\"></div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/line-chart-page/line-chart-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line-chart {\n  height: 350px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/line-chart-page/line-chart-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_colors__ = __webpack_require__("../../../../../src/app/utils/colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__ = __webpack_require__("../../../../../src/app/resize/resize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LineChartPageComponent = (function () {
    function LineChartPageComponent(resizeService) {
        var _this = this;
        this.resizeService = resizeService;
        // Add router animation
        this.routerAnimation = true;
        // Chart instances used for resizing after layout changes
        this.chartInstances = [];
        // Stacked aria chart model
        this.stackedAreaOption = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Series 1', 'Series 2', 'Series 3', 'Series 4'],
                bottom: 0,
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            },
            toolbox: {
                feature: {
                    saveAsImage: {
                        title: 'Save',
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '80',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'],
                    axisLabel: {
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisTicks: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisTicks: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            ],
            series: [
                {
                    name: 'Series 4',
                    type: 'line',
                    stack: 'stack1',
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A700
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A700
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A700
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Series 3',
                    type: 'line',
                    stack: 'stack1',
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A400
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A400
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A400
                        }
                    },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Series 2',
                    type: 'line',
                    stack: 'stack1',
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A200
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A200
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A200
                        }
                    },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Series 1',
                    type: 'line',
                    stack: 'stack1',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A100
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A100
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */].A100
                        }
                    },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        // Aria chart model
        this.areaOption = {
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            toolbox: {
                feature: {
                    restore: {
                        title: 'Restore',
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    saveAsImage: {
                        title: 'Save',
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.generateAreaDate(),
                axisLabel: {
                    textStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisTicks: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                axisLabel: {
                    textStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisTicks: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                }
            },
            dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 10
                }, {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,' +
                        '8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
            series: [
                {
                    name: 'Series 1',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._200
                                }, {
                                    offset: 1,
                                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._900
                                }])
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                        }
                    },
                    data: this.generateAreaData()
                }
            ]
        };
        // Model fir multiple axes chart
        this.multipleAxesOption = {
            color: [__WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500, __WEBPACK_IMPORTED_MODULE_1__utils_colors__["b" /* MAT_DEEP_ORANGE */]._500],
            toolbox: {
                feature: {
                    saveAsImage: {
                        title: 'Save',
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            },
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: ['2015 year', '2016 year'],
                bottom: 0,
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            },
            grid: {
                top: 70,
                bottom: 80
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["b" /* MAT_DEEP_ORANGE */]._500
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return 'year  ' + params.value + '：' + params.seriesData[0].data;
                            }
                        }
                    },
                    data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10',
                        '2016-11', '2016-12'],
                    axisLabel: {
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisTicks: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                },
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return 'year  ' + params.value + '：' + params.seriesData[0].data;
                            }
                        }
                    },
                    data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10',
                        '2015-11', '2015-12']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisTicks: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            ],
            series: [
                {
                    name: '2015 year',
                    type: 'line',
                    xAxisIndex: 1,
                    smooth: true,
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: '2016 year',
                    type: 'line',
                    smooth: true,
                    data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                }
            ]
        };
        // Model for simple line chart
        this.lineChartOption = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Day', 'Night'],
                bottom: 0,
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            },
            grid: {
                bottom: 80
            },
            toolbox: {
                feature: {
                    saveAsImage: {
                        title: 'Save',
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                axisLabel: {
                    textStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisTicks: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C',
                    textStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisTicks: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                }
            },
            series: [
                {
                    name: 'Day',
                    type: 'line',
                    data: [11, 11, 15, 13, 12, 13, 10],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'Average' }
                        ]
                    },
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["b" /* MAT_DEEP_ORANGE */]._500
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["b" /* MAT_DEEP_ORANGE */]._500
                        }
                    }
                },
                {
                    name: 'Night',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [
                            { name: '', value: -2, xAxis: 1, yAxis: -1.5 }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '' },
                            [{
                                    symbol: 'none',
                                    x: '90%',
                                    yAxis: 'max'
                                }, {
                                    symbol: 'circle',
                                    label: {
                                        normal: {
                                            position: 'start',
                                            formatter: ''
                                        }
                                    },
                                    type: 'max',
                                    name: ''
                                }]
                        ]
                    },
                    lineStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                        }
                    }
                }
            ]
        };
        this.resizeSubscription = resizeService.resizeInformer$.subscribe(function () { return _this.chartInstances.forEach(function (chart) { return chart.resize(); }); });
    }
    LineChartPageComponent.prototype.ngOnInit = function () {
    };
    LineChartPageComponent.prototype.ngOnDestroy = function () {
        this.resizeSubscription.unsubscribe();
    };
    /**
     * Mock method for chart data generation
     * @returns {number[]}
     */
    LineChartPageComponent.prototype.generateAreaData = function () {
        var data = [Math.random() * 300];
        for (var i = 1; i < 20000; i++) {
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }
        return data;
    };
    /**
     * Mock method for chart data generation
     * @returns {Array}
     */
    LineChartPageComponent.prototype.generateAreaDate = function () {
        var base = +new Date(1968, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var date = [];
        for (var i = 1; i < 20000; i++) {
            var now = new Date(base += oneDay);
            date.push([now.getDate(), now.getMonth() + 1, now.getFullYear()].join('/'));
        }
        return date;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], LineChartPageComponent.prototype, "routerAnimation", void 0);
    LineChartPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-line-chart-page',
            template: __webpack_require__("../../../../../src/app/pages/line-chart-page/line-chart-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/line-chart-page/line-chart-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */]) === "function" && _a || Object])
    ], LineChartPageComponent);
    return LineChartPageComponent;
    var _a;
}());

//# sourceMappingURL=line-chart-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/list-page/list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">List</h3>\r\n  </header>\r\n  <article fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutWrap>\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"33\">\r\n      <mat-card>\r\n        <mat-card-title>Normal list</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-list>\r\n            <h3 mat-subheader>Items</h3>\r\n            <mat-list-item *ngFor=\"let item of items\">\r\n              {{item}}\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-title>Normal list</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-list>\r\n            <mat-list-item *ngFor=\"let contact of contacts\">\r\n              <h3 matLine>{{contact.name}}</h3>\r\n              <p matLine>extra line</p>\r\n              <p matLine>{{contact.headline}}</p>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-title>Normal list</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-list>\r\n            <h3 mat-subheader>Today</h3>\r\n            <mat-list-item *ngFor=\"let message of messages\">\r\n              <mat-icon class=\"icon-color\" mat-list-icon>account_circle</mat-icon>\r\n              <h4 matLine>{{message.from}}</h4>\r\n              <p matLine>\r\n                <span>{{message.subject}} -- </span>\r\n                <span>{{message.message}}</span>\r\n              </p>\r\n            </mat-list-item>\r\n            <mat-divider></mat-divider>\r\n            <mat-list-item *ngFor=\"let message of messages\">\r\n              <h4 matLine>{{message.from}}</h4>\r\n              <p matLine> {{message.subject}} </p>\r\n              <p matLine>{{message.message}} </p>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"33\">\r\n      <mat-card>\r\n        <mat-card-title>Dense list</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-list dense>\r\n            <h3 mat-subheader>Items</h3>\r\n            <mat-list-item *ngFor=\"let item of items\">\r\n              {{item}}\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-title>Dense list</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-list dense>\r\n            <mat-list-item *ngFor=\"let contact of contacts\">\r\n              <h3 matLine>{{contact.name}}</h3>\r\n              <p matLine>{{contact.headline}}</p>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-title>Dense list</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-list dense>\r\n            <h3 mat-subheader>Today</h3>\r\n            <mat-list-item *ngFor=\"let message of messages\">\r\n              <mat-icon class=\"icon-color\" mat-list-icon>account_circle</mat-icon>\r\n              <h4 matLine>{{message.from}}</h4>\r\n              <p matLine> {{message.subject}} </p>\r\n              <p matLine>{{message.message}} </p>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"100\" fxFlex.gt-md=\"33\">\r\n      <mat-card>\r\n        <mat-card-title>Nav list</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-nav-list>\r\n            <a mat-list-item *ngFor=\"let link of links\">\r\n              <mat-icon class=\"icon-color\" mat-list-icon>folder</mat-icon>\r\n              <span matLine>{{ link.name }}</span>\r\n              <span matLine> Description </span>\r\n            </a>\r\n          </mat-nav-list>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-title>Nav list</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-nav-list>\r\n            <a mat-list-item *ngFor=\"let link of links\">\r\n              {{ link.name }}\r\n            </a>\r\n          </mat-nav-list>\r\n          <mat-nav-list>\r\n            <mat-list-item *ngFor=\"let link of links\">\r\n              <a matLine >{{ link.name }}</a>\r\n              <button mat-icon-button>\r\n                <mat-icon class=\"icon-color\">info</mat-icon>\r\n              </button>\r\n            </mat-list-item>\r\n          </mat-nav-list>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-title>Nav list</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-nav-list dense>\r\n            <mat-list-item *ngFor=\"let link of links\">\r\n              <a matLine >{{ link.name }}</a>\r\n              <button mat-icon-button>\r\n                <mat-icon class=\"icon-color\">info</mat-icon>\r\n              </button>\r\n            </mat-list-item>\r\n          </mat-nav-list>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </article>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/list-page/list-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/list-page/list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPageComponent = (function () {
    function ListPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        // Data for lists
        this.items = [
            'First',
            'Second',
            'Third'
        ];
        this.contacts = [
            { name: 'First', headline: 'Software engineer' },
            { name: 'Second', headline: 'TPM' },
            { name: 'Third', headline: 'UX designer' }
        ];
        this.messages = [
            {
                from: 'First',
                subject: 'Question?',
                message: 'Answer lorem ipsum adipisicing elit'
            },
            {
                from: 'Second',
                subject: 'Question?',
                message: 'Answer lorem ipsum. Numquam, perferendis.'
            },
            {
                from: 'Third',
                subject: 'Question?',
                message: 'Answer lorem ipsum'
            }
        ];
        this.links = [
            { name: 'Inbox' },
            { name: 'Outbox' },
            { name: 'Spam' },
            { name: 'Trash' }
        ];
    }
    ListPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], ListPageComponent.prototype, "routerAnimation", void 0);
    ListPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-page',
            template: __webpack_require__("../../../../../src/app/pages/list-page/list-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/list-page/list-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], ListPageComponent);
    return ListPageComponent;
}());

//# sourceMappingURL=list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"../../../assets/svg/favicons/apple-icon-60x60.png\">\r\n<link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"../../../assets/svg/favicons/apple-icon-120x120.png\">\r\n<link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"../../../assets/svg/favicons/apple-icon-144x144.png\">\r\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"../../../assets/svg/favicons/apple-icon-180x180.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"../../../assets/svg/favicons/android-icon-192x192.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"../../../assets/svg/favicons/favicon-32x32.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"../../../assets/svg/favicons/favicon-96x96.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"../../../assets/svg/favicons/favicon-16x16.png\">\r\n<link href=\"https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/1.13.0/css/okta-sign-in.min.css\"\r\n      type=\"text/css\" rel=\"stylesheet\">\r\n<link href=\"https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/1.13.0/css/okta-theme.css\" type=\"text/css\"\r\n      rel=\"stylesheet\">\r\n\r\n<!-- OKTA PLUGIN WRAPPER -->\r\n<div class=\"login-wrapper\" data-login>\r\n  <div class=\"login-text\">\r\n    <h2>Already a <img src=\"../../../assets/svg/logo.svg\" alt=\"Wine-oh\">?</h2>\r\n    <p>Sign in to your Wine-Oh! account to access your wines, offers and other settings. If you don’t have a Wine-Oh!\r\n      account you can create one <a routerLink=\"sign-up\">here</a>.</p>\r\n    <a href=\"https://wine-oh.io/features/\">Learn more about Wine-Oh!</a>\r\n  </div>\r\n  <div id=\"okta-login-container\">\r\n    <div data-se=\"auth-container\" id=\"okta-sign-in\" class=\"auth-container main-container no-beacon\">\r\n      <div class=\"okta-sign-in-header auth-header\"><img src=\"../../../assets/svg/logo.svg\" class=\"auth-org-logo\" alt=\"\">\r\n        <div data-type=\"beacon-container\" class=\"beacon-container\"></div>\r\n      </div>\r\n      <div class=\"auth-content\">\r\n        <div class=\"auth-content-inner\">\r\n          <div class=\"primary-auth\">\r\n            <form name=\"userform\" method=\"post\" #formCtrl=\"ngForm\"\r\n                  id=\"form19\" class=\"primary-auth-form o-form o-form-edit-mode\">\r\n              <div data-se=\"o-form-content\" class=\"o-form-content o-form-theme clearfix\"><h2 data-se=\"o-form-head\"\r\n                                                                                             class=\"okta-form-title o-form-head\">\r\n                SignIn<span>to access your Wine-Oh! account</span></h2>\r\n                <div class=\"o-form-error-container\" data-se=\"o-form-error-container\"></div>\r\n                <div class=\"o-form-fieldset-container\" data-se=\"o-form-fieldset-container\">\r\n                  <div data-se=\"o-form-fieldset\" class=\"o-form-fieldset o-form-label-top\">\r\n                    <div data-se=\"o-form-input-container\" class=\"o-form-input\">\r\n                      <span data-se=\"o-form-input-username\"\r\n                            class=\"o-form-input-name-username o-form-control okta-form-input-field input-fix\">\r\n                        <span class=\"input-tooltip icon form-help-16\" data-hasqtip=\"0\"></span>\r\n                        <span class=\"icon input-icon person-16-gray\"></span>\r\n                        <input type=\"text\" placeholder=\"Email\" aria-label=\"Email\" name=\"email\"\r\n                               id=\"okta-signin-username\" value=\"\" autocomplete=\"off\" [(ngModel)]=\"user.email\" required>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div data-se=\"o-form-fieldset\" class=\"o-form-fieldset o-form-label-top\">\r\n                    <div data-se=\"o-form-input-container\" class=\"o-form-input\">\r\n                      <span data-se=\"o-form-input-password\"\r\n                            class=\"o-form-input-name-password o-form-control okta-form-input-field input-fix\">\r\n                        <span class=\"input-tooltip icon form-help-16\" data-hasqtip=\"1\"></span>\r\n                        <span class=\"icon input-icon remote-lock-16\"></span>\r\n                        <input type=\"password\" placeholder=\"Password\" aria-label=\"Password\" name=\"password\"\r\n                               id=\"okta-signin-password\" value=\"\" autocomplete=\"off\" [(ngModel)]=\"user.password\"\r\n                               required>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <iframe name=\"iframe18\" style=\"display:none\"></iframe>\r\n                </div>\r\n              </div>\r\n              <div class=\"o-form-button-bar\">\r\n                <Button class=\"button button-primary signin-btn\" type=\"submit\" value=\"Sign-In\" id=\"okta-signin-submit\"\r\n                        data-type=\"save\" (click)=\"signInWithEmail()\" [disabled]=\"formCtrl.form.invalid\">SignIn\r\n                </Button>\r\n              </div>\r\n              <div class=\"socia-login\">\r\n                <button type=\"button\" class=\"btn-google-login btn btn-danger btn-block\" (click)=\"loginWithGoogle()\">\r\n\r\n                  <span class=\"google-button\">\r\n                      <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                      width=\"25px\" height=\"25px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n                    <path style=\"fill:#FBBB00;\" d=\"M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256\r\n                      c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456\r\n                      C103.821,274.792,107.225,292.797,113.47,309.408z\"/>\r\n                    <path style=\"fill:#518EF8;\" d=\"M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451\r\n                      c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535\r\n                      c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z\"/>\r\n                    <path style=\"fill:#28B446;\" d=\"M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512\r\n                      c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771\r\n                      c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z\"/>\r\n                    <path style=\"fill:#F14336;\" d=\"M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012\r\n                      c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0\r\n                      C318.115,0,375.068,22.126,419.404,58.936z\"/>\r\n                  </svg>\r\n              </span>\r\n\r\n                  Sign-in with Google\r\n                </button>\r\n                <button type=\"button\" class=\"btn-fb-login btn btn-primary btn-block facebook\"\r\n                        (click)=\"loginWithFacebook()\">\r\n                  <span class=\"google-button\">\r\n                      <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                      width=\"25px\" height=\"25px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n                    <path style=\"fill:#1976D2;\" d=\"M384,176h-96v-64c0-17.664,14.336-32,32-32h32V0h-64l0,0c-53.024,0-96,42.976-96,96v80h-64v80h64v256\r\n                      h96V256h64L384,176z\"/>\r\n\r\n                    </svg>\r\n\r\n                  </span>\r\n                  Sign-in with Facebook\r\n                </button>\r\n                <button type=\"button\" class=\"btn-fb-login btn btn-primary btn-block twitter\"\r\n                        (click)=\"loginWithTwitter()\">\r\n                  <span class=\"google-button\">\r\n                      <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                      width=\"25px\" height=\"25px\" viewBox=\"0 0 511.537 511.537\" style=\"enable-background:new 0 0 511.537 511.537;\" xml:space=\"preserve\">\r\n                        <path style=\"fill:#65BBF2;\" d=\"M357.038,49.172c-59.284,0.898-105.993,52.098-105.993,111.382v14.372\r\n                        C145.052,156.063,92.954,127.319,35.466,67.137c-34.133,66.47,3.593,122.161,44.912,152.702c-27.846,0-51.2-3.593-69.165-19.761\r\n                        c-1.796-0.898-3.593,0-2.695,1.797c15.27,55.691,67.368,96.112,107.789,107.789c-36.828,0-61.081,5.389-87.13-10.779\r\n                        c-1.796-0.898-3.593,0-2.695,1.796c19.761,54.793,59.284,71.86,116.772,71.86c-28.744,21.558-67.368,43.116-140.126,44.912\r\n                        c-2.695,0-4.491,3.593-1.796,5.389c26.947,22.456,93.418,39.523,186.835,39.523c153.6,0,278.456-136.533,278.456-305.404v-8.982\r\n                        c24.253-8.982,37.726-30.54,44.912-52.098c0-0.898-0.898-1.796-1.797-1.796l-51.2,17.965c-0.898,0-1.796-1.796-0.898-2.695\r\n                        C479.2,92.288,495.368,70.73,502.554,50.07c0,0-0.898-0.898-1.797-0.898c-24.253,9.881-47.607,19.761-65.572,25.151\r\n                        c-2.695,0.898-6.288,0.898-8.982-0.898C414.526,67.137,379.494,49.172,357.038,49.172\"/>\r\n                      </svg>\r\n\r\n                  </span>\r\n                  Sign-in with Twitter\r\n                </button>\r\n              </div>\r\n\r\n            </form>\r\n            <div class=\"auth-footer\"><a href=\"#\" data-se=\"needhelp\" class=\"link help js-help\"> Need help signing\r\n              in? </a>\r\n              <ul class=\"help-links js-help-links\" style=\"display: none;\">\r\n                <li><a href=\"#\" data-se=\"forgot-password\" class=\"link js-forgot-password\"> Forgot password? </a></li>\r\n                <li><a routerLink=\"main/dashboard\" class=\"link js-custom\">Goto Homepage Instead</a></li>\r\n                <li><a href=\"https://help.wine-oh.io/hc/en-us/articles/115004120233-Need-Help-Signing-In-\"\r\n                       data-se=\"help-link\" class=\"link js-help-link\" target=\"_blank\"> Help </a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END OKTA PLUGIN WRAPPER -->\r\n\r\n<!-- SCENE BLOCK -->\r\n<div class=\"scene-block\" data-scene=\"night\">\r\n\r\n  <!-- Sky images -->\r\n  <div class=\"sky\" data-sky>\r\n    <img src=\"../../../assets/svg/night/bg.svg\" alt=\"Wine-oh\" class=\"night\">\r\n    <img src=\"../../../assets/svg/morning/bg.svg\" alt=\"Wine-oh\" class=\"morning\">\r\n  </div>\r\n\r\n  <!-- Sun image -->\r\n  <div class=\"sun\" data-sun>\r\n    <img src=\"../../../assets/svg/morning/sun.svg\" alt=\"Wine-oh\" class=\"morning\">\r\n  </div>\r\n\r\n  <!-- Mountains images -->\r\n  <div class=\"mountains\" data-mount>\r\n    <img src=\"../../../assets/svg/night/mountain.svg\" alt=\"Wine-oh\" class=\"night\">\r\n    <img src=\"../../../assets/svg/morning/mountain.svg\" alt=\"Wine-oh\" class=\"morning\">\r\n  </div>\r\n\r\n  <!-- Clouds image -->\r\n  <div class=\"clouds\" data-cloud>\r\n    <img src=\"../../../assets/svg/clouds.svg\" alt=\"Wine-oh\">\r\n  </div>\r\n\r\n  <!-- Blur image -->\r\n  <div class=\"blur\" data-blur>\r\n    <img src=\"../../../assets/svg/blur.jpg\" alt=\"Wine-oh\">\r\n  </div>\r\n\r\n</div>\r\n<!-- END SCENE BLOCK -->\r\n\r\n<!-- MUSIC -->\r\n<audio class=\"page-audio js-pageAudioFirst\" preload=\"auto\">\r\n  <source src=\"../../../assets/audio/cork.mp3\" type=\"audio/mpeg\">\r\n  <source src=\"../../../assets/audio/cork.wav\" type=\"audio/wav\">\r\n</audio>\r\n<audio class=\"page-audio js-pageAudioSecond\" preload=\"auto\">\r\n  <source src=\"../../../assets/audio/pour.mp3\" type=\"audio/mpeg\">\r\n  <source src=\"../../../assets/audio/pour.wav\" type=\"audio/wav\">\r\n</audio>\r\n<audio class=\"page-audio js-pageAudioThird\" preload=\"auto\">\r\n  <source src=\"../../../assets/audio/rain.mp3\" type=\"audio/mpeg\">\r\n  <source src=\"../../../assets/audio/rain.wav\" type=\"audio/wav\">\r\n</audio>\r\n<!-- END MUSIC -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/login-page/login-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Avenir';\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/avenir_roman-webfont.woff2")) + ") format(\"woff2\"), url(" + escape(__webpack_require__("../../../../../src/assets/fonts/avenir_roman-webfont.woff")) + ") format(\"woff\");\n  font-weight: 400;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Avenir';\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/aeh-webfont.woff2")) + ") format(\"woff2\"), url(" + escape(__webpack_require__("../../../../../src/assets/fonts/aeh-webfont.woff")) + ") format(\"woff\");\n  font-weight: 700;\n  font-style: normal; }\n\n/* CLEAR STYLE */\n/* CSS ANIMATION */\n@-webkit-keyframes \"opacityOut\" {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes \"opacityOut\" {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@-webkit-keyframes \"opacityIn\" {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes \"opacityIn\" {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes \"keyframesClouds\" {\n  from {\n    opacity: .1; }\n  to {\n    opacity: 1; } }\n\n@keyframes \"keyframesClouds\" {\n  from {\n    opacity: .1; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes \"keyframesSun\" {\n  from {\n    opacity: 0;\n    bottom: -70%; }\n  40% {\n    opacity: 1;\n    bottom: 5%; }\n  50% {\n    opacity: 1;\n    bottom: 0; }\n  to {\n    opacity: 1;\n    bottom: 0; } }\n\n@keyframes \"keyframesSun\" {\n  from {\n    opacity: 0;\n    bottom: -70%; }\n  40% {\n    opacity: 1;\n    bottom: 5%; }\n  50% {\n    opacity: 1;\n    bottom: 0; }\n  to {\n    opacity: 1;\n    bottom: 0; } }\n\n@-webkit-keyframes \"keyframesLogin\" {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.1);\n            transform: scale(0.1); }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes \"keyframesLogin\" {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.1);\n            transform: scale(0.1); }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n/* SCENE BLOCK */\n/* LOGIN WRAPPER */\n/* Login wrapper > Okta sign in plugin */\n* {\n  box-sizing: border-box; }\n\nhtml {\n  height: 100%;\n  width: 100%; }\n\nbody {\n  height: 100%;\n  width: 100%;\n  background: #fff;\n  color: #000;\n  font: 400 16px/20px 'Avenir', 'Arial', sans-serif;\n  margin: 0;\n  padding: 0; }\n\na {\n  background: transparent; }\n  a:active {\n    outline: 0;\n    text-decoration: none; }\n  a:hover {\n    outline: 0;\n    text-decoration: none; }\n\nb {\n  font-weight: bold; }\n\nstrong {\n  font-weight: bold; }\n\naudio {\n  display: none; }\n\n.scene-block {\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  width: 100%; }\n  .scene-block img {\n    margin: auto;\n    min-height: 100%;\n    min-width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100.03%;\n    z-index: 1; }\n  .scene-block .morning {\n    opacity: 0; }\n  .scene-block .sun.animated .morning {\n    -webkit-animation: keyframesSun 3s ease-in-out 3.5s 1 forwards;\n    animation: keyframesSun 3s ease-in-out 3.5s 1 forwards; }\n  .scene-block .clouds img {\n    opacity: .1;\n    z-index: 2; }\n  .scene-block .clouds.animated img {\n    -webkit-animation: keyframesClouds 4.5s ease-in-out 2s 1 forwards;\n    animation: keyframesClouds 4.5s ease-in-out 2s 1 forwards; }\n  .scene-block .sky.animated .night {\n    -webkit-animation: opacityOut 4.5s ease-in-out 2s 1 forwards;\n    animation: opacityOut 4.5s ease-in-out 2s 1 forwards; }\n  .scene-block .sky.animated .morning {\n    -webkit-animation: opacityIn 4.5s ease-in-out 2s 1 forwards;\n    animation: opacityIn 4.5s ease-in-out 2s 1 forwards; }\n  .scene-block .mountains.animated .night {\n    -webkit-animation: opacityOut 1s ease-in-out 6.5s 1 forwards;\n    animation: opacityOut 1s ease-in-out 6.5s 1 forwards; }\n  .scene-block .mountains.animated .morning {\n    -webkit-animation: opacityIn 4.5s ease-in-out 2s 1 forwards;\n    animation: opacityIn 4.5s ease-in-out 2s 1 forwards; }\n  .scene-block .blur img {\n    opacity: 0;\n    z-index: 3; }\n  .scene-block .blur.animated img {\n    -webkit-animation: opacityIn 1s ease-in-out 6.7s 1 forwards;\n    animation: opacityIn 1s ease-in-out 6.7s 1 forwards; }\n\n.login-wrapper {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: auto;\n  max-width: 800px;\n  opacity: 0;\n  padding: 0 10px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10; }\n  .login-wrapper .login-text {\n    padding-right: 50px; }\n  .login-wrapper h2 {\n    color: #fff;\n    font-size: 28px;\n    font-weight: 700;\n    line-height: 30px;\n    margin: 0; }\n    .login-wrapper h2 img {\n      height: 37px;\n      margin: 0 5px;\n      vertical-align: middle;\n      width: 40px; }\n  .login-wrapper p {\n    color: #fff;\n    font-size: 18px;\n    line-height: 26px;\n    margin: 20px 0 40px; }\n    .login-wrapper p a {\n      color: #fff;\n      font-size: 18px;\n      line-height: 26px; }\n      .login-wrapper p a:hover {\n        color: #fff;\n        text-decoration: none; }\n  .login-wrapper a {\n    color: #ff956c;\n    font-size: 14px;\n    line-height: 20px;\n    text-decoration: underline; }\n    .login-wrapper a:hover {\n      color: #d47b5a;\n      text-decoration: none; }\n  .login-wrapper #okta-sign-in.main-container {\n    border: none;\n    border-radius: 5px;\n    box-shadow: none;\n    font-family: \"Avenir\", \"Arial\", sans-serif;\n    margin: 70px 0 0;\n    padding: 50px 40px 80px;\n    width: 330px; }\n  .login-wrapper #okta-sign-in .okta-sign-in-header {\n    border: none;\n    padding: 0; }\n  .login-wrapper #okta-sign-in h2 {\n    color: #0c0c0d;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 20px;\n    margin: 0 0 10px; }\n    .login-wrapper #okta-sign-in h2 span {\n      display: block;\n      font-size: 14px;\n      line-height: 20px;\n      margin: 5px 0 20px; }\n  .login-wrapper #okta-sign-in .okta-form-input-field input {\n    border: 1px solid #737373;\n    border-radius: 2px;\n    font-size: 16px;\n    padding: 0 20px 2px;\n    transition: border .5s, box-shadow .5s; }\n    .login-wrapper #okta-sign-in .okta-form-input-field input:focus {\n      border-color: #0a84ff;\n      box-shadow: 0 0 0 2px rgba(189, 217, 255, 0.75); }\n  .login-wrapper #okta-sign-in .signin-btn, .login-wrapper #okta-sign-in .signin-btn:hover, .login-wrapper #okta-sign-in .signin-btn:focus {\n    background: #f2b72d;\n    border-color: #f2b72d;\n    box-shadow: 0 3px 0 #daa428;\n    border-radius: 2px;\n    color: #fff;\n    font-size: 16px;\n    height: 34px;\n    line-height: 18px;\n    padding: 8px 0;\n    transition: background .5s, border .5s; }\n    .login-wrapper #okta-sign-in .signin-btn:hover, .login-wrapper #okta-sign-in .signin-btn:hover:hover, .login-wrapper #okta-sign-in .signin-btn:focus:hover {\n      background: #f2b72d;\n      border-color: #f2b72d; }\n  .login-wrapper #okta-sign-in .auth-footer .link {\n    color: #0a84ff;\n    text-decoration: none; }\n    .login-wrapper #okta-sign-in .auth-footer .link:hover {\n      color: #086fd6;\n      text-decoration: underline; }\n  .login-wrapper #okta-sign-in .auth-footer .help-links li:nth-child(2n) a {\n    background: #f3f3f3;\n    border: 1px solid #ececec;\n    border-radius: 3px;\n    color: #cacaca;\n    font-size: 12px;\n    padding: 4px 10px;\n    transition: all .5s; }\n    .login-wrapper #okta-sign-in .auth-footer .help-links li:nth-child(2n) a:hover {\n      background: #dedede;\n      border-color: #dbdbdb;\n      color: #b1b1b1;\n      text-decoration: none; }\n  .login-wrapper .o-form-has-errors .infobox-error p {\n    color: #e34843;\n    font-size: 12px;\n    line-height: 18px;\n    margin: 0; }\n  .login-wrapper .o-form-has-errors .o-form-explain.o-form-input-error {\n    font-size: 12px;\n    margin: 0; }\n  .login-wrapper .auth-org-logo {\n    max-height: 120px;\n    max-width: 120px;\n    position: absolute;\n    top: -120px;\n    right: 0;\n    left: 0; }\n  .login-wrapper .auth-content {\n    padding: 0; }\n    .login-wrapper .auth-content .help-links li:nth-child(2n) {\n      margin: auto;\n      position: absolute;\n      right: 0;\n      bottom: -60px;\n      left: 0; }\n  .login-wrapper .o-form-edit-mode .o-form-content {\n    padding-bottom: 0; }\n  .login-wrapper .o-form-fieldset {\n    margin-bottom: 9px; }\n  .login-wrapper .o-form-button-bar {\n    padding-bottom: 9px; }\n  .login-wrapper .o-form .o-form-input .input-icon {\n    display: none; }\n  .login-wrapper .o-form .o-form-input .input-tooltip {\n    display: none; }\n  .login-wrapper .o-form .input-fix {\n    border: none; }\n  .login-wrapper .auth-footer {\n    text-align: center; }\n    .login-wrapper .auth-footer .link.help {\n      display: none; }\n    .login-wrapper .auth-footer .help-links {\n      display: block !important; }\n\n.login-wrapper.animated {\n  -webkit-animation: keyframesLogin .5s ease-in-out 7.7s 1 forwards;\n  animation: keyframesLogin .5s ease-in-out 7.7s 1 forwards; }\n\n@media all and (max-width: 800px) {\n  .login-wrapper .login-text {\n    display: none; } }\n\n@media all and (max-height: 500px) and (orientation: landscape) {\n  .login-wrapper #okta-sign-in.main-container {\n    margin: 30px 0 10px;\n    padding: 50px 20px 40px;\n    width: 400px; }\n  .login-wrapper .auth-org-logo {\n    max-height: 70px;\n    max-width: 70px;\n    top: -70px; }\n  .login-wrapper #okta-sign-in h2 {\n    margin: 0; }\n  .login-wrapper .o-form-fieldset {\n    display: inline-block;\n    margin-bottom: 0;\n    width: 48%; }\n    .login-wrapper .o-form-fieldset + .o-form-fieldset {\n      margin-left: 4%; }\n  .login-wrapper .auth-content .help-links li {\n    display: inline-block;\n    margin-top: 0; }\n    .login-wrapper .auth-content .help-links li:last-child {\n      margin-left: 10px; }\n    .login-wrapper .auth-content .help-links li:nth-child(2n) {\n      bottom: -30px; } }\n\n.facebook {\n  background: #3b5a9a;\n  color: #fff;\n  border: 1px solid #3b5a9a;\n  box-shadow: 0 3px 0 #365089;\n  padding: 9px 50px 9px 71px;\n  border-radius: 3px;\n  margin-top: 10px; }\n\n.twitter {\n  background: #47bbe2;\n  color: #fff;\n  border: 1px solid #47bbe2;\n  box-shadow: 0 3px 0 #40a8cb;\n  padding: 9px 56px 9px 80px;\n  border-radius: 3px;\n  margin-top: 10px; }\n\n.btn-google-login {\n  position: relative;\n  background: #de4931;\n  color: #fff;\n  border: 1px solid #de4931;\n  box-shadow: 0 3px 0 #c6422d;\n  padding: 9px 56px 9px 80px;\n  border-radius: 3px; }\n\n.google-button {\n  background: #fff;\n  position: absolute;\n  top: 1px;\n  padding: 4px 7px;\n  left: 1px;\n  height: 32px;\n  border-radius: 3px; }\n\n.btn-fb-login {\n  position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_main_js__ = __webpack_require__("../../../../../src/assets/js/main.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPageComponent = (function () {
    function LoginPageComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {
            email: '',
            password: ''
        };
        // Add router animation
        this.routerAnimation = true;
        new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "../../../../../src/assets/js/main.js"))
            .then(function (js) {
            js.animate();
        });
    }
    LoginPageComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle(null)
            .then(function (response) {
            console.log(response);
            _this.router.navigate(['main/dashboard']);
        }).catch(function (err) { return console.log('error: ' + err); });
    };
    LoginPageComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        this.authService.signInWithFacebook()
            .then(function (response) {
            console.log(response);
            _this.router.navigate(['main/dashboard']);
        }).catch(function (err) { return console.log('error: ' + err); });
    };
    LoginPageComponent.prototype.loginWithTwitter = function () {
        var _this = this;
        this.authService.signInWithTwitter()
            .then(function (response) {
            console.log(response);
            _this.router.navigate(['main/dashboard']);
        }).catch(function (err) { return console.log('error: ' + err); });
    };
    LoginPageComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.authService.signInRegular(this.user.email, this.user.password)
            .then(function (response) {
            console.log(response);
            _this.router.navigate(['main/dashboard']);
        }).catch(function (err) { return console.log('error: ' + err); });
    };
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    /**
     * Login method
     * @param login
     * @param password
     */
    LoginPageComponent.prototype.login = function (login, password) {
        this.router.navigateByUrl('/main');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], LoginPageComponent.prototype, "routerAnimation", void 0);
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__("../../../../../src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login-page/login-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__utils_page_animation__["a" /* routerAnimation */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], LoginPageComponent);
    return LoginPageComponent;
    var _a, _b;
}());

//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav #sidenav [mode]=\"sidenavMode\" [opened]=\"sideNavOpened\" class=\"left-sidenav\"\r\n              (open)=\"resizeService.resizeInformer$.next()\" (close)=\"resizeService.resizeInformer$.next()\">\r\n    <header class=\"sidenav-header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n        <mat-icon>clear</mat-icon>\r\n      </button>\r\n      <div fxFlex class=\"text-center pad-right-xl\">\r\n        <a href=\"/\">\r\n          <img *ngIf=\"darkTheme; else darkLogo\" class=\"sidebar-logo\" src=\"assets/svg/logo.svg\">\r\n          <ng-template #darkLogo>\r\n            <img src=\"/assets/logo/logo-text-black.png\">\r\n          </ng-template>\r\n        </a>\r\n      </div>\r\n    </header>\r\n    <perfect-scrollbar class=\"perfect-scrollbar\">\r\n      <px-gdn-sidemenu>\r\n        <!--<px-gdn-sideitem title=\"Dashboard\" [routerLinkUrl]=\"'dashboard'\">\r\n          <mat-icon>dashboard</mat-icon>\r\n        </px-gdn-sideitem>-->\r\n\r\n        <px-gdn-sideitem title=\"Home\" >\r\n          <mat-icon>web_asset</mat-icon>\r\n          <px-gdn-sideitem title=\"Dashboard\" [routerLinkUrl]=\"'dashboard'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Stream\" [routerLinkUrl]=\"'stream'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Team\" [routerLinkUrl]=\"'team'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Company\" [routerLinkUrl]=\"'company'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n        </px-gdn-sideitem>\r\n\r\n        <px-gdn-sideitem title=\"Wines\">\r\n          <mat-icon>view_module</mat-icon>\r\n          <px-gdn-sideitem title=\"Manage\" [routerLinkUrl]=\"'manage-wine'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Location\" [routerLinkUrl]=\"'location'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Price\" [routerLinkUrl]=\"'price'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Tag\" [routerLinkUrl]=\"'tag'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n        </px-gdn-sideitem>\r\n\r\n        <px-gdn-sideitem title=\"Promotions\">\r\n          <mat-icon>view_list</mat-icon>\r\n          <px-gdn-sideitem title=\"Dashboard\" [routerLinkUrl]=\"'dashboard'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Campaigns\" [routerLinkUrl]=\"'campaigns'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Offers\" [routerLinkUrl]=\"'offers'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Parlay\" [routerLinkUrl]=\"'parlay'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n        </px-gdn-sideitem>\r\n\r\n        <px-gdn-sideitem title=\"Community\">\r\n          <mat-icon>format_align_left</mat-icon>\r\n          <px-gdn-sideitem title=\"Our Stream\" [routerLinkUrl]=\"'our-stream'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Followers\" [routerLinkUrl]=\"'followers'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Discover\" [routerLinkUrl]=\"'discover'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n        </px-gdn-sideitem>\r\n\r\n        <px-gdn-sideitem title=\"News\" (click)=\"optionsnav.toggle()\">\r\n          <mat-icon>settings</mat-icon>\r\n        </px-gdn-sideitem>\r\n\r\n        <!--<px-gdn-sideitem title=\"Extra\">\r\n          <mat-icon>extension</mat-icon>\r\n          <px-gdn-sideitem title=\"Tree\" [routerLinkUrl]=\"'tree'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Editor\" [routerLinkUrl]=\"'editor'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Table\" [routerLinkUrl]=\"'table'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Scroll\" [routerLinkUrl]=\"'scroll'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Drag and Drop\" [routerLinkUrl]=\"'drag'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Datepicker\" [routerLinkUrl]=\"'datepicker'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"File upload\" [routerLinkUrl]=\"'fileupload'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Stepper\" [routerLinkUrl]=\"'stepper'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Multi language\" [routerLinkUrl]=\"'multi-language'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n        </px-gdn-sideitem>-->\r\n\r\n        <px-gdn-sideitem title=\"Charts\">\r\n          <mat-icon>insert_chart</mat-icon>\r\n          <px-gdn-sideitem title=\"Linechart\" [routerLinkUrl]=\"'line-chart'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Barchart\" [routerLinkUrl]=\"'bar-chart'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Bubblechart\" [routerLinkUrl]=\"'bubble-chart'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Heatmap\" [routerLinkUrl]=\"'heatmap'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Piechart\" [routerLinkUrl]=\"'piechart'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Radar\" [routerLinkUrl]=\"'radar'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n        </px-gdn-sideitem>\r\n\r\n        <!--<px-gdn-sideitem title=\"Custom pages\">\r\n          <mat-icon>account_box</mat-icon>\r\n          <px-gdn-sideitem title=\"Not Found Page\" [routerLinkUrl]=\"'/404'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Login\" [routerLinkUrl]=\"'/login'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Sign Up\" [routerLinkUrl]=\"'/sign-up'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Chat\" [routerLinkUrl]=\"'chat'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Testimonials\" [routerLinkUrl]=\"'testimonials'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Portfolio\" [routerLinkUrl]=\"'portfolio'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n        </px-gdn-sideitem>-->\r\n\r\n\r\n        <!--<px-gdn-sideitem title=\"E-commerce\">\r\n          <mat-icon>shopping_cart</mat-icon>\r\n          <px-gdn-sideitem title=\"Pricing Tables\" [routerLinkUrl]=\"'pricing-tables'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Products\" [routerLinkUrl]=\"'products'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Product page\" [routerLinkUrl]=\"'product'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Shopping Cart\" [routerLinkUrl]=\"'cart'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n        </px-gdn-sideitem>-->\r\n\r\n        <!--<px-gdn-sideitem title=\"Maps\">\r\n          <mat-icon>location_on</mat-icon>\r\n          <px-gdn-sideitem title=\"Google Maps\" [routerLinkUrl]=\"'google-maps'\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n        </px-gdn-sideitem>-->\r\n\r\n        <!--<px-gdn-sideitem title=\"Multilevel\">\r\n          <px-gdn-sideitem title=\"Level 1.1\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Level 1.2\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n            <px-gdn-sideitem title=\"Level 1.2.1\">\r\n              <mat-icon>keyboard_arrow_right</mat-icon>\r\n            </px-gdn-sideitem>\r\n            <px-gdn-sideitem title=\"Level 1.2.2\">\r\n              <mat-icon>keyboard_arrow_right</mat-icon>\r\n              <px-gdn-sideitem title=\"Level 1.2.2.1\">\r\n                <mat-icon>keyboard_arrow_right</mat-icon>\r\n              </px-gdn-sideitem>\r\n              <px-gdn-sideitem title=\"Level 1.2.2.2\">\r\n                <mat-icon>keyboard_arrow_right</mat-icon>\r\n              </px-gdn-sideitem>\r\n              <px-gdn-sideitem title=\"Level 1.2.2.3\">\r\n                <mat-icon>keyboard_arrow_right</mat-icon>\r\n              </px-gdn-sideitem>\r\n            </px-gdn-sideitem>\r\n            <px-gdn-sideitem title=\"Level 1.2.3\">\r\n              <mat-icon>keyboard_arrow_right</mat-icon>\r\n            </px-gdn-sideitem>\r\n          </px-gdn-sideitem>\r\n          <px-gdn-sideitem title=\"Level 1.3\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </px-gdn-sideitem>\r\n        </px-gdn-sideitem>-->\r\n\r\n        <!--<px-gdn-sideitem title=\"Primary\">\r\n          <td-notification-count color=\"primary\" [notifications]=\"3\"></td-notification-count>\r\n          <mat-icon color=\"primary\">star</mat-icon>\r\n        </px-gdn-sideitem>-->\r\n\r\n        <!--<px-gdn-sideitem title=\"Accent\">\r\n          <td-notification-count color=\"accent\" [notifications]=\"100\"></td-notification-count>\r\n          <mat-icon color=\"accent\">star</mat-icon>\r\n        </px-gdn-sideitem>-->\r\n\r\n        <!--<px-gdn-sideitem title=\"Warn\">\r\n          <td-notification-count color=\"warn\" [notifications]=\"true\"></td-notification-count>\r\n          <mat-icon color=\"warn\">star</mat-icon>\r\n        </px-gdn-sideitem>-->\r\n      </px-gdn-sidemenu>\r\n    </perfect-scrollbar>\r\n    <footer class=\"secondary-text-color\">\r\n      <mat-divider></mat-divider>\r\n      <p>Wine-oh! © All Rights Reserved</p>\r\n    </footer>\r\n  </mat-sidenav>\r\n  <mat-sidenav #optionsnav mode=\"over\" align=\"end\">\r\n    <mat-accordion>\r\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                           (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <i class=\"material-icons sidebar-icons\">star</i> Featured Article\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                           (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <i class=\"material-icons sidebar-icons\">reorder</i>  Another Article\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                           (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <i class=\"material-icons sidebar-icons\">reorder</i> Another Article\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                           (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <i class=\"material-icons sidebar-icons\">reorder</i>  Another Article\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                           (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <i class=\"material-icons sidebar-icons\">reorder</i>  Another Article\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <i class=\"material-icons sidebar-icons\">reorder</i>  Another Article\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n\r\n  </mat-sidenav>\r\n\r\n  <mat-toolbar color=\"primary\" class=\"dashboard-navbar\">\r\n    <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <a fxHide=\"true\" fxHide.gt-sm=\"false\" href=\"/\" class=\"logo wine-logo\">\r\n      <img class=\"dashboard-logo\" src=\"assets/svg/logo.svg\"> <p class=\"logo-text\">wine-oh!</p>\r\n    </a>\r\n    <span fxFlex></span>\r\n    <td-search-box [alwaysVisible]=\"false\" fxHide=\"true\" fxHide.gt-sm=\"false\"></td-search-box>\r\n    <button mat-icon-button [matMenuTriggerFor]=\"lettersMenu\">\r\n      <td-notification-count [notifications]=\"3\">\r\n        <mat-icon>mail</mat-icon>\r\n      </td-notification-count>\r\n    </button>\r\n    <mat-menu #lettersMenu=\"matMenu\">\r\n      <mat-nav-list>\r\n        <a mat-list-item *ngFor=\"let message of messages\">\r\n          <img mat-list-avatar [src]=\"message.image\">\r\n          <h4 matLine fxLayoutAlign=\"space-between\">\r\n            <span>{{message.subject}}</span>\r\n            <span class=\"mat-caption\">{{message.time}}</span>\r\n          </h4>\r\n          <p matLine>\r\n            <span>{{message.message}}</span>\r\n          </p>\r\n        </a>\r\n      </mat-nav-list>\r\n      <div class=\"text-center\">\r\n        <button mat-button>View all</button>\r\n      </div>\r\n    </mat-menu>\r\n    <img src=\"assets/avatars/4040.png\" class=\"cursor-pointer push-left-sm\" [matMenuTriggerFor]=\"userMenu\">\r\n    <mat-menu #userMenu=\"matMenu\">\r\n      <mat-list>\r\n        <mat-list-item>\r\n          <img mat-list-avatar src=\"assets/avatars/4040.png\">\r\n          <h4 matLine> Olivia Werner </h4>\r\n          <p matLine>\r\n            <span>Admin</span>\r\n          </p>\r\n        </mat-list-item>\r\n        <mat-divider></mat-divider>\r\n      </mat-list>\r\n      <mat-nav-list>\r\n        <a mat-list-item>\r\n          <h4 matLine>View Profile</h4>\r\n        </a>\r\n        <a mat-list-item>\r\n          <h4 matLine>Password</h4>\r\n        </a>\r\n        <a mat-list-item>\r\n          <h4 matLine>Sign out</h4>\r\n        </a>\r\n      </mat-nav-list>\r\n    </mat-menu>\r\n    <button mat-icon-button [matMenuTriggerFor]=\"settingsMenu\">\r\n      <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n    <mat-menu #settingsMenu=\"matMenu\">\r\n      <button mat-menu-item>\r\n        <mat-icon>settings</mat-icon>\r\n        Settings\r\n      </button>\r\n      <button mat-menu-item>\r\n        <mat-icon>language</mat-icon>\r\n        Language\r\n      </button>\r\n      <button mat-menu-item>\r\n        <mat-icon>notifications_off</mat-icon>\r\n        Notifications\r\n      </button>\r\n      <button mat-menu-item>\r\n        <mat-icon>share</mat-icon>\r\n        Share\r\n      </button>\r\n      <button mat-menu-item (click)=\"logout()\">\r\n        <mat-icon>power_settings_new</mat-icon>\r\n        Logout\r\n      </button>\r\n    </mat-menu>\r\n\r\n  </mat-toolbar>\r\n  <div class=\"wrapper\" [class.wrapper-box]=\"boxedLayout\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n@font-face {\n  font-family: 'Avenir';\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/avefedan_personal_use-webfont.woff2")) + ") format(\"woff2\"), url(" + escape(__webpack_require__("../../../../../src/assets/fonts/avefedan_personal_use-webfont.woff")) + ") format(\"woff\");\n  font-weight: 400;\n  font-style: normal; }\n\n:host .left-sidenav {\n  padding-bottom: 50px;\n  padding-top: 64px; }\n\n:host .sidenav-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 64px; }\n  :host .sidenav-header div {\n    height: 100%; }\n    :host .sidenav-header div img {\n      height: 100%; }\n\n:host footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n  :host footer p {\n    padding-left: 25px; }\n\n:host .logo {\n  height: 100%; }\n  :host .logo img {\n    height: 100%; }\n\n:host .wrapper {\n  padding: 20px 70px; }\n  @media screen and (max-width: 960px) {\n    :host .wrapper {\n      padding: 15px; } }\n  :host .wrapper header {\n    padding: 0 10px; }\n  :host .wrapper.wrapper-box {\n    max-width: 1200px;\n    margin: 0 auto; }\n\n:host /deep/ .mat-drawer-content {\n  margin-left: 300px; }\n\npx-gdn-sideitem {\n  color: '#00ffff'; }\n\n.sidebar-logo {\n  width: 100%;\n  max-width: 60px;\n  margin-top: 5px; }\n\n.dashboard-logo {\n  display: inline;\n  vertical-align: middle; }\n\n.logo-text {\n  display: inline;\n  vertical-align: middle;\n  font-family: 'Avenir';\n  color: #C8385E; }\n\n.wine-logo {\n  text-decoration: none;\n  font-size: 40px; }\n\n.dashboard-navbar {\n  background: #424242 !important; }\n\n.sidebar-icons {\n  font-size: 18px;\n  margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resize_resize_service__ = __webpack_require__("../../../../../src/app/resize/resize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainPageComponent = (function () {
    function MainPageComponent(resizeService, authService, router) {
        this.resizeService = resizeService;
        this.authService = authService;
        this.router = router;
        // Add router animation
        this.routerAnimation = true;
        // Applying theme class
        this.darkTheme = true;
        this._sidenavMode = 'over';
        this._boxedLayout = false;
        this.sideNavOpened = false;
        // Data for messages at popup
        this.messages = [
            {
                subject: 'Monthly report',
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                image: 'assets/avatars/4040.png',
                time: '18:05'
            },
            {
                subject: 'Holiday party',
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                image: 'assets/avatars/4040.png',
                time: '3 hrs ago'
            },
            {
                subject: 'Salary bonus',
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                image: 'assets/avatars/4040.png',
                time: '2 days ago'
            }
        ];
        this.panelOpenState = false;
        this.onResize();
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    MainPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Resize after sidenav open on startup to draw charts correctly
        setTimeout(function () { return _this.resizeService.resizeInformer$.next(); }, 500);
        setTimeout(function () { return _this.sideNavOpened = true; }, 0);
    };
    Object.defineProperty(MainPageComponent.prototype, "sidenavMode", {
        get: function () {
            return this._sidenavMode;
        },
        set: function (val) {
            var _this = this;
            this._sidenavMode = val;
            setTimeout(function () { return _this.resizeService.resizeInformer$.next(); }, 500);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainPageComponent.prototype, "boxedLayout", {
        get: function () {
            return this._boxedLayout;
        },
        set: function (val) {
            var _this = this;
            this._boxedLayout = val;
            setTimeout(function () { return _this.resizeService.resizeInformer$.next(); }, 500);
        },
        enumerable: true,
        configurable: true
    });
    MainPageComponent.prototype.onResize = function () {
        if (window.innerWidth < 800) {
            this.sideNavOpened = false;
            this._sidenavMode = 'over';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], MainPageComponent.prototype, "routerAnimation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.dark-theme'),
        __metadata("design:type", Object)
    ], MainPageComponent.prototype, "darkTheme", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MainPageComponent.prototype, "onResize", null);
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__("../../../../../src/app/pages/main-page/main-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/main-page/main-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__utils_page_animation__["a" /* routerAnimation */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resize_resize_service__["a" /* ResizeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resize_resize_service__["a" /* ResizeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], MainPageComponent);
    return MainPageComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/menu-page/menu-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Menu</h3>\r\n  </header>\r\n  <article fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"33\">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <p>You clicked on: {{ selected }}</p>\r\n\r\n          <mat-toolbar>\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Open basic menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item *ngFor=\"let item of items\" (click)=\"select(item.text)\" [disabled]=\"item.disabled\">\r\n                {{ item.text }}\r\n              </button>\r\n            </mat-menu>\r\n          </mat-toolbar>\r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <p> Clicking these will navigate:</p>\r\n          <mat-toolbar>\r\n            <button mat-icon-button [matMenuTriggerFor]=\"anchorMenu\" aria-label=\"Open anchor menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n          </mat-toolbar>\r\n\r\n          <mat-menu #anchorMenu=\"matMenu\">\r\n            <a mat-menu-item *ngFor=\"let item of items\" href=\"/\" [disabled]=\"item.disabled\">\r\n              {{ item.text }}\r\n            </a>\r\n          </mat-menu>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"33\">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <p>xPosition after and yPosition below</p>\r\n          <mat-toolbar>\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menuBelow\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n          </mat-toolbar>\r\n          <mat-menu #menuBelow=\"matMenu\" xPosition=\"after\" yPosition=\"below\">\r\n            <button mat-menu-item *ngFor=\"let item of items\" [disabled]=\"item.disabled\">\r\n              {{ item.text }}\r\n            </button>\r\n          </mat-menu>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <p>xPosition after and yPosition above</p>\r\n          <mat-toolbar>\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menuAfter\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n          </mat-toolbar>\r\n          <mat-menu #menuAfter=\"matMenu\" xPosition=\"after\" yPosition=\"above\">\r\n            <button mat-menu-item *ngFor=\"let item of items\" [disabled]=\"item.disabled\">\r\n              {{ item.text }}\r\n            </button>\r\n          </mat-menu>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"33\">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <p>xPosition before and yPosition below</p>\r\n          <mat-toolbar class=\"end-icon\">\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menuAbove\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n          </mat-toolbar>\r\n          <mat-menu #menuAbove=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\r\n            <button mat-menu-item *ngFor=\"let item of iconItems\" [disabled]=\"item.disabled\">\r\n              <mat-icon>{{ item.icon }}</mat-icon>\r\n              {{ item.text }}\r\n            </button>\r\n          </mat-menu>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <p>xPosition before and yPosition above</p>\r\n          <mat-toolbar class=\"end-icon\">\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menuBefore\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n          </mat-toolbar>\r\n          <mat-menu #menuBefore=\"matMenu\" xPosition=\"before\" yPosition=\"above\">\r\n            <button mat-menu-item *ngFor=\"let item of iconItems\" [disabled]=\"item.disabled\">\r\n              <mat-icon>{{ item.icon }}</mat-icon>\r\n              {{ item.text }}\r\n            </button>\r\n          </mat-menu>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/menu-page/menu-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".end-icon {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/menu-page/menu-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuPageComponent = (function () {
    function MenuPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        this.selected = '';
        this.items = [
            { text: 'Refresh' },
            { text: 'Settings' },
            { text: 'Help', disabled: true },
            { text: 'Sign Out' }
        ];
        this.iconItems = [
            { text: 'Redial', icon: 'dialpad' },
            { text: 'Check voicemail', icon: 'voicemail', disabled: true },
            { text: 'Disable alerts', icon: 'notifications_off' }
        ];
    }
    MenuPageComponent.prototype.select = function (text) { this.selected = text; };
    MenuPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], MenuPageComponent.prototype, "routerAnimation", void 0);
    MenuPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu-page',
            template: __webpack_require__("../../../../../src/app/pages/menu-page/menu-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/menu-page/menu-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], MenuPageComponent);
    return MenuPageComponent;
}());

//# sourceMappingURL=menu-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi-language-page/multi-language-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Multi language</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-select class=\"push-bottom-xl\" placeholder=\"Select language\" [ngModel]=\"'en'\" (change)=\"changeLanguage($event)\">\r\n          <mat-option [value]=\"'en'\">{{'ENGLISH' | translate}}</mat-option>\r\n          <mat-option [value]=\"'de'\">{{'GERMAN' | translate}}</mat-option>\r\n        </mat-select>\r\n        <div>{{'NODEJS' | translate}}</div>\r\n        <div echarts [options]=\"lineChartOption\" (chartInit)=\"chartInstances.push($event)\" class=\"line-chart\"></div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/multi-language-page/multi-language-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line-chart {\n  height: 350px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/multi-language-page/multi-language-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiLanguagePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__ = __webpack_require__("../../../../../src/app/resize/resize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_colors__ = __webpack_require__("../../../../../src/app/utils/colors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MultiLanguagePageComponent = (function () {
    function MultiLanguagePageComponent(translateService, resizeService) {
        var _this = this;
        this.translateService = translateService;
        this.resizeService = resizeService;
        // Chart instances used for resizing after layout changes
        this.chartInstances = [];
        this.resizeSubscription = resizeService.resizeInformer$.subscribe(function () { return _this.chartInstances.forEach(function (chart) { return chart.resize(); }); });
    }
    MultiLanguagePageComponent.prototype.ngOnInit = function () {
        this.createLineChartModel();
    };
    MultiLanguagePageComponent.prototype.ngOnDestroy = function () {
        this.resizeSubscription.unsubscribe();
    };
    MultiLanguagePageComponent.prototype.changeLanguage = function (event) {
        // Change selected language
        this.translateService.use(event.value);
        this.lineChartOption = this.createLineChartModel();
        this.createLineChartModel();
    };
    MultiLanguagePageComponent.prototype.createLineChartModel = function () {
        var _this = this;
        this.translateService.get(['DAY', 'NIGHT', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY',
            'SUNDAY']).subscribe(function (translation) {
            _this.lineChartOption = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: [translation['DAY'], translation['NIGHT']],
                    bottom: 0,
                    textStyle: {
                        color: __WEBPACK_IMPORTED_MODULE_3__utils_colors__["a" /* CHART_TEXT_COLOR */]
                    }
                },
                grid: {
                    bottom: 80
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [translation['MONDAY'], translation['TUESDAY'], translation['WEDNESDAY'], translation['THURSDAY'],
                        translation['FRIDAY'], translation['SATURDAY'], translation['SUNDAY']],
                    axisLabel: {
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_3__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisTicks: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_3__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_3__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C',
                        textStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_3__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisTicks: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_3__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: __WEBPACK_IMPORTED_MODULE_3__utils_colors__["a" /* CHART_TEXT_COLOR */]
                        }
                    }
                },
                series: [
                    {
                        name: translation['DAY'],
                        type: 'line',
                        data: [11, 11, 15, 13, 12, 13, 10],
                        markPoint: {
                            data: [
                                { type: 'max', name: 'Max' },
                                { type: 'min', name: 'Min' }
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: 'Average' }
                            ]
                        },
                        itemStyle: {
                            normal: {
                                color: __WEBPACK_IMPORTED_MODULE_3__utils_colors__["b" /* MAT_DEEP_ORANGE */]._500
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: __WEBPACK_IMPORTED_MODULE_3__utils_colors__["b" /* MAT_DEEP_ORANGE */]._500
                            }
                        }
                    },
                    {
                        name: translation['NIGHT'],
                        type: 'line',
                        data: [1, -2, 2, 5, 3, 2, 0],
                        markPoint: {
                            data: [
                                { name: '', value: -2, xAxis: 1, yAxis: -1.5 }
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '' },
                                [{
                                        symbol: 'none',
                                        x: '90%',
                                        yAxis: 'max'
                                    }, {
                                        symbol: 'circle',
                                        label: {
                                            normal: {
                                                position: 'start',
                                                formatter: ''
                                            }
                                        },
                                        type: 'max',
                                        name: ''
                                    }]
                            ]
                        },
                        lineStyle: {
                            normal: {
                                color: __WEBPACK_IMPORTED_MODULE_3__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: __WEBPACK_IMPORTED_MODULE_3__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                            }
                        }
                    }
                ]
            };
        });
    };
    MultiLanguagePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-multi-language-page',
            template: __webpack_require__("../../../../../src/app/pages/multi-language-page/multi-language-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/multi-language-page/multi-language-page.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */]) === "function" && _b || Object])
    ], MultiLanguagePageComponent);
    return MultiLanguagePageComponent;
    var _a, _b;
}());

//# sourceMappingURL=multi-language-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <article class=\"white-text-color text-center\">\r\n    <h1>404</h1>\r\n    <h5 class=\"push-top-lg\">PAGE NOT FOUND</h5>\r\n    <button mat-raised-button color=\"primary\" routerLink=\"/\">HOME PAGE</button>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\nsection {\n  width: 100%;\n  height: 100%;\n  background: url(\"/assets/custom-pages/404-bg.jpg\") no-repeat center;\n  background-size: cover;\n  color: #FFF; }\n  section article {\n    position: absolute;\n    top: 55%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); }\n  @media screen and (min-width: 600px) {\n    section h1 {\n      font-size: 200px; } }\n  section button {\n    margin-top: 120px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
        // Add router animation
        this.routerAnimation = true;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], PageNotFoundComponent.prototype, "routerAnimation", void 0);
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pie-chart-page/pie-chart-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Pie Chart</h3>\r\n  </header>\r\n  <article>\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"50\">\r\n        <mat-card>\r\n          <mat-card-title>Customized</mat-card-title>\r\n          <mat-card-content>\r\n            <div echarts [options]=\"customizedOption\" (chartInit)=\"chartInstances.push($event)\" class=\"chart\"></div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Doughnut</mat-card-title>\r\n          <mat-card-content>\r\n            <div echarts [options]=\"doughnutOption\" (chartInit)=\"chartInstances.push($event)\" class=\"chart\"></div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"50\">\r\n        <mat-card>\r\n          <mat-card-title>Nested</mat-card-title>\r\n          <mat-card-content>\r\n            <div echarts [options]=\"nestedOption\" (chartInit)=\"chartInstances.push($event)\" class=\"chart\"></div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/pie-chart-page/pie-chart-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart {\n  height: 400px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pie-chart-page/pie-chart-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_colors__ = __webpack_require__("../../../../../src/app/utils/colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__ = __webpack_require__("../../../../../src/app/resize/resize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PieChartPageComponent = (function () {
    function PieChartPageComponent(resizeService) {
        var _this = this;
        this.resizeService = resizeService;
        // Add router animation
        this.routerAnimation = true;
        // Chart instances used for resizing after layout changes
        this.chartInstances = [];
        // Model for customized pie chart
        this.customizedOption = {
            title: {
                text: 'Some title',
                left: 'center',
                top: 20,
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: 'Series 1',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: 'First' },
                        { value: 310, name: 'Second' },
                        { value: 274, name: 'Third' },
                        { value: 235, name: 'Fourth' },
                        { value: 400, name: 'Fifth' }
                    ].sort(function (a, b) {
                        return a.value - b.value;
                    }),
                    roseType: 'angle',
                    label: {
                        normal: {
                            textStyle: {
                                color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                            },
                            smooth: 0,
                            length: 15,
                            length2: 25
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500,
                            shadowBlur: 100,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: 200
                }
            ]
        };
        // Model for doughnut chart
        this.doughnutOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            },
            series: [
                {
                    name: 'Some contactData',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: 'First', color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._300 },
                        { value: 310, name: 'Second', color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._400 },
                        { value: 234, name: 'Third', color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500 },
                        { value: 135, name: 'Fourth', color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._600 },
                        { value: 1548, name: 'Fifth', color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._700 }
                    ],
                    itemStyle: {
                        normal: {
                            color: function (val) { return val.data.color; },
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                }
            ]
        };
        // Model for nested pie chart
        this.nestedOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7'],
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            },
            series: [
                {
                    name: 'Some contactData',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: 'Data 1', selected: true, color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._300 },
                        { value: 679, name: 'Data 2', color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._400 },
                        { value: 1548, name: 'Data 3', color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500 }
                    ],
                    itemStyle: {
                        normal: {
                            color: function (val) { return val.data.color; },
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                },
                {
                    name: 'Some contactData',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    data: [
                        { value: 335, name: 'Data 1', color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._300 },
                        { value: 310, name: 'Data 4', color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._600 },
                        { value: 234, name: 'Data 5', color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._700 },
                        { value: 135, name: 'Data 6', color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._800 },
                        { value: 1048, name: 'Data 7', color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._900 },
                    ],
                    itemStyle: {
                        normal: {
                            color: function (val) { return val.data.color; },
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                }
            ]
        };
        this.resizeSubscription = resizeService.resizeInformer$.subscribe(function () { return _this.chartInstances.forEach(function (chart) { return chart.resize(); }); });
    }
    PieChartPageComponent.prototype.ngOnInit = function () {
    };
    PieChartPageComponent.prototype.ngOnDestroy = function () {
        this.resizeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], PieChartPageComponent.prototype, "routerAnimation", void 0);
    PieChartPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pie-chart-page',
            template: __webpack_require__("../../../../../src/app/pages/pie-chart-page/pie-chart-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pie-chart-page/pie-chart-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */]) === "function" && _a || Object])
    ], PieChartPageComponent);
    return PieChartPageComponent;
    var _a;
}());

//# sourceMappingURL=pie-chart-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/portfolio-page/portfolio-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header class=\"text-center\">\r\n    <h5>Portfolio</h5>\r\n    <div class=\"mat-subhead\">\r\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis dolorum ducimus placeat possimus\r\n      provident qui reprehenderit tempore totam voluptatibus.\r\n    </div>\r\n  </header>\r\n  <article class=\"push-top\">\r\n    <mat-grid-list [cols]=\"gridColumns\" [rowHeight]=\"rowHeight\">\r\n      <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n        <div class=\"grid\">\r\n          <figure class=\"effect-lily\">\r\n            <div class=\"picture\" style=\"background-image: url('assets/portfolio/480360.png')\"></div>\r\n            <figcaption>\r\n              <div>\r\n                <h2>Nice <span>Lily</span></h2>\r\n                <p>Lily likes to play with crayons and pencils</p>\r\n              </div>\r\n              <a>View more</a>\r\n            </figcaption>\r\n          </figure>\r\n        </div>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n        <div class=\"grid\">\r\n          <figure class=\"effect-oscar\">\r\n            <div class=\"picture\" style=\"background-image: url('assets/portfolio/480360.png')\"></div>\r\n            <figcaption>\r\n              <h2>Warm <span>Oscar</span></h2>\r\n              <p>Oscar is a decent man. He used to clean porches with pleasure.</p>\r\n              <a>View more</a>\r\n            </figcaption>\r\n          </figure>\r\n        </div>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n        <div class=\"grid\">\r\n          <figure class=\"effect-layla\">\r\n            <div class=\"picture\" style=\"background-image: url('assets/portfolio/480360.png')\"></div>\r\n            <figcaption>\r\n              <h2>Crazy <span>Layla</span></h2>\r\n              <p>When Layla appears, she brings an eternal summer along.</p>\r\n              <a>View more</a>\r\n            </figcaption>\r\n          </figure>\r\n        </div>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n        <div class=\"grid\">\r\n          <figure class=\"effect-marley\">\r\n            <div class=\"picture\" style=\"background-image: url('assets/portfolio/480360.png')\"></div>\r\n            <figcaption>\r\n              <h2>Sweet <span>Marley</span></h2>\r\n              <p>Marley tried to convince her but she was not interested.</p>\r\n              <a>View more</a>\r\n            </figcaption>\r\n          </figure>\r\n        </div>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n        <div class=\"grid\">\r\n          <figure class=\"effect-ruby\">\r\n            <div class=\"picture\" style=\"background-image: url('assets/portfolio/480360.png')\"></div>\r\n            <figcaption>\r\n              <h2>Glowing <span>Ruby</span></h2>\r\n              <p>Ruby did not need any help. Everybody knew that.</p>\r\n              <a>View more</a>\r\n            </figcaption>\r\n          </figure>\r\n        </div>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n        <div class=\"grid\">\r\n          <figure class=\"effect-roxy\">\r\n            <div class=\"picture\" style=\"background-image: url('assets/portfolio/480360.png')\"></div>\r\n            <figcaption>\r\n              <h2>Charming <span>Roxy</span></h2>\r\n              <p>Roxy was my best friend. She'd cross any border for me.</p>\r\n              <a>View more</a>\r\n            </figcaption>\r\n          </figure>\r\n        </div>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n        <div class=\"grid\">\r\n          <figure class=\"effect-bubba\">\r\n            <div class=\"picture\" style=\"background-image: url('assets/portfolio/480360.png')\"></div>\r\n            <figcaption>\r\n              <h2>Fresh <span>Bubba</span></h2>\r\n              <p>Bubba likes to appear out of thin air.</p>\r\n              <a>View more</a>\r\n            </figcaption>\r\n          </figure>\r\n        </div>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n        <div class=\"grid\">\r\n          <figure class=\"effect-romeo\">\r\n            <div class=\"picture\" style=\"background-image: url('assets/portfolio/480360.png')\"></div>\r\n            <figcaption>\r\n              <h2>Wild <span>Romeo</span></h2>\r\n              <p>Romeo never knows what he wants. He seemed to be very cross about something.</p>\r\n              <a>View more</a>\r\n            </figcaption>\r\n          </figure>\r\n        </div>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n        <div class=\"grid\">\r\n          <figure class=\"effect-chico\">\r\n            <div class=\"picture\" style=\"background-image: url('assets/portfolio/480360.png')\"></div>\r\n            <figcaption>\r\n              <h2>Silly <span>Chico</span></h2>\r\n              <p>Chico's main fear was missing the morning bus.</p>\r\n              <a>View more</a>\r\n            </figcaption>\r\n          </figure>\r\n        </div>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/portfolio-page/portfolio-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header .mat-subhead {\n  max-width: 600px;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/portfolio-page/portfolio-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioPageComponent = (function () {
    function PortfolioPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        // Subscription to client width change
        this.gridColumns = 3;
        // Height of grid rows
        this.rowHeight = 360;
    }
    PortfolioPageComponent.prototype.ngOnInit = function () {
        this.onResize();
    };
    PortfolioPageComponent.prototype.onResize = function () {
        if (window.innerWidth < 1150) {
            this.gridColumns = 1;
        }
        else if (window.innerWidth < 1500) {
            this.gridColumns = 2;
        }
        else {
            this.gridColumns = 3;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], PortfolioPageComponent.prototype, "routerAnimation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PortfolioPageComponent.prototype, "onResize", null);
    PortfolioPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-portfolio-page',
            template: __webpack_require__("../../../../../src/app/pages/portfolio-page/portfolio-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/portfolio-page/portfolio-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioPageComponent);
    return PortfolioPageComponent;
}());

//# sourceMappingURL=portfolio-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pricing-tables-page/pricing-tables-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header class=\"text-center\">\r\n    <h5>Pricing Plans</h5>\r\n    <div class=\"mat-subhead\">\r\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis dolorum ducimus placeat possimus\r\n      provident qui reprehenderit tempore totam voluptatibus. At doloribus possimus praesentium quam ut! Deserunt,\r\n      excepturi tempore? Magnam.\r\n    </div>\r\n  </header>\r\n  <article class=\"push-top\">\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n      <mat-card fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\" class=\"pricing-card text-center\" *ngFor=\"let item of prisingItems\">\r\n        <mat-card-content>\r\n          <div class=\"pricing-icon\">\r\n            <div>\r\n              <img src=\"{{item.icon}}\">\r\n            </div>\r\n          </div>\r\n          <h6 class=\"primary-color push-top-xl\">{{item.title}}</h6>\r\n          <div fxLayou=\"column\" fxLayoutAlign=\"center center\">\r\n            <ul class=\"text-left feature-list\">\r\n              <li *ngFor=\"let feature of item.features\">\r\n                <mat-icon class=\"text-xl primary-color-light\">check</mat-icon>\r\n                {{feature}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-footer>\r\n          <div class=\"mat-display-1\">{{item.price}}</div>\r\n          <div class=\"push-top-md push-bottom-md\">\r\n          <button mat-raised-button color=\"primary\" >SUBSCRIBE</button>\r\n          </div>\r\n        </mat-card-footer>\r\n      </mat-card>\r\n\r\n    </div>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/pricing-tables-page/pricing-tables-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header .mat-subhead {\n  max-width: 600px;\n  margin: 0 auto; }\n\n.mat-card.pricing-card {\n  padding: 30px 30px 120px; }\n  .mat-card.pricing-card .pricing-icon {\n    position: relative;\n    width: 130px;\n    height: 130px;\n    border-radius: 50%;\n    margin: 0 auto; }\n    .mat-card.pricing-card .pricing-icon div {\n      width: 60px;\n      height: 60px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n      border-radius: 50%;\n      padding: 10px; }\n      .mat-card.pricing-card .pricing-icon div img {\n        height: 100%; }\n  .mat-card.pricing-card .feature-list {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    line-height: 28px;\n    min-height: 150px; }\n    .mat-card.pricing-card .feature-list mat-icon {\n      padding-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pricing-tables-page/pricing-tables-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingTablesPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PricingTablesPageComponent = (function () {
    function PricingTablesPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        // Pricing table items
        this.prisingItems = [
            {
                icon: 'assets/pricing-icons/06.svg',
                title: 'STARTUP',
                features: [
                    'A wide palette of colors and textures',
                    'Set of modules to choose from',
                    'Multi language support'
                ],
                price: '$ 1000,00'
            },
            {
                icon: 'assets/pricing-icons/05.svg',
                title: 'BUSINESS',
                features: [
                    'A wide palette of colors and textures',
                    'Set of modules to choose from',
                    'Multi language support',
                    'Promotion advice',
                ],
                price: '$ 2 000,00'
            },
            {
                icon: 'assets/pricing-icons/02.svg',
                title: 'ENTERPRISE',
                features: [
                    'A wide palette of colors and textures',
                    'Set of modules to choose from',
                    'Multi language support',
                    'Promotion advice',
                    'We always have a consultation line',
                ],
                price: '$ 3 000,00'
            }
        ];
    }
    PricingTablesPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], PricingTablesPageComponent.prototype, "routerAnimation", void 0);
    PricingTablesPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pricing-tables-page',
            template: __webpack_require__("../../../../../src/app/pages/pricing-tables-page/pricing-tables-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pricing-tables-page/pricing-tables-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], PricingTablesPageComponent);
    return PricingTablesPageComponent;
}());

//# sourceMappingURL=pricing-tables-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/product-page/product-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper cart-page\">\r\n  <header>\r\n    <h5>Product page</h5>\r\n  </header>\r\n  <article class=\"push-top\">\r\n    <button mat-button routerLink=\"/main/products\">\r\n      <mat-icon class=\"push-right-sm\">arrow_back</mat-icon>\r\n      BACK TO LIST\r\n    </button>\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\" class=\"product-item\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"65\" class=\"text-center\">\r\n        <img src=\"{{selectedItem.image}}\">\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"35\">\r\n        <div class=\"mat-headline\">{{selectedItem.name}}</div>\r\n        <div class=\"secondary-text-color mat-caption\">Item code: {{selectedItem.code}}</div>\r\n        <div class=\"mat-headline accent-color push-top-sm\">EUR {{selectedItem.price}}</div>\r\n        <div class=\"push-top-md\">\r\n          <mat-select [(ngModel)]=\"selectedItem.color\" class=\"push-right\">\r\n            <mat-option *ngFor=\"let color of availableColors\" [value]=\"color\">\r\n              {{color}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-select [(ngModel)]=\"selectedItem.size\">\r\n            <mat-option *ngFor=\"let size of availableSizes\" [value]=\"size\">\r\n              {{size}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n        <div class=\"secondary-text-color push-top-md\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n          Explicabo, sit.\r\n        </div>\r\n        <div class=\"push-top-sm\">\r\n          <button mat-raised-button color=\"primary\">ADD TO CART</button>\r\n          <button mat-icon-button color=\"primary\">\r\n            <mat-icon>favorite</mat-icon>\r\n          </button>\r\n        </div>\r\n        <div class=\"expandable push-top\">\r\n          <button mat-button fxFlexFill (click)=\"detailsOpen = !detailsOpen\">\r\n            <div fxLayout=\"row\">\r\n              <div fxFlex class=\"text-left mat-subhead\">Details</div>\r\n              <div fxFlex class=\"text-right\">\r\n                <mat-icon>{{detailsOpen ? 'remove' : 'add'}}</mat-icon>\r\n              </div>\r\n            </div>\r\n          </button>\r\n        </div>\r\n        <div [tdToggle]=\"!detailsOpen\" class=\"secondary-text-color\">\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda corporis cum dignissimos dolores\r\n          earum, eos est excepturi ipsum nam obcaecati odit quibusdam quisquam rem sed sint tenetur ullam velit.\r\n        </div>\r\n\r\n        <div class=\"expandable push-top-sm\">\r\n          <button mat-button fxFlexFill (click)=\"reviewsOpen = !reviewsOpen\">\r\n            <div fxLayout=\"row\">\r\n              <div fxFlex class=\"text-left mat-subhead\">Reviews</div>\r\n              <div fxFlex class=\"text-right\">\r\n                <mat-icon>{{reviewsOpen ? 'remove' : 'add'}}</mat-icon>\r\n              </div>\r\n            </div>\r\n          </button>\r\n        </div>\r\n        <div [tdToggle]=\"!reviewsOpen\" class=\"secondary-text-color\">\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda corporis cum dignissimos dolores\r\n          earum, eos est excepturi ipsum nam obcaecati odit quibusdam quisquam rem sed sint tenetur ullam velit.\r\n        </div>\r\n\r\n        <div class=\"expandable push-top-sm\">\r\n          <button mat-button fxFlexFill (click)=\"shippingOpen = !shippingOpen\">\r\n            <div fxLayout=\"row\">\r\n              <div fxFlex class=\"text-left mat-subhead\">Shipping & Returns</div>\r\n              <div fxFlex class=\"text-right\">\r\n                <mat-icon>{{shippingOpen ? 'remove' : 'add'}}</mat-icon>\r\n              </div>\r\n            </div>\r\n          </button>\r\n        </div>\r\n        <div [tdToggle]=\"!shippingOpen\" class=\"secondary-text-color\">\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda corporis cum dignissimos dolores\r\n          earum, eos est excepturi ipsum nam obcaecati odit quibusdam quisquam rem sed sint tenetur ullam velit.\r\n        </div>\r\n        <div class=\"push-top-xxl share\" fxLayout=\"row\">\r\n          <div class=\"text-left\" fxFlex>SHARE PRODUCT</div>\r\n          <div class=\"text-right\" fxFlex>\r\n            <button mat-icon-button>\r\n              <mat-icon class=\"mat-headline\" fontSet=\"fontawesome\" fontIcon=\"fa-instagram\"></mat-icon>\r\n            </button>\r\n            <button mat-icon-button>\r\n              <mat-icon class=\"mat-headline\" fontSet=\"fontawesome\" fontIcon=\"fa-twitter\"></mat-icon>\r\n            </button>\r\n            <button mat-icon-button>\r\n              <mat-icon class=\"mat-headline\" fontSet=\"fontawesome\" fontIcon=\"fa-facebook-f\"></mat-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </article>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/product-page/product-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-item img {\n  width: 100%;\n  max-width: 600px; }\n\n.product-item .expandable mat-icon {\n  vertical-align: middle; }\n\n.product-item .expandable .mat-subhead {\n  line-height: 40px; }\n\n.product-item .expandable button {\n  padding: 0; }\n\n.product-item .share {\n  line-height: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/product-page/product-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductPageComponent = (function () {
    function ProductPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        // Product item to show
        this.selectedItem = {
            name: 'HEADPHONES',
            price: 29.99,
            code: 'QR199PK',
            color: 'Pink',
            quantity: 1,
            image: 'assets/products/600600.png',
            size: 'Medium'
        };
        // Some addition order parameters
        this.availableColors = ['Pink', 'Blue', 'White'];
        this.availableSizes = ['Small', 'Medium', 'Large'];
        // Flag to open/close additional sections
        this.detailsOpen = false;
        this.reviewsOpen = false;
        this.shippingOpen = true;
    }
    ProductPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], ProductPageComponent.prototype, "routerAnimation", void 0);
    ProductPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-page',
            template: __webpack_require__("../../../../../src/app/pages/product-page/product-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/product-page/product-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], ProductPageComponent);
    return ProductPageComponent;
}());

//# sourceMappingURL=product-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/products-page/products-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header class=\"text-center\">\r\n    <h5>Products</h5>\r\n    <div class=\"mat-subhead\">\r\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis dolorum ducimus placeat possimus\r\n      provident qui reprehenderit tempore totam voluptatibus.\r\n    </div>\r\n  </header>\r\n  <article fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"50\">\r\n      <mat-card class=\"main-card\">\r\n        <mat-card-content>\r\n          <div class=\"mat-title accent-color\">{{mainProduct.promotion}}</div>\r\n          <a routerLink=\"/main/product\" class=\"main-product\"\r\n             [style.background-image]=\"'url(' + mainProduct.image + ')'\">\r\n          </a>\r\n          <div class=\"text-center\">\r\n            <button mat-raised-button color=\"primary\" class=\"push-right-sm sm push-bottom-sm\">\r\n              <mat-icon>favorite</mat-icon>\r\n            </button>\r\n            <button mat-raised-button color=\"primary\">ADD TO CART\r\n              <mat-icon>add_shopping_cart</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div fxLayout=\"row\" class=\"mat-headline push-top-lg\">\r\n            <div fxFlex=\"50\">{{mainProduct.name}}</div>\r\n            <div fxFlex=\"50\" class=\"primary-color text-right\">$ {{mainProduct.price}}</div>\r\n          </div>\r\n          <div fxLayout=\"row\" class=\"secondary-text-color\">\r\n            <div fxFlex=\"50\">{{mainProduct.description}}</div>\r\n            <div fxFlex=\"50\" class=\"text-right\"><s>$ {{mainProduct.oldPrice}}</s></div>\r\n          </div>\r\n          <div class=\"push-top-sm\">\r\n            <mat-icon>star</mat-icon>\r\n            <mat-icon>star</mat-icon>\r\n            <mat-icon>star</mat-icon>\r\n            <mat-icon>star</mat-icon>\r\n            <mat-icon>star</mat-icon>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"50\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutWrap>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"50\" *ngFor=\"let product of products\">\r\n        <mat-card>\r\n          <mat-card-content>\r\n            <div class=\"mat-title accent-color\">{{product.promotion}}</div>\r\n            <a class=\"product\" routerLink=\"/main/product\"\r\n               [style.background-image]=\"'url(' + product.image + ')'\"></a>\r\n            <div class=\"text-center push-top-xs\">\r\n              <button mat-raised-button color=\"primary\" class=\"push-right-sm push-bottom-sm\">\r\n                <mat-icon>favorite</mat-icon>\r\n              </button>\r\n              <button mat-raised-button color=\"primary\">ADD TO CART\r\n                <mat-icon>add_shopping_cart</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div fxLayout=\"row\" class=\"mat-headline push-top-sm\">\r\n              <div fxFlex=\"50\">{{product.name}}</div>\r\n              <div fxFlex=\"50\" class=\"primary-color text-right\">$ {{product.price}}</div>\r\n            </div>\r\n            <div class=\"secondary-text-color\">\r\n              {{product.description}}\r\n            </div>\r\n            <div class=\"push-top-sm\">\r\n              <mat-icon>star</mat-icon>\r\n              <mat-icon>star</mat-icon>\r\n              <mat-icon>star</mat-icon>\r\n              <mat-icon>star</mat-icon>\r\n              <mat-icon>star</mat-icon>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/products-page/products-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host header .mat-subhead {\n  max-width: 600px;\n  margin: 0 auto; }\n\n:host .mat-card {\n  padding-bottom: 0;\n  padding-top: 0; }\n  :host .mat-card.main-card mat-card-content .main-product {\n    display: block;\n    min-height: 400px;\n    background: no-repeat center;\n    background-size: contain; }\n  :host .mat-card .product {\n    display: block;\n    min-height: 140px;\n    background: no-repeat center;\n    background-size: contain; }\n    @media screen and (max-width: 960px) {\n      :host .mat-card .product {\n        min-height: 400px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/products-page/products-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProductsPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsPageComponent = (function () {
    function ProductsPageComponent(overlay, viewContainerRef) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        // Add router animation
        this.routerAnimation = true;
        // Main product item, that wold be shown first
        this.mainProduct = {
            name: 'Product A',
            description: 'Lorem ipsum',
            promotion: 'Sale',
            image: 'assets/products/600600.png',
            price: 99.99,
            oldPrice: 159.99
        };
        // Secondary product items
        this.products = [
            {
                name: 'Product B',
                description: 'Lorem ipsum',
                promotion: 'Bestseller',
                image: 'assets/products/600600.png',
                price: 99.99
            },
            {
                name: 'Product C',
                description: 'Lorem ipsum',
                promotion: 'New',
                image: 'assets/products/600600.png',
                price: 87.25
            },
            {
                name: 'Product D',
                description: 'Lorem ipsum',
                promotion: 'New',
                image: 'assets/products/600600.png',
                price: 71.99
            },
            {
                name: 'Product F',
                description: 'Lorem ipsum',
                promotion: 'Best proce',
                image: 'assets/products/600600.png',
                price: 68.99
            }
        ];
    }
    ProductsPageComponent.prototype.ngOnInit = function () {
        this.appendCartButton();
    };
    /**
     * Add cart button with fixed position. Because of fixed position is not working correctly inside side nav, it is
     * added vie overlay functionality.
     */
    ProductsPageComponent.prototype.appendCartButton = function () {
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_cdk_overlay__["c" /* OverlayConfig */]();
        config.positionStrategy = this.overlay.position()
            .global().right('50px').bottom('80px');
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(new __WEBPACK_IMPORTED_MODULE_3__angular_cdk_portal__["b" /* ComponentPortal */](CartButtonComponent, this.viewContainerRef));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], ProductsPageComponent.prototype, "routerAnimation", void 0);
    ProductsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products-page',
            template: __webpack_require__("../../../../../src/app/pages/products-page/products-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/products-page/products-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_cdk_overlay__["b" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_cdk_overlay__["b" /* Overlay */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
    ], ProductsPageComponent);
    return ProductsPageComponent;
    var _a, _b;
}());

var CartButtonComponent = (function () {
    function CartButtonComponent() {
    }
    CartButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cart-button',
            template: "\n    <td-notification-count notifications=\"2\">\n      <button mat-fab class=\"cart-btn\" color=\"primary\" routerLink=\"/main/cart\">\n        <mat-icon>shopping_cart</mat-icon>\n      </button>\n    </td-notification-count>\n  "
        })
    ], CartButtonComponent);
    return CartButtonComponent;
}());

//# sourceMappingURL=products-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/progress-bar-page/progress-bar-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Progress bar</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-content>\r\n\r\n        <div>\r\n          <h6>Color:</h6>\r\n          <mat-radio-group [(ngModel)]=\"color\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n            <mat-radio-button value=\"primary\">\r\n              Primary\r\n            </mat-radio-button>\r\n            <mat-radio-button value=\"accent\">\r\n              Accent\r\n            </mat-radio-button>\r\n            <mat-radio-button value=\"warn\">\r\n              Warn\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n\r\n        <div>\r\n          <h6>Mode:</h6>\r\n          <mat-radio-group [(ngModel)]=\"mode\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n            <mat-radio-button value=\"determinate\">\r\n              Determinate\r\n            </mat-radio-button>\r\n            <mat-radio-button value=\"indeterminate\">\r\n              Indeterminate\r\n            </mat-radio-button>\r\n            <mat-radio-button value=\"buffer\">\r\n              Buffer\r\n            </mat-radio-button>\r\n            <mat-radio-button value=\"query\">\r\n              Query\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n\r\n        <div *ngIf=\"mode == 'determinate' || mode == 'buffer'\">\r\n          <label>Progress:</label>\r\n          <mat-slider [(ngModel)]=\"value\"></mat-slider>\r\n        </div>\r\n        <div *ngIf=\"mode == 'buffer'\">\r\n          <label>Buffer:</label>\r\n          <mat-slider [(ngModel)]=\"bufferValue\"></mat-slider>\r\n        </div>\r\n\r\n        <div>\r\n          <mat-progress-bar [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\"></mat-progress-bar>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/progress-bar-page/progress-bar-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-radio-button {\n  margin-right: 20px;\n  margin-bottom: 10px; }\n\n.mat-progress-bar {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/progress-bar-page/progress-bar-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressBarPageComponent = (function () {
    function ProgressBarPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        // Progress bar options
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.bufferValue = 75;
    }
    ProgressBarPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], ProgressBarPageComponent.prototype, "routerAnimation", void 0);
    ProgressBarPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-progress-bar-page',
            template: __webpack_require__("../../../../../src/app/pages/progress-bar-page/progress-bar-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/progress-bar-page/progress-bar-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarPageComponent);
    return ProgressBarPageComponent;
}());

//# sourceMappingURL=progress-bar-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/radar-page/radar-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Radar</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-title>With area</mat-card-title>\r\n      <mat-card-content>\r\n        <div echarts [options]=\"areaOption\" (chartInit)=\"chartInstances.push($event)\" class=\"chart\"></div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-title>With lines</mat-card-title>\r\n      <mat-card-content>\r\n        <div echarts [options]=\"lineOption\" (chartInit)=\"chartInstances.push($event)\" class=\"chart\"></div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/radar-page/radar-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart {\n  height: 600px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/radar-page/radar-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadarPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_colors__ = __webpack_require__("../../../../../src/app/utils/colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__ = __webpack_require__("../../../../../src/app/resize/resize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RadarPageComponent = (function () {
    function RadarPageComponent(resizeService) {
        var _this = this;
        this.resizeService = resizeService;
        // Add router animation
        this.routerAnimation = true;
        // Chart instances used for resizing after layout changes
        this.chartInstances = [];
        // Data for radar chart model
        this.dataBJ = [
            [55, 9, 56, 0.46, 18, 6, 1], [25, 11, 21, 0.65, 34, 9, 2], [56, 7, 63, 0.3, 14, 5, 3], [33, 7, 29, 0.33, 16, 6, 4],
            [42, 24, 44, 0.76, 40, 16, 5], [82, 58, 90, 1.77, 68, 33, 6], [74, 49, 77, 1.46, 48, 27, 7],
            [78, 55, 80, 1.29, 59, 29, 8], [267, 216, 280, 4.8, 108, 64, 9], [185, 127, 216, 2.52, 61, 27, 10],
            [39, 19, 38, 0.57, 31, 15, 11], [41, 11, 40, 0.43, 21, 7, 12], [64, 38, 74, 1.04, 46, 22, 13],
            [108, 79, 120, 1.7, 75, 41, 14], [108, 63, 116, 1.48, 44, 26, 15], [33, 6, 29, 0.34, 13, 5, 16],
            [94, 66, 110, 1.54, 62, 31, 17], [186, 142, 192, 3.88, 93, 79, 18], [57, 31, 54, 0.96, 32, 14, 19],
            [22, 8, 17, 0.48, 23, 10, 20], [39, 15, 36, 0.61, 29, 13, 21], [94, 69, 114, 2.08, 73, 39, 22],
            [99, 73, 110, 2.43, 76, 48, 23], [31, 12, 30, 0.5, 32, 16, 24], [42, 27, 43, 1, 53, 22, 25],
            [154, 117, 157, 3.05, 92, 58, 26], [234, 185, 230, 4.09, 123, 69, 27], [160, 120, 186, 2.77, 91, 50, 28],
            [134, 96, 165, 2.76, 83, 41, 29], [52, 24, 60, 1.03, 50, 21, 30], [46, 5, 49, 0.28, 10, 6, 31]
        ];
        this.dataGZ = [
            [26, 37, 27, 1.163, 27, 13, 1], [85, 62, 71, 1.195, 60, 8, 2], [78, 38, 74, 1.363, 37, 7, 3],
            [21, 21, 36, 0.634, 40, 9, 4], [41, 42, 46, 0.915, 81, 13, 5], [56, 52, 69, 1.067, 92, 16, 6],
            [64, 30, 28, 0.924, 51, 2, 7], [55, 48, 74, 1.236, 75, 26, 8], [76, 85, 113, 1.237, 114, 27, 9],
            [91, 81, 104, 1.041, 56, 40, 10], [84, 39, 60, 0.964, 25, 11, 11], [64, 51, 101, 0.862, 58, 23, 12],
            [70, 69, 120, 1.198, 65, 36, 13], [77, 105, 178, 2.549, 64, 16, 14], [109, 68, 87, 0.996, 74, 29, 15],
            [73, 68, 97, 0.905, 51, 34, 16], [54, 27, 47, 0.592, 53, 12, 17], [51, 61, 97, 0.811, 65, 19, 18],
            [91, 71, 121, 1.374, 43, 18, 19], [73, 102, 182, 2.787, 44, 19, 20], [73, 50, 76, 0.717, 31, 20, 21],
            [84, 94, 140, 2.238, 68, 18, 22], [93, 77, 104, 1.165, 53, 7, 23], [99, 130, 227, 3.97, 55, 15, 24],
            [146, 84, 139, 1.094, 40, 17, 25], [113, 108, 137, 1.481, 48, 15, 26], [81, 48, 62, 1.619, 26, 3, 27],
            [56, 48, 68, 1.336, 37, 9, 28], [82, 92, 174, 3.29, 0, 13, 29], [106, 116, 188, 3.628, 101, 16, 30],
            [118, 50, 0, 1.383, 76, 11, 31]
        ];
        this.dataSH = [
            [91, 45, 125, 0.82, 34, 23, 1], [65, 27, 78, 0.86, 45, 29, 2], [83, 60, 84, 1.09, 73, 27, 3],
            [109, 81, 121, 1.28, 68, 51, 4], [106, 77, 114, 1.07, 55, 51, 5], [109, 81, 121, 1.28, 68, 51, 6],
            [106, 77, 114, 1.07, 55, 51, 7], [89, 65, 78, 0.86, 51, 26, 8], [53, 33, 47, 0.64, 50, 17, 9],
            [80, 55, 80, 1.01, 75, 24, 10], [117, 81, 124, 1.03, 45, 24, 11], [99, 71, 142, 1.1, 62, 42, 12],
            [95, 69, 130, 1.28, 74, 50, 13], [116, 87, 131, 1.47, 84, 40, 14], [108, 80, 121, 1.3, 85, 37, 15],
            [134, 83, 167, 1.16, 57, 43, 16], [79, 43, 107, 1.05, 59, 37, 17], [71, 46, 89, 0.86, 64, 25, 18],
            [97, 71, 113, 1.17, 88, 31, 19], [84, 57, 91, 0.85, 55, 31, 20], [87, 63, 101, 0.9, 56, 41, 21],
            [104, 77, 119, 1.09, 73, 48, 22], [87, 62, 100, 1, 72, 28, 23], [168, 128, 172, 1.49, 97, 56, 24],
            [65, 45, 51, 0.74, 39, 17, 25], [39, 24, 38, 0.61, 47, 17, 26], [39, 24, 39, 0.59, 50, 19, 27],
            [93, 68, 96, 1.05, 79, 29, 28], [188, 143, 197, 1.66, 99, 51, 29], [174, 131, 174, 1.55, 108, 50, 30],
            [187, 143, 201, 1.39, 89, 53, 31]
        ];
        // Radar chart with area model
        this.areaOption = {
            legend: {
                bottom: 5,
                data: ['Data 1', 'Data 2', 'Data 3'],
                itemGap: 20,
                textStyle: {
                    fontSize: 14,
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                },
                selectedMode: 'single'
            },
            radar: {
                indicator: [
                    { name: 'AQI', max: 300 },
                    { name: 'PM2.5', max: 250 },
                    { name: 'PM10', max: 300 },
                    { name: 'CO', max: 5 },
                    { name: 'NO2', max: 200 },
                    { name: 'SO2', max: 100 }
                ],
                shape: 'circle',
                splitNumber: 5,
                splitLine: {},
                splitArea: {
                    show: false
                },
                axisLine: {}
            },
            series: [
                {
                    name: 'Data 1',
                    type: 'radar',
                    lineStyle: {
                        normal: {
                            width: 1,
                            opacity: 0.5
                        }
                    },
                    data: this.dataBJ,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.1
                        }
                    }
                },
                {
                    name: 'Data 2',
                    type: 'radar',
                    lineStyle: {
                        normal: {
                            width: 1,
                            opacity: 0.5
                        }
                    },
                    data: this.dataSH,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["b" /* MAT_DEEP_ORANGE */]._500
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.05
                        }
                    }
                },
                {
                    name: 'Data 3',
                    type: 'radar',
                    lineStyle: {
                        normal: {
                            width: 1,
                            opacity: 0.5
                        }
                    },
                    data: this.dataGZ,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._900
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.05
                        }
                    }
                }
            ]
        };
        // Radar chart with lines model
        this.lineOption = {
            tooltip: {},
            legend: {
                data: ['Allocated Budget', 'Actual Spending'],
                textStyle: {
                    color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["a" /* CHART_TEXT_COLOR */]
                }
            },
            radar: {
                indicator: [
                    { name: 'Sales', max: 6500 },
                    { name: 'Administration', max: 16000 },
                    { name: 'Information Techology', max: 30000 },
                    { name: 'Customer Support', max: 38000 },
                    { name: 'Development', max: 52000 },
                    { name: 'Marketing', max: 25000 }
                ]
            },
            series: [{
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        {
                            value: [4300, 10000, 28000, 35000, 50000, 19000],
                            name: 'Allocated Budget',
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["b" /* MAT_DEEP_ORANGE */]._500
                        },
                        {
                            value: [5000, 14000, 28000, 31000, 42000, 21000],
                            name: 'Actual Spending',
                            color: __WEBPACK_IMPORTED_MODULE_1__utils_colors__["c" /* MAT_LIGHT_BLUE */]._500
                        }
                    ],
                    itemStyle: {
                        normal: {
                            color: function (val) { return val.data.color; }
                        }
                    },
                }]
        };
        this.resizeSubscription = resizeService.resizeInformer$.subscribe(function () { return _this.chartInstances.forEach(function (chart) { return chart.resize(); }); });
    }
    RadarPageComponent.prototype.ngOnInit = function () {
    };
    RadarPageComponent.prototype.ngOnDestroy = function () {
        this.resizeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], RadarPageComponent.prototype, "routerAnimation", void 0);
    RadarPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-radar-page',
            template: __webpack_require__("../../../../../src/app/pages/radar-page/radar-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/radar-page/radar-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resize_resize_service__["a" /* ResizeService */]) === "function" && _a || Object])
    ], RadarPageComponent);
    return RadarPageComponent;
    var _a;
}());

//# sourceMappingURL=radar-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register-page/register-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-6 col-sm-offset-3\">\n  <form (submit)=\"register(newUser)\" class=\"form\" autocomplete=\"on\">\n    <input class=\"form-control\" type=\"text\" placeholder=\"First Name\" name=\"firstName\" [(ngModel)]=\"newUser.firstName\" required>\n    <input class=\"form-control\" type=\"text\" placeholder=\"Last Name\" name=\"lastName\" [(ngModel)]=\"newUser.lastName\" required>\n    <input class=\"form-control\" type=\"text\" placeholder=\"Company\" name=\"company\" [(ngModel)]=\"newUser.contactType\" required>\n    <select class=\"form-control\" name=\"type\" id=\"type\" [(ngModel)]=\"newUser.contactType\" name=\"type\">\n      <option>Producers</option>\n      <option>Seller</option>\n      <option>Both</option>\n    </select>\n    <input class=\"form-control\" type=\"text\" placeholder=\"Domain\" name=\"domain\" [(ngModel)]=\"newUser.website\" required>\n    <input class=\"form-control\" type=\"text\" placeholder=\"Mobile Number\" [(ngModel)]=\"newUser.mobilePhone\" required>\n    <input class=\"form-control\" type=\"email\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"newUser.email\" required>\n    <input class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"email\" [(ngModel)]=\"newUser.password\" required>\n    <select class=\"form-control\" name=\"question\">\n      <option>If you could be a character out of any novel, who would you be?</option>\n      <option>Who was your least favorite boss?</option>\n      <option>What is the name of your favorite relative not in the immediate family?</option>\n      <option>What was your childhood phone number?</option>\n      <option>What is the name of your favorite teacher?</option>\n      <option>Where do you want to retire?</option>\n      <option>What is your dream car?</option>\n      <option>If you won a million dollars, what is the most extravagant purchase you would make?</option>\n      <option>What is the name of your most memorable stuffed animal?</option>\n    </select>\n    <input class=\"form-control\" type=\"text\" placeholder=\"Answer\" name=\"answer\" [(ngModel)]=\"newUser.description\">\n    <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Register\">\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/register-page/register-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  border: none;\n  box-shadow: none;\n  border-bottom: 1px;\n  border-color: #0a84ff;\n  box-shadow: 0px 2px 3px -1px #0084ff;\n  margin: 20px;\n  border-radius: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/register-page/register-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterPageComponent = (function () {
    function RegisterPageComponent(api) {
        var _this = this;
        this.api = api;
        this.newUser = {
            firstName: '',
            lastName: '',
            email: '',
            mobilePhone: '',
            website: '',
            leadSourceSpecificC: 'Webform Contact Us',
            contactType: '',
            recordTypeId: '01228000000SbEwAAK',
            status: 'Interest',
            description: '',
            password: '',
        };
        this.register = function (form) {
            console.log(form);
            _this.api.register(form)
                .subscribe(function (data) {
                console.log(data);
            });
        };
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__("../../../../../src/app/pages/register-page/register-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/register-page/register-page.component.scss")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
    ], RegisterPageComponent);
    return RegisterPageComponent;
    var _a;
}());

//# sourceMappingURL=register-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/scroll-page/scroll-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Scroll</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <div>\r\n          <h6>Controls</h6>\r\n          <div>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onScrollToTop()\">Scroll To Top</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onScrollToLeft()\">Scroll To Left</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onScrollToRight()\">Scroll To Right</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onScrollToBottom()\">Scroll To Bottom</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onScrollToXY(0, 100)\">Scroll To 0,100</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onScrollToXY(10, 10)\">Scroll To 10,10</button>\r\n          </div>\r\n\r\n          <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"stretch\">\r\n            <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"50\">\r\n              <h6>Component</h6>\r\n              <perfect-scrollbar class=\"list-container\">\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut consequuntur dolorem earum iusto labore\r\n                nisi velit voluptas voluptatum. Ad adipisci aut consectetur cum debitis eos eum eveniet hic illum itaque\r\n                laudantium libero, molestias nemo non nulla provident quaerat quam sit, voluptate voluptatum. Dolorum\r\n                excepturi labore quaerat similique! Aliquam atque corporis dolorem error, fugit illo iste odit possimus\r\n                sequi tenetur. Deserunt dolores eum officiis omnis quam quod soluta sunt. Accusantium alias aliquam,\r\n                architecto asperiores blanditiis consectetur distinctio dolores eligendi error est harum, incidunt iure\r\n                maiores minus neque numquam odio officia possimus quia quibusdam quos ratione sit veritatis voluptas\r\n                voluptatibus. Earum?\r\n                oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<br>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda atque autem\r\n                blanditiis consequatur corporis cum, deleniti, dolor eligendi eos eveniet ex exercitationem expedita hic\r\n                in inventore ipsam itaque labore libero maxime mollitia non optio perspiciatis porro possimus\r\n                praesentium quasi quidem reiciendis reprehenderit rerum sunt tempore. Amet, architecto atque culpa\r\n                dolorem ducimus ea exercitationem, facilis fugiat libero maxime molestiae, obcaecati quidem sapiente sed\r\n                suscipit tenetur voluptate! Adipisci aut consequatur cumque deleniti dignissimos distinctio eius facere,\r\n                harum hic in molestiae nemo numquam perferendis perspiciatis quas ratione reiciendis vitae voluptatem? A\r\n                accusantium aperiam architecto dolorem, laudantium necessitatibus quidem ut! Aperiam, aspernatur\r\n                consectetur delectus dignissimos eius enim esse, eum facilis harum itaque labore maiores quasi sint! Ab\r\n                at, atque cupiditate delectus earum harum ipsam maiores nesciunt pariatur reiciendis tempora tenetur\r\n                veniam! Accusantium aliquid asperiores consectetur culpa debitis deleniti deserunt, earum error et eum\r\n                expedita harum illum inventore laboriosam laborum molestiae mollitia nam nihil omnis porro quae qui quia\r\n                quidem reiciendis sunt temporibus ut, voluptatum. Aliquam asperiores consequuntur dolor hic nisi quas\r\n                repellat voluptas! Ad alias amet, aspernatur beatae commodi distinctio earum enim ex exercitationem\r\n                harum incidunt ipsam ipsum laudantium modi pariatur quia quod recusandae rem reprehenderit tempora vel\r\n                veniam, voluptatem voluptates?\r\n              </perfect-scrollbar>\r\n            </div>\r\n\r\n            <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"50\">\r\n              <h6>Directive</h6>\r\n\r\n              <div perfectScrollbar class=\"list-container\">\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus amet at doloribus eaque eum\r\n                expedita impedit ipsa iure libero magni nam placeat rerum, sed suscipit vel voluptatem. Commodi\r\n                doloremque doloribus ducimus fuga id impedit, sed similique voluptas? Consequuntur eaque est harum nam\r\n                sapiente sequi temporibus ut! Aliquid corporis delectus distinctio impedit minus molestiae, natus\r\n                nostrum odit optio ratione. Aperiam consequatur est excepturi laborum neque praesentium unde, vitae.\r\n                Atque, praesentium, ut? Accusantium aliquid assumenda atque aut, eaque, eveniet harum impedit itaque\r\n                iure labore magnam maxime odio perferendis possimus provident quisquam quos repellat repellendus sequi\r\n                sint tempora velit vero? Facere, fuga!\r\n                coooooooooooooooooooooooooooooooooooooooooooooooooocoooooooooooooooooooooooooooooooooooooooooooooooooo<br>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi atque cum dolor dolore dolores\r\n                eaque eligendi eum eveniet facere hic ipsa iure iusto laboriosam magni molestias mollitia non numquam,\r\n                omnis optio placeat possimus provident quas, quia quis quo quos reiciendis repellat reprehenderit\r\n                similique suscipit tempora totam ullam velit vitae voluptatum! Accusantium assumenda aut, blanditiis\r\n                dignissimos, eos error hic molestias mollitia optio perferendis quas quia quo ratione recusandae,\r\n                repellat similique tenetur ullam vitae. Amet aperiam architecto blanditiis debitis deleniti dicta\r\n                dolores, doloribus, illum labore laboriosam maxime nemo omnis quidem quisquam saepe tenetur voluptatum.\r\n                Aspernatur corporis culpa delectus, ducimus eaque enim error, ex hic laborum mollitia nobis, nulla\r\n                quidem quos reprehenderit tempore unde voluptatibus. Esse, natus, voluptates. A at autem ex incidunt\r\n                neque, officiis quis quo recusandae repellendus vel. Ad amet animi aperiam assumenda atque commodi\r\n                debitis eaque eligendi est expedita id itaque laborum libero magni minima nam natus odit placeat quas\r\n                quos recusandae repellendus repudiandae sapiente sequi similique sint tempora, veniam. Ad amet\r\n                asperiores atque autem blanditiis cumque deserunt dignissimos dolores earum, facere fuga incidunt ipsa\r\n                labore laborum laudantium, molestias natus nobis non nostrum, odio quod ratione rem sint suscipit\r\n                tempore totam vero voluptatem. Debitis id quidem quod ullam.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/scroll-page/scroll-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-container {\n  height: 300px;\n  padding: 24px;\n  margin-right: 10px;\n  border: 1px solid #ccc; }\n\nbutton {\n  margin-right: 10px;\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/scroll-page/scroll-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrollPageComponent = (function () {
    function ScrollPageComponent() {
        // Add router animation
        this.routerAnimation = true;
    }
    ScrollPageComponent.prototype.onScrollToXY = function (x, y) {
        this.componentScroll.directiveRef.scrollTo(x, y);
        this.directiveScroll.scrollTo(x, y);
    };
    ScrollPageComponent.prototype.onScrollToTop = function () {
        this.componentScroll.directiveRef.scrollToTop();
        this.directiveScroll.scrollToTop();
    };
    ScrollPageComponent.prototype.onScrollToLeft = function () {
        this.componentScroll.directiveRef.scrollToLeft();
        this.directiveScroll.scrollToLeft();
    };
    ScrollPageComponent.prototype.onScrollToRight = function () {
        this.componentScroll.directiveRef.scrollToRight();
        this.directiveScroll.scrollToRight();
    };
    ScrollPageComponent.prototype.onScrollToBottom = function () {
        this.componentScroll.directiveRef.scrollToBottom();
        this.directiveScroll.scrollToBottom();
    };
    ScrollPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], ScrollPageComponent.prototype, "routerAnimation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ngx_perfect_scrollbar__["PerfectScrollbarComponent"]),
        __metadata("design:type", Object)
    ], ScrollPageComponent.prototype, "componentScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ngx_perfect_scrollbar__["PerfectScrollbarDirective"]),
        __metadata("design:type", Object)
    ], ScrollPageComponent.prototype, "directiveScroll", void 0);
    ScrollPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scroll-page',
            template: __webpack_require__("../../../../../src/app/pages/scroll-page/scroll-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/scroll-page/scroll-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], ScrollPageComponent);
    return ScrollPageComponent;
}());

//# sourceMappingURL=scroll-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sidenav-page/sidenav-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Sidenav</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-title>Basic Use Case</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-sidenav-container>\r\n          <mat-sidenav #start mode=\"side\">\r\n            Start Side Drawer\r\n            <br>\r\n            <button mat-raised-button color=\"primary\" (click)=\"start.close()\">Close</button>\r\n            <br>\r\n            <button mat-raised-button color=\"primary\" (click)=\"end.open()\">Open End Side</button>\r\n            <br>\r\n            <button mat-raised-button color=\"primary\"\r\n                    (click)=\"start.mode = (start.mode == 'push' ? 'over' : (start.mode == 'over' ? 'side' : 'push'))\">\r\n              Toggle Mode\r\n            </button>\r\n            <div>Mode: {{start.mode}}</div>\r\n          </mat-sidenav>\r\n\r\n          <mat-sidenav #end align=\"end\">\r\n            End Side Drawer\r\n            <br>\r\n            <button mat-raised-button color=\"primary\" (click)=\"end.close()\">Close</button>\r\n          </mat-sidenav>\r\n\r\n          <div>\r\n            <div>\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae, cum dolore enim itaque laborum\r\n              maiores modi molestias nulla perferendis quod, repellendus sunt tempore, ut voluptates? A architecto,\r\n              cumque deserunt dicta dignissimos dolores magni maiores minus, nisi non odio possimus tenetur veniam!\r\n              Aliquam cum nisi reiciendis ut vero! Accusamus assumenda blanditiis, consectetur dignissimos ducimus esse\r\n              eum facere fuga illum libero nam nesciunt quaerat, quam quas quia quod quos saepe sed, tenetur voluptas?\r\n              Dolorum eaque ex explicabo facere fugiat pariatur quas recusandae saepe similique unde! Earum hic impedit\r\n              laboriosam maxime minima pariatur placeat repellendus vero! Aspernatur consequuntur deserunt error natus,\r\n              officiis perspiciatis suscipit ut! Blanditiis dolor ipsum non voluptatibus. Aliquid, doloremque eius eos\r\n              iusto necessitatibus nihil nobis optio quam quasi qui quidem quisquam ratione reiciendis vel veniam! Ad,\r\n              adipisci aliquid at consequuntur dignissimos est iusto laboriosam molestias natus non nulla provident\r\n              quaerat, quis quod suscipit tempore tenetur ullam vel voluptates voluptatum?\r\n            </div>\r\n\r\n            <div>\r\n              <header>Sidenav</header>\r\n              <button mat-raised-button color=\"primary\" (click)=\"start.toggle()\">Toggle Start Side Drawer</button>\r\n              <button mat-raised-button color=\"primary\" (click)=\"end.toggle()\">Toggle End Side Drawer</button>\r\n            </div>\r\n          </div>\r\n        </mat-sidenav-container>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-title>Sidenav Already Opened</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-sidenav-container>\r\n          <mat-sidenav #start2 opened mode=\"over\">\r\n            Drawer\r\n          </mat-sidenav>\r\n          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, blanditiis, consectetur eum facere id,\r\n            magnam maxime placeat quidem quod ratione repudiandae soluta veniam veritatis vero voluptas? Amet aperiam\r\n            esse molestiae placeat quam? Animi beatae doloribus dolorum illum laboriosam minus officia quia repellendus\r\n            sequi voluptatem! Beatae doloremque ex labore nostrum repellendus! Alias aliquam consequuntur, deleniti\r\n            dicta ea eius expedita incidunt iure laudantium maxime modi, natus quae quam quasi rem sapiente soluta\r\n            suscipit temporibus totam veritatis! Aperiam et libero nihil quasi quos sed sint velit vero. Ab ad\r\n            aspernatur blanditiis cumque iusto molestiae necessitatibus nobis numquam, obcaecati, odit rem vel vero\r\n            voluptatem!\r\n          </div>\r\n          <div>\r\n            <button mat-raised-button color=\"primary\" (click)=\"start2.toggle()\">Toggle Start Side Drawer</button>\r\n          </div>\r\n        </mat-sidenav-container>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-title>Dynamic Alignment Sidenav</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-sidenav-container>\r\n          <mat-sidenav #dynamicAlignSidenav1 mode=\"side\" [align]=\"invert ? 'end' : 'start'\">Start</mat-sidenav>\r\n          <mat-sidenav #dynamicAlignSidenav2 mode=\"side\" [align]=\"invert ? 'start' : 'end'\">End</mat-sidenav>\r\n\r\n          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur cum dolorum esse\r\n            praesentium quia repellat, sapiente, soluta sunt temporibus tenetur ut? Accusantium aliquam aliquid animi\r\n            architecto aspernatur assumenda atque commodi corporis cupiditate debitis doloremque esse exercitationem\r\n            expedita, impedit, ipsam iusto labore magni, nam nisi nostrum optio quae quidem quo quod quos recusandae\r\n            unde? Accusantium, aliquid at beatae culpa deserunt dignissimos doloribus explicabo facere iure minus\r\n            molestias obcaecati porro saepe soluta totam ullam voluptatum? Aperiam, atque beatae consequuntur corporis\r\n            delectus doloribus eos facilis itaque laborum maiores maxime molestiae placeat quos tenetur unde, veritatis\r\n            voluptate voluptatibus. Amet dignissimos iure magni quae?\r\n          </div>\r\n          <button mat-raised-button color=\"primary\"\r\n                  (click)=\"dynamicAlignSidenav1.toggle(); dynamicAlignSidenav2.toggle()\">\r\n            Toggle sidenavs\r\n          </button>\r\n          <button mat-raised-button color=\"primary\" (click)=\"invert = !invert\">Change sides</button>\r\n        </mat-sidenav-container>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/sidenav-page/sidenav-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  margin: 10px; }\n\n@media screen and (max-width: 900px) {\n  .mat-drawer-container .mat-sidenav {\n    width: auto;\n    min-width: 100px; } }\n\n@media screen and (max-width: 400px) {\n  .mat-drawer-container .mat-sidenav {\n    width: auto;\n    min-width: 50px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/sidenav-page/sidenav-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavPageComponent = (function () {
    function SidenavPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        this.invert = false;
    }
    SidenavPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], SidenavPageComponent.prototype, "routerAnimation", void 0);
    SidenavPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenav-page',
            template: __webpack_require__("../../../../../src/app/pages/sidenav-page/sidenav-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/sidenav-page/sidenav-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavPageComponent);
    return SidenavPageComponent;
}());

//# sourceMappingURL=sidenav-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/account-exist-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 mat-dialog-title>Error</h4>\r\n<div mat-dialog-content>An account with the given email is already exist</div>\r\n<div mat-dialog-actions class=\"dialog-example-buttons\">\r\n  <button mat-button (click)=\"dialogRef.close('First option')\">Close</button>\r\n  <button mat-button (click)=\"dialogRef.close('Second option')\">Login</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/account-exist-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountExistDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountExistDialogComponent = (function () {
    function AccountExistDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AccountExistDialogComponent.prototype.ngOnInit = function () {
    };
    AccountExistDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-example',
            template: __webpack_require__("../../../../../src/app/pages/sign-up-page/account-exist-dialog.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */]) === "function" && _a || Object])
    ], AccountExistDialogComponent);
    return AccountExistDialogComponent;
    var _a;
}());

//# sourceMappingURL=account-exist-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/contact-support-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 mat-dialog-title>Sorry</h4>\r\n<div mat-dialog-content>Your account is suspended</div>\r\n<div mat-dialog-actions class=\"dialog-example-buttons\">\r\n  <button mat-button (click)=\"dialogRef.close('First option')\">Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/contact-support-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSupportDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactSupportDialogComponent = (function () {
    function ContactSupportDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ContactSupportDialogComponent.prototype.ngOnInit = function () {
    };
    ContactSupportDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-example',
            template: __webpack_require__("../../../../../src/app/pages/sign-up-page/contact-support-dialog.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */]) === "function" && _a || Object])
    ], ContactSupportDialogComponent);
    return ContactSupportDialogComponent;
    var _a;
}());

//# sourceMappingURL=contact-support-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/error-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 mat-dialog-title>{{data.title}}</h4>\r\n<div mat-dialog-content>{{data.message}}</div>\r\n\r\n<div *ngIf=\"data.animation\" mat-dialog-actions class=\"dialog-example-buttons\" layout-align=\"center\">\r\n  <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n     width=\"48px\" height=\"60px\" viewBox=\"0 0 24 30\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\r\n    <rect x=\"0\" y=\"10\" width=\"4\" height=\"10\" fill=\"#03A9F4\" opacity=\"0.2\">\r\n      <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n    </rect>\r\n    <rect x=\"8\" y=\"10\" width=\"4\" height=\"10\" fill=\"#03A9F4\"  opacity=\"0.2\">\r\n      <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n    </rect>\r\n    <rect x=\"16\" y=\"10\" width=\"4\" height=\"10\" fill=\"#03A9F4\"  opacity=\"0.2\">\r\n      <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n    </rect>\r\n  </svg>\r\n</div>\r\n<div mat-dialog-actions class=\"dialog-example-buttons\" layout-align=\"center center\">\r\n  <button mat-button (click)=\"dialogRef.close()\">Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/error-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ErrorDialogComponent = (function () {
    function ErrorDialogComponent(dialogRef, data, authService, router, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
    }
    ErrorDialogComponent.prototype.ngOnInit = function () {
    };
    ErrorDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-example',
            template: __webpack_require__("../../../../../src/app/pages/sign-up-page/error-dialog.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["b" /* MatDialog */]) === "function" && _d || Object])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=error-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/password-expire-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 mat-dialog-title>Account Exist</h4>\r\n<div mat-dialog-content>Your account is already exist, but your password is expired. Would you like to get new password on your email.</div>\r\n<div mat-dialog-actions class=\"dialog-example-buttons\">\r\n  <button mat-button (click)=\"dialogRef.close('First option')\">Close</button>\r\n  <button mat-button (click)=\"dialogRef.close('First option')\">Send Password</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/password-expire-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordExpireDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordExpireDialogComponent = (function () {
    function PasswordExpireDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    PasswordExpireDialogComponent.prototype.ngOnInit = function () {
    };
    PasswordExpireDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-example',
            template: __webpack_require__("../../../../../src/app/pages/sign-up-page/password-expire-dialog.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */]) === "function" && _a || Object])
    ], PasswordExpireDialogComponent);
    return PasswordExpireDialogComponent;
    var _a;
}());

//# sourceMappingURL=password-expire-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/sign-in-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 mat-dialog-title>Account Exist</h4>\r\n<div mat-dialog-content>An account with the given email is already exist.</div>\r\n<div mat-dialog-actions class=\"dialog-example-buttons\">\r\n  <button mat-button (click)=\"gotoLogin()\">Goto Login</button>\r\n  <button mat-button (click)=\"signInWithEmail()\">Sign in using same credentials</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/sign-in-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SignInDialogComponent = (function () {
    function SignInDialogComponent(dialogRef, data, authService, router, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
    }
    SignInDialogComponent.prototype.ngOnInit = function () {
    };
    SignInDialogComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.authService.signInRegular(this.data.email, this.data.password)
            .then(function (response) {
            console.log(response);
            _this.dialogRef.close();
            _this.router.navigate(['main/dashboard']);
        }).catch(function (err) { return console.log('error: ' + err); });
    };
    SignInDialogComponent.prototype.gotoLogin = function () {
        this.dialogRef.close();
        this.router.navigate(['/']);
    };
    SignInDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-example',
            template: __webpack_require__("../../../../../src/app/pages/sign-up-page/sign-in-dialog.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["b" /* MatDialog */]) === "function" && _d || Object])
    ], SignInDialogComponent);
    return SignInDialogComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=sign-in-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/sign-up-page.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<section>\r\n  <article>\r\n    <div class=\"text-center mat-card signup-grid\">\r\n\r\n      <span class=\"partner-text\"><b>BECOME A PARTNER</b></span>\r\n      <div fxFlexFill class=\"registration-form\">\r\n        <h6>Please fill out a registration form to join Wine-Oh!</h6>\r\n      </div>\r\n      <div fxFlexFill class=\"registration-form-wrapper form-text\">\r\n        <form (ngSubmit)=\"signUpFormSubmit()\" #signUpForm=\"ngForm\" id=\"signUpForm\">\r\n          <p style=\"text-align: justify; font-family: 'Roboto';\" class=\"\">\r\n            Hi, my name is\r\n            <input placeholder=\"First Name\" name=\"FirstName\" [(ngModel)]=\"form.firstName\" required>\r\n            <input placeholder=\"Last Name\" name=\"LastName\" [(ngModel)]=\"form.lastName\">\r\n            and I would like to create a user account for the wine\r\n            <select name=\"Type\" id=\"id\" [(ngModel)]=\"form.type\">\r\n              <option value=\"seller\">Seller</option>\r\n              <option value=\"producer\">Producer</option>\r\n            </select>\r\n            <input placeholder=\"Company\" name=\"CompanyName\" [(ngModel)]=\"form.company\">\r\n            with the domain\r\n            <input placeholder=\"Domain\" name=\"Domain\" [(ngModel)]=\"form.domain\">.\r\n            My email address is\r\n            <input placeholder=\"Email\" name=\"Email\" [(ngModel)]=\"form.emailWithoutDomain\" (keydown)=\"emailKeyDown($event)\" autocomplete=\"nope\">\r\n            @ <input placeholder=\"Domain\" name=\"Domain2\" ngModel=\"{{form.domain}}\" disabled>.\r\n          </p>\r\n        </form>\r\n      </div>\r\n\r\n      <div fxFlexFill class=\"registration-form\">\r\n        <h6>Authenicate Using</h6>\r\n      </div>\r\n      <!--<button mat-raised-button color=\"primary\" class=\"push-top-sm\" (click)=\"signUp(form)\">-->\r\n        <!--SIGN UP-->\r\n      <!--</button>-->\r\n\r\n      <ul class=\"social-signup-btns\">\r\n        <li>\r\n          <button mat-raised-button color=\"primary\" class=\"push-top-sm email\" (click)=\"passwordLessSignUp(form)\" [disabled]=\"!signUpForm.form.valid\">\r\n\r\n            <span class=\"google-button\">\r\n\r\n            <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n              width=\"30px\" height=\"30px\" viewBox=\"0 0 79.536 79.536\" style=\"enable-background:new 0 0 79.536 79.536;\"\r\n              xml:space=\"preserve\">\r\n\r\n              <path style=\"fill:#03a9f4;\" d=\"M39.773,1.31L0,31.004v47.222h79.536V31.004L39.773,1.31z M28.77,22.499\r\n                c1.167-2.133,2.775-3.739,4.815-4.805c2.035-1.075,4.357-1.616,6.983-1.616c2.214,0,4.191,0.435,5.921,1.292\r\n                c1.729,0.87,3.045,2.094,3.967,3.687c0.9,1.595,1.367,3.334,1.367,5.217c0,2.247-0.694,4.279-2.082,6.097\r\n                c-1.74,2.292-3.961,3.436-6.68,3.436c-0.732,0-1.279-0.122-1.654-0.38c-0.365-0.262-0.621-0.632-0.743-1.129\r\n                c-1.022,1.012-2.231,1.52-3.589,1.52c-1.465,0-2.679-0.507-3.643-1.509c-0.966-1.012-1.447-2.361-1.447-4.031\r\n                c0-2.084,0.578-3.966,1.743-5.672c1.416-2.084,3.218-3.13,5.424-3.13c1.571,0,2.731,0.601,3.475,1.805l0.331-1.468h3.5\r\n                l-1.998,9.479c-0.125,0.606-0.187,0.986-0.187,1.163c0,0.228,0.052,0.38,0.149,0.497c0.099,0.111,0.223,0.165,0.357,0.165\r\n                c0.436,0,0.979-0.248,1.646-0.769c0.901-0.663,1.627-1.574,2.181-2.695c0.554-1.129,0.839-2.299,0.839-3.508\r\n                c0-2.165-0.782-3.977-2.352-5.445c-1.573-1.45-3.77-2.185-6.578-2.185c-2.393,0-4.417,0.487-6.077,1.468\r\n                c-1.66,0.966-2.913,2.343-3.765,4.114c-0.839,1.76-1.258,3.607-1.258,5.52c0,1.856,0.479,3.552,1.411,5.074\r\n                c0.945,1.533,2.26,2.641,3.956,3.345c1.696,0.697,3.643,1.046,5.828,1.046c2.097,0,3.909-0.293,5.432-0.881\r\n                c1.522-0.587,2.739-1.457,3.666-2.641h2.807c-0.88,1.792-2.227,3.192-4.049,4.215c-2.092,1.163-4.64,1.74-7.644,1.74\r\n                c-2.918,0-5.426-0.487-7.542-1.468c-2.121-0.986-3.689-2.434-4.73-4.35c-1.028-1.918-1.535-4.008-1.535-6.268\r\n                C27.017,26.952,27.595,24.64,28.77,22.499z M2.804,31.941l29.344,19.68L2.804,74.333V31.941z M5.033,75.844l34.74-26.885\r\n                l34.729,26.885H5.033z M76.729,74.333L47.391,51.621l29.339-19.68V74.333z M41.205,24.661c0.466,0.531,0.699,1.295,0.699,2.292\r\n                c0,0.891-0.174,1.856-0.513,2.879c-0.334,1.036-0.743,1.826-1.209,2.361c-0.318,0.375-0.658,0.652-0.992,0.826\r\n                c-0.439,0.249-0.906,0.37-1.41,0.37c-0.674,0.006-1.23-0.264-1.691-0.794c-0.45-0.531-0.673-1.346-0.673-2.465\r\n                c0-0.839,0.158-1.805,0.487-2.889c0.329-1.088,0.81-1.916,1.453-2.509c0.647-0.588,1.346-0.881,2.1-0.881\r\n                C40.162,23.856,40.749,24.125,41.205,24.661z\"/>\r\n\r\n            </svg>\r\n\r\n            </span>\r\n        EMAIL\r\n      </button>\r\n        </li>\r\n\r\n        <li>\r\n          <button mat-raised-button color=\"primary\" class=\"push-top-sm btn-google-login\" (click)=\"authenticateUsingGmail(form)\" [disabled]=\"!signUpForm.form.valid\">\r\n\r\n            <span class=\"google-button\">\r\n                      <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                      width=\"25px\" height=\"25px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n                    <path style=\"fill:#FBBB00;\" d=\"M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256\r\n                      c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456\r\n                      C103.821,274.792,107.225,292.797,113.47,309.408z\"/>\r\n                    <path style=\"fill:#518EF8;\" d=\"M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451\r\n                      c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535\r\n                      c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z\"/>\r\n                    <path style=\"fill:#28B446;\" d=\"M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512\r\n                      c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771\r\n                      c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z\"/>\r\n                    <path style=\"fill:#F14336;\" d=\"M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012\r\n                      c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0\r\n                      C318.115,0,375.068,22.126,419.404,58.936z\"/>\r\n                  </svg>\r\n              </span>\r\n        GOOGLE\r\n      </button>\r\n        </li>\r\n        <li><button mat-raised-button color=\"primary\" class=\"push-top-sm btn-block facebook\" (click)=\"authenticateUsingFacebook(form)\" [disabled]=\"!signUpForm.form.valid\">\r\n\r\n          <span class=\"google-button\">\r\n                      <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                      width=\"25px\" height=\"25px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n                    <path style=\"fill:#1976D2;\" d=\"M384,176h-96v-64c0-17.664,14.336-32,32-32h32V0h-64l0,0c-53.024,0-96,42.976-96,96v80h-64v80h64v256\r\n                      h96V256h64L384,176z\"/>\r\n\r\n                    </svg>\r\n\r\n                  </span>\r\n        FACEBOOK\r\n      </button></li>\r\n\r\n      <li><button mat-raised-button color=\"primary\" class=\"push-top-sm btn-block twitter\" (click)=\"authenticateUsingTwitter(form)\" [disabled]=\"!signUpForm.form.valid\">\r\n\r\n        <span class=\"google-button\">\r\n                      <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                      width=\"25px\" height=\"25px\" viewBox=\"0 0 511.537 511.537\" style=\"enable-background:new 0 0 511.537 511.537;\" xml:space=\"preserve\">\r\n                        <path style=\"fill:#65BBF2;\" d=\"M357.038,49.172c-59.284,0.898-105.993,52.098-105.993,111.382v14.372\r\n                        C145.052,156.063,92.954,127.319,35.466,67.137c-34.133,66.47,3.593,122.161,44.912,152.702c-27.846,0-51.2-3.593-69.165-19.761\r\n                        c-1.796-0.898-3.593,0-2.695,1.797c15.27,55.691,67.368,96.112,107.789,107.789c-36.828,0-61.081,5.389-87.13-10.779\r\n                        c-1.796-0.898-3.593,0-2.695,1.796c19.761,54.793,59.284,71.86,116.772,71.86c-28.744,21.558-67.368,43.116-140.126,44.912\r\n                        c-2.695,0-4.491,3.593-1.796,5.389c26.947,22.456,93.418,39.523,186.835,39.523c153.6,0,278.456-136.533,278.456-305.404v-8.982\r\n                        c24.253-8.982,37.726-30.54,44.912-52.098c0-0.898-0.898-1.796-1.797-1.796l-51.2,17.965c-0.898,0-1.796-1.796-0.898-2.695\r\n                        C479.2,92.288,495.368,70.73,502.554,50.07c0,0-0.898-0.898-1.797-0.898c-24.253,9.881-47.607,19.761-65.572,25.151\r\n                        c-2.695,0.898-6.288,0.898-8.982-0.898C414.526,67.137,379.494,49.172,357.038,49.172\"/>\r\n                      </svg>\r\n\r\n                  </span>\r\n        TWITTER\r\n      </button></li>\r\n      </ul>\r\n\r\n      <div class=\"alert alert-danger\" *ngIf=\"errors.general\">{{errors.general}}</div>\r\n      <div class=\"push-top-md\">Already have an account?</div>\r\n      <a routerLink=\"/\" class=\"primary-color\">Login here</a>\r\n    </div>\r\n  </article>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/sign-up-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oswald:300,400,500,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: 'Oswald', sans-serif; }\n\nsection {\n  width: 100%;\n  height: 100%;\n  background: url(\"/assets/svg/blur.jpg\") no-repeat center;\n  background-size: cover; }\n  section .mat-card {\n    width: 600px;\n    padding: 20px 50px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); }\n    @media screen and (max-width: 600px) {\n      section .mat-card {\n        width: 200px; } }\n\n.registration-form-wrapper p {\n  margin: 0 0 10px;\n  font-size: 18px;\n  line-height: 35px; }\n\n.registration-form-wrapper input {\n  border: none;\n  box-shadow: 0px 2px 3px -1px #0a84ff;\n  margin: 2px 5px; }\n\n.registration-form-wrapper input:active,\n.registration-form-wrapper input:focus {\n  border: none;\n  box-shadow: 0px 2px 5px -1px #0a84ff;\n  margin: 2px 5px;\n  outline: none; }\n\n.registration-form-wrapper select {\n  border: none;\n  box-shadow: 0px 2px 3px -1px #0a84ff;\n  margin: 2px 5px; }\n\n.registration-form h6 {\n  font-size: 22px;\n  margin-top: 30px;\n  font-family: 'Oswald', sans-serif; }\n\n.form-text p {\n  font-size: 16px !important;\n  line-height: 50px !important; }\n\n.form-text imput {\n  margin: 2px 3px;\n  width: 35%; }\n\n.form-text imput:focus {\n  margin: 2px 3px; }\n\n.answer-feild {\n  width: 70% !important; }\n\n.partner-text {\n  border-top: 4px double #000;\n  border-bottom: 4px double #000;\n  font-size: 40px;\n  font-family: 'Oswald', sans-serif;\n  font-weight: 300; }\n\n.signup-grid {\n  padding: 60px 50px 40px !important; }\n\n.signup-ques {\n  width: 60% !important; }\n\n.social-signup-btns {\n  padding-left: 0; }\n\n.social-signup-btns li {\n  display: inline-block; }\n\n.email {\n  padding: 3px 15px 3px 60px;\n  border-radius: 3px;\n  margin-top: 10px;\n  margin-right: 5px; }\n\n.btn-google-login {\n  position: relative;\n  background: #de4931;\n  color: #fff;\n  border: 1px solid #de4931;\n  box-shadow: 0 3px 0 #c6422d;\n  padding: 3px 15px 3px 60px;\n  border-radius: 3px;\n  margin-right: 5px; }\n\n.google-button {\n  background: #fff;\n  position: absolute;\n  top: 1px;\n  padding: 4px 7px;\n  left: 1px;\n  height: 32px;\n  border-radius: 3px; }\n\n.facebook {\n  background: #3b5a9a;\n  color: #fff;\n  border: 1px solid #3b5a9a;\n  box-shadow: 0 3px 0 #365089;\n  padding: 3px 15px 3px 60px;\n  border-radius: 3px;\n  margin-top: 10px;\n  margin-right: 5px; }\n\n.twitter {\n  background: #47bbe2;\n  color: #fff;\n  border: 1px solid #47bbe2;\n  box-shadow: 0 3px 0 #40a8cb;\n  padding: 3px 15px 3px 60px;\n  border-radius: 3px;\n  margin-top: 10px;\n  margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/sign-up-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signing_up_dialog_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/signing-up-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_exist_dialog_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/account-exist-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_support_dialog_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/contact-support-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__password_expire_dialog_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/password-expire-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sign_in_dialog_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/sign-in-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__error_dialog_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/error-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SignUpPageComponent = (function () {
    function SignUpPageComponent(router, authService, api, dialog) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.api = api;
        this.dialog = dialog;
        this.form = {
            firstName: 'Kim',
            lastName: 'Berly',
            emailWithoutDomain: 'dt.raheel',
            email: 'dt.raheel@gmail.com',
            domain: 'gmail.com',
            company: 'Developtech',
            type: 'seller'
        };
        this.errors = {
            general: '',
            emailError: ''
        };
        // Add router animation
        this.routerAnimation = true;
        this.authenticateUsingGmail = function (form) {
            form.email = form.emailWithoutDomain + "@" + form.domain;
            _this.authService.signInWithGoogle(_this.form.email)
                .then(function (response) {
                console.log(response);
                _this.authService.getIdToken()
                    .then(function (token) {
                    form.idToken = token;
                    _this.signUp(form);
                });
                // this.router.navigate(['main/dashboard'])
            }).catch(function (err) {
                var errorDialog = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__error_dialog_component__["a" /* ErrorDialogComponent */], {
                    data: {
                        title: 'Provider Error',
                        message: err
                    }
                });
            });
        };
        this.authenticateUsingFacebook = function (form) {
            form.email = form.emailWithoutDomain + "@" + form.domain;
            _this.authService.signInWithFacebook()
                .then(function (response) {
                console.log(response);
                _this.authService.getIdToken()
                    .then(function (token) {
                    form.idToken = token;
                    _this.signUp(form);
                });
            }).catch(function (err) {
                var errorDialog = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__error_dialog_component__["a" /* ErrorDialogComponent */], {
                    data: {
                        title: 'Provider Error',
                        message: err
                    }
                });
            });
        };
        this.authenticateUsingTwitter = function (form) {
            form.email = form.emailWithoutDomain + "@" + form.domain;
            _this.authService.signInWithTwitter()
                .then(function (response) {
                console.log(response);
                _this.authService.getIdToken()
                    .then(function (token) {
                    form.idToken = token;
                    _this.signUp(form);
                });
            }).catch(function (err) {
                var errorDialog = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__error_dialog_component__["a" /* ErrorDialogComponent */], {
                    data: {
                        title: 'Provider Error',
                        message: err
                    }
                });
            });
        };
        this.passwordLessSignUp = function (form) {
            form.email = form.emailWithoutDomain + "@" + form.domain;
            var signingUpDialog = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__signing_up_dialog_component__["a" /* SigningUpDialogComponent */], {
                disableClose: true,
            });
            _this.api.passwordLessRegister(form)
                .subscribe(function (data) {
                signingUpDialog.close();
                if (data.status === 'FAIL') {
                    var errorDialog = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__error_dialog_component__["a" /* ErrorDialogComponent */], {
                        data: {
                            title: data.message,
                            message: data.data
                        }
                    });
                }
                else {
                    _this.authService.passwordLessSignUp(form.email)
                        .then(function (response) { });
                    // this.router.navigate(['main/dashboard']);
                }
            });
            // this.authService.passwordLessSignUp(form.email)
            //   .then()
        };
    }
    SignUpPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.validateAuthUrl(window.location.href)) {
            // const messageBox = this.dialog.open(ErrorDialogComponent, {
            //   data: {
            //     title: 'Please wait',
            //     message: 'Signing In',
            //     animation: true
            //   }
            // });
            var email = window.localStorage.getItem('email');
            var link = window.location.href;
            if (!email) {
                email = window.prompt('Please provide your email for confirmation');
            }
            this.authService.signInWithEmailLink(email, link)
                .then(function (response) {
                _this.authService.getIdToken()
                    .then(function (token) {
                    _this.api.attachUid({ idToken: token })
                        .subscribe(function (response) {
                        console.log(response);
                        _this.router.navigate(['main/dashboard']);
                        // messageBox.close();
                    });
                });
            }).catch(function (error) {
                console.error(error);
            });
        }
    };
    /**
     * Sign up method
     * @param login
     * @param password
     */
    SignUpPageComponent.prototype.signUpFormSubmit = function () {
        console.log('how you doin');
    };
    SignUpPageComponent.prototype.signUp = function (form) {
        var _this = this;
        form.email = form.emailWithoutDomain + "@" + form.domain;
        this.errors.general = '';
        console.log(form);
        var signingUpDialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__signing_up_dialog_component__["a" /* SigningUpDialogComponent */], {
            disableClose: true,
        });
        this.api.register(form)
            .subscribe(function (data) {
            console.log(data);
            if (data.data === 'alreadyExist') {
                signingUpDialog.close();
                var accountExistDialog = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__account_exist_dialog_component__["a" /* AccountExistDialogComponent */]);
            }
            else if (data.data === 'contactSupport') {
                signingUpDialog.close();
                var contactSupportDialog = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__contact_support_dialog_component__["a" /* ContactSupportDialogComponent */]);
            }
            else if (data.data === 'sendPassword') {
                signingUpDialog.close();
                var passwordExpireDialog = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__password_expire_dialog_component__["a" /* PasswordExpireDialogComponent */]);
            }
            else if (data.data === 'goSignIn') {
                signingUpDialog.close();
                var signInDialog = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__sign_in_dialog_component__["a" /* SignInDialogComponent */], {
                    data: {
                        email: form.email,
                        password: form.password
                    }
                });
            }
            else if (data.data.error) {
                signingUpDialog.close();
                var errorDialog = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__error_dialog_component__["a" /* ErrorDialogComponent */], {
                    data: {
                        title: 'Error',
                        message: data.data.message
                    }
                });
            }
            else if (data.status === 'FAIL') {
                signingUpDialog.close();
                var errorDialog = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__error_dialog_component__["a" /* ErrorDialogComponent */], {
                    data: {
                        title: data.message,
                        message: data.data
                    }
                });
            }
            else {
                signingUpDialog.close();
                _this.router.navigate(['main/dashboard']);
            }
        }, function (error) {
            error._body = JSON.parse(error._body);
            console.log(error._body.data);
            _this.errors.general = error._body.data;
            console.log(error._body);
        });
    };
    SignUpPageComponent.prototype.emailKeyDown = function (event) {
        if (event.key === '@')
            return event.preventDefault();
        console.log(event.key);
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], SignUpPageComponent.prototype, "routerAnimation", void 0);
    SignUpPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-up-page',
            template: __webpack_require__("../../../../../src/app/pages/sign-up-page/sign-up-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/sign-up-page/sign-up-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__utils_page_animation__["a" /* routerAnimation */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["b" /* MatDialog */]) === "function" && _d || Object])
    ], SignUpPageComponent);
    return SignUpPageComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=sign-up-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/signing-up-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 mat-dialog-title>Signing Up</h4>\r\n<div mat-dialog-content layout-align=\"center center\">\r\n  <div>Please Wait While We Finish Setting Up Your Account</div>\r\n</div>\r\n<div mat-dialog-actions class=\"dialog-example-buttons\" layout-align=\"center\">\r\n  <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n     width=\"48px\" height=\"60px\" viewBox=\"0 0 24 30\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\r\n    <rect x=\"0\" y=\"10\" width=\"4\" height=\"10\" fill=\"#03A9F4\" opacity=\"0.2\">\r\n      <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n    </rect>\r\n    <rect x=\"8\" y=\"10\" width=\"4\" height=\"10\" fill=\"#03A9F4\"  opacity=\"0.2\">\r\n      <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n    </rect>\r\n    <rect x=\"16\" y=\"10\" width=\"4\" height=\"10\" fill=\"#03A9F4\"  opacity=\"0.2\">\r\n      <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n    </rect>\r\n  </svg>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/sign-up-page/signing-up-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigningUpDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigningUpDialogComponent = (function () {
    function SigningUpDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    SigningUpDialogComponent.prototype.ngOnInit = function () {
    };
    SigningUpDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-example',
            template: __webpack_require__("../../../../../src/app/pages/sign-up-page/signing-up-dialog.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */]) === "function" && _a || Object])
    ], SigningUpDialogComponent);
    return SigningUpDialogComponent;
    var _a;
}());

//# sourceMappingURL=signing-up-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/snackbar-page/snackbar-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Snackbar</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n        <mat-input-container>\r\n          <input matInput value=\"Message saved\" placeholder=\"Message\" #message>\r\n        </mat-input-container>\r\n\r\n        <mat-input-container>\r\n          <input matInput value=\"Cancel\" placeholder=\"Action\" #action>\r\n        </mat-input-container>\r\n        <div>\r\n          <button mat-raised-button color=\"primary\" (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar\r\n          </button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/snackbar-page/snackbar-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-input-container {\n  margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/snackbar-page/snackbar-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackbarPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SnackbarPageComponent = (function () {
    function SnackbarPageComponent(snackBar) {
        this.snackBar = snackBar;
        // Add router animation
        this.routerAnimation = true;
    }
    SnackbarPageComponent.prototype.ngOnInit = function () {
    };
    SnackbarPageComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], SnackbarPageComponent.prototype, "routerAnimation", void 0);
    SnackbarPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-snackbar-page',
            template: __webpack_require__("../../../../../src/app/pages/snackbar-page/snackbar-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/snackbar-page/snackbar-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSnackBar */]) === "function" && _a || Object])
    ], SnackbarPageComponent);
    return SnackbarPageComponent;
    var _a;
}());

//# sourceMappingURL=snackbar-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/spinner-page/spinner-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Progress Spinner</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <div>\r\n          <h6>Color:</h6>\r\n          <mat-radio-group [(ngModel)]=\"color\">\r\n            <mat-radio-button value=\"primary\">\r\n              Primary\r\n            </mat-radio-button>\r\n            <mat-radio-button value=\"accent\">\r\n              Accent\r\n            </mat-radio-button>\r\n            <mat-radio-button value=\"warn\">\r\n              Warn\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n\r\n        <div>\r\n          <h6>Mode:</h6>\r\n          <mat-radio-group [(ngModel)]=\"mode\">\r\n            <mat-radio-button value=\"determinate\">\r\n              Determinate\r\n            </mat-radio-button>\r\n            <mat-radio-button value=\"indeterminate\">\r\n              Indeterminate\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n\r\n        <div *ngIf=\"mode == 'determinate'\">\r\n          <label>Progress:</label>\r\n          <mat-slider [(ngModel)]=\"value\"></mat-slider>\r\n        </div>\r\n\r\n        <mat-progress-spinner [color]=\"color\" [mode]=\"mode\" [value]=\"value\"></mat-progress-spinner>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/spinner-page/spinner-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-radio-button {\n  margin-right: 20px;\n  margin-bottom: 10px; }\n\n.mat-progress-spinner {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/spinner-page/spinner-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerPageComponent = (function () {
    function SpinnerPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        // Spinner parameters
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
    }
    SpinnerPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], SpinnerPageComponent.prototype, "routerAnimation", void 0);
    SpinnerPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spinner-page',
            template: __webpack_require__("../../../../../src/app/pages/spinner-page/spinner-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/spinner-page/spinner-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerPageComponent);
    return SpinnerPageComponent;
}());

//# sourceMappingURL=spinner-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/stepper-page/stepper-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Stepper</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-title>Vertical</mat-card-title>\r\n      <mat-card-content>\r\n        <td-steps>\r\n          <td-step #step1 label=\"Basic Usage\" sublabel=\"Toggle between active and inactive and emit events.\" [active]=\"true\" [disabled]=\"disabled\" (activated)=\"activeStep1Event()\" (deactivated)=\"deactiveStep1Event()\">\r\n            <ng-template td-step-label><span>Basic Usage (template)</span></ng-template>\r\n            Include any content you like for an active stepper\r\n          </td-step>\r\n          <td-step #step2 label=\"Required State\" sublabel=\"Toggle between active and inactive while in required state.\" [state]=\"stateStep2\" [disabled]=\"disabled\">\r\n            This step is required!\r\n            <ng-template td-step-actions>\r\n              <div>\r\n                <button mat-raised-button color=\"primary\" (click)=\"toggleRequiredStep2()\" class=\"text-upper\">Toggle Require</button>\r\n                <button mat-button (click)=\"step2.active = false\" class=\"text-upper\">Cancel</button>\r\n              </div>\r\n            </ng-template>\r\n          </td-step>\r\n          <td-step #step3 label=\"Complete State\" sublabel=\"Toggle between active and inactive while in complete state.\" [state]=\"stateStep3\" [disabled]=\"disabled\">\r\n            Mark this step complete and get a summary\r\n            <ng-template td-step-summary>\r\n              Use an optional step summary to summarize the info in this step\r\n            </ng-template>\r\n            <ng-template td-step-actions>\r\n              <div>\r\n                <button mat-raised-button color=\"primary\" (click)=\"toggleCompleteStep3()\" class=\"text-upper\">Toggle Complete</button>\r\n                <button mat-button (click)=\"step3.active = false\" class=\"text-upper\">Cancel</button>\r\n              </div>\r\n            </ng-template>\r\n          </td-step>\r\n        </td-steps>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-title>Horizontal and responsive</mat-card-title>\r\n      <mat-card-content>\r\n        <td-steps [mode]=\"isScreenGtSm ? 'horizontal' : 'vertical'\">\r\n          <td-step #step1 label=\"Basic Usage\" sublabel=\"Toggle between active and inactive and emit events.\" [active]=\"true\" [disabled]=\"disabled\" (activated)=\"activeStep1Event()\" (deactivated)=\"deactiveStep1Event()\">\r\n            <ng-template td-step-label><span>Basic Usage (template)</span></ng-template>\r\n            Include any content you like for an active stepper\r\n          </td-step>\r\n          <td-step #step2 label=\"Required State\" sublabel=\"Toggle between active and inactive while in required state.\" [state]=\"stateStep2\" [disabled]=\"disabled\">\r\n            This step is required!\r\n            <ng-template td-step-actions>\r\n              <div>\r\n                <button mat-raised-button color=\"primary\" (click)=\"toggleRequiredStep2()\" class=\"text-upper\">Toggle Require</button>\r\n                <button mat-button (click)=\"step2.active = false\" class=\"text-upper\">Cancel</button>\r\n              </div>\r\n            </ng-template>\r\n          </td-step>\r\n          <td-step #step3 label=\"Complete State\" sublabel=\"Toggle between active and inactive while in complete state.\" [state]=\"stateStep3\" [disabled]=\"disabled\">\r\n            Mark this step complete and get a summary\r\n            <ng-template td-step-summary>\r\n              Use an optional step summary to summarize the info in this step\r\n            </ng-template>\r\n            <ng-template td-step-actions>\r\n              <div>\r\n                <button mat-raised-button color=\"primary\" (click)=\"toggleCompleteStep3()\" class=\"text-upper\">Toggle Complete</button>\r\n                <button mat-button (click)=\"step3.active = false\" class=\"text-upper\">Cancel</button>\r\n              </div>\r\n            </ng-template>\r\n          </td-step>\r\n        </td-steps>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/stepper-page/stepper-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/stepper-page/stepper-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepperPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StepperPageComponent = (function () {
    function StepperPageComponent(_mediaService, ngZone) {
        this._mediaService = _mediaService;
        this.ngZone = ngZone;
        // Add router animation
        this.routerAnimation = true;
        // Stepper parameters
        this.activeDeactiveStep1Msg = 'No select/deselect detected yet';
        this.stateStep2 = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* StepState */].Required;
        this.stateStep3 = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* StepState */].Complete;
        this.disabled = false;
        this.isScreenGtSm = false;
    }
    StepperPageComponent.prototype.ngOnInit = function () {
        this.watchScreen();
    };
    StepperPageComponent.prototype.ngOnDestroy = function () {
        this.querySubscription.unsubscribe();
    };
    /**
     * Change stepper layout if screen width changes
     */
    StepperPageComponent.prototype.watchScreen = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.isScreenGtSm = _this._mediaService.query('gt-sm');
        });
        this.querySubscription = this._mediaService.registerQuery('gt-sm').subscribe(function (matches) {
            _this.ngZone.run(function () {
                _this.isScreenGtSm = matches;
            });
        });
    };
    StepperPageComponent.prototype.toggleRequiredStep2 = function () {
        this.stateStep2 = (this.stateStep2 === __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* StepState */].Required ? __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* StepState */].None : __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* StepState */].Required);
    };
    StepperPageComponent.prototype.toggleCompleteStep3 = function () {
        this.stateStep3 = (this.stateStep3 === __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* StepState */].Complete ? __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* StepState */].None : __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* StepState */].Complete);
    };
    StepperPageComponent.prototype.activeStep1Event = function () {
        this.activeDeactiveStep1Msg = 'Active event emitted.';
    };
    StepperPageComponent.prototype.deactiveStep1Event = function () {
        this.activeDeactiveStep1Msg = 'Deactive event emitted.';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], StepperPageComponent.prototype, "routerAnimation", void 0);
    StepperPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stepper-page',
            template: __webpack_require__("../../../../../src/app/pages/stepper-page/stepper-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/stepper-page/stepper-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["l" /* TdMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["l" /* TdMediaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])
    ], StepperPageComponent);
    return StepperPageComponent;
    var _a, _b;
}());

//# sourceMappingURL=stepper-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tab-page/tab-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Tabs</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-title>Dynamic Tabs</mat-card-title>\r\n      <mat-card-content>\r\n        <div>\r\n          Selected tab index:\r\n          <mat-input-container>\r\n            <input matInput type=\"number\" [(ngModel)]=\"activeTabIndex\">\r\n          </mat-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n          <mat-card fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"250px\">\r\n            <mat-card-title>Add New Tab</mat-card-title>\r\n            <mat-card-content>\r\n              <mat-checkbox [(ngModel)]=\"createWithLongContent\">\r\n                Include extra content\r\n              </mat-checkbox>\r\n              <mat-checkbox [(ngModel)]=\"gotoNewTabAfterAdding\">\r\n                Select after adding\r\n              </mat-checkbox>\r\n              <div class=\"push-top\">\r\n                Position:\r\n                <mat-input-container>\r\n                  <input matInput type=\"number\" [(ngModel)]=\"addTabPosition\">\r\n                </mat-input-container>\r\n              </div>\r\n              <button mat-raised-button color=\"primary\" (click)=\"addTab(createWithLongContent)\">\r\n                Add\r\n              </button>\r\n            </mat-card-content>\r\n          </mat-card>\r\n\r\n          <mat-tab-group class=\"tab-group\" dynamicHeight [(selectedIndex)]=\"activeTabIndex\">\r\n            <mat-tab *ngFor=\"let tab of dynamicTabs\" [disabled]=\"tab.disabled\">\r\n              <ng-template matTabLabel>{{tab.label}}</ng-template>\r\n              {{tab.content}}\r\n              <br>\r\n              <br>\r\n              <div *ngIf=\"tab.extraContent\">\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                Praesent efficitur faucibus risus, ac auctor purus porttitor vitae. Phasellus ornare dui nec\r\n                orci posuere, nec luctus mauris semper.\r\n                <br>\r\n                <br>\r\n                Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa orci nec\r\n                magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in condimentum facilisis.\r\n                Etiam in tempor tortor. Vivamus faucibus egestas enim, at convallis diam pulvinar vel.\r\n                Cras ac orci eget nisi maximus cursus. Nunc urna libero, viverra sit amet nisl at, hendrerit\r\n                tempor turpis. Maecenas facilisis convallis mi vel tempor. Nullam vitae nunc leo. Cras sed\r\n                nisl consectetur, rhoncus sapien sit amet, tempus sapien.\r\n                <br>\r\n                <br>\r\n                Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere\r\n                molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat,\r\n                at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est.\r\n                Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.\r\n              </div>\r\n              <br>\r\n              <br>\r\n              <mat-input-container>\r\n                <input matInput placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\">\r\n              </mat-input-container>\r\n              <br><br>\r\n              <button mat-raised-button [disabled]=\"dynamicTabs.length == 1\" (click)=\"deleteTab(tab)\"> Delete Tab\r\n              </button>\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <mat-card-title>Dynamic Height</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-tab-group dynamicHeight>\r\n          <mat-tab *ngFor=\"let tab of tabs\" [disabled]=\"tab.disabled\">\r\n            <ng-template matTabLabel>{{tab.label}}</ng-template>\r\n            {{tab.content}}\r\n            <br>\r\n            <br>\r\n            <div *ngIf=\"tab.extraContent\">\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n              Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n              In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n              feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n              orci enim rutrum enim, vel tempor sapien arcu a tellus. Vivamus convallis sodales ante varius\r\n              gravida. Curabitur a purus vel augue ultrices ultricies id a nisl. Nullam malesuada consequat\r\n              diam, a facilisis tortor volutpat et. Sed urna dolor, aliquet vitae posuere vulputate, euismod\r\n              ac lorem. Sed felis risus, pulvinar at interdum quis, vehicula sed odio. Phasellus in enim\r\n              venenatis, iaculis tortor eu, bibendum ante. Donec ac tellus dictum neque volutpat blandit.\r\n              Praesent efficitur faucibus risus, ac auctor purus porttitor vitae. Phasellus ornare dui nec\r\n              orci posuere, nec luctus mauris semper.\r\n              <br>\r\n              <br>\r\n              Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa orci nec\r\n              magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in condimentum facilisis.\r\n              Etiam in tempor tortor. Vivamus faucibus egestas enim, at convallis diam pulvinar vel.\r\n              Cras ac orci eget nisi maximus cursus. Nunc urna libero, viverra sit amet nisl at, hendrerit\r\n              tempor turpis. Maecenas facilisis convallis mi vel tempor. Nullam vitae nunc leo. Cras sed\r\n              nisl consectetur, rhoncus sapien sit amet, tempus sapien.\r\n              <br>\r\n              <br>\r\n              Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere\r\n              molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat,\r\n              at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est.\r\n              Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <mat-input-container>\r\n              <input matInput placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\">\r\n            </mat-input-container>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <mat-card-title>Fixed Height</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-tab-group style=\"height: 200px\">\r\n          <mat-tab *ngFor=\"let tab of tabs\" [disabled]=\"tab.disabled\">\r\n            <ng-template matTabLabel>{{tab.label}}</ng-template>\r\n            {{tab.content}}\r\n            <br>\r\n            <br>\r\n            <div *ngIf=\"tab.extraContent\">\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n              Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n              In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n              feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n              orci enim rutrum enim, vel tempor sapien arcu a tellus. Vivamus convallis sodales ante varius\r\n              gravida. Curabitur a purus vel augue ultrices ultricies id a nisl. Nullam malesuada consequat\r\n              diam, a facilisis tortor volutpat et. Sed urna dolor, aliquet vitae posuere vulputate, euismod\r\n              ac lorem. Sed felis risus, pulvinar at interdum quis, vehicula sed odio. Phasellus in enim\r\n              venenatis, iaculis tortor eu, bibendum ante. Donec ac tellus dictum neque volutpat blandit.\r\n              Praesent efficitur faucibus risus, ac auctor purus porttitor vitae. Phasellus ornare dui nec\r\n              orci posuere, nec luctus mauris semper.\r\n              <br>\r\n              <br>\r\n              Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa orci nec\r\n              magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in condimentum facilisis.\r\n              Etiam in tempor tortor. Vivamus faucibus egestas enim, at convallis diam pulvinar vel.\r\n              Cras ac orci eget nisi maximus cursus. Nunc urna libero, viverra sit amet nisl at, hendrerit\r\n              tempor turpis. Maecenas facilisis convallis mi vel tempor. Nullam vitae nunc leo. Cras sed\r\n              nisl consectetur, rhoncus sapien sit amet, tempus sapien.\r\n              <br>\r\n              <br>\r\n              Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere\r\n              molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat,\r\n              at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est.\r\n              Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <mat-input-container>\r\n              <input matInput placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\">\r\n            </mat-input-container>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <mat-card-title>Stretched Tabs</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-tab-group style=\"height: 200px\" mat-stretch-tabs dynamicHeight>\r\n          <mat-tab *ngFor=\"let tab of tabs\" [disabled]=\"tab.disabled\">\r\n            <ng-template matTabLabel>{{tab.label}}</ng-template>\r\n            {{tab.content}}\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <mat-card-title>Inverted tabs</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-tab-group headerPosition=\"below\" dynamicHeight>\r\n          <mat-tab label=\"First\">\r\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, repellendus!\r\n          </mat-tab>\r\n          <mat-tab label=\"Second\">\r\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, ipsum!\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <mat-card-title>Async Tabs</mat-card-title>\r\n      <mat-card-subtitle>Will be shown with delay(reload page to see result)</mat-card-subtitle>\r\n      <mat-card-content>\r\n        <mat-tab-group dynamicHeight>\r\n          <mat-tab *ngFor=\"let tab of asyncTabs | async; let i = index\" [disabled]=\"i == 1\">\r\n            <ng-template matTabLabel>{{tab.label}}</ng-template>\r\n            {{tab.content}}\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <mat-input-container>\r\n              <input matInput placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\">\r\n            </mat-input-container>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/tab-page/tab-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .mat-tab-body-content {\n  padding: 12px; }\n\n:host .tab-group {\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tab-page/tab-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabPageComponent = (function () {
    function TabPageComponent(router) {
        var _this = this;
        this.router = router;
        // Add router animation
        this.routerAnimation = true;
        // Data for creating tabs
        this.tabs = [
            {
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Disabled Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            },
        ];
        // Model for selecting tab
        this.activeTabIndex = 0;
        // Model for adding new tab to exact position
        this.addTabPosition = 0;
        // Switch to tab after adding a new one
        this.gotoNewTabAfterAdding = false;
        // Flag for creating next tab with big amount of text
        this.createWithLongContent = false;
        // Model for tabs
        this.dynamicTabs = [
            {
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Disabled Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            },
        ];
        this.asyncTabs = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            setTimeout(function () {
                observer.next(_this.tabs);
            }, 3000);
        });
    }
    TabPageComponent.prototype.addTab = function (includeExtraContent) {
        this.dynamicTabs.splice(this.addTabPosition, 0, {
            label: 'New Tab ' + (this.dynamicTabs.length + 1),
            content: 'New tab contents ' + (this.dynamicTabs.length + 1),
            extraContent: includeExtraContent
        });
        if (this.gotoNewTabAfterAdding) {
            this.activeTabIndex = this.addTabPosition;
        }
    };
    TabPageComponent.prototype.deleteTab = function (tab) {
        this.dynamicTabs.splice(this.dynamicTabs.indexOf(tab), 1);
    };
    TabPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], TabPageComponent.prototype, "routerAnimation", void 0);
    TabPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tab-page',
            template: __webpack_require__("../../../../../src/app/pages/tab-page/tab-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/tab-page/tab-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object])
    ], TabPageComponent);
    return TabPageComponent;
    var _a;
}());

//# sourceMappingURL=tab-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/table-page/table-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Table</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\">\r\n        <span *ngIf=\"!searchBox.searchVisible\" class=\"push-left-sm\">\r\n          <span class=\"mat-title\">Candies</span>\r\n        </span>\r\n          <span *ngIf=\"!searchBox.searchVisible\" class=\"push-left-sm\">\r\n        </span>\r\n          <td-search-box #searchBox backIcon=\"arrow_back\" class=\"push-right-sm\" placeholder=\"Search here\"\r\n                         (searchDebounce)=\"search($event)\" flex>\r\n          </td-search-box>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n        <td-data-table\r\n          #dataTable\r\n          [data]=\"filteredData\"\r\n          [columns]=\"columns\"\r\n          [sortable]=\"true\"\r\n          [sortBy]=\"sortBy\"\r\n          [sortOrder]=\"sortOrder\"\r\n          (sortChange)=\"sort($event)\">\r\n        </td-data-table>\r\n        <div class=\"mat-padding\" *ngIf=\"!dataTable.hasData\" layout=\"row\" layout-align=\"center center\">\r\n          <h3>No results to display.</h3>\r\n        </div>\r\n        <td-paging-bar #pagingBar [pageSize]=\"pageSize\" [total]=\"filteredTotal\" (change)=\"page($event)\" class=\"push-top\">\r\n          <span td-paging-bar-label hide-xs>Row per page:</span>\r\n          {{pagingBar.range}} <span hide-xs>of {{pagingBar.total}}</span>\r\n        </td-paging-bar>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/table-page/table-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/table-page/table-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NUMBER_FORMAT = function (v) { return v; };
var DECIMAL_FORMAT = function (v) { return v.toFixed(2); };
var TablePageComponent = (function () {
    function TablePageComponent(_dataTableService) {
        this._dataTableService = _dataTableService;
        // Add router animation
        this.routerAnimation = true;
        // Table columns model
        this.columns = [
            { name: 'name', label: 'Dessert', sortable: true },
            { name: 'type', label: 'Type' },
            { name: 'calories', label: 'Calories', numeric: true, format: NUMBER_FORMAT, sortable: true },
            { name: 'fat', label: 'Fat (g)', numeric: true, format: DECIMAL_FORMAT, sortable: true },
            { name: 'carbs', label: 'Carbs (g)', numeric: true, format: NUMBER_FORMAT },
            { name: 'protein', label: 'Protein (g)', numeric: true, format: DECIMAL_FORMAT },
            { name: 'sodium', label: 'Sodium (mg)', numeric: true, format: NUMBER_FORMAT },
            { name: 'calcium', label: 'Calcium (%)', numeric: true, format: NUMBER_FORMAT },
            { name: 'iron', label: 'Iron (%)', numeric: true, format: NUMBER_FORMAT },
        ];
        // Table data
        this.data = [
            {
                'id': 1,
                'name': 'Frozen yogurt',
                'type': 'Ice cream',
                'calories': 159.0,
                'fat': 6.0,
                'carbs': 24.0,
                'protein': 4.0,
                'sodium': 87.0,
                'calcium': 14.0,
                'iron': 1.0,
                'comments': 'I love froyo!',
            }, {
                'id': 2,
                'name': 'Ice cream sandwich',
                'type': 'Ice cream',
                'calories': 237.0,
                'fat': 9.0,
                'carbs': 37.0,
                'protein': 4.3,
                'sodium': 129.0,
                'calcium': 8.0,
                'iron': 1.0,
            }, {
                'id': 3,
                'name': 'Eclair',
                'type': 'Pastry',
                'calories': 262.0,
                'fat': 16.0,
                'carbs': 24.0,
                'protein': 6.0,
                'sodium': 337.0,
                'calcium': 6.0,
                'iron': 7.0,
            }, {
                'id': 4,
                'name': 'Cupcake',
                'type': 'Pastry',
                'calories': 305.0,
                'fat': 3.7,
                'carbs': 67.0,
                'protein': 4.3,
                'sodium': 413.0,
                'calcium': 3.0,
                'iron': 8.0,
            }, {
                'id': 5,
                'name': 'Jelly bean',
                'type': 'Candy',
                'calories': 375.0,
                'fat': 0.0,
                'carbs': 94.0,
                'protein': 0.0,
                'sodium': 50.0,
                'calcium': 0.0,
                'iron': 0.0,
            }, {
                'id': 6,
                'name': 'Lollipop',
                'type': 'Candy',
                'calories': 392.0,
                'fat': 0.2,
                'carbs': 98.0,
                'protein': 0.0,
                'sodium': 38.0,
                'calcium': 0.0,
                'iron': 2.0,
            }, {
                'id': 7,
                'name': 'Honeycomb',
                'type': 'Other',
                'calories': 408.0,
                'fat': 3.2,
                'carbs': 87.0,
                'protein': 6.5,
                'sodium': 562.0,
                'calcium': 0.0,
                'iron': 45.0,
            }, {
                'id': 8,
                'name': 'Donut',
                'type': 'Pastry',
                'calories': 452.0,
                'fat': 25.0,
                'carbs': 51.0,
                'protein': 4.9,
                'sodium': 326.0,
                'calcium': 2.0,
                'iron': 22.0,
            }, {
                'id': 9,
                'name': 'KitKat',
                'type': 'Candy',
                'calories': 518.0,
                'fat': 26.0,
                'carbs': 65.0,
                'protein': 7.0,
                'sodium': 54.0,
                'calcium': 12.0,
                'iron': 6.0,
            }, {
                'id': 10,
                'name': 'Chocolate',
                'type': 'Candy',
                'calories': 518.0,
                'fat': 26.0,
                'carbs': 65.0,
                'protein': 7.0,
                'sodium': 54.0,
                'calcium': 12.0,
                'iron': 6.0,
            }, {
                'id': 11,
                'name': 'Chamoy',
                'type': 'Candy',
                'calories': 518.0,
                'fat': 26.0,
                'carbs': 65.0,
                'protein': 7.0,
                'sodium': 54.0,
                'calcium': 12.0,
                'iron': 6.0,
            },
        ];
        // Table parameters
        this.filteredData = this.data;
        this.filteredTotal = this.data.length;
        this.searchTerm = '';
        this.fromRow = 1;
        this.currentPage = 1;
        this.pageSize = 5;
        this.sortBy = 'name';
        this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["k" /* TdDataTableSortingOrder */].Descending;
    }
    TablePageComponent.prototype.ngOnInit = function () {
        this.filter();
    };
    TablePageComponent.prototype.sort = function (sortEvent) {
        this.sortBy = sortEvent.name;
        this.sortOrder = sortEvent.order;
        this.filter();
    };
    TablePageComponent.prototype.search = function (searchTerm) {
        this.searchTerm = searchTerm;
        this.fromRow = 1;
        this.currentPage = 1;
        this.filter();
    };
    TablePageComponent.prototype.page = function (pagingEvent) {
        this.fromRow = pagingEvent.fromRow;
        this.currentPage = pagingEvent.page;
        this.pageSize = pagingEvent.pageSize;
        this.filter();
    };
    TablePageComponent.prototype.filter = function () {
        var newData = this.data;
        newData = this._dataTableService.filterData(newData, this.searchTerm, true);
        this.filteredTotal = newData.length;
        newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
        newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
        this.filteredData = newData;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], TablePageComponent.prototype, "routerAnimation", void 0);
    TablePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-page',
            template: __webpack_require__("../../../../../src/app/pages/table-page/table-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/table-page/table-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDataTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDataTableService */]) === "function" && _a || Object])
    ], TablePageComponent);
    return TablePageComponent;
    var _a;
}());

//# sourceMappingURL=table-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/testimonials-page/testimonials-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header class=\"text-center\">\r\n    <h5>Testimonials</h5>\r\n    <div class=\"mat-subhead\">\r\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis dolorum ducimus placeat possimus\r\n      provident qui reprehenderit tempore totam voluptatibus. At doloribus possimus praesentium quam ut! Deserunt,\r\n      excepturi tempore? Magnam.\r\n    </div>\r\n  </header>\r\n  <article>\r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n      <mat-card fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"33\" class=\"text-center pad-top-xl push-top-xxl\">\r\n        <img src=\"assets/avatars/7070.png\" class=\"avatar-top\">\r\n        <mat-card-title><p>Outstanding!</p></mat-card-title>\r\n        <mat-card-content>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eligendi eos fugiat harum, ipsum magnam\r\n            perspiciatis totam unde vel vitae.</p>\r\n        </mat-card-content>\r\n        <mat-card-actions class=\"text-md\">\r\n          <span class=\"primary-color\">Ada\tAllison</span>\r\n          <span class=\"secondary-text-color\">CTO at Best Solutions</span>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n      <mat-card fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"33\" class=\"text-center pad-top-xl push-top-xxl\">\r\n        <img src=\"assets/avatars/7070.png\" class=\"avatar-top\">\r\n        <mat-card-title><p>Excellent!</p></mat-card-title>\r\n        <mat-card-content>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eligendi eos fugiat harum, ipsum magnam\r\n            perspiciatis totam unde vel vitae.</p>\r\n        </mat-card-content>\r\n        <mat-card-actions class=\"text-md\">\r\n          <span class=\"primary-color\">Billy\tBanks</span>\r\n          <span class=\"secondary-text-color\">Innovation expert</span>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n      <mat-card fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"33\" class=\"text-center pad-top-xl push-top-xxl\">\r\n        <img src=\"assets/avatars/7070.png\" class=\"avatar-top\">\r\n        <mat-card-title><p>Wonderful!</p></mat-card-title>\r\n        <mat-card-content>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eligendi eos fugiat harum, ipsum magnam\r\n            perspiciatis totam unde vel vitae.</p>\r\n        </mat-card-content>\r\n        <mat-card-actions class=\"text-md\">\r\n          <span class=\"primary-color\">Calvin West</span>\r\n          <span class=\"secondary-text-color\">Delivery manager at Super Soft</span>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/testimonials-page/testimonials-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header .mat-subhead {\n  max-width: 600px;\n  margin: 0 auto; }\n\n.avatar-top {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/testimonials-page/testimonials-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonialsPageComponent = (function () {
    function TestimonialsPageComponent() {
        // Add router animation
        this.routerAnimation = true;
    }
    TestimonialsPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], TestimonialsPageComponent.prototype, "routerAnimation", void 0);
    TestimonialsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testimonials-page',
            template: __webpack_require__("../../../../../src/app/pages/testimonials-page/testimonials-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/testimonials-page/testimonials-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsPageComponent);
    return TestimonialsPageComponent;
}());

//# sourceMappingURL=testimonials-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/toolbar-page/toolbar-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Toolbar</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <p>\r\n          <mat-toolbar>\r\n            <mat-icon>menu</mat-icon>\r\n            <span>Default Toolbar</span>\r\n\r\n            <span fxFlex></span>\r\n\r\n            <mat-icon>code</mat-icon>\r\n          </mat-toolbar>\r\n        </p>\r\n\r\n        <p>\r\n          <mat-toolbar color=\"primary\">\r\n            <mat-icon>menu</mat-icon>\r\n            <span>Primary Toolbar</span>\r\n\r\n            <span fxFlex></span>\r\n\r\n            <mat-icon>code</mat-icon>\r\n          </mat-toolbar>\r\n        </p>\r\n\r\n        <p>\r\n          <mat-toolbar color=\"accent\">\r\n            <mat-icon>menu</mat-icon>\r\n            <span>Accent Toolbar</span>\r\n\r\n            <span fxFlex></span>\r\n\r\n            <mat-icon>code</mat-icon>\r\n          </mat-toolbar>\r\n        </p>\r\n\r\n        <p>\r\n          <mat-toolbar color=\"accent\">\r\n            <span>Custom Toolbar</span>\r\n            <mat-toolbar-row>\r\n              <span>Second Line</span>\r\n            </mat-toolbar-row>\r\n          </mat-toolbar>\r\n        </p>\r\n\r\n        <p>\r\n          <mat-toolbar color=\"primary\">\r\n            <span>Custom Toolbar</span>\r\n\r\n            <mat-toolbar-row>\r\n              <span>Second Line</span>\r\n\r\n              <span fxFlex></span>\r\n\r\n              <mat-icon>verified_user</mat-icon>\r\n            </mat-toolbar-row>\r\n\r\n            <mat-toolbar-row>\r\n              <span>Third Line</span>\r\n\r\n              <span fxFlex></span>\r\n\r\n              <mat-icon>favorite</mat-icon>\r\n              <mat-icon>delete</mat-icon>\r\n            </mat-toolbar-row>\r\n          </mat-toolbar>\r\n        </p>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/toolbar-page/toolbar-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-icon {\n  padding: 0 14px; }\n  @media screen and (max-width: 600px) {\n    .mat-icon {\n      padding: 5px; } }\n\n.mat-toolbar {\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/toolbar-page/toolbar-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarPageComponent = (function () {
    function ToolbarPageComponent() {
        // Add router animation
        this.routerAnimation = true;
    }
    ToolbarPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], ToolbarPageComponent.prototype, "routerAnimation", void 0);
    ToolbarPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toolbar-page',
            template: __webpack_require__("../../../../../src/app/pages/toolbar-page/toolbar-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/toolbar-page/toolbar-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarPageComponent);
    return ToolbarPageComponent;
}());

//# sourceMappingURL=toolbar-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tooltip-page/tooltip-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Tooltip</h3>\r\n  </header>\r\n  <article>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <div class=\"centered\" cdk-scrollable>\r\n          <button #tooltip=\"matTooltip\"\r\n                  mat-raised-button\r\n                  color=\"primary\"\r\n                  [matTooltip]=\"message\"\r\n                  [matTooltipPosition]=\"position\"\r\n                  [disabled]=\"disabled\"\r\n                  [matTooltipShowDelay]=\"showDelay\"\r\n                  [matTooltipHideDelay]=\"hideDelay\">\r\n            Mouse over to see the tooltip\r\n          </button>\r\n          <div>Scroll down while tooltip is open to see it hide automatically</div>\r\n          <div style=\"height: 400px;\"></div>\r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n          <div class=\"pad-right pad-bottom\">\r\n            <div>\r\n              <strong>Message: </strong>\r\n              <mat-input-container><input matInput type=\"text\" [(ngModel)]=\"message\"></mat-input-container>\r\n            </div>\r\n            <div>\r\n              <strong>Show Delay (ms): </strong>\r\n              <mat-input-container>\r\n                <input matInput type=\"number\" [(ngModel)]=\"showDelay\">\r\n              </mat-input-container>\r\n            </div>\r\n            <div>\r\n              <strong>Hide Delay (ms): </strong>\r\n              <mat-input-container>\r\n                <input matInput type=\"number\" [(ngModel)]=\"hideDelay\">\r\n              </mat-input-container>\r\n            </div>\r\n            <div>\r\n              <strong>Disabled: </strong>\r\n              <mat-checkbox [(ngModel)]=\"disabled\"></mat-checkbox>\r\n            </div>\r\n          </div>\r\n          <p>\r\n            <mat-radio-group [(ngModel)]=\"position\" fxLayout=\"column\">\r\n              <mat-radio-button value=\"below\">Below</mat-radio-button>\r\n              <mat-radio-button value=\"above\">Above</mat-radio-button>\r\n              <mat-radio-button value=\"left\">Left</mat-radio-button>\r\n              <mat-radio-button value=\"right\">Right</mat-radio-button>\r\n              <mat-radio-button value=\"before\">Before</mat-radio-button>\r\n              <mat-radio-button value=\"after\">After</mat-radio-button>\r\n            </mat-radio-group>\r\n          </p>\r\n        </div>\r\n\r\n\r\n        <div><strong>Mouse over to</strong></div>\r\n        <button mat-raised-button color=\"primary\" (mouseenter)=\"tooltip.show()\">\r\n          Show tooltip\r\n        </button>\r\n        <button mat-raised-button color=\"primary\" (mouseenter)=\"tooltip.hide()\">\r\n          Hide tooltip\r\n        </button>\r\n        <button mat-raised-button color=\"primary\" (mouseenter)=\"tooltip.toggle()\">\r\n          Toggle tooltip\r\n        </button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </article>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/tooltip-page/tooltip-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".centered {\n  text-align: center;\n  height: 100px;\n  overflow: auto; }\n\nbutton {\n  margin: 10px 10px 10px 0; }\n\n.mat-radio-button {\n  margin-right: 20px;\n  margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tooltip-page/tooltip-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipPageComponent = (function () {
    function TooltipPageComponent() {
        // Add router animation
        this.routerAnimation = true;
        this.position = 'below';
        this.message = 'Here is the tooltip';
        this.disabled = false;
        this.showDelay = 0;
        this.hideDelay = 1000;
    }
    TooltipPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], TooltipPageComponent.prototype, "routerAnimation", void 0);
    TooltipPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tooltip-page',
            template: __webpack_require__("../../../../../src/app/pages/tooltip-page/tooltip-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/tooltip-page/tooltip-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], TooltipPageComponent);
    return TooltipPageComponent;
}());

//# sourceMappingURL=tooltip-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/typography-page/typography-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h3 class=\"primary-color\">Typography</h3>\r\n  </header>\r\n  <article>\r\n    <div fxLayout=\"row\">\r\n      <div fxFlex=\"100\">\r\n        <mat-card>\r\n          <mat-card-title>Heading</mat-card-title>\r\n          <mat-card-content>\r\n            <div>\r\n              <h1 class=\"text-break\">Pixel Garden &lt;h1&gt;</h1>\r\n              <h2>Pixel Garden &lt;h2&gt;</h2>\r\n              <h3>Pixel Garden &lt;h3&gt;</h3>\r\n              <h4>Pixel Garden &lt;h4&gt;</h4>\r\n              <h5>Pixel Garden &lt;h5&gt;</h5>\r\n              <h6>Pixel Garden &lt;h6&gt;</h6>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"100\">\r\n        <mat-card>\r\n          <mat-card-title>Roboto</mat-card-title>\r\n          <mat-card-content>\r\n            <div class=\"h3 font-w-thin-im\">Lorem ipsum. Thin</div>\r\n            <div class=\"h3 font-w-light-im\">Lorem ipsum. Light</div>\r\n            <div class=\"h3 font-w-regular-im\">Lorem ipsum. Regular</div>\r\n            <div class=\"h3 font-w-medium-im\">Lorem ipsum. Medium</div>\r\n            <div class=\"h3 font-w-bold-im\">Lorem ipsum. Bold</div>\r\n            <div class=\"h3 font-w-black-im\">Lorem ipsum. Black</div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-sm=\"100\">\r\n        <mat-card>\r\n          <mat-card-title>Roboto italic</mat-card-title>\r\n          <mat-card-content>\r\n            <div class=\"h3 font-w-thin-im\"><em>Lorem ipsum. Thin italic</em></div>\r\n            <div class=\"h3 font-w-light-im\"><em>Lorem ipsum. Light italic</em></div>\r\n            <div class=\"h3 font-w-regular-im\"><em>Lorem ipsum. Regular italic</em></div>\r\n            <div class=\"h3 font-w-medium-im\"><em>Lorem ipsum. Medium italic</em></div>\r\n            <div class=\"h3 font-w-bold-im\"><em>Lorem ipsum. Bold italic</em></div>\r\n            <div class=\"h3 font-w-black-im\"><em>Lorem ipsum. Black italic</em></div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <div>\r\n          <mat-card>\r\n            <mat-card-title>Body text</mat-card-title>\r\n            <mat-card-content>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, sunt.</p>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ipsam nemo officiis pariatur.\r\n                Accusamus ad, cumque deleniti dolore eius et eveniet excepturi libero obcaecati officia quas quasi\r\n                quis\r\n                vero voluptatibus.</p>\r\n            </mat-card-content>\r\n          </mat-card>\r\n          <mat-card>\r\n            <mat-card-title>Bold</mat-card-title>\r\n            <mat-card-content>\r\n              <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at, debitis ducimus porro\r\n                praesentium tempore!</strong>\r\n            </mat-card-content>\r\n          </mat-card>\r\n          <mat-card>\r\n            <mat-card-title>Alignment classes</mat-card-title>\r\n            <mat-card-content>\r\n              <p class=\"text-left\">Left aligned text.</p>\r\n              <p class=\"text-center\">Center aligned text.</p>\r\n              <p class=\"text-right\">Right aligned text.</p>\r\n              <p class=\"text-justify\">Justified text.</p>\r\n              <p class=\"text-nowrap\">No wrap text.</p>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <div>\r\n          <mat-card>\r\n            <mat-card-title>Marked text</mat-card-title>\r\n            <mat-card-content>\r\n              Lorem\r\n              <mark> ipsum dolor</mark>\r\n              sit amet, consectetur adipisicing elit. Ducimus, quo.\r\n            </mat-card-content>\r\n          </mat-card>\r\n          <mat-card>\r\n            <mat-card-title>Small text</mat-card-title>\r\n            <mat-card-content>\r\n              <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem est inventore nemo nihil\r\n                quisquam\r\n                reiciendis voluptatum.\r\n              </small>\r\n            </mat-card-content>\r\n          </mat-card>\r\n          <mat-card>\r\n            <mat-card-title>Italics</mat-card-title>\r\n            <mat-card-content>\r\n              <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis cum repudiandae saepe\r\n                vel.</em>\r\n            </mat-card-content>\r\n          </mat-card>\r\n          <mat-card>\r\n            <mat-card-title>Blockquotes</mat-card-title>\r\n            <mat-card-content>\r\n              <blockquote class=\"blockquote\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eum explicabo porro?</p>\r\n                <footer class=\"blockquote-footer\">Lorem ipsum dolor sit.</footer>\r\n              </blockquote>\r\n              <blockquote class=\"blockquote blockquote-reverse\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eum explicabo porro?</p>\r\n                <footer class=\"blockquote-footer\">Lorem ipsum dolor sit.</footer>\r\n              </blockquote>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"1 0 auto\" fxFlex.gt-md=\"33\">\r\n        <div>\r\n          <mat-card>\r\n            <mat-card-title>Deleted and strikethrough text</mat-card-title>\r\n            <mat-card-content>\r\n              <p>\r\n                <del>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, perferendis?</del>\r\n              </p>\r\n              <p>\r\n                <s>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, perferendis.</s>\r\n              </p>\r\n            </mat-card-content>\r\n          </mat-card>\r\n          <mat-card>\r\n            <mat-card-title>Transformation classes</mat-card-title>\r\n            <mat-card-content>\r\n              <p class=\"text-lower\">Lowercased text.</p>\r\n              <p class=\"text-upper\">Uppercased text.</p>\r\n              <p class=\"text-caps\">Capitalized text.</p>\r\n            </mat-card-content>\r\n          </mat-card>\r\n          <mat-card>\r\n            <mat-card-title>Text colors</mat-card-title>\r\n            <mat-card-content>\r\n              <p class=\"primary-text-color\">Primary text color</p>\r\n              <p class=\"secondary-text-color\">Secondary text color</p>\r\n              <p class=\"primary-color-dark\">Primary dark color</p>\r\n              <p class=\"primary-color\">Primary color</p>\r\n              <p class=\"primary-color-light\">Primary light color</p>\r\n              <p class=\"accent-color\">Accent color</p>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/typography-page/typography-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/typography-page/typography-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_page_animation__ = __webpack_require__("../../../../../src/app/utils/page.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypographyPageComponent = (function () {
    function TypographyPageComponent() {
        // Add router animation
        this.routerAnimation = true;
    }
    TypographyPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerAnimation'),
        __metadata("design:type", Object)
    ], TypographyPageComponent.prototype, "routerAnimation", void 0);
    TypographyPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-typography-page',
            template: __webpack_require__("../../../../../src/app/pages/typography-page/typography-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/typography-page/typography-page.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__utils_page_animation__["a" /* routerAnimation */]],
        }),
        __metadata("design:paramtypes", [])
    ], TypographyPageComponent);
    return TypographyPageComponent;
}());

//# sourceMappingURL=typography-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/resize/resize.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resize_service__ = __webpack_require__("../../../../../src/app/resize/resize.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResizeModule = (function () {
    function ResizeModule() {
    }
    ResizeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__resize_service__["a" /* ResizeService */]
            ]
        })
    ], ResizeModule);
    return ResizeModule;
}());

//# sourceMappingURL=resize.module.js.map

/***/ }),

/***/ "../../../../../src/app/resize/resize.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Service for informing about resizing of layout
 */
var ResizeService = (function () {
    function ResizeService() {
        this.resizeInformer$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    ResizeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ResizeService);
    return ResizeService;
}());

//# sourceMappingURL=resize.service.js.map

/***/ }),

/***/ "../../../../../src/app/routes/app-routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_page_dashboard_page_component__ = __webpack_require__("../../../../../src/app/pages/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_typography_page_typography_page_component__ = __webpack_require__("../../../../../src/app/pages/typography-page/typography-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_color_page_color_page_component__ = __webpack_require__("../../../../../src/app/pages/color-page/color-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_buttons_page_buttons_page_component__ = __webpack_require__("../../../../../src/app/pages/buttons-page/buttons-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_form_elements_page_form_elements_page_component__ = __webpack_require__("../../../../../src/app/pages/form-elements-page/form-elements-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_form_wizard_page_form_wizard_page_component__ = __webpack_require__("../../../../../src/app/pages/form-wizard-page/form-wizard-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chips_page_chips_page_component__ = __webpack_require__("../../../../../src/app/pages/chips-page/chips-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dialog_page_dialog_page_component__ = __webpack_require__("../../../../../src/app/pages/dialog-page/dialog-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_grid_list_page_grid_list_page_component__ = __webpack_require__("../../../../../src/app/pages/grid-list-page/grid-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_icons_page_icons_page_component__ = __webpack_require__("../../../../../src/app/pages/icons-page/icons-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_page_list_page_component__ = __webpack_require__("../../../../../src/app/pages/list-page/list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menu_page_menu_page_component__ = __webpack_require__("../../../../../src/app/pages/menu-page/menu-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_progress_bar_page_progress_bar_page_component__ = __webpack_require__("../../../../../src/app/pages/progress-bar-page/progress-bar-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_spinner_page_spinner_page_component__ = __webpack_require__("../../../../../src/app/pages/spinner-page/spinner-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_snackbar_page_snackbar_page_component__ = __webpack_require__("../../../../../src/app/pages/snackbar-page/snackbar-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tab_page_tab_page_component__ = __webpack_require__("../../../../../src/app/pages/tab-page/tab-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_toolbar_page_toolbar_page_component__ = __webpack_require__("../../../../../src/app/pages/toolbar-page/toolbar-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tooltip_page_tooltip_page_component__ = __webpack_require__("../../../../../src/app/pages/tooltip-page/tooltip-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_sidenav_page_sidenav_page_component__ = __webpack_require__("../../../../../src/app/pages/sidenav-page/sidenav-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_flex_layout_page_flex_layout_page_component__ = __webpack_require__("../../../../../src/app/pages/flex-layout-page/flex-layout-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_cards_page_cards_page_component__ = __webpack_require__("../../../../../src/app/pages/cards-page/cards-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_line_chart_page_line_chart_page_component__ = __webpack_require__("../../../../../src/app/pages/line-chart-page/line-chart-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_bar_chart_page_bar_chart_page_component__ = __webpack_require__("../../../../../src/app/pages/bar-chart-page/bar-chart-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_bubble_chart_page_bubble_chart_page_component__ = __webpack_require__("../../../../../src/app/pages/bubble-chart-page/bubble-chart-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_heatmap_page_heatmap_page_component__ = __webpack_require__("../../../../../src/app/pages/heatmap-page/heatmap-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_pie_chart_page_pie_chart_page_component__ = __webpack_require__("../../../../../src/app/pages/pie-chart-page/pie-chart-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_radar_page_radar_page_component__ = __webpack_require__("../../../../../src/app/pages/radar-page/radar-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_table_page_table_page_component__ = __webpack_require__("../../../../../src/app/pages/table-page/table-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_scroll_page_scroll_page_component__ = __webpack_require__("../../../../../src/app/pages/scroll-page/scroll-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_file_upload_page_file_upload_page_component__ = __webpack_require__("../../../../../src/app/pages/file-upload-page/file-upload-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_stepper_page_stepper_page_component__ = __webpack_require__("../../../../../src/app/pages/stepper-page/stepper-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_chat_page_chat_page_component__ = __webpack_require__("../../../../../src/app/pages/chat-page/chat-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_testimonials_page_testimonials_page_component__ = __webpack_require__("../../../../../src/app/pages/testimonials-page/testimonials-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_pricing_tables_page_pricing_tables_page_component__ = __webpack_require__("../../../../../src/app/pages/pricing-tables-page/pricing-tables-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_products_page_products_page_component__ = __webpack_require__("../../../../../src/app/pages/products-page/products-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_product_page_product_page_component__ = __webpack_require__("../../../../../src/app/pages/product-page/product-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_cart_page_cart_page_component__ = __webpack_require__("../../../../../src/app/pages/cart-page/cart-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_portfolio_page_portfolio_page_component__ = __webpack_require__("../../../../../src/app/pages/portfolio-page/portfolio-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_login_page_login_page_component__ = __webpack_require__("../../../../../src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_sign_up_page_sign_up_page_component__ = __webpack_require__("../../../../../src/app/pages/sign-up-page/sign-up-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_multi_language_page_multi_language_page_component__ = __webpack_require__("../../../../../src/app/pages/multi-language-page/multi-language-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_register_page_register_page_component__ = __webpack_require__("../../../../../src/app/pages/register-page/register-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var APP_ROUTES = [
    {
        path: 'main', component: __WEBPACK_IMPORTED_MODULE_1__pages_main_page_main_page_component__["a" /* MainPageComponent */], children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_page_dashboard_page_component__["a" /* DashboardPageComponent */] },
            { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_3__pages_typography_page_typography_page_component__["a" /* TypographyPageComponent */] },
            { path: 'color', component: __WEBPACK_IMPORTED_MODULE_4__pages_color_page_color_page_component__["a" /* ColorPageComponent */] },
            { path: 'buttons', component: __WEBPACK_IMPORTED_MODULE_5__pages_buttons_page_buttons_page_component__["a" /* ButtonsPageComponent */] },
            { path: 'form-elements', component: __WEBPACK_IMPORTED_MODULE_6__pages_form_elements_page_form_elements_page_component__["a" /* FormElementsPageComponent */] },
            { path: 'form-wizard', component: __WEBPACK_IMPORTED_MODULE_7__pages_form_wizard_page_form_wizard_page_component__["a" /* FormWizardPageComponent */] },
            { path: 'chips', component: __WEBPACK_IMPORTED_MODULE_8__pages_chips_page_chips_page_component__["a" /* ChipsPageComponent */] },
            { path: 'dialog', component: __WEBPACK_IMPORTED_MODULE_9__pages_dialog_page_dialog_page_component__["a" /* DialogPageComponent */] },
            { path: 'grid-list', component: __WEBPACK_IMPORTED_MODULE_10__pages_grid_list_page_grid_list_page_component__["a" /* GridListPageComponent */] },
            { path: 'icons', component: __WEBPACK_IMPORTED_MODULE_11__pages_icons_page_icons_page_component__["a" /* IconsPageComponent */] },
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_12__pages_list_page_list_page_component__["a" /* ListPageComponent */] },
            { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_13__pages_menu_page_menu_page_component__["a" /* MenuPageComponent */] },
            { path: 'progress-bar', component: __WEBPACK_IMPORTED_MODULE_14__pages_progress_bar_page_progress_bar_page_component__["a" /* ProgressBarPageComponent */] },
            { path: 'spinner', component: __WEBPACK_IMPORTED_MODULE_15__pages_spinner_page_spinner_page_component__["a" /* SpinnerPageComponent */] },
            { path: 'snackbar', component: __WEBPACK_IMPORTED_MODULE_16__pages_snackbar_page_snackbar_page_component__["a" /* SnackbarPageComponent */] },
            { path: 'tabs', component: __WEBPACK_IMPORTED_MODULE_17__pages_tab_page_tab_page_component__["a" /* TabPageComponent */] },
            { path: 'toolbar', component: __WEBPACK_IMPORTED_MODULE_18__pages_toolbar_page_toolbar_page_component__["a" /* ToolbarPageComponent */] },
            { path: 'tooltip', component: __WEBPACK_IMPORTED_MODULE_19__pages_tooltip_page_tooltip_page_component__["a" /* TooltipPageComponent */] },
            { path: 'sidenav', component: __WEBPACK_IMPORTED_MODULE_21__pages_sidenav_page_sidenav_page_component__["a" /* SidenavPageComponent */] },
            { path: 'flex-layout', component: __WEBPACK_IMPORTED_MODULE_22__pages_flex_layout_page_flex_layout_page_component__["a" /* FlexLayoutPageComponent */] },
            { path: 'cards', component: __WEBPACK_IMPORTED_MODULE_23__pages_cards_page_cards_page_component__["a" /* CardsPageComponent */] },
            { path: 'line-chart', component: __WEBPACK_IMPORTED_MODULE_24__pages_line_chart_page_line_chart_page_component__["a" /* LineChartPageComponent */] },
            { path: 'bar-chart', component: __WEBPACK_IMPORTED_MODULE_25__pages_bar_chart_page_bar_chart_page_component__["a" /* BarChartPageComponent */] },
            { path: 'bubble-chart', component: __WEBPACK_IMPORTED_MODULE_26__pages_bubble_chart_page_bubble_chart_page_component__["a" /* BubbleChartPageComponent */] },
            { path: 'heatmap', component: __WEBPACK_IMPORTED_MODULE_27__pages_heatmap_page_heatmap_page_component__["a" /* HeatmapPageComponent */] },
            { path: 'piechart', component: __WEBPACK_IMPORTED_MODULE_28__pages_pie_chart_page_pie_chart_page_component__["a" /* PieChartPageComponent */] },
            { path: 'radar', component: __WEBPACK_IMPORTED_MODULE_29__pages_radar_page_radar_page_component__["a" /* RadarPageComponent */] },
            { path: 'tree', loadChildren: 'app/pages/tree-page/tree-page.module#TreePageModule' },
            { path: 'editor', loadChildren: 'app/pages/editor-page/editor-page.module#EditorPageModule' },
            { path: 'table', component: __WEBPACK_IMPORTED_MODULE_30__pages_table_page_table_page_component__["a" /* TablePageComponent */] },
            { path: 'manage-wine', component: __WEBPACK_IMPORTED_MODULE_30__pages_table_page_table_page_component__["a" /* TablePageComponent */] },
            { path: 'scroll', component: __WEBPACK_IMPORTED_MODULE_31__pages_scroll_page_scroll_page_component__["a" /* ScrollPageComponent */] },
            { path: 'drag', loadChildren: 'app/pages/drag-and-drop-page/drag-and-drop-page.module#DragAndDropPageModule' },
            { path: 'datepicker', loadChildren: 'app/pages/datepicker-page/datepicker-page.module#DatepickerPageModule' },
            { path: 'fileupload', component: __WEBPACK_IMPORTED_MODULE_32__pages_file_upload_page_file_upload_page_component__["a" /* FileUploadPageComponent */] },
            { path: 'stepper', component: __WEBPACK_IMPORTED_MODULE_33__pages_stepper_page_stepper_page_component__["a" /* StepperPageComponent */] },
            { path: 'google-maps', loadChildren: 'app/pages/google-map-page/google-map-page.module#GoogleMapPageModule' },
            { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_34__pages_chat_page_chat_page_component__["a" /* ChatPageComponent */] },
            { path: 'testimonials', component: __WEBPACK_IMPORTED_MODULE_35__pages_testimonials_page_testimonials_page_component__["a" /* TestimonialsPageComponent */] },
            { path: 'pricing-tables', component: __WEBPACK_IMPORTED_MODULE_36__pages_pricing_tables_page_pricing_tables_page_component__["a" /* PricingTablesPageComponent */] },
            { path: 'products', component: __WEBPACK_IMPORTED_MODULE_37__pages_products_page_products_page_component__["b" /* ProductsPageComponent */] },
            { path: 'product', component: __WEBPACK_IMPORTED_MODULE_38__pages_product_page_product_page_component__["a" /* ProductPageComponent */] },
            { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_39__pages_cart_page_cart_page_component__["a" /* CartPageComponent */] },
            { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_40__pages_portfolio_page_portfolio_page_component__["a" /* PortfolioPageComponent */] },
            { path: 'multi-language', component: __WEBPACK_IMPORTED_MODULE_44__pages_multi_language_page_multi_language_page_component__["a" /* MultiLanguagePageComponent */] },
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: '**', redirectTo: 'dashboard', pathMatch: 'prefix' }
        ]
    },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_41__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_42__pages_login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_43__pages_sign_up_page_sign_up_page_component__["a" /* SignUpPageComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_45__pages_register_page_register_page_component__["a" /* RegisterPageComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_42__pages_login_page_login_page_component__["a" /* LoginPageComponent */] }
    // {path: '', redirectTo: '/main/dashboard', pathMatch: 'prefix'},
    // {path: '**', redirectTo: '/main/dashboard', pathMatch: 'prefix'}
];
var AppRoutesModule = (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_20__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(APP_ROUTES, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* PreloadAllModules */] }),
            ]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());

//# sourceMappingURL=app-routes.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export server */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// export const server = 'http://localhost:1337';
var server = 'http://wineo-nodejs.nanoapp.io';
// export const client = 'http://localhost:4200'
var client = 'http://wineoh-angular.nanoapp.io';
var ApiService = (function () {
    function ApiService(http) {
        var _this = this;
        this.http = http;
        this.register = function (user) {
            return _this.http.post(server + "/auth/register", user)
                .map(function (response) { return response.json(); });
        };
        this.passwordLessRegister = function (user) {
            return _this.http.post(server + "/auth/passwordLessRegister", user)
                .map(function (response) { return response.json(); });
        };
        this.attachUid = function (data) {
            console.log("calling Attach");
            console.log(data);
            return _this.http.post(server + "/auth/attachUid", data)
                .map(function (response) {
                console.log(response);
                return response.json();
            });
        };
    }
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
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
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userDetails = null;
        this.validateAuthUrl = function (url) {
            if (_this._firebaseAuth.auth.isSignInWithEmailLink(window.location.href))
                return true;
            else
                return false;
        };
        this.signInWithEmailLink = function (email, link) {
            return _this._firebaseAuth.auth.signInWithEmailLink(email, link);
        };
        this.getIdToken = function () {
            return _this._firebaseAuth.auth.currentUser.getIdToken();
        };
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
            }
            else {
                _this.userDetails = null;
            }
        });
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user !== null) {
                _this._firebaseAuth.auth.currentUser.getIdToken()
                    .then(function (token) {
                    console.log(token);
                });
                // if (user.emailVerified) {
                //   console.log('Email is verified');
                // } else {
                //   console.log('Email is not verified');
                //   user.sendEmailVerification();
                // }
            }
        });
    }
    AuthService.prototype.signInWithGoogle = function (email) {
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider();
        if (email) {
            provider.setCustomParameters({ 'login_hint': email });
        }
        // return this._firebaseAuth.auth.signInWithPopup(
        //   new firebase.auth.GoogleAuthProvider()
        // )
        return this._firebaseAuth.auth.signInWithPopup(provider);
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this._firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.signInWithTwitter = function () {
        return this._firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].TwitterAuthProvider());
    };
    AuthService.prototype.signInRegular = function (email, password) {
        var credential = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].EmailAuthProvider.credential(email, password);
        return this._firebaseAuth.auth.signInAndRetrieveDataWithCredential(credential);
        // return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
    };
    AuthService.prototype.passwordLessSignUp = function (email) {
        var actionCodeSettings = {
            url: __WEBPACK_IMPORTED_MODULE_4__api_service__["b" /* client */] + '/sign-up',
            handleCodeInApp: true
        };
        console.log(email);
        return this._firebaseAuth.auth.sendSignInLinkToEmail(email, actionCodeSettings);
    };
    ;
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails)
            return true;
        return false;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this._firebaseAuth.auth.signOut()
            .then(function (res) {
            _this.router.navigate(['/']);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/sidemenu/close.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Service for informing menu nodes about closing
 */
var CloseService = (function () {
    function CloseService() {
        this.closeInformer$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    CloseService.prototype.inform = function (menuLevel) {
        this.closeInformer$.next(menuLevel);
    };
    CloseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CloseService);
    return CloseService;
}());

//# sourceMappingURL=close.service.js.map

/***/ }),

/***/ "../../../../../src/app/sidemenu/item/sideitem.component.html":
/***/ (function(module, exports) {

module.exports = "<li [ngClass]=\"{close: closeState == 'close', open: closeState == 'open'}\" class=\"menu-level-{{menuLevel}}\">\r\n  <div class=\"item\">\r\n    <a mat-button (click)=\"toggleState(children.children.length != 0)\" [routerLink]=\"routerLinkUrl ? routerLinkUrl : location.path()\"\r\n       routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" [class.no-route]=\"!routerLinkUrl\">\r\n      <div class=\"icon\">\r\n        <ng-content select=\"mat-icon\"></ng-content>\r\n      </div>\r\n      <div class=\"text\">{{title}}</div>\r\n      <div class=\"badge\">\r\n        <ng-content select=\"td-notification-count\" #badge></ng-content>\r\n      </div>\r\n      <i *ngIf=\"children.children.length != 0\" class=\"material-icons mat-dark dropdown\">arrow_drop_down</i>\r\n    </a>\r\n  </div>\r\n\r\n  <ul [@closeState]=\"closeState\" class=\"children\" #children>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</li>\r\n"

/***/ }),

/***/ "../../../../../src/app/sidemenu/item/sideitem.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\nli .item /deep/ {\n  position: relative;\n  height: 48px; }\n  li .item /deep/ a {\n    padding-left: 16px;\n    height: 100%;\n    width: 100%;\n    line-height: 48px;\n    text-align: left;\n    transition: color 0.3s ease; }\n    li .item /deep/ a.active.no-route {\n      color: inherit; }\n  li .item /deep/ .icon {\n    width: 40px;\n    height: 100%;\n    float: left; }\n    li .item /deep/ .icon .mat-icon {\n      line-height: 48px; }\n  li .item /deep/ .text {\n    display: inline-block;\n    width: 160px;\n    text-overflow: ellipsis;\n    overflow: hidden; }\n  li .item /deep/ .badge {\n    display: inline-block;\n    min-width: 10px;\n    text-align: center;\n    line-height: 20px; }\n  li .item /deep/ .dropdown {\n    position: absolute;\n    top: 50%;\n    right: 20px;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    transition: -webkit-transform 0.25s ease;\n    transition: transform 0.25s ease;\n    transition: transform 0.25s ease, -webkit-transform 0.25s ease;\n    cursor: pointer; }\n\nli.open > .item .dropdown {\n  -webkit-transform: translateY(-50%) rotate(90deg);\n  transform: translateY(-50%) rotate(90deg); }\n\nli .children {\n  position: relative;\n  overflow: hidden; }\n  li .children:before {\n    position: absolute;\n    top: 0;\n    right: -15px;\n    bottom: 0;\n    left: -15px;\n    content: '';\n    box-shadow: inset 0px 2px 4px -1px rgba(0, 0, 0, 0.2), inset 0px 4px 5px 0px rgba(0, 0, 0, 0.14), inset 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidemenu/item/sideitem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideitemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__close_service__ = __webpack_require__("../../../../../src/app/sidemenu/close.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideitemComponent = (function () {
    function SideitemComponent(closeServiceService, location) {
        var _this = this;
        this.closeServiceService = closeServiceService;
        this.location = location;
        this.closeState = 'close';
        this.menuLevel = -1;
        this.closeServiceSubscription = closeServiceService.closeInformer$.subscribe(function (next) {
            if (next === _this.menuLevel) {
                _this.closeState = 'close';
            }
        });
    }
    SideitemComponent_1 = SideitemComponent;
    SideitemComponent.prototype.ngOnInit = function () {
    };
    SideitemComponent.prototype.ngAfterContentInit = function () {
        this.contentChildren.forEach(function (item) {
            item.incrementMenuLEvel();
        });
    };
    SideitemComponent.prototype.ngOnDestroy = function () {
        this.closeServiceSubscription.unsubscribe();
    };
    SideitemComponent.prototype.toggleState = function (hasChildren) {
        if (hasChildren) {
            if (this.closeState === 'close') {
                this.closeServiceService.inform(this.menuLevel);
            }
            this.closeState = this.closeState === 'close' ? 'open' : 'close';
        }
    };
    SideitemComponent.prototype.incrementMenuLEvel = function () {
        this.menuLevel++;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SideitemComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SideitemComponent.prototype, "closeState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SideitemComponent.prototype, "routerLinkUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ContentChildren"])(SideitemComponent_1, { descendants: true }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["QueryList"]) === "function" && _a || Object)
    ], SideitemComponent.prototype, "contentChildren", void 0);
    SideitemComponent = SideitemComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'px-gdn-sideitem',
            template: __webpack_require__("../../../../../src/app/sidemenu/item/sideitem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidemenu/item/sideitem.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])('closeState', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* state */])('close', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                        height: '0'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                        height: '*'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('close => open', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('250ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('open => close', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('250ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__close_service__["a" /* CloseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__close_service__["a" /* CloseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _c || Object])
    ], SideitemComponent);
    return SideitemComponent;
    var SideitemComponent_1, _a, _b, _c;
}());

//# sourceMappingURL=sideitem.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidemenu/menu/sidemenu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <ng-content></ng-content>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/sidemenu/menu/sidemenu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidemenu/menu/sidemenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__close_service__ = __webpack_require__("../../../../../src/app/sidemenu/close.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidemenuComponent = (function () {
    function SidemenuComponent() {
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    SidemenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'px-gdn-sidemenu',
            template: __webpack_require__("../../../../../src/app/sidemenu/menu/sidemenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidemenu/menu/sidemenu.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__close_service__["a" /* CloseService */]]
        }),
        __metadata("design:paramtypes", [])
    ], SidemenuComponent);
    return SidemenuComponent;
}());

//# sourceMappingURL=sidemenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidemenu/sidemenu.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_sideitem_component__ = __webpack_require__("../../../../../src/app/sidemenu/item/sideitem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_sidemenu_component__ = __webpack_require__("../../../../../src/app/sidemenu/menu/sidemenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SidemenuModule = (function () {
    function SidemenuModule() {
    }
    SidemenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__menu_sidemenu_component__["a" /* SidemenuComponent */], __WEBPACK_IMPORTED_MODULE_2__item_sideitem_component__["a" /* SideitemComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__menu_sidemenu_component__["a" /* SidemenuComponent */], __WEBPACK_IMPORTED_MODULE_2__item_sideitem_component__["a" /* SideitemComponent */]]
        })
    ], SidemenuModule);
    return SidemenuModule;
}());

//# sourceMappingURL=sidemenu.module.js.map

/***/ }),

/***/ "../../../../../src/app/utils/colors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MAT_LIGHT_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MAT_DEEP_ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHART_TEXT_COLOR; });
// Color constants for charts
var MAT_LIGHT_BLUE = {
    _50: '#e1f5fe',
    _100: '#b3e5fc',
    _200: '#81d4fa',
    _300: '#4fc3f7',
    _400: '#29b6f6',
    _500: '#f4b827',
    _600: '#039be5',
    _700: '#0288d1',
    _800: '#0277bd',
    _900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
};
var MAT_DEEP_ORANGE = {
    _50: '#fbe9e7',
    _100: '#ffccbc',
    _200: '#ffab91',
    _300: '#ff8a65',
    _400: '#ff7043',
    _500: '#ff5722',
    _600: '#f4511e',
    _700: '#e64a19',
    _800: '#d84315',
    _900: '#bf360c',
    A100: '#ff9e80',
    A200: '#ff6e40',
    A400: '#ff3d00',
    A700: '#dd2c00'
};
var CHART_TEXT_COLOR = '#CDCFD3';
//# sourceMappingURL=colors.js.map

/***/ }),

/***/ "../../../../../src/app/utils/page.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
// import the required animation functions from the angular animations module

var routerAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])('routerAnimation', [
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':enter', [
        // css styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 1 }))
    ]),
]);
//# sourceMappingURL=page.animation.js.map

/***/ }),

/***/ "../../../../../src/assets/fonts/aeh-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aeh-webfont.2b12380d31f6ede61be3.woff";

/***/ }),

/***/ "../../../../../src/assets/fonts/aeh-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aeh-webfont.3fc15704b64088ab2d1a.woff2";

/***/ }),

/***/ "../../../../../src/assets/fonts/avefedan_personal_use-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "avefedan_personal_use-webfont.c291bca0e83567c0388e.woff";

/***/ }),

/***/ "../../../../../src/assets/fonts/avefedan_personal_use-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "avefedan_personal_use-webfont.961b79a775dc1bb5d075.woff2";

/***/ }),

/***/ "../../../../../src/assets/fonts/avenir_roman-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "avenir_roman-webfont.01f71316f9db67a2f2b3.woff";

/***/ }),

/***/ "../../../../../src/assets/fonts/avenir_roman-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "avenir_roman-webfont.5e252524ed379373cc5a.woff2";

/***/ }),

/***/ "../../../../../src/assets/js/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["animate"] = animate;

function animate() {
  var css3animation = false,
    css3animationstring = 'animation',
    css3keyframeprefix = '',
    css3domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    css3pfx = '',
    css3elem = document.createElement('div');

  if (css3elem.style.animationName !== undefined) {
    css3animation = true;
  }

  if (css3animation === false) {
    for (var i = 0; i < css3domPrefixes.length; i++) {
      if (css3elem.style[css3domPrefixes[i] + 'AnimationName'] !== undefined) {
        css3pfx = css3domPrefixes[i];
        css3animationstring = css3pfx + 'Animation';
        css3keyframeprefix = '-' + css3pfx.toLowerCase() + '-';
        css3animation = true;
        break;
      }
    }
  }

  // If browser isn't support css3 animation
  if (css3animation === false) {

    // Redirect to partner page
    location.href = location.protocol + '//' + location.hostname + 'partner-portal/';

  } else {

    var d = document, // Document
      sky = d.querySelector('[data-sky]'), // Element for sky img's
      sun = d.querySelector('[data-sun]'), // Element for sun img
      mountains = d.querySelector('[data-mount]'), // Element for mountains img's
      clouds = d.querySelector('[data-cloud]'), // Element for clouds img
      blur = d.querySelector('[data-blur]'), // Element for blur img
      loginWrap = d.querySelector('[data-login]'), // Element for loginWrap block
      audioFirst = d.querySelector('.js-pageAudioFirst'), // Element for audio
      audioSecond = d.querySelector('.js-pageAudioSecond'), // Element for audio
      audioThird = d.querySelector('.js-pageAudioThird'); // Element for audio

    // Okta sign in init
    // var orgUrl = 'https://dev-310121.oktapreview.com',
    //     oktaSignIn = new OktaSignIn({
    //         baseUrl: orgUrl,
    //         logo: 'svg/logo.svg',
    //         features: {
    //             rememberMe: false
    //         },
    //         helpLinks: {
    //             help: 'https://help.wine-oh.io/hc/en-us/articles/115004120233-Need-Help-Signing-In-',
    //             custom: [{
    //                 text: 'Skip this step',
    //                 href: 'http://wine-oh.io/'
    //             }]
    //         },
    //         i18n: {
    //             en: {
    //                 'primaryauth.title': 'Sign-In'
    //             }
    //         }
    //     });

    // Okta sign in render function wrapper
    function renderOkta(el) {
      el.session.get(function (res) {

        // Session exists, show logged in state.
        if (res.status === 'ACTIVE') {

        } else {

        }

        // No session, show the login form
        el.renderEl(
          {el: '#okta-login-container'},
          function error(err) {
            // handle errors as needed
            console.error(err);
          }
        );

        el.on('pageRendered', function (data) {

          var text = d.createElement("span"),
            textnode = d.createTextNode("to access your Wine-Oh! account");

          text.appendChild(textnode);

          d.querySelector('.okta-form-title.o-form-head').appendChild(text);
          d.querySelector('#okta-signin-submit').value = 'Sign-In';

        });

      });
    }

    // Set volume of music
    audioFirst.volume = 0.5;
    audioSecond.volume = 0.5;
    audioThird.volume = 0.5;


    // Check if browser support "animate" (WAAPI)
    if (!document.body.animate) {

      // Start play music
      setTimeout(function () {
        audioFirst.play();
      }, 1000);

      audioFirst.addEventListener('ended', function () {

        audioSecond.play();

        audioSecond.onplaying = function () {
          setTimeout(function () {
            audioThird.play();
          }, 1500)
        };

      }, false);

      // Start animation for sun
      sun.className += " animated";

      // Start animation for clouds
      clouds.className += " animated";

      // Start animation for sky
      sky.className += " animated";

      // Start animation for mountains
      mountains.className += " animated";

      // Start blur animation
      blur.className += " animated";

      // Start login wrapper animation
      loginWrap.className += " animated";

      setTimeout(function () {

        // Render okta sign in block
        renderOkta(oktaSignIn);

      }, 2000);

    } else {

      // Keyframes array's
      var opacityOut = [
          {opacity: 1},
          {opacity: 0}
        ],
        opacityIn = [
          {opacity: 0},
          {opacity: 1}
        ],
        keyframesClouds = [
          {opacity: .1},
          {opacity: 1}
        ],
        keyframesSun = [
          {
            opacity: 0,
            bottom: '-70%'
          }, {
            opacity: 1,
            bottom: '5%',
            offset: .4
          }, {
            opacity: 1,
            bottom: 0,
            offset: .5
          }, {
            opacity: 1,
            bottom: 0
          }
        ],
        keyframesLogin = [
          {
            opacity: 0,
            transform: 'scale(.1)'
          }, {
            opacity: 1,
            transform: 'scale(1)'
          }
        ];

      var options = { // Default options
          iterations: 1,
          delay: 2000,
          duration: 4500,
          fill: 'forwards',
          easing: 'ease-in-out'
        },
        // Options for out elements
        optionsOut = {
          iterations: 1,
          delay: 6500,
          duration: 1000,
          fill: 'forwards',
          easing: 'ease-in-out'
        },
        // Options for sun element
        optionsSun = {
          iterations: 1,
          delay: 3500,
          duration: 3000,
          fill: 'forwards',
          easing: 'ease-in-out'
        },
        // Options for blur image
        optionsBlur = {
          iterations: 1,
          delay: 200,
          duration: 1000,
          fill: 'forwards',
          easing: 'ease-in-out'
        },
        // Options for login wrapper block
        optionsLogin = {
          iterations: 1,
          duration: 500,
          fill: 'forwards',
          easing: 'ease-in-out'
        };

      // Start play music
      setTimeout(function () {
        audioFirst.play();
      }, 1000);

      audioFirst.addEventListener('ended', function () {

        audioSecond.play();

        audioSecond.onplaying = function () {
          setTimeout(function () {
            audioThird.play();
          }, 1500)
        };

      }, false);

      // Start animation for sun
      var sunLastAnim = sun.querySelector('.morning').animate(keyframesSun, optionsSun);

      // Start animation for clouds
      clouds.querySelector('img').animate(keyframesClouds, options);

      // Start animation for sky
      sky.querySelector('.night').animate(opacityOut, options);
      sky.querySelector('.morning').animate(opacityIn, options);

      // Start animation for mountains
      mountains.querySelector('.night').animate(opacityOut, optionsOut);
      mountains.querySelector('.morning').animate(opacityIn, options);

      sunLastAnim.onfinish = function () {

        // Render okta sign in block
        // renderOkta(oktaSignIn);

        // Start blur animation
        var blurAnimation = blur.querySelector('img').animate(opacityIn, optionsBlur);

        blurAnimation.onfinish = function () {

          // Start login wrapper animation
          loginWrap.animate(keyframesLogin, optionsLogin)

        };
      };

    }

  }

}
window.onload = function() {
  // animate();
}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    firebaseConf: {
        apiKey: 'AIzaSyBuP6vTw0EJrmnY0o9-yVF5PIXH2nTA4BE',
        authDomain: 'web-app-a4b10.firebaseapp.com',
        databaseURL: 'https://web-app-a4b10.firebaseio.com',
        projectId: 'web-app-a4b10',
        storageBucket: 'web-app-a4b10.appspot.com',
        messagingSenderId: '1018721793832'
    },
    production: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map