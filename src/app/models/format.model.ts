export class Format {
    public id?: number;
    public firstAttribute: string;
    public secondAttribute: string;

    constructor(id: number, firstAttribute: string, secondAttribute: string) {
        this.id = id;
        this.firstAttribute = firstAttribute;
        this.secondAttribute = secondAttribute;
    }
}