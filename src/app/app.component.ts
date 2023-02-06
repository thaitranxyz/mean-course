import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mean-course';
  storedPost: Post[] = [];
  fromPostCreate: any;

  onPostAdded(post: any, fromPost: any) {
    this.storedPost.push(post);
    this.fromPostCreate = fromPost;
  }
}
