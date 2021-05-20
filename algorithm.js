

try{

  console.log(checkYuGiOh(100));  
  console.log(convertFahrToCelsius({temp:0}));

}catch(err){

    console.log(err.message);

}


/* 
 *  A function that takes a single parameter 
 *  and converts it to celsius   
 */

function convertFahrToCelsius(fahr){

    let result;
        
    //Checking if parameter contains an object or array value

    if(typeof fahr === "object"){

         let theobj = JSON.stringify(fahr);

        if(Array.isArray(fahr) === true){

           result = `${theobj} is not a valid number but a/an array.`;

        }

        if(Array.isArray(fahr) === false){


           result = `${theobj} is not a valid number but a/an ${typeof fahr}.`;

        }        


    }

    //Checking if parameter is undefined

    if(typeof fahr === "undefined"){

        result = `${fahr} is not a valid number but a/an ${typeof fahr}.`;

    }

    //Checking if parameter contains a boolean value

    if(typeof fahr === 'boolean'){

        result = `${fahr} is not a valid number but a/an ${typeof fahr}.`;

    }

    //Checking if parameter contains a number value

    if( typeof fahr === "number" ){

        const celsius = (fahr - 32) * 5/9;

        result = celsius.toFixed(4);
    }

    //Checking if parameter contains a string value

    if( typeof fahr === "string" ){

        if(isNaN(fahr)){

            result = `${fahr} is not a valid number but a/an ${typeof fahr}.`;

        }


        if(fahr.length == 0){

            result = `${fahr} is not a valid number but a/an ${typeof fahr}.`;

        }


        if(!isNaN(fahr) && fahr.length > 0){

            const celsius = (fahr - 32) * 5/9;

            result = celsius.toFixed(4);

        }
    }

    return result;

    console.log(result);

    
}

/* 
 *  A function that takes a number, n as an argument, 
 *  creates an array of numbers from 1 to n and replaces
 *  multiples of 2, 3 and 5 with "yu", "gi" and "oh"
 *  and then returns the resulting array
 */

function checkYuGiOh(n){
   
    
    const numbers = [];
    
    if(!isNaN(JSON.stringify(n))){

        for(let i = 1; i <= n; i++){

            if(i%2 == 0 && !(i%3 == 0 || i%5 == 0)){

                numbers.push('yu');            

            }else if(i%3 == 0 && !(i%2 == 0 || i%5 == 0)){

                numbers.push('gi');            

            }else if(i%5 == 0 && !(i%2 == 0 || i%3 == 0)){

                numbers.push('oh');            

            }else if(i%2 == 0 && i%3 == 0 && !(i%5 == 0)){

                numbers.push('yu-gi');            

            }else if(i%2 == 0 && i%5 == 0 && !(i%3 == 0)){

                numbers.push('yu-oh');            

            }else if(i%2 == 0 && i%3 == 0 && i%5 == 0){

                numbers.push('yu-gi-oh');            

            }else if(i%3 == 0 && i%5 == 0 && !(i%2 == 0)){

                numbers.push('gi-oh');            

            }else{

                 numbers.push(i);
            }
        }
    
    }else{

        return `invalid parameter: ${JSON.stringify(n)}`;
    }
    return numbers;    

}
