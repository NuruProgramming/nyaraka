---
title: Wakati
titleTemplate: Vitenzi vya wakati katika Nuru hutumika kutekeleza pande la msimbo kwa kujirudia maadam sharti lililopewa ni kweli
---

# Wakati Katika Nuru

Vitenzi vya wakati katika Nuru hutumika kutekeleza pande la msimbo kwa kujirudia maadam sharti lililopewa ni kweli. Ukurasa huu utaangazia vitenzi vya wakati ikiwemo jinsi ya kutumia maneno msingi `vunja` na `endelea` ndani yake.

## Sintaksia

Kitenzi cha wakati hutekelezwa pale ambapo sharti lililopo ni kweli. Unaanzisha kitenzi cha wakati kwa kutumia neno msingi `wakati` likifwatiwa na sharti katika mabano `()`. Matokeo ya kitanzi yanatakiwa kuwekwa ndani ya mabano singasinga `{}`:

```go
fanya i = 1

wakati (i <= 5) {
	andika(i)
	i++
}

// Tokeo:

1
2
3
4
5
```

## Vunja and Endelea

### Break (Vunja)

Tumia neno msingi `vunja` kusitisha kitanzi:

```go
fanya i = 1

wakati (i < 5) {
	kama (i == 3) {
		andika("nimevunja")
		vunja
	}
	andika(i)
	i++
}

// Tokeo:

1
2
nimevunja
```

### Endelea

Tumia neno msingi `endelea` kuruka mzunguko maalum:

```go
fanya i = 0

wakati (i < 5) {
	i++
	kama (i == 3) {
		andika("nimeruka")
		endelea
	}
	andika(i)
}

// Tokeo:

1
2
nimeruka
4
5
```

Kwa kuelewa vitenzi vya wakati katika Nuru, unaweza kutengeneza msimbo ambao unajirudia kufanya jambo fulani au kuangalia masharti fulani, na kukupatia unyumbulifu na udhibiti katika utekelezaji wa misimbo yako.
