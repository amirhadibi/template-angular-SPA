import {Component} from "@angular/core";
import 'rxjs/add/operator/map';

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

        
