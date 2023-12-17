'use strict'

// Create a function called tellStory(). The function should accept an array of 3 strings as an argument: name, mood, activity(All strings) The function should return one big string with a story made from the arguments

const finishTheStory = (arrayOfStrings) => {
    return (`This is my friend ${arrayOfStrings[0]}. ${arrayOfStrings[0]} is a polite young man. Today he is feeling kind of ${arrayOfStrings[1]}. He has been ${arrayOfStrings[2]} all day. The end`);
}

const storyArrays = ["Fedor", "exhausted", "working"];
const finalizedStory = finishTheStory(storyArrays);
alert(finalizedStory);
