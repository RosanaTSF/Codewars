Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

##Lógica:

## 1. Primeiro: `matchingBraces`

```typescript
const matchingBraces = {
    '(': ')',
    '[': ']',
    '{': '}'
}
```
Criado como um **dicionário**:

```text
abertura → fechamento

( → )
[ → ]
{ → }
```

Então:

```typescript
matchingBraces['(']
```

significa:

> Qual é o fechamento de `(`?

Resposta:

```text
)
```

---

## 2. Agora `openBraces`

Você criou:

```typescript
let openBraces: string[] = []
```
**lista vazia**.

Ela vai guardar as aberturas que encontramos.

Por exemplo, se estivermos lendo:

```text
"(["
```

vamos guardar:

```text
openBraces = ["(", "["]
```

Por quê?

Porque encontramos `(` e `[`, mas ainda não encontramos os fechamentos deles.

---

## 3. Agora o `for`

```typescript
for (let brace of braces)
```

Isso significa:

> Pegue **um caractere por vez** de `braces`.

Se:

```typescript
braces = "([])"
```

o `for` vai fazer:

```text
1ª volta → brace = "("
2ª volta → brace = "["
3ª volta → brace = "]"
4ª volta → brace = ")"
```
---

# Simulação:

```text
"([])"
```

### PRIMEIRA volta

Temos:

```text
brace = "("
```

Perguntamos:

```typescript
if (brace in matchingBraces)
```

Traduzindo:

> `"("` está dentro do nosso dicionário?

Sim.

Então:

```typescript
openBraces.push(brace);
```

Coloca `(` na lista:

```text
openBraces = ["("]
```

---

### SEGUNDA volta

Agora:

```text
brace = "["
```

`[` também está no dicionário.

Então:

```typescript
openBraces.push("[");
```

Agora:

```text
openBraces = ["(", "["]
```

```text
Lemos:    ( [
Guardamos: ( [
```
---

# TERCEIRA volta

Agora encontramos:

```text
brace = "]"
```

`]` **não está** no dicionário.

O dicionário só tem:

```text
(
[
{
```

Então entramos no `else`:

```typescript
const lastOpenBrace = openBraces[openBraces.length - 1];
```

Desmontando.
Temos:

```text
openBraces = ["(", "["]
```

Os índices são:

```text
         0     1
       ┌─────┬─────┐
       │  (  │  [  │
       └─────┴─────┘
```

`openBraces.length` é:

```text
2
```

Então:

```typescript
openBraces.length - 1
```

é:

```text
1
```

Logo:

```typescript
openBraces[1]
```

é:

```text
"["
```

Portanto:

```typescript
const lastOpenBrace = openBraces[openBraces.length - 1];
```

Significa:

> **Pegue a última abertura que guardamos.**

Resultado:

```text
lastOpenBrace = "["
```

---

# Agora fazemos a pergunta principal

Temos:

```text
brace = "]"
```

e:

```text
lastOpenBrace = "["
```

Queremos saber:

> `[` deveria fechar com `]`?

Usamos:

```typescript
matchingBraces[lastOpenBrace]
```

Como:

```text
lastOpenBrace = "["
```

temos:

```typescript
matchingBraces["["]
```

que resulta em:

```text
"]"
```

Então:

```typescript
if (brace == matchingBraces[lastOpenBrace])
```

vira mentalmente:

```text
if ("]" == "]")
```

Verdadeiro!

Então:

```typescript
openBraces.pop();
```

remove o último:

```text
ANTES:

["(", "["]

DEPOIS:

["("]
```

---

# Quarta volta

Agora:

```text
brace = ")"
```

Temos:

```text
openBraces = ["("]
```

A última abertura é:

```text
"("
```

E:

```typescript
matchingBraces["("]
```

é:

```text
")"
```

Então:

```text
")" == ")"
```

Verdadeiro.

Fazemos:

```typescript
openBraces.pop();
```

Agora:

```text
openBraces = []
```

---

# E finalmente

Depois que o `for` termina:

```typescript
return openBraces.length === 0;
```

Nossa lista está:

```text
[]
```

Então:

```text
openBraces.length
```

é:

```text
0
```

Logo:

```text
0 === 0
```

é:

```text
true
```

Portanto:

```text
"([])" → true
```

---

## comportamento:

```text
ENCONTREI ABERTURA
        ↓
     guardo
        ↓
   openBraces
```

Quando encontro fechamento:

```text
ENCONTREI FECHAMENTO
        ↓
pego a última abertura
        ↓
vejo se combina
        ↓
     combina?
      /    \
    SIM    NÃO
     ↓      ↓
   removo  false
```

E no final:

```text
sobrou alguma abertura?
       /       \
     SIM       NÃO
      ↓         ↓
    false      true
```

### conceito:

`openBraces` está funcionando como uma **pilha (stack)**.

```typescript
openBraces.push(brace);
```

coloca algo **no topo**.

E:

```typescript
openBraces.pop();
```

remove **o que está no topo**.

##`lastOpenBrace`: **o fechamento precisa corresponder à última abertura que ainda está esperando ser fechada.**

**a lógica da pilha (`push` → último elemento → `pop`)**.

```text
"(" → guarda
"[" → guarda
"]" → confere com "[", remove
")" → confere com "(", remove