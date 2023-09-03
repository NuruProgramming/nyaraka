---
title: Swichi
titleTemplate: Matamshi ya Swichi katika Nuru yanakuwezesha kutekeleza mapande tofauti ya msimbo kulingana na thamani ya semi husika
---

# Matamshi ya Swichi Katika Nuru

Matamshi ya Swichi katika Nuru yanakuwezesha kutekeleza mapande tofauti ya msimbo kulingana na thamani ya semi husika. Ukurasa huu unaangazia misingi ya matamshi ya swichi na matumizi yake.

## Sintaksia

Unaanzisha tamshi la swichi kwa kutumia neno msingi `badili`, semi ndani ya mabano `()`, na kesi zote ndani ya mabano singasinga `{}`.

Tamshi la kesi lina neno msingi `ikiwa`, likifwatiwa na thamani ya kuangaliwa. Thamani nyingi zinaweza kuwa katika kesi moja zikitenganishwa na mkato `,`. Msimbo wa kutekelezwa ikiwa sharti limetimizwa unatakiwa uwe ndani ya mabano singasinga `{}`. Kwa mfano:

```go
fanya a = 2

badili (a){
	ikiwa 3 {
		andika("a ni tatu")
	}
	ikiwa 2 {
		andika ("a ni mbili")
	}
}
```

## Thamani Nyingi Kwenye Kesi Moja

Nafasi/uwezekani mbalimbali unaweza ukawekwa kwenye tamshi la kesi moja:

```go
badili (a) {
	ikiwa 1,2,3 {
		andika("a ni kati ya 1, 2 au 3")
	}
	ikiwa 4 {
		andika("a ni 4")
	}
}
```

## Kesi ya Kawaida

Kesi ya kawaida itatekelezwa pale ambapo hamna sharti lolote lililotimia. Tamshi la kawaida huwakilishwa na neno msingi `kawaida`:

```go
fanya z = 20

badili(z) {
	ikiwa 10 {
		andika("kumi")
	}
	ikiwa 30 {
		andika("thelathini")
	}
	kawaida {
		andika("ishirini")
	}
}
```

Kwa kuelewa matamshi ya swichi katika Nuru, unaweza ukatengeneza msimbo fanisi na uliopangiliwa vizuri unaoweza kumudu masharti mengi kiurahisi.
