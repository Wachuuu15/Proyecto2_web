export class Cell {
    status: 'open' | 'clear' | 'flag' = 'open';
    mine = false;
    proximityMines = 0;
    colorClass = ''; 

  
    constructor(public row: number, public column: number) {}
}