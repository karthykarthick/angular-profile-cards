import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [{
    title: 'Neat Tree',
    imageUrl: 'assets/tree.jpeg',
    username: 'nature',
    content: 'I saw this neat tree today'
  },
  {
    title: 'Snowy Mountain',
    imageUrl: 'assets/mountain.jpeg',
    username: 'Mountain_lover',
    content: 'Here is the picture of the mountain'
  },
  {
    title: 'Favourite hobby is Biking',
    imageUrl: 'assets/biking.jpeg',
    username: 'pro_rider',
    content: 'I love to explore the roads with my Bike'
  }
 ];
}
