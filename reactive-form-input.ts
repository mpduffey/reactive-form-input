import {Component, Input} from '@angular/core';

@Component({
	selector:				'reactive-form-input',
	template:				`
		<div class="form-group" [ngStyle]="fieldObject.classField.custom.css.group">
			<label *ngIf="fieldObject.classField.custom.labelAbove || fieldObject.classField.custom.labelLeft"
						 [ngClass]="{'col-sm-2 col-form-label': fieldObject.classField.custom.labelLeft, 'toggle': fieldObject.classField.custom.controlType === 'array', 'checkbox-label': fieldObject.classField.custom.controlType === 'checkbox'}">
				{{fieldObject.classField.custom.label || fieldObject.classField.name}}:
			</label>
			<div [ngClass]="{'col-sm-10': fieldObject.classField.custom.labelLeft}">
				<input *ngIf="fieldObject.classField.custom.controlType === 'input' || fieldObject.classField.custom.controlType === 'checkbox' || !fieldObject.classField.custom.controlType" 
							 [type]="fieldObject.classField.custom.controlType || 'text'"
							 [value]="valueObject[fieldObject.classField.name] || null"
							 title="{{fieldObject.classField.custom.label}}"
							 class="form-control flex-item"
							 [formControl]="fieldObject.classField.control"
							 placeholder="{{fieldObject.classField.custom.label || fieldObject.classField.name}}"
							 [ngStyle]="fieldObject.classField.custom.css.input">
				<select *ngIf="fieldObject.classField.custom.controlType === 'select'"
								[formControl]="fieldObject.classField.control"
								class="form-control"
								[(ngModel)]="valueObject[fieldObject.classField.name] || fieldObject.classField.custom.defaultValue"
								[ngStyle]="fieldObject.classField.custom.css.input">
					<option *ngFor="let opt of fieldObject.classField.custom.options"
									[value]="opt.value || opt">{{opt.label || opt}}</option>
				</select>
				<div *ngIf="fieldObject.classField.custom.controlType === 'array'">
					<reactive-subform *ngFor="let item of valueObject[fieldObject.classField.name]" [valueItem]="item" [classField]="fieldObject.classField"></reactive-subform>
					<reactive-subform [classField]="fieldObject.classField" [valueItem]="{name: 'New Property'}"></reactive-subform>
				</div>
			</div>
		</div>
	`,
	styles:					[`
		label {padding-left: 0; padding-top: 5px;}
		.checkbox-label {padding-top: 0;}
		input[type="checkbox"] {border: none; box-shadow: none; height: 25px; margin-top: 0;}
		.sub-form {padding-left: 0;}
		.sub-form > p {margin: 5px 0; font-weight: bold;}
		.sub-form > p:hover {cursor: pointer; text-decoration: underline;}
		.toggle:hover {text-decoration: underline; cursor: pointer;}
	`]
})

export class ReactiveFormInput {
	@Input() fieldObject;
	@Input() valueObject:any = {};
	@Input() showSubform:boolean = false;
	
	toggleSubform = (inputType) => {
		if (inputType==='array') this.showSubform = !this.showSubform;
	}
}