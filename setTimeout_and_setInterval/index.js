function doStuff() {
  console.log('kkk');
}

function myTimeoutFunction(){
    doStuff();
    setTimeout(myTimeoutFunction, 1000);
}

myTimeoutFunction();


// function myTimeoutFunction()
// {
//     doStuff();
// }

// myTimeoutFunction();
// setInterval(myTimeoutFunction, 1000);