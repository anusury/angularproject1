import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonvegService {

  constructor() { }
  nonVegDetails = [
    {
      id:1,
      foodName:'CHICKEN BIRIYANI',
      hotelName:'CHEETINADU @ THARAMANI CHENNAI',
      foodPrice:100,
      foodImag:"https://media.istockphoto.com/photos/egg-briyani-with-raita-salad-and-curry-picture-id1382005592?b=1&k=20&m=1382005592&s=170667a&w=0&h=UDP1lQxALfEajs_SAh7GAl5UYz96GQTVRiFl2Y6wNFQ="

    },
    {
      id:2,
      foodName:'CHICKEN RICE',
      hotelName:'YELLOW HUT @ BEACH ROAD CHENNAI',
      foodPrice:70,
      foodImag:"https://media.istockphoto.com/photos/chicken-fried-rice-picture-id945606006?b=1&k=20&m=945606006&s=170667a&w=0&h=6ZcRkqv8hUSgLia0JiyEm-WmEfinfdKO_0lS72RUJ3c="

    },
    {
      id:3,
      foodName:'MUTTON BIRIYANI',
      hotelName:'MALABAR @ NEHRU CHENNAI',
      foodPrice:150,
      foodImag:"https://media.istockphoto.com/photos/foods-picture-id1312277734?b=1&k=20&m=1312277734&s=170667a&w=0&h=ChxtwJvhpi7_OD6Jm9gqOQc4q2xMvjfCUKEAzmAIYYg="

    },
    {
      id:4,
      foodName:'EGG RICE',
      hotelName:' @ KURUCHI CHENNAI',
      foodPrice:60,
      foodImag:"https://media.istockphoto.com/photos/egg-biryani-basmati-rice-cooked-with-masala-roasted-eggs-and-spices-picture-id979968618?b=1&k=20&m=979968618&s=170667a&w=0&h=E-0T54yMp1s0AVPNc1lL4dRfSA8yDXPOfEc_6OvrBCU="

    },
    {
      id:5,
      foodName:'PRAWN',
      hotelName:'ANNAPORNA @ EVP ROAD',
      foodPrice:200,
      foodImag:"https://media.istockphoto.com/photos/prawn-masala-curry-with-delicious-herbs-and-spices-picture-id1097565902?b=1&k=20&m=1097565902&s=170667a&w=0&h=dm7Y1ojeTyDb6LPcTiHU7y3V5o0jUlcfyvIy7zR5QPI="

    },
    {
      id:6,
      foodName:'FISH',
      hotelName:'TN47 @ VELACHARI ',
      foodPrice:190,
      foodImag:"https://media.istockphoto.com/photos/spicy-fish-curry-popular-indian-seafood-served-with-rice-picture-id1266092627?b=1&k=20&m=1266092627&s=170667a&w=0&h=w6qKR6LhxSzsPdqs8PMYglTGU3S_IE7W00JSwbK9R3Y="

    },
    {
      id:7,
      foodName:'CHICKEN SOUP',
      hotelName:'CHETTINADU @ MARINA',
      foodPrice:300,
      foodImag:"https://media.istockphoto.com/photos/healthy-chicken-soup-picture-id1169104260?b=1&k=20&m=1169104260&s=170667a&w=0&h=DjUYTxb7gp9cXhr30satU8C7_cWUN6Odm-dKcpN50UY="
    }
    
  ]
}
