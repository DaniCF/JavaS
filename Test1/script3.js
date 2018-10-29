var num1 = 24;
var num2 = 12;
var operadores = ['+','-','*','/'];
var numerosos = [1,3,5,8,13];
var totalSuma = 0;
var totalResta = 0;
var totalMultiplicación = 1;
var totalDivision = 1;



function operarNumeros(factor1, factor2, op){
    if(op == '+'){
        return factor1 + factor2;
    }
    if(op == '-'){
        return factor1 - factor2;
    }
    if(op == '*'){
        return factor1 * factor2;
    }
    if(op == '/'){
        return factor1 / factor2;
    }
    
}

console.log(operarNumeros(num1,num2,'+'));
console.log(operarNumeros(num1,num2,'-'));
console.log(operarNumeros(num1,num2,'*'));
console.log(operarNumeros(num1,num2,'/'));

console.log('');

function operarNumerosMal(aLottaNumbers, op){ 
    if(op == '+'){
        for (let i = 0; i < aLottaNumbers.length; i++){
            totalSuma += aLottaNumbers[i];
        }
        return totalSuma;
    }
    if(op == '-'){
        for (let i = 0; i < aLottaNumbers.length; i++){
            totalResta -= aLottaNumbers[i];
        }
        return totalResta;
    }
    if(op == '*'){
        for (let i = 0; i < aLottaNumbers.length; i++){
            totalMultiplicación *= aLottaNumbers[i];           
        }
        return totalMultiplicación;
    }
    if(op == '/'){
        for (let i = 0; i < aLottaNumbers.length; i++){
            totalDivision /= aLottaNumbers[i];            
        }
        return totalDivision;
    }
    
}

console.log(operarNumerosMal(numerosos,'+'));
console.log(operarNumerosMal(numerosos,'-'));
console.log(operarNumerosMal(numerosos,'*'));
console.log(operarNumerosMal(numerosos,'/'));

console.log('');

(function(texto){console.log(texto)})('Yellow there')

function factorial(N){
    if (N==0){
        return 1;
    }
    else{
        return N*factorial(N-1);
    }
}

console.log(factorial(5))