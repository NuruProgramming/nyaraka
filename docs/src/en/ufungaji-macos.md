---
title: Nuru Installation on Mac OS
titleTemplate: Nuru Installation on Mac OS
---

# Nuru Installation on Mac OS

You can install nuru on your Mac OS computer in three ways:

- Using the binary
- Using brew
- Using the nuru program

## Binary ( Apple silicon Mac )

- Download the Nuru binary

```
curl -O -L https://github.com/AvicennaJr/Nuru/releases/download/v0.5.0-alpha/nuru_mac_arm64_v0.5.0-alpha.tar.gz

```

- Extract the binary to make global available

```
sudo tar -C /usr/local/bin -xzvf nuru_mac_arm64_v0.5.0-alpha.tar.gz


```

- Confirm installation with

```
nuru -v

```

## Brew ( still being tested )

Currently, nuru is not available on brew. However, you can install it with a tap from [@fredygerman](https://github.com/fredygerman/homebrew-nuru-tap)

Currently the tap is only available for Apple silicon Macs.

```
brew tap fredygerman/nuru-tap
```

## Binary ( Intel Mac )

> Coming soon

## Nuru Program

> Coming soon
