// 1.Create a new empty array literal and assign it to the variable clothes.
// 2.Add 5 of your favorite items of clothing as strings using the push() method.
// 3.Remove the fifth piece of clothing from the array using the pop() method.
// 4.Add a new piece of clothing using the push() method.
// 5.Use console.log to show the third item from the clothes array in the console.

var clothes = [];
clothes.push("shirt");
clothes.push("pants");
clothes.push("socks");
clothes.push("stole");
clothes.push("cap");
clothes.pop();
clothes.push("coat");
console.log(clothes[2]);

