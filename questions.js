alert("text");

// let questions = [
//   isUnder18,
//   isOver18
// ];

let answer = prompt("How old are you?");

let isUnder18 = {
    text: "Are you under 18?",
    answers: {
      true: ["isOver18","isOver21","isOver60"],
      false: ["isUnder16","isPrimaryStudent"]
    }
}

let isOver18 = {
  text: "Are you over 18?",
  ifTrue: ["text"]
}

function removeQuestion(qs, qName) {
  let ind = qs.findIndex(qName)
  qs.slice(ind, 1)
};

let questions = [
  isUnder18,
  isOver18
];


// {
//     "is_under_18": {
//         "text": "Are you under 18?",
//         "format": "date",
//         "answers": {
//           "true": ["is_over_18","is_over_21","is_over_60"],
//           "false": ["is_under_16","is_primary_student"]
//         }
//     },
//     "is_over_18": {
//         "text": "Are you over 18?",
//         "format": "date",
//         "answers": {
//           "false": ["is_over_18","is_over_21","is_over_60"],
//           "true": ["is_under_16","is_primary_student"]
//         }
//     },
//     "is_under_16": {
//         "text": "Are you under 16?",
//         "format": "date",
//         "answers": {
//           "false": [],
//           "true": ["is_over_18","is_over_21"]
//         }
//     }
//   }