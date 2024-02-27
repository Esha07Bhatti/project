var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("\nExercise # 1:");
//1. Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personalName = "Esha Bhatti";
var message = "Hello ".concat(personalName, ", Would you like to learn some python today? ");
console.log(message);
console.log("\nExercise # 2:");
//2.  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var nameCase = "Esha Bhatti";
//  first step to upper case
var uppercaseName = nameCase.toUpperCase();
console.log(uppercaseName);
//  second step to lower case
var LowercaseName = nameCase.toLowerCase();
console.log(LowercaseName);
//  third step to title case
var worlds = nameCase.split(" ");
var tiltecaseName = " ";
for (var i = 0; i < worlds.length; i++) {
    tiltecaseName += worlds[i].charAt(0).toUpperCase() + worlds[i].slice(1).toLowerCase() + " ";
}
;
console.log(tiltecaseName);
console.log("\nExercise # 3:");
// 3. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
var author = "Albert Einstein";
var quote = "Life is like riding a bicycle. To keep your balance, you must keep moving.";
console.log("".concat(author, " once said , \"").concat(quote, "\""));
console.log("\nExercise # 4:");
// 4.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.
// Storing the famous person's name in a variable called famous_person
var famous_person = "Albert Einstein";
//  Composing the message
var Message = "Did you know that \"".concat(famous_person, "\" was a renowned physicist and mathematician?");
console.log("Message : ", Message);
console.log("\nExercise # 5:");
//5. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personNameWithWhitespace = "\t\n  Esha Bhatti \n\t";
console.log("Name with whitespace:", personNameWithWhitespace);
// Stripping whitespace using trim()
var strippedName = personNameWithWhitespace.trim();
console.log("Stripped name:", strippedName);
console.log("\nExercise # 6:");
//6. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// You should create four lines that look like this:console.log(5 + 3)
var addition = 18 + 32;
console.log("Addition Result :", 18 + 32); //addition
var subtraction = 30 - 16;
console.log("Subtration Result: ", 30 - 16); //subtraction
var multiplication = 32 * 5;
console.log("Multiplication Result: ", 32 * 5); //Multiplication
var Division = 120 / 4;
console.log("Division Result:", 120 / 4); // Division
console.log("\nExercise # 7:");
//7. Favorite Number: Store your favorite number in a variable. Then, using that variable, 
// create a message that reveals your favorite number. Print that message.
var favoriteNumber = 4;
console.log("My favorite Number is : ".concat(favoriteNumber));
console.log("\nExercise # 8:");
//8. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point,
//just add your name and the current date at the top of each program file. 
//Then write one sentence describing what the program does.
// this program shows addition , subtraction , multiplication ,Division operators that show result in number 8
console.log("\noperators that show result in number 8: ");
console.log(4 + 4); //addition
console.log(10 - 2); //subtraction
console.log(2 * 4); //Multiplication
console.log(16 / 2); // Division
//This program stores the author's favorite number in a variable and then prints a message revealing the favorite number.
var favorite_number = 8; // store favorite number.
console.log("the author's favorite number is : ".concat(favorite_number)); // print the message with favorite number.
console.log("\nExercise # 9:");
//9. Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.
var names = ['Ammara', 'Saba', 'Sadia', 'Laiba', 'Maryam'];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
;
console.log("\nExercise # 10:");
//10. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.
var friends = ['Ammara', 'Saba', 'Sadia', 'Laiba', 'Maryam'];
// Define the message
var messages = "Hello, {name}! How are you.";
// Loop through each friend and print a personalized message
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    console.log(messages.replace("{name}", friend));
}
;
console.log("\nExercise # 11:");
//11. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores 
//several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportations = ['motorcycle', 'car', 'bus', 'bicycle'];
for (var _a = 0, transportations_1 = transportations; _a < transportations_1.length; _a++) {
    var transportation = transportations_1[_a];
    console.log("I would like to own a " + transportation + ".");
}
;
console.log("\nExercise # 12:");
//12 . Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at 
//least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Zarlish", 'Sadia', "Saba"];
var invetedMessage = "Hello Dear {Guest}, I would you like to invite for dinner tonight.";
for (var _b = 0, guestList_1 = guestList; _b < guestList_1.length; _b++) {
    var Guest = guestList_1[_b];
    console.log(invetedMessage.replace("{Guest}", Guest));
}
;
console.log("\nExercise # 13:");
//13 . hanging Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guest_List = ["Zarlish", "Saba", "Sadia"];
var invitationMessage = "Hello {guest}, I would like to invite to dinner tonight.";
console.log("original invition:");
for (var _c = 0, guest_List_1 = guest_List; _c < guest_List_1.length; _c++) {
    var guest = guest_List_1[_c];
    console.log(invitationMessage.replace("{guest}", guest));
}
;
var cantMakeIt = guest_List[2];
console.log("\n unfortunately ," + guest_List + "can't make it for dinner.\n");
var newGuest = "Ammara";
guestList[1] = newGuest;
console.log("Updated Invitation:");
for (var _d = 0, guestList_2 = guestList; _d < guestList_2.length; _d++) {
    var guest = guestList_2[_d];
    console.log(invitationMessage.replace("{guest}", guest));
}
;
console.log("\nExercise # 14:");
//14 . More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var GuestList = ["Zarlish", "Saba", "Sadia"];
var InvitationMessage = "Hello {guest}, I would like to invite to dinner tonight.";
console.log("original invition:");
for (var _e = 0, GuestList_1 = GuestList; _e < GuestList_1.length; _e++) {
    var guest = GuestList_1[_e];
    console.log(invitationMessage.replace("{guest}", guest));
}
;
var CantMakeIt = guest_List[2];
console.log("\n unfortunately ," + guest_List + "can't make it for dinner.\n");
var NewGuest = "Ammara";
guest_List[1] = NewGuest;
console.log("Updated Invitation:");
for (var _f = 0, GuestList_2 = GuestList; _f < GuestList_2.length; _f++) {
    var guest = GuestList_2[_f];
    console.log(InvitationMessage.replace("{guest}", guest));
}
;
console.log("\n good news ! We found a bigger dinner table\n");
GuestList.unshift("Laiba");
GuestList.splice(Math.floor(GuestList.length / 2), 0, "Seema");
GuestList.push("Asif");
console.log("Final Invitation:");
for (var _g = 0, GuestList_3 = GuestList; _g < GuestList_3.length; _g++) {
    var guest = GuestList_3[_g];
    console.log(InvitationMessage.replace("{guest}", guest));
}
;
console.log("\nExercise # 17:");
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestLists = [
    "Mubashir",
    "Asif",
    "Arslan",
    "Zahid",
    "Ahmad"
];
var invitationMessages = "Hello {guest}, I would like to  invited for a dinner tonight.";
console.log("Original Invitation");
for (var _h = 0, guestLists_1 = guestLists; _h < guestLists_1.length; _h++) {
    var guest = guestLists_1[_h];
    console.log(invitationMessages.replace("{guest}", guest));
}
while (guestLists.length > 2) {
    var removeGuest = guestLists.pop();
    console.log("\n Sorry ! " + removeGuest + " , we can't invited you to dinner.");
}
console.log("\n Invitations to the remaining two guests:");
for (var _j = 0, guestLists_2 = guestLists; _j < guestLists_2.length; _j++) {
    var guest = guestLists_2[_j];
    console.log(invitationMessages.replace("{guest}", guest));
}
guestLists.pop();
guestLists.pop();
console.log("\n Empty Guest Lists:");
console.log(guestLists);
console.log("\nExercise # 18:");
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var placeToVisit = [
    "Japan",
    "New Zealand",
    "China",
    "Korea",
    "Russia"
];
console.log("\n original order:");
console.log(placeToVisit);
console.log("\n alphabetical order :");
console.log(__spreadArray([], placeToVisit, true).sort());
console.log("\n original order after sorting :");
console.log(placeToVisit);
console.log("\n reverse alphabetical order:");
console.log(__spreadArray([], placeToVisit, true).sort().reverse());
console.log("\n original order after sorting:");
console.log(placeToVisit);
console.log("\n Reverse the order:");
placeToVisit.reverse();
console.log(placeToVisit);
console.log("\n back to  original order:");
placeToVisit.reverse();
console.log(placeToVisit);
console.log("\n Sorted in alphabetical order:");
console.log(placeToVisit.sort());
console.log("\n stored in alphabetical order:");
console.log(placeToVisit.sort().reverse());
console.log("\nExercise # 19:");
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating 
//the number of people you are inviting to dinner.
var DinnerGuests = [
    "Mubashir",
    "Asif",
    "Arslan",
    "Zahid",
    "Ahmad"
];
console.log("\n number of people invited to dinner :", DinnerGuests.length);
console.log("\nExercise # 20:");
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, 
//languages, or anything else you’d like. Write a program that creates a list containing these items.
var riversOfPakistan = [
    "Indus River",
    "Jhelum River",
    "Chenab River",
    "Ravi River",
    "Sutlej River",
    "Beas River",
    "Kunhar River",
    "Swat River",
    "Kabul River",
    "Kurram River"
];
console.log("\n the Famous Rivers of Pakistan:");
for (var _k = 0, riversOfPakistan_1 = riversOfPakistan; _k < riversOfPakistan_1.length; _k++) {
    var Rivers = riversOfPakistan_1[_k];
    console.log(Rivers);
}
;
console.log("\nExercise # 21:");
var book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925
};
var book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960
};
var book3 = {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949
};
console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);
console.log("\nExercise # 22:");
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
//Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Define an array of friends' names
var FriendsNames = ["Asma", "Bushra", "Zahid", "Daniyal", "Eman"];
// Try to print each person's name by accessing each element in the list, one at a time.
for (var i = 0; i <= FriendsNames.length; i++) {
    console.log(FriendsNames[i]); // Intentional error: changed "<=" to "<" to produce an index error
}
// Define an array of friends' names
var FriendsName = ["Asma", "Bushra", "Zahid", "Daniyal", "Eman"];
// Try to print each person's name by accessing each element in the list, one at a time.
for (var i = 0; i < FriendsName.length; i++) {
    console.log(FriendsName[i]); // Corrected condition to avoid index error
}
console.log("\nExercise # 23:");
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var a = 5;
var b = 10;
// Test 1: Is 'a' equal to 5? I predict True.
console.log("Is 'a' equal to 5? I predict True.");
console.log(a == 5);
// Test 2: Is 'b' equal to 10? I predict True.
console.log("Is 'b' equal to 10? I predict True.");
console.log(b == 10);
// Test 3: Is 'a' not equal to 'b'? I predict True.
console.log("Is 'a' not equal to 'b'? I predict True.");
console.log(a != b);
// Test 4: Is 'a' less than 'b'? I predict True.
console.log("Is 'a' less than 'b'? I predict True.");
console.log(a < b);
// Test 5: Is 'b' greater than 'a'? I predict True.
console.log("Is 'b' greater than 'a'? I predict True.");
console.log(b > a);
// Test 6: Is 'a' equal to '5'? I predict False.
console.log("Is 'a' equal to '6'? I predict False.");
console.log(a == 6);
// Test 7: Is 'a' less than or equal to 4? I predict False.
console.log("Is 'a' less than or equal to 4? I predict False.");
console.log(a <= 4);
// Test 8: Is 'b' greater than or equal to 20? I predict False.
console.log("Is 'b' greater than or equal to 20? I predict False.");
console.log(b >= 20);
// Test 9: Is 'b' not equal to 10? I predict False.
console.log("Is 'b' not equal to 10? I predict False.");
console.log(b != 10);
// Test 10: Is 'a' greater than 'b'? I predict False.
console.log("Is 'a' greater than 'b'? I predict False.");
console.log(a > b);
console.log("\nExercise # 24:");
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
console.log("\n Tests for equality and inequality with strings:");
var X = 6;
var Y = 5;
console.log(X == Y); //false
console.log(X != Y); //true
console.log("\n Tests using the lower case function:");
var condi1 = "HELLO";
var condi2 = "hello";
console.log(condi1.toLowerCase() == condi2.toLowerCase()); //true
console.log(condi1.toLowerCase() != condi2.toLowerCase()); //false
console.log("\n Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:");
var number1 = 5;
var number2 = 10;
console.log(number1 == number2, "number1 == number2");
console.log(number1 != number2, "number1 != number2");
console.log(number1 > number2, "number1 > number2");
console.log(number1 < number2, " number1 < number2");
console.log(number1 >= number2, " number1 >= number2");
console.log(number1 <= number2, "number1 <= number2");
console.log("\n Tests using 'and' and 'or' operators:");
var condition1 = true;
var condition2 = false;
console.log(condition1 && condition2); // False
console.log(condition1 || condition2); // True
console.log("\n  Test whether an item is in a array:");
var array = [1, 2, 3, 4, 5];
var item1 = 3;
var item2 = 2;
console.log(3 in [1, 2, 3, 4, 5]);
console.log(10 in [1, 2, 3, 4, 5]);
console.log("\n  Test whether an item is not in an array:");
var array2 = [1, 2, 3, 4, 5];
var Item1 = 3;
var Item2 = 2;
console.log(10 in [1, 2, 3, 4, 5]);
console.log(3 in [1, 2, 3, 4, 5]);
console.log("\nExercise # 25:");
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
console.log("\nVersion passes the if test");
var alien_color = "green";
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
console.log("\nVersion fail the if test");
var Alien_color = 'red';
if (Alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
console.log("\nExercise # 26:");
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
console.log("\nVersion passes the if block");
var alienColor = 'green';
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
console.log("\nVersion passes the else block");
var AlienColor = "blue";
if (AlienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
console.log("\nExercise # 27:");
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log("\n  the alien is green");
var Alien_Color = 'green';
if (Alien_Color === 'green') {
    console.log("Congratulations! on green You just earned 5 points.");
}
else if (Alien_Color === 'yellow') {
    console.log("Congratulations!  on yellow You just earned 10 points");
}
else if (Alien_Color === 'red') {
    console.log("Congratulations!  on red You just earned 15 points");
}
console.log("\n  the alien is yellow");
var alien_Color = 'yellow';
if (alien_Color === 'green') {
    console.log("Congratulations! on green You just earned 5 points.");
}
else if (alien_Color === 'yellow') {
    console.log("Congratulations!  on yellow You just earned 10 points");
}
else if (alien_Color === 'red') {
    console.log("Congratulations! on red You just earned 15 points");
}
console.log("\n the alien is red");
var aliens_color = 'red';
if (aliens_color === 'green') {
    console.log("Congratulations! on green You just earned 5 points.");
}
else if (aliens_color === 'yellow') {
    console.log("Congratulations! on yellow You just earned 10 points");
}
else if (aliens_color === 'red') {
    console.log("\nCongratulations! on red You just earned 15 points");
}
console.log("\nExercise # 28:");
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var age = 25;
if (age < 2) {
    console.log("\nThe person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("\nThe person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("\nThe person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("\nThe person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("\nThe person is an adult.");
}
else {
    console.log("\nThe person is an elder.");
}
console.log("\nExercise # 29:");
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = ['Mango', 'Orange', 'Grapes'];
if (favorite_fruits.includes('Banana')) {
    console.log("\nYou really like bananas!");
}
if (favorite_fruits.includes('Mango')) {
    console.log("\nYou really like Mango!");
}
if (favorite_fruits.includes('strawberry')) {
    console.log("\nYpu really like strawberries!");
}
if (favorite_fruits.includes('Grapes')) {
    console.log("\nYou really like Grapes!");
}
if (favorite_fruits.includes('Orange')) {
    console.log("\nYou really like Oranges!");
}
console.log("\nExercise # 30:");
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var usernames = ['admin', 'Eshan', 'hafeez', 'zeeshan', 'asif'];
for (var _l = 0, usernames_1 = usernames; _l < usernames_1.length; _l++) {
    var username = usernames_1[_l];
    if (username === 'admin') {
        console.log("\nHello admin, would you like to see a status report?");
    }
    else {
        console.log("\n Hello ".concat(username, ", thank you for logging in again."));
    }
}
console.log("\nExercise # 31:");
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var userNames = [];
if (userNames.length === 0) {
    console.log("\n We need to find some users!");
}
else {
    for (var _m = 0, userNames_1 = userNames; _m < userNames_1.length; _m++) {
        var userName = userNames_1[_m];
        if (userName === 'admin') {
            console.log("\nHello admin , would you like to see a status report?");
        }
        else {
            console.log("\n Hello ".concat(userName, ", thank you for logging in again."));
        }
    }
}
console.log("\nExercise # 32:");
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ['Esha', 'Sumera', 'Maria', 'Fatima', 'Faiza'];
var new_users = ['Umar', 'Sumera', 'Asad', 'Faiza', 'Fariya'];
for (var _o = 0, new_users_1 = new_users; _o < new_users_1.length; _o++) {
    var new_user = new_users_1[_o];
    var newuserExits = false;
    for (var _p = 0, current_users_1 = current_users; _p < current_users_1.length; _p++) {
        var current_user = current_users_1[_p];
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            var newuserExits_1 = true;
            break;
        }
    }
    if (newuserExits) {
        console.log("sorry! the username \"".concat(new_user, "\" is already Exits. Please Enter another username."));
    }
    else {
        console.log("The username \"".concat(new_user, "\" is available."));
    }
}
console.log("\nExercise # 33:");
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
console.log("\nOrdinal Numbers:");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _q = 0, numbers_1 = numbers; _q < numbers_1.length; _q++) {
    var number = numbers_1[_q];
    var ordinalEnding = void 0;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(number).concat(ordinalEnding));
}
console.log("\nExercise # 34:");
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var Fav_Pizzas = ['Fajita', 'BBQ chicken', 'spicy Beef'];
for (var _r = 0, Fav_Pizzas_1 = Fav_Pizzas; _r < Fav_Pizzas_1.length; _r++) {
    var Pizza = Fav_Pizzas_1[_r];
    console.log("I like ".concat(Pizza, " pizza."));
}
console.log("Pizza is one of my favorite foods. I really love pizza!");
console.log("\nExercise # 35:");
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ['Dog', 'Brids', 'Cat'];
console.log("\nNames of Animals:");
for (var _s = 0, animals_1 = animals; _s < animals_1.length; _s++) {
    var animal = animals_1[_s];
    console.log(animal);
}
console.log("\nstatement about each animal:");
for (var _t = 0, animals_2 = animals; _t < animals_2.length; _t++) {
    var animal = animals_2[_t];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
console.log("\n What these animals have in common:");
console.log("Any of these animal would make a great pet.");
console.log("\nExercise # 39:");
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
console.log("\n Name of a city and its country:");
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Tokyo", "Japan"));
console.log("\nExercise # 36:");
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//  The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function Make_shirt(size, message) {
    console.log("\nA ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
// Call the function
make_shirt("medium", "Hello, World!");
console.log("\nExercise # 37:");
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("\nA ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt("medium");
// Create a small shirt with a custom message
make_shirt("small", "Hello, World!");
console.log("\nExercise # 38:");
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
// Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");
console.log("\nExercise # 40:");
// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three album objects
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 12);
var album3 = make_album("Artist3", "Album3", 8);
// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);
console.log("\nExercise # 41:");
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
var magicianNames = ['alice', 'david', 'carolina'];
function show_magician(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        // Print the magician's name
        console.log(magicians[i]);
    }
}
show_magician(magicianNames);
console.log("\nExercise # 42:");
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
var MagicianNames = ['alice', 'david', 'carolina'];
function make_Great(magicians) {
    // Iterate over each magician's name in the array
    for (var i = 0; i < magicians.length; i++) {
        // Modify the magician's name by adding "the Great"
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_Magicians(magicians) {
    // Iterate over each magician's name in the array
    for (var i = 0; i < magicians.length; i++) {
        // Print the magician's name
        console.log(magicians[i]);
    }
}
console.log("\nExercise # 43:");
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to 
// show that you have one array of the original names and one array with the Great added to each magician’s name.
var magiciansNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
function make_great(magicians) {
    var modifiedMagicians = [];
    // Iterate over each magician's name in the array
    for (var i = 0; i < magicians.length; i++) {
        // Modify the magician's name by adding "the Great"
        modifiedMagicians.push("the Great " + magicians[i]);
    }
    return modifiedMagicians;
}
function show_magicians(magicians) {
    // Iterate over each magician's name in the array
    for (var i = 0; i < magicians.length; i++) {
        // Print the magician's name
        console.log(magicians[i]);
    }
}
var modifiedNames = make_great(__spreadArray([], magicianNames, true));
show_magicians(magiciansNames);
show_magicians(modifiedNames);
console.log("\nExercise # 44:");
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter 
// that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    console.log("Bread");
    // Print each item on the sandwich
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
    console.log("Bread");
    console.log("------------------------");
}
// Call the function three times with different number of arguments
orderSandwich("Cheese", "Tomato", "Lettuce");
orderSandwich("Turkey", "Bacon");
orderSandwich("Peanut Butter", "Jelly");
