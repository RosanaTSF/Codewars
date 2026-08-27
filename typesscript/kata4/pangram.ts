export const isPangram = (phrase: string): boolean => {
    const text = phrase.toLowerCase();
    const seen: string[] = [];

    for (const char of text) {
        if (char >= 'a' && char <= 'z') {
            if (!seen.includes(char)) {
            seen.push(char);
        }
}
    return seen.length === 26;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));

console.log(isPangram("A quick brown fox jumps over a lazy dog"));