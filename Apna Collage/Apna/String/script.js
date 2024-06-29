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
