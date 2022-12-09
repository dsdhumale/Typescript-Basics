var names = ["Devendra", "Suchit", "Pratik", "Aniket"];
console.log("Array", names);
names.push("Kunal");
console.log("Array push", names);
// names.push(45)      if push number throws error
names.pop();
console.log("Array pop", names);
// By using any we can make array of any data type
var age = [45, true];
console.log("age array ", age);
age.push("Kunal");
age.push(null);
age.push(undefined);
console.log("age array ", age);
age[0] = 46;
console.log("age array after replacing 46 in 1st position", age);
var apps = [45, true];
console.log("apps array", apps);
// apps.push("Kunal")       throws error becoz we adding string data it only accept number and boolean
