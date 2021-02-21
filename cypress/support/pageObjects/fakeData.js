

 var faker = require('faker');
 var randomFirstName = faker.name.firstName();
 var randomFirstNameChange = faker.name.firstName()
 var randomLastName = faker.name.lastName();
 var randomEmail = faker.internet.email();
 var randomPassword = faker.internet.password();
 var randomFullName = `${randomFirstName} ${randomLastName}`
 var currentFullName = `${randomFirstNameChange} ${randomLastName}`

 export {faker, randomFirstName, randomLastName, randomEmail, randomPassword, randomFullName, randomFirstNameChange, currentFullName }