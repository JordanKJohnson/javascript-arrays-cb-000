var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

function addElementToEndOfArray(a, element){
  array = [...a, element];
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
