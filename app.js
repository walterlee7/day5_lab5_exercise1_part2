// Make a button appear on the page when it's first loaded. 
// The button cannot already be in your html. 
// When the button is clicked, you should display an Alert box with any (nice) message.

let button = 'I am a button!';
$('<button>' + button + '</button>').appendTo('#button');
$('#button').click( () => {
    alert('Have A Good One!');
})

// Make a button and text box (you can just put them in your HTML). 
// When the button is clicked, display an alert with the message 
// that is typed in the text box.

let newbutton = 'I am a new button!';
let textarea = "Type text here";

$('<button>' + newbutton + '</button>').appendTo('#newbutton');
$('<TEXTAREA id="textarea_input">' + textarea + '</TEXTAREA>').appendTo('#textarea');

$('#newbutton').click( () => {
    let newtext = $('#textarea_input').val();
    alert(newtext);
})

// Create a div in HTML. Without using CSS :hover, 
// make the div change to a different background color 
// when your mouse hovers over it. The div should return 
// to its original color when the mouse exits the div.

$('<div id="hoverdiv">' + "New DIV" + '</div>').appendTo(document.body);

$('#hoverdiv').mouseenter(function () {
    $('#hoverdiv').css({ 'background-color': 'lightblue' });
})

$('#hoverdiv').mouseleave(function () {
    $('#hoverdiv').css({ 'background-color': 'red' });
})

// Put some text in a paragraph. Make it where when you click on the paragraph, 
// the color of the text switches to red. Once you get that working, 
// try to rewrite your code to make it switch to a random color 
// each click (you don't have to show the code for 
// just red once you get random working).

let pText = "Wishing for something does not make it so!";
$('<p id="ptext">' + pText + "</p>" ).appendTo(document.body);
$('#ptext').click( () => {
    let allchar = "0123456789ABCDEF";
    let randcol = "";

    for (let i = 0; i < 6; i++) {
        randcol += allchar[Math.floor(Math.random() * 16)];
    }

    $('#ptext').css({ 'background-color': '#' + randcol});
})

// Add a button and an empty div. When the button is clicked, 
// add a span that contains your name to the empty div.

$('<button id="namebutton">' + "Name Button" + '</button>').appendTo(document.body);
$('<div id="emptydiv"></div>').appendTo(document.body);
$('#namebutton').click( () => {
    $('<span>' + "Walt, " + '</span>').appendTo('#emptydiv');
})

// Create a button and a ul in your HTML. In JavaScript, create an array 
// containing the names of your friends (at least 10. 
// If you don't have that many, include your imaginary ones). 
// When the button is clicked, add each friend's name as an li to the ul on the page.

$('<button id="friendbutton">' + "Friend Button" + '</button>').appendTo(document.body);
$('<ul id="list"></ul>').appendTo(document.body);
let friends = ['Black', 'Blue', 'Red', 'Orange', 'Yellow', 'White', 'Green', 'Pink', 'Gold', 'Silver'];
let i = 0;
$('#friendbutton').click( () => {
    if (i < friends.length) {
        $('<li>' + friends[i] + '</li>').appendTo('#list');
        i++;
    }
});