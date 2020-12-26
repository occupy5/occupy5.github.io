// This function puts the words from the form into the story
function fillBlanks() {
  document.querySelector("body").classList.add("show-story");
  
  // This gets all of the <input> elements
  var inputElements = document.querySelectorAll("input");

  // This goes through each <input> one at a time, 
  // finds a matching <span> element, and sets the text of the
  // <span> to the value in the <input>.
  for(var i = 0; i < inputElements.length; i++) {
    var inputElement = inputElements[i];
    var inputName = inputElement.getAttribute("name");
    var inputValue = inputElement.value || "???";
    document.querySelector(".story ." + inputName).innerText = inputValue;
  }
}

// Go back from the story to the form
function goBack() {
  document.querySelector("body").classList.remove("show-story");
}

// Clear the form fields
function resetForm(){
  document.querySelector("form").reset();
}</span></span>