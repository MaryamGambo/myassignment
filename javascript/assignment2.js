/* Q4. program to calculate the area and perimeter of a rectangle and
display it to the user DOM */
const calculate = (event) => {
    event.preventDefault();
    console.log('hhh')
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    area = length * width;
    perimeter = (2 * length) + (2 * width);
     document.getElementById('area').innerHTML = 
     'Area of the rectangle' + area;
     document.getElementById('perimeter').innerHTML =
     'Perimeter of the rectangle' + perimeter;

};

// write a pattern that matches email addresses
const emailValidator = (event) => {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let emailRegex = 
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-z]{2,}))$/;
   
    if (!emailRegex.test(email)){
        let emailMsg = "Incorrect email. Please enter a valid email"
        document.getElementById('emailErr').innerHTML = emailMsg;
      }
}

// program that work as a trim function(string) using regular expression
const trim = (str) => {
    let result;
    if (typeof str == 'string'){
        result = str.replace(/^\s+|\s+$/g, '');
        return result;
    }
    else {
        return false;
    }
}; console.log(trim('   hello there'))

// program to count number of words in a string
const wordCount = (event) => {
    event.preventDefault();
    str1 = document.getElementById('string').value;
    str1 = str1.replace(/(^\s*)|(\s*$)/gi, ""); //exclude white spaces
    str1 = str1.replace(/[ ]{2,}/gi, " ");  // convert spaces to 1
    str1 = str1.replace(/\n /, "\n"); //exclude newline with a start spacing
    document.getElementById('str').innerHTML = 
    'The number of words are ' + str1.split(' ').length;
   
}


// program to check whether a given value is an IP value or not
const IPchecker = (str) => {
    IPregExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
     if (IPregExp.test(str)){
         return true + ' this is a valid IP';
     }
     else {
         return false + ' this is not a valid IP';
     }
}
console.log(IPchecker('198.156.23.5'));

// function to check whether a given value ia a valid url or not
const urlChecker = (str) => {
    URLregexp = /[-a-zA-Z0-9@:%-\+.~#?&/ /=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%-\+.~#?&/ /=]*)?/gi;
    if  (URLregexp.test(str)){
        return true + ' this is a valid URL';
    }
    else {
        return false + ' this is not a valid URL';
    }
}
console.log(urlChecker('http://www.example.com'));

// function to check whether a given value is alpha numeric or not
const isAlphanumeric = (str) => {
    Alpharegexp = /^[A-Za-z0-9]+$/;
    if (Alpharegexp.test(str)){
        return true + ' this is Alphanumeric';
    }
    else {
        return false + ' this is not Alphanumeric';
    }
} 
console.log(isAlphanumeric('345abc'))

// function to check whether a given value is a US zipcode or not
const isUSzip_code = (str) => {
    USregExp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (USregExp.test(str)){
        return true + ' this is a US zipcode';
    }
    else {
        return false + ' this is not a US zipcode';
    }
}
console.log(isUSzip_code('03201-2150'))

// function to check whether a given value is UK post code or not
const isUKpost_code = (str) => {
    UKregexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z0]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^$[A-Z]{2}-?[0-9]{4}$/;
    if (UKregexp.test(str)){
        return true + ' this is a UK postcode';
    }
    else {
        return false + ' this is not a UK postcode';
    }
}
console.log(isUKpost_code('B294HJ'));

// function to check whether a given value is canada post code or not
const isCanadapost_code = (str) => {
    canadaRegexp = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\S?[0-9][A-Z][0-9]$/;
    if (canadaRegexp.test(str)){
        return true + ' this is a canada postcode';
    }
    else {
        return false + ' this is not a canada postcode';
    }
}
console.log(isCanadapost_code('K8V3Y1'))

// program to get the length of a javascript object
const objLength = () => {
    let object = {one:1, two:2, three:3};
    length = Object.keys(object).length;
    return length;
}
console.log('Length of the object is ' + objLength());

// program to validate whether a given value type is boolean or not
const isBoolean = (value) => {
    return value === true  || value === false || toString.call(value) ==='[object Boolean]';
} 
console.log(isBoolean(true))

// program to validate whether a given value is object or not
const isObject = (value) => {
    let datatype = typeof value;
    return datatype === 'function'|| datatype === 'object' && !!value;
}
console.log(isObject({name: 'mary'}));

// function to validate whether a given value type is pure json or not
const ispure_json = (value) => {
    return toString.call(value) === '[object Object]';
}
console.log(ispure_json({name: 'ben'}));

// function to check whether given value types are same or not
const same_valueType = (value1, value2) => {
    if (is_nan(value1) || is_nan(value2)) {
        return is_nan(value1) === is_nan(value2);
    }
    return toString.call(value1) === toString.call(value2);
}
const is_nan = (val) => {
    return val !== val;
}
console.log(same_valueType('12', 100))