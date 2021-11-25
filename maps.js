 const words = ["ground", "control", "to", "major", "tom"];

// const map = function (arg1, callback){
//     let arr = []
//     for (let index of arg1 ){
//     arr.push(callback(index))
//     return arr
//     }
// }

// const results1 = map(words, word => word[0]);
// console.log(results1);
const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      console.log('item BEFORE: ', item);
      console.log('item AFTER: ', callback(item));
      console.log('---');
    }
    return results;
  }
  const results1 = map(words, word => word[0]);
console.log(results1)