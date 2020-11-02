import { Component, OnInit, Input } from '@angular/core';
import { MaungImage } from "../../assets";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @Input() namaText : string;
  @Input() usernameText: string;
  @Input() passwordText: string;
  errorText: string = "";

  public maungSource = MaungImage;

  constructor(private route : Router) { }

  ngOnInit() {

  }

  onClickRegister() {
    if (!this.usernameText || !this.passwordText || !this.namaText) {
      this.errorText = "Mohon isi semua field";
      return;
    }
  }

  toLogin(){
    this.route.navigateByUrl('/login');
  }

}
