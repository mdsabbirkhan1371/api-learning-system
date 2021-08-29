const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuate(data))
}
/*  for direct call loadQuote() */
const displayQuate = quate => {
    /* console.log(quate.quote) */
    const quateElement = document.getElementById('quote');
    quateElement.innerText = quate.quote;

}