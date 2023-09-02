---
title: Tungo
titleTemplate: Tungo ni mfwatano wa herufi ambazo zinaweza kuwakilisha andiko katika Nuru.
---

# Tungo Katika Nuru

Tungo ni mfwatano wa herufi ambazo zinaweza kuwakilisha andiko katika Nuru. Ukurasa huu unaangazia misingi ya tungo, namna ya kuzichambua, na baadhi ya vitendakazi vilivyojengwa ndani ya Nuru kwa ajili ya tungo.

## Sintaksia

Tungo zinaweza kuwekwa ndani ya alama za nukuu `""` au `''`:

```go
andika("mambo") // mambo

fanya a = 'niaje'

andika("mambo", a) // mambo niaje
```

## Uunganishaji wa Tungo

Tungo zinaweza kuunganishwa kwa kutumia kiendeshaji cha `+`:

```go
fanya a = "habari" + " " + "yako"

andika(a) // habari yako

fanya b = "habari"

b += " yako"

// habari yako
```

Unaweza pia kurudia utungo mara kadhaa kwa kutumia kiendeshaji cha `*`:

```go
andika("mambo " * 4)

// mambo mambo mambo mambo

fanya a = "habari"

a *= 4

// habarihabarihabarihabari
```

## Kuzunguka ndani ya tungo

Unaweza kuzunguka ndania ya tungo kwa kutumia neno-msingi la `kwa`:

```go
fanya jina = "avicenna"

kwa i ktk jina {andika(i)}
```

Output

```go
a
v
i
c
e
n
n
a
```

Na kwa kutumia jozi ya funguo-thamani:

```go
kwa i, v ktk jina {
	andika(i, "=>", v)
}
```

Output

```go
0 => a
1 => v
2 => i
3 => c
4 => e
5 => n
6 => n
7 => a
```

## Kulinganisha Tungo

Unaweza kulinganisha tungo mbili kwa kutumia kiendeshaji cha `==`:

```go
fanya a = "nuru"

andika(a == "nuru") // kweli

andika(a == "mambo") // sikweli
```

## Vitendakazi vya Tungo

### idadi()

Unaweza kupata urefu wa utungo kwa kutumia kitendakazi cha `idadi()`. Haikubali vipengele vyovyote.

```go
fanya a = "mambo"
a.idadi() // 5
```

### herufikubwa()

Kitendakazi hichi hubadilisha utungo kua katika herufi kubwa. Haikubali vipengele vyovyote.

```go
fanya a = "nuru"
a.herufikubwa() // NURU
```

### herufindogo()

Kitendakazi hichi hubadilisha utungo kua katika herufi ndogo. Haikubali vipengele vyovyote.

```go
fanya a = "NURU"
a.herufindogo() // nuru
```

### gawa()

Kitendakazi cha `gawa()` hugawanyisha utungo kua safu kwa kulingana na kigawanyishi fulani. Kitendakazi hichi huchukua kipengele kimoja ambacho ni thamani itakayotumika kugawanyisha utungo wako. Kama hamna kipengele chochote kitakacho wekwa, itagawanyisha utungo kwa kuangalia nafasi tupu.

Mfano wa matumizi bila kipengele:

```go
fanya a = "lugha ya kipogramu ya nuru"
fanya b = a.gawa()
andika(b) // ["lugha", "ya", "kipogramu", "ya", "nuru"]
```

Mfano wa matumizi ikiwa na kipengele:

```go
fanya a = "Habari, salamu kutoka Dar es Salaam"
fanya b = a.gawa(",")
andika(b) // ["Habari", " salamu kutoka Dar es Salaam"]
```

Kwa kuelewa Tungo na namna ya kuzichambua katika Nuru, utaweza kufanya kazi vizuri na data za maandishi katika programu zako.
