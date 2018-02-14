export default class Collegue {
    public nom: string;
    public urlImage: string;
    public score: number;
    constructor(nom: string, urlImage: string, score: number) {
        this.nom = nom;
        this.urlImage = urlImage;
        this.score = score;
    };
}
