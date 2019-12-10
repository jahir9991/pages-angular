import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MapWidgetService {
  constructor(private http: HttpClient) {}

  getMapData() {
    return this.http.get("assets/data/map.json").map((res: any) => res);
  }
}
