import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarterService {

  constructor() { }
  starterDetails = [
    {
      id:1,
      foodName:'SPRING ROOL',
      hotelName:'ANNAPOORANA @ THARAMANI',
      foodPrice:350,
      foodImg:"https://media.istockphoto.com/photos/springrolls-with-soy-sauce-picture-id1190454307?b=1&k=20&m=1190454307&s=170667a&w=0&h=e12p4uQoIKbObnoqIjs1_fpXBcnbONYA0iKia83gTGI="
    },
    {
      id:2,
      foodName:'PANNER TIKKA',
      hotelName:'YELLOW HUT @ COLLEGE STREET',
      foodPrice:200,
      foodImg:"https://cdn.pixabay.com/photo/2020/03/18/07/19/dish-4943028__480.jpg"
    },
    {
      id:3,
      foodName:'CHILI PANNER',
      hotelName:'APPUS @ TOWN STREET',
      foodPrice:450,
      foodImg:"https://media.istockphoto.com/photos/malai-or-achari-paneer-in-a-gravy-made-using-red-gravy-and-green-in-picture-id1085159272?b=1&k=20&m=1085159272&s=170667a&w=0&h=yGUUVMxuBTM4s6kroGKDOBIirV8HR9xWObGuBmpv7wA="
    },
    {
      id:4,
      foodName:'BHEL PURI',
      hotelName:'YELLOW HUT @ COLLEGE STREET',
      foodPrice:150,
      foodImg:"https://media.istockphoto.com/photos/close-up-shot-of-the-gujarati-bhel-picture-id1341533229?b=1&k=20&m=1341533229&s=170667a&w=0&h=8Qo1jMGxP0vS51c3k_2TSugMFWZzUexqR0h0YOPLwHA="
    },
    {
      id:5,
      foodName:'MOMO',
      hotelName:'ANNAPOORANA @ THARAMANI',
      foodPrice:100,
      foodImg:"https://media.istockphoto.com/photos/fried-momos-dumpling-picture-id1341123015?b=1&k=20&m=1341123015&s=170667a&w=0&h=9u8-3MN4-TclUTXt5ZEhxyVFMUB1HeTAJSM8-PuVXXs="
    },
    {
      id:6,
      foodName:'BREAD ROOL',
      hotelName:'YELLOW HUT @ COLLEGE STREET',
      foodPrice:100,
      foodImg:"https://media.istockphoto.com/photos/rool-meat-picture-id1079051536?b=1&k=20&m=1079051536&s=170667a&w=0&h=ChghBbIIO3nBhfPeoL6so957DJ7svYj3njyzy1f7JMM="
    },
    {
      id:7,
      foodName:'CHAAT',
      hotelName:'ANNAPOORANA @ THARAMANI',
      foodPrice:290,
      foodImg:"https://media.istockphoto.com/photos/genius-bhalle-picture-id1212213007?b=1&k=20&m=1212213007&s=170667a&w=0&h=A9ZjPcZ-0IZuPkF9Wp-iAWBSBWawMyr88u4UTe9piJQ="
    }
  ]
}
