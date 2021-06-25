import { Component } from '@angular/core';
import dataCalc from '../repositories/data_repositories.json';
import { TypeCalc } from './../models/enums/typeCalculator.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

    public home: string;
    public dataCalcList: {typeName: TypeCalc; url: string; icon: string; isOn: boolean}[] = dataCalc;

  constructor() {}

}
