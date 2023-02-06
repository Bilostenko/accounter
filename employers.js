
let employersArr = [{},{}]
employersArr[0].name = prompt('enter first name');
employersArr[0].sName = prompt('enter surname');
employersArr[0].age = +prompt('enter age');
employersArr[0].occupation = prompt('enter your occupation');
employersArr[0].show = function(){
  return alert(this.name + " " + this.sName + " " + this.age + " " + this.occupation)
}

employersArr[1].name = prompt('enter another first name');
employersArr[1].sName = prompt('enter another surname');
employersArr[1].age = +prompt('enter another age');
employersArr[1].occupation = prompt('enter another your occupation');
employersArr[1].show = function(){
  return alert(this.name + " " + this.sName + " " + this.age + " " + this.occupation)
}

employersArr[0].show();
employersArr[1].show();
