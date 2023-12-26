//Fibonacci function without recursion
function fibs(num) {
    let number1 = 0;
    let number2 = 1;
    let arr1 = [];
  
    for (let i = 0; i < num; i++) {
      arr1.push(number1);
      let temporarynumber = number1 + number2;
      number1 = number2;
      number2 = temporarynumber;
    }
  
    return arr1;
  }
  
  console.log(fibs(8));
  
  
  
  
  
  //Fibonacci function with recursion
  function fibsRec(num) {
    if (num <= 1) {
      return [0, 1];
    }
    let newFibsRec = fibsRec(num - 1);
    newFibsRec.push(
      newFibsRec[newFibsRec.length - 1] + newFibsRec[newFibsRec.length - 2]
    );
    return newFibsRec.slice(0, num);
  }
  
  console.log(fibsRec(8));
  
  
  
  
  
  /*------------------Merge Sort------------------*/
  
  function mergeTwoArrays(leftArr, rightArr) {
    let rightIndex = 0;
    let leftIndex = 0;
    let result = [];
  
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        result.push(leftArr[leftIndex]);
        leftIndex = leftIndex + 1;
      } else {
        result.push(rightArr[rightIndex]);
        rightIndex = rightIndex + 1;
      }
    }
    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
  }
  


  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const rightSide = arr.slice(mid);
    const leftSide = arr.slice(0, mid);
  
    return mergeTwoArrays(mergeSort(rightSide), mergeSort(leftSide));
  }
  
  console.log(mergeSort([13, -77, 85, 44, 53, 0, 1, 8, 9, 5, 96, 1, 2, 0, 3, 23, -4, 142]));
  