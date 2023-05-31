---
title: Viendeshaji
titleTemplate: Ukurasa huu unashughulikia sintaksia na matumizi ya viendeshaji katika Nuru
---

# Viendeshaji

Viendeshaji ni msingi wa lugha yoyote ya programu, vinavyokuwezesha kufanya uendeshaji mbalimbali kwenye kibadilika na thamani. Ukurasa huu unashughulikia sintaksia na matumizi ya viendeshaji katika Nuru, ikiwa ni pamoja na uhifandi, hesabu, ulinganisho, mshiriki, na viendeshaji vya mantiki.

## Uhifadhi

Ukizingatia kuwa `i` na `v` ni vibadilika ambavyo vimeshaainishwa, Nuru inawezakuhimili viendeshaji vya uhifadhi vifuatavyo:

- `i = v`: ambayo ni operator ya kawaida ya uhifadhi
- `i += v`: ambayo ni sawa na `i = i + v`
- `i -= v`: ambayo ni sawa na `i = i - v`
- `i *= v`: ambayo ni sawa na `i = i * v`
- `i /= v`: ambayo ni sawa na `i = i / v`

Kwa `utungo`, `safu` na `kamusi za data`, kiendeshaji cha `+=` kinaruhusiwa. Mfano:

```
list1 += list2 // hii ni sawa na list1 = list1 + list2
```

## Viendeshaji vya Hesabu

Nuru inaweza kuhimili viendeshaji vya hesabu vifwatavyo:

- `+`: Kujumlisha
- `-`: Kujoa
- `*`: Kuzidisha
- `/`: Kugawanya
- `%`: Modulo (yaani thamani baki katika kugawanya)
- `**`: Kipeo (eg: `2**3 = 8`)

## Viendeshaji vya Ulinganisho

Nuru inaweza kuhimili viendeshaji vya ulinganisho vifuatavyo:

- `==`: Sawa na
- `!=`: Sio sawa na
- `>`: Kubwa kuliko
- `>=`: kubwa kuliko or sawa na
- `<`: Ndogo kuliko
- `<=`: Ndogo kuliko or sawa na

## Kiendeshaji cha Mshiriki

Kiendeshaji cha mshiriki katika Nuru ni `ktk`. Kina angalia kama kitu kipo katika kiti kingine:

```go
fanya majina = ['juma', 'asha', 'haruna']

"haruna" ktk majina // kweli
"halima" ktk majina // sikweli
```

## Viendeshaji vya Mantiki

Nuru inaweza kuhimili viendeshaji vya mantiki vifuatavyo:

- `&&`: Mantiki `AND`. Thamani yake itakua kweli kama semi zote ni kweli, lasivyo thamani yake itakua sikweli.
- `||`: Mantiki `OR`. Thamani yake itakua sikweli kama semi zote sikweli, lasivyo thamani yake itakua kweli.
- `!`: Mantiki `NOT`. Thamani yake itakua kinyume cha usemi husika.

## Itifaki ya Viendeshaji

Viendeshaji vina itifaki ifuatayo, kuanzia kipaumbele cha juu kabisa hadi cha chini kabisa:

- `()` : Vitu vilivyoko kwenye mabano vina kipaumbele cha juu
- `!`: Ukanushi
- `%`: Modulo
- `**`: Kipeo
- `/, *`: Kugawanya na kuzidisha
- `+, +=, -, -=`: Kujumlisha na kutoa
- `>, >=, <, <=`: Viendeshaji vya ulinganisho
- `==, !=`: Sawa na or Sio sawa na
- `=`: Kiendeshaji cha uhifadhi
- `ktk`: Kiendeshaji cha mshiriki
- `&&, ||`: Mantiki AND na OR

Kuelewa viendeshaji katika Nuru inakuruhusu kuweza kutengeneza semi tete, kufanya mahesabu, na kufanya maamuzi kulingana na thamani ya kibadilika.
