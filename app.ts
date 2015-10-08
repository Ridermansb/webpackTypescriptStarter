export class Bottles {

    phraseFor(paragraph: string) : string {
        if (paragraph == 'first') {
            return this.beerOnWall + " bottles of beer on the wall, " + this.beerOnWall + " bottles of beer.";
        } else if (paragraph == 'second') {
            return "Take one down and pass it around, " + (this.beerOnWall - 1) + " bottles of beer on the wall.";
        }
    }

    constructor(public beerOnWall : number) { }

}