import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList$!: Observable<Post[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postList$ = this.route.data.pipe(
      map(data => data['postList'])
    );
  }

}
