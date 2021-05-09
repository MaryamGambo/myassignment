// Q1.to capitalize the first letter of every word in a string

const capitalizeFletter = (str) => {
    let arr = str.toLowerCase().split(' ');
    let result = arr.map((arr) =>{
        return arr.replace(arr.charAt(0),arr.charAt(0).toUpperCase());
    });

    return result.join(' ');
}
console.log(capitalizeFletter('hello there'))

// Q2. function to accept an argument and return the type
const detectDatatype = (value) =>{
    let dtypes = [Function, RegExp, Number,String,Boolean,Object], x, len;
    if (typeof value ==="object" || typeof value === "function")
    for (x = 0, len = dtypes.length; x < len; x++)
    if (value instanceof dtypes[x])
    return dtypes[x];

    return typeof value;
}
console.log(detectDatatype(true))

// Q3. program to find the area of a triangle of lengths 5,6,7.
  /*  the formula is A=squareroot of s(s-a)(s-b)(s-c)
  where s is the semi perimeter. 
*/
const side1 = 5;
const side2 = 6;
const side3 = 7;
const s = (side1 + side2 + side3)/2;
const area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);


 
// Q5. function to reverse a number
const reverseNumber = (num) =>{
    num = num.toString();
    return num.split('').reverse().join("");
}
console.log(reverseNumber(12345))

/* Q6. function that accepts a string as a parameter and counts 
  the number of vowels within the string. */
const countVowel = (str) => {
    let vowelList = 'AEIOUaeiou'
    let count = 0;
    
    for(let i=0; i < str.length; i++)
    if (vowelList.indexOf(str[i]) !== -1)
    count +=1;

    return count;
}
console.log(countVowel('hello everyone'))

/* Q7.function that accepts a number as a parameter and check if
  it is prime or not */
const isPrime = (num) => {
    for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
    return num > 1;
}
console.log(isPrime(56))

// Q8. function that says whether a number is perfect
const isPerfect = (num) => {
    let sum = 0;
    for(let i=1; i<=num/2; i++)
    if(num % i === 0)
    sum += i;

    if(sum === num )
    console.log('perfect number')
    else
    console.log('not perfect number')
}
console.log(isPerfect(6))

// Q9. function that checks whether a passed string is palindrome or not
const isPalindrome = (str) => {
    let reg = /\W_/g
    var smallstr = str.toLowerCase().replace(reg,"");
    let reversed = str.split('').reverse().join("");
    if (reversed === str)return true;

    return false;
}
console.log(isPalindrome('eye'))

// Q10. function that generates all combination of a string
const combination = (str) => {
    let stringList = [];
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length + 1; j++){
            stringList.push(str.slice(i,j))
        }
    } return stringList
}
console.log(combination('group'))

/* Q11. function that accepts a sting as a parameter and find the
  longest word within the string */
const longestWord = (str) => {
    let strArray = str.split(" ");
    let sortedArray = strArray.sort(
        (strA, strB) =>
            {return strB.length - strA.length;})
       return sortedArray[0];
}
 console.log(longestWord('hello everybody'))

 /* Q12. program to target a given value in a nested JSON object,based
 on the given key */

/* Q13. program to extract out the values at the specified indexes 
 from a specified object */
 const valueExtractor = (arr,prop) =>{
     let extractValue = [];
     for(let i=0; i< arr.length; ++i)
     extractValue.push(arr[i][prop])
     return extractValue;
 }
 const obj = [{a:1, b:2},{a:4, b:7}]
 console.log(valueExtractor(obj, 'b'))

// Q14. program to generate a random hexadecimal color code
const colorGenerator = (str) => {
    let letters = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++)
    color += letters[(Math.floor(Math.random() * 16))];
    return color;
}
console.log(colorGenerator())
// Q15. program to convert the length of a given string in bytes
const byteSize = (str) => {
    byte = new Blob([str]).size;
    return byte;
}
console.log(byteSize('hello there'))

// Q16. program to measure the time taken by a function to execute
const timer = () =>{
    let start = window.performance.now();
     colorGenerator()
    var end = window.performance.now();
    let dur = end - start;
    return dur;
}
console.log(timer())


/* Q17. program to create a function that invokes each provided 
function with the arguments it receives and returns the results */
const functionInvoker = () =>{
    const over = (...fns) => (...args) => fns.map(fn =>fn.apply(null,args));
    const min = over(Math.min);
    console.log(min(9,3,5));
}
console.log(functionInvoker())


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
const scoreGrader = () => {
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
          console.log(i +' is divisible by 3 and 5');
          break 
         case (i % 3 === 0):
          console.log( i +' is divisible by 3');
          break
         case(i % 5 === 0):
          console.log( i + " is divisible by 5");
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

// program to accept a number from the user and insert dashes between each two even numbers
 const insert_dash = (event) => {
     event.preventDefault();
     let str = document.getElementById('number').value
     let strArr = str.split('');
     let numArr =  strArr.map(Number);
     for( let i = 0; i < numArr.length; i++){
         if(numArr[i - 1] % 2 === 0 && numArr[i] % 2 === 0){
             numArr.splice(i, 0, "-");
         }
     } 
     document.getElementById('even').innerHTML  = numArr.join("");
    };

    //  program to add items in a blank array and display it to the users 
    const userInput = (event) =>{
        event.preventDefault();
        let text = ''
        let array =[]
        let userIn = document.getElementById('arr').value;
        array.push(userIn)
        for (var i = 0; i <array.length; i++){ 
          text +=array[i];
        }
        let li = document.createElement("li")
        let node = document.createTextNode(text)
        li.appendChild(node)
       document.getElementById('list').appendChild(li).innerHTML = text;
      }

      // program to remove duplicate items from an array (ignore case sensitivity)

      //function to filter false, null, 0 and blank values from an array
      const filter_array = (arr) => {
          arr = arr.filter(isEligible);
          return arr;
      }
      const isEligible = (value)=> {
          if (value !== false || value !== null || value !== 0 || value !== ""){
              return value;
          }
      };
     console.log(filter_array([58,'', 'abcd', true,null,false, 0]));
     

