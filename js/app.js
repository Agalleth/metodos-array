//1.-
function myForEach(array, callback){
  callback(array)
}
myForEach([1,2,3], function(array){
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
})
//2.-
function myMap(array, callback){
  callback(array)
}
myMap([1,2,3], function(array){
  var newArray= [];
  for (var i = 0; i < array.length; i++){
    newArray.push(array[i]*2);
  }
  console.log(newArray);

})

//3.-
function myFilter(array, callback){

}
//4.-
function myReduce(array,reduce){

}

//5.-
function mySort(array, callback){

}
