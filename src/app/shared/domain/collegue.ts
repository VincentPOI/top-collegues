export default class Collegue {
    public pseudo: string;
    public urlImage: string;
    public score: number;
    constructor(pseudo: string, urlImage: string, score: number) {
        this.pseudo = pseudo;
        this.urlImage = urlImage;
        this.score = score;
    };
}
