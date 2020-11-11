import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CorrectIcon, FalseIcon, PreviousIcon } from "src/assets";
import { Storage } from '@ionic/storage';
import { RegisterService } from '../service/register.service';

@Component({
  selector: "app-level-select",
  templateUrl: "./level-select.page.html",
  styleUrls: ["./level-select.page.scss"],
})
export class LevelSelectPage implements OnInit {
  public correctSource = CorrectIcon;
  public falseSource = FalseIcon;
  public previousSource = PreviousIcon;
  public userId : string;
  public nama_kategori : string;

  public kategoriId: string;
  public mockData = [
    {
      judul: "Soal 1",
      id_soal: "1",
      is_done: true,
      is_right: true,
      ordering: 1,
    },
    {
      judul: "Soal 2",
      id_soal: "2",
      is_done: true,
      is_right: false,
      ordering: 2,
    },
    {
      judul: "Soal 3",
      id_soal: "3",
      is_done: false,
      is_right: true,
      ordering: 3,
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private storage : Storage,
    private registerSrv : RegisterService) {
    storage.get('userId').then((val)=>{
      console.log('User idnya :',val);
      this.userId = val;
    })
  }

  ngOnInit() {
    this.kategoriId = this.activatedRoute.snapshot.paramMap.get("kategoriId");
    console.log(this.kategoriId);
    this.getCategory();
  }



  getCategory() {
    this.storage.get('userId').then((val)=>{
      console.log('disini kebaca :',val);
      this.userId = val;
      this.getName(this.userId);
    })
  }

  getName(userId){
    this.registerSrv.getKategori(userId).subscribe(
      res=> {
        console.log(res);
        for(let i=0; i<res.length;i++){
          if(this.kategoriId === res[i].kategori_id){
            this.nama_kategori = res[i].nama_kategori;
          }
        }
    });
  }

  goBack() {
    this.router.navigateByUrl("tabs/tab1");
  }
}
