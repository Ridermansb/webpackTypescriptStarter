
import {Sing} from "./sing";

export class Bottles {
    private sing : Sing;

    phraseFor(paragraph: string) : string {
        return this.sing.paragraph(paragraph);
    }

    constructor(public beerOnWall : number) {
        this.sing = new Sing(beerOnWall);
    }

}