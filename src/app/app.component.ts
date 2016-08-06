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
    this.HP=10;
    this.Atk=20;
    this.Def=30;
    this.Spd=40;
    this.SpDef=50;
    this.SpAtk=60;
  }

  c1(){
      this.HP+=10;
  }
  c2(){
      this.Atk+=10;
  }
  c3(){
      this.Def+=10;
  }
  c4(){
      this.Spd+=10;
  }
  c5(){
      this.SpDef+=10;
  }
  c6(){
      this.SpAtk+=10;
  }
  c7(){
      this.HP-=10;
  }
  c8(){
      this.Atk-=10;
  }
  c9(){
      this.Def-=10;
  }
  c10(){
      this.Spd-=10;
  }
  c11(){
      this.SpDef-=10;
  }
  c12(){
      this.SpAtk-=10;
  }
    
}
