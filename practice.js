console.log(peopleInSpace)

const numberOfAstrosInSpace = (data) => {
  //return the number of astronauts in space right now, using the data
  return data.number;
}
console.log("number of people in space: ", numberOfAstrosInSpace(peopleInSpace))

const astroNames = (data) => {
  // return an array containing the name strings of the astronauts in space
  return data.people.map((person)=>{
	  return person.name;
  });
}

console.log("names of people in space: ", astroNames(peopleInSpace))


const allInSameCraft = (data) => {
  // return a boolean that specifies whether all astronauts are in the same space craft
  let craft = data.people[0].craft;
  for(let i = 1 ; i < data.people.length ; i++){
	  if(craft !== data.people[i].craft){
		  return false;
	  }
  }
  debugger;
  return true;
}
console.log("same craft? ", allInSameCraft(peopleInSpace))


const successfulResponse = (data) => {
  // return a boolean that specifies whether the response from the Open Notify API was successful
  return data.message === "success";

}
console.log("successful response? ", successfulResponse(peopleInSpace))


const wheresJoe = (data) => {
  // return "in space!" if Joe Acaba is in space right now. Otherwise, return "dunno."
  let response = "";
  data.people.forEach(person => {
	  if(person.name === "Joe Acaba"){
		  response = "in space!";
	  }
  });
  if(response) return response;
  else return "dunno";
}
console.log("where's Joe? ", wheresJoe(peopleInSpace))

// BONUS
// Using your astroNames function, dynamically render each of the astronauts' names to the DOM in an unordered list when the page loads.
