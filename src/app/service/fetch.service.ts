import { Injectable } from "@angular/core";

type Method = "GET" | "POST";

@Injectable({
  providedIn: "root",
})
export class FetchService {
  private method: Method;
  private requestBody: string;
  private url: string;

  constructor() {}

  init(method: Method, url: string, requestBody: string) {
    this.method = method;
    this.url = url;
    this.requestBody = requestBody;
  }

  async makeRequest() {
    const response = await fetch(this.url, {
      method: this.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.requestBody),
    });

    const data = await response.json();

    return data;
  }
}
