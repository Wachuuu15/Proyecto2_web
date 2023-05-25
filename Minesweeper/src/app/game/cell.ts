export class Cell {
    status: 'open' | 'clear' | 'flag' = 'open';
    mine = false;
    proximityMines: number | null = 0; // Modificación aquí
    colorClass = ''; 
  
    constructor(public row: number, public column: number) {}
}
  