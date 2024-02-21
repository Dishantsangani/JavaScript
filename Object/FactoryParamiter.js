function mobile(model_no) {
  return {
    model: model_no,
    price: function () {
      return "This Model Price is Rs = 30,000";
    },
  };
}
var samsung = mobile("Galaxy M13");
console.log(samsung.model + "\n" + samsung.price());
