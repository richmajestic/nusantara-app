import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http : HttpClient
  ) { }

  registerUser(newUser : any){
    console.log('test');
    console.log(newUser);
    const user = {
      image : newUser.image,
      nama : newUser.nama,
      username : newUser.username,
      password : newUser.password,
    };
  
    const headers = new HttpHeaders();
    headers.append('Content-Type,', 'application/x-www-form-urlencoded');
    const options = {headers: headers};
    console.log(options);

    
    console.log(user);
    return this.http.post<any>('https://us-central1-nusantara-8e7ba.cloudfunctions.net/api/register',user,options);
  }

  ceklogin(user : any){
    const LoginUser = {
      username : user.username,
      password : user.password,
    };

    const headers = new HttpHeaders();
    headers.append('Content-Type,', 'application/x-www-form-urlencoded');
    const options = {headers: headers};
    console.log(options);

    
    console.log(LoginUser);
    return this.http.post<any>('https://us-central1-nusantara-8e7ba.cloudfunctions.net/api/login',LoginUser,options);
  }
}
