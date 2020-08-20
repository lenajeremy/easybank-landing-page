// // function fibonacciSequence(value) {
// //     var sequence = [1, 2];
// //     while (sequence[sequence.length - 1] < value) {
// //         var newElement = sequence[sequence.length - 1] + sequence[sequence.length - 2];
// //         sequence.push(newElement);
// //         lastElementChecker()
// //     }

// //     function lastElementChecker() {
// //         if (sequence[sequence.length - 1] > value) {
// //             sequence.pop();
// //         }
// //     }
// //     return sequence
// // }
// // console.log(fibonacciSequence(100))

// let array = [1, 2, 3, 4, 5, 6];
// function removeElement(element, array) {
//     var newArray = []
//     for (let elem of array) {
//         if (elem === element) {
//             continue
//         } else {
//             newArray.push(elem)
//         }
//     }
//     if (arrayChecker(array, newArray)) {
//         throw new Error('SearchError: Value to remove not in string');
//     } else {
//         return newArray;
//     }
// }

// function arrayChecker(array1, array2) {
//     count = 0;
//     for (let elem1 of array1) {
//         for (let elem2 of array2) {
//             if (elem1 === elem2) {
//                 count++;
//             }
//         }
//     }
//     if (count === Math.max(array1.length, array2.length)) {
//         return true;
//     } else {
//         return false
//     }
// }
// function isPrime(number){
//     let noPrime = 0;
//     for(let i = 2; i<=number; i++){
//         if(number%i === 0 && number !== i){
//             noPrime++
//         }
//     }
//     if(noPrime > 0){
//         return false
//     } else{
//         return true
//     }
// }
// const allPrimes = (limit) =>{
//     var primes = []
//     for(let i = 2; i <= limit; i++){
//         if(isPrime(i)) primes.push(i);
//     }
//     return primes
// }
// function primeFactors(number){
//     var primeFactors = []
//     for(let numbers of allPrimes(number)){
//         if (number%numbers === 0){
//             primeFactors.push(numbers)
//         }
//     }
//     return primeFactors;
// }
// console.log(primeFactors(67))
async function countDown(limit){
    while(limit >= 0){
        document.querySelector('h1').textContent = limit
        limit--;
        await sleep(1000);
    }
}
const sleep = (ms) =>{
    return new Promise(resolve =>{
        setTimeout(resolve, ms)
    } 
    )
}
countDown(100);