import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular Input type="number" Validation';

  minVal = 1;
  maxVal = 10;

  numberFormControl = new FormControl('', [
    // Validators.required,
    Validators.min(this.minVal),
    Validators.max(this.maxVal),
  ]);

  value = this.numberFormControl.valueChanges;
}
