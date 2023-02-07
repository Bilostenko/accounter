const debtBlock = document.querySelector('#debtBlock')
const debt = document.querySelector('#debt')
const ownershipInputs = document.querySelector('.form__ownershipInputs')
const property = document.querySelector('#property')
const noneProperty = document.querySelector('#noneProperty')
const cost = document.querySelector('.form__result-input')
let minSalary = 6700
let commission = debt.value*0.02


noneProperty.addEventListener('change', toggleData)
property.addEventListener('change', toggleData)
debt.addEventListener('input', payment)


function toggleData() {
  ownershipInputs.classList.toggle('hide')
  debtBlock.classList.toggle('hide')
  cost.innerHTML = ""
}

function payment(){

}