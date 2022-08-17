//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(listofdognames, dogstring){
    //Your code goes here
    let match  =  true;
    for(let name of listofdognames){
        
        if (dogstring.toLowerCase().match(name.toLowerCase())){
            console.log("Matched dog_name",name);
         } 
         else{
             console.log('No Matches',name)
         }
    } 
 //Call method here with parameters   
}
findWords(dog_names,dog_string)



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

function replaceEvenIndex(words){

    for (let i = 0; i < words.length; i ++){
        if (i % 2 == 0) {
            words.splice(i,1, 'even index');
        }
    }
    return words;
}

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
console.log(replaceEvenIndex(arr))

//Expected output

//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// CODEWAR PROBLEM #1
// # Convert boolean values to strings 'Yes' or 'No'.

// # def bool_to_word(boolean):
// #     if boolean == True:
// #         return "Yes"
// #     elif boolean == False:
// #         return "No"

function bool_to_word(boolean){
    if (boolean = True);
        return "Yes"
    elif (boolean = False);
        return "No"

}
let boolean = 0 ;
boolean(x);
console.log(bool_to_word(boolean))