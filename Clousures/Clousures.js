function makefunc() {
  const name = "Dishant";
  function DisplayName() {
    console.log(name);
  }
  return DisplayName;
}
const myFunc = makefunc();
myFunc();
