alert("text");

let isUnder18 = {
  text: "Are you under 18?",
  answers: {
    true: ["isOver18","isOver21","isOver60"],
    false: ["isUnder16","isPrimaryStudent"]
  }
}

let isOver18 = {
  text: "Are you over 18?",
  answers: {
    false: ["is_over_18","is_over_21","is_over_60"],
    true: ["is_under_16","is_primary_student"]
  }
}

let isUnder16 = {
  text: "Are you under 16?",
  answers: {
    false: [],
    true: ["is_over_18","is_over_21"]
  }
}
testList = ["car", "boat", "train", "plain"]
testNames = ["train", "boat"]

console.log("First Console --- " + testList)

function removeQuestions(qList, qNames) {
  qNames.forEach(qName => {
    console.log(qList.slice(qList.indexOf(qName), 1))
    // qList = qList.slice(qList.indexOf(qName), 1)
  });
}

removeQuestions(testList, testNames)

console.log("Second Console --- " + testList)

let questions = [
  isUnder18,
  isOver18,
  isUnder16
];

let answer = prompt(isUnder18.text);
