A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. 
Ignore numbers and punctuation.

##Logic:

toLowerCase() → ignora maiúsculas e minúsculas
for (const char of text) → percorre cada caractere da frase
if (char >= 'a' && char <= 'z') → verifica se é letra
if (!seen.includes(char)) → evita repetir a mesma letra
seen.push(char) → guarda a letra
return seen.length === 26 → true só se aparecerem as 26 letras

