let countNumber = 99
console.log(typeof countNumber);

let conversion = "99abd"
console.log(typeof conversion)
let valueInNumber = Number(conversion)
console.log(typeof valueInNumber)
console.log(valueInNumber)

/* 
this line of code means that when we define a String and convert into a Number and after check
its datatype its give a number and and its value show NAN --- means [Not A Number] 
*/

/*
NOTE --- giving a NUll is value is = 0
and Giving Unefine its value is = NAN
 */

               // ********** coversion operation *************

                   console.log("1" + 2) // output is 12
                   console.log("1"+ 2 + 3) // output is 123
                   console.log(1 + 3 + "3") // output is 43
 /*
 NOTE when we add string the output is print as same not add
 and you give the string in last then first add and print as well as that have mention in above example
 
 */


                   // ******* STRING *************

               const name = "Anuj Singh"
                const address = " Lucknow"

                  console.log(`this is my name ${name} and my address is ${address}`)

      /*
                 when we add two string using in mordern ways like using String Interpolation
         */


                         const gameName = new String("anujsingh")
                         console.log(gameName)
                         console.log(gameName.toLowerCase())
                         console.log(gameName.toUpperCase())
                         console.log(gameName.slice(-8 ,4))
                         console.log(gameName.substring(2 ,10))



                  // ****** Maths *********
                  console.log(Math)
                  console.log(Math.random())
                  console.log(Math.floor(Math.random()))