import Collegue from './collegue';
import ScoreAction from './score-action';


export default class Vote {
    id:number;
    nouveauScore:number;
    constructor(public collegue : Collegue, public avis: ScoreAction){
    }
}
