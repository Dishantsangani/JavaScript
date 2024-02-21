function getdata(dataId, getnextdata) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getnextdata) {
      getnextdata();
    }
  }, 2000);
}
// callback hell
getdata(1, () => {
  console.log("Hi dishant How are you");
  getdata(2, () => {
    console.log("Hi apnacollage How are you");
    getdata(3, () => {
      console.log("Hi shivika How are you");
      getdata(4);
    });
  });
});
