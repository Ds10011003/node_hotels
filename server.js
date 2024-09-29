// var add= (a,b)=>a+b;
// var result = add(2,10);
// console.log(result);

// function callback(){
//     console.log("successful run callback");
// }

// function add(a,b,callback)
// {
//     var result = a+b;
//     console.log("result :"+result);
//     callback();
// }

// add(4,7,callback);


// var fs=require('fs');
// var os=require('os');

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greet.txt','hello ' + user.username + '!\n',()=>{
//     console.log('file created');
// });


//const notes = require('./notes.js');

// console.log('run');
// var age =notes.age;
// console.log(age);

// var _ = require('lodash');

// var data = ['person','person',1,2,1,2,'name','age','2'];

// var filter = _.uniq(data);
// console.log(filter);


// Conversion of JSON string to json object
const jsonString = '{"name":"John","age":30,"city":"New York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);

//conver object to JSON string
const objectToConvert={
    name:"Alice",
    age:25
};
const json = JSON.stringify(objectToConvert);
console.log(json);

console.log(typeof json);