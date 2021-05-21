/* Q18. program to perform a deep comparison between two values 
to determine if they are equivalent */
const equal = (a,b) =>{
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date)
     return a.getTime() === b.getTime();
    if (!a || !b ||(typeof a !== 'object' && typeof b !== 'object'))
     return a === b;
    if (a === null || a === undefined || b === null || b === undefined)
     return false;
    if (a.prototype !== b.prototype) return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => equal(a[k], b[k]));

};
console.log(equal({ a: [2,{ e: 3}], b:[7],c: 'ball'},{ a: [2,{ e: 3}], b:[7],c: 'cat'}))

/* Q19. program to detect whether the website is being opened in a 
mobile device or a desktop/laptop */
const device_detector = () =>
    /Android|webOS|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

console.log(device_detector())


// Q20. program to hash a given input string into a whole number
const hash = (str) =>{
    let arr = str.split('');
    return arr.reduce(
      (hashCode, currentVal) =>
        (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) +
        (hashCode << 16) - hashCode),0
    );
};
console.log(hash('name'))


// program to grade scores
const scoreGrader = (event) => {
    event.preventDefault();
    let score, grade
    score = document.getElementById('score').value;
    grade = (score >= 70) ? "A Excellent" :
     (score >= 60 )? "B Very Good":
     (score >= 50) ? "C Good":
     (score >= 40) ? "D Fair":
     (score >= 35 )? "E Poor":" F Fail"
     
    document.getElementById('demo').innerHTML = grade 
}

// program to change backgroung color using user input
const changeBcolor = (event)=> {
    event.preventDefault();
    document.body.style.background = document.getElementById('color').value;
}
 /* program to iterate integers from 1 to 100 and print out fizz 
 for multiples of three,buzz for five and fizzbuzz for both five and three*/
const fizzbuzz = () => {
    for (var i = 0; i <= 100; ++i){
        switch(true) {
         case (i % 3===0 && i % 5 === 0):
          console.log(i +' fizzbuzz');
          break 
         case (i % 3 === 0):
          console.log( i +' fizz');
          break
         case(i % 5 === 0):
          console.log( i + " buzz");
         break
         default:
          console. log(i)
        }
    } 
}; console.log(fizzbuzz());

// program to sum the multiples of 3 and 5 under 1000
const multiples = () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++){
        if (i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }return sum
}; console.log(multiples());

// function to move an array element from one position to another
const arrayMover = (arr, old_index, new_index) => {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length){
        let k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);   
        }
    } arr.splice(new_index, 0, arr.splice(old_index, 1) [0]);
    return arr;
}; console.log(arrayMover([1, 2, 3, 4, 5], 0, 2 ));

/* function for loop to iterate from 0 to 15, check for odd and even numbers
and display a message to the screen*/ 
const oddEven = () => {
    for (let i=0; i <=15; i++){
        if (i === 0) {
            console.log( i + " is even");
        }
        else if (i % 2 === 0){
            console.log(i + " is even");
        }
        else {
            console.log(i + " is odd");
        }
    }
}; console.log(oddEven());

//program to find and print the first five happy numbers
const isHappynumber = (num) => {
    let m,n ;
    let c = [];

    while(num != 1 && c[num] !== true){
        c[num] = true;
        m = 0;
        while (num > 0) {
            n = num % 10;
            m += n * n;
            num = (num - n) / 10;
        }num = m;
    } return (num == 1);
}
    let cnt = 5;
    let num = 1;
    let f5 = '';
    while(cnt-- >0){
        while(! isHappynumber(num))
        num++ ;
      f5 = f5 + (num + ", ");
        num++;   
    } console.log('first 5 happy numbers are :' + f5);

// functtion to split a string and convert it into an array of words
const string_split = (str) => {
    return str.trim().split(" ");
};
console.log(string_split("hello everyone"))  

// function to uncapitalize the first character of a string
const uncapitalize = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
};
console.log(uncapitalize('Hello everyone'))

     

