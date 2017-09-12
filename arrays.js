var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

function addElementToEndOfArray(array, element){
  return array.push(element);
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.shift(element);
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.pop();
  return array;
}
