import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  
  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Chicken",      
      foodDetails:"Pan-fried masala paneer.",
      hotelName:"HOTEL NAME: yellow hut in anna street",
      foodPrice:800,
    foodImg:"https://media.istockphoto.com/photos/grilled-chicken-picture-id172900971?b=1&k=20&m=172900971&s=170667a&w=0&h=nKpf9-87phqO-eiQ54Y6p_2wQJ57nZWL1eyZp0W920g="
      //foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Veggie Pizza",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      hotelName:" HOTEL NAME :kurichi hotel in nerhu nagar",
      foodPrice:480,
      foodImg:"https://images.unsplash.com/photo-1597131628347-c769fc631754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      //foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName:"Mushrome Burger",
      foodDetails:"panner",
      hotelName:" HOTEL NAME:biggies burger in mmr street",
      foodPrice:290,
      foodImg:"https://media.istockphoto.com/photos/mini-veggie-burger-with-grilled-cheese-mushroom-guacamole-and-arugula-picture-id1170532466?b=1&k=20&m=1170532466&s=170667a&w=0&h=D0121OTpa5Tux6OiWHEiH_9K6wftP77JTN514LBhipM="
      //foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      hotelName:"HOTEL NAME:classio hotel in aerodrome post",
      foodPrice:200,
      //foodImg:"https://media.istockphoto.com/photos/indian-popular-street-food-called-veg-franky-made-using-vegetables-picture-id665807568?b=1&k=20&m=665807568&s=170667a&w=0&h=5IHMx-KfEa1adPado0n1Fz1MeWSr_0SqPthkNYB8TQI="
      foodImg:"https://media.istockphoto.com/photos/indian-veg-chapati-wrap-kathi-roll-served-in-a-plate-with-sauce-over-picture-id1024561120?b=1&k=20&m=1024561120&s=170667a&w=0&h=UlVMxOiOKoCZStKSJt9kNzhXimVngkrgJYQ_NLxYaWg="
      //foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      hotelName:"HOTEL NAME:Annapoorna in kng street",
      foodPrice:150,
     foodImg:"https://media.istockphoto.com/photos/marijuana-brownies-picture-id1185895952?b=1&k=20&m=1185895952&s=170667a&w=0&h=jY9HSKNI1SH2VN2loJ9AOz7oUbr5hY2533gwJpGAtH8= "
      //foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      hotelName:"HOTEL NAME:RHR in town street",
      foodPrice:250,
      foodImg:"https://media.istockphoto.com/photos/cookies-and-cream-cheesecake-picture-id821172230?b=1&k=20&m=821172230&s=170667a&w=0&h=oujOJ9poUXEX179YhrBSRNf-QPsICHEr4es4_ufusg8="
      //foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    },
    {
      id:7,
      foodName:"Bucket Briyani",
      foodDetails:"chicken ,rice with egg",
      hotelName:"HOTEL NAME:Cheetinadu in omr street",
      foodPrice:"300",
      foodImg:"https://media.istockphoto.com/photos/cottage-cheese-biriyani-or-paneer-biriyani-picture-id1384881047?s=612x612"
    },
    {
      id:8,
      foodName:"seshwan panner fried rice",
      foodDetails:"panner",
      hotelName:"HOTEL NAME:flames in chennai street",
      foodPrice:"100",
      foodImg:"https://media.istockphoto.com/photos/fried-rice-with-fried-spiced-ham-picture-id1327106892?b=1&k=20&m=1327106892&s=170667a&w=0&h=cfRI1jtv5nQFFetEtY6eCAC-uA1Iw_f3v4owg5lCM1U="
    },
    {
      id:9,
      foodName:"Hydrabad Briyani",
      foodDetails:"chicken",
      hotelName:"HOTEL NAME:Hyderabad chicken",
      foodPrice:"180",
      foodImg:"https://media.istockphoto.com/photos/masala-mutton-briyani-picture-id1351103687?b=1&k=20&m=1351103687&s=170667a&w=0&h=fNmqEN0W9--I160BqGQNZgGuQLxkshOWnSCD2iZ1T3Q="
    },
    {
      id:10,
      foodName:"Atho",
      foodDetails:"noodles",
      hotelName:"HOTEL NAME:xyz",
      foodPrice:"100",
      foodImg:"https://media.istockphoto.com/photos/burmese-atho-in-black-bowl-isolated-on-white-atho-is-myanmar-indian-picture-id1277099490?b=1&k=20&m=1277099490&s=170667a&w=0&h=grSirtZwbVgpiHzT2Sk_vYdTvSt0BnjUGt5cX8N2reY="
    },
    {
      id:11,
      foodName:"chicken popcorn",
      foodDetails:"chicken with grilled",
      hotelName:"HOTEL NAME:flames in thambaram",
      foodPrice:"100",
      foodImg:"https://media.istockphoto.com/photos/popcorn-chicken-picture-id1162125345?b=1&k=20&m=1162125345&s=170667a&w=0&h=nnmOdrt2k-KOOyd6Q48ENRC4IpabavsaPgDaxk4uMz8="
    },
    {
      id:12,
      foodName:"french fries",
      foodDetails:"potato",
      hotelName:"HOTEL NAME:kurichi in beach road",
      foodPrice:"150",
      foodImg:"https://media.istockphoto.com/photos/diverse-keto-dishes-picture-id1280158821?b=1&k=20&m=1280158821&s=170667a&w=0&h=ibwKxBzWcygq6NMKO5FTD-3ljLvwM8E1WVevw7XSmlk="
    },
    {
      id:13,
      foodName:"PawBhaji",
      foodDetails:"bread",
      hotelName:"HOTEL NAME:RRR HOTEL",
      foodPrice:"150",
      foodImg:"https://media.istockphoto.com/photos/pav-bhaji-is-a-fast-food-dish-from-india-consists-of-a-thick-curry-picture-id1319403400?b=1&k=20&m=1319403400&s=170667a&w=0&h=ReqTb-h5kyDH4YCbu0qqOmGsqrrpYTa815GtDWMPGAY="
    },
    {
      id:14,
      foodName:"Donuts",
      foodDetails:"HOTEL NAME:East,Egg,Flor",
      hotelName:"Annaporna IN CLASSIC ",
      foodPrice:"300",
      foodImg:"https://media.istockphoto.com/photos/preparing-homemade-donuts-picture-id686623972?b=1&k=20&m=686623972&s=170667a&w=0&h=AfZEXBd3-Gzo-3miXVI2MBVW1vKjtT9-zB_tY6ZIOJY="
    },
    {
      id:15,
      foodName:"pulav",
      foodDetails:"HOTEL NAME:Raice,ChiliPowfer,Corionder,Ghee",
      hotelName:"yellow hut IN THARAMANI",
      foodPrice:"150",
      foodImg:"https://media.istockphoto.com/photos/veg-biryani-or-veg-pulav-or-steamed-rice-closeup-picture-id1067967232?b=1&k=20&m=1067967232&s=170667a&w=0&h=BkjbqNcZ7fPCWvYM35sWcmBRYSknR-bmud1lOvfVP7M="
    },





  


  ]
}
   