import {Component} from "@angular/core";
import { map, take } from 'rxjs/operators';


@Component({
    selector: 'page2',
    templateUrl: './page2.component.html',
})

export class Page2Component {

    constructor() {
        //console.log('I am in constructor()!');
        localStorage.clear(); 
        //console.log("localStorage cleared!!!");     
    }
}

        
