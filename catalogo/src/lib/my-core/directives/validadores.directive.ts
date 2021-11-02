import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function UppercaseValidation(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) { return null; }
      return control.value === control.value.toUpperCase() ? null : { uppercase: 'Tiene que estar en mayusculas' }
  };
}

@Directive({
  selector: '[uppercase]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UppercaseValidator, multi: true }]
})
export class UppercaseValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return UppercaseValidation()(control);
  }
}

export function LowercaseValidation(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) { return null; }
      return control.value === control.value.toLowerCase() ? null : { lowercase: 'Tiene que estar en minusculas' }
  };
}

@Directive({
  selector: '[lowercase]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LowercaseValidator, multi: true }]
})
export class LowercaseValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return LowercaseValidation()(control);
  }
}

export function NIFValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
  if (!control.value) { return null; }
  const err = { nif: { invalidFormat: true, invalidChar: true } };
  if (/^\d{1,8}\w$/.test(control.value)) {
  const letterValue = control.value.substr(control.value.length - 1);
  const numberValue = control.value.substr(0, control.value.length - 1);
  err.nif.invalidFormat = false;
  return letterValue.toUpperCase() === 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(numberValue % 23) ? null : err;
  } else { return err; }
  };
  }
@Directive({
  selector: '[nif][formControlName],[nif][formControl],[nif][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NIFValidatorDirective, multi: true }]
  })
  export class NIFValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
  return NIFValidator()(control);
  }
  }

  @Directive({
    selector: '[equalsTo][formControlName],[equalsTo][formControl],[equalsTo][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: EqualValidator, multi: true }]
  })
  export class EqualValidator implements Validator {
    @Input('equalsTo') validateEqual: string | null | undefined;

    validate(control: AbstractControl): ValidationErrors | null {
      if (!control.value) return null;
      if (!this.validateEqual)
        throw new Error('Falta el control de referencia.');

      let valor = control.value;
      let cntrlBind = control.root.get(this.validateEqual);
      if (!cntrlBind)
        throw new Error('No encuentro el control de referencia.');

      if (valor) {
        return (valor !== cntrlBind.value) ? { 'equalsTo': `${valor} es distinto de ${cntrlBind?.value}` } : null;
      }
      return null;
    }
  }

  @Directive({
    selector: '[smallerorequalsThan][formControlName],[smallerorequalsThan][formControl],[smallerorequalsThan][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: SmallerOrEqualValidator, multi: true }]
  })
  export class SmallerOrEqualValidator implements Validator {
    @Input('smallerorequalsThan') validateEqual: string | null | undefined;

    validate(control: AbstractControl): ValidationErrors | null {
      if (!control.value) return null;
      if (!this.validateEqual)
        throw new Error('Falta el control de referencia.');

      let valor = control.value;
      let cntrlBind = control.root.get(this.validateEqual);
      if (!cntrlBind)
        throw new Error('No encuentro el control de referencia.');

      if (valor) {
        return (valor <= cntrlBind.value) ? { 'equalsTo': `${valor} es menor o igual que ${cntrlBind?.value}` } : null;
      }
      return null;
    }
  }
    @Directive({
    selector: '[smallerThan][formControlName],[smallerThan][formControl],[smallerThan][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: SmallerThanValidator, multi: true }]
  })
  export class SmallerThanValidator implements Validator {
    @Input('smallerThan') validateEqual: string | null | undefined;

    validate(control: AbstractControl): ValidationErrors | null {
      if (!control.value) return null;
      if (!this.validateEqual)
        throw new Error('Falta el control de referencia.');

      let valor = control.value;
      let cntrlBind = control.root.get(this.validateEqual);
      if (!cntrlBind)
        throw new Error('No encuentro el control de referencia.');

      if (valor) {
        return (valor < cntrlBind.value) ? { 'smallerThan': `${valor} es menor que ${cntrlBind?.value}` } : null;
      }
      return null;
    }
  }


  @Directive({
    selector: '[greatherThan][formControlName],[greatherThan][formControl],[greatherThan][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: GreatherThanValidator, multi: true }]
  })
  export class GreatherThanValidator implements Validator {
    @Input('greatherThan') validategreatherThan: string | null | undefined;

    validate(control: AbstractControl): ValidationErrors | null {
      if (!control.value) return null;
      if (!this.validategreatherThan)
        throw new Error('Falta el control de referencia.');

      let valor = control.value;
      let cntrlBind = control.root.get(this.validategreatherThan);
      if (!cntrlBind)
        throw new Error('No encuentro el control de referencia.');

      if (valor) {
        return (valor > cntrlBind.value) ? { 'greatherThan': `${valor} es mayor que ${cntrlBind?.value}` } : null;
      }
      return null;
    }
  }

  export function BeforeValidation(limite: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) { return null; }
      let fechaLimite = (new Date(limite)).valueOf();
      let fechaIntroducida = (new Date(control.value)).valueOf();
      if(isNaN(fechaLimite))
        throw new Error('No es una fecha correcta')
      return !isNaN(fechaIntroducida) && fechaIntroducida < fechaLimite ? null : { before: `Tiene que ser anterior a la fecha anterior al ${(new Date(limite)).toLocaleDateString()}` }
    };
  }

  @Directive({
    selector: '[before][formControlName],[before][formControl],[before][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: BeforeValidator, multi: true }]
  })
  export class BeforeValidator implements Validator {
    @Input() before = ''

    validate(control: AbstractControl): ValidationErrors | null {
      return BeforeValidation(this.before)(control);
    }
  }

  export function AfterValidation(limite: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) { return null; }
      let fechaLimite = (new Date(limite)).valueOf();
      let fechaIntroducida = (new Date(control.value)).valueOf();
      if(isNaN(fechaLimite))
        throw new Error('No es una fecha correcta')
      return !isNaN(fechaIntroducida) && fechaIntroducida > fechaLimite ? null : { after: `Tiene que ser superior a la fecha posterior al ${(new Date(limite)).toLocaleDateString()}` }
    };
  }

  @Directive({
    selector: '[after][formControlName],[after][formControl],[after][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: AfterValidator, multi: true }]
  })
  export class AfterValidator implements Validator {
    @Input() after = ''

    validate(control: AbstractControl): ValidationErrors | null {
      return AfterValidation(this.after)(control);
    }
  }
export const MIS_VALIDADORES = [ UppercaseValidator,LowercaseValidator, NIFValidatorDirective,SmallerOrEqualValidator, SmallerThanValidator, GreatherThanValidator, BeforeValidator, AfterValidator ]
