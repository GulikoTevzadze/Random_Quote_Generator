const text = document.getElementById("qoute-text");
const button = document.getElementById("button");
const autore = document.getElementById("name");
const sound = document.getElementById("sound");
const copy = document.getElementById("copy");

button.addEventListener("click", randomQoute);
function randomQoute() {
  fetch("https://api.everrest.educata.dev/quote/random")
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
      text.innerHTML = `${result.quote}`;
      autore.innerHTML = `${result.author}`
    });
}
sound.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${text.innerHTML} by ${autore.innerHTML}`);
    speechSynthesis.speak(utterance);
})

copy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(`${text.innerHTML} autore:  ${autore.innerHTML}`)
})
