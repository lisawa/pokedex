import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConfigService {
  config: any;
  constructor(private http: Http) {
    console.log('ctor for ConfigService called.')
  }

  load() {
    console.log('Inside Load');
    return new Promise((resolve) => {
      this.http.get('app/pm.json').map(res => res.json())
        .subscribe(config => {
          console.log('Configuration loaded...........');
          this.config = config;
          resolve();
        });
    });
  }

}