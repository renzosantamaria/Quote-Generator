// Get code from API

let apiQuotes = []
let quote = document.getElementById('quote')
let author = document.getElementById('author')
let twitterBtn = document.getElementById('twitter-button')

//Show new quote
function newQuote() {
    const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    quote.textContent = randomQuote.text
    !randomQuote.author ? author.textContent = "Unknown" : author.textContent = randomQuote.author
    randomQuote.text.length >100 ? quote.classList.add('long-quote') : quote.classList.remove('long-quote')

}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {
        console.log('whoops, no quote', error)
    }

    return apiQuotes
    
}
//On load
getQuotes()


function tweetQuote() {

    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`
    window.open(twitterUrl, '_blank')
}
