var btnTranslator = document.querySelector("#btn-translator");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL +"?" +"text=" +text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("Sorry, something went wrong with server try after some time!")
}

function clickHandler() {
    //outputDiv.innerText = "translation Done" + textInput.value;
    var inputText= textInput.value;

    fetch(getTranslationURL(inputText))
        .then(response=>response.json())
        .then(json=>{
            var translatedText=json.contents.translated
            outputDiv.innerText=translatedText
        })
        .catch(errorHandler)
    
}


btnTranslator.addEventListener("click", clickHandler);
