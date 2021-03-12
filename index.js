/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  if (parseInt(timeString) < 12) {
    return 'Good Morning'
  } else if(parseInt(timeString) >= 12 && parseInt(timeString) < 17){
    return 'Good Afternoon'
  } else if(parseInt(timeString) > 17 ){
    return 'Good Evening'
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(greeting) {
document.getElementById("greeting").innerText = testContent
}