---
title: Kanuni za Upangaji katika Nuru
# titleTemplate:
---

# Kanuni za Upangaji katika Nuru

Mfano huu umeandaliwa na [@VictorKariuki](https://github.com/VictorKariuki)

## Vunja

```go
fanya vunja = unda(safu, mwanzo, mwisho) {
    fanya matokeo = []
    wakati (mwanzo < mwisho) {
        matokeo = matokeo + [safu[mwanzo]]
        mwanzo = mwanzo + 1
    }
    rudisha matokeo
}
```

## Unganisha

```go
fanya unganisha = unda(kushoto, kulia) {
    fanya matokeo = []
    fanya kushotoUrefu = idadi(kushoto)
    fanya kuliaUrefu = idadi(kulia)
    fanya  l = 0
    fanya  r = 0
    wakati (l < kushotoUrefu && r < kuliaUrefu) {
        kama (kushoto[l] < kulia[r]) {
            matokeo = matokeo + [kushoto[l]]
            l = l + 1
        } sivyo {
            matokeo = matokeo + [kulia[r]]
            r = r + 1
        }
    }
    andika(matokeo)
}
```

## Ainisha na Unganisha

```go
fanya ungaAinisha = unda(safu){
    fanya urefu = idadi(safu)
    andika("safu ni ", safu," yenye urefu ", urefu)
    kama (urefu < 2) {
        rudisha urefu
    }
    andika("urefu ni mkubwa kuliko au == 2", urefu > 1)

    fanya kati = (urefu / 2)
    andika("hatua ya kati ya hii safu ni ", mid)

    fanya kushoto = vunja(safu, 0, kati)
    fanya kulia = vunja(safu, kati, urefu)
    andika("upande wa kushoto ni ", kushoto)
    andika("upande wa kulia ni ", kulia)
    fanya ainishaKushoto = ungaAinisha(left)
    fanya ainishaKulia = ungaAinisha(right)
    andika("safu ainishwa ya kushoto ni ", ainishaKushoto)
    andika("safu ainishwa ya kulis ni ", ainishaKulia)
    rudisha unganisha(ainishaKushoto, ainishaKulia)
}

fanya safu = [6, 5, 3, 1, 8, 7, 2, 4]
fanya safuAinishwa = ungaAinisha(safu)
andika(safuAinishwa)
```
