var btnTranslator = document.querySelector("#btn-translator");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
    outputDiv.innerText = "translation Done" + textInput.value;
}

btnTranslator.addEventListener("click", clickHandler);
