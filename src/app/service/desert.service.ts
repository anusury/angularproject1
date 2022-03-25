import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesertService {

  constructor() { }
  desertDetails = [
    {
      id:1,
      foodName:'CHEESECAKE',
      hotelName:'ARUN',
      foodPrice:100,
      foodimg:"https://media.istockphoto.com/photos/blueberry-cheesecake-picture-id515447912?b=1&k=20&m=515447912&s=170667a&w=0&h=7on9ONunzNuJHea3d98sOSCZEJ_Ad5iWmxsb0YY5UYI="
    },
    {
      id:2,
      foodName:'CUP CAKE',
      hotelName:' APPU BAKES',
      foodPrice:150,
      foodimg:"https://cdn.pixabay.com/photo/2017/09/14/14/33/cupcake-2749204__340.jpg"
    },
    {
      id:3,
      foodName:'APPLE PIE ',
      hotelName:'KRISHNA BAKES',
      foodPrice:250,
      foodimg:"https://media.istockphoto.com/photos/traditional-british-apple-crumble-with-custard-picture-id1212947416?b=1&k=20&m=1212947416&s=170667a&w=0&h=wacZfy81YnJcsplJ0DpsWWtyQjh8KaaersGKROJIxz4="
    },
    {
      id:4,
      foodName:'BROWINES',
      hotelName:'ANNAPORANA',
      foodPrice:180,
      foodimg:"https://media.istockphoto.com/photos/shaved-ice-dessert-with-homemade-browines-and-dark-chocolate-sauce-picture-id1183870992?b=1&k=20&m=1183870992&s=170667a&w=0&h=lf4gfvTlvgsfhr82XNLhu8-mXhTkJXutmPRfeXiMcp4="
    },
    {
      id:5,
      foodName:'FUDGE',
      hotelName:'TN 43',
      foodPrice:350,
      foodimg:"https://media.istockphoto.com/photos/dessert-chocolate-cake-picture-id155598375?b=1&k=20&m=155598375&s=170667a&w=0&h=kcXg4jNBBjXs31XwWktKpE9bOeZqmwnMDKvxzr_MpFM="
    },
    {
      id:6,
      foodName:'ICECREAM',
      hotelName:'ARUN',
      foodPrice:150,
      foodimg:"https://images.unsplash.com/photo-1598268121084-c8f7126e0cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aWNlY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:7,
      foodName:'CHOCOLATE CHIP COOKIES',
      hotelName:'IBACO',
      foodPrice:90,
      foodimg:"https://cdn.pixabay.com/photo/2016/05/10/08/57/cookies-1383280__340.jpg"
    },
  ]
}
