const debtBlock = document.querySelector('#debt-block')
const debt = document.querySelector('#debt')
const persData = document.querySelector('#pers-data-input')
const persAddress = document.querySelector('#pers-address-input')
const ownershipInputs = document.querySelector('.form__ownership-inputs')
const property = document.querySelector('#property')
const nonProperty = document.querySelector('#non-property')
const cost = document.querySelector('.form__result-input')
const physical = document.querySelector('#physical')
const judical = document.querySelector('#judical')
let minSalary = 6700


nonProperty.addEventListener('change', payment)
property.addEventListener('change', payment)
debt.addEventListener('input', payment)
judical.addEventListener('change', payment)
physical.addEventListener('change', payment)
persData.addEventListener('input', personalData)
persAddress.addEventListener('input', personalAddress)


/* prevent entering negative numbers */
debt.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}
/* prevent entering numbers in text input*/
persData.onkeydown = function(e) {
  var key = e.keyCode;
  return ((key >= 65 && key <= 90) || key == 8 ||  key == 32);
};

function payment() {

  if (property.checked) {
    if ((debt.value * 0.02) <= (minSalary * 10)) {
      cost.innerHTML = (debt.value * 0.02).toFixed(2) + " грн"
      localStorage.setItem('cost',((debt.value * 0.02).toFixed(2)))
    } else if ((debt.value * 0.02) > (minSalary * 10)) {
      cost.innerHTML = (minSalary * 10) + " грн"
      localStorage.setItem('cost',(minSalary * 10))
    }
  } else if (nonProperty.checked) {
    if (physical.checked) {
      cost.innerHTML = minSalary + " грн"
      localStorage.setItem('cost',minSalary)
    } else if (judical.checked) {
      cost.innerHTML = minSalary * 2 + " грн"
      localStorage.setItem('cost',(minSalary * 2))
    }
  }  
}

function personalData(){
localStorage.setItem('personalData', persData.value)
}
function personalAddress(){
localStorage.setItem('personalAddress', persAddress.value)
}



