import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http : HttpClient) { }

  getKategori(){
    const headers = new HttpHeaders();
    return this.http.get<any>('https://us-central1-nusantara-8e7ba.cloudfunctions.net/api/getLeaderboard');
  }
}
