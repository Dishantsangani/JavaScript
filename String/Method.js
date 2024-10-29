let name = "dishant";
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(2,4));
// console.log(name.replace("dishant", "harry"));

// concat method in js
// let friend = "naman";
// console.log(name.concat("is a friend of", friend));

//trim methods  in js
// let friend2 = "           meena           ";
// console.log(friend2);
// console.log(friend2.trim());

//fr method is js
// let fr = "shivika";
// console.log(fr[0]);
// console.log(fr[0]);
// let i = "shivika";

// substring in js
// let str = "dishant";
// console.log(str.substring(1,5));

//padstart in js
// let a = 5;
// console.log(a.PadStart(4, "x"));

// chatat in js
// let a = "hello";
// console.log(a.charAt(0));

//split in js
// let a = "dishant";
// console.log(a.split(""));

//

//string are a inmutable means it cannot change

// 1.str.toUpperCase() => new string crate and change new value
// 2.str.toLowerCase() =>lowercase value all
// 3.str.trim() =>Remove Whitespaces
// 4.str.slice(start,end)=>Returns part of string
// 5.str1.concat(str2)=>Joins str2 with str1
// 6.str.replace(searchval,newval)=>F
// 7.str.charAt(idx)

// 1.str.upercase()
// let str = "Apna collage";
// let newstr = str.toUpperCase();
// console.log(str);
// console.log(newstr);

// 2.str.lowercase()
// let str = "APNA COLLAGE";
// let newstr = str.toLowerCase();
// console.log(newstr);
// console.log(str);

// 3.str.trim()
// let str = "   dishant   sangani     ";
// let newstr = str.trim();
// console.log(str.trim());
// console.log(newstr);

//4.str.slice(start,end)
// let str ="0123456789"
// console.log(str.slice(1,6))

//5.str.concat()
// let str1 = "apna";
// let str2 = "collage";
// let res = str1.concat(str2);
// console.log(res);

//6.str.replace(searchVal,newVal)
// let str = "hello";
// console.log(str.replace("h", "y"));

//7.str.charAt(idx)
// let str = "IloveJs";
// console.log(str.charAt());

//
// String
let str = "dishant sangani";
let str1 = "Apna Collage";

// String length
let dev = "Dishant sangani";
dev.length;
console.log(dev[[5]]);

// Template literals
let obj = {
  item: "pencil",
  price: 10,
};
console.log(`The ${obj.item} costs ${obj.price}`);
let spacialstring = `This is a template literal`;
console.log(typeof spacialstring);

// escap character
let specialChar = "\n \t \b \r \f";
console.log(specialChar);

// String methods
let str2 = "Dishant";
// str2.toUpperCase();
console.log(str2.toUpperCase());

// str2.toLowerCase();
console.log(str2.toLowerCase());

// str2.trim()
let dev1 = "    dishant sangani   ";
console.log(dev1.trim());

//slice
let dev2 = "Dishant";
console.log(dev2.slice(0, 8));

//concat
let dev3 = "apna";
let dev4 = "collage";
// let res = dev3.concat(dev4);
let res = "i am learing coding from " + dev3 + " " + dev4;
console.log(res);

//replace
let dev5 = "hello";
console.log(dev5.replace("lo", "p"));

//replaceAll
let dev6 = "hellololo";
console.log(dev6.replaceAll("lo", "p"));

// charat
let dev7 = "ilovejs";
console.log(dev7.charAt(5));
