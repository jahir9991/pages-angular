import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class GalleryService {
  constructor(private http: HttpClient) {}

  // Get social feed posts
  getFeed() {
    return this.http.get("assets/data/gallery.json").map((res: any) => res);
  }
}
