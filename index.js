const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
console.log(input1.value, input2.value);

//This line is equivalent to 2 above. Try to search its equivalent with byID...
const [input3, input4] = document.querySelectorAll("input");
console.log(input3.value, input4.value);

// Store result
const result = document.getElementById("result");

// Prepare for event listener
const wrapper = document.getElementById("inputs"); //Get where on which element wrapper to catch event

// Start event on that element wrapper above
wrapper.addEventListener("input", () => {
  console.log(input1.value, input2.value);
  console.log(typeof input1.value, typeof input2.value);
  let a = parseFloat(input1.value),
    b = Number(input2.value); // give same result
  let sum = a + b;
  if (isNaN(sum) && input1.value != "") {
    //alert("Please enter a valid number.");
    reset();
  } else {
    result.innerText = sum;
    console.log(typeof sum);
  }
});

// clear the inputs and result when user type a char
function reset() {
  input1.value = 0;
  input2.value = 0;
  result.innerText = 0;
}

/*
let alog = typeof input1.value,
blog = typeof b;
console.log(alog, blog);
*/
