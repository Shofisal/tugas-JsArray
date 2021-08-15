let tweets = ["Hari ini aku pergi", "Aku mengerjakan sebuah project", "Aku sedang makan"]
let tweetContainer = document.getElementById("tweet1")

for (let tweet1 of tweets) {
    console.log(tweet1)
    tweetContainer.innerHTML += `<p>${tweet1}</p>`
}

let tweet = document.getElementById("tweet")
let sbmtkirim = document.getElementById("sbmt")

sbmtkirim.onclick = submit

function submit() {
    let text = tweet.value
    console.log(text)
}

tweets.push(tweet.value)
console.log(tweets)

