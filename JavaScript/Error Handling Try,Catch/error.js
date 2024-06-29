setTimeout(() => {
  console.log("hacking wifi.......");
}, 1000);
try {
  setTimeout(() => {
    console.log(rahul);
  }, 1000);
} catch (error) {
  console.log("bale bale" + error);
}
setTimeout(() => {
  console.log("fetching username and password...");
}, 2000);
setTimeout(() => {
  console.log("hacking rahul facebook id.......");
}, 3000);
setTimeout(() => {
  console.log("username and password of rahul fetch .....please wait...");
}, 4000);

// new  using Try And Catch
async function mydata(){
  try {
    const sp1 = await step1();
    console.log(sp1);
    const sp2 = await addMaterial();
    console.log(sp2);
    const sp3 = await addMilk();
    console.log(sp3);
    const sp4 = await drink();
    console.log(sp4);
  } catch (error) {
    console.log(error);
  }
}

