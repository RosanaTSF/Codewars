export const digitalRoot = (n:number):number => {
   while (n >= 10) {
    const digits = n.toString().split("");
    
   let sum = 0;

   for (const digit of digits) {
        sum += Number(digit);
            }
        
        n = sum;
   }
   return n;
};

console.log(digitalRoot(493193))