---
title: Fibonacci Sequence
# titleTemplate:
---

# Fibonacci Sequence

```go
fanya fibo = unda(x) {
	kama (x == 0) {
		rudisha 0;
	} au kama (x == 1) {
			rudisha 1;
	} sivyo {
			rudisha fibo(x - 1) + fibo(x - 2);
	}
}


andika(fibo(10));
```
