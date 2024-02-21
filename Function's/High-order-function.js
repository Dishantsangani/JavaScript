const interviewqs = (name) => {
  if (name === "vinod") {
    return function (topic) {
      console.log(`hi ${name}. what is ${topic}?.plz explian us`);
    };
  }
  if (name === "thaapa") {
    return function (topic) {
      console.log(`hi ${name}. what is ${topic}?.plz explian us`);
    };
  }
  if (name === "devs") {
    return function (topic) {
      console.log(`hi ${name}. what is ${topic}?.plz explian us`);
    };
  } else {
    return function () {
      console.log("welcome to interviwe");
    };
  }
};

// interviewqs("vinod")("UI");
// interviewqs("thapa")("full Stack Developer");
// interviewqs("devs")("fontend developer");

const cand1 = interviewqs("vinod");
cand1("UI");
cand1("Ux");
cand1("js");
