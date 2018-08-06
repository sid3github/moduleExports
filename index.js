//=> export literals
// module.exports = 'Siddharth'; 

//=>export object
// exports.SimpleMessage = 'Hello World';

//=>with function
// module.exports.log = function(msg){
//     console.log(msg);
// };

//=> attach an object to module.exports
// module.exports = {
//     firstName: 'Siddharth',
//     lastName: 'Padwal'
// };

//=> export function
// module.exports = function(msg){
//     console.log(msg);
// };

//=> export function as a class
// module.exports = function(firstName , lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullName = function(){
//         return this.firstName + ' ' + this.lastName;
//     };
// };