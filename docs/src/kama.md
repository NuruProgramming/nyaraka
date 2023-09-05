---
title: Tamshi Shurti la Kama
titleTemplate: Matamshi ya shurti katika Nuru yanatumika kutekeleza utendaji tofauti kulingana na masharti fulani
---

# Matamshi ya Shurti katika Nuru

Matamshi ya shurti katika Nuru yanatumika kutekeleza utendaji tofauti kulingana na masharti fulani. Tamshi la kama/sivyo muundo wa msingi kudhibiti ambao unakuwezesha kutekeleza msimbo kwa kulingana na masharti maalum. Ukurasa huu unaangazia misingi ya tamshi la kama/sivyo katika Nuru.

## Kama

Tamshi la kama linaanza na neno msingi `kama`, likifuatiwa na mabano ya sharti. Kama sharti ni kweli, msimbo ndani ya mabano singasinga utatekelezwa.

```go
kama (2 > 1) {
    andika(kweli) // Tokeo: kweli
}
```

Katika huu mfano, sharti `2 > 1` ni kweli, hivyo tamshi la `andika(kweli)` litatekelezwa na tokeo litakua `kweli`.

## Au Kama na Sivyo

Unaweza kutumia `au kama` kujaribisha masharti mengi na `sivyo` kubainisha pande la msimbo litakalotekelezwa pale ambapo masharti yote sio kweli.

```go

fanya a = 10

kama (a > 100) {
    andika("a imezidi 100")
} au kama (a < 10) {
    andika("a ndogo kuliko 10")
} sivyo {
    andika("Thamani ya a ni", a)
}

// Tokeo litakua: 'Thamani ya a ni 10'
```

Katika huu mfano, sharti la kwanza `a > 100` sikweli, na kwenye sharti la pili `a < 10` pia sikweli. Hivyo basi, msimbo ndani ya pande la `sivyo` unatekelezwa, na tokeo ni "Thamani ya a ni 10".

Kwa kutumia matamshi ya kama/sivyo ikiwa na maneno msingi `kama`, `au kama`, na `sivyo`, utaweza kudhibiti mtiririko wa msimbo wako wa Nuru kwa kuzingatia masharti tofauti.
