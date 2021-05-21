/* Q12. program to target a given value in a nested JSON object,based
 on the given key */
 const target_value = (obj, target) =>
     target in obj
     ? obj[target]
     : Object.values(obj).reduce((acc,val) =>{
         if (acc !== undefined) return acc;
         if (typeof val === 'object') return target_value(val,target);
     }, undefined);
 

 let student = {
     'name' : 'ali',
     'gender' : 'male'
 }
 console.log(target_value(student, 'gender'))

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
     const remove_duplicate = (arr) =>{
         let resultArray = [];
         
         for(let i of arr){
             if(resultArray.indexOf(i) === -1){
                 resultArray.push(i);
             }
         }
          return resultArray;
     }
     let names = ['one', 'two', 'one', 'three']
     console.log(remove_duplicate(names))

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


