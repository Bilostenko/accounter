const array = [];
const num = +prompt('Enter the number of employees');

for (let i = 1; i <= num; i++) {
    array[i] = {
        firstName: prompt('Enter First Name ' + i + ' employee'),
        lastName: prompt('Enter Last Name ' + i + ' employee'),
        age: +prompt('Enter age ' + i + ' employee'),
        occupation: prompt('Enter occupation' + i + ' employee'),
        show: function () {
            document.write('Employee ' + i + ": " + this.firstName + ', ' + this.lastName + ', ' + this.age + ', ' + this.occupation + "." + '<br>');
        }
    }
    array[i].show();

}
