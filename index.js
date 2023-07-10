// code your solution here

/* 
LAB: Implement a function called saturdayFun. It should return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "roller-skate". Run npm test to verify you've gotten the first set of tests passing before continuing with the lesson.



LAB: Implement a function expression called mondayWork. The function should return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office". Run npm test to verify you've gotten this set of tests passing before continuing with the lesson.

Implement a function called wrapAdjective:

It should return a function. This "inner" function should:
take a single parameter that should default to "special". Name it however you wish.
return a String of the form "You are ...!" where ... should be the adjective this function received wrapped in visual flair.
It should take as parameter a String that will be used to create visual flair.
You may call the parameter whatever you like, but its default value should be "*".
Call example: const encouragingPromptFunction = wrapAdjective("!!!")

*/

function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to " + activity + "!"
}

function mondayWork(activity="go to the office") {
    return "This Monday, I will " + activity + "."
}

function wrapAdjective(flair) {
    return function (adjective = "special") {
        return "You are " + flair + adjective + flair + "!"
    }
}