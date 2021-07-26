// GET https://raw.githubusercontent.com/stodd3/Day-19-jsonAssignment/main/jsonassignment.json

fetch('https://raw.githubusercontent.com/stodd3/Day-19-jsonAssignment/main/jsonassignment.json')
  .then((response) => response.json())
  .then((json) => console.log(json));

// Output

/* {
  assignment: "Day 19 - JSON API Tutorial Assignment",
  date: "07/26/2020",
  firstName: "Sara",
  lastName: "Todd",
  profileURL: "https://github.com/stodd3",
  school: "Tech Talent South"
} */