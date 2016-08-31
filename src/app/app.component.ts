import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HexagonalComponent } from './Component/Hexagonal';
import { IndividualValues } from './Model/IndividualValues';
import { PokemonInfo } from './Model/PokemonInfo';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HexagonalComponent],
})
export class AppComponent {
  pmList : PokemonInfo[] = [];
  @Input() HP = 0;
  @Input() Atk = 0;
  @Input() Def = 0;
  @Input() Spd = 0;
  @Input() SpAtk = 0;
  @Input() SpDef = 0;
  @Input() PMNo = 0;
  @Input() PMName = '';
  @Input() Type1='';
  @Input() Type2='';
  title = 'app works!';
  constructor(){
    this.pmList.push({
      No:60,
      Name:'蚊香蝌蚪',
      type1:'水',
      type2:'',
      Ability: ['儲水','濕氣','輕快'],
      Gender: 'M1:1F',
      Color: '藍色',
      Height: 0.6,
      Weight: 12.4,
      Egg: '水中1',
      EggCount: 5355,
      TotalExp: 0,
      HP:40,
      Atk:50,
      Def:40,
      SpAtk:40,
      SpDef:40,
      Spd:90,
    });
    this.pmList.push({
      No:61,
      Name:'蚊香君',
      type1:'水',
      type2:'',
      Ability: ['儲水','濕氣','輕快'],
      Gender: 'M1:1F',
      Color: '藍色',
      Height: 1.0,
      Weight: 20.0,
      Egg: '水中1',
      EggCount: 5355,
      TotalExp: 0,
      HP:65,
      Atk:65,
      Def:65,
      SpAtk:50,
      SpDef:50,
      Spd:90,
    });
    this.pmList.push({
      No:186,
      Name:'蚊香蛙皇',
      type1:'水',
      type2:'',
      Ability: ['儲水','濕氣','毛毛雨'],
      Gender: 'M1:1F',
      Color: '綠色',
      Height: 1.1,
      Weight: 33.9,
      Egg: '水中1',
      EggCount: 5355,
      TotalExp: 0,
      HP:90,
      Atk:75,
      Def:75,
      SpAtk:90,
      SpDef:100,
      Spd:70,
    });
    this.pmList.push({
      No:190,
      Name:'長尾怪手',
      type1:'普',
      type2:'',
      Ability: ['逃走','撿拾','連續攻擊'],
      Gender: 'M1:1F',
      Color: '紫色',
      Height: 0.8,
      Weight: 11.5,
      Egg: '陸上',
      EggCount: 5355,
      TotalExp: 0,
      HP:55,
      Atk:70,
      Def:55,
      SpAtk:40,
      SpDef:55,
      Spd:85,
    });
    this.pmList.push({
      No:424,
      Name:'雙尾怪手',
      type1:'普',
      type2:'',
      Ability: ['技術高手','撿拾','連續攻擊'],
      Gender: 'M1:1F',
      Color: '紫色',
      Height: 1.2,
      Weight: 20.3,
      Egg: '陸上',
      EggCount: 5355,
      TotalExp: 0,
      HP:75,
      Atk:100,
      Def:66,
      SpAtk:60,
      SpDef:66,
      Spd:115,
    });
    this.pmList.push({
      No:190,
      Name:'長尾怪手',
      type1:'水',
      type2:'惡',
      Ability: ['逃走','撿拾','連續攻擊'],
      Gender: 'M1:1F',
      Color: '紫色',
      Height: 0.8,
      Weight: 11.5,
      Egg: '陸上',
      EggCount: 5355,
      TotalExp: 0,
      HP:0,
      Atk:0,
      Def:0,
      SpAtk:0,
      SpDef:0,
      Spd:0,
    });
  }
  SelectPM(PM: PokemonInfo){
    this.Type1= PM.type1;
    this.Type2= PM.type2;
    this.PMNo = PM.No;
    this.PMName = PM.Name;
    this.HP   = Math.floor(PM.HP    * 0.5);
    this.Atk  = Math.floor(PM.Atk   * 0.5);
    this.Def  = Math.floor(PM.Def   * 0.5);
    this.Spd  = Math.floor(PM.Spd   * 0.5);
    this.SpDef= Math.floor(PM.SpDef * 0.5);
    this.SpAtk= Math.floor(PM.SpAtk * 0.5);
  }
}
