import {Component, Input} from '@angular/core';

@Component({
	selector:				'reactive-form-input',
	template:				`
		<div class="form-group" [ngStyle]="fieldObject.classField.custom.css.group">
			<label *ngIf="fieldObject.classField.custom.labelAbove">{{fieldObject.classField.custom.label || fieldObject.classField.name}}:</label>
			<input *ngIf="fieldObject.classField.custom.controlType === 'input' || !fieldObject.classField.custom.controlType" [type]="fieldObject.classField.custom.inputType || 'text'" title="{{fieldObject.classField.custom.label}}" class="form-control flex-item" [formControl]="fieldObject.classField.control" placeholder="{{fieldObject.classField.custom.label || fieldObject.classField.name}}" [ngStyle]="fieldObject.classField.custom.css.input">
			<select *ngIf="fieldObject.classField.custom.controlType === 'select'" [formControl]="fieldObject.classField.control" class="form-control" [ngStyle]="fieldObject.classField.custom.css.input"><option *ngFor="let opt of fieldObject.classField.custom.options" [value]="opt">{{opt}}</option></select>
		</div>
	`
})

export class ReactiveFormInput {
	@Input() fieldObject;
	
}