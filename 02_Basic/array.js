         // ***** Array *****

         const myArray = [1,2,3,4,5,6,7]
        //  console.log(myArray)

         /*
         NOTE => 
            1- JavaScript arrays are resizable and can contain a mix of different data types. 
            2- JavaScript arrays are not associative arrays
            3- JavaScript arrays are zero-indexed
            4 - JavaScript array-copy operations create shallow copies. and Deep copies
                Shallow copies ------
                A shallow copy of an object is a copy whose properties share the same references 
                (point to the same underlying values)

                Deep Copies -------
                A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values)
                Push -- Add the array in last 
                Pop - delete the last add array
         */


                /* *** Example of Slice *******
                Does NOT change original array
                  Used to take/copy some elements

                */
                let fruits = ["Apple", "Banana", "Mango", "Orange"];

                   let result = fruits.slice(1, 3);
                   
                   console.log("slice result",result);
                   console.log("Orignal Array",fruits);


                   /*
                    ****** Example of Splice ****
                    Changes original array
                     Used to delete or insert elements

                   */
                  let fruit = ["Apple", "Banana", "Mango", "Orange"];
                      let results =   fruit.splice(1, 2);
                                         console.log("Splice Result",results);
                          console.log("Orignal Array",fruit);