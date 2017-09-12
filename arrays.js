var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
}

function addElementToEndOfArray(array, element){
  array.push(element);
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.shift(element);
}

function removeElementFromEndOfArray(array){
  array.slice(0, array.length - 1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array[array.length - 1] = undefined;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}
