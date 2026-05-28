const jsUser = {
    name: "Anuj Singh",
    age: 19,
    email: "arvind@test.com",
    city: "Lucknow",
    address: "Kamta"
}

// console.log(jsUser);
jsUser.address = "Ballia" // Change the value 
 console.log(jsUser);
Object.freeze(jsUser) // value fix fix not change 
jsUser.email = "anujsingh@test.com"
 console.log(jsUser);

// **** function ****
jsUser.getting = function () {
    console.log(`Hello sir, your name is ${this.name}`);
};

jsUser.getting();
