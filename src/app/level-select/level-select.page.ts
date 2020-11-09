import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CorrectIcon, FalseIcon, PreviousIcon } from "src/assets";

@Component({
  selector: "app-level-select",
  templateUrl: "./level-select.page.html",
  styleUrls: ["./level-select.page.scss"],
})
export class LevelSelectPage implements OnInit {
  public correctSource = CorrectIcon;
  public falseSource = FalseIcon;
  public previousSource = PreviousIcon;

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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.kategoriId = this.activatedRoute.snapshot.paramMap.get("kategoriId");
    console.log(this.kategoriId);
  }

  getKategoriIdToText() {
    switch (this.kategoriId) {
      case "floraFauna": {
        return "FLORA & FAUNA";
      }
      case "bangunanIkonik": {
        return "BANGUNAN IKONIK";
      }
      case "rumahMakan": {
        return "RUMAH MAKAN";
      }
      default: {
        return "";
      }
    }
  }

  goBack() {
    this.router.navigateByUrl("tabs/tab1");
  }
}
