function capitalize(string) {

    //Using Split function to convert the string to an array called parts.
    var parts = string.split(" ");

    //Iterate over the array, i indicates the part of the array.    
    for (var i = 0; i < parts.length; i++) {

        //Making a new variable to store the first letter and uppercase it.
        var firstLetter = parts[i][0].toUpperCase();

        //Updating array with uppercase letter, adding substracted part of the string from position 1,lowercase in the event that the user added only uppercase letters.
        parts[i] = firstLetter + parts[i].substr(1).toLowerCase();
    }
    //Joining the array back into a string and returning it.
    return parts.join(" ");
}
console.log(capitalize('hello world'));