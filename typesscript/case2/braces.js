"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validBraces = validBraces;
function validBraces(braces) {
    const matchingBraces = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    let openBraces = [];
    for (let brace of braces) {
        if (brace in matchingBraces) {
            openBraces.push(brace);
        }
        else {
            const lastOpenBrace = openBraces[openBraces.length - 1];
            if (brace == matchingBraces[lastOpenBrace]) {
                openBraces.pop();
            }
            else {
                return false;
            }
        }
    }
    return openBraces.length === 0;
}
