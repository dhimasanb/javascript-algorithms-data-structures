function User(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender;
}

let user1 = new User('Dhimas', 'Akbar', 18, 'male');

user1

User.prototype.emailDomain = '@gmail.com';

User.prototype.getEmailAddress = function() {
    return this.firstName + this.lastName + this.emailDomain;
}

user1.getEmailAddress();