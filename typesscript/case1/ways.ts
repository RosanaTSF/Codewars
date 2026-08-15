export function descendingOrder(n: number): number {
    const conversion = String(n);
    const digits = conversion.split("")
     digits.sort((a, b) => Number(b) - Number(a))
     const conversion2 = Number(n);
     return Number (digits.join(""))
}
   
console.log(descendingOrder(42145))
