// when a function returns an object ,we call ir
function mobile() {
  return {
    model: "galaxy",
    price: function () {
      return "price Rs.30000";
    },
  };
}
var samsung = mobile();
console.log(samsung.model + "" + samsung.price());
