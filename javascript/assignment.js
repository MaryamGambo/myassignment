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

/* Q4. program to calculate the area and perimeter of a rectangle and
display it to the user DOM */
const calculate = () =>{
    let length = prompt('Enter the length of the rectangle:');
    let breadth = prompt('Enter the breadth of the rectangle:');
    let perimeter = (2 * length) + (2 * breadth);
    let area = length * breadth;

    document.getElementById('area').innerHTML =
     "Area of rectangle:" + area;
    document.getElementById('perimeter').innerHTML = 
    "Perimeter of rectangle:" + perimeter; 
}
 
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

/* Q7.function that accepts anumber as a parameter and check if
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
console.log(isPalindrome('anna'))

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

/* Q17. program to create a function that invokes each provided 
function with the arguments it receives and returns the results */

/* Q18. program to perform a deep comparison between two values 
to determine if they are equivalent */

/* Q19. program to detect whether the website is being opened in a 
mobile device or a desktop/laptop */

// Q20. program to hash a given input string into a whole number
