"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ReactiveFormInput = (function () {
    function ReactiveFormInput() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReactiveFormInput.prototype, "fieldObject", void 0);
    ReactiveFormInput = __decorate([
        core_1.Component({
            selector: 'reactive-form-input',
            template: "\n\t\t<div class=\"form-group\" [ngStyle]=\"fieldObject.classField.custom.css.group\">\n\t\t\t<label *ngIf=\"fieldObject.classField.custom.labelAbove\">{{fieldObject.classField.custom.label || fieldObject.classField.name}}:</label>\n\t\t\t<input *ngIf=\"fieldObject.classField.custom.controlType === 'input' || !fieldObject.classField.custom.controlType\" [type]=\"fieldObject.classField.custom.inputType || 'text'\" title=\"{{fieldObject.classField.custom.label}}\" class=\"form-control flex-item\" [formControl]=\"fieldObject.classField.control\" placeholder=\"{{fieldObject.classField.custom.label || fieldObject.classField.name}}\" [ngStyle]=\"fieldObject.classField.custom.css.input\">\n\t\t\t<select *ngIf=\"fieldObject.classField.custom.controlType === 'select'\" [formControl]=\"fieldObject.classField.control\" class=\"form-control\" [ngStyle]=\"fieldObject.classField.custom.css.input\"><option *ngFor=\"let opt of fieldObject.classField.custom.options\" [value]=\"opt\">{{opt}}</option></select>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], ReactiveFormInput);
    return ReactiveFormInput;
}());
exports.ReactiveFormInput = ReactiveFormInput;
//# sourceMappingURL=reactive-form-input.js.map