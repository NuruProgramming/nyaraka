---
title: For Loops
titleTemplate: Used for iterating over iterable objects such as strings, arrays, and dictionaries.
---

# For Loops in Nuru

For loops are a fundamental control structure in Nuru, used for iterating over iterable objects such as strings, arrays, and dictionaries. This page covers the syntax and usage of for loops in Nuru, including key-value pair iteration, and the use of break and continue statements.

## Basic Syntax

To create a for loop, use the kwa keyword followed by a temporary identifier (such as i or v) and the iterable object. Enclose the loop body in curly braces {}. Here's an example with a string:

```go
jina = "lugano"

kwa i ktk jina {
    andika(i)
}
```

Output:

```go
l
u
g
a
n
o
```

## Iterating Over Key-Value Pairs

### Dictionaries

Nuru allows you to iterate over both the value or the key-value pair of an iterable. To iterate over just the values, use one temporary identifier:

```go
kamusi = {"a": "andaa", "b": "baba"}

kwa v ktk kamusi {
    andika(v)
}
```

Output:

```go
andaa
baba
```

To iterate over both the keys and the values, use two temporary identifiers:

```go

kwa k, v ktk kamusi {
    andika(k + " ni " + v)
}
```

Output:

```go
a ni andaa
b ni baba
```

### Strings

To iterate over just the values in a string, use one temporary identifier:

```go
kwa v ktk "mojo" {
    andika(v)
}
```

Output:

```go
m
o
j
o
```

To iterate over both the keys and the values in a string, use two temporary identifiers:

```go
kwa i, v ktk "mojo" {
    andika(i, "->", v)
}
```

Output:

```go
0 -> m
1 -> o
2 -> j
3 -> o
```

### Lists

To iterate over just the values in a list, use one temporary identifier:

```go
majina = ["juma", "asha", "haruna"]

kwa v ktk majina {
    andika(v)
}
```

Output:

```go
juma
asha
haruna
```

To iterate over both the keys and the values in a list, use two temporary identifiers:

```go
kwa i, v ktk majina {
    andika(i, "-", v)
}
```

Output:

```go
0 - juma
1 - asha
2 - haruna
```

## Break (Vunja) and Continue (Endelea)

### Break (Vunja)

Use the vunja keyword to terminate a loop:

```go

kwa i, v ktk "mojo" {
    kama (i == 2) {
        andika("nimevunja")
        vunja
    }
    andika(v)
}
```

Output:

```go
m
o
nimevunja
```

### Continue (Endelea)

Use the endelea keyword to skip a specific iteration:

```go
kwa i, v ktk "mojo" {
    kama (i == 2) {
        andika("nimeruka")
        endelea
    }
    andika(v)
}
```

Output:

```go
m
o
nimeruka
o
```
