---
title: Suluhishi la Sudoku
# titleTemplate:
---

# Mfano katika Nuru

## Hili suluhishi linasuluhisha sudoku kwa kutumia kanuni ya Backtracking

Fumbo la sudoku linawakilishwa na safu yenye pandeolwa mbili.
Seli tupu zinawakilishwa na 0.
Kanuni inafanya kazi kwa kujaribu namba zote zinazoweza tumika kwenye seli tupu.
Kama namba ni halali, itawekwa kwenye seli.
Kama namba ni batili, kanuni itarudi kwenye seli ya nyuma na kujaribu namba nyingine.
Kanuni itaacha kufanya kazi kama hakutakuwa na seli tupu. Kanuni imetengenezwa kwenye kitendakazi suluhishaSudoku.
Kitendakazi niHalali kinaangalia kama namba ni halali kwenye seli tajwa.
Kitendakazi andikaSudoku kinaandika fumbo la sudoku. Kitendakazi suluhishaSudoku kinasuluhisha fumbo la sudoku.
Kitendakazi kikuu kinatumika kuanzisha fumbo la sudoku na kuita kitendakazi cha suluhishaSudoku.

##

```go
fanya andikaSudoku = unda(sudoku) {
    fanya i = 0
    wakati (row < 9){
        andika(sudoku[i])
        i++
    }
}

fanya sudoku = [[3, 0, 6, 5, 0, 8, 4, 0, 0],[5, 2, 0, 0, 0, 0, 0, 0, 0],[0, 8, 7, 0, 0, 0, 0, 3, 1],[0, 0, 3, 0, 1, 0, 0, 8, 0],[9, 0, 0, 8, 6, 3, 0, 0, 5],[0, 5, 0, 0, 9, 0, 6, 0, 0],[1, 3, 0, 0, 0, 0, 2, 5, 0],[0, 0, 0, 0, 0, 0, 0, 7, 4],[0, 0, 5, 2, 0, 6, 3, 0, 0]]

fanya niHalali = unda(grid, row, col, num) {
    kwa x ktk [0,1,2,3,4,5,6,7,8] {
        kama (grid[row][x] == num) {
            rudisha sikweli
        }
    }

    kwa x ktk [0,1,2,3,4,5,6,7,8] {
        kama (grid[x][col] == num) {
            rudisha sikweli
        }
    }

    fanya startRow = row - row % 3
    fanya startCol = col - col % 3

    kwa i ktk [0, 1, 2] {
        kwa j ktk [0, 1, 2] {
            kama (grid[i + startRow][j + startCol] == num) {
                rudisha sikweli
            }
        }
    }

    rudisha kweli
}

fanya suluhishaSudoku = unda(grid, row, col) {
    kama (row == 8 && col == 9) {
        rudisha kweli
    }

    kama (col == 9) {
        row += 1
        col = 0
    }

    kama (grid[row][col] > 0) {
        rudisha suluhishaSudoku(grid, row, col + 1)
    }

    kwa num ktk [1,2,3,4,5,6,7,8,9] {
        kama (niHalali(grid, row, col, num)) {
            grid[row][col] = num
            kama (suluhishaSudoku(grid, row, col + 1)) {
                rudisha kweli
            }
        }

        grid[row][col] = 0
    }

    rudisha sikweli
}

andika()
andika("----- fumbo la kusuluhisha -----")
andikaSudoku(sudoku)
kama (suluhishaSudoku(sudoku, 0, 0)){
    andika()
    andika("--------- suluhisho --------")
    andikaSudoku(sudoku)
    andika()
} sivyo {
    andika("imeshindikana")
}
```
