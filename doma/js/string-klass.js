'use strict';

class StringOperator {
    stringReverse (str){
      let result = str.split('').reverse().join('');
      return result;
    }
};

let strOperator = new StringOperator();

let reversedStr = strOperator.stringReverse("something text");

console.log(reversedStr);