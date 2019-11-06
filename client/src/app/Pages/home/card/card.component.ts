import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardData = [
    {
      cardImgSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
      cardHeader:"My Food Stories",
      cardDesc:"Is food more than just a need for us? Then you are expecting more from eating. This is the place for you. Come join with me to find out more about my food experiences."
    },
    {
      cardImgSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
      cardHeader:"My Reciepes",
      cardDesc:"Eating food that are made by yourself will bring more pleasure than restaurant-bought meals. find out receipes that will bring your family together."
    },
    {
      cardImgSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
      cardHeader:"Travel",
      cardDesc:"Want to see more than what you see everyday? Please check my travel updates to find out more about breathtaking destinations."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
