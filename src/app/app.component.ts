import { Component } from '@angular/core';
import { TypeCalc } from './models/enums/typeCalculator.model';
import dataCalc from './repositories/data_repositories.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  dataCalcList: {typeName: TypeCalc; url: string; icon: string; active: boolean}[] = dataCalc;
  constructor() {}
}
