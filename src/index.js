const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newExpr = '';
    let newLet=[];
    let decodedStr = '';
    let n;
 for (let i=0; i<expr.length+1; i++) {
     if (i%10===0 && i!=0 && expr[i]!='*' ) {
       newLet.push(newExpr); 
       //newLet.push(' ');
       newExpr='';
     }
   if (expr[i]==0) {
   } else if (expr[i]==1) {
       if (expr[i+1]==1){
          newExpr=newExpr + '-'
          console.log(newExpr);
          i++;
       } else {
          newExpr=newExpr + '.'
          console.log(newExpr);
          i++;
       }
   } else if (expr[i]==='*') {
        newLet.push(newExpr);
        newExpr='';
        i=i+9;
   }
  } //newLet.push(newExpr); 
   console.log (newLet)
   for (let i=0; i<newLet.length; i++) {
    if (newLet[i] !== '') {
       let n=newLet[i]
        decodedStr=decodedStr + MORSE_TABLE[n];
    } else {
        decodedStr=decodedStr + ' ';
    }
   }
   console.log(decodedStr)
   return decodedStr;
 }

module.exports = {
    decode
}