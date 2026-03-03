// code your solution here
//function with default activity of roller skating 
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}   
//function with default activity of go to the office
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
} 
//function that takes a string as an argument and returns a function that wraps an adjective in a highlight
function wrapAdjective(highlight) {
    return function(adjective) {
        return `You are ${highlight}${adjective}${highlight}!`;
    }
}
  

