export class Format {
    public id?: string;
    public firstAttribute: string;
    public secondAttribute: string;

    constructor(id: string, firstAttribute: string, secondAttribute: string) {
        this.id = id;
        this.firstAttribute = firstAttribute;
        this.secondAttribute = secondAttribute;
    }
}