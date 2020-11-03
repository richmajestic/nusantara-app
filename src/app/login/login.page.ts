import { Component, Input, OnInit } from "@angular/core";
import { RegisterService } from '../service/register.service';
import { MaungImage } from "../../assets";
import { FetchService } from "../service/fetch.service";
import { Router } from '@angular/router';
import { Md5 } from "md5-typescript";

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
    public registerSrv: RegisterService,
    public router : Router) {}

  ngOnInit() {}

  onClickLogin() {
    if (!this.usernameText || !this.passwordText) {
      this.errorText = "Mohon isi semua field";
      return;
    }
    else{
      const user = {
        username : this.usernameText,
        password : Md5.init(this.passwordText),
      };
      console.log(user);
      this.registerSrv.ceklogin(user).subscribe(
        res=> {
        console.log(res);
        if(res.success == false){
          console.log('tes');
          this.errorText = "Email atau password salah";
        }
        else{
          this.router.navigateByUrl('/tabs');
        }}
      );
    }
  }

  toRegister(){
    this.router.navigateByUrl('/register');
  }
}
