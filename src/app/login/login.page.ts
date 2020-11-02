import { Component, Input, OnInit } from "@angular/core";

import { MaungImage } from "../../assets";
import { FetchService } from "../service/fetch.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
  providers: [FetchService],
})
export class LoginPage implements OnInit {
  @Input() usernameText: string;
  @Input() passwordText: string;
  errorText: string = "";

  public maungSource = MaungImage;

  constructor(
    public fetchService: FetchService,
    public router : Router) {}

  ngOnInit() {}

  onClickLogin() {
    if (!this.usernameText || !this.passwordText) {
      this.errorText = "Mohon isi semua field";
      return;
    }
    else{
      this.router.navigateByUrl('/tabs');
    }
  }

  toRegister(){
    this.router.navigateByUrl('/register');
  }
}
