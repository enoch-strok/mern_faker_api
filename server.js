//_____________________________________/Dependencies\_________________________________//
const express = require('express');
const faker = require('faker');
const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//_____________________________________/Variables\_________________________________//
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

//_____________________________________/Classes\_________________________________//
class Product {
    constructor() {
        this.name = faker.commerce.productName();
        this.price = `${faker.commerce.price()}`;
        this.department = faker.commerce.department();
    }
}
console.log(new Product());

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
console.log(new User());

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    };
};
console.log(new Company());

//_____________________________________/Routes\_________________________________//

app.get("/api/users", (req, res) => {
    res.json( users );
});

//Get New User
app.get("/api/users/new", (req, res) => {
    let newUser = new User();
    res.json( newUser );
});

app.get("/api/companies/new", (req, res) => {
    let newCompany = new Company();
    res.json( newCompany );
});


app.get("/api/user/company", (req, res) => {
    let newUser = new User();
    let newCompany = new Company();
    res.json({ 
        User: newUser, 
        Company: newCompany });
});


//_____________________________________/Route Type Examples\_________________________________//
//Get Data from URL
app.get("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json( users[req.params.id] );
});

//Update Data
// app.post("/api/users", (req, res) => {
//     // req.body will contain the form data from Postman or from React
//     console.log(req.body);
//     // we can push it into the users array for now...
//     // later on this will be inserted into a database
//     users.push(req.body);
//     // we always need to respond with something
//     res.json( { status: "ok" } );
// });


// Deleting Data
// app.delete("/api/users/:id", (req, res) => {
//     // we can get this `id` variable from req.params
//     const id = req.params.id;
//     // assuming this id is the index of the users array we can remove the user like so
//     users.splice(id, 1);
//     // we always need to respond with something
//     res.json( { status: "ok" } );
// });
















//_____________________________________/Port Listen Test\_________________________________//

app.listen(8080, () => {
    console.log('App is running well on port 8080!');
})