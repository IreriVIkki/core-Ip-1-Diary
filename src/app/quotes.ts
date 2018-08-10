export class Quotes {
  constructor(
    public id: number,
    public quote: string,
    public upvotes: number,
    public downvotes: number,
    public author: string,
    public user: string,
    public timepassed: Date
  ) {}
}
