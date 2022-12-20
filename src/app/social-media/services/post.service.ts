import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Post } from "../models/post.model";
import { environment } from "src/environments/environment";

@Injectable()
export class PostService {
    constructor(private http: HttpClient) { }

    getAllPost(): Observable<Post[]> {
        console.log(`${environment.apiUrl}/posts`);
        return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
    }

    addNewComment(postCommented: { comment: string, postId: number }): void {
        console.log(postCommented);
    }
}