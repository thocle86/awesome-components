import { Comment } from '../../shared/models/comment.model';

export class Post {
    constructor(
        public id: number,
        public userId: number,
        public title: string,
        public createdDate: string,
        public imageUrl: string,
        public content: string,
        public comments: Comment[]
    ) { }
}