const array = [];
const num = +prompt('Number of employees');

for (let i = 1; i <= num; i++) {
    array[i] = {
        firstName: prompt('First Name ' + i + ' employee'),
        lastName: prompt('Last Name ' + i + ' employee'),
        age: +prompt('Age ' + i + ' employee'),
        occupation: prompt('Occupation' + i + ' employee'),
        show: function () {
            document.write('Employee ' + i + ": " + this.firstName + ', ' + this.lastName + ', ' + this.age + ', ' + this.occupation + "." + '<br>');
        }
    }
    array[i].show();

}
