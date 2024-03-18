const quoteText = document.getElementById("quote");
const quoteGeneratorButton = document.getElementById("quote_generator_button");

quoteGeneratorButton.addEventListener("click", getQuote);

const API_URL = "https://type.fit/api/quotes";

window.onload = getQuote();

function getQuote() {
  fetch(API_URL)
    .then((res) => res.json())
    .then(
      (data) =>
        (quoteText.innerHTML =
          data[Math.floor(Math.random() * data.length)].text)
    );
}
