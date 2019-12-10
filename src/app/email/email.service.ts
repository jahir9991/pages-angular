import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EmailService {
  constructor(private http: HttpClient) {}

  // Get all emails from the API
  getEmails() {
    return this.http.get("assets/data/email.json").map((res: any) => res);
  }
}
