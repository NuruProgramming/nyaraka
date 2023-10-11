---
title: Nuru Installation on Android
titleTemplate: Nuru Installation on Android
---

# Nuru Installation on Android (Termux)

You can install nuru on your Android phone using Termux. You can do so by following the steps below:

## Requirements

- Termux (Download from [F-Droid](https://f-droid.org/repo/com.termux_118.apk))

## Installation

### Download the binary with this command:

```
curl -O -L https://github.com/AvicennaJr/Nuru/releases/download/v0.2.0/nuru_android_arm64_v0.2.0.tar.gz
```

### Extract the binary with this command:

```
tar -xzvf nuru_android_arm64_v0.2.0.tar.gz
```

### Add it to path:

```
echo "alias nuru='~/nuru'" >> .bashrc
```

### Confirm installation with:

```
nuru -v
```
