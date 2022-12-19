export class Comment {
    constructor(
        public id: number,
        public userId: number,
        public comment: string,
        public createdDate: string
    ) { }
}