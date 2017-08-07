import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

const DES="Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.";

var cards = [
{
  location: "New York",
  trips: [
  {
    title:"Wall street",
    duration:"Weekend",
    description:DES,
    image:"https://static01.nyt.com/images/2017/05/07/travel/07hamilton/07hamilton-facebookJumbo.jpg"
  },
  {
    title:"Touristy",
    duration:"2 weeks",
    description:DES,
    image:"http://www.tripcentral.ca/blog/wp-content/uploads/2015/06/NYC-640x240.jpg"
  },
  {
    title:"Like a local",
    duration:"2 weeks",
    description:DES,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbNO7lOyGl-Zildj5OqdVnj7fa5yAHY9KygNjXiXQTowXC4Y9Q"
  },

  ]
}
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards : any;

  constructor(public navCtrl: NavController) {

    this.cards = cards[0];

  }

}
