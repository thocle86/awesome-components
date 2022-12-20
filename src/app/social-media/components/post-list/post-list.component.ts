import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList$!: Observable<Post[]>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postList$ = this.route.data.pipe(
      map(data => data['postList'])
    );
  }

  onPostCommented(postCommented: { comment: string, postId: number }): void {
    this.postService.addNewComment(postCommented);
  }

}
