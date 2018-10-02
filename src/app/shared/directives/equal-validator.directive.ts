import { Directive, Attribute  } from '@angular/core';
import {Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[validateEqual]',
  providers: [{provide: NG_VALIDATORS, useExisting: EqualValidator, multi: true}]
})
export class EqualValidator implements Validator {

  constructor(@Attribute('validateEqual') public comparer: string) {}

  validate(c: AbstractControl): {[key: string]: any} {
    const e = c.root.get(this.comparer);
    if (e && c.value !== e.value) {
      return {'compare': true};
    }
    return null;
  }
}
