import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class IconsService {
  constructor(private http: HttpClient) {}

  // Get all posts from the API
  getFontAwesome() {
    return this.http.get("assets/data/fontawesome.json").map((res: any) => res);
  }
}
