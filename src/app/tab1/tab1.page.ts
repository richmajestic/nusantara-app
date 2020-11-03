import { Component } from "@angular/core";
import { MaungImage } from "src/assets";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  public maungSource = MaungImage;
  public currentCategory: string = "BANGUNAN IKONIK";
  public currentProgress: number = 2; // Progress user
  public totalLevel: number = 10; // Total level dari kategori terakhir
  public arrayOfKategori = [
    {
      nama: "FLORA & FAUNA",
      jumlahPertanyaan: 25,
      warna: "#D1F4E6",
    },
    {
      nama: "BANGUNAN IKONIK",
      jumlahPertanyaan: 10,
      warna: "#FBDCDB",
    },
    // {
    //   nama: "RUMAH MAKAN",
    //   jumlahPertanyaan: 10,
    //   warna: "#D1F4E6",
    // },
  ];

  constructor() {}
}
