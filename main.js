(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ng-modal-outlet/fesm5/ng-modal-outlet.js":
/*!*******************************************************!*\
  !*** ./dist/ng-modal-outlet/fesm5/ng-modal-outlet.js ***!
  \*******************************************************/
/*! exports provided: ModalOutletComponent, ModalOutletService, NgModalOutletModule, ɵc, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOutletComponent", function() { return ModalOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOutletService", function() { return ModalOutletService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModalOutletModule", function() { return NgModalOutletModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return modalFadeTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return overlayFadeTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SubscriberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SubscriberComponent = /** @class */ (function () {
    function SubscriberComponent() {
        this.subscriptions = [];
    }
    /**
     * @param {?} subscription
     * @return {?}
     */
    SubscriberComponent.prototype.addSubscription = /**
     * @param {?} subscription
     * @return {?}
     */
    function (subscription) {
        this.subscriptions.push(subscription);
    };
    /**
     * @return {?}
     */
    SubscriberComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                var subscription = _b.value;
                subscription.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    return SubscriberComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ModalOutletService = /** @class */ (function () {
    function ModalOutletService() {
        this.modalComponentModel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.modalComponentModel$ = this.modalComponentModel.asObservable();
    }
    /**
     * Opens a modal containing a new component instance of the given component type, and populated
     * with the given context. This will close any open modals before opening the next modal.
     *
     * @template T
     * @param {?} componentType the class of the component to instantiate
     * @param {?} context an object to copy into the component instance
     * @param {?} resultEventName
     * @return {?} an observable which will send an event for the result of the dialog
     */
    ModalOutletService.prototype.showModal = /**
     * Opens a modal containing a new component instance of the given component type, and populated
     * with the given context. This will close any open modals before opening the next modal.
     *
     * @template T
     * @param {?} componentType the class of the component to instantiate
     * @param {?} context an object to copy into the component instance
     * @param {?} resultEventName
     * @return {?} an observable which will send an event for the result of the dialog
     */
    function (componentType, context, resultEventName) {
        var _this = this;
        // Close any existing modal without a result
        this.closeModal();
        // Tell the modal component outlet there is a new modal
        this.modalComponentModel.next({
            componentType: componentType,
            context: context,
            resultEventName: /** @type {?} */ (resultEventName)
        });
        // Return an observable for the new modal
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
            _this.currentSubscriber = subscriber;
        });
    };
    /**
     * Closes the current modal, if there is one
     *
     * @param {?=} result the result to pass to the subscriber of the modal observable
     * @return {?}
     */
    ModalOutletService.prototype.closeModal = /**
     * Closes the current modal, if there is one
     *
     * @param {?=} result the result to pass to the subscriber of the modal observable
     * @return {?}
     */
    function (result) {
        if (result === void 0) { result = null; }
        // Tell the modal component outlet to close the modal
        this.modalComponentModel.next(null);
        if (this.currentSubscriber) {
            // Let the subscriber to the modal know that the modal closed with whatever result we have
            this.currentSubscriber.next(result);
            this.currentSubscriber.complete();
            this.currentSubscriber = null;
        }
    };
    /**
     * Checks if there is currently an open modal
     *
     * @return {?} whether or not there is currently an open modal
     */
    ModalOutletService.prototype.isModalOpen = /**
     * Checks if there is currently an open modal
     *
     * @return {?} whether or not there is currently an open modal
     */
    function () {
        return this.modalComponentModel.getValue() !== null;
    };
    ModalOutletService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ModalOutletService.ctorParameters = function () { return []; };
    /** @nocollapse */ ModalOutletService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function ModalOutletService_Factory() { return new ModalOutletService(); }, token: ModalOutletService, providedIn: "root" });
    return ModalOutletService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var popDefaultParams = {
    duration: '0.2s ease',
    scale: 0.75
};
/** @type {?} */
var popStyle = {
    opacity: 0,
    transform: 'scale({{ scale }})'
};
/** @type {?} */
var popIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])(popStyle),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{ duration }}')
], {
    params: popDefaultParams
});
/** @type {?} */
var popOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{ duration }}'),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])(popStyle)
], {
    params: popDefaultParams
});
/** @type {?} */
var fadeDefaultParams = {
    duration: '0.2s ease'
};
/** @type {?} */
var fadeStyle = {
    opacity: 0
};
/** @type {?} */
var fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])(fadeStyle),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{ duration }}')
], {
    params: fadeDefaultParams
});
/** @type {?} */
var fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{ duration }}'),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])(fadeStyle)
], {
    params: fadeDefaultParams
});
/** @type {?} */
var overlayFadeTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('overlayFade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        display: 'none'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({})),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('out => in', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(fadeIn),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('@modalFade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animateChild"])()
            ])
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('in => out', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(fadeOut),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('@modalFade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animateChild"])()
            ])
        ])
    ])
]);
/** @type {?} */
var modalFadeTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('modalFade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({})),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({})),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('out => in', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(popIn)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('in => out', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(popOut)
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ModalOutletComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModalOutletComponent, _super);
    function ModalOutletComponent(modalOutletService, componentFactoryResolver, changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this.modalOutletService = modalOutletService;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.changeDetectorRef = changeDetectorRef;
        return _this;
    }
    /**
     * Starts listening to the ModalOutletService for the latest modal component,
     * once the outlet is ready to display modal components
     * @return {?}
     */
    ModalOutletComponent.prototype.ngAfterViewInit = /**
     * Starts listening to the ModalOutletService for the latest modal component,
     * once the outlet is ready to display modal components
     * @return {?}
     */
    function () {
        var _this = this;
        // Once the view is ready, listen to the modal outlet service for new modals
        this.addSubscription(this.modalOutletService.modalComponentModel$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(Boolean))
            .subscribe(function (componentModel) { return _this.loadComponent(componentModel); }));
    };
    /**
     * Loads a modal component from a given model
     * @param {?} componentModel the model to load a component from
     * @return {?}
     */
    ModalOutletComponent.prototype.loadComponent = /**
     * Loads a modal component from a given model
     * @param {?} componentModel the model to load a component from
     * @return {?}
     */
    function (componentModel) {
        var _this = this;
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver
            .resolveComponentFactory(componentModel.componentType);
        /** @type {?} */
        var componentRef = this.modalHostRef.createComponent(componentFactory);
        /** @type {?} */
        var componentInstance = componentRef.instance;
        // Initialize the component instance with the given context
        for (var key in componentModel.context) {
            if (!componentModel.context.hasOwnProperty(key)) {
                continue;
            }
            componentInstance[key] = componentModel.context[key];
        }
        /** @type {?} */
        var resultEvent = componentInstance[componentModel.resultEventName];
        if (resultEvent && resultEvent instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]) {
            resultEvent.subscribe(function (result) { return _this.modalOutletService.closeModal(result); });
        }
        else {
            console.warn("The model component instance does not contain a valid EventEmitter with the name " + componentModel.resultEventName + ". " +
                'Result events will not be captured for this modal. ' +
                'Double check the name and make sure you are instantiating it in your component\'s constructor.');
        }
        // Tell Angular to re-check for changes because we manually set the data on the component instance
        // TODO: determine if this is still necessary. If it is, check if we can do it on the componentRef instead
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @param {?} toState
     * @return {?}
     */
    ModalOutletComponent.prototype.onFadeDone = /**
     * @param {?} toState
     * @return {?}
     */
    function (toState) {
        // Whenever we finish animating out, clear the children of the modal host
        // to destroy whatever modal component was loaded
        if (toState === 'out') {
            this.modalHostRef.clear();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalOutletComponent.prototype.onOverlayClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // When we get a click event on the overlay, close the current modal. Don't close the modal
        // if the click was not on the overlay because that could include the modal itself.
        if (this.modalOverlayRefs.find(function (overlayRef) { return overlayRef.nativeElement === event.target; })) {
            this.modalOutletService.closeModal();
        }
    };
    ModalOutletComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ch-modal-outlet',
                    template: "<div #modalOverlay\n     class=\"modal-overlay\"\n     on-click=\"onOverlayClicked($event)\"\n     [@overlayFade]=\"modalOutletService.isModalOpen() ? 'in' : 'out'\">\n\n  <div #modalOverlay\n       class=\"modal-container\"\n       [@modalFade]=\"modalOutletService.isModalOpen() ? 'in' : 'out'\"\n       (@modalFade.done)=\"onFadeDone($event.toState)\">\n    <div #modalHost></div>\n  </div>\n</div>\n",
                    styles: [".modal-overlay{position:fixed;background-color:rgba(0,0,0,.5);z-index:1000;display:flex;align-items:center;top:0;left:0;right:0;bottom:0}.modal-overlay .modal-container{max-height:100%;width:100%;overflow-y:auto;display:flex;justify-content:center}"],
                    animations: [
                        overlayFadeTrigger,
                        modalFadeTrigger
                    ]
                },] },
    ];
    /** @nocollapse */
    ModalOutletComponent.ctorParameters = function () { return [
        { type: ModalOutletService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    ModalOutletComponent.propDecorators = {
        modalHostRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['modalHost', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },] }],
        modalOverlayRefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['modalOverlay', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }]
    };
    return ModalOutletComponent;
}(SubscriberComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgModalOutletModule = /** @class */ (function () {
    function NgModalOutletModule() {
    }
    NgModalOutletModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    ],
                    declarations: [
                        ModalOutletComponent
                    ],
                    exports: [ModalOutletComponent],
                    providers: [ModalOutletService]
                },] },
    ];
    return NgModalOutletModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbW9kYWwtb3V0bGV0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1tb2RhbC1vdXRsZXQvbGliL2NvbXBvbmVudHMvc3Vic2NyaWJlci1jb21wb25lbnQudHMiLCJuZzovL25nLW1vZGFsLW91dGxldC9saWIvc2VydmljZXMvbW9kYWwtb3V0bGV0L21vZGFsLW91dGxldC5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1tb2RhbC1vdXRsZXQvbGliL2FuaW1hdGlvbnMudHMiLCJuZzovL25nLW1vZGFsLW91dGxldC9saWIvY29tcG9uZW50cy9tb2RhbC1vdXRsZXQvbW9kYWwtb3V0bGV0LmNvbXBvbmVudC50cyIsIm5nOi8vbmctbW9kYWwtb3V0bGV0L2xpYi9uZy1tb2RhbC1vdXRsZXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3Vic2NyaXB0aW9uczogQXJyYXk8U3Vic2NyaXB0aW9uPjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBbXTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhZGRTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3Qgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpYmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRNb2RlbCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvY29tcG9uZW50LW1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxPdXRsZXRTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIEFuIG9ic2VydmFibGUgdHJhY2tpbmcgdGhlIGN1cnJlbnQgbW9kYWwgY29tcG9uZW50J3MgbW9kZWxcbiAgICovXG4gIHB1YmxpYyBtb2RhbENvbXBvbmVudE1vZGVsJDogT2JzZXJ2YWJsZTxDb21wb25lbnRNb2RlbD47XG4gIHByaXZhdGUgbW9kYWxDb21wb25lbnRNb2RlbDogQmVoYXZpb3JTdWJqZWN0PENvbXBvbmVudE1vZGVsPjtcblxuICBwcml2YXRlIGN1cnJlbnRTdWJzY3JpYmVyOiBTdWJzY3JpYmVyPENvbXBvbmVudE1vZGVsPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1vZGFsQ29tcG9uZW50TW9kZWwgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICAgIHRoaXMubW9kYWxDb21wb25lbnRNb2RlbCQgPSB0aGlzLm1vZGFsQ29tcG9uZW50TW9kZWwuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYSBtb2RhbCBjb250YWluaW5nIGEgbmV3IGNvbXBvbmVudCBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gY29tcG9uZW50IHR5cGUsIGFuZCBwb3B1bGF0ZWRcbiAgICogd2l0aCB0aGUgZ2l2ZW4gY29udGV4dC4gVGhpcyB3aWxsIGNsb3NlIGFueSBvcGVuIG1vZGFscyBiZWZvcmUgb3BlbmluZyB0aGUgbmV4dCBtb2RhbC5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudFR5cGUgdGhlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQgdG8gaW5zdGFudGlhdGVcbiAgICogQHBhcmFtIGNvbnRleHQgYW4gb2JqZWN0IHRvIGNvcHkgaW50byB0aGUgY29tcG9uZW50IGluc3RhbmNlXG4gICAqIEByZXR1cm5zIGFuIG9ic2VydmFibGUgd2hpY2ggd2lsbCBzZW5kIGFuIGV2ZW50IGZvciB0aGUgcmVzdWx0IG9mIHRoZSBkaWFsb2dcbiAgICovXG4gIHB1YmxpYyBzaG93TW9kYWw8VD4oY29tcG9uZW50VHlwZTogVHlwZTxUPiwgY29udGV4dDoge1tLIGluIGtleW9mIFRdPzogVFtLXX0sIHJlc3VsdEV2ZW50TmFtZToga2V5b2YgVCk6IE9ic2VydmFibGU8Q29tcG9uZW50TW9kZWw+IHtcbiAgICAvLyBDbG9zZSBhbnkgZXhpc3RpbmcgbW9kYWwgd2l0aG91dCBhIHJlc3VsdFxuICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuXG4gICAgLy8gVGVsbCB0aGUgbW9kYWwgY29tcG9uZW50IG91dGxldCB0aGVyZSBpcyBhIG5ldyBtb2RhbFxuICAgIHRoaXMubW9kYWxDb21wb25lbnRNb2RlbC5uZXh0KHtcbiAgICAgIGNvbXBvbmVudFR5cGUsXG4gICAgICBjb250ZXh0LFxuICAgICAgcmVzdWx0RXZlbnROYW1lOiA8c3RyaW5nPnJlc3VsdEV2ZW50TmFtZVxuICAgIH0pO1xuXG4gICAgLy8gUmV0dXJuIGFuIG9ic2VydmFibGUgZm9yIHRoZSBuZXcgbW9kYWxcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8Q29tcG9uZW50TW9kZWw+KChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPENvbXBvbmVudE1vZGVsPikgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBjdXJyZW50IG1vZGFsLCBpZiB0aGVyZSBpcyBvbmVcbiAgICpcbiAgICogQHBhcmFtIHJlc3VsdCB0aGUgcmVzdWx0IHRvIHBhc3MgdG8gdGhlIHN1YnNjcmliZXIgb2YgdGhlIG1vZGFsIG9ic2VydmFibGVcbiAgICovXG4gIHB1YmxpYyBjbG9zZU1vZGFsKHJlc3VsdDogYW55ID0gbnVsbCk6IHZvaWQge1xuICAgIC8vIFRlbGwgdGhlIG1vZGFsIGNvbXBvbmVudCBvdXRsZXQgdG8gY2xvc2UgdGhlIG1vZGFsXG4gICAgdGhpcy5tb2RhbENvbXBvbmVudE1vZGVsLm5leHQobnVsbCk7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50U3Vic2NyaWJlcikge1xuICAgICAgLy8gTGV0IHRoZSBzdWJzY3JpYmVyIHRvIHRoZSBtb2RhbCBrbm93IHRoYXQgdGhlIG1vZGFsIGNsb3NlZCB3aXRoIHdoYXRldmVyIHJlc3VsdCB3ZSBoYXZlXG4gICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpYmVyLm5leHQocmVzdWx0KTtcbiAgICAgIHRoaXMuY3VycmVudFN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgIHRoaXMuY3VycmVudFN1YnNjcmliZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlcmUgaXMgY3VycmVudGx5IGFuIG9wZW4gbW9kYWxcbiAgICpcbiAgICogQHJldHVybnMgd2hldGhlciBvciBub3QgdGhlcmUgaXMgY3VycmVudGx5IGFuIG9wZW4gbW9kYWxcbiAgICovXG4gIHB1YmxpYyBpc01vZGFsT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbENvbXBvbmVudE1vZGVsLmdldFZhbHVlKCkgIT09IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFuaW1hdGlvbiwgc3R5bGUsIGFuaW1hdGUsIHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLFxyXG4gIHVzZUFuaW1hdGlvbiwgZ3JvdXAsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuLy8gI3JlZ2lvbiBwb3BcclxuY29uc3QgcG9wRGVmYXVsdFBhcmFtcyA9IHtcclxuICBkdXJhdGlvbjogJzAuMnMgZWFzZScsXHJcbiAgc2NhbGU6IDAuNzVcclxufTtcclxuXHJcbmNvbnN0IHBvcFN0eWxlID0ge1xyXG4gIG9wYWNpdHk6IDAsXHJcbiAgdHJhbnNmb3JtOiAnc2NhbGUoe3sgc2NhbGUgfX0pJ1xyXG59O1xyXG5cclxuY29uc3QgcG9wSW4gPSBhbmltYXRpb24oW1xyXG4gIHN0eWxlKHBvcFN0eWxlKSxcclxuICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fScpXHJcbl0sIHtcclxuICBwYXJhbXM6IHBvcERlZmF1bHRQYXJhbXNcclxufSk7XHJcblxyXG5jb25zdCBwb3BPdXQgPSBhbmltYXRpb24oW1xyXG4gIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19JyksXHJcbiAgc3R5bGUocG9wU3R5bGUpXHJcbl0sIHtcclxuICBwYXJhbXM6IHBvcERlZmF1bHRQYXJhbXNcclxufSk7XHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gZmFkZVxyXG5jb25zdCBmYWRlRGVmYXVsdFBhcmFtcyA9IHtcclxuICBkdXJhdGlvbjogJzAuMnMgZWFzZSdcclxufTtcclxuXHJcbmNvbnN0IGZhZGVTdHlsZSA9IHtcclxuICBvcGFjaXR5OiAwXHJcbn07XHJcblxyXG5jb25zdCBmYWRlSW4gPSBhbmltYXRpb24oW1xyXG4gIHN0eWxlKGZhZGVTdHlsZSksXHJcbiAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX0nKVxyXG5dLCB7XHJcbiAgcGFyYW1zOiBmYWRlRGVmYXVsdFBhcmFtc1xyXG59KTtcclxuXHJcbmNvbnN0IGZhZGVPdXQgPSBhbmltYXRpb24oW1xyXG4gIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19JyksXHJcbiAgc3R5bGUoZmFkZVN0eWxlKVxyXG5dLCB7XHJcbiAgcGFyYW1zOiBmYWRlRGVmYXVsdFBhcmFtc1xyXG59KTtcclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuZXhwb3J0IGNvbnN0IG92ZXJsYXlGYWRlVHJpZ2dlcjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignb3ZlcmxheUZhZGUnLCBbXHJcbiAgc3RhdGUoJ291dCcsIHN0eWxlKHtcclxuICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gIH0pKSxcclxuICBzdGF0ZSgnaW4nLCBzdHlsZSh7fSkpLFxyXG4gIHRyYW5zaXRpb24oJ291dCA9PiBpbicsIFtcclxuICAgIGdyb3VwKFtcclxuICAgICAgdXNlQW5pbWF0aW9uKGZhZGVJbiksXHJcbiAgICAgIHF1ZXJ5KCdAbW9kYWxGYWRlJywgW1xyXG4gICAgICAgIGFuaW1hdGVDaGlsZCgpXHJcbiAgICAgIF0pXHJcbiAgICBdKVxyXG4gIF0pLFxyXG4gIHRyYW5zaXRpb24oJ2luID0+IG91dCcsIFtcclxuICAgIGdyb3VwKFtcclxuICAgICAgdXNlQW5pbWF0aW9uKGZhZGVPdXQpLFxyXG4gICAgICBxdWVyeSgnQG1vZGFsRmFkZScsIFtcclxuICAgICAgICBhbmltYXRlQ2hpbGQoKVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdKVxyXG5dKTtcclxuXHJcbmV4cG9ydCBjb25zdCBtb2RhbEZhZGVUcmlnZ2VyOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdtb2RhbEZhZGUnLCBbXHJcbiAgc3RhdGUoJ291dCcsIHN0eWxlKHt9KSksXHJcbiAgc3RhdGUoJ2luJywgc3R5bGUoe30pKSxcclxuICB0cmFuc2l0aW9uKCdvdXQgPT4gaW4nLCBbXHJcbiAgICB1c2VBbmltYXRpb24ocG9wSW4pXHJcbiAgXSksXHJcbiAgdHJhbnNpdGlvbignaW4gPT4gb3V0JywgW1xyXG4gICAgdXNlQW5pbWF0aW9uKHBvcE91dClcclxuICBdKVxyXG5dKTtcclxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmliZXJDb21wb25lbnQgfSBmcm9tICcuLi9zdWJzY3JpYmVyLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbE91dGxldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb2RhbC1vdXRsZXQvbW9kYWwtb3V0bGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50TW9kZWwgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2NvbXBvbmVudC1tb2RlbCc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvdmVybGF5RmFkZVRyaWdnZXIsIG1vZGFsRmFkZVRyaWdnZXIgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2gtbW9kYWwtb3V0bGV0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICNtb2RhbE92ZXJsYXlcbiAgICAgY2xhc3M9XCJtb2RhbC1vdmVybGF5XCJcbiAgICAgb24tY2xpY2s9XCJvbk92ZXJsYXlDbGlja2VkKCRldmVudClcIlxuICAgICBbQG92ZXJsYXlGYWRlXT1cIm1vZGFsT3V0bGV0U2VydmljZS5pc01vZGFsT3BlbigpID8gJ2luJyA6ICdvdXQnXCI+XG5cbiAgPGRpdiAjbW9kYWxPdmVybGF5XG4gICAgICAgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIlxuICAgICAgIFtAbW9kYWxGYWRlXT1cIm1vZGFsT3V0bGV0U2VydmljZS5pc01vZGFsT3BlbigpID8gJ2luJyA6ICdvdXQnXCJcbiAgICAgICAoQG1vZGFsRmFkZS5kb25lKT1cIm9uRmFkZURvbmUoJGV2ZW50LnRvU3RhdGUpXCI+XG4gICAgPGRpdiAjbW9kYWxIb3N0PjwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC5tb2RhbC1vdmVybGF5e3Bvc2l0aW9uOmZpeGVkO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNSk7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjB9Lm1vZGFsLW92ZXJsYXkgLm1vZGFsLWNvbnRhaW5lcnttYXgtaGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdy15OmF1dG87ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXJ9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICBvdmVybGF5RmFkZVRyaWdnZXIsXG4gICAgbW9kYWxGYWRlVHJpZ2dlclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsT3V0bGV0Q29tcG9uZW50IGV4dGVuZHMgU3Vic2NyaWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIC8vIFRoZSBWaWV3Q29udGFpbmVyIHRvIGFkZCB0aGUgbW9kYWwgY29tcG9uZW50IHRvXG4gIEBWaWV3Q2hpbGQoJ21vZGFsSG9zdCcsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSlcbiAgbW9kYWxIb3N0UmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIC8vIFRoZSBFbGVtZW50IG9mIHRoZSBtb2RhbCBvdmVybGF5XG4gIEBWaWV3Q2hpbGRyZW4oJ21vZGFsT3ZlcmxheScsIHtyZWFkOiBFbGVtZW50UmVmfSlcbiAgbW9kYWxPdmVybGF5UmVmczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RhbE91dGxldFNlcnZpY2U6IE1vZGFsT3V0bGV0U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBsaXN0ZW5pbmcgdG8gdGhlIE1vZGFsT3V0bGV0U2VydmljZSBmb3IgdGhlIGxhdGVzdCBtb2RhbCBjb21wb25lbnQsXG4gICAqIG9uY2UgdGhlIG91dGxldCBpcyByZWFkeSB0byBkaXNwbGF5IG1vZGFsIGNvbXBvbmVudHNcbiAgICovXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gT25jZSB0aGUgdmlldyBpcyByZWFkeSwgbGlzdGVuIHRvIHRoZSBtb2RhbCBvdXRsZXQgc2VydmljZSBmb3IgbmV3IG1vZGFsc1xuICAgIHRoaXMuYWRkU3Vic2NyaXB0aW9uKHRoaXMubW9kYWxPdXRsZXRTZXJ2aWNlLm1vZGFsQ29tcG9uZW50TW9kZWwkXG4gICAgICAucGlwZShmaWx0ZXIoQm9vbGVhbikpXG4gICAgICAuc3Vic2NyaWJlKChjb21wb25lbnRNb2RlbCkgPT4gdGhpcy5sb2FkQ29tcG9uZW50KGNvbXBvbmVudE1vZGVsKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGEgbW9kYWwgY29tcG9uZW50IGZyb20gYSBnaXZlbiBtb2RlbFxuICAgKiBAcGFyYW0gY29tcG9uZW50TW9kZWwgdGhlIG1vZGVsIHRvIGxvYWQgYSBjb21wb25lbnQgZnJvbVxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkQ29tcG9uZW50KGNvbXBvbmVudE1vZGVsOiBDb21wb25lbnRNb2RlbCk6IHZvaWQge1xuICAgIC8vIEdldCBhIGNvbXBvbmVudCBmYWN0b3J5IGZvciB0aGUgY29tcG9uZW50IHR5cGVcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRNb2RlbC5jb21wb25lbnRUeXBlKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgY29tcG9uZW50IGFzIGEgY2hpbGQgb2YgdGhlIG1vZGFsIGhvc3RcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLm1vZGFsSG9zdFJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gICAgY29uc3QgY29tcG9uZW50SW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2l0aCB0aGUgZ2l2ZW4gY29udGV4dFxuICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudE1vZGVsLmNvbnRleHQpIHtcbiAgICAgIGlmICghY29tcG9uZW50TW9kZWwuY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7IGNvbnRpbnVlOyB9XG4gICAgICBjb21wb25lbnRJbnN0YW5jZVtrZXldID0gY29tcG9uZW50TW9kZWwuY29udGV4dFtrZXldO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiB0byB0aGUgY29tcG9uZW50IGluc3RhbmNlJ3MgcmVzdWx0IGV2ZW50XG4gICAgY29uc3QgcmVzdWx0RXZlbnQgPSBjb21wb25lbnRJbnN0YW5jZVtjb21wb25lbnRNb2RlbC5yZXN1bHRFdmVudE5hbWVdO1xuICAgIGlmIChyZXN1bHRFdmVudCAmJiByZXN1bHRFdmVudCBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgICAgcmVzdWx0RXZlbnQuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4gdGhpcy5tb2RhbE91dGxldFNlcnZpY2UuY2xvc2VNb2RhbChyZXN1bHQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKGBUaGUgbW9kZWwgY29tcG9uZW50IGluc3RhbmNlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCBFdmVudEVtaXR0ZXIgd2l0aCB0aGUgbmFtZSAke2NvbXBvbmVudE1vZGVsLnJlc3VsdEV2ZW50TmFtZX0uIGAgK1xuICAgICAgICAnUmVzdWx0IGV2ZW50cyB3aWxsIG5vdCBiZSBjYXB0dXJlZCBmb3IgdGhpcyBtb2RhbC4gJyArXG4gICAgICAgICdEb3VibGUgY2hlY2sgdGhlIG5hbWUgYW5kIG1ha2Ugc3VyZSB5b3UgYXJlIGluc3RhbnRpYXRpbmcgaXQgaW4geW91ciBjb21wb25lbnRcXCdzIGNvbnN0cnVjdG9yLicpO1xuICAgIH1cblxuICAgIC8vIFRlbGwgQW5ndWxhciB0byByZS1jaGVjayBmb3IgY2hhbmdlcyBiZWNhdXNlIHdlIG1hbnVhbGx5IHNldCB0aGUgZGF0YSBvbiB0aGUgY29tcG9uZW50IGluc3RhbmNlXG4gICAgLy8gVE9ETzogZGV0ZXJtaW5lIGlmIHRoaXMgaXMgc3RpbGwgbmVjZXNzYXJ5LiBJZiBpdCBpcywgY2hlY2sgaWYgd2UgY2FuIGRvIGl0IG9uIHRoZSBjb21wb25lbnRSZWYgaW5zdGVhZFxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHVibGljIG9uRmFkZURvbmUodG9TdGF0ZTogc3RyaW5nKSB7XG4gICAgLy8gV2hlbmV2ZXIgd2UgZmluaXNoIGFuaW1hdGluZyBvdXQsIGNsZWFyIHRoZSBjaGlsZHJlbiBvZiB0aGUgbW9kYWwgaG9zdFxuICAgIC8vIHRvIGRlc3Ryb3kgd2hhdGV2ZXIgbW9kYWwgY29tcG9uZW50IHdhcyBsb2FkZWRcbiAgICBpZiAodG9TdGF0ZSA9PT0gJ291dCcpIHtcbiAgICAgIHRoaXMubW9kYWxIb3N0UmVmLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uT3ZlcmxheUNsaWNrZWQoZXZlbnQ6IHsgdGFyZ2V0OiBhbnk7IH0pIHtcbiAgICAvLyBXaGVuIHdlIGdldCBhIGNsaWNrIGV2ZW50IG9uIHRoZSBvdmVybGF5LCBjbG9zZSB0aGUgY3VycmVudCBtb2RhbC4gRG9uJ3QgY2xvc2UgdGhlIG1vZGFsXG4gICAgLy8gaWYgdGhlIGNsaWNrIHdhcyBub3Qgb24gdGhlIG92ZXJsYXkgYmVjYXVzZSB0aGF0IGNvdWxkIGluY2x1ZGUgdGhlIG1vZGFsIGl0c2VsZi5cbiAgICBpZiAodGhpcy5tb2RhbE92ZXJsYXlSZWZzLmZpbmQoKG92ZXJsYXlSZWYpID0+IG92ZXJsYXlSZWYubmF0aXZlRWxlbWVudCA9PT0gZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5tb2RhbE91dGxldFNlcnZpY2UuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IE1vZGFsT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsLW91dGxldC9tb2RhbC1vdXRsZXQuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsT3V0bGV0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbW9kYWwtb3V0bGV0L21vZGFsLW91dGxldC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNb2RhbE91dGxldENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbTW9kYWxPdXRsZXRDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtNb2RhbE91dGxldFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5nTW9kYWxPdXRsZXRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyIsInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUdBO0lBR0U7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7SUFFUyw2Q0FBZTs7OztJQUF6QixVQUEwQixZQUEwQjtRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZ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

