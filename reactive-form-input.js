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
        var _this = this;
        this.valueObject = {};
        this.showSubform = false;
        this.toggleSubform = function (inputType) {
            if (inputType === 'array')
                _this.showSubform = !_this.showSubform;
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReactiveFormInput.prototype, "fieldObject", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReactiveFormInput.prototype, "valueObject", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ReactiveFormInput.prototype, "showSubform", void 0);
    ReactiveFormInput = __decorate([
        core_1.Component({
            selector: 'reactive-form-input',
            template: "\n\t\t<div class=\"form-group\" [ngStyle]=\"fieldObject.classField.custom.css.group\">\n\t\t\t<label *ngIf=\"fieldObject.classField.custom.labelAbove || fieldObject.classField.custom.labelLeft\"\n\t\t\t\t\t\t [ngClass]=\"{'col-sm-2 col-form-label': fieldObject.classField.custom.labelLeft, 'toggle': fieldObject.classField.custom.controlType === 'array', 'checkbox-label': fieldObject.classField.custom.controlType === 'checkbox'}\">\n\t\t\t\t{{fieldObject.classField.custom.label || fieldObject.classField.name}}:\n\t\t\t</label>\n\t\t\t<div [ngClass]=\"{'col-sm-10': fieldObject.classField.custom.labelLeft}\">\n\t\t\t\t<input *ngIf=\"fieldObject.classField.custom.controlType === 'input' || fieldObject.classField.custom.controlType === 'checkbox' || !fieldObject.classField.custom.controlType\" \n\t\t\t\t\t\t\t [type]=\"fieldObject.classField.custom.controlType || 'text'\"\n\t\t\t\t\t\t\t [value]=\"valueObject[fieldObject.classField.name] || null\"\n\t\t\t\t\t\t\t title=\"{{fieldObject.classField.custom.label}}\"\n\t\t\t\t\t\t\t class=\"form-control flex-item\"\n\t\t\t\t\t\t\t [formControl]=\"fieldObject.classField.control\"\n\t\t\t\t\t\t\t placeholder=\"{{fieldObject.classField.custom.label || fieldObject.classField.name}}\"\n\t\t\t\t\t\t\t [ngStyle]=\"fieldObject.classField.custom.css.input\">\n\t\t\t\t<select *ngIf=\"fieldObject.classField.custom.controlType === 'select'\"\n\t\t\t\t\t\t\t\t[formControl]=\"fieldObject.classField.control\"\n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"valueObject[fieldObject.classField.name] || fieldObject.classField.custom.defaultValue\"\n\t\t\t\t\t\t\t\t[ngStyle]=\"fieldObject.classField.custom.css.input\">\n\t\t\t\t\t<option *ngFor=\"let opt of fieldObject.classField.custom.options\"\n\t\t\t\t\t\t\t\t\t[value]=\"opt.value || opt\">{{opt.label || opt}}</option>\n\t\t\t\t</select>\n\t\t\t\t<div *ngIf=\"fieldObject.classField.custom.controlType === 'array'\">\n\t\t\t\t\t<reactive-subform *ngFor=\"let item of valueObject[fieldObject.classField.name]\" [valueItem]=\"item\" [classField]=\"fieldObject.classField\"></reactive-subform>\n\t\t\t\t\t<reactive-subform [classField]=\"fieldObject.classField\" [valueItem]=\"{name: 'New Property'}\"></reactive-subform>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: ["\n\t\tlabel {padding-left: 0; padding-top: 5px;}\n\t\t.checkbox-label {padding-top: 0;}\n\t\tinput[type=\"checkbox\"] {border: none; box-shadow: none; height: 25px; margin-top: 0;}\n\t\t.sub-form {padding-left: 0;}\n\t\t.sub-form > p {margin: 5px 0; font-weight: bold;}\n\t\t.sub-form > p:hover {cursor: pointer; text-decoration: underline;}\n\t\t.toggle:hover {text-decoration: underline; cursor: pointer;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], ReactiveFormInput);
    return ReactiveFormInput;
}());
exports.ReactiveFormInput = ReactiveFormInput;
//# sourceMappingURL=reactive-form-input.js.map