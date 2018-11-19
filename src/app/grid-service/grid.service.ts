import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import { map } from 'rxjs/operators';
import { AppSettings } from '../appsettings';

@Injectable()
export class GridService {

    constructor(public http:Http) {}

    getDocumentList() {
        const endpoint = AppSettings.DOC_LIST_API_ENDPOINT;
        return this.http.get(endpoint).pipe(map((res:Response) => res.json()));
    }

}