export class Sing {

    paragraph(paragraph: string) : string {

        if (paragraph == 'first') {
            return this.beerOnWall + " bottles of beer on the wall, " + this.beerOnWall + " bottles of beer.";
        } else if (paragraph == 'second') {
            if (this.beerOnWall == 1) {
                return "Take one down and pass it around, no more bottles of beer on the wall."
            }
            return "Take one down and pass it around, " + (this.beerOnWall - 1) + " bottles of beer on the wall.";
        }
    }

    constructor(public beerOnWall : number) {}
}