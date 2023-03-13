// Inside the loop, write an if-else statement, which will check the following conditions:
// if the value of i is 1. If it is, your code will console log the string "Gold medal".
// if the value of i is 2. If it is, your code will console log the string "Silver medal".
// if the value of i is 3. If it is, it will console log the string "Bronze medal".
// For all the remaining values of i, your code will console log just the value of i.

var i=0;
while(i<10){
    i++;
    if(i==1){
        console.log("Gold medal");
    }
    else if(i==2){
        console.log("Silver medal");
    }
    else if(i==3){
        console.log("Bronze medal");
    }
    else{
        console.log(i);
    }
}