/***/ }),

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
/* harmony import */ var ng_modal_outlet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-modal-outlet */ "./dist/ng-modal-outlet/fesm5/ng-modal-outlet.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/example-dialog/example-dialog.component */ "./src/app/components/example-dialog/example-dialog.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ExampleDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_modal_outlet__WEBPACK_IMPORTED_MODULE_1__["NgModalOutletModule"]
            ],
            providers: [],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [
                _components_example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ExampleDialogComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/app/app.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-component {\r\n  padding: 100px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-component\">\n  <button (click)=\"openModal()\">button</button>\n  {{result}}\n</div>\n\n<ch-modal-outlet></ch-modal-outlet>\n"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../example-dialog/example-dialog.component */ "./src/app/components/example-dialog/example-dialog.component.ts");
/* harmony import */ var ng_modal_outlet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-modal-outlet */ "./dist/ng-modal-outlet/fesm5/ng-modal-outlet.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(modalOutletService) {
        this.modalOutletService = modalOutletService;
    }
    AppComponent.prototype.openModal = function () {
        var _this = this;
        this.modalOutletService.showModal(_example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ExampleDialogComponent"], {
            name: 'Hello, World!',
            word: 'Lorem Ipsum!'
        }, 'result').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean)).subscribe(function (result) {
            _this.result = result;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ng_modal_outlet__WEBPACK_IMPORTED_MODULE_2__["ModalOutletService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/example-dialog/example-dialog.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/example-dialog/example-dialog.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-dialog-component {\r\n  background-color: white;\r\n  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 0 3px 0 rgba(0,0,0,.12);\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  max-width: 400px;\r\n}\r\n\r\n.example-dialog-component .content {\r\n  padding: 10px;\r\n}\r\n\r\n.example-dialog-component .options {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/example-dialog/example-dialog.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/example-dialog/example-dialog.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-dialog-component\">\n  <div class=\"content\">\n      {{name}}\n      <br>\n\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas tempus dolor, non commodo lacus pharetra nec. Quisque turpis diam, posuere id nisi in, dapibus tincidunt dui. Aliquam quis pretium sem, a convallis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur lobortis semper metus, sed venenatis libero aliquam vel. Integer interdum est ut dolor dapibus interdum. Morbi consectetur, libero a tempor consequat, velit odio sodales sapien, ut faucibus libero libero eu leo.\n\n      <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt dolore ex labore nesciunt, non quam quas quasi, repellat unde veritatis vitae. Atque ipsam quaerat quam soluta, sunt totam! Aperiam eos est ipsam nemo veritatis. Accusamus consequatur corporis debitis dolorem eos error explicabo, magnam minus non odio optio porro quia quis quisquam suscipit tempora velit! Aliquid aperiam autem cumque cupiditate dicta, dolore dolores doloribus earum enim est facere facilis ipsa iure nam nobis nostrum pariatur perspiciatis quae quas quo quod reprehenderit sunt, suscipit tempore, unde vitae voluptates voluptatibus. Fugiat obcaecati saepe voluptatibus? Aliquam dolores enim est et harum, itaque odio provident quaerat quam quasi quis recusandae repellat sapiente soluta vitae. Accusamus aliquid autem commodi consequatur, dignissimos dolorem error eum fuga fugiat illum ipsum iure magnam minima minus obcaecati officia porro possimus praesentium quasi quibusdam repudiandae soluta veniam! Ad alias amet animi architecto aspernatur atque commodi consectetur cum debitis dolorem eius est illo illum ipsa iste iure laboriosam minima nemo nihil non nostrum nulla obcaecati perspiciatis provident quae quas, quasi quidem sapiente suscipit unde veritatis vitae voluptatem voluptatum. Ab aliquid, animi aspernatur atque aut, beatae corporis cupiditate debitis dolorem doloremque earum facere illo ipsam labore nesciunt nostrum officia quaerat quas quisquam rerum soluta tempora temporibus ullam! Blanditiis commodi consequuntur cumque error necessitatibus numquam, possimus? Ad aut, doloremque ducimus hic, molestiae praesentium provident quas quo sint suscipit, temporibus vel veniam veritatis! Atque commodi cum ipsa iure voluptatum. Assumenda atque autem debitis ducimus eos et iusto laudantium libero non obcaecati, officia quaerat repellendus, voluptates! Dolor, dolorem explicabo facilis id illum necessitatibus quidem quisquam tenetur. Consequatur ea inventore ipsum iusto maxime quidem quod sit soluta totam! Aliquam beatae cum cumque dolorem eligendi, eos error id iste maiores neque nisi nobis quam recusandae repellat repudiandae sapiente tempore ut vel velit voluptates. Aliquid aperiam consequuntur, deserunt doloribus earum eum eveniet excepturi expedita incidunt iste, natus nihil quibusdam quis sint voluptatum? Blanditiis deleniti dolor doloremque ducimus error facere harum itaque magni nulla rerum, veritatis voluptatem? A accusantium adipisci aperiam assumenda beatae blanditiis consequatur cum delectus dolore doloribus eaque enim et, ex expedita facilis harum illo inventore laboriosam magnam maxime mollitia nesciunt nobis officiis porro quae quia quibusdam ratione reiciendis rem sed sequi sit suscipit tempore ullam ut velit voluptates. Ab accusamus accusantium animi, atque corporis culpa cum cupiditate delectus ea enim eos et eum fugit harum illo impedit ipsum maxime modi natus neque non pariatur perspiciatis praesentium quasi quis quo recusandae repellendus reprehenderit sapiente sequi, sunt ut veniam vero! Adipisci earum facilis illo minima nulla perspiciatis qui quia ratione repellat voluptatibus? Assumenda aut debitis delectus dicta, dignissimos dolor ducimus eum eveniet ipsam magnam minima minus molestias numquam odio quasi qui quis quod repellat repellendus, ut vitae voluptas voluptates? Adipisci aliquam dignissimos doloribus eius eveniet, in iste molestias odio officia, possimus, quam soluta ullam veritatis. Atque explicabo suscipit voluptates! Accusamus adipisci aspernatur blanditiis dolore, maiores mollitia neque praesentium repellat! Accusantium, beatae deserunt eligendi impedit in ipsa iste laborum mollitia quaerat quasi reprehenderit soluta suscipit, unde ut voluptate! Assumenda. -->\n  </div>\n\n  <div class=\"options\">\n    <a (click)=\"result.next(word)\">ok</a>\n    <a (click)=\"result.next()\">cancel</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/example-dialog/example-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/example-dialog/example-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExampleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDialogComponent", function() { return ExampleDialogComponent; });
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

var ExampleDialogComponent = /** @class */ (function () {
    function ExampleDialogComponent() {
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ExampleDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-example-dialog',
            template: __webpack_require__(/*! ./example-dialog.component.html */ "./src/app/components/example-dialog/example-dialog.component.html"),
            styles: [__webpack_require__(/*! ./example-dialog.component.css */ "./src/app/components/example-dialog/example-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExampleDialogComponent);
    return ExampleDialogComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\Projects\ng-modal-outlet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map