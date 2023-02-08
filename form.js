const debtBlock = document.querySelector('#debtBlock')
const debt = document.querySelector('#debt')
const ownershipInputs = document.querySelector('.form__ownershipInputs')
const property = document.querySelector('#property')
const noneProperty = document.querySelector('#noneProperty')
const cost = document.querySelector('.form__result-input')
const physical = document.querySelector('#physical')
const judical = document.querySelector('#judical')
let minSalary = 6700


noneProperty.addEventListener('change', toggleData)
property.addEventListener('change', toggleData)
debt.addEventListener('input', payment)
judical.addEventListener('change', payment)
physical.addEventListener('change', payment)


function toggleData() {
  ownershipInputs.classList.toggle('hide')
  debtBlock.classList.toggle('hide')
  cost.innerHTML = ""
  debt.value = ""
}

function payment() {

  if (property.checked) {

    physical.checked = false;
    judical.checked = false;

    if ((debt.value * 0.02) <= (minSalary * 10)) {
      cost.innerHTML = (debt.value * 0.02).toFixed(2) + " грн"
    } else if ((debt.value * 0.02) > (minSalary * 10)) {
      cost.innerHTML = (minSalary * 10) + " грн"
    }
  } else if (noneProperty.checked) {
      if (physical.checked) {
      cost.innerHTML = minSalary + " грн"
    } else if (judical.checked) {
      cost.innerHTML = minSalary * 2 + " грн"
    }
  }
}



