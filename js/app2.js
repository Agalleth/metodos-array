//////////FOREACH////////////////////////////
function forEach(arreglo, callback){
  for (var i = 0; i < arreglo.length;i++){
    //al recorrer el arreglo quiero que suceda algo = callback
    callback(arreglo[i]);
  }
}
forEach([1,2,3], function(item){
  console.log(item); //item es el nombre
});
//[].myForEach  prototipos de los objetos de javascript

//////////MAP///////////////////////////////////////
function map (arreglo, callback){
  var newArray = [];
  for (var i = 0; i < arreglo.length; i++){
    newArray.push(callback(arreglo[i]));
  }
  return newArray;
}

map([1,2,3], function(item){
  return item + 2;
});
/////////FILTER////////////////////////////////////
function filter(arreglo, callback){
  var newArray = [];
  for (var i=0; i < arreglo.length; i++){
    if(callback(arreglo[i])){
      newArray.push(arreglo[i]);
    }
  }
  return newArray;
}
filter([1,2,3,4,5,6],function(item){
  return item == 3;
})

///////////REDUCE//////////////////////////
function reduce(arreglo, callback, initialize){
  var acumulador = initialize; //valor inicial
  for (var i=0; i < arreglo.length; i++){
    //acumulador= tiene que suceder algo
    acumulador= callback(arreglo[i], acumulador);
  }
  return acumulador;
}
reduce([1,2,3], function(item, acumulador){
  return acumulador + item;
},0);

////////////////SORT//////////////////////////
