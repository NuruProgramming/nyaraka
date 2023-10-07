---
title: Suluhisho la Sudoku
# titleTemplate:
---

# Suluhisho la Sudoku

Mfano huu umeandaliwa na [@VictorKariuki](https://github.com/VictorKariuki)

## Hili suluhisho linasuluhisha sudoku kwa kutumia kanuni ya Backtracking

Fumbo la sudoku linawakilishwa na safu yenye pandeolwa mbili. Seli tupu zinawakilishwa na 0. Kanuni inafanya kazi kwa kujaribu namba zote zinazoweza tumika kwenye seli tupu. Kama namba ni halali, itawekwa kwenye seli. Kama namba ni batili kanuni itarudi kwenye seli ya nyuma na kujaribu namba nyingine.

Kanuni itaacha kufanya kazi kama hakutakuwa na seli tupu. Kanuni imetengenezwa kwenye kitendakazi suluhishaSudoku.
Kitendakazi niHalali kinaangalia kama namba ni halali kwenye seli tajwa. Kitendakazi andikaSudoku kinaandika fumbo la sudoku. Kitendakazi suluhishaSudoku kinasuluhisha fumbo la sudoku. Kitendakazi kikuu kinatumika kuanzisha fumbo la sudoku na kuita kitendakazi cha suluhisha Sudoku.

```go
fanya andikaSudoku = unda(sudoku) {
    fanya i = 0
    wakati (i < 9){
        andika(sudoku[i])
        i++
    }
}

fanya sudoku = [[3, 0, 6, 5, 0, 8, 4, 0, 0],[5, 2, 0, 0, 0, 0, 0, 0, 0],[0, 8, 7, 0, 0, 0, 0, 3, 1],[0, 0, 3, 0, 1, 0, 0, 8, 0],[9, 0, 0, 8, 6, 3, 0, 0, 5],[0, 5, 0, 0, 9, 0, 6, 0, 0],[1, 3, 0, 0, 0, 0, 2, 5, 0],[0, 0, 0, 0, 0, 0, 0, 7, 4],[0, 0, 5, 2, 0, 6, 3, 0, 0]]

fanya niHalali = unda(gridi, safuMlalo, safuWima, namba) {
    kwa x ktk [0,1,2,3,4,5,6,7,8] {
        kama (gridi[safuMlalo][x] == namba) {
            rudisha sikweli
        }
    }

    kwa x ktk [0,1,2,3,4,5,6,7,8] {
        kama (gridi[x][safuWima] == namba) {
            rudisha sikweli
        }
    }

    fanya anzaSafuMlalo = safuMlalo - safuMlalo % 3
    fanya anzaSafuWima = safuWima - safuWima % 3

    kwa i ktk [0, 1, 2] {
        kwa j ktk [0, 1, 2] {
            kama (gridi[i + anzaSafuMlalo][j + anzaSafuWima] == namba) {
                rudisha sikweli
            }
        }
    }

    rudisha kweli
}

fanya suluhishaSudoku = unda(gridi, safuMlalo, safuWima) {
    kama (safuMlalo == 8 && safuWima == 9) {
        rudisha kweli
    }

    kama (safuWima == 9) {
        safuMlalo += 1
        safuWima = 0
    }

    kama (gridi[safuMlalo][safuWima] > 0) {
        rudisha suluhishaSudoku(gridi, safuMlalo, safuWima + 1)
    }

    kwa namba ktk [1,2,3,4,5,6,7,8,9] {
        kama (niHalali(gridi, safuMlalo, safuWima, namba)) {
            gridi[safuMlalo][safuWima] = namba
            kama (suluhishaSudoku(gridi, safuMlalo, safuWima + 1)) {
                rudisha kweli
            }
        }

        gridi[safuMlalo][safuWima] = 0
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
