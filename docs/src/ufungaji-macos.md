---
title: Kisakinishi cha Nuru kwenye Mac OS
titleTemplate: Kisakinishi cha Nuru kwenye Mac OS
---

# Kisakinishi cha Nuru kwenye Mac OS

Una uwezo wa kufunga Nuru kwenye kompyuta yako ya Mac OS kwa njia tatu:

- Kutumia binary cha Nuru
- Kutumia brew
- Kutumia Kisakinishi cha Nuru

## Binary ( Apple silicon Mac )

- Pakua binary ya Nuru

```
curl -O -L https://github.com/AvicennaJr/Nuru/releases/download/v0.5.15/nuru_Darwin_arm64.tar.gz
```

- Fungua binary ili kuifanya iweze kutumika kwa kila sehemu

```
sudo tar -C /usr/local/bin -xzvf nuru_Darwin_arm64.tar.gz

```

- Thibitisha binary kwa:

```
nuru -v

```

## Binary ( Apple Intel Mac )

- Pakua binary ya Nuru

```
curl -O -L https://github.com/AvicennaJr/Nuru/releases/download/v0.5.15/nuru_Darwin_amd64.tar.gz
```

- Fungua binary ili kuifanya iweze kutumika kwa kila sehemu

```
sudo tar -C /usr/local/bin -xzvf nuru_Darwin_amd64.tar.gz
```

- Thibitisha binary kwa:

```
nuru -v

```

## Brew ( bado inafanyiwa majaribio )

Kwa sasa, nuru haipatikani kwenye brew. Walakini, unaweza kuisakinisha na tap kutoka kwa [@fredygerman](https://github.com/fredygerman/homebrew-nuru-tap)

Kwa sasa tap inapatikana tu kwa Macs za Apple silicon.

```
brew tap fredygerman/nuru-tap
```

## Binary ( Intel Mac )

> Inakuja hivi karibuni

## Kisakinishi cha Nuru

> Inakuja hivi karibuni
