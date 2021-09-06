var btnTranslator = document.querySelector("#btn-translator");
var textInput = document.querySelector("#text-input");

function clickHandler() {
    console.log("clicked");
    console.log("input",textInput.value)
}

btnTranslator.addEventListener("click", clickHandler);
