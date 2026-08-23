export function validBraces(braces: string): boolean {
    const matchingBraces: Record<string, string> = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let openBraces: string[] = []

    for (let brace of braces) {
        if (brace in matchingBraces) {
            openBraces.push(brace);

        } else {
            const lastOpenBrace = openBraces[openBraces.length - 1];
            if (brace == matchingBraces[lastOpenBrace]) {
            openBraces.pop();

        } else {
                return false;
            }
        }
    }
    return openBraces.length === 0;
    }