import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HexagonalComponent } from './Component/Hexagonal';
import { IndividualValues } from './Model/IndividualValues';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HexagonalComponent],
})
export class AppComponent {
  @Input() HP:number;
  @Input() Atk:number;
  @Input() Def:number;
  @Input() Spd:number;
  @Input() SpAtk:number;
  @Input() SpDef:number;
  title = 'app works!';
  constructor(){
    this.Rnd();
  }
  Rnd(){
    this.HP   = Math.floor(Math.random() * 80);
    this.Atk  = Math.floor(Math.random() * 80);
    this.Def  = Math.floor(Math.random() * 80);
    this.Spd  = Math.floor(Math.random() * 80);
    this.SpDef= Math.floor(Math.random() * 80);
    this.SpAtk= Math.floor(Math.random() * 80);
  }
    
}
