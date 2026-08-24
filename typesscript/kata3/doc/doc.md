Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

**Lógica**
---

### 1. `while`

```typescript
while (n >= 10)
```
> "Enquanto `n` tiver 2 ou mais dígitos, continue."
---

### 2. Separar os dígitos

```typescript
const digits = n.toString().split("");
```

Se:

```text
n = 493
```

faz:

```text
493
 ↓ toString()
"493"
 ↓ split("")
["4", "9", "3"]
```
---

### 3. Somar os dígitos

```typescript
let sum = 0;

for (const digit of digits) {
    sum += Number(digit);
}
```

Começa:

```text
sum = 0
```

Primeiro:

```text
digit = "4"
sum = 0 + 4
sum = 4
```

Segundo:

```text
digit = "9"
sum = 4 + 9
sum = 13
```

Terceiro:

```text
digit = "3"
sum = 13 + 3
sum = 16
```

Resultado:

```text
sum = 16
```
---
### 4. Colocar o resultado em `n`

```typescript
n = sum;
```

```text
n = 493

↓

n = 16
```

E aí o `while` **volta para o começo**.

Agora ele faz tudo de novo com `16`:

```text
16
 ↓
["1", "6"]
 ↓
1 + 6
 ↓
7
```

Então:

```text
n = 7
```

---
### 5. Por que ele termina?

```typescript
while (n >= 10)
```

Mas:

```text
7 >= 10
```

é falso.

Então o `while` termina e:

```typescript
return n;
```

retorna:

```text
7
```

---

```
             n = 493
                │
                ▼
          n >= 10? SIM
                │
                ▼
       separar os dígitos
                │
                ▼
          ["4","9","3"]
                │
                ▼
            somar
                │
                ▼
              16
                │
                ▼
          n = 16
                │
                ▼
          n >= 10? SIM
                │
                ▼
          ["1","6"]
                │
                ▼
             1 + 6
                │
                ▼
               7
                │
                ▼
          n >= 10? NÃO
                │
                ▼
            return 7
```


O algoritmo é:

**"Se ainda não cheguei a um único dígito → separo os dígitos → somo → uso a soma como novo número → repito."**

O `while` é necessário pq: **não sabemos qtas vezes precisaremos repetir a soma.**

npx tsc --ignoreConfig aDigit.ts
node aDigit.js