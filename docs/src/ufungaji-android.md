---
title: Kisakinishi cha Nuru kwenye Android
titleTemplate: Kisakinishi cha Nuru kwenye Android
---

# Kisakinishi cha Nuru kwenye Android (Termux)

Una uwezo wa kufunga nuru kwenye simu yako ya Android kwa kutumia Termux. Unaweza kufanya hivyo kwa kufuata hatua zifuatazo:

## Mahitaji

- Termux (Pakua kutoka [F-Droid](https://f-droid.org/repo/com.termux_118.apk))

## Ufungaji

### Pakua kisakinishi na amri hii

```bash
curl -O -L https://github.com/AvicennaJr/Nuru/releases/download/v0.5.15/nuru_Android_arm64.tar.gz
```

### Fungua kisakinishi na amri hii

```bash
tar -xzvf nuru_Android_arm64.tar.gz
```

### Ongeza nuru kwenye njia

```bash
echo "alias nuru='~/nuru'" >> .bashrc
```

### Rejesha mazingira ya bash

```bash
source ~/.bashrc
```

### Thibitisha kisakinishi kwa

```bash
nuru -v
```

Hapa utaona toleo la nuru kwenye simu yako ya Android.

## Matumizi

Unaweza kutumia nuru kwa kufuata amri zifuatazo:

```bash
nuru
```

Utapata mazingira ya nuru kwenye simu yako ya Android.

![Muonekano Baada ya kusanikisha](./nuru-android.png)
