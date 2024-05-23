const daysInput = document.getElementById("daysInput");
const monthsInput = document.getElementById("monthsInput");
const yearsInput = document.getElementById("yearsInput");

const daysField = document.getElementById("daysField");
const monthsField = document.getElementById("monthsField");
const yearsField = document.getElementById("yearsField");

const dayValidation = document.getElementById("dayValidation");
const monthValidation = document.getElementById("monthValidation");
const yearValidation = document.getElementById("yearValidation");

const D = new Date();

document.getElementById("calculateButton").addEventListener("click", calculate);

function calculateDifference(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
  
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();
    
    if (days < 0) {
      months--;
      days += new Date(start.getFullYear(), start.getMonth() + 1, 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
    
    daysField.innerHTML = days;
    monthsField.innerHTML = months;
    yearsField.innerHTML = years;
  }

function calculate() {
  const daysValue = daysInput.value;
  const monthsValue = monthsInput.value;
  const yearsValue = yearsInput.value;

  let dayBoolean = false;
  let monthBoolean = false;
  let yearBoolean = false;

    if(!daysValue || (daysValue <= 0 || daysValue > 31)) {
        dayValidation.classList.remove('hidden')
        daysField.innerHTML = '--';
        dayBoolean = false;
    } else {
        dayValidation.classList.add('hidden')      
        dayBoolean = true;  
    }
    if(!monthsValue || (monthsValue <= 0 || monthsValue > 12)) {
        monthValidation.classList.remove('hidden')
        yearsField.innerHTML = '--';
        monthBoolean = false;
    } else {
        monthValidation.classList.add('hidden')
        monthBoolean = true;
    }
    if(!yearsValue || (yearsValue <= 0 || yearsValue > D.getFullYear())) {
        yearValidation.classList.remove('hidden')
        yearsField.innerHTML = '--';
        yearBoolean = false;
    } else {
        yearValidation.classList.add('hidden')
        yearBoolean = true;

    }

    if(dayBoolean && monthBoolean && yearBoolean) {
        let t = new Date(`${yearsValue}-${monthsValue}-${daysValue}`)
        calculateDifference(t,D)
    }
}
