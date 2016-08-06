import {Component, Input, Output, EventEmitter} from '@angular/core';
import { IndividualValues } from '../Model/IndividualValues';

@Component({
    selector: 'hexagonal',
    template: 
    `
    <svg width="250" height="250" stroke-width="0.5">
        <g fill="#78C2C4">
            <text x="105" y="20" stroke="transparent">HP {{HP}}</text>
            <text x="215" y="60" stroke="transparent">Atk
                <tspan x="220" y="80">{{Atk}}</tspan>
            </text>
            <text x="215" y="190" stroke="transparent">Def
                <tspan x="220" y="210">{{Def}}</tspan>
            </text>
            <text x="105" y="240" stroke="transparent">Spd {{Spd}}</text>
            <text x="5" y="60" stroke="transparent">SpAtk
                <tspan x="15" y="80">{{SpAtk}}</tspan>
            </text>
            <text x="5" y="190" stroke="transparent">SpDef
                <tspan x="15" y="210">{{SpDef}}</tspan>
            </text>
        </g>
        <g>
            <path fill="#BDC0BA" attr.d="M125,125 L{{BackgroundPath}} Z"/>
        </g>
        <g *ngFor="let p of truelyPath">
            <path fill="#5DAC81" fill-opacity="1" [attr.d]="p"/>
        </g>
        <g>
            <path fill="transparent" stroke="#3A3226" attr.d="M{{BackgroundPath}} Z"/>
        </g>
    </svg>
    `,
})

export class HexagonalComponent{
    @Input() iv: IndividualValues;
    @Input() HP:number;
    @Input() Atk:number;
    @Input() Def:number;
    @Input() Spd:number;
    @Input() SpAtk:number;
    @Input() SpDef:number;
    @Input() truelyPath: string[];

    BackgroundPath:string;
    ivPath:string;
    x:number;
    y:number;
    check: boolean;
    m:number[];

    ngOnChanges(){
        this.GemPath();
        if(this.truelyPath.length > 1)
        {
            this.truelyPath.splice(0,1);
        }
    }

    GemPath(){
        this.ivPath = 'M';
        this.x = (this.Spd * Math.sin(0 * 60 * Math.PI / 180) + 125);
        this.y = (this.Spd * Math.cos(0 * 60 * Math.PI / 180) + 125);
        this.ivPath += this.x + ',' + this.y + ' ';
        
        this.x = (this.Def * Math.sin(1 * 60 * Math.PI / 180) + 125);
        this.y = (this.Def * Math.cos(1 * 60 * Math.PI / 180) + 125);
        this.ivPath += 'L' + this.x + ',' + this.y + ' ';

        
        this.x = (this.Atk * Math.sin(2 * 60 * Math.PI / 180) + 125);
        this.y = (this.Atk * Math.cos(2 * 60 * Math.PI / 180) + 125);
        this.ivPath += 'L' + this.x + ',' + this.y + ' ';
        
        this.x = (this.HP * Math.sin(3 * 60 * Math.PI / 180) + 125);
        this.y = (this.HP * Math.cos(3 * 60 * Math.PI / 180) + 125);
        this.ivPath += 'L' + this.x + ',' + this.y + ' ';
        
        this.x = (this.SpDef * Math.sin(4 * 60 * Math.PI / 180) + 125);
        this.y = (this.SpDef * Math.cos(4 * 60 * Math.PI / 180) + 125);
        this.ivPath += 'L' + this.x + ',' + this.y + ' ';
        
        this.x = (this.SpAtk * Math.sin(5 * 60 * Math.PI / 180) + 125);
        this.y = (this.SpAtk * Math.cos(5 * 60 * Math.PI / 180) + 125);
        this.ivPath += 'L' + this.x + ',' + this.y + ' Z';

        this.truelyPath.push(this.ivPath);
    }

    constructor(){
        this.truelyPath = [];
        this.BackgroundPath='';
        for (var i = 0; i < 7; i++) {
            this.x = (100 * Math.sin(i * 60 * Math.PI / 180) + 125);
            this.y = (100 * Math.cos(i * 60 * Math.PI / 180) + 125);

            if (i != 0){
                this.BackgroundPath += 'L';
            }

            this.BackgroundPath += this.x + ',' + this.y;

            if (i != 0) {
                 this.BackgroundPath += ' L125,125 L' + this.x + ',' + this.y;
            }
        }
    }
}