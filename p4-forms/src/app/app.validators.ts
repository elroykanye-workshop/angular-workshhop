import {FormControl} from "@angular/forms";

export class AppValidators {
  static skuValidator = (control: FormControl): { invalidSku: boolean } => {
    const rg = /^123/
    return {invalidSku: !rg.test(control.value)};
  }
}
