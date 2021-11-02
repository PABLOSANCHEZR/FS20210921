import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { AbstractControl, MaxValidator, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

function isEmptyInputValue(value: any): boolean {

  return value == null || value.length === 0;
}
function hasValidLength(value: any): boolean {

  return value != null && typeof value.length === 'number';
}
export function minLengthValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors|null => {
    if (!control.value) { return null; }
    return control.value.length < control.value.minLength ?
     {'minlength': 'El minimo de caracteres son $minLength'}: null;

  };
}


export function maxLengthValidation(maxLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors|null => {
    if (!control.value) { return null; }
    return control.value.length > control.value.maxLength ?
      {'maxLength': 'El minimo de caracteres son '}: null;

  };
}
@Directive({
  selector: '[min][formControlName],[min][formControl],[min][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinValidator, multi: true }]
})
export class MinValidator implements Validator {

  @Input('min') min: number=0;

    validate(control: AbstractControl): ValidationErrors | null {

        return Validators.min(this.min)(control);
    }
}

@Directive({
  selector: '[max][formControlName],[max][formControl],[max][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxiValidator, multi: true }]
})
export class MaxiValidator implements Validator {

  @Input('min') min: number=0;

    validate(control: AbstractControl): ValidationErrors | null {

        return Validators.min(this.min)(control);
    }
}


@Directive({
  selector: '[maxLength][formControlName],[maxLength][formControl],[maxLength][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxLengthValidator, multi: true}]
})
export class MaxLengthValidator implements Validator {


  @Input('maxLength') maxLength: number =0;

  validate(control: AbstractControl): ValidationErrors | null {

      return Validators.maxLength(this.maxLength)(control);
  }
}

@Directive({
  selector: '[minLength][formControlName],[minLength][formControl],[minLength][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinLengthValidator, multi: true}]
})
export class MinLengthValidator implements Validator {


  @Input('minLength') minLength: number =0;

  validate(control: AbstractControl): ValidationErrors | null {

      return Validators.minLength(this.minLength)(control);
  }
}


@Directive({
  selector: '[required][formControlName],[required][formControl],[required][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: RequiredValidator, multi: true}]
})
export class RequiredValidator implements Validator {


  @Input('required') required: boolean | string = '' ;

  validate(control: AbstractControl): ValidationErrors | null {

      return isEmptyInputValue(control.value) ? {'required' : true} : null;
  }
}

export const SHOWERROR_VALIDADORES = [ MaxiValidator, MinValidator, MaxLengthValidator,MinLengthValidator, RequiredValidator ]
