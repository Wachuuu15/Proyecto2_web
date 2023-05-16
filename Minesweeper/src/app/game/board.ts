import { Cell } from "./cell";

class board {
    cells: Cell[][]=[];
    constructor(size:number, mines:number) {
        for(let y = 0; y<size;y++){
            this.cells[y] = [];
            for(let x = 0; x<size;x++){
                this.cells[y][x] = new Cell();
            }
        }

        //asign mines
        for(let i = 0; i<mines;i++){
            this.getRandomCell().mine =true;
        }
    }

    getRandomCell(): Cell{
        const y = Math.floor(Math.random() * this.cells.length);
        const x =  Math.floor(Math.random() * this.cells[y].length);
        return this.cells[y][x];
    }
}