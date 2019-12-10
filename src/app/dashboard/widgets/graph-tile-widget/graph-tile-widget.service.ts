import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class GraphTileWidgetService {
  constructor(private http: HttpClient) {}

  // Get all data from the API
  getChartSampleData() {
    return this.http.get("assets/data/charts.json").map((res: any) => res);
  }
}
