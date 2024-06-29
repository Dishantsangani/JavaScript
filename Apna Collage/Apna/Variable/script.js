// simple object
const dev = {
  name1: "Dishant",
  age: 21,
  country: "India",
  language: "Javascript",
  hobby: `hello i am Web Developer Ai Engineer Dev Ops Engineer`,
};
console.log(dev);

// Prompt
let name = prompt("hello");
console.log(name);

const product = {
  name: "Parker Pen",
  rating: 4.5,
  offer: "10% off",
  price: 250,
  category: "Stationery",
  inStock: true,
};
console.log(
  `The ${product.name} costs ${product.price} and is in the ${product.category} category`
);

if (product.inStock) {
  console.log("The product is in stock");
} else {
  console.log("The product is out of stock");
}

const mobile = {
  name: "iPhone 12",
  price: 1000,
  brand: "Apple",
  color: "black",
  storage: 128,
  camera: "16MP",
  display: "6.7 inches",
};
function getProductDetails() {
  console.log(`
  Name: ${mobile.name}
  Price: ${mobile.price}
  Brand: ${mobile.brand}
  Color: ${mobile.color}
  Storage: ${mobile.storage}
  Camera: ${mobile.camera}
  Display: ${mobile.display}
  `);
}
getProductDetails();

const laptop = {
  name: "Lenovo",
  price: 100000,
  brand: "Lenovo",
  color: "black",
  storage: 128,
  camera: "16MP",
  display: "6.7 inches",
  offer: "10% off",
};

const Product = {
  title: "Ball Pen",
  rating: 4.5,
  offer: "5% off",
  price: 270,
};
console.log(Product);
typeof Product;

const Profile = {
  username: "@Dishant",
  isfollow: false,
  followers: 1000,
  following: 1000,
};
