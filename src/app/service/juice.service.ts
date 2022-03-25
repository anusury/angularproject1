import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuiceService {

  constructor() { }
  juiceDetails=[
    {
      id:1,
      foodName:'WATERMELAN JUICE',
      foodPrice:50,
      foodImg:"https://media.istockphoto.com/photos/juicy-watermelon-shake-on-chalkboard-background-with-slices-of-picture-id614222232?b=1&k=20&m=614222232&s=170667a&w=0&h=trx1O9NB7nAv7VlCvLCyoB5OL89iNFX0mqiclp6EAFY="
    },
    {
      id:2,
      foodName:'APPLE JUICE',
      foodPrice:50,
      foodImg:"https://media.istockphoto.com/photos/glass-of-apple-cider-picture-id1164896724?b=1&k=20&m=1164896724&s=170667a&w=0&h=wAk-ksy5YPkDX4sVdZsXws808WV9UL-ibwPia9U83QI="
    },
    {
      id:3,
      foodName:'ORANGE JUICE',
      foodPrice:50,
      foodImg:"https://media.istockphoto.com/photos/woman-hand-pouring-orange-juice-on-glasses-with-slice-orange-on-picture-id1158980367?b=1&k=20&m=1158980367&s=170667a&w=0&h=228Dw97NbQElZ141Rd1NYfEHQn0JTsEIDRGO-1vYkwY="
    },
    {
      id:4,
      foodName:'GRAPEE JUICE',
      foodPrice:50,
      foodImg:"https://media.istockphoto.com/photos/pitcher-of-grape-juice-with-fresh-grapes-picture-id1324028319?b=1&k=20&m=1324028319&s=170667a&w=0&h=mXMPrxF7bzLWXZ8xOW1jqLZTNSqMZK-D8hs359Oc4Is="
    },
    {
      id:5,
      foodName:'SUGARCANE JUICE',
      foodPrice:50,
      foodImg:"https://media.istockphoto.com/photos/sugar-cane-juice-or-garapa-is-the-liquid-extracted-from-sugar-cane-in-picture-id1278853000?b=1&k=20&m=1278853000&s=170667a&w=0&h=pWdy1B-WY1wUVq7KDdl2s8pOYmyxJfcA0qccAOCvsCc="
    },
    {
      id:6,
      foodName:'LEMON JUICE',
      foodPrice:50,
      foodImg:"https://cdn.pixabay.com/photo/2016/07/22/20/52/cold-drink-1535766__340.jpg"
    }
   
  ]
}
