import { Injectable } from "@angular/core";

import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class QuickviewService {
  constructor(private http: HttpClient) {}

  // Get from the API
  getNotes() {
    return this.http.get("assets/data/notes.json").map((res: any) => res);
  }

  getUsers() {
    return this.http.get("assets/data/users.json").map((res: any) => res);
  }

  getChatMessages() {
    return this.http.get("assets/data/messages.json").map((res: any) => res);
  }
}
