const billAmount = document.querySelector("#bill");
const tipPercentage = document.querySelector("#tip");
const numberPeople = document.querySelector("#people");
const calculateBtn = document.getElementById("calculate-btn");

const tipAmountDisplay = document.getElementById("tip-amount");
const totalAmountDisplay = document.getElementById("total-amount");
const perPersonDisplay = document.getElementById("per-person");

function calculateTip(event) {
  event.preventDefault(); // Prevent form submission

  const billInput = parseFloat(billAmount.value);
  const tipInput = parseFloat(tipPercentage.value);
  const numberPeopleInput = parseInt(numberPeople.value);

  if (isNaN(billInput) || billInput <= 0) {
    alert("Please enter a valid bill amount!");
    return;
  }

  if (isNaN(numberPeopleInput) || numberPeopleInput <= 0) {
    alert("Please enter a valid number of people!");
    return;
  }

  const tipAmount = billInput * tipInput;
  const totalAmount = billInput + tipAmount;
  const amountPerPerson = totalAmount / numberPeopleInput;

  // Update the DOM with the calculated values
  tipAmountDisplay.textContent = tipAmount.toFixed(2); // using to fixed the value 
  totalAmountDisplay.textContent = totalAmount.toFixed(2);
  perPersonDisplay.textContent = amountPerPerson.toFixed(2);
}

calculateBtn.addEventListener("click", calculateTip);
