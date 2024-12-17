const { returns } = require("chai-spies");

const chai =function(){
console.log('Hello Anne');
}
chai();

function receivesAFunction(callback){
    callback();
}
receivesAFunction(chai);

function returnsANamedFunction(){
    function namedFunction(){
        console.log('This is a named function');
    }
    return namedFunction;
}
function returnsAnAnonymousFunction(){
    return ()=>{
        console.log(' return anonymous function')
    }

}


