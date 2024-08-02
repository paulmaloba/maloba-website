var texts = ["When you have time to do something, you're actuall doing it." ,
 "Ability can take you to the top, but it takes character to keep you there." ,
 "Geniups is 1%, 99% is hard work."
];
var changingText = document.getElementById("change");
changingText.textContent = texts[0];
var counter = 1;
function changeText(){
    changingText.textContent = texts[counter];
    counter = (counter + 1) %
    texts.length;
}
setInterval(changeText, 60000);