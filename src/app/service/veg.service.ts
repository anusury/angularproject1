import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VegService {

  constructor() { }
  vegDetails = [
    {
      id:1,
      foodName:'PANNER FRIED RICE',
      holtelName:'YELLOW HUT @ BANGALORE ROAD',
      foodPrice:280,
      foodimd:"https://media.istockphoto.com/photos/healthy-homemade-fried-rice-picture-id1348257949?b=1&k=20&m=1348257949&s=170667a&w=0&h=YjsdKqGouiGwaOOLAPllLfPH8jLDZAC7YziRHEBKFDU="
    },
    {
      id:2,
      foodName:'VEG BRIYANI',
      holtelName:'CHEETINADU @ NERHU NAGAR',
      foodPrice:180,
      foodimd:"https://media.istockphoto.com/photos/fried-rice-picture-id159522636?b=1&k=20&m=159522636&s=170667a&w=0&h=7hQeffFUXObGWU15QTbPACqEKXjMIP6D_snN0NBiNQ8="
    },
    {
      id:3,
      foodName:'GHEE RICE',
      holtelName:'LORRY WALL @ FOOD STREET',
      foodPrice:250,
      foodimd:"https://media.istockphoto.com/photos/polao-or-pilaf-of-indian-subcontinent-picture-id1134107423?b=1&k=20&m=1134107423&s=170667a&w=0&h=r11VyRygxwjK0VxXjGsgqho1IRVwAQ9TgfzGrPanKIo="
    },
    {
      id:4,
      foodName:'VEG PULAW',
      holtelName:'ANNPORANA',
      foodPrice:180,
      foodimd:"https://images.unsplash.com/photo-1592119747782-d8c12c2ea267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwcHVsYXclMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:5,
      foodName:'MUSHOOM BRIYANI',
      holtelName:'KRISHNA @ DRESS STREET',
      foodPrice:200,
      foodimd:"https://media.istockphoto.com/photos/chicken-briyani-in-pan-isolated-on-white-backroind-with-clipping-path-picture-id1371228737?b=1&k=20&m=1371228737&s=170667a&w=0&h=wTjcLZK4oVUVqu7u262bh_c7EZuwHPvjbhOqnvIVFjI="
    },
    {
      id:6,
      foodName:'VEG SAULT',
      holtelName:'ANNA POORANA @ KOVIL STREET',
      foodPrice:300,
      foodimd:"https://media.istockphoto.com/photos/chana-masala-or-chole-in-black-bowl-on-dark-slate-table-top-indian-picture-id1295943731?b=1&k=20&m=1295943731&s=170667a&w=0&h=Rusi6hmRM0jq6wuNMlP_ubpMNRtaSP8xoAVX4-jDZng="
    },
  ]
}
