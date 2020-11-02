import { Component, Input, OnInit } from "@angular/core";

import { MaungImage } from "../../assets";
import { FetchService } from "../service/fetch.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
  providers: [FetchService],
})
export class LoginPage implements OnInit {
  @Input() emailText: string;
  @Input() passwordText: string;
  errorText: string = "";

  public maungSource = MaungImage;

  constructor(public fetchService: FetchService) {}

  ngOnInit() {}

  onClickLogin() {
    if (!this.emailText || !this.passwordText) {
      this.errorText = "Mohon isi semua field";
      return;
    }
  }
}
