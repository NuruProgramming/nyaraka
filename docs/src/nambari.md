---
title: Nambari
titleTemplate: Nambari kamili na za desimali ni aina za msingi za data katika Nuru.
---

# NAMBA KAMILI NA DESIMALI

Nambari kamili na desimali ni aina za msingi za data katika Nuru, zinazotumiwa kuwakilisha nambari nzima na nambari za desimali, mtawalia. Ukurasa huu unashughulikia sintaksia na matumizi ya nambari kamili na desimali katika Nuru, ikijumuisha utangulizi, nyongeza zisizo za kawaida, kazi za mkato, na nambari hasi.

## UTANGULIZI

Nambari kamili na desimali hufanya kama inavyotarajiwa katika shughuli za hisabati, kwa kufuata kanuni ya BODMAS:

```go
2 + 3 * 5 // 17

fanya a = 2.5
fanya b = 3/5

a + b // 2.8
```

## ONGEZEKO ISIYO YA KAWAIDA

Unaweza kufanya nyongeza zisizo za kawaida (++ na --) kwa desimali na nambari kamili. Hizi zitaongeza au kupunguza 1 kutoka kwa thamani ya sasa. Kumbuka kuwa desimali au int lazima iwe imepewa kihifadhi ili operesheni hii ifanye kazi. Hapa kuna mfano:

```go
fanya i = 2.4

i++ // 3.4
```

## KAZI ZA MKATO

Nuru inaauni kazi za mkato kwa +=, -=, /=, \*=, na %=:

```go
fanya i = 2

i *= 3 // 6
i /= 2 // 3
i += 100 // 103
i -= 10 // 93
i %= 90 // 3
```

## NAMBARI HASI

Nambari hasi pia hufanya kama inavyotarajiwa:

```go
fanya i = -10

wakati (i < 0) {
    andika(i)
    i++
}

```

Pato:

```go
-10
-9
-8
-7
-6
-5
-4
-3
-2
-1
0
1
2
3
4
5
6
7
8
9
```
