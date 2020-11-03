import { Component, OnInit, Input } from '@angular/core';
import { MaungImage } from "../../assets";
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @Input() namaText : string;
  @Input() usernameText: string;
  @Input() passwordText: string;
  image : string= "base64";
  errorText: string = "";

  public maungSource = MaungImage;

  constructor(
    private route : Router,
    private registerSrv : RegisterService) { }

  ngOnInit() {

  }

  onClickRegister() {
    if (!this.usernameText || !this.passwordText || !this.namaText) {
      this.errorText = "Mohon isi semua field";
      return;
    }
    else{
      const user = {
        image : "base64",
        nama : this.namaText,
        username : this.usernameText,
        password : this.passwordText,
      };
      console.log(user);
      this.registerSrv.registerUser(user).subscribe(
        res=> {console.log(res);}
      );
      this.route.navigateByUrl('/tabs');
    }
  }

  toLogin(){
    this.route.navigateByUrl('/login');
  }

}
