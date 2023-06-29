var data = ["anil", "harsh", "ram"];
data.push("sam"); //this will allow me to push string value
// data.push(100) 
/*it will not allow me to do so because
i am pushing number in array and during declaration there is no number present inside the array
therefore complier think that data array is collection of strings.
*/
console.log(data);
var arr = ["hello", "hii", 10, true, 100];
arr.push(100); /* now i can do both because during declaration both data types are present  */
arr.push(false);
var arr1 = ["hello", "hii"]; //this is a specific way to declaring string type of array
